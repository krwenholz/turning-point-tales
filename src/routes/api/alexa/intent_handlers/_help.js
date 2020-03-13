const HelpIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "AMAZON.HelpIntent"
    );
  },
  handle(handlerInput) {
    const speechText =
      "You can list stories, start a story with start story name, make a decision in a story with go followed by the choice, go back in a story by saying go back, or restart a story by saying restart story.";

    return Promise.resolve(
      handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .withSimpleCard(speechText)()
    );
  }
};

export default HelpIntentHandler;
