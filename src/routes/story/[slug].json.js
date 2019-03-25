import Logger from 'js-logger';
import {
  stories
} from './_stories.js';

function get(req, res, next) {
  const {
    slug
  } = req.params;
  const story = stories.filter((story) => story.id == slug)[0];

  if (story) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(story));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found`
    }));
  }
}

export {
  get
}
