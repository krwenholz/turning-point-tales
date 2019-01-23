import stories from './_stories.js';

const contents = JSON.stringify(stories);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}

