import Logger from 'js-logger';
import config from 'config';

/**
 * Add the CSRF token to a cookie our JS can read.
 */
const exposeCsrfMiddleware = (req, res, next) => {
  res.cookie('XSRF-TOKEN',
    req.csrfToken(), {
      domain: config.get('server.domain'),
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      name: 'session-' + config.get('server.domain'),
      // TODO(kyle): Custom logins probably mean this can be strict
      sameSite: 'lax',
      secure: !config.get('dev'),
    });
  next();
};

export {
  exposeCsrfMiddleware,
}