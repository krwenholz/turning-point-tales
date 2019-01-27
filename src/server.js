import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '../__sapper__/server.js';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

// Log every request
function logger(req, res, next) {
  console.log(`~> Received ${req.method} on ${req.url}`);
  next(); // move on
}

const middleware = [
  compression({ threshold: 0 }),
  sirv('static', { dev }),
  // WARN: Not sure why we can't serve these up without configuration but this hack works for now.
  sirv('node_modules/icono/dist', { dev }),
  sapper.middleware()
];

if(dev) middleware.push(logger);

polka().use(...middleware)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
