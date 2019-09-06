-- TODO(kyle): https://github.com/djrobstep/migra
-- TODO(kyle): https://github.com/sqitchers/sqitch

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TRIGGER update_story_modtime BEFORE UPDATE ON stories FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();

CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.modified = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TABLE IF NOT EXISTS stories (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content JSONB NOT NULL,
  tags text[] NOT NULL,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  PRIMARY KEY (id),
  email TEXT UNIQUE NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  password_hash BYTEA NOT NULL,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
