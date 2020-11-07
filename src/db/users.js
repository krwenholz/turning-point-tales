import AWS from "aws-sdk";
import config from "config";
import securePassword from "secure-password";
import { logger } from "src/logging";
import { pool } from "src/db/database";

const passwordHasher = securePassword();

const users = [];

export const findUser = async identifier => {
  try {
    const results = await pool.query(
      `
    SELECT
        users.email,
        users.id as id,
        users.first_name as "firstName",
        users.last_name as "lastName",
        users.type as "type",
        users.password_hash as "passwordHash"
    FROM
        users
    WHERE
        users.email = $1
    OR
        users.id::text = $1;
    `,
      [identifier]
    );

    return results.rows[0];
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

export const findUserSafeDetails = async identifier => {
  try {
    const results = await pool.query(
      `
    SELECT
        users.email,
        users.id as id,
        users.first_name as "firstName",
        users.type as "type",
        users.created as "created"
    FROM
        users
    WHERE
        users.email = $1
    OR
        users.id::text = $1
    `,
      [identifier]
    );

    return results.rows[0];
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

export const addUser = async ({ firstName, lastName, email, password }) => {
  try {
    const hash = await passwordHasher.hash(Buffer.from(password));

    await pool.query(
      `
      INSERT INTO
        users (id, email, first_name, last_name, password_hash, type, created, modified)
      VALUES (DEFAULT, $1, $2, $3, $4, DEFAULT, NOW(), NOW())
    `,
      [email, firstName, lastName, hash]
    );

    logger.info({ email }, "User added");
    return findUserSafeDetails(email);
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

export const removeUser = async identifier => {
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

    logger.info({ identifier }, "User removed");
    return Promise.resolve({});
  } catch (err) {
    logger.error(err);
    return promise.reject(err);
  }
};

export const updateUserPassword = async (identifier, { password }) => {
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
    logger.error(err);
    return Promise.reject(err);
  }
};
