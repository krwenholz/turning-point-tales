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
 * RESET Database
 */
const reset = async () => {
  Logger.info('Resetting database...');

  try {
    await pool.query(
    // Order matters because of dependencies
      `
    TRUNCATE user_sessions;
    TRUNCATE stories;
    TRUNCATE subscriptions;
    DELETE FROM users;
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
  await addUser('John', 'Jefferson', 'test-nonsubscriber@h2wib.com', 'foo');
  await addUser('kyle', 'kype', 'kyle@h2wib.com', 'foo');
  await addUser('kc', 'Cool kid', 'kristopherpaulsen@gmail.com', 'foo');
};

/*
 * SUBSCRIPTIONS
 */
// Want a real subscription? You can use a dummy card:
// https://stripe.com/docs/testing#cards
const addSubscription = async (userEmail, subscriptionPeriodEnd, stripeCustomerId) => {
  try {
    await pool.query(
      `
      INSERT INTO
        subscriptions (user_id, subscription_period_end, stripe_customer_id)
      SELECT id, $2, $3
      FROM users
      WHERE email = $1;
    `,
      [userEmail, subscriptionPeriodEnd, stripeCustomerId]
    );

    Logger.info("... Subscription added", userEmail);
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

const seedSubscriptions = async () => {
  Logger.info('Seeding subscriptions...');

  const subEnd = new Date();
  subEnd.setMonth(subEnd.getMonth() + 1);
  await addSubscription('jeff@h2wib.com', subEnd, 'DUMMY');
};

/*
 * STORIES
 */
const addStory = async ({ title, author, content, tags, generalRelease }) => {
  try {
    await pool.query(
      `
      INSERT INTO
        stories (title, author, content, tags, general_release)
      VALUES ($1, $2, $3, $4, $5)
    `,
      [title, author, JSON.stringify(content), tags, generalRelease]
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
  await seedSubscriptions();
  await seedStories();

  Logger.info('Seeding finished...');
})();
