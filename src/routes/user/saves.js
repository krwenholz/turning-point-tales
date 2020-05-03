import * as Saves from "src/db/saves";
import config from "config";
import { logger } from "src/logging";

const get = (req, res) => {
  return Saves.get(req.user.id, req.query.storyId)
    .then(save => {
      logger.info(
        { userId: req.user.id, storyId: req.query.storyId },
        "Fetched save"
      );
      res.status(200);
      res.end(JSON.stringify(save));
    })
    .catch(error => {
      logger.error(
        { userId: req.user.id, storyId: req.query.storyId },
        "Error fetching save"
      );
      res.status(500);
      res.end();
    });
};

const post = (req, res) => {
  return Saves.save(req.user.id, req.body.storyId, req.body.store)
    .then(() => {
      logger.info(
        { user: req.user.id, story: req.body.storyId },
        "Saved store"
      );
      res.status(200);
      res.end();
    })
    .catch(error => {
      logger.error(
        { user: req.user.id, story: req.body.storyId },
        "Error saving store"
      );
      res.status(500);
      res.end();
    });
};

export { get };
