import {
  values,
  find,
  reject,
  flatMap,
  map,
  isEmpty,
  every,
  keys,
} from 'lodash';

export default class Corrections {
  constructor(story) {
    this._story = story;

    this.decisionsHaveValidLabels = this._decisionsHaveValidLabels();
    this.decisionsHaveValidStoryNodes = this._decisionsHaveValidStoryNodes();
    this.atLeastOneFinalNode = this._atLeastOneFinalNode();
    this.storyNodesHaveValidText = this._storyNodesHaveValidText();
  }

  get storyIsValid() {
    return every(this.all, { isValid: true });
  }

  get all() {
    return reject([
      this.storyNodesHaveValidText,
      this.decisionsHaveValidLabels,
      this.decisionsHaveValidStoryNodes,
      this.atLeastOneFinalNode,
    ], { isValid: true });
  }


  _atLeastOneFinalNode() {
    const hasFinalNode = find(values(this._story), {final: true});

    if (hasFinalNode) return { isValid: true };

    return {
      isValid: false,
      description: 'Your story must have at-least one "final" or "ending" storyNode',
      messages: [],
      results: []
    }
  }

  _storyNodesHaveValidText() {
    const storyFragmentsWithNoText = keys(this._story)
    .map(storyNode => ({
      storyNode,
      text: this._story[storyNode].text,
    }))
    .filter(({ text }) => {
      return text.length === 1 && text.includes("");
    });

    if(isEmpty(storyFragmentsWithNoText)) return { isValid: true };

    return {
      isValid: false,
      description: 'The following storyNodes are missing text',
      messages: storyFragmentsWithNoText.map(storyNode => storyNode),
      results: map(storyFragmentsWithNoText, 'storyNode'),
    };
  }

  _decisionsHaveValidStoryNodes() {
    const decisionsWithInvalidStoryNodes = reject(
      keys(this._story),
      { final: true }
    )
    .flatMap(storyNode => map(this._story[storyNode].decisions, (decision, idx) => ({
        storyNode,
        storyNodeInDecision: decision.storyNode,
        idx,
      }))
    )
    .filter(decision => !this._story[decision.storyNodeInDecision]);

    if (isEmpty(decisionsWithInvalidStoryNodes)) {
      return { isValid: true };
    }

    return {
      isValid: false,
      description: 'The following storyNodes have decisions pointing to non-existent storyNodes',
      messages: decisionsWithInvalidStoryNodes.map(decision =>
        `At storyNode "${decision.storyNode}",` +
        ` decision ${decision.idx + 1 } points to non-existent storyNode "${decision.storyNodeInDecision}"`
      ),
      results: decisionsWithInvalidStoryNodes,
    };
  }

  _decisionsHaveValidLabels() {
    const decisionsWithInvalidStoryNodes = reject(
      keys(this._story),
      { final: true }
    )
    .flatMap(storyNode => map(this._story[storyNode].decisions, (decision, idx) => ({
        storyNode,
        label: decision.label,
        idx,
      }))
    )
    .filter(decision => !decision.label.length)

    if (isEmpty(decisionsWithInvalidStoryNodes)) {
      return { isValid: true };
    }

    return {
      isValid: false,
      description: 'The following storyNodes have decisions with empty labels',
      messages: decisionsWithInvalidStoryNodes.map(decision => (
        `At storyNode "${decision.storyNode}", decision ${decision.idx + 1 } has an empty label`
      )),
      results: decisionsWithInvalidStoryNodes,
    };
  }
}

