#!/usr/bin/env node
require = require('esm')(module);
const { Pool } = require("pg");
const Logger = require("js-logger");
const securePassword = require("secure-password");
const stories = require("../../stories/index.js");

Logger.useDefaults();

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING
});

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
      ON CONFLICT(title, author)
      DO UPDATE
        SET
          badges = $3,
          preview = $4,
          content = $5,
          tags = $6,
          general_release = $7;
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

const updateStories = async () => {
  Logger.info("Updating stories...");

  for (const story of stories) {
    await addStory(story);
  }
};

/**
 * Run
 */
(async () => {
  Logger.info("Updating begins...");

  await updateStories();

  Logger.info("Updating finished...");
})();
