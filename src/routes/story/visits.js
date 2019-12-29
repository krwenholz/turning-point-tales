import { logger } from "src/logging";
import { pool } from "src/lib/server/database.js";

const addVisitation = async ({ userId, storyId, nodeName, previousNode }) => {
  try {
    await pool.query(
      `
      INSERT INTO visitations (user_id, story_id, node_name, previous_node_name)
      VALUES ($1, $2, $3, $4);
    `,
      [userId, storyId, nodeName, previousNode]
    );
    return Promise.resolve({});
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

const getVisitations = async userId => {
  try {
    const results = await pool.query(
      `
      SELECT DISTINCT story_id, node_name FROM visitations
      WHERE user_id = $1
      GROUP BY story_id, node_name;
    `,
      [userId]
    );
    return results.rows;
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

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
      logger.error({ userId: req.user.id }, "Error fetching visitation");
      res.status(500);
      res.end();
    });
};

/**
 * Records a user's visitations.
 */
const post = async (req, res) => {
  const visitation = {
    userId: req.user.id,
    storyId: req.body.storyId,
    nodeName: req.body.nodeName,
    previousNode: req.body.previousNodeName
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
