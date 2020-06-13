import config from "config";
import { logger } from "src/logging";
import { updateUserFreeStoryUsed } from "src/db/users";

export const setFreeStoryRecord = (req, res, next) => {
  if (req.user && !req.cookies.FREE_STORY_RECORD) {
    // TODO(kyle): test
    res.cookie("FREE_STORY_RECORD", req.user.freeStoryUsed, {
      domain: config.get("server.domain"),
      maxAge: 365 * 24 * 60 * 60 * 1000, // 365 days
      sameSite: "lax"
    });
  }
  next();
};

export const recordFreeStoryUsed = (req, res, next) => {
  logger.info({ story: req.cookies.FREE_STORY_RECORD }, "XXXX");
  if (req.user && req.cookies.FREE_STORY_RECORD && !req.user.freeStoryUsed) {
    updateUserFreeStoryUsed(req.user.id, req.cookies.FREE_STORY_RECORD);
  }
  next();
};
