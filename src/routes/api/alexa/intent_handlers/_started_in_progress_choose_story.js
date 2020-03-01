import {
  createHandler,
  listStoriesForAlexa
} from "src/routes/api/alexa/alexa_utilities";
import { logger } from "src/logging";

const StartedInProgressChooseStoryIntentHandler = createHandler({
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
});

export default StartedInProgressChooseStoryIntentHandler;
