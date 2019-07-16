import Logger from 'js-logger';
import config from 'config';
import passport from 'passport';
import securePassword from 'secure-password';
import { Strategy as LocalStrategy } from 'passport-local';
import { findUser, addUser } from '../../../lib/users';

// TODO(kyle): GET route to accept JWT or reject with new reset prompt, accept
// JWT that manages password reset
// https://github.com/auth0/node-jsonwebtoken
const get = (req, res) => {
  res.redirect('/');
  res.end();
}

/**
 * Creates a new brand new user.
 */
const post = (req, res) => {
  return addUser(req.body.firstName, req.body.email, req.body.password)
    .then(user => {
      return req.logIn(user, error => {
        if (error) return Promise.reject();
        return res.redirect('/');
      });
    }).catch(error => {
      Logger.error('Error creating user', error);
      res.redirect('/user/create?error=unknown');
      res.end();
    });
}

export {
  get,
  post
}