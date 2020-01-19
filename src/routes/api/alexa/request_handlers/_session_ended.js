import { logger } from "src/logging";

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "SessionEndedRequest";
  },
  handle(handlerInput) {
    // TODO(kyle): cleanup logic goes here
    return handlerInput.responseBuilder.getResponse();
  }
};

export default SessionEndedRequestHandler;
