import Logger from 'js-logger';
import config from 'config';

const allowedAbsolutes = [
  '/',
  '/about',
  '/auth/fake_login',
  '/auth/initiate_login',
  '/auth/logout',
  '/index',
  '/login',
  '/privacy',
  '/service-worker.js',
  '/story.json',
  '/tos',
];

const allowedPrefixes = [
  '/?',
  '/auth/login',
  '/client',
  '/favicon',
];

function protectNonDefaultRoutes(req, res, next) {

  const isProtected = allowedAbsolutes.indexOf(req.url) == -1 &&
    !allowedPrefixes.some((prefix) => req.url.startsWith(prefix));

  if (isProtected && !req.session.paidUp) {
    Logger.info('Unauthenticated access found on url: ', req.url);
    res.writeHead(401);
    res.end();
    return;
  }

  next();
}

/*
 * Redirect to https.
 */
function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (req.headers['x-forwarded-proto'] !== 'https' && req.protocol !== 'https' && !req.headers['host'].startsWith('127.0.0.1') && !config.get('dev')) {
    const url = 'https://' + req.headers['host'] + req.url;
    res.writeHead(302, {
      Location: url
    });
    return res.end();
  }
  next();
}

export {
  protectNonDefaultRoutes,
  requireHTTPS
}