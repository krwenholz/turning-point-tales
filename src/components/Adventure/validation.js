import { get, values, reject, isEmpty, keys, map, filter, has } from 'lodash';

export const isValidStory = (story) => {
  return hasValidDecisions(story) && hasValidFinalNodes(story);
}

const hasValidFinalNodes = (story) => {
  const finalStoryNodes = filter(values(story), { final: true });
  const invalidNodes = filter(finalStoryNodes, finalNode => has(finalNode, 'decisions'))
  return isEmpty(invalidNodes);
}

const hasValidDecisions = (story) => {
  const potentialStoryNodes = map(
    reject(values(story), {final: true}),
    'decisions'
  ).flat()
   .map(decision => get(decision, 'storyNode', ''));

  const invalidNodes = filter(potentialStoryNodes, storyNode => !has(story, storyNode));

  return isEmpty(invalidNodes);
}
