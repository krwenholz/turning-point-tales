import Logger from 'js-logger';
import config from 'config';
import request from 'request-promise-native';
import url from 'url';
import {
  patreon as patreonApi,
  oauth as patreonOAuth,
  jsonApiUrl as patreonApiUrl
} from 'patreon';

const patreonOAuthClient = patreonOAuth(config.get('patreon.client.id'), config.get('patreon.client.secret'));

function get(req, res) {
  const oauthGrantCode = req.query.code;

  const userData = {};

  return request
    .post({
      url: 'https://www.patreon.com/api/oauth2/token' +
        `?code=${req.query.code}` +
        '&grant_type=authorization_code' +
        `&client_id=${config.get('patreon.client.id')}` +
        `&client_secret=${config.get('patreon.client.secret')}` +
        `&redirect_uri=${config.get('patreon.redirect')}`,
      json: true,
    })
    .then((tokensResponse) => {
      Logger.debug("Successfully retrieved Patreon tokens", tokensResponse);
      req.session.patreonTokens = {
        accessToken: tokensResponse.access_token,
        refresh_token: tokensResponse.refresh_token,
        expires_in: tokensResponse.expires_in,
        scope: tokensResponse.scope,
        tokenType: tokensResponse.token_type,
      };

      return request.get({
        url: 'https://www.patreon.com/api/oauth2/v2/identity?' +
          'include=memberships' +
          `&${encodeURIComponent('fields[user]')}=first_name,thumb_url`,
        headers: {
          'authorization': `Bearer ${tokensResponse.access_token}`
        },
        json: true
      });
    })
    .then((userResponse) => {
      Logger.debug('Successfully fetched user information', userResponse.data);

      const memberships = userResponse.included.filter((data) => data.type == 'member');
      if (!memberships) {
        // TODO(kyle): Do this better
        Logger.error('Not a patron', userResponse.data.id);
        res.writeHead(403);
        res.end('Sorry! Looks like you are not a patron yet.');
        return;
      }

      userData.patreonId = userResponse.data.id;
      userData.patreonThumbUrl = userResponse.data.attributes.thumb_url;
      userData.firstName = userResponse.data.attributes.first_name;

      const memberId = memberships[0].id

      return request.get({
        url: `https://www.patreon.com/api/oauth2/v2/members/${memberId}?` +
          encodeURIComponent('fields[member]') + '=patron_status&' +
          'include=currently_entitled_tiers&' +
          encodeURIComponent('fields[tier]') + '=title',
        headers: {
          'authorization': `Bearer ${config.get('patreon.client.accessToken')}`
        },
        json: true
      });
    }).then((campaignInformation) => {
      Logger.debug('Campaign shit', JSON.stringify(campaignInformation));
      const tiers = campaignInformation.included.filter((include) => include.type === 'tier');
      const tier = campaignInformation.data.relationships.currently_entitled_tiers.data
        .map((etier) => tiers.filter((tier) => tier.id === etier.id)[0].attributes.title)
        .filter((etier) => config.get('patreon.tiers').includes(etier))[0];

      if (campaignInformation.data.attributes.patron_status !== 'active_patron' || !tier) {
        // TODO(kyle): Do this better
        Logger.error('Not a patron', userData.patreonId);
        res.writeHead(403);
        res.end('Whoops! Looks like you are not a patron of a known tier.');
        return;
      }

      req.session.tier = tier;
      userData.tier = tier;

      res.cookie('user', userData, {
        domain: config.get('server.domain'),
        httpOnly: false,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        sameSite: 'lax',
        secure: !config.get('dev'),
      });

      res.writeHead(302, {
        Location: '/?user=set'
      });
      return res.end();
    })
    .catch((error) => {
      Logger.error('Patreon error', error.message);
      res.writeHead(302, { Location: '/auth/login_failed' });
      res.end();
      return;
    });
}

export {
  get
}
