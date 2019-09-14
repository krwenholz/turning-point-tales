import Logger from 'js-logger';
import config from 'config';
import passport from 'passport';
import securePassword from 'secure-password';
import { Strategy as LocalStrategy } from 'passport-local';
import { removeUser } from 'src/lib/server/users';

/**
 * Deletes a user.
 */
const del = async (req, res) => {
  try {
    await removeUser(req.query.email);
    res.end();
  } catch (error) {
    Logger.error('Error deleting user', error);
    res.status(500)
       .send(e)
  }
};

export {
  del,
}