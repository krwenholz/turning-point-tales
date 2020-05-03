import { pool } from "src/db/database.js";

export const save = async (userId, storyId, store) => {
  try {
    await pool.query(
      `
      INSERT INTO saves (user_id, story_id, store)
      VALUES ($1, $2, $3)
      ON CONFLICT(user_id, story_id)
      DO UPDATE
        SET
          store = $3;
    `,
      [userId, storyId, store]
    );

    return Promise.resolve({});
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

export const get = async (userId, storyId) => {
  try {
    const results = await pool.query(
      `
      SELECT DISTINCT id, user_id, story_id, store
      FROM saves
      WHERE user_id = $1 AND story_id = $2;
    `,
      [userId, storyId]
    );

    return Promise.resolve(results.rows[0]);
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};
