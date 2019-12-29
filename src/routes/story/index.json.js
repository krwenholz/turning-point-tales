import { logger } from "src/logging";
import { pool } from "src/lib/server/database.js";
import { listAllQuery, listPreviewQuery } from "src/routes/story/_stories";

export const get = (req, res) => {
  const context = req.query.context;
  let query;
  switch (context) {
    case "preview":
      query = listPreviewQuery;
      break;
    default:
      query = listAllQuery;
  }

  logger.info({ query, context }, "Fetching story data with query");

  return pool
    .query(query)
    .then(results => {
      const contents = JSON.stringify(results.rows);

      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(contents);
    })
    .catch(err => {
      logger.error(err, " IT NO WORRRKY");
      res.end();
    });
};
