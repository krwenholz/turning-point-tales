import {
  speechPauseList,
  asConfirmable,
  asSpeakable
} from "src/routes/api/alexa/alexa_utilities";
import { map, join } from "lodash";
import * as Stories from "src/routes/story/_stories";
import * as History from "src/components/Adventure/history";

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

export default StartedInProgressChooseStoryIntentHandler;
