import {Pool} from 'pg';
import config from 'config';

const pool = new Pool({connectionString: config.get('server.database.connectionString')});

export default pool;
