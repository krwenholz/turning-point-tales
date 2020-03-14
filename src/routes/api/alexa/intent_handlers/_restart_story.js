import * as Stories from "src/routes/story/_stories";
import {
  startFreshStory
} from "src/routes/api/alexa/_utilities";

const RestartStoryIntentHandler = {
  name: "RestartStoryIntentHandler",
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "RestartStory"
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const storyId = sessionAttributes.storyId;

    return startFreshStory(storyId, handlerInput);
  }
};

export default RestartStoryIntentHandler;
