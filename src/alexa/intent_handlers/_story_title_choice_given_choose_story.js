import * as Saves from "src/db/saves";
import * as Stories from "src/routes/story/_stories";
import { logger } from "src/logging";
import {
  findConfirmedSlotValue,
  moveToNode,
  speechPauseParagraph,
  startFreshStory
} from "src/alexa/_utilities";

const StoryTitleChoiceGivenChooseStoryIntentHandler = {
  name: "StoryTitleChoiceGivenChooseStoryIntentHandler",
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "ChooseStory" &&
      handlerInput.requestEnvelope.request.intent.slots.STORY_TITLE_CHOICE.value
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const storyId = findConfirmedSlotValue(
      handlerInput.requestEnvelope,
      "STORY_TITLE_CHOICE"
    );

    return Saves.get(sessionAttributes.user.id, storyId)
      .then(save => {
        logger.info(
          { save, storyId, user: sessionAttributes.user.id },
          "Save found"
        );
        if (save) {
          sessionAttributes.store = save.store;
          handlerInput.attributesManager.setSessionAttributes(
            sessionAttributes
          );
          return moveToNode(
            handlerInput,
            storyId,
            save.store.storyNode,
            () =>
              `Starting previous save from ${new Date(
                save.created
              ).toLocaleDateString("default", {
                month: "long",
                day: "numeric"
              })}. ${speechPauseParagraph()}`
          ).catch(error => {
            logger.error(
              { error, storyId, userId: sessionAttributes.user.id },
              "Failed to rehydrate story save for Alex"
            );
            return startFreshStory(storyId, handlerInput);
          });
        }

        return startFreshStory(storyId, handlerInput);
      })
      .catch(error => {
        logger.error(
          { error: error, user: sessionAttributes.user.id, storyId },
          "Error fetching save"
        );
        return startFreshStory(storyId, handlerInput);
      });
  }
};

export default StoryTitleChoiceGivenChooseStoryIntentHandler;
