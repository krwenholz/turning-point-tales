import Logger from 'js-logger';
import { pool } from 'src/lib/server/database.js';
import { listAllQuery } from './_stories';

export const get = (req, res) => {
  Logger.info('Fetching data with query', listAllQuery);

    return pool.query(listAllQuery).then((results) => {
      const contents = JSON.stringify(results.rows);

      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      res.end(contents);
    }).catch((error) => {
      Logger.error(" IT NO WORRRKY")
      res.end();
    });
}
