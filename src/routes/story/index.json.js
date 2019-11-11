import Logger from 'js-logger';
import {
  pool
} from 'src/lib/server/database.js';
import {
  listAllQuery,
  listPreviewQuery,
} from 'src/routes/story/_stories';

export const get = (req, res) => {
  const context = req.query.context;
  let query;
  switch (context) {
    case 'preview':
      query = listPreviewQuery;
      break;
    default:
      query = listAllQuery;
  }

  Logger.info('Fetching story data with query', query, context);

  return pool.query(query).then((results) => {
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