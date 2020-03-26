import { speechWithSubscriptionPrompt } from "src/alexa/_utilities";

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "AMAZON.HelpIntent"
    );
  },
  handle(handlerInput) {
    const isSubscribed = handlerInput.attributesManager.getSessionAttributes()
      .isSubscribed;
    const speechText = speechWithSubscriptionPrompt(
      "You can list stories, start a story with start story name, make a decision in a story with go followed by the choice, go back in a story by saying go back, or restart a story by saying restart story."
    );

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(speechText)
      .getResponse();

    if (isSubscribed) return response.getResponse();
    return response.withLinkAccountCard().getResponse();
  }
};

export default HelpIntentHandler;
