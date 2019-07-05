import Logger from 'js-logger';
import config from 'config';
import passport from 'passport';
import securePassword from 'secure-password';
import { Strategy as LocalStrategy } from 'passport-local';
import { removeUser } from '../../lib/users';

/**
 * Deletes a user.
 */
const post = (req, res) => {
  return removeUser(req.email)
    .then(user => {
      res.redirect('/');
      res.end();
    }).catch(error => {
      Logger.error('Error deleting user', error);
      res.redirect('/user/profile');
      res.end();
    });
}

export {
  post
}
