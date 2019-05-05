import Logger from 'js-logger';
import {
  stories
} from './_stories';

function get(req, res) {
  const contents = JSON.stringify(stories);
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}

export {
  get
}