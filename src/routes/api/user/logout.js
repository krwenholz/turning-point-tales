import { logger } from "src/logging";
import config from "config";

const get = (req, res) => {
  if (req.isAuthenticated())
    logger.info({ userId: req.user.id }, "Logging out");

  req.logOut();

  res.redirect("/?user=clear");
  res.end();
};

export { get };
