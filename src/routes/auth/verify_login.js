import Logger from 'js-logger';
import config from 'config';
import passport from 'passport';
import securePassword from 'secure-password';
import { Strategy as LocalStrategy } from 'passport-local';

const post = (req, res, next) => {
  passport.authenticate('local',
    (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.redirect('/login');

      req.logIn(user, (err) => {
        if (err) { return next(err); }
        return res.redirect(`/?user=set&data=${encodeURIComponent(JSON.stringify(user))}`);
      });
    })(req, res, next);
};

export {
  post
}
