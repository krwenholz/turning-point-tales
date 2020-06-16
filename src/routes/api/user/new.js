import { logger } from "src/logging";
import config from "config";
import passport from "passport";
import securePassword from "secure-password";
import { Strategy as LocalStrategy } from "passport-local";
import { findUser, addUser } from "src/db/users";

const get = (req, res) => {
  res.redirect("/");
  res.end();
};

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
      freeStoryUsed: req.cookies.FREE_STORY_RECORD || null
    });

    req.logIn(newUser, error => {
      if (error) return Promise.reject();
    });

    return res.end();
  } catch (err) {
    logger.error(err, "Error creating user");
    res.status(400).end();
  }
};

export { get, post };
