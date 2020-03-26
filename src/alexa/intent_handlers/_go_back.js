import * as History from "src/components/Adventure/history";
import * as Stories from "src/routes/story/_stories";
import {
  asSpeakableDecisions,
  asSpeakableStoryText,
  storyDecisionChoices,
  updateStoryDecisionChoicesDirective
} from "src/alexa/_utilities";

const GoBackIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "GoBack"
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const storyId = sessionAttributes.storyId;
    sessionAttributes.store = History.goBack(sessionAttributes.store);
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    const storyNode = sessionAttributes.store.storyNode;

    return Stories.select(storyId).then(results => {
      const story = results.rows[0];
      const decisions = History.filterAvailable(
        story["content"][storyNode]["decisions"],
        sessionAttributes.store
      );

      const decisionPrompt = asSpeakableDecisions(decisions);

      return handlerInput.responseBuilder
        .speak(asSpeakableStoryText(story, storyNode, decisionPrompt))
        .reprompt(decisionPrompt)
        .withSimpleCard(decisionPrompt)
        .addDirective(
          updateStoryDecisionChoicesDirective(storyDecisionChoices(decisions))
        )
        .withShouldEndSession(false)
        .getResponse();
    });
  }
};

export default GoBackIntentHandler;
