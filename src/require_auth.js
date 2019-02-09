import Logger from 'js-logger';

function protectNonDefaultRoutes(req, res, next) {

  const allowedAbsolutes = [
    '/',
    '/about',
    '/auth/fake_login',
    '/auth/initiate_login',
    '/index',
    '/login',
    '/service-worker.js',
    '/story.json',
  ];

  const allowedPrefixes = [
    '/auth/login',
    '/client',
    '/favicon'
  ];

  const isProtected = allowedAbsolutes.indexOf(req.url) == -1
    && !allowedPrefixes.some((prefix) => req.url.startsWith(prefix));

  if( isProtected && !req.session.user ) {
    Logger.info('Unauthenticated access found on url: ', req.url);
    res.writeHead(401);
    res.end();
    return;
  }

  next();
}

export {
  protectNonDefaultRoutes
}
