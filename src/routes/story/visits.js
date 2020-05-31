import { logger } from "src/logging";
import { addVisitation, getVisitations } from "src/db/visitations";

/**
 * Fetch a user's visitations.
 */
const get = async (req, res) => {
  return getVisitations(req.user.id)
    .then(visitations => {
      logger.info(
        { userId: req.user.id, visitationsLegth: visitations.length },
        "Fetched visitations"
      );
      res.status(200);
      res.end(JSON.stringify(visitations));
    })
    .catch(error => {
      logger.error({ userId: req.user.id, error }, "Error fetching visitation");
      res.status(500);
      res.end();
    });
};

/**
 * Records a user's visitations.
 */
const post = async (req, res) => {
  const visitation = {
    userId: (req.user || {}).id,
    storyId: req.body.storyId,
    nodeName: req.body.nodeName,
    previousNode: req.body.previousNodeName,
    source: "web"
  };
  return addVisitation(visitation)
    .then(() => {
      logger.info({ visitation }, "Added visitation");
      res.status(200);
      res.end();
    })
    .catch(error => {
      logger.error({ visitation }, "Error creating visitation");
      res.status(500);
      res.end();
    });
};

export { get, post };
