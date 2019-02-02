//import stories from './_stories.js';
import {Pool} from 'pg';
import sql from 'sql';

sql.setDialect('postgres');

const stories = sql.define({
  name: 'stories',
  columns: ['id', 'title', 'content', 'tags', 'created', 'modified']
});

const queryString = stories.select().from(stories).toQuery().text;

var connectionString = process.env.DATABASE_URL;
connectionString = process.env.NODE_ENV === 'development' ? connectionString + '?ssl=true' : connectionString;

export async function get(req, res) {
  const pool = new Pool({connectionString: connectionString});

  console.info('Fetching data with query', queryString);
  const results = await pool.query(queryString);
  const contents = JSON.stringify(results.rows);

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
/*
  */
