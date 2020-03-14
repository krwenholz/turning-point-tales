import { logger } from "src/logging";
import { server } from "src/authentication/oauth";

const post = (req, res, next) => {
  return server.decision()(req, res, next);
};

export { post };
