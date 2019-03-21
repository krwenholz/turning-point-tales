import * as sapper from '../__sapper__/server.js';
import Logger from 'js-logger';
import compression from 'compression';
import config from 'config';
import cookieSession from 'cookie-session';
import csurf from 'csurf';
import express from 'express';
import sirv from 'sirv';
import { Store } from 'svelte/store.js';
import { initLogging, logRequest, logSession } from './logging';
import { protectNonDefaultRoutes, requireHTTPS } from './secure_server';

initLogging();
const dev = config.get('dev');

const app = express();

Logger.info('Starting server in  environment', config.get('environment'));
if(!config.get('dev')) {
  Logger.info('Enabling trust proxy');
  app.set('trust proxy', 1); // trust first proxy
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
    // `lax` because we authenticate through some redirects with Patreon, relies on trusting
    // them to only redirect sensitive information to _our_ servers.
    // TODO(kyle): This should be enabled, but it's not working on the final Patreon leg
    sameSite: 'lax',
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

app.use(...middleware)
  .listen(config.get('server.port'), (err) => {
    if(err) {
      Logger.error(err);
      // TODO(kyle): Would be better to return an error code and serve the error page
    }
  });
