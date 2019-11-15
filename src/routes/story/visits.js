import Logger from 'js-logger';
import {
  pool
} from "src/lib/server/database.js";

const addVisitation = async ({
  userId,
  storyId,
  nodeName,
  previousNode
}) => {
  try {
    await pool.query(
      `
      INSERT INTO visitations (user_id, story_id, node_name, previous_node_name)
      VALUES (
        $1,
        $2,
        $3,
        $4
      )
      ON CONFLICT(user_id, story_id, node_name, previous_node_name)
      DO UPDATE SET
        total = visitations.total + 1;
    `,
      [userId, storyId, nodeName, previousNode]
    );
    return Promise.resolve({});
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

const getVisitations = async (userId) => {
  try {
    const results = await pool.query(
      `
      SELECT * FROM visitations
      WHERE user_id = $1;
    `,
      [userId]
    );
    return results.rows;
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

/**
 * Fetch a user's visitations.
 */
const get = async (req, res) => {
  return getVisitations(req.user.id)
    .then((visitations) => {
      Logger.info('Fetched visitations', req.user.id, visitations.length);
      res.status(200)
      res.end(JSON.stringify(visitations));
    })
    .catch((error) => {
      Logger.error('Error fetching visitation', req.user.id);
      res.status(500)
      res.end();
    });
}

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
      Logger.info('Added visitation', visitation);
      res.status(200);
      res.end();
    })
    .catch((error) => {
      Logger.error('Error creating visitation', visitation);
      res.status(500);
      res.end();
    });
}

export {
  get,
  post
}
