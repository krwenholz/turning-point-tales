import bunyan from "bunyan";

const logger = bunyan.createLogger({ name: "browser" });

export { logger };
