import * as sapper from '@sapper/server';
import Logger from 'js-logger';
import bodyParser from 'body-parser';
import compression from 'compression';
import config from 'config';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import express from 'express';
import passport from 'passport';
import securePassword from 'secure-password';
import pgSession from 'connect-pg-simple';
import session from 'express-session';
import sirv from 'sirv';
import { Store } from 'svelte/store';
import { Strategy as LocalStrategy } from 'passport-local';
import { initPassport } from './authentication';
import { pool } from "src/lib/database.js";
import {
  initLogging,
  requestsLogger,
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
  requestsLogger(),
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
  // TODO(kyle): https://github.com/expressjs/session#store
  session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.SECRET,
    store: new (pgSession(session))({
      pool: pool,
      tableName: 'user_sessions',
    }),
    cookie: {
      domain: config.get('server.domain'),
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      name: 'session-' + config.get('server.domain'),
      sameSite: 'strict',
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
