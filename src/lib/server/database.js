import {
  Pool
} from 'pg';
import config from 'config';

export const pool = new Pool({
  connectionString: config.get('server.database.connectionString')
});