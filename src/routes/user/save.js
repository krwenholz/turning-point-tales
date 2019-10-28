import Logger from 'js-logger';
import config from 'config';

const post = (req, res) => {
  res.redirect('/');
  res.end();
}

export {
  post
}