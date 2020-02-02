import * as Stories from "src/routes/story/_stories";
import { map, join } from "lodash";
import { logger } from "src/logging";

const ListStoriesIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "ListStories"
    );
  },
  handle(handlerInput) {
    return Stories.list().then(results => {
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

export default ListStoriesIntentHandler;
