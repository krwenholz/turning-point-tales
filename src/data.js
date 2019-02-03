import {Pool} from 'pg';

var connectionString = process.env.DATABASE_URL;
connectionString = process.env.NODE_ENV === 'development' ? connectionString + '?ssl=true' : connectionString;

const pool = new Pool({connectionString: connectionString});

export default pool;
