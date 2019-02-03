import database from '../../data.js';
import {listAllQuery} from './_stories.js';

export async function get(req, res) {
  console.info('Fetching data with query', listAllQuery);
  const results = await database.query(listAllQuery);
  const contents = JSON.stringify(results.rows);

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
