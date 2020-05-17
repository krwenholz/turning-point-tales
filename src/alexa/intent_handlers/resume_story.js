import * as Saves from "src/db/saves";
import { logger } from "src/logging";
import {
  findConfirmedSlotValue,
  moveToNode,
  speechPauseParagraph,
  listStoriesForAlexa
} from "src/alexa/_utilities";

const ResumeStoryIntentHandler = {
  name: "ResumeStoryIntentHandler",
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "ResumeStory"
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    return Saves.mostRecent(sessionAttributes.user.id)
      .then(save => {
        logger.info(
          { save, user: sessionAttributes.user.id },
          "Save found for resuming tale"
        );
        sessionAttributes.storyId = save.story_id;

        if (save) {
          sessionAttributes.store = save.store;
          handlerInput.attributesManager.setSessionAttributes(
            sessionAttributes
          );
          return moveToNode(
            handlerInput,
            save.story_id,
            save.store.storyNode,
            ({ title }) =>
              `Resuming your most recent save from ${new Date(
                save.created
              ).toLocaleDateString("default", {
                month: "long",
                day: "numeric"
              })} for ${title}. ${speechPauseParagraph()}`
          ).catch(error => {
            logger.error(
              { error, userId: sessionAttributes.user.id },
              "Failed to resume save for Alex"
            );
            return listStoriesForAlexa(handlerInput);
          });
        }

        return listStoriesForAlexa(handlerInput);
      })
      .catch(error => {
        logger.error(
          { error: error, user: sessionAttributes.user.id },
          "Error resuming save"
        );
        return listStoriesForAlexa(handlerInput);
      });
  }
};

export default ResumeStoryIntentHandler;
