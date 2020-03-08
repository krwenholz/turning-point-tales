import { createHandler } from "src/routes/api/alexa/alexa_utilities";

const CancelAndStopIntentHandler = createHandler({
  name: "CancelAndStopIntentHandler",
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      (handlerInput.requestEnvelope.request.intent.name ===
        "AMAZON.CancelIntent" ||
        handlerInput.requestEnvelope.request.intent.name ===
          "AMAZON.StopIntent")
    );
  },
  handle(handlerInput) {
    const speechText = "Goodbye!";

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard("Hello World", speechText)
      .withShouldEndSession(true)
      .getResponse();
  }
});

export default CancelAndStopIntentHandler;
