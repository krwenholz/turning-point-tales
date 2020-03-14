import { logger } from "src/logging";

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  handle(handlerInput) {
    const speechText =
      "Welcome to Turning Point Tales. You can list tales or choose your next adventure.";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard("Turning Point Tales", speechText)
      .getResponse();
  }
};

export default LaunchRequestHandler;
