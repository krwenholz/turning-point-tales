import Logger from 'js-logger';
import config from 'config';
import passport from 'passport';
import securePassword from 'secure-password';
import { Strategy as LocalStrategy } from 'passport-local';
import { findUserSafeDetails } from '../../lib/users';

const post = (req, res, next) => {
  passport.authenticate('local',
    (err, user, info) => {
      if (err) return res.redirect('/user/create?error=unknown');
      if (!user) return res.redirect('/user/create?error=unknown');

      req.logIn(user, (err) => {
        if (err) { return next(err); }
        return findUserSafeDetails(user.id)
          .then(user =>
            res.redirect(`/?user=set&data=${encodeURIComponent(JSON.stringify(user))}`)
          );
      });
    })(req, res, next);
};

export {
  post
}
