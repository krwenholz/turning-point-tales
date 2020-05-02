import { logger } from "src/logging";
import { pool } from "src/db/database";

const get = (req, res) => {
  pool
    .query(
      `
    SELECT
    FROM
      oauth_access_tokens
    WHERE
        user_id = $1
    `,
      [req.user.id]
    )
    .then(results => {
      if (results.rows.length) {
        res.writeHead(200);
      } else {
        res.writeHead(404);
      }
      res.end();
    })
    .catch(error => {
      logger.error(
        { error, user: req.user.id },
        "Error fetching user alexa link status"
      );
      res.writeHead(404);
      res.end();
    });
};

const del = (req, res) => {
  pool
    .query(
      `
    DELETE
    FROM
      oauth_access_tokens
    WHERE
        user_id = $1
    `,
      [req.user.id]
    )
    .then(results => {
      res.writeHead(200);
      res.end();
    })
    .catch(error => {
      logger.error(
        { error, user: req.user.id },
        "Error deleting user alexa link"
      );
      res.writeHead(404);
      res.end();
    });
};

export { get, del };
