import config from "config";
import oauth2orize from "oauth2orize";
import passportHttpBearer from "passport-http-bearer";
import securePassword from "secure-password";
import uuidv4 from "uuid/v4";
import { passport } from "src/authentication";
import { findUser, findUserSafeDetails } from "src/lib/server/users";
import { logger, logResponse } from "src/logging";
import { pool } from "src/lib/server/database.js";
import { join, times, includes } from "lodash";

// TODO(kyle): create a route for users to delete tokens
const tokenHasher = securePassword();

export const server = oauth2orize.createServer();

const findAuthorizationCode = async (code, done) => {
  logger.info({ code }, "fetching auth code");
  try {
    const results = await pool.query(
      `
    DELETE FROM oauth_authorization_codes
    WHERE created < CURRENT_DATE - INTERVAL '30 minutes';

    SELECT
        client_id AS clientId,
        redirect_uri AS redirectUri,
        user_id AS userId
    FROM
        oauth_authorization_codes
    WHERE
        code = $1;
    `,
      [code]
    );

    return done(null, results.rows[0]);
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

const findAccessToken = async (token, done) => {
  const hash = await tokenHasher.hash(Buffer.from(token));

  logger.info({ token, hash }, "fetching access token");
  try {
    const results = await pool.query(
      `
    DELETE FROM oauth_access_tokens
    WHERE created < CURRENT_DATE - INTERVAL '1 year';

    SELECT
        client_id AS clientId,
        user_id AS userId
    FROM
        oauth_access_tokens
    WHERE
        token = $1
    `,
      [hash]
    );

    return done(null, results.rows[0]);
  } catch (err) {
    logger.error(err);
    return done(err);
  }
};

const saveAccessToken = async (token, userId, clientId, done) => {
  try {
    const hash = await tokenHasher.hash(Buffer.from(token));

    await pool.query(
      `
      INSERT INTO
        oauth_access_tokens
      VALUES ($1, $2, $3, NOW(), NOW())
    `,
      [hash, clientId, userId]
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
  logger.info(client, "Serializing oauth client");
  done(null, client.clientId);
});

server.deserializeClient((clientId, done) => {
  // We only have one client right now, so this is pretty dumb
  if (clientId !== config.get("alexa.clientId")) return done(null, false);
  return done(null, { clientId, isTrusted: true });
});

server.exchange(
  oauth2orize.exchange.code((client, code, redirectUri, done) => {
    findAuthorizationCode(code, (error, authCode) => {
      if (error) return done(error);
      if (client.id !== authCode.clientId) return done(null, false);
      if (redirectUri !== authCode.redirectUri) return done(null, false);

      const token = join(times(16, uuidv4), "");
      saveAccessToken(token, authCode.userId, authCode.clientId, error => {
        if (error) return done(error);
        // Add custom params, e.g. the username
        let params = { expires_in: 60 * 60 * 24 * 365 };
        // Call `done(err, accessToken, [refreshToken], [params])` to issue an access token
        return done(null, token, null, params);
      });
    });
  })
);

/**
 * BearerStrategy
 *
 * This strategy is used to authenticate either users or clients based on an access token
 * (aka a bearer token). If a user, they must have previously authorized a client
 * application, which is issued an access token to make requests on behalf of
 * the authorizing user.
 */
export const tokenStrategy = new passportHttpBearer.Strategy(
  (accessToken, done) => {
    findAccessToken(accessToken, (error, token) => {
      if (error) return done(error);
      if (!token) return done(null, false);
      if (token.userId) {
        findUser(token.userId, (error, user) => {
          if (error) return done(error);
          if (!user) return done(null, false);
          done(null, user, { scope: "*" });
        });
      } else {
        // The request came from a client only since userId is null,
        // therefore the client is passed back instead of a user.
        /**
        db.clients.findByClientId(token.clientId, (error, client) => {
          if (error) return done(error);
          if (!client) return done(null, false);
          // To keep this example simple, restricted scopes are not implemented,
          // and this is just for illustrative purposes.
          done(null, client, { scope: '*' });
        });
        */
        logger.error(
          { accessToken },
          "Received a token strategy request we were not expecting"
        );
      }
    });
  }
);

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
