import {
  speechPauseList,
  asConfirmable,
  asSpeakable
} from "src/routes/api/alexa/alexa_utilities";
import { filter, join, map } from "lodash";
import * as Stories from "src/routes/story/_stories";
import * as History from "src/components/Adventure/history";
import { logger } from "src/logging";

const StartedInProgressChooseStoryIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "ChooseStory"
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    // TODO(kyle): make it a real subscription
    const subscribed =
      (sessionAttributes.subscriptionEnd || new Date("1990-07-13")) >
      new Date();

    return Stories.list().then(results => {
      const storyTitleChoices = map(
        filter(results.rows, story => subscribed || story.general_release),
        story => {
          logger.info(subscribed, story.general_release, story.title, "xxx");
          return {
            id: `${story.id}`,
            name: {
              value: asConfirmable(asSpeakable(story.title)),
              synonyms: [
                asConfirmable(asSpeakable(`${story.title} by ${story.author}`))
              ]
            }
          };
        }
      );

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
        filter(results.rows, story => subscribed || story.general_release),
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

export default StartedInProgressChooseStoryIntentHandler;
