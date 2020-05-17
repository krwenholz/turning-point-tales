import * as Stories from "src/routes/story/_stories";
import { asConfirmable, asSpeakable } from "src/alexa/_utilities";
import { logger } from "src/logging";
import { map, join, filter, find, lastIndexOf } from "lodash";

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  handle(handlerInput) {
    const speechText =
      "Welcome to Turning Point Tales. You can list tales, resume or directly start your next adventure.";
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    return Stories.list().then(results => {
      const stories = filter(
        results.rows,
        story => sessionAttributes.user.isSubscribed || story.general_release
      );

      const storyTitleChoices = map(stories, story => {
        return {
          id: `${story.id}`,
          name: {
            value: asConfirmable(asSpeakable(story.title)),
            synonyms: [
              asConfirmable(asSpeakable(`${story.title} by ${story.author}`)),
              asConfirmable(
                asSpeakable(story.title.slice(lastIndexOf(story.title, "-")))
              )
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

      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .withSimpleCard("Turning Point Tales", speechText)
        .addDirective(updateStoryTitlesDirective)
        .getResponse();
    });
  }
};

export default LaunchRequestHandler;
