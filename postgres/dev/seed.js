#!/usr/bin/env node

const bunyan = require("bunyan");
const securePassword = require("secure-password");
const stories = require("../../stories/index.js");
const { Pool } = require("pg");

const logger = bunyan.createLogger({ name: "browser" });

const passwordHasher = securePassword();
const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING
});

/*
 * RESET Database
 */
const reset = async () => {
  logger.info("Resetting database...");

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

    logger.info("... Database reset.");
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

/*
 * USERS
 */
const addUser = async (
  firstName,
  lastName,
  email,
  password,
  type,
  created = new Date()
) => {
  try {
    const hash = await passwordHasher.hash(Buffer.from(password));

    await pool.query(
      `
      INSERT INTO
        users (email, first_name, last_name, password_hash, type, created)
      VALUES ($1, $2, $3, $4, $5, $6)
    `,
      [email, firstName, lastName, hash, type, created]
    );

    logger.info({ email }, "... User added");
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

const seedUsers = async () => {
  logger.info("Adding seed users...");

  await addUser("Subscriber", "sub", "test-subscriber@h2wib.com", "foo", 0);
  await addUser(
    "Non Sub",
    "not",
    "test-nonsubscriber@h2wib.com",
    "foo",
    0,
    new Date("2019-01-01")
  );
  await addUser("Admin", "admin", "test-admin@h2wib.com", "foo", 20);
  await addUser("Creator", "creator", "test-creator@h2wib.com", "foo", 10);
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

    logger.info({ userEmail }, "... Subscription added");
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

const seedSubscriptions = async () => {
  logger.info("Seeding subscriptions...");

  const subEnd = new Date();
  subEnd.setMonth(subEnd.getMonth() + 1);
  await addSubscription("test-subscriber@h2wib.com", subEnd, "DUMMY");
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

    logger.info({ title }, "... Story added");
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

const seedStories = async () => {
  logger.info("Adding seed stories...");

  for (const story of stories) {
    await addStory(story);
  }
};

/*
 * VISITATIONS
 */
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

    logger.info(
      { userEmail, story, node, previousNode },
      "... Visitation added"
    );
  } catch (err) {
    logger.error(err);
    return Promise.reject(err);
  }
};

const seedVisitations = async () => {
  logger.info("Seeding visitations...");

  await addVisitation(
    "test-subscriber@h2wib.com",
    "Mr. Banks",
    "file_actual_weather_change",
    "supplementary_form_36_a"
  );

  await addVisitation(
    "test-subscriber@h2wib.com",
    "Mr. Banks",
    "stop_the_clocks",
    "looks_under_desk"
  );
};

/**
 * Run
 */
(async () => {
  logger.info("Seeding begins...");

  await reset();
  await seedUsers();
  await seedSubscriptions();
  await seedStories();
  await seedVisitations();

  logger.info("Seeding finished...");
})();
