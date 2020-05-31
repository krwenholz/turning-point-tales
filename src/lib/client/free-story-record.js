import { logger } from "src/lib/client/logger";
import { safeWindow } from "src/lib/client/safe-window";
// TODO(kyle): set story seen on first final node (cookie)
// TODO(kyle): all stories available
// TODO(kyle): set cookie on server if user logged in
// TODO(kyle): guard all buttons/stories if user has already seen story

export const setStorySeen = storyId => {
  const existingRecord = getStorySeen();
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

export const getStorySeen = () => {
  return safeWindow()
    .document.cookie.split("; ")
    .find(row => row.startsWith("FREE_STORY_RECORD"));
};
