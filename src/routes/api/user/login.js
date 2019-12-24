import { logger } from "src/logging";
import config from "config";
import passport from "passport";
import securePassword from "secure-password";
import { Strategy as LocalStrategy } from "passport-local";
import { findUserSafeDetails } from "src/lib/server/users";

const post = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) logger.error(err);
    if (err) return res.redirect("/user/login?error=unknown");
    if (!user) return res.redirect("/user/login?error=unknown");

    req.logIn(user, err => {
      if (err) {
        return next(err);
      }
      return findUserSafeDetails(user.id).then(user => res.redirect("/"));
    });
  })(req, res, next);
};

export { post };
