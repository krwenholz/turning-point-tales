import { logger } from "src/logging";
import { pool } from "src/lib/server/database.js";
import * as Stories from "./_stories.js";

export const get = async (req, res, next) => {
  return Stories.select(req.params.slug)
    .then(results => {
      if (results.rows[0]) {
        res.writeHead(200, {
          "Content-Type": "application/json"
        });

        res.end(JSON.stringify(results.rows[0]));
      } else {
        res.writeHead(404, {
          "Content-Type": "application/json"
        });

        res.end(
          JSON.stringify({
            message: `Not found`
          })
        );
      }
    })
    .catch(err => {
      logger.error(err);

      res.writeHead(500, {
        "Content-Type": "application/json"
      });

      res.end(
        JSON.stringify({
          message: `Sorry! We encountered an error.`
        })
      );
    });
};
