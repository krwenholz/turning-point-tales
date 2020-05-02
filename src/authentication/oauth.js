import config from "config";
import oauth2orize from "oauth2orize";
import passportHttpBearer from "passport-http-bearer";
import uuidv4 from "uuid/v4";
import { findUser, findUserSafeDetails } from "src/db/users";
import { logger } from "src/logging";
import { pool } from "src/db/database";
import { join, times, includes } from "lodash";

export const server = oauth2orize.createServer();

const findAuthorizationCode = async (code, done) => {
  try {
    await pool.query(
      `
    DELETE FROM oauth_authorization_codes
    WHERE created < CURRENT_DATE - INTERVAL '30 minutes';
      `
    );
    const { rows } = await pool.query(
      `
    SELECT
        client_id AS "clientId",
        redirect_uri AS "redirectUri",
        user_id AS "userId"
    FROM
        oauth_authorization_codes
    WHERE
        code = $1;
    `,
      [code]
    );

    return done(null, rows[0]);
  } catch (err) {
    logger.error(err);
    return done(err);
  }
};

const saveAuthorizationCode = async (
  code,
  clientId,
  redirectUri,
  userId,
  done
) => {
  try {
    await pool.query(
      `
      INSERT INTO
        oauth_authorization_codes (code, client_id, redirect_uri, user_id, created, modified)
      VALUES ($1, $2, $3, $4, NOW(), NOW())
    `,
      [code, clientId, redirectUri, userId]
    );

    logger.info({ userId }, "Authorization code added");
    done();
  } catch (err) {
    logger.error(err);
    done(err);
  }
};

export const findAccessToken = async (token, done) => {
  try {
    await pool.query(
      `
    DELETE FROM oauth_access_tokens
    WHERE created < CURRENT_DATE - INTERVAL '1 year';
      `
    );

    const { rows } = await pool.query(
      `
    SELECT
        client_id AS "clientId",
        user_id AS "userId"
    FROM
        oauth_access_tokens
    WHERE
        token = $1
    `,
      [token]
    );

    return rows[0];
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

const saveAccessToken = async (token, clientId, userId, done) => {
  try {
    await pool.query(
      `
      INSERT INTO
        oauth_access_tokens (token, client_id, user_id, created, modified)
      VALUES ($1, $2, $3, NOW(), NOW())
    `,
      [token, clientId, userId]
    );

    logger.info({ userId }, "Access token added");
    done();
  } catch (err) {
    logger.error(err);
    done(err);
  }
};

server.grant(
  oauth2orize.grant.code((client, redirectUri, user, ares, done) => {
    const code = uuidv4(16);
    saveAuthorizationCode(
      code,
      client.clientId,
      redirectUri,
      user.id,
      error => {
        if (error) return done(error);
        return done(null, code);
      }
    );
  })
);

server.serializeClient((client, done) => {
  done(null, client.clientId);
});

server.deserializeClient((id, done) => {
  // We only have one client right now, so this is pretty dumb
  if (id !== config.get("alexa.clientId")) return done(null, false);
  return done(null, { clientId: id, isTrusted: true });
});

server.exchange(
  oauth2orize.exchange.code((client, code, redirectUri, done) => {
    findAuthorizationCode(code, (error, authData) => {
      if (error) return done(error);
      if (client.clientId !== authData.clientId) return done(null, false);
      if (redirectUri !== authData.redirectUri) return done(null, false);

      const token = join(times(16, uuidv4), "");
      saveAccessToken(token, authData.clientId, authData.userId, error => {
        if (error) return done(error);
        // Add custom params, e.g. the username
        let params = { expires_in: 60 * 60 * 24 * 365 };
        // Call `done(err, accessToken, [refreshToken], [params])` to issue an access token
        return done(null, token, null, params);
      });
    });
  })
);

const findAccessTokenByUserIdAndClientId = async (userId, clientId, done) => {
  try {
    const results = await pool.query(
      `
    SELECT
        client_id AS client_id,
        user_id AS user_id
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

export const authorize = [
  server.authorize(
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
  ),
  (req, res) => {
    return res.redirect(
      `/oauth/authorize/dialog?transactionId=${req.oauth2.transactionID}`
    );
  }
];
