import { logger } from "src/logging";

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "SessionEndedRequest";
  },
  handle(handlerInput) {
    const clearEntitiesDirective = {
      type: "Dialog.UpdateDynamicEntities",
      updateBehavior: "CLEAR"
    };

    // TODO(kyle): cleanup logic goes here
    return handlerInput.responseBuilder
      .addDirective(clearEntitiesDirective)
      .getResponse();
  }
};

export default SessionEndedRequestHandler;
