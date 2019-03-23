import Logger from 'js-logger';
import config from 'config';
import request from 'request-promise-native';
import url from 'url';
import { patreon as patreonApi, oauth as patreonOAuth, jsonApiUrl as patreonApiUrl } from 'patreon';

const patreonOAuthClient = patreonOAuth(config.get('patreon.client.id'), config.get('patreon.client.secret'));

function get(req, res) {
  const oauthGrantCode = req.query.code;

  return request
    .post({
      url: 'https://www.patreon.com/api/oauth2/token'
      + `?code=${req.query.code}`
      + '&grant_type=authorization_code'
      + `&client_id=${config.get('patreon.client.id')}`
      + `&client_secret=${config.get('patreon.client.secret')}`
      + `&redirect_uri=${config.get('patreon.redirect')}`,
      json: true,
    })
    .then((tokensResponse) => {
      req.session.patreonTokens = {
        accessToken: tokensResponse.access_token,
        refresh_token: tokensResponse.refresh_token,
        expires_in: tokensResponse.expires_in,
        scope: tokensResponse.scope,
        tokenType: tokensResponse.token_type,
      };

      return request.get({
        url: 'https://www.patreon.com/api/oauth2/api/current_user',
        headers: {
          'authorization': `Bearer ${tokensResponse.access_token}`
        },
        json: true,
      }).then((userResponse) => {
        Logger.debug('Successfully fetched user information');
        const user = userResponse.data.attributes;

        // TODO(kyle): Verify it's our campaign
        req.session.paidUp = true;
        req.session.patreonId = userResponse.data.id;

        res.cookie('user', {
          patreonId: userResponse.data.id,
          patreonThumbUrl: user.thumb_url,
          firstName: user.first_name,
          email: user.email,
        }, {
          domain: config.get('server.domain'),
          httpOnly: false,
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
          sameSite: 'lax',
          secure: !config.get('dev'),
        });

        res.writeHead(302, { Location: '/?user=set' });
        return res.end();
      })
      .catch((error) => {
        Logger.error('Patreon error', error.message);
        res.writeHead(500);
        res.end('Sorry! Looks like something went wrong authenticating with Patreon. Please try again or contact support at support@turningpointtales.com.');
      });
    });
}

export {
  get
}
