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
  const users = await listUsers();

  console.log("----------------------------------");
  console.log("Names and emails");
  console.log(
    join(
      map(users, user => `${user.first_name}: ${user.email}`),
      "\n"
    )
  );

  console.log("----------------------------------");
  console.log("Emails");
  console.log(
    join(
      map(users, user => user.email),
      " "
    )
  );
})();
