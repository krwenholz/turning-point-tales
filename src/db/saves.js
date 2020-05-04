import { pool } from "src/db/database.js";
import { logger } from "src/logging";

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
    const { rows } = await pool.query(
      `
      SELECT DISTINCT id, user_id, story_id, store, created
      FROM saves
      WHERE user_id = $1 AND story_id = $2;
    `,
      [userId, storyId]
    );

    if (rows.length) return Promise.resolve(rows[0]);
    return Promise.resolve(null);
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};
