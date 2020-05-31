import config from "config";
import { getVisitations } from "src/db/visitations";
import { logger } from "src/logging";

// TODO(kyle): all stories available
// TODO(kyle): guard all buttons/stories if user has already seen story

export const setStorySeen = (req, res, next) => {
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
