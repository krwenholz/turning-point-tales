import * as sapper from '../__sapper__/server.js';
import Logger from 'js-logger';
import compression from 'compression';
import config from 'config';
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import express from 'express';
import sirv from 'sirv';
import {
  Store
} from 'svelte/store.js';
import {
  initLogging,
  logRequest,
  logSession
} from './logging';
import {
  protectNonDefaultRoutes,
  requireHTTPS
} from './secure_server';

initLogging();
const dev = config.get('dev');

const app = express();

Logger.info('Starting server in  environment', config.get('environment'));
if (!config.get('dev')) {
  Logger.info('Enabling trust proxy');
  app.set('trust proxy', 1); // trust first proxy
}

const middleware = [
  logRequest,
  requireHTTPS,
  compression({
    threshold: 0
  }),
  sirv('static', {
    dev
  }),
  cookieParser(process.env.SECRET),
  cookieSession({
    domain: config.get('server.domain'),
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    name: 'session-' + config.get('server.domain'),
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
        user: req.cookies.user,
      });
    }
  })
];

app.use(...middleware)
  .listen(config.get('server.port'), (err) => {
    if (err) {
      Logger.error('XXX');
      Logger.error(err);
      // TODO(kyle): Would be better to return an error code and serve the error page
    }
  });
