import {
  speechPauseList,
  asConfirmable,
  asSpeakable,
  asSpeakableDecisions,
  asSpeakableStoryText,
  storyDecisionChoices,
  updateStoryDecisionChoicesDirective,
  findConfirmedSlotValue
} from "src/alexa/_utilities";
import { addVisitation } from "src/db/visitations";
import * as Saves from "src/db/saves";
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

    // Record the visitation and save asynchronously
    addVisitation({
      userId: (sessionAttributes.user || {}).id,
      storyId: storyId,
      nodeName: storyNode,
      previousNode: (sessionAttributes.store || {}).storyNode,
      source: "alexa"
    });

    if (sessionAttributes.user.id) {
      Saves.save(sessionAttributes.user.id, storyId, sessionAttribute.store);
    }

    return Stories.select(storyId).then(results => {
      const story = results.rows[0];
      const decisions = story["content"][storyNode]["decisions"];

      let decisionPrompt;
      if (decisions) {
        decisionPrompt = asSpeakableDecisions(
          History.filterAvailable(decisions, sessionAttributes.store)
        );
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
