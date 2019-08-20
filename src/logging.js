import Logger from 'js-logger';
import config from 'config';

const initLogging = () => {
  Logger.useDefaults();
  Logger.setLevel((config.get('dev') ? Logger.DEBUG : Logger.INFO));
}

const logRequestMiddleware = (req, res, next) => {
  Logger.debug(`Received [${req.method}] on [${req.url}]`);
  next();
}

const logSessionMiddleware = (req, res, next) => {
  if (config.get('logging.session')) Logger.info('Session logger:', req.session);
  next();
}

export {
  initLogging,
  logRequestMiddleware,
  logSessionMiddleware
}
