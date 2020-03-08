import * as Alexa from "ask-sdk-core";
import * as History from "src/components/Adventure/history";
import * as Stories from "src/routes/story/_stories";
import { logger } from "src/logging";
import { map, join, filter, find } from "lodash";

const decisionLabels = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

export const asSpeakable = string => {
  return Alexa.escapeXmlCharacters(string.toLowerCase());
};

export const asConfirmable = string => {
  return string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
};

export const speechPauseParagraph = () => {
  return ' <break strength="x-strong"/>';
};

export const speechPauseList = () => {
  return ' <break strength="medium"/>';
};

export const storyDecisionChoices = decisions => {
  return map(decisions, (decision, index) => {
    return {
      id: decision["storyNode"],
      name: {
        value: asConfirmable(asSpeakable(decision["label"])),
        synonyms: ["option " + decisionLabels[index]]
      }
    };
  });
};

export const updateStoryDecisionChoicesDirective = choices => {
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

export const asSpeakableStoryText = (story, storyNode, decisionPrompt) => {
  const justText = join(story["content"][storyNode]["text"], " ");
  return asSpeakable(justText) + speechPauseList() + decisionPrompt;
};

// TODO(kyle): Add short option forms and voice text
export const asSpeakableDecisions = decisions => {
  return (
    "Your choices are " +
    speechPauseParagraph() +
    join(
      map(
        decisions,
        (decision, index) =>
          "option " +
          decisionLabels[index] +
          " " +
          asSpeakable(decision["label"])
      ),
      " or " + speechPauseList()
    )
  );
};

// TODO(kyle): Need a smarter fallback when this fails
export const findConfirmedSlotValue = (requestEnvelope, key) => {
  return find(
    Alexa.getSlot(requestEnvelope, key)["resolutions"][
      "resolutionsPerAuthority"
    ],
    resolution => {
      return resolution["status"]["code"] === "ER_SUCCESS_MATCH";
    }
  )["values"][0]["value"]["id"];
};

export const createHandler = handlerBase => {
  return {
    canHandle(handlerInput) {
      return handlerBase.canHandle(handlerInput);
    },
    handle(handlerInput) {
      logger.info(
        {
          requestType: handlerInput.requestEnvelope.request.type,
          requestName: handlerInput.requestEnvelope.request.intent.name,
          handlerName: handlerBase.name
        },
        "Handling Alexa request"
      );
      return handlerBase.handle(handlerInput);
    }
  };
};

export const listStoriesForAlexa = handlerInput => {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  // TODO(kyle): make it a real subscription
  const subscribed =
    (sessionAttributes.subscriptionEnd || new Date("1990-07-13")) > new Date();

  return Stories.list().then(results => {
    const storyTitleChoices = map(
      filter(results.rows, story => subscribed || story.general_release),
      story => {
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
};

export const startFreshStory = (storyId, handlerInput) => {
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
  // TODO(kyle): make it a real subscription
  const subscriptionEnd =
    sessionAttributes.subscriptionEnd || new Date("1990-07-13");
  sessionAttributes.store = store;
  handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

  return Stories.select(storyId).then(results => {
    const story = results.rows[0];

    if (!story["general_release"] && subscriptionEnd < new Date()) {
      logger.info(
        { release: story["general_release"], sub: subscriptionEnd },
        "checking xxx"
      );
      return listStoriesForAlexa(handlerInput);
    }

    const decisions = History.filterAvailable(
      story["content"][storyNode]["decisions"],
      store
    );

    const decisionPrompt = asSpeakableDecisions(decisions);

    return handlerInput.responseBuilder
      .speak(
        "Starting " +
          story.title +
          speechPauseParagraph() +
          asSpeakableStoryText(story, storyNode, decisionPrompt)
      )
      .reprompt(decisionPrompt)
      .addDirective(
        updateStoryDecisionChoicesDirective(storyDecisionChoices(decisions))
      )
      .withShouldEndSession(false)
      .getResponse();
  });
};
