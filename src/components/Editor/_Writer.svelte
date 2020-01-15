<script>
  import StoryText from './_StoryText.svelte';
  import Decisions from './_Decisions.svelte';
  import StoryNode from './_StoryNode.svelte';
  import TextArea from 'src/components/TextArea/index';
  import Scrollable from 'src/components/Scrollable.svelte';
  import Button from 'src/components/Button.svelte';
  import Checkbox from 'src/components/Checkbox/index';
  import { omit, set, keys, cloneDeep, isArray, isString, get, toPath } from 'lodash';
  import { writable } from 'svelte/store';
  import { createEventDispatcher } from 'svelte';
  import { pathWrittable } from 'src/lib/path-writtable.js';
  const dispatch = createEventDispatcher();

  export let story = {};
  export let className ='';
  export let focusPath = '';
  let inOrderStory = pathWrittable();

  $: $inOrderStory = keys(story).map(key => ({
    storyNode: key,
    story: story[key],
  }));

  $: dispatch('edit', { story: asStoryDict($inOrderStory) });

  const clearFocusPath = () => focusPath = '';

  const asStoryDict = (storyArray = []) => storyArray.reduce((story, fragment) => ({
    ...story,
    [fragment.storyNode]: fragment.story,
  }), {});

  const onInput = (e, { prevValue, path, typeOfChange, storyIdx }) => {
    const value = e.target.value.trim();

    if (prevValue === value) {
      return;
    }
    else if (typeOfChange === 'storyNode') {
      inOrderStory.setAt([storyIdx, 'storyNode'], value);
    }
    else {
      inOrderStory.setAt(path, value)
    }
  };

  const onKeydown = (e, { prevValue, path, typeOfChange, idx, storyNode, storyIdx }) => {
    const addedNewParagraphByHittingEnter = e.key === 'Enter' && typeOfChange === 'storyText'
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

  const deleteStoryNode = (e) => {
    const path = [e.detail.storyIdx];
    var answer = window.confirm(
      "Are you sure you want to delete this story fragment?\n\n" +
      "This will delete all its text and decisions."
    );
    if(answer) {
      inOrderStory.dropAt(path);
    }
  }

  const onAddNewDecision = (path) => inOrderStory.concatAt(path, {
    label: 'placeholder',
    storyNode: 'start'
  });

  const addNewStoryNode = (e) => {
    $inOrderStory = [
      ...$inOrderStory,
      {
        storyNode: 'placeholder',
        story: {
          text: [''],
          decisions: [
            {
              label: 'start',
              storyNode: 'start',
            }
          ]
        }
      }
    ];
  };

  const setAsFinalNode = ({ checked, path }) => {
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
    padding: 8px 0 8px 0;
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
      <button on:click={addNewStoryNode}>add story node</button>
    </nav>
    <div slot='content'>
      {#each $inOrderStory as { storyNode, story }, storyIdx }
      <div class='story-fragment'>
        <StoryNode
          {storyNode}
          {storyIdx}
          {onInput}
          on:delete={deleteStoryNode}
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
            path: [storyIdx, 'story']
          })}
        >
          <span>Is Final Node</span>
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
