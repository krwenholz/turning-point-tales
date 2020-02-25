import { logger } from "src/logging";
import { createHandler } from "src/routes/api/alexa/alexa_utilities";

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

    // TODO(kyle): cleanup logic goes here
    return handlerInput.responseBuilder
      .addDirective(clearEntitiesDirective)
      .getResponse();
  }
});

export default SessionEndedRequestHandler;
