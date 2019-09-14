import AWS from "aws-sdk";
import Logger from "js-logger";
import config from "config";
import { pool } from "src/lib/server/database.js";
import securePassword from "secure-password";
import { listAllQuery } from "../routes/story/_stories";
const passwordHasher = securePassword();
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
    return null;
  }
};

const findUserSafeDetails = async identifier => {
  try {
    const results = await pool.query(
      `
    SELECT
        email,
        id,
        first_name as "firstName"
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
    return null;
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
    pool.query(
      `
      UPDATE
        users
      SET
        password_hash = $1
      WHERE
        email = $2
      OR
        id:text = $2;
    `,
      [hash.toString("utf-8").replace(/\0/g, ""), identifier]
    );
  } catch (err) {
    Logger.error(err);
    return null;
  }
};

export {
  addUser,
  findUser,
  updateUserPassword,
  findUserSafeDetails,
  removeUser
};
