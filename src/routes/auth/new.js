// TODO(kyle): POST route to initiate creation that grants a shortlived login
// TODO(kyle): GET route to accept JWT or reject with new reset prompt, accept complicated
// JWT that manages new account or password reset
// https://github.com/auth0/node-jsonwebtoken
import Logger from 'js-logger';
import config from 'config';

const get = (req, res) => {
  res.redirect('/');
  res.end();
}

const post = (req, res) => {
  console.log('nnn', req)
  res.redirect('/');
  res.end();
}

export {
  get,
  post
}
