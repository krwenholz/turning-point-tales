import { logger } from "src/logging";

/**
 * Report CSP violations.
 */
const post = (req, res) => {
  logger.info({ violation: req.body }, "CSP violation reported");
};

export { post };
