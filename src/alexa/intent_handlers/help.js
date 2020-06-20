import { speechWithSubscriptionPrompt } from "src/alexa/_utilities";

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "AMAZON.HelpIntent"
    );
  },
  handle(handlerInput) {
    const user = handlerInput.attributesManager.getSessionAttributes().user;
    const speechText = speechWithSubscriptionPrompt(
      "You can list stories, start a story with start story name, make a decision in a story with go followed by the choice, go back in a story by saying go back, or restart a story by saying restart story. Story choices can be indicated by saying option and the number or saying the full choice text.",
      user.isSubscribed
    );

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(speechText)
      .getResponse();

    if (user.id) return response.getResponse();
    return response.withLinkAccountCard().getResponse();
  }
};

export default HelpIntentHandler;
