import Logger from "js-logger";

/**
 * Report CSP violations.
 */
const post = (req, res) => {
  Logger.info("CSP violation reported", req.body);
};

export { post };
