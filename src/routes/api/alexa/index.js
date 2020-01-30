import * as Alexa from "ask-sdk-core";
import CancelAndStopIntentHandler from "./intent_handlers/_cancel_and_stop";
import ErrorHandler from "./_error_handler";
import HelpIntentHandler from "./intent_handlers/_help";
import LaunchRequestHandler from "./request_handlers/_launch";
import ListStoriesIntentHandler from "./intent_handlers/_list_stories";
//import ChooseStoryIntentHandler from "./intent_handlers/_choose_story";
//import ChooseStoryDecisionIntentHandler from "./intent_handlers/_choose_story_decision";
import SessionEndedRequestHandler from "./request_handlers/_session_ended";
import config from "config";
import {
  SkillRequestSignatureVerifier,
  TimestampVerifier
} from "ask-sdk-express-adapter";
import { listAllQuery } from "src/routes/story/_stories";
import { logger } from "src/logging";
import { map, join } from "lodash";
import { pool } from "src/lib/server/database.js";

// https://developer.amazon.com/en-US/docs/alexa/custom-skills/delegate-dialog-to-alexa.html#combine-delegation-and-manual-control-to-handle-complex-dialogs

const asSpeakable = string => {
  return string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
};

const StartedInProgressChooseStoryIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "ChooseStory"
    );
  },
  handle(handlerInput) {
    return pool.query(listAllQuery).then(results => {
      const storyTitleChoices = map(results.rows, story => {
        return {
          id: `${story.id}`,
          name: {
            value: asSpeakable(story.title),
            synonyms: [asSpeakable(`${story.title} by ${story.author}`)]
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

      const storyList = join(
        map(results.rows, story => `${story.title} by ${story.author}`),
        ", "
      );

      const repeat = "Which tale is next?";
      const speechText =
        "Choose a story by saying start followed by the title. You can choose " +
        storyList;

      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard("Story choices", speechText)
        .addDirective(updateStoryTitlesDirective)
        .reprompt(repeat)
        .withShouldEndSession(false)
        .getResponse();
    });
  }
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
    const updateChoicesDirective = {
      type: "Dialog.UpdateDynamicEntities",
      updateBehavior: "REPLACE",
      types: [
        {
          name: "STORY_DECISION_CHOICE",
          values: [
            {
              id: "1",
              name: {
                value: "foo",
                synonyms: []
              }
            }
          ]
        }
      ]
    };

    return handlerInput.responseBuilder
      .speak("Cool now we can start a story TODO")
      .reprompt(
        "Would you like a light, medium, medium-dark, or dark roast? TODO"
      )
      .withSimpleCard("Options TODO", "TODO")
      .addDirective(updateChoicesDirective)
      .getResponse();
  }
};

const ChooseStoryDecisionIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "ChooseStory"
    );
  },
  handle(handlerInput) {
    logger.info("choose story decision", JSON.stringify(handlerInput));
    return handlerInput.responseBuilder
      .speak("choose story decision")
      .getResponse();
  }
};

// BEWARE: Order matters; they're handlers.
const skill = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    StoryTitleChoiceGivenChooseStoryIntentHandler,
    StartedInProgressChooseStoryIntentHandler,
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
