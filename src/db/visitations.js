import { pool } from "src/db/database.js";

export const addVisitation = async ({
  userId,
  storyId,
  nodeName,
  previousNode,
  source
}) => {
  try {
    await pool.query(
      `
      INSERT INTO visitations (user_id, story_id, node_name, previous_node_name, source)
      VALUES ($1, $2, $3, $4, $5);
    `,
      [userId, storyId, nodeName, previousNode, source]
    );
    return Promise.resolve({});
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

export const getVisitations = async userId => {
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
