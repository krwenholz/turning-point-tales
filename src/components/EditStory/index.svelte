<script>
  import StoryText from './_StoryText.svelte';
  import Decisions from './_Decisions.svelte';
  import StoryNode from './_StoryNode.svelte';
  import TextArea from 'src/components/TextArea';
  import { setAt, dropIdx } from 'src/lib/utilities';
  import { clone, set, keys, cloneDeep, isArray, isString, get, toPath } from 'lodash';
  import { writable } from 'svelte/store';
  import { createEventDispatcher } from 'svelte';
  import { pathWrittable } from 'src/lib/path-writtable.js';

  export let story;
  export let focusPath = '';

  let inOrderStory = pathWrittable(
    keys(story).map(key => ({
      storyNode: key,
      story: story[key],
    }))
  );

  $: dispatch('edit', { story: asStoryDict($inOrderStory) });

  const dispatch = createEventDispatcher();

  const asStoryDict = (storyArray) => storyArray.reduce((story, fragment) => ({
    ...story,
    [fragment.storyNode]: fragment.story,
  }), {});

  const clearFocusPath = () => focusPath = '';

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
    if(e.key === 'Enter' && typeOfChange === 'storyText') {
      inOrderStory.concatAt([storyIdx, 'story', 'text'], '');
      focusPath = [storyIdx, 'story', 'text', idx + 1];
      e.preventDefault();
    }
    else if (e.key === 'Backspace' && !prevValue) {
      inOrderStory.dropAt([storyIdx, 'story', 'text', idx]);
      focusPath = [storyIdx, 'story', 'text', idx - 1];
      e.preventDefault();
    }
  };

  const deleteStoryNode = (e) => {
    const path = [e.detail.storyIdx];
    var answer = window.confirm(
      "Are you sure you want to delete this story fragment?\n\n" +
      "This will delete all it's text and decisions."
    );
    if(answer) {
      inOrderStory.dropAt(path);
    }
  }

  const addNewDecision = (e) => {
    const path = [e.detail.storyIdx, 'story', 'decisions'];

    inOrderStory.concatAt(path, {
      label: 'placeholder',
      storyNode: 'start'
    });

    e.preventDefault();
  }
</script>

<style>
  .edit-story :global(.story-node) {
    font-size: 20px;
  }

  .story-fragment {
    margin-bottom: 64px;
  }
</style>

<section class='edit-story'>
  {#each $inOrderStory as { storyNode, story }, storyIdx }
  <div class='story-fragment'>
    <StoryNode
      on:delete={deleteStoryNode}
      {storyNode}
      {storyIdx}
      {onInput}
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
    <Decisions
      {storyIdx}
      {onInput}
      {onKeydown}
      {focusPath}
      {clearFocusPath}
      on:addNewDecision={addNewDecision}
      decisions={$inOrderStory[storyIdx].story.decisions || []}
      storyNode={storyNode}
    />
  </div>
  {/each}
</section>
