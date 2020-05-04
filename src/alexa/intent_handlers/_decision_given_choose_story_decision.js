import * as History from "src/components/Adventure/history";
import * as Stories from "src/routes/story/_stories";
import { logger } from "src/logging";
import {
  asConfirmable,
  asSpeakable,
  asSpeakableDecisions,
  asSpeakableStoryText,
  findConfirmedSlotValue,
  moveToNode,
  speechPauseList,
  storyDecisionChoices,
  updateStoryDecisionChoicesDirective
} from "src/alexa/_utilities";

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
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    const decision =
      sessionAttributes.decisions[
        findConfirmedSlotValue(
          handlerInput.requestEnvelope,
          "STORY_DECISION_CHOICE"
        )
      ];

    const storyId = sessionAttributes.storyId;

    sessionAttributes.store = History.goToDecision(
      decision,
      sessionAttributes.store
    );
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    return moveToNode(handlerInput, storyId, decision.storyNode);
  }
};

export default DecisionGivenChooseStoryDecisionIntentHandler;
