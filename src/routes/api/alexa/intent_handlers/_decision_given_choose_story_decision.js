import {
  speechPauseList,
  asConfirmable,
  asSpeakable,
  asSpeakableDecisions,
  asSpeakableStoryText,
  storyDecisionChoices,
  updateStoryDecisionChoicesDirective,
  findConfirmedSlotValue
} from "src/routes/api/alexa/_utilities";
import * as Stories from "src/routes/story/_stories";
import * as History from "src/components/Adventure/history";

const DecisionGivenChooseStoryDecisionIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name ===
        "ChooseStoryDecision" &&
      handlerInput.requestEnvelope.request.intent.slots.STORY_DECISION_CHOICE
        .value
    );
  },
  handle(handlerInput) {
    const decision = findConfirmedSlotValue(
      handlerInput.requestEnvelope,
      "STORY_DECISION_CHOICE"
    );
    const storyNode = decision;

    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const storyId = sessionAttributes.storyId;
    sessionAttributes.store = History.goToDecision(
      decision,
      sessionAttributes.store
    );
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    return Stories.select(storyId).then(results => {
      const story = results.rows[0];
      const decisions = History.filterAvailable(
        story["content"][storyNode]["decisions"],
        sessionAttributes.store
      );

      let decisionPrompt;
      if (decisions) {
        decisionPrompt = asSpeakableDecisions(decisions);
      } else {
        decisionPrompt =
          "The End. To start another story say " +
          speechPauseList() +
          "list stories.";
      }

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

export default DecisionGivenChooseStoryDecisionIntentHandler;
