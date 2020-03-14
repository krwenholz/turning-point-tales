import { listStoriesForAlexa } from "src/routes/api/alexa/_utilities";
import { logger } from "src/logging";

const StartedInProgressChooseStoryIntentHandler = {
  name: "StartedInProgressChooseStoryIntentHandler",
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "ChooseStory"
    );
  },
  handle(handlerInput) {
    return listStoriesForAlexa(handlerInput);
  }
};

export default StartedInProgressChooseStoryIntentHandler;
