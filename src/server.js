import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '../__sapper__/server.js';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

console.log('In mode', NODE_ENV);

/*
 * Log every request
 */
function logger(req, res, next) {
  console.log(`~> Received ${req.method} on ${req.url}`);
  next(); // move on
}

/*
 * Redirect to https.
 */
function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (req.headers['x-forwarded-proto'] !== 'https' && req.protocol !== 'https' && !req.headers['host'].startsWith('127.0.0.1') && !dev) {
    const url = 'https://' + req.headers['host'] + req.url;
    res.writeHead(302, { Location: url });
    return res.end();
  }
  next();
}

const middleware = [
  requireHTTPS,
  compression({ threshold: 0 }),
  sirv('static', { dev }),
  // WARN: Not sure why we can't serve these up without configuration but this hack works for now.
  sirv('node_modules/icono/dist', { dev }),
  sapper.middleware()
];

if(dev) middleware.unshift(logger);

polka().use(...middleware)
  .listen(PORT, (err) => {
    if(err) console.error(err);
  });
