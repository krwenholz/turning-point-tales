import * as Alexa from "ask-sdk-core";
import CancelAndStopIntentHandler from "./intent_handlers/_cancel_and_stop";
import DecisionGivenChooseStoryDecisionIntentHandler from "./intent_handlers/_decision_given_choose_story_decision";
import ErrorHandler from "./_error_handler";
import GoBackIntentHandler from "./intent_handlers/_go_back";
import HelpIntentHandler from "./intent_handlers/_help";
import LaunchRequestHandler from "./request_handlers/_launch";
import RestartStoryIntentHandler from "./intent_handlers/_restart_story";
import SessionEndedRequestHandler from "./request_handlers/_session_ended";
import StartedInProgressChooseStoryIntentHandler from "./intent_handlers/_started_in_progress_choose_story";
import StoryTitleChoiceGivenChooseStoryIntentHandler from "./intent_handlers/_story_title_choice_given_choose_story";
import {
  SkillRequestSignatureVerifier,
  TimestampVerifier
} from "ask-sdk-express-adapter";
import { findAccessToken } from "src/authentication/oauth";
import { findUser, findUserSafeDetails } from "src/lib/server/users";
import { logger } from "src/logging";

const GetLinkedInfoInterceptor = {
  async process(handlerInput) {
    logger.info(
      {
        sessionId: handlerInput.requestEnvelope.session.sessionId,
        accessToken: handlerInput.requestEnvelope.session.user
      },
      "GetLinkedInfoInterceptor"
    );

    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    if (!sessionAttributes.user) sessionAttributes.user = {};
    sessionAttributes.user.subscriptionPeriodEnd = new Date("1990-07-13");

    const accessToken = (handlerInput.requestEnvelope.session.user || {})
      .accessToken;

    // TODO(kyle): Must be a smarter way to update the user, but always
    // updating this information is a pretty safe way to go.
    if (accessToken) {
      const accessData = await findAccessToken(accessToken);
      /**
        if (error) {
          logger.error({ error }, "Error fetching user data for Alexa");
          return;
        }
       **/
      if (!accessData) return;
      if (accessData.userId) {
        const user = await findUser(accessData.userId);
        /**
        if (error) {
          logger.error({ error }, "Error fetching user data for Alexa");
          return;
        }
         **/
        if (!user) {
          logger.info(
            "GetLinkedInfoInterceptor: No user data was found for token."
          );
          return;
        }

        sessionAttributes.user.id = user.id;
        sessionAttributes.user.isLinked = true;
        sessionAttributes.user.firstName = user.firstName;
        sessionAttributes.user.subscriptionPeriodEnd =
          user.subscriptionPeriodEnd;
      } else {
        logger.error(
          { accessToken },
          "Received a token strategy request we were not expecting"
        );
      }
    }

    sessionAttributes.user.isSubscribed =
      sessionAttributes.user.subscriptionPeriodEnd > new Date();
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
  }
};

const LogRequestInterceptor = {
  process(handlerInput, response) {
    logger.info(handlerInput.requestEnvelope, "Handling Alexa request");
  }
};

const LogResponseInterceptor = {
  process(handlerInput, response) {
    logger.info(response, "Alexa response");
  }
};

// BEWARE: Order matters; they're handlers.
const skill = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    StoryTitleChoiceGivenChooseStoryIntentHandler,
    StartedInProgressChooseStoryIntentHandler,
    DecisionGivenChooseStoryDecisionIntentHandler,
    GoBackIntentHandler,
    RestartStoryIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addRequestInterceptors(LogRequestInterceptor, GetLinkedInfoInterceptor)
  .addResponseInterceptors(LogResponseInterceptor)
  .addErrorHandlers(ErrorHandler)
  .create();

const post = (req, res, next) => {
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
      logger.error(err, "Error processing Alexa request");
      res.status(500);
    });
};

export default post;
