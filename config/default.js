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
