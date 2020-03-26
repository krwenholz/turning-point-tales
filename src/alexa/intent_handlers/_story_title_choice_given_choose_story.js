import { startFreshStory, findConfirmedSlotValue } from "src/alexa/_utilities";
import * as Stories from "src/routes/story/_stories.js";

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
    const storyId = findConfirmedSlotValue(
      handlerInput.requestEnvelope,
      "STORY_TITLE_CHOICE"
    );

    return startFreshStory(storyId, handlerInput);
  }
};

export default StoryTitleChoiceGivenChooseStoryIntentHandler;
