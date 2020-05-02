import * as Alexa from "ask-sdk-core";
import * as History from "src/components/Adventure/history";
import * as Stories from "src/routes/story/_stories";
import { logger } from "src/logging";
import { map, join, filter, find, lastIndexOf } from "lodash";

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

export const speechWithSubscriptionPrompt = (speechText, isSubscribed) => {
  if (isSubscribed) return speechText;

  return (
    speechText +
    speechPauseParagraph() +
    "Access more stories by linking a subscriber account with the card in your Alexa app."
  );
};

export const listStoriesForAlexa = handlerInput => {
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

    const storyList = map(
      stories,
      story => `${story.title} by ${story.author}`
    );

    const repeat = "Which tale is next?";
    const speechText = speechWithSubscriptionPrompt(
      "Choose a story by saying start followed by the title. You can choose " +
        join(storyList, speechPauseList()),
      sessionAttributes.user.isSubscribed
    );

    const response = handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(repeat)
      .withSimpleCard("Story choices", join(storyList, ", "))
      .addDirective(updateStoryTitlesDirective)
      .withShouldEndSession(false);

    if (!sessionAttributes.user.isLinked) {
      return response.withLinkAccountCard().getResponse();
    }
    return response.getResponse();
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
  sessionAttributes.store = store;
  handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

  return Stories.select(storyId).then(results => {
    const story = results.rows[0];

    if (!story["general_release"] && !sessionAttributes.user.isSubscribed) {
      logger.info(
        {
          title: storyId,
          user: sessionAttributes.user.id
        },
        "A user tried to start a story they don't have access to"
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
