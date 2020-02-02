import sql from "sql";
import { pool } from "src/lib/server/database.js";
import { logger } from "src/logging";

sql.setDialect("postgres");

const _stories = sql.define({
  name: "stories",
  columns: [
    "id",
    "author",
    "title",
    "badges",
    "preview",
    "content",
    "tags",
    "general_release",
    "created",
    "modified"
  ]
});

export const list = () => {
  return pool.query(
    _stories
      .select(_stories.star())
      .from(_stories)
      .toQuery()
  );
};

export const listPreview = () => {
  return pool.query(
    _stories
      .select(
        _stories.id,
        _stories.author,
        _stories.title,
        _stories.badges,
        _stories.preview,
        _stories.tags,
        _stories.general_release
      )
      .from(_stories)
      .toQuery()
  );
};

export const select = id => {
  return pool.query(
    _stories
      .select(_stories.star())
      .from(_stories)
      .where(_stories.id.equals(id))
      .toQuery()
  );
};
