import Logger from 'js-logger';
import config from 'config';

const get = (req, res) => {
  if (req.isAuthenticated()) Logger.info('Logging out', req.user.id);

  req.logOut();

  res.redirect('/?user=clear');
  res.end();
}

export {
  get
}
