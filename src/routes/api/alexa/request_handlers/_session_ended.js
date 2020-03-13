import { logger } from "src/logging";
import { createHandler } from "src/routes/api/alexa/_utilities";

const SessionEndedRequestHandler = createHandler({
  name: "SessionEndedRequestHandler",
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "SessionEndedRequest";
  },
  handle(handlerInput) {
    const clearEntitiesDirective = {
      type: "Dialog.UpdateDynamicEntities",
      updateBehavior: "CLEAR"
    };

    return handlerInput.responseBuilder.addDirective(clearEntitiesDirective);
  }
});

export default SessionEndedRequestHandler;
