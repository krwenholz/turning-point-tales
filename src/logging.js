import Logger from 'js-logger';
import config from 'config';

function initLogging() {
  Logger.useDefaults();
  Logger.setLevel((config.get('dev') ? Logger.DEBUG : Logger.INFO));
}

function logRequest(req, res, next) {
  Logger.debug(`Received [${req.method}] on [${req.url}]`);
  next();
}

function logSession(req, res, next) {
  if (config.get('logging.session')) Logger.info('Session logger:', req.session);
  next();
}

export {
  initLogging,
  logRequest,
  logSession
}
