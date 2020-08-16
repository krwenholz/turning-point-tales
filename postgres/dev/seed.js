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

  const token =
    "b7556992-8158-4017-97f9-9af9417980efb91ac334-0c9b-4ad8-8d10-426c4a89d270166096d3-1446-4805-bb76-34def16df1c9b3533cd4-8b8d-4008-b2c6-fb722661a387623e5083-0ff4-4b9b-9176-f65f421302aa170a5beb-6852-4569-854f-66ee086b1c76588c55c4-6e3f-4154-8d0a-5d1f63928475b5123cad-4bb8-4d45-97f0-9120f729a85399bbacf8-e1d2-4365-804c-082ae4b270f99e3399ef-8d72-4195-a416-b7a748d49b05b6641148-375c-4f1d-bb92-73721a9ee99753a9318f-5cef-43a9-8413-aaccadea2a0aec21df81-09a7-4ff6-b636-42f0e1135304569a92f7-b2c9-484a-b7ca-9579206819e4d20ce7f0-b825-4906-826b-a0dedfb78f2c6d295095-b073-4f39-9d95-f68aa0f67042";
  await pool.query(
    `
      INSERT INTO
        oauth_access_tokens (user_id, token, client_id)
      SELECT id, $2, $3
      FROM users
      WHERE email = $1;
    `,
    ["test-subscriber@h2wib.com", token, "turning-point-test"]
  );
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
  contentWarnings,
  generalRelease
}) => {
  try {
    await pool.query(
      `
      INSERT INTO
        stories (title, author, badges, preview, content, tags, content_warnings, general_release)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `,
      [
        title,
        author,
        JSON.stringify(badges),
        preview,
        JSON.stringify(content),
        tags,
        contentWarnings || "",
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
