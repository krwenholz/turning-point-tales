const passwordHasher = securePassword();
import AWS from "aws-sdk";
import Logger from "js-logger";
import config from "config";
import securePassword from "secure-password";
import { pool } from "src/lib/server/database.js";

const users = [];

const findUser = async identifier => {
  try {
    const results = await pool.query(
      `
    SELECT
        email,
        id,
        first_name as "firstName",
        last_name as "lastName",
        password_hash as "passwordHash"
    FROM
        users
    WHERE
        email = $1
    OR
        id::text = $1;
    `,
      [identifier]
    );

    return results.rows[0];
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

const findUserSafeDetails = async identifier => {
  try {
    const results = await pool.query(
      `
    SELECT
        users.email,
        users.id as id,
        users.first_name as "firstName",
        subscriptions.stripe_customer_id as "stripeCustomerId",
        subscriptions.subscription_id as "subscriptionId",
        subscriptions.subscription_period_end as "subscriptionPeriodEnd"
    FROM
        users
        LEFT JOIN subscriptions ON users.id = subscriptions.user_id
    WHERE
        users.email = $1
    OR
        users.id::text = $1;
    `,
      [identifier]
    );

    return results.rows[0];
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

const addUser = async ({ firstName, lastName, email, password }) => {
  try {
    const hash = await passwordHasher.hash(Buffer.from(password));

    await pool.query(
      `
      INSERT INTO
        users
      VALUES (DEFAULT, $1, $2, $3, $4, NOW(), NOW())
    `,
      [email, firstName, lastName, hash]
    );

    Logger.info("User added", email);
    return findUserSafeDetails(email);
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

const removeUser = async identifier => {
  try {
    await pool.query(
        `
    DELETE FROM
        users
    WHERE
        email = $1
    OR
        id::text = $1;
  `,
      [identifier]
    );

    Logger.info("User removed", identifier);
    return Promise.resolve({});
  } catch (err) {
    Logger.error(err);
    return promise.reject(err);
  }
};

const updateUserPassword = async (identifier, { password }) => {
  const hash = await passwordHasher.hash(Buffer.from(password));

  try {
    await pool.query(
      `
      UPDATE
        users
      SET
        password_hash = $2
      WHERE
        email = $1
      OR
        id::text = $1;
    `,
      [identifier, hash.toString("utf-8").replace(/\0/g, "")]
    );

    return Promise.resolve({});
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

const removeSubscriptionDetails = async (identifier) => {
  try {
    await pool.query(
        `
    DELETE FROM
        subscriptions
    WHERE
        user_id = $1
  `,
      [identifier]
    );

    Logger.info("User subscription removed", identifier);
    return Promise.resolve({});
  } catch (err) {
    Logger.error(err);
    return promise.reject(err);
  }
};

const setSubscriptionDetails = async (identifier, stripeCustomerId, subscriptionId, subscriptionPeriodEnd) => {
  try {
    await pool.query(
      `
      INSERT INTO subscriptions (user_id, stripe_customer_id, subscription_period_end)
      VALUES (
        $1,
        $2,
        $3,
        $4
      )
      ON CONFLICT(user_id)
      DO UPDATE
        SET
          stripe_customer_id = $2,
          subscription_period_end = $3;
    `,
      [identifier, stripeCustomerId, subscriptionId, subscriptionPeriodEnd]
    );
    return {identifier, stripeCustomerId, subscriptionId, subscriptionPeriodEnd};
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

export {
  addUser,
  findUser,
  findUserSafeDetails,
  removeUser,
  setSubscriptionDetails,
  removeSubscriptionDetails,
  updateUserPassword
};
