import Logger from 'js-logger';
import config from 'config';

function get(req, res) {
  if (req.session && req.session.patreonId) Logger.info('Logging out', req.session.patreonId);

  req.session = null;
  res.clearCookie('user', {
    domain: config.get('server.domain'),
    httpOnly: false,
    sameSite: 'lax',
    secure: !config.get('dev'),
  });

  res.writeHead(302, {
    Location: '/?user=clear',
    'Cache-Control': 'no-store'
  });
  res.end();
}

export {
  get
}