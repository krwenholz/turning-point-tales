import Logger from 'js-logger';
import { pool } from 'src/lib/server/database.js';
import { selectQuery } from './_stories.js';

export const get = async (req, res, next) => {
  const { slug } = req.params;
  const query = selectQuery(slug);

  try {
    const results = await pool.query(query.text, query.values);
    if(results.rows[0]) {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify(results.rows[0]));
    } else {
      res.writeHead(404, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify({
        message: `Not found`
      }));
    }
  } catch (e) {
    Logger.error(e);

    res.writeHead(500, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Sorry! We encountered an error.`
    }));
  }
};
