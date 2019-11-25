#!/usr/bin/env node

const { Pool } = require("pg");
const Logger = require("js-logger");
const securePassword = require("secure-password");
const stories = require("./stories.js");

Logger.useDefaults();

const passwordHasher = securePassword();
const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING
});

/*
 * RESET Database
 */
const reset = async () => {
  Logger.info("Resetting database...");

  try {
    await pool.query(
      // Order matters because of dependencies
      `
    TRUNCATE users CASCADE;
    TRUNCATE user_sessions CASCADE;
    TRUNCATE stories CASCADE;
    TRUNCATE visitations CASCADE;
    TRUNCATE subscriptions CASCADE;
    `
    );

    Logger.info("... Database reset.");
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

/*
 * USERS
 */
const addUser = async (firstName, lastName, email, password, type) => {
  try {
    const hash = await passwordHasher.hash(Buffer.from(password));

    await pool.query(
      `
      INSERT INTO
        users (email, first_name, last_name, password_hash, type)
      VALUES ($1, $2, $3, $4, $5)
    `,
      [email, firstName, lastName, hash, type]
    );

    Logger.info("... User added", email);
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

const seedUsers = async () => {
  Logger.info("Adding seed users...");

  await addUser("Jeff", "subscriber", "jeff@h2wib.com", "foo", 0);
  await addUser("Non Sub", "not", "test-nonsubscriber@h2wib.com", "foo", 0);
  await addUser("Admin", "admin", "admin@h2wib.com", "foo", 20);
  await addUser("Creator", "creator", "test-creator@h2wib.com", "foo", 10);
  await addUser("kc", "kid", "kristopherpaulsen@gmail.com", "foo", 10);
};

/*
 * SUBSCRIPTIONS
 */
// Want a real subscription? You can use a dummy card:
// https://stripe.com/docs/testing#cards
const addSubscription = async (
  userEmail,
  subscriptionPeriodEnd,
  stripeCustomerId
) => {
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
  Logger.info("Seeding subscriptions...");

  const subEnd = new Date();
  subEnd.setMonth(subEnd.getMonth() + 1);
  await addSubscription("jeff@h2wib.com", subEnd, "DUMMY");
};

/*
 * STORIES
 */
const addStory = async ({
  title,
  author,
  badges,
  preview,
  content,
  tags,
  generalRelease
}) => {
  try {
    await pool.query(
      `
      INSERT INTO
        stories (title, author, badges, preview, content, tags, general_release)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
      [
        title,
        author,
        JSON.stringify(badges),
        preview,
        JSON.stringify(content),
        tags,
        generalRelease
      ]
    );

    Logger.info("... Story added", title);
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

const seedStories = async () => {
  Logger.info("Adding seed stories...");

  for (const story of stories) {
    await addStory(story);
  }
};

/*
 * VISITATIONS
 */
// Want a real subscription? You can use a dummy card:
// https://stripe.com/docs/testing#cards
const addVisitation = async (userEmail, story, node, previousNode) => {
  try {
    await pool.query(
      `
      INSERT INTO
        visitations (user_id, story_id, node_name, previous_node_name)
      SELECT users.id, stories.id, $3, $4
      FROM users, stories
      WHERE email = $1 AND title = $2;
    `,
      [userEmail, story, node, previousNode]
    );

    Logger.info("... Visitation added", userEmail);
  } catch (err) {
    Logger.error(err);
    return Promise.reject(err);
  }
};

const seedVisitations = async () => {
  Logger.info("Seeding visitations...");

  await addVisitation(
    "jeff@h2wib.com",
    "Mr. Banks",
    "file_actual_weather_change",
    "supplementary_form_36_a"
  );
};

/**
 * Run
 */
(async () => {
  Logger.info("Seeding begins...");

  await reset();
  await seedUsers();
  await seedSubscriptions();
  await seedStories();
  await seedVisitations();

  Logger.info("Seeding finished...");
})();
