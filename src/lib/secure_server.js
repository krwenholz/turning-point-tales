import Logger from 'js-logger';
import config from 'config';

// TODO(kyle): Should add a CSP
// https://sapper.svelte.technology/guide#security

/*
 * Redirect to https.
 */
const requireHttps = (req, res, next) => {
  // The 'x-forwarded-proto' check is for Heroku
  if (req.headers['x-forwarded-proto'] !== 'https' && req.protocol !== 'https' && !req.headers['host'].startsWith('127.0.0.1') && !config.get('dev')) {
    const url = 'https://' + req.headers['host'] + req.url;
    res.writeHead(302, {
      Location: url
    });
    return res.end();
  }
  next();
}

export {
  requireHttps
}
