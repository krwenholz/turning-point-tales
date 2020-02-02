import { logger } from "src/lib/client/logger";
import { uniq, last } from "lodash";

const normalize = (decision = {}) => {
  return {
    consequences: [],
    requires: [],
    ...decision
  };
};

const alreadyVisited = ({ storyNode } = {}, store = {}) =>
  store.history.find(recorded => recorded.storyNode === storyNode);

const rewindHistory = (decision, store) =>
  (store.history = store.history.slice(
    0,
    store.history.findIndex(
      ({ storyNode }) => storyNode === decision.storyNode
    ) + 1
  ));

const setHistory = (decision, store) => {
  if (alreadyVisited(decision, store)) {
    rewindHistory(decision, store);
  }

  store.history = [
    ...(decision.storyNode === "start" ? [] : store.history),
    {
      storyNode: decision.storyNode,
      consequences: uniq([
        ...(decision.consequences || []),
        ...last(store.history).consequences
      ])
    }
  ];
};

export const goBack = store => {
  const previousDecision = store.history[store.history.length - 2];
  goToDecision(previousDecision, store);
  return store;
};

export const goToDecision = (decision, store) => {
  setHistory(decision, store);
  store.storyNode = decision.storyNode;
  return store;
};

export const filterAvailable = (decisions, store) => {
  return decisions.map(normalize, store).map(decision => {
    const availableDecision = decision.requires.every(prereq =>
      last(store.history).consequences.includes(prereq)
    );

    return {
      ...decision,
      label: availableDecision ? decision.label : "?",
      disabled: !availableDecision
    };
  });
};
