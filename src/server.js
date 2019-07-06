import * as sapper from '@sapper/server';
import Logger from 'js-logger';
import bodyParser from 'body-parser';
import compression from 'compression';
import config from 'config';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import securePassword from 'secure-password';
import { Strategy as LocalStrategy } from 'passport-local';
import session from 'express-session';
import csurf from 'csurf';
import express from 'express';
import sirv from 'sirv';
import { initPassport } from './authentication';
import { Store } from 'svelte/store';
import {
  initLogging,
  logRequestMiddleware,
  logSessionMiddleware
} from './logging';
import {
  requireHttps
} from './lib/require_https';
import { exposeCsrfMiddleware } from './lib/csrf';

initLogging();
const dev = config.get('dev');

const app = express();

Logger.info('Starting server in  environment', config.get('environment'));
if (!config.get('dev')) {
  Logger.info('Enabling trust proxy');
  app.set('trust proxy', 1); // trust first proxy
}

initPassport();

const middleware = [
  bodyParser.urlencoded({ extended: false}),
  bodyParser.json(),
  logRequestMiddleware,
  requireHttps,
  compression({
    threshold: 0
  }),
  sirv('static', {
    dev,
    maxAge: 31536000, // 1Y
    immutable: true
  }),
  cookieParser(process.env.SECRET),
  session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.SECRET,
    cookie: {
      domain: config.get('server.domain'),
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      name: 'session-' + config.get('server.domain'),
      // TODO(kyle): Custom logins probably mean this can be strict
      sameSite: 'lax',
      secure: !config.get('dev'),
    }
  }),
  csurf({
    cookie: {
      domain: config.get('server.domain'),
      httpOnly: true,
      key: 'session-' + config.get('server.domain'),
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      sameSite: 'lax',
      secure: !config.get('dev'),
    }
  }),
  exposeCsrfMiddleware,
  passport.initialize(),
  passport.session(),
  passport.authenticationMiddleware(),
  logSessionMiddleware,
  sapper.middleware({
    session: (req) => ({
      user: req.user
    }),
  }),
];

app.use(...middleware)
  .listen(config.get('server.port'), (err) => {
    if (err) {
      Logger.error(err);
    }
  });
