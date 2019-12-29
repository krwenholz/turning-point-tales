import config from "config";

/*
 * Redirect to root domain.
 */
const requireRoot = (req, res, next) => {
  // The 'x-forwarded-proto' check is for Heroku
  if (req.headers["host"].startsWith("www")) {
    const url = "https://" + config.get("server.domain") + req.url;
    res.writeHead(302, {
      Location: url
    });
    return res.end();
  }
  next();
};

export { requireRoot };
