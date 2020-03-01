import config from "config";
import oauth2orize from "oauth2orize";
import passportHttpBearer from "passport-http-bearer";
import securePassword from "secure-password";
import uuidv4 from "uuid/v4";
import { passport } from "src/authentication";
import { findUser, findUserSafeDetails } from "src/lib/server/users";
import { logger } from "src/logging";
import { pool } from "src/lib/server/database.js";
import { join, times } from "lodash";

export const post = (req, res, next) => {
  return passport.authenticate(["basic", "oauth2-client-password"], {
    session: false
  })(req, res, (req, res) =>
    server.token()(req, res, (req, res, () => server.errorHandler()(req, res)))
  );
};
