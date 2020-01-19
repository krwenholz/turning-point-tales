<script>
  import StoryText from './_StoryText.svelte';
  import Decisions from './_Decisions.svelte';
  import StoryNode from './_StoryNode.svelte';
  import Scrollable from 'src/components/Scrollable.svelte';
  import Button from 'src/components/Button.svelte';
  import Checkbox from 'src/components/Checkbox/index';
  import { concat, omit, set, keys, isArray, get, } from 'lodash';
  import { writable } from 'svelte/store';
  import { createEventDispatcher } from 'svelte';
  import { pathWrittable } from 'src/lib/path-writtable.js';
  const dispatch = createEventDispatcher();

  export let story = {};
  export let className ='';
  export let focusPath = '';
  let inOrderStory = pathWrittable();

  $: $inOrderStory = keys(story).map(storyNode => ({
    storyNode,
    story: story[storyNode],
  }));

  $: dispatch('edit', { story: asStoryDict($inOrderStory) });

  const clearFocusPath = () => focusPath = '';

  const asStoryDict = (storyArray = []) => storyArray.reduce((story, fragment) => ({
    ...story,
    [fragment.storyNode]: fragment.story,
  }), {});

  const onInput = (e, { idx, prevValue, path, changeLocation, storyIdx }) => {
    const value = e.target.value.trim();

    if (prevValue === value) {
      return;
    }

    const asPath = {
      storyNode: [storyIdx, 'storyNode'],
      storyText: [storyIdx, 'story', 'text', idx],
      decisionLabel: [storyIdx, 'story', 'decisions', idx, 'label'],
      decisionStoryNode: [storyIdx, 'story', 'decisions', idx, 'storyNode'],
    };

    inOrderStory.setAt(asPath[changeLocation], value);
  };

  const onKeydown = (e, { prevValue, changeLocation, idx, storyNode, storyIdx }) => {
    const addedNewParagraphByHittingEnter = e.key === 'Enter' && changeLocation === 'storyText'
    const deletedParagraphByHittingBackspace = e.key === 'Backspace' && !prevValue && idx !== 0;

    if(addedNewParagraphByHittingEnter) {
      inOrderStory.concatAt([storyIdx, 'story', 'text'], '');
      focusPath = [storyIdx, 'story', 'text', idx + 1];
      e.preventDefault();
    }
    else if (deletedParagraphByHittingBackspace) {
      inOrderStory.dropAt([storyIdx, 'story', 'text', idx]);
      focusPath = [storyIdx, 'story', 'text', idx - 1];
      e.preventDefault();
    }
  };

  const deleteStoryNode = (storyIdx) => {
    var answer = window.confirm(
      "Are you sure you want to delete this story fragment?\n\n" +
      "This will delete all its text and decisions."
    );
    if(answer) {
      inOrderStory.dropAt([storyIdx]);
    }
  }

  const onAddNewDecision = (path) => inOrderStory.concatAt(path, {
    label: '',
    storyNode: ''
  });

  const addNewStoryNode = () => inOrderStory.concat({
    storyNode: '',
    story: {
      text: [''],
      decisions: [
        {
          label: '',
          storyNode: '',
        }
      ]
    }
  });

  const setAsFinalNode = ({ checked, storyIdx}) => {
    const path = [storyIdx, 'story'];

    if(checked) {
      inOrderStory.setAt(path, {
        ...get($inOrderStory, path),
        decisions: [],
        final: true,
      });
    } else {
      inOrderStory.setAt(path, {
        ...omit(get($inOrderStory, path), ['final']),
        decisions: [
          {
            label: '',
            storyNode: '',
          }
        ],
        final: false,
      });
    }
  }

  const onDeleteDecision = (path) => inOrderStory.dropAt(path);
</script>

<style>
  .edit-story :global(.content) {
    padding-top: 32px;
  }

  .edit-story .story-fragment :global(.label),
  .edit-story .story-fragment :global(.input) {
    margin: 0;
  }

  .edit-story :global(.is-final-node) {
    margin-bottom: 16px;
  }

  .action-panel {
    padding: 8px 0 8px 2px;
    border-bottom: 2px solid gray;
    display: flex;
  }

  .story-fragment {
    margin-bottom: 86px;
  }
</style>

<section class={`edit-story ${className}`}>
  <Scrollable>
    <nav class='action-panel' slot='heading'>
      <Button variation='small' on:click={addNewStoryNode}>+ story node</Button>
    </nav>
    <div slot='content'>
      {#each $inOrderStory as { storyNode, story }, storyIdx }
        <div class='story-fragment'>
          <StoryNode
            {storyNode}
            {storyIdx}
            {onInput}
            on:delete={() => deleteStoryNode(storyIdx)}
          />
          <StoryText
            {storyIdx}
            {onInput}
            {onKeydown}
            {focusPath}
            {clearFocusPath}
            text={$inOrderStory[storyIdx].story.text || []}
            storyNode={storyNode}
          />
          <Checkbox
            checked={$inOrderStory[storyIdx].story.final}
            className={'is-final-node'}
            on:change={e => setAsFinalNode({
              checked: e.target.checked,
              storyIdx,
            })}
          >
            <span>Disable decisions</span>
          </Checkbox>
          <Decisions
            {storyIdx}
            {onInput}
            {onKeydown}
            {focusPath}
            {clearFocusPath}
            {onAddNewDecision}
            {onDeleteDecision}
            isFinalNode={$inOrderStory[storyIdx].story.final}
            decisions={$inOrderStory[storyIdx].story.decisions || []}
            storyNode={storyNode}
          />
        </div>
      {/each}
    </div>
  </Scrollable>
</section>
