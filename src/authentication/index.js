import config from "config";
import passport from "passport";
import passportLocal from "passport-local";
import securePassword from "secure-password";
import { BasicStrategy } from "passport-http";
import { Strategy as AnonymousStrategy } from "passport-anonymous";
import { ensureLoggedIn } from "connect-ensure-login";
import { findUser, findUserSafeDetails } from "src/lib/server/users";
import { logger } from "src/logging";

const passwordHasher = securePassword();

/**
 * Compares passwords and hashes securely, efficiently, and with nice compatibility.
 */
const compare = (userPassword, hash) => {
  return passwordHasher
    .verify(Buffer.from(userPassword), Buffer.from(hash))
    .then(result => {
      switch (result) {
        case securePassword.INVALID_UNRECOGNIZED_HASH:
          logger.error(
            "This hash was not made with secure-password. Attempt legacy algorithm"
          );
          return false;
        case securePassword.INVALID:
          logger.info("Invalid password");
          return false;
        case securePassword.VALID:
          logger.info("Authenticated");
          return true;
        case securePassword.VALID_NEEDS_REHASH:
          logger.info("Yay you made it, wait for us to improve your safety");

          passwordHasher.hash(userPassword, (err, improvedHash) => {
            if (err)
              logger.error(
                "You are authenticated, but we could not improve your safety this time around"
              );
            // TODO: Save improvedHash somewhere
          });
          return true;
          break;
      }
    });
};

// TODO(kyle): Should be able to configure actual routes that don't need auth or
// such using a real express setup in server.js, now that we know how Sapper works.
// Kind of. Probably need one "optional" auth middleware wrapping usual passport.authenticate
const noAuthRoutes = [
  "/",
  "/about",
  "/api/password-reset",
  "/api/payments/hooks",
  "/api/user/fake_login",
  "/api/user/initiate_login",
  "/api/user/logout",
  "/api/user/new",
  "/briefing",
  "/csp_report",
  "/example-story",
  "/faq",
  "/index",
  "/oauth/token",
  "/password-reset",
  "/privacy",
  "/service-worker.js",
  "/stories",
  "/story.json",
  "/tos",
  "/tutorial",
  "/user/new"
];

const noAuthPrefixes = [
  "/?",
  "/api/user/login",
  "/api/user/new",
  "/client",
  "/error",
  "/experimental",
  "/user/create",
  "/user/login",
  "/story"
];

const routeRequiresAuth = req => {
  return (
    !noAuthRoutes.includes(req.path) &&
    !noAuthPrefixes.some(prefix => req.path.startsWith(prefix))
  );
};

/**
 * Protects our routes based on some rules.
 * You get a redirect for bad HTML requests and a 401 for API-esque JS or JSON requests.
 */
const authenticateNonDefaultRoutes = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (user) {
      return req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        next();
      });
    }

    if (routeRequiresAuth(req)) {
      if (req.path.endsWith(".js") || req.path.endsWith(".json")) {
        res.writeHead(401);
      } else {
        return ensureLoggedIn("/user/login")(req, res, next);
      }
      res.end();
      return;
    }

    // No user and no auth required
    next();
  })(req, res, next);
};

/**
 * Determine which data of the user is stored in the session.
 */
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

/**
 * Puts the user in req.user by finding by id.
 */
passport.deserializeUser(async (id, cb) => {
  try {
    const details = await findUserSafeDetails((id = id));

    if (!details) return cb(null, false);

    return cb(null, details);
  } catch (error) {
    return cb(error);
  }
});

/**
 * All the nasty details of initializing Passport with our user store.
 */
export const initPassport = () => {
  logger.info("Initializing passport");

  passport.use(
    new passportLocal.Strategy(
      {
        usernameField: "email"
      },
      (email, password, done) => {
        findUser((email = email))
          .then(user => {
            if (!user) return done(null, false);

            return compare(password, user.passwordHash)
              .then(isValid => {
                if (!isValid) return done(null, false);

                return done(null, user);
              })
              .catch(err => done(err));
          })
          .catch(err => done(err));
      }
    )
  );

  passport.use(new AnonymousStrategy());

  // We only do this for Alexa OAUTH.
  passport.use(
    new BasicStrategy(function(userId, secret, done) {
      if (userId != config.get("alexa.clientId")) {
        return done(err);
      }
      if (secret != config.get("alexa.secret")) {
        return done(null, false);
      }
      return done(null, { clientId: userId });
    })
  );

  passport.authenticateNonDefaultRoutes = () => authenticateNonDefaultRoutes;
};

export { passport };
