import Logger from 'js-logger';
import config from 'config';

function get(req, res) {
  const url = 'https://www.patreon.com/oauth2/authorize?response_type=code'
    + `&client_id=${config.get('patreon.client.id')}`
    + `&redirect_uri=${config.get('patreon.redirect')}`
    + `&state=${req.csrfToken()}`;
  res.writeHead(301, { Location: url, 'Cache-Control': 'no-store' });
  return res.end();
}

export {
  get
}
