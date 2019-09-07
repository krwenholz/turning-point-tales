#!/usr/bin/env node

const { Pool } = require('pg');
const Logger = require("js-logger");
const securePassword = require("secure-password");
const stories = require('./stories.js');

Logger.useDefaults();

const passwordHasher = securePassword();
const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING
});

/*
 * RESET
 */
const reset = async () => {
  Logger.info('Resetting database...');

  try {
    await pool.query(
      `
    TRUNCATE users;
    TRUNCATE stories;
    `,
    );

    Logger.info('... Database reset.');
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

/*
 * USERS
 * TODO(kyle): user signed up and associated in Stripe
 */
const addUser = async (firstName, lastName, email, password) => {
  try {
    const hash = await passwordHasher.hash(Buffer.from(password));

    await pool.query(
      `
      INSERT INTO
        users (email, first_name, last_name, password_hash)
      VALUES ($1, $2, $3, $4)
    `,
      [email, firstName, lastName, hash]
    );

    Logger.info("... User added", email);
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

const seedUsers = async () => {
  Logger.info('Adding seed users...');

  await addUser('Jeff', 'Jefferson', 'jeff@h2wib.com', 'foo');
  await addUser('kc', 'Cool kid', 'kristopherpaulsen@gmail.com', 'foo');
};

/*
 * STORIES
 */
const addStory = async ({ title, author, content, tags }) => {
  try {
    await pool.query(
      `
      INSERT INTO
        stories (title, author, content, tags)
      VALUES ($1, $2, $3, $4)
    `,
      [title, author, JSON.stringify(content), tags]
    );

    Logger.info("... Story added", title);
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

const seedStories = async () => {
  Logger.info('Adding seed stories...');

  for(const story of stories) {
    await addStory(story);
  }
};

/**
 * Run
 */
(async () => {
  Logger.info('Seeding begins...');

  await reset();
  await seedUsers();
  await seedStories();

  Logger.info('Seeding finished...');
})();
