import Logger from 'js-logger';
import config from 'config';
import passport from 'passport';
import securePassword from 'secure-password';
import { Strategy as LocalStrategy } from 'passport-local';
import { findUser, addUser } from 'src/lib/server/users';

const get = (req, res) => {
  res.redirect('/');
  res.end();
}

/**
 * Creates a new brand new user.
 */
const post = async (req, res) => {
  try {
    const newUser = await addUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });

    req.logIn(newUser, error => {
      if (error) return Promise.reject();
    });

    return res.end();
  } catch (error) {
    Logger.error('Error creating user', error);
    res.status(400)
       .end();
  }
}

export {
  get,
  post
}
