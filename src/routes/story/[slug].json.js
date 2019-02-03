import database from '../../data.js';
import {selectQuery} from './_stories.js';

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;
  const query = selectQuery(slug);

  database.query(query.text, query.values)
    .then(results => {
      if(results.rows[0]) {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });

        console.info('zzz', results);
        res.end(JSON.stringify(results.rows[0]));
      }
      else {
        res.writeHead(404, {
          'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
          message: `Not found`
        }));
      }
    }).catch(e => {
      console.error(e);
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify({
        message: `Sorry! We encountered an error.`
      }));
    });
}
