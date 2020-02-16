import * as Alexa from "ask-sdk-core";
import CancelAndStopIntentHandler from "./intent_handlers/_cancel_and_stop";
import ErrorHandler from "./_error_handler";
import HelpIntentHandler from "./intent_handlers/_help";
import LaunchRequestHandler from "./request_handlers/_launch";
import ListStoriesIntentHandler from "./intent_handlers/_list_stories";
import SessionEndedRequestHandler from "./request_handlers/_session_ended";
import config from "config";
import * as Stories from "src/routes/story/_stories";
import * as History from "src/components/Adventure/history";
import {
  SkillRequestSignatureVerifier,
  TimestampVerifier
} from "ask-sdk-express-adapter";
import { logger } from "src/logging";
import { map, join, find } from "lodash";

const asSpeakable = string => {
  return Alexa.escapeXmlCharacters(string.toLowerCase());
};

const asConfirmable = string => {
  return string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
};

const speechPauseParagraph = () => {
  return ' <break strength="x-strong"/>';
};

const speechPauseList = () => {
  return ' <break strength="medium"/>';
};

const StartedInProgressChooseStoryIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "ChooseStory"
    );
  },
  handle(handlerInput) {
    return Stories.list().then(results => {
      // TODO(kyle): filter by subscriber status (session attribute?)
      const storyTitleChoices = map(results.rows, story => {
        return {
          id: `${story.id}`,
          name: {
            value: asConfirmable(asSpeakable(story.title)),
            synonyms: [
              asConfirmable(asSpeakable(`${story.title} by ${story.author}`))
            ]
          }
        };
      });

      const updateStoryTitlesDirective = {
        type: "Dialog.UpdateDynamicEntities",
        updateBehavior: "REPLACE",
        types: [
          {
            name: "STORY_TITLE_CHOICE",
            values: storyTitleChoices
          }
        ]
      };

      const storyList = map(
        results.rows,
        story => `${story.title} by ${story.author}`
      );

      const repeat = "Which tale is next?";
      const speechText =
        "Choose a story by saying start followed by the title. You can choose " +
        join(storyList, speechPauseList());

      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(repeat)
        .withSimpleCard("Story choices", join(storyList, ", "))
        .addDirective(updateStoryTitlesDirective)
        .withShouldEndSession(false)
        .getResponse();
    });
  }
};

const storyDecisionChoices = decisions => {
  return map(decisions, decision => {
    return {
      id: decision["storyNode"],
      name: {
        value: asConfirmable(asSpeakable(decision["label"])),
        synonyms: []
      }
    };
  });
};

const updateStoryDecisionChoicesDirective = choices => {
  return {
    type: "Dialog.UpdateDynamicEntities",
    updateBehavior: "REPLACE",
    types: [
      {
        name: "STORY_DECISION_CHOICE",
        values: choices
      }
    ]
  };
};

const asSpeakableStoryText = (story, storyNode, decisionPrompt) => {
  const justText = join(story["content"][storyNode]["text"], " ");
  return asSpeakable(justText) + speechPauseList() + decisionPrompt;
};

const asSpeakableDecisions = decisions => {
  return (
    "Your choices are " +
    speechPauseParagraph() +
    join(
      map(decisions, decision => asSpeakable(decision["label"])),
      " or " + speechPauseList()
    )
  );
};

const findConfirmedSlotValue = (requestEnvelope, key) => {
  return find(
    Alexa.getSlot(requestEnvelope, key)["resolutions"][
      "resolutionsPerAuthority"
    ],
    resolution => {
      return resolution["status"]["code"] === "ER_SUCCESS_MATCH";
    }
  )["values"][0]["value"]["id"];
};

const startFreshStory = (storyId, handlerInput) => {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  sessionAttributes.storyId = storyId;
  const storyNode = "start";
  const store = {
    storyNode: storyNode,
    history: [
      {
        consequences: [],
        requires: [],
        storyNode: storyNode
      }
    ]
  };
  sessionAttributes.store = store;
  handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

  return Stories.select(storyId).then(results => {
    const story = results.rows[0];
    const decisions = History.filterAvailable(
      story["content"][storyNode]["decisions"],
      store
    );

    if (decisions) {
      const decisionPrompt = asSpeakableDecisions(decisions);
    } else {
      const decisionPrompt =
        "The End. To start another story say " +
        speechPauseList() +
        "list stories.";
    }

    return handlerInput.responseBuilder
      .speak(
        "Starting " +
          story.title +
          speechPauseParagraph() +
          asSpeakableStoryText(story, storyNode, decisionPrompt)
      )
      .reprompt(decisionPrompt)
      .withSimpleCard(decisionPrompt)
      .addDirective(
        updateStoryDecisionChoicesDirective(storyDecisionChoices(decisions))
      )
      .withShouldEndSession(false)
      .getResponse();
  });
};

const StoryTitleChoiceGivenChooseStoryIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "ChooseStory" &&
      handlerInput.requestEnvelope.request.intent.slots.STORY_TITLE_CHOICE.value
    );
  },
  handle(handlerInput) {
    const storyId = findConfirmedSlotValue(
      handlerInput.requestEnvelope,
      "STORY_TITLE_CHOICE"
    );

    return startFreshStory(storyId, handlerInput);
  }
};

const DecisionGivenChooseStoryDecisionIntentHandler = {
  canHandle(handlerInput) {
    return (
      // TODO(kyle): Are there cases missing here?
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

// TODO(kyle): Add new intents for the other navigation options
const GoBackIntentHandler = {
  canHandle(handlerInput) {
    return (
      // TODO(kyle): Are there cases missing here?
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "GoBack"
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const storyId = sessionAttributes.storyId;
    sessionAttributes.store = History.goBack(decision, sessionAttributes.store);
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

const RestartStoryIntentHandler = {
  canHandle(handlerInput) {
    return (
      // TODO(kyle): Are there cases missing here?
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "RestartStory"
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const storyId = sessionAttributes.storyId;

    return startFreshStory(storyId, handlerInput);
  }
};

// BEWARE: Order matters; they're handlers.
const skill = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    StoryTitleChoiceGivenChooseStoryIntentHandler,
    StartedInProgressChooseStoryIntentHandler,
    DecisionGivenChooseStoryDecisionIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .create();

const post = (req, res, next) => {
  logger.info(req.body, "Alexa request received");
  return new SkillRequestSignatureVerifier()
    .verify(req.rawBody, req.headers)
    .then(() => {
      return new TimestampVerifier().verify(req.rawBody);
    })
    .then(() => skill.invoke(req.body))
    .then(skillResponse => {
      res.send(JSON.stringify(skillResponse));
      res.status(200);
      res.end();
    })
    .catch(err => {
      logger.error(error, "Error processing Alexa request");
      res.status(500);
    });
};

export { post };
