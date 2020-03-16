import bunyan from "bunyan";
import config from "config";
import morgan from "morgan";

export const logger = bunyan.createLogger({ name: "browser" });

export const requestLoggingMiddleware = morgan(config.get("logging.format"));
