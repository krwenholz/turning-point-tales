import Logger from 'js-logger';
import passport from 'passport';
import securePassword from 'secure-password';
import { findUser, findUserSafeDetails } from './lib/users';
import {
  Strategy as LocalStrategy
} from 'passport-local';

const passwordHasher = securePassword();

/**
 * Compares passwords and hashes securely, efficiently, and with nice compatibility.
 */
const compare = (userPassword, hash) => {
  return passwordHasher.verify(Buffer.from(userPassword), Buffer.from(hash))
    .then(result => {
      switch (result) {
        case securePassword.INVALID_UNRECOGNIZED_HASH:
          Logger.error('This hash was not made with secure-password. Attempt legacy algorithm');
          return false;
        case securePassword.INVALID:
          Logger.info('Invalid password');
          return false;
        case securePassword.VALID:
          Logger.info('Authenticated');
          return true;
        case securePassword.VALID_NEEDS_REHASH:
          Logger.info('Yay you made it, wait for us to improve your safety');

          passwordHasher.hash(userPassword, (err, improvedHash) => {
            if (err) Logger.error('You are authenticated, but we could not improve your safety this time around')

            // TODO(kyle): Save improvedHash somewhere
          })
          return true;
          break;
      }
    })
};

const allowedBaseRoutes = [
  '/example-story',
  '/teaser-story',
  '/landing',
  '/stories',
  '/about',
  '/auth/fake_login',
  '/auth/initiate_login',
  '/auth/logout',
  '/index',
  '/privacy',
  '/service-worker.js',
  '/story.json',
  '/tos',
];

const allowedPrefixes = [
  '/?',
  '/auth/new',
  '/auth/verify_login',
  '/user/create',
  '/user/login',
  '/client',
  '/error',
  '/experimental',
];

/**
 * Protects our routes based on some rules.
 * You get a redirect for bad HTML requests and a 401 for API-esque JS or JSON requests.
 */
const protectNonDefaultRoutes = (req, res, next) => {

  if (req.isAuthenticated()) next();
  else if (allowedBaseRoutes.includes(req.path)) next();
  else if (allowedPrefixes.some((prefix) => req.path.startsWith(prefix))) next();
  else {
    Logger.info('Unauthenticated access found on url: ', req.url);

    if (req.path.endsWith(".js") || req.path.endsWith(".json")) {
      res.writeHead(401);
    } else {
      res.redirect("/landing");
    }
    res.end();
    return;
  }
}

/**
 * Determine which data of the user is stored in the session.
 */
passport.serializeUser((user, cb) => {
  cb(null, user.id)
});

/**
 * Puts the user in req.user by finding by id.
 */
passport.deserializeUser((id, cb) => {
  // TODO(kyle): This should use promises because reasons
  findUserSafeDetails(id = id).then(details => cb(null, details)).catch(error => cb(error));
});

/**
 * All the nasty details of initializing Passport with our user store.
 */
const initPassport = () => {
  Logger.info("Initializing passport");

  passport.use(new LocalStrategy({
      usernameField: 'email',
    },
    (email, password, done) => {
      findUser(email = email)
        .then(user => {
          // User not found
          if (!user) {
            return done(null, false);
          }

          // Always use hashed passwords and fixed time comparison
          return compare(password, user.passwordHash)
            .then(isValid => {
              if (!isValid) {
                return done(null, false);
              }
              return done(null, user);
            })
            .catch(err => done(err));
        }).catch(err => done(err));
    }
  ))

  passport.authenticationMiddleware = () => protectNonDefaultRoutes;
};

export {
  initPassport
}
