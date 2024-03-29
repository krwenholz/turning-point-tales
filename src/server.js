import * as sapper from "@sapper/server";
import bodyParser from "body-parser";
import compression from "compression";
import config from "config";
import cookieParser from "cookie-parser";
import express from "express";
import fs from "fs";
import helmet from "helmet";
import https from "https";
import pgSession from "connect-pg-simple";
import securePassword from "secure-password";
import session from "express-session";
import sirv from "sirv";
import uuidv4 from "uuid/v4";
import { Store } from "svelte/store";
import { Strategy as LocalStrategy } from "passport-local";
import { csrfProtection, exposeCsrfMiddleware } from "src/lib/server/csrf";
import {
  logger,
  logResponse,
  logRequest,
  logRequestHeadersAndBody
} from "./logging";
import { passport, initPassport } from "src/authentication";
import { pool } from "src/db/database";
import { requireHttps } from "src/lib/server/require_https";
import { requireRoot } from "src/lib/server/require_root";

const dev = config.get("dev");

const app = express();

logger.info({ environment: config.get("environment") }, "Starting server");
if (!config.get("dev")) {
  logger.info("Enabling trust proxy");
  app.set("trust proxy", 1); // trust first proxy
}

initPassport();

const nonce = (req, res, next) => {
  res.locals.nonce = uuidv4();
  next();
};

const additionalSrcs = [];
if (config.get("dev"))
  additionalSrcs.push(config.get("server.domain") + ":10000");

const middleware = [
  bodyParser.urlencoded({
    extended: false
  }),
  bodyParser.json({ type: "application/csp-report" }),
  bodyParser.json({
    verify: (req, res, buf) => {
      // Sometimes (e.g. Stripe hook routes) we'll want the raw body. So we'll save it.
      req.rawBody = buf;
    }
  }),
  logRequest,
  requireHttps,
  requireRoot,
  compression({
    threshold: 0
  }),
  sirv("static", {
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
      tableName: "user_sessions"
    }),
    cookie: {
      domain: config.get("server.domain"),
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      name: "session-" + config.get("server.domain"),
      sameSite: "strict",
      secure: !config.get("dev") || config.get("server.enableHttps")
    }
  }),
  nonce,
  helmet.contentSecurityPolicy({
    reportOnly: false,
    directives: {
      //reportUri: "/csp_report",
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "https://edge.fullstory.com",
        "https://www.fullstory.com",
        (req, res) => `'nonce-${res.locals.nonce}'`
      ],
      connectSrc: [
        "'self'",
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
        "https://rs.fullstory.com",
        "https://www.fullstory.com",
        "https://edge.fullstory.com"
      ].concat(additionalSrcs),
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'"],
      workerSrc: [
        "'self'",
        "https://fonts.gstatic.com",
        "https://fonts.googleapis.com",
        "https://rs.fullstory.com",
        "https://edge.fullstory.com",
        "https://www.fullstory.com"
      ]
    }
  }),
  passport.initialize(),
  passport.session()
];

app.use(...middleware);

app.use(
  "/",
  csrfProtection,
  exposeCsrfMiddleware,
  passport.authenticateNonDefaultRoutes(),
  sapper.middleware({
    session: req => ({
      user: req.user
    })
  })
);

if (config.get("server.enableHttps")) {
  https
    .createServer(
      {
        key: fs.readFileSync("./certs/server.key"),
        cert: fs.readFileSync("./certs/server.cert")
      },
      app
    )
    .listen(config.get("server.port"), err => {
      if (err) logger.error(err, "error starting");
      else
        logger.info(
          { port: config.get("server.port") },
          "Https server started"
        );
    });
} else {
  app.listen(config.get("server.port"), err => {
    if (err) logger.error(err, "error starting");
    else logger.info({ port: config.get("server.port") }, "Server started");
  });
}
