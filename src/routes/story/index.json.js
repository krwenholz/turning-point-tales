import Logger from 'js-logger';
import database from '../../data';
import {listAllQuery} from './_stories';

function get(req, res) {
  console.info('Fetching data with query', listAllQuery);

  return database.query(listAllQuery).then((results) => {
    const contents = JSON.stringify(results.rows)
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(contents);
  });

}

export {
  get
}
