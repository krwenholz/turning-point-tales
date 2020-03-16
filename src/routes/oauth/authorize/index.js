import config from "config";
import oauth2orize from "oauth2orize";
import passportHttpBearer from "passport-http-bearer";
import securePassword from "secure-password";
import uuidv4 from "uuid/v4";
import { findUser, findUserSafeDetails } from "src/lib/server/users";
import { join, times, includes } from "lodash";
import { logger } from "src/logging";
import { passport } from "src/authentication";
import { pool } from "src/lib/server/database.js";
import { server } from "src/authentication/oauth";

const findAccessTokenByUserIdAndClientId = async (userId, clientId, done) => {
  try {
    const results = await pool.query(
      `
    SELECT
        client_id AS clientId,
        user_id AS userId
    FROM
        oauth_access_tokens
    WHERE
        user_id = $1
        AND client_id = $2
    `,
      [userId, clientId]
    );

    return done(null, results.rows[0]);
  } catch (err) {
    logger.error(err);
    return done(err);
  }
};

export const get = (req, res) => {
  return server.authorize(
    (clientId, redirectUri, done) => {
      if (
        !includes(config.get("alexa.redirectUris"), redirectUri) &&
        clientId !== conifg.get("alexa.clientId")
      ) {
        return done(null);
      }
      return done(null, { clientId, isTrusted: true }, redirectUri);
    },
    (client, user, done) => {
      // We don't do immediate approval, so always prompt user for it
      return done(null, false);
    }
  )(req, res, () => {
    logger.info(req, "ddd");
    return res.redirect(
      `/oauth/authorize/dialog?transactionId=${req.oauth2.transactionID}`
    );
  });
};
