--TODO: https: //github.com/djrobstep/migra
  --TODO: https: //github.com/sqitchers/sqitch

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TRIGGER update_story_modtime BEFORE UPDATE ON stories FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.modified = now();
RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TABLE IF NOT EXISTS stories(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  preview TEXT NOT NULL,
  content JSONB NOT NULL,
  badges JSONB NOT NULL,
  tags text[] NOT NULL,
  content_warnings TEXT NOT NULL DEFAULT '',
  general_release BOOLEAN NOT NULL DEFAULT FALSE,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (title, author)
);

CREATE TABLE IF NOT EXISTS users(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  password_hash BYTEA NOT NULL,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  type INTEGER NOT NULL DEFAULT 0,
  free_story_used uuid REFERENCES stories(id)
);

CREATE TABLE IF NOT EXISTS visitations(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id),
  story_id uuid REFERENCES stories(id),
  node_name TEXT NOT NULL,
  previous_node_name TEXT,
  source TEXT NOT NULL DEFAULT 'web',
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS subscriptions(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id) UNIQUE,
  errors TEXT,
  stripe_customer_id TEXT,
  subscription_id TEXT,
  subscription_period_end TIMESTAMP WITH TIME ZONE,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS saves(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id) NOT NULL,
  story_id uuid REFERENCES stories(id) NOT NULL,
  store JSONB NOT NULL,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, story_id)
);

--Users, ends up managed by connect - pg - simple
CREATE TABLE "user_sessions"(
  "sid"
  varchar NOT NULL COLLATE "default",
  "sess"
  json NOT NULL,
  "expire"
  timestamp(6) NOT NULL
)
WITH(OIDS = FALSE);
ALTER TABLE "user_sessions"
ADD CONSTRAINT "session_pkey"
PRIMARY KEY("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE TABLE IF NOT EXISTS oauth_authorization_codes(
  code TEXT NOT NULL,
  client_id TEXT NOT NULL,
  redirect_uri TEXT NOT NULL,
  user_id uuid REFERENCES users(id),
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS oauth_access_tokens(
  token TEXT NOT NULL,
  client_id TEXT NOT NULL,
  user_id uuid REFERENCES users(id),
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.modified = now();
RETURN NEW;
END;
$$ language 'plpgsql';
