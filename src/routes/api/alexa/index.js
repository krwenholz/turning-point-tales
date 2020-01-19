import * as Alexa from "ask-sdk-core";
import CancelAndStopIntentHandler from "./intent_handlers/_cancel_and_stop";
import ErrorHandler from "./_error_handler";
import HelpIntentHandler from "./intent_handlers/_help";
import LaunchRequestHandler from "./request_handlers/_launch";
import ListStoriesIntentHandler from "./intent_handlers/_list_stories";
import SessionEndedRequestHandler from "./request_handlers/_session_ended";
import config from "config";
import {
  SkillRequestSignatureVerifier,
  TimestampVerifier
} from "ask-sdk-express-adapter";
import { logger } from "src/logging";

// https://developer.amazon.com/en-US/docs/alexa/custom-skills/delegate-dialog-to-alexa.html#combine-delegation-and-manual-control-to-handle-complex-dialogs

const ChooseStoryHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "ListStories"
    );
  },
  handle(handlerInput) {
    return pool.query(listAllQuery).then(results => {
      const storyTitleChoices = map(results.rows, story => {
        return {
          id: `${story.id}`,
          name: {
            value: story.title,
            synonyms: []
          }
        };
      });

      const replaceEntityDirective = {
        type: "Dialog.UpdateDynamicEntities",
        updateBehavior: "REPLACE",
        types: [
          {
            name: "STORY_TITLE_CHOICE",
            values: storyTitleChoices
          }
        ]
      };

      const repeat = "Which tale is next?";
      const speechText = "Let's get you adventuring. " + repeat;

      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(repeat)
        .addDirective(replaceEntityDirective)
        .withSimpleCard("Story choices", speechText)
        .getResponse();
    });
  }
};

const ChooseStoryDecisionHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "ListStories"
    );
  },
  handle(handlerInput) {
    return pool.query(listAllQuery).then(results => {
      const storyTitleChoices = map(results.rows, story => {
        return {
          id: `${story.id}`,
          name: {
            value: story.title,
            synonyms: []
          }
        };
      });

      const replaceEntityDirective = {
        type: "Dialog.UpdateDynamicEntities",
        updateBehavior: "REPLACE",
        types: [
          {
            name: "STORY_TITLE_CHOICE",
            values: storyTitleChoices
          }
        ]
      };

      const repeat = "Which tale is next?";
      const speechText = "Let's get you adventuring. " + repeat;

      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(repeat)
        .addDirective(replaceEntityDirective)
        .withSimpleCard("Story choices", speechText)
        .getResponse();
    });
  }
};

const skill = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    ListStoriesIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .create();

const post = (req, res, next) => {
  logger.info(req.body, "alexa");
  return new SkillRequestSignatureVerifier()
    .verify(req.rawBody, req.headers)
    .then(() => {
      return new TimestampVerifier().verify(req.rawBody);
    })
    .then(() => {
      logger.info("everything checks out");
      return skill.invoke(req.body);
    })
    .then(skillResponse => {
      logger.info(skillResponse, "Alexa skill response");
      res.send(JSON.stringify(skillResponse));
      res.status(200);
      res.end();
    })
    .catch(err => {
      logger.error(error, "alexa");
      res.status(500);
    });
};

export { post };
