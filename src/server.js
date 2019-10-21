import * as sapper from '@sapper/server';
import Logger from 'js-logger';
import bodyParser from 'body-parser';
import compression from 'compression';
import config from 'config';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import express from 'express';
import helmet from 'helmet';
import passport from 'passport';
import pgSession from 'connect-pg-simple';
import securePassword from 'secure-password';
import session from 'express-session';
import sirv from 'sirv';
import uuidv4 from 'uuid/v4';
import { Store } from 'svelte/store';
import { Strategy as LocalStrategy } from 'passport-local';
import { exposeCsrfMiddleware } from 'src/lib/server/csrf';
import { exposeStripeKeyMiddleware } from 'src/lib/server/stripe';
import { initPassport } from './authentication';
import { pool } from "src/lib/server/database.js";
import { requireHttps } from 'src/lib/server/require_https';
import { requireRoot } from 'src/lib/server/require_root';
import {
  initLogging,
  requestsLogger,
} from './logging';

initLogging();
const dev = config.get('dev');

const app = express();

Logger.info('Starting server in  environment', config.get('environment'));
if (!config.get('dev')) {
  Logger.info('Enabling trust proxy');
  app.set('trust proxy', 1); // trust first proxy
}

initPassport();

const nonce = (req, res, next) => {
  res.locals.nonce = uuidv4();
  next();
};

const additionalSrcs = [];
if(config.get('dev')) additionalSrcs.push(config.get('server.domain')+':10000');

const middleware = [
  bodyParser.urlencoded({ extended: false}),
  bodyParser.json(),
  requestsLogger(),
  requireHttps,
  requireRoot,
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
  exposeStripeKeyMiddleware,
  nonce,
  helmet({
    contentSecurityPolicy: {
      reportOnly: true,
      directives: {
        scriptSrc: [ "'self'", "js.stripe.com", (req, res) => `'nonce-${res.locals.nonce}'`],
        connectSrc: ["'self'", "api.stripe.com"].concat(additionalSrcs),
        frameSrc: ["js.stripe.com", "hooks.stripe.com"],
      }
    }
  }),
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
