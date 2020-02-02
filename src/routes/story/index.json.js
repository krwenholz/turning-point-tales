import { logger } from "src/logging";
import * as Stories from "src/routes/story/_stories";

export const get = (req, res) => {
  const context = req.query.context;
  let query;
  switch (context) {
    case "preview":
      query = Stories.listPreview;
      break;
    default:
      query = Stories.list;
  }

  logger.info({ context }, "Fetching story data with query");

  return query()
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
