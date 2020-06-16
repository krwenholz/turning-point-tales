import config from "config";
import { map } from "lodash";
import { logger } from "src/logging";
import { updateUserFreeStoryUsed } from "src/db/users";
import * as Stories from "src/routes/story/_stories";

let STORY_IDS = [];
Stories.list().then(results => {
  STORY_IDS = map(results.rows, story => story.id);
});

export const setFreeStoryRecord = (req, res, next) => {
  if (req.user && !req.cookies.FREE_STORY_RECORD) {
    res.cookie("FREE_STORY_RECORD", req.user.freeStoryUsed, {
      domain: config.get("server.domain"),
      maxAge: 365 * 24 * 60 * 60 * 1000, // 365 days
      sameSite: "lax"
    });
  }
  next();
};

export const recordFreeStoryUsed = (req, res, next) => {
  if (
    req.user &&
    STORY_IDS.some(id => id === req.cookies.FREE_STORY_RECORD) &&
    !req.user.freeStoryUsed
  ) {
    updateUserFreeStoryUsed(req.user.id, req.cookies.FREE_STORY_RECORD);
  }
  next();
};
