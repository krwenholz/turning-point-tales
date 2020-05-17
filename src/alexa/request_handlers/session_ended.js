import { logger } from "src/logging";

const SessionEndedRequestHandler = {
  name: "SessionEndedRequestHandler",
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "SessionEndedRequest";
  },
  handle(handlerInput) {
    const clearEntitiesDirective = {
      type: "Dialog.UpdateDynamicEntities",
      updateBehavior: "CLEAR"
    };

    return handlerInput.responseBuilder
      .addDirective(clearEntitiesDirective)
      .getResponse();
  }
};

export default SessionEndedRequestHandler;
