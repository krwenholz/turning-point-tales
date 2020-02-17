import * as Alexa from "ask-sdk-core";
import * as History from "src/components/Adventure/history";
import * as Stories from "src/routes/story/_stories";
import { map, join, find } from "lodash";
import { logger } from "src/logging";

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
  sessionAttributes.store = store;
  handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

  return Stories.select(storyId).then(results => {
    const story = results.rows[0];
    const decisions = History.filterAvailable(
      story["content"][storyNode]["decisions"],
      store
    );

    let decisionPrompt;
    if (decisions) {
      decisionPrompt = asSpeakableDecisions(decisions);
    } else {
      decisionPrompt =
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
      .addDirective(
        updateStoryDecisionChoicesDirective(storyDecisionChoices(decisions))
      )
      .withShouldEndSession(false)
      .getResponse();
  });
};
