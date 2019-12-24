import { logger } from "src/logging";
import config from "config";
import passport from "passport";
import securePassword from "secure-password";
import { Strategy as LocalStrategy } from "passport-local";
import { removeUser } from "src/lib/server/users";

/**
 * Deletes a user.
 */
const del = async (req, res) => {
  try {
    await removeUser(req.query.email);
    res.end();
  } catch (err) {
    logger.error(err, "Error deleting user");
    res.status(500).send(err);
  }
};

export { del };
