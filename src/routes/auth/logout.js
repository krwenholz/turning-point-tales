import Logger from 'js-logger';
import config from 'config';

const get = (req, res) => {
  if (req.isAuthenticated()) Logger.info('Logging out', req.user.id);

  req.logOut();
  /**
   * TODO(kyle): Add this back in to pass user information to our SPA
  res.clearCookie('user', {
    domain: config.get('server.domain'),
    httpOnly: false,
    sameSite: 'lax',
    secure: !config.get('dev'),
  });
  */

  res.redirect('/?user=clear');
  res.end();
}

export {
  get
}
