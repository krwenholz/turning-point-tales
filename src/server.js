import * as sapper from '../__sapper__/server.js';
import Logger from 'js-logger';
import compression from 'compression';
import config from 'config';
import cookieSession from 'cookie-session';
import csurf from 'csurf';
import polka from 'polka';
import { protectNonDefaultRoutes } from './require_auth';
import sirv from 'sirv';
import { Store } from 'svelte/store.js';

const dev = config.get('dev');

Logger.useDefaults();
Logger.setLevel((config.get('dev') ? Logger.DEBUG : Logger.INFO));
Logger.info('Starting server in  environment', config.get('environment'));

function logRequest(req, res, next) {
  Logger.debug(`Received [${req.method}] on [${req.url}]`);
  next();
}

function logSession(req, res, next) {
  if (config.get('logging.session')) Logger.info('Session logger:', req.session);
  next();
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
  logRequest,
  requireHTTPS,
  compression({ threshold: 0 }),
  sirv('static', { dev }),
  cookieSession({
    domain: config.get('server.domain'),
    httpOnly: false,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    name: 'session-' + config.get('server.domain'),
    proxy: !config.get('dev'),
    // `lax` because we authenticate through some redirects with Patreon, relies on trusting
    // them to only redirect sensitive information to _our_ servers.
    // TODO(kyle): This should be enabled, but it's not working on the final Patreon leg
    //sameSite: 'lax',
    secret: process.env.SECRET,
    secure: !config.get('dev'),
  }),
  csurf(),
  logSession,
  protectNonDefaultRoutes,
  sapper.middleware({
    store: (req) => {
      return new Store({
        user: req.session.user,
      });
    }
  })
];

polka().use(...middleware)
  .listen(config.get('server.port'), (err) => {
    if(err) {
      Logger.error(err);
      // TODO(kyle): Would be better to return an error code and serve the error page
    }
  });
