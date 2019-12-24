import bunyan from "bunyan";
import config from "config";
import morgan from "morgan";

const logger = bunyan.createLogger({ name: "browser" });

const requestLoggingMiddleware = () => {
  return morgan(config.get("logging.format"));
};

export { requestLoggingMiddleware, logger };
