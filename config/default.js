const dev = process.env.NODE_ENV === 'development';
const customLogConfig = 'H2WIB_REQUEST_LOG: :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';
const includeSSL = !((process.env.HOST || '').match(/^localhost$/) || dev);

module.exports = {
  dev: dev,
  environment: process.env.NODE_ENV,
  logging: {
    format: dev ? 'dev' : customLogConfig,
  },
  sendGrid: {
    apiKey: process.env.SEND_GRID_API_KEY,
  },
  server: {
    domain: process.env.HOST,
    port: process.env.PORT,
    database: {
      connectionString: process.env.DATABASE_URL + (includeSSL ? '?ssl=true' : ''),
    }
  },
  stripe: {
    endpointSecret: process.env.STRIPE_ENDPOINT_SECRET || '',
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: Buffer.from(process.env.STRIPE_SECRET_KEY || '').toString('base64'),
    subscriptionId: process.env.STRIPE_SUBSCRIPTION_PLAN_ID,
  },
  aws: {
    default: {
    },
    production: {
    }
  }
}
