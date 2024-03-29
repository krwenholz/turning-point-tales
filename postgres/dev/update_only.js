#!/usr/bin/env node
require = require("esm")(module);
const { Pool } = require("pg");
const securePassword = require("secure-password");
const stories = require("../../stories/index.js");

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
  contentWarnings,
  generalRelease
}) => {
  try {
    await pool.query(
      `
      INSERT INTO
        stories (title, author, badges, preview, content, tags, content_warnings, general_release)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT(title, author)
      DO UPDATE
        SET
          badges = $3,
          preview = $4,
          content = $5,
          tags = $6,
          content_warnings = $7,
          general_release = $8;
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

    console.info("... Story added", title);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const updateStories = async () => {
  console.info("Updating stories...");

  for (const story of stories) {
    await addStory(story);
  }
};

/**
 * Run
 */
(async () => {
  console.info("Updating begins...");

  await updateStories();

  console.info("Updating finished...");
})();
