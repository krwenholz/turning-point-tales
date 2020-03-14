import config from "config";
import passportHttpBearer from "passport-http-bearer";
import securePassword from "secure-password";
import uuidv4 from "uuid/v4";
import { findUser, findUserSafeDetails } from "src/lib/server/users";
import { join, times } from "lodash";
import { logger } from "src/logging";
import { passport } from "src/authentication";
import { pool } from "src/lib/server/database.js";
import { server } from "src/authentication/oauth";

export const post = (req, res, next) => {
  return passport.authenticate(["basic"], {
    session: false
  })(req, res, (req, res) =>
    server.token()(req, res, (req, res, () => server.errorHandler()(req, res)))
  );
};
