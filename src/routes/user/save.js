// TODO(kyle): POST route to set password that really is just saving a user
import Logger from 'js-logger';
import config from 'config';

const post = (req, res) => {
  res.redirect('/');
  res.end();
}

export {
  post
}
