#!/usr/bin/env node
require = require("esm")(module);
const { Pool } = require("pg");
const { map, join } = require("lodash");

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING
});

const listUsers = async () => {
  try {
    const results = await pool.query(
      `
      SELECT first_name, email
      FROM users;
    `
    );

    return results.rows;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

(async () => {
  console.log("----------------------------------");
  console.log("Users: ");
  const users = await listUsers();
  console.log(
    join(
      map(users, user => user.email),
      " "
    )
  );
})();
