import config from "config";
import passport from "passport";
import securePassword from "secure-password";
import { Strategy as LocalStrategy } from "passport-local";
import { findUserSafeDetails } from "src/lib/server/users";
import { logger } from "src/logging";

const post = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) logger.error(err);
    if (err) return res.redirect("/user/login?error=unknown");
    if (!user) return res.redirect("/user/login?error=unknown");

    req.logIn(user, err => {
      if (err) {
        return next(err);
      }
      const redirect = req.session.returnTo || "/";
      logger.info({ redirect, userId: user.id }, "User logged in succesfully");
      return findUserSafeDetails(user.id).then(user => res.redirect(redirect));
    });
  })(req, res, next);
};

export { post };
