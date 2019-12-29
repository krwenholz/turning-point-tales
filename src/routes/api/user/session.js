import config from "config";

/**
 * Add the svelte session data so we can refresh any async heavy pages.
 */
const get = (req, res, next) => {
  console.log("xxx");
  let sessionSeed = {};
  if (req.user !== undefined) sessionSeed = { user: req.user };

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(sessionSeed));
};

export { get };
