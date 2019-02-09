const dev = process.env.NODE_ENV === 'development';

module.exports = {
  dev: dev,
  environment: process.env.NODE_ENV,
  logging: {
    session: process.env.LOG_SESSION || false,
  },
  server: {
    domain: process.env['HOST'],
    port: process.env.PORT,
    database: {
      connectionString: process.env.DATABASE_URL + (dev ? '?ssl=true' : ''),
    }
  },
  patreon: {
    client: {
      id: process.env['PATREON_ID'],
      secret: process.env['PATREON_SECRET'],
    },
    redirect: `${dev ? 'http' : 'https'}://${process.env['HOST']}${dev ? `:3000` : ''}/auth/login`,
  }
}
