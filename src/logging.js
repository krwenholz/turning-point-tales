import Logger from "js-logger";
import config from "config";
import morgan from "morgan";

const initLogging = () => {
  Logger.useDefaults();
  Logger.setLevel(config.get("dev") ? Logger.DEBUG : Logger.INFO);
};

const requestsLogger = () => {
  return morgan(config.get("logging.format"));
};

export { initLogging, requestsLogger };
