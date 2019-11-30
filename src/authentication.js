import Logger from "js-logger";
import config from "config";
import csurf from "csurf";
import passport from "passport";
import securePassword from "secure-password";
import { findUser, findUserSafeDetails } from "src/lib/server/users";
import { Strategy as LocalStrategy } from "passport-local";

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
          Logger.error(
            "This hash was not made with secure-password. Attempt legacy algorithm"
          );
          return false;
        case securePassword.INVALID:
          Logger.info("Invalid password");
          return false;
        case securePassword.VALID:
          Logger.info("Authenticated");
          return true;
        case securePassword.VALID_NEEDS_REHASH:
          Logger.info("Yay you made it, wait for us to improve your safety");

          passwordHasher.hash(userPassword, (err, improvedHash) => {
            if (err)
              Logger.error(
                "You are authenticated, but we could not improve your safety this time around"
              );
            // TODO: Save improvedHash somewhere
          });
          return true;
          break;
      }
    });
};

const allowedBaseRoutes = [
  "/",
  "/about",
  "/api/password-reset",
  "/api/payments/hooks",
  "/api/user/fake_login",
  "/api/user/initiate_login",
  "/api/user/logout",
  "/api/user/new",
  "/example-story",
  "/faq",
  "/index",
  "/password-reset",
  "/privacy",
  "/service-worker.js",
  "/stories",
  "/story.json",
  "/teaser-story",
  "/tos",
  "/tutorial",
  "/user/new"
];

const allowedPrefixes = [
  "/?",
  "/api/user/login",
  "/api/user/new",
  "/client",
  "/error",
  "/experimental",
  "/user/create",
  "/user/login"
];

const noAuthRoute = req => {
  return (
    allowedBaseRoutes.includes(req.path) ||
    allowedPrefixes.some(prefix => req.path.startsWith(prefix))
  );
};

/**
 * Protects our routes based on some rules.
 * You get a redirect for bad HTML requests and a 401 for API-esque JS or JSON requests.
 */
const protectNonDefaultRoutes = (req, res, next) => {
  if (req.isAuthenticated()) next();
  else if (noAuthRoute(req)) next();
  else {
    Logger.info("Unauthenticated access found on url: ", req.url);

    if (req.path.endsWith(".js") || req.path.endsWith(".json")) {
      res.writeHead(401);
    } else {
      res.redirect("/");
    }
    res.end();
    return;
  }
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
const initPassport = () => {
  Logger.info("Initializing passport");

  passport.use(
    new LocalStrategy(
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

  passport.authenticationMiddleware = () => protectNonDefaultRoutes;
};

const csrf = csurf({
  cookie: {
    domain: config.get("server.domain"),
    httpOnly: true,
    key: "session-" + config.get("server.domain"),
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    sameSite: "lax",
    secure: !config.get("dev")
  }
});

const csrfProtection = (req, res, next) => {
  if (noAuthRoute(req)) next();
  else csrf(req, res, next);
};

export { initPassport, csrfProtection };
