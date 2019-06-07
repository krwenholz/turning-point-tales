import Logger from 'js-logger';
import config from 'config';
import passport from 'passport';
import securePassword from 'secure-password';
import { Strategy as LocalStrategy } from 'passport-local';

const post = passport.authenticate('local', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/login_failed'
});

export {
  post
}
