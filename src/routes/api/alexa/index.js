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
import { logger } from "src/logging";

// TODO(kyle): https://developer.amazon.com/en-US/docs/alexa/account-linking/steps-to-implement-account-linking.html
// https://github.com/jaredhanson/oauth2orize

const GetLinkedInfoInterceptor = {
  async process(handlerInput) {
    if (
      handlerInput.requestEnvelope.session.new &&
      handlerInput.requestEnvelope.session.user.accessToken
    ) {
      // This is a new session and we have an access token,
      // so get the user details from Cognito and persist in session attributes
      const userData = await getUserData(
        handlerInput.requestEnvelope.session.user.accessToken
      );
      // console.log('GetLinkedInfoInterceptor: getUserData: ', userData);
      if (userData.Username !== undefined) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        sessionAttributes.firstName = getAttribute(
          userData.UserAttributes,
          "given_name"
        );
        sessionAttributes.surname = getAttribute(
          userData.UserAttributes,
          "family_name"
        );
        sessionAttributes.emailAddress = getAttribute(
          userData.UserAttributes,
          "email"
        );
        sessionAttributes.phoneNumber = getAttribute(
          userData.UserAttributes,
          "phone_number"
        );
        sessionAttributes.streetAddress = getAttribute(
          userData.UserAttributes,
          "address"
        );
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
      } else {
        console.log("GetLinkedInfoInterceptor: No user data was found.");
      }
    }
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
  .addRequestInterceptors(GetLinkedInfoInterceptor)
  .addErrorHandlers(ErrorHandler)
  .create();

export const post = (req, res, next) => {
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
