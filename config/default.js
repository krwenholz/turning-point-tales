const dev = process.env.NODE_ENV === 'development';
const customLogConfig = 'H2WIB_REQUEST_LOG: :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

module.exports = {
  dev: dev,
  environment: process.env.NODE_ENV,
  logging: {
    format: dev ? 'dev' : customLogConfig,
  },
  sendGrid: {
    apiKey: process.env['SEND_GRID_API_KEY'],
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
      accessToken: process.env['PATREON_ACCESS_TOKEN'],
      refreshToken: process.env['PATREON_REFRESH_TOKEN'],
    },
    tiers: ['Townsperson', 'Wanderer'],
    redirect: `${dev ? 'http' : 'https'}://${process.env['HOST']}${dev ? `:3000` : ''}/auth/login`,
  },
  aws: {
    default: {
    },
    production: {
    }
  }
}
