import * as Stories from "src/routes/story/_stories";
import {
  startFreshStory,
  createHandler
} from "src/routes/api/alexa/alexa_utilities";

const RestartStoryIntentHandler = createHandler({
  name: "RestartStoryIntentHandler",
  canHandle(handlerInput) {
    return (
      // TODO(kyle): Are there cases missing here?
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "RestartStory"
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const storyId = sessionAttributes.storyId;

    return startFreshStory(storyId, handlerInput);
  }
});

export default RestartStoryIntentHandler;
