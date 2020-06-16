import { logger } from "src/lib/client/logger";
import { safeWindow } from "src/lib/client/safe-window";

export const setFreeStoryRecord = storyId => {
  const existingRecord = getLocalFreeStoryRecord();
  if (!existingRecord) {
    logger.info({ storyId }, "Setting FREE_STORY_RECORD");
    safeWindow().document.cookie = `FREE_STORY_RECORD=${storyId}; domain=${
      safeWindow().location.hostname
    }; samesite=lax; path=/`;
  } else {
    logger.info(
      { newStoryId: storyId, existingRecord },
      "Found existing FREE_STORY_RECORD"
    );
  }
};

export const getLocalFreeStoryRecord = () => {
  return (
    safeWindow()
      .document.cookie.split("; ")
      .find(row => row.startsWith("FREE_STORY_RECORD")) || ""
  ).replace("FREE_STORY_RECORD=", "");
};

export const freeStoryAvailable = (storyId, user) => {
  return (
    storyId ===
    (getLocalFreeStoryRecord() || (user || {}).freeStoryUsed || storyId)
  );
};
