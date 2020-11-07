import { logger } from "src/logging";
import { pool } from "src/db/database";

const users = async () => {
  try {
    const results = await pool.query(
      `
    SELECT
        COUNT(*) as total,
        COUNT(*) FILTER(WHERE created > CURRENT_DATE - INTERVAL '7 days') as new_past_week,
        COUNT(*) FILTER(WHERE created > CURRENT_DATE - INTERVAL '1 day') as new_past_24_hours
    FROM
        users;
    `,
      []
    );

    return results.rows[0];
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

const recentVisitations = async () => {
  try {
    const results = await pool.query(
      `
    SELECT
        stories.title,
        visitations.node_name,
        visitations.previous_node_name,
        visitations.created
    FROM
        stories
        INNER JOIN visitations ON stories.id = visitations.story_id
    ORDER BY visitations.created DESC
    LIMIT 10;
    `,
      []
    );

    return results.rows;
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

export const get = async (req, res, next) => {
  try {
    const results = {};
    results["users"] = await users();
    results["recentVisitations"] = await recentVisitations();
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(results));
  } catch (err) {
    logger.error(err);

    res.writeHead(500, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Sorry! We encountered an error.`
      })
    );
  }
};
