import {
  values,
  find,
  difference,
  reject,
  size,
  map,
  isEmpty,
  keys,
  slice,
  parseInt
} from 'lodash';

const SPACE_AROUND_ERROR = 5;

export const toSyntaxErrorMessage = (error, data) => {
  const lines = data
    .split("\n")
    .filter(Boolean)
    .map((line, idx) => `${idx + 1}: ${line}`);

  const potentialErrorLine = parseInt(error.message.match(/line\s(\d+)/)[1]);

  if(potentialErrorLine) {
    return "Looks like there was an error in your yaml file:\n\n\n" +
      `${error.message}\n\n` +
      slice(
        lines,
        potentialErrorLine - SPACE_AROUND_ERROR,
        potentialErrorLine + SPACE_AROUND_ERROR
      ).join("\n");
  }

  return error.message;
};

export const getCorrections = (story) => [
  decisionLabelsAreFilled,
  decisionsHaveValidStoryNodes,
  storyTextIsFilled,
  atLeastOneFinalNode,
].map(fn => fn(story))
 .flat();

const atLeastOneFinalNode = (story) => {
  const hasFinalNode = find(values(story), { final: true });

  if(hasFinalNode) return [];

  return {
    heading: 'Your story must have atleast one "final" or "ending" node',
    messages: [],
  }
};

const decisionLabelsAreFilled = (story) => {
  const decisionsWithEmptyLabels =
    reject(keys(story), storyNode => story[storyNode].final)
    .map(storyNode => ({
      storyNode,
      labels: map(story[storyNode].decisions, 'label')
    }))
    .filter(({ labels }) => !labels.find(size));

  if (isEmpty(decisionsWithEmptyLabels)) return [];

  const badLabels = map(decisionsWithEmptyLabels, 'storyNode');

  return {
    heading: 'The following storyNodes have decision labels that are empty',
    messages: badLabels,
  };
};

const decisionsHaveValidStoryNodes = (story) => {
  const allStoryNodes = keys(story);

  const unconnected =
    reject(keys(story), 'final')
    .map(storyNode => ({
      storyNode,
      decisionStoryNodes: map(story[storyNode].decisions, 'storyNode')
    }))
    .filter(({ decisionStoryNodes }) => difference(decisionStoryNodes, allStoryNodes).length);

  if(isEmpty(unconnected)) return [];

  return {
    heading: 'The following storyNodes have decisions that point to non-existent story fragments',
    messages: unconnected.map(broken => `${broken.storyNode}: ${broken.decisionStoryNodes.join(', ')}`)
  };
};

const storyTextIsFilled = (story) => {
  const storyFragmentsWithNoText = keys(story)
    .map(storyNode => ({
      storyNode,
      text: story[storyNode].text,
    }))
    .filter(storyFragment => {
      return storyFragment.text.length === 1 && storyFragment.text.includes("");
    });

  if(isEmpty(storyFragmentsWithNoText)) return [];

  return {
    heading: 'The following storyNodes are missing text',
    messages: map(storyFragmentsWithNoText, 'storyNode'),
  };
};
