const dev = process.env.NODE_ENV === "development";
const customLogConfig =
  'H2WIB_REQUEST_LOG: :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';
const includeSSL = !((process.env.HOST || "").match(/^localhost$/) || dev);

module.exports = {
  dev: dev,
  environment: process.env.NODE_ENV,
  logging: {
    format: dev ? "dev" : customLogConfig
  },
  sendGrid: {
    apiKey: process.env.SEND_GRID_API_KEY
  },
  server: {
    domain: process.env.HOST,
    enableHttps: process.env.ENABLE_HTTPS || false,
    port: process.env.PORT,
    database: {
      connectionString:
        process.env.DATABASE_URL + (includeSSL ? "?ssl=true" : "")
    }
  },
  aws: {
    default: {},
    production: {}
  }
};
