<script>
  import StoryText from './_StoryText.svelte';
  import Decisions from './_Decisions.svelte';
  import { setAt, dropIdx } from 'src/lib/utilities';
  import { clone, set, keys, cloneDeep, isArray, isString, get, toPath } from 'lodash';
  import { writable } from 'svelte/store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let story;
  export let focusPath = '';

  $: { console.log(story.start.text); }

  const clearFocusPath = () => focusPath = '';

  const onInput = (e, { prevValue, path }) => {
    if (prevValue === e.target.value.trim()) return;

    updateStory({
      value: e.target.value.trim(),
      path
    });
  };

  const onKeydown = (e, { prevValue, path, keyType, idx, storyNode }) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addNewKey({ keyType, storyNode, idx, path })
    }
    else if (e.key === 'Backspace' && !prevValue) {
      deleteText({ idx, storyNode });
    }
  };

  const updateStory = ({ path, value }) => {
    story = setAt(story, path, value);
    dispatch('edit', { story })
  }

  const deleteText = ({ idx, storyNode }) => {
    story[storyNode].text = dropIdx(story[storyNode].text, idx)
    focusPath = [storyNode, 'text', idx - 1];
  }

  const addNewKey = ({ keyType, storyNode, idx, path }) => {
    if(keyType === 'storyText') {
      story[storyNode].text = [ ...get(story, [storyNode, 'text']), ''];
      focusPath = [storyNode, 'text', idx + 1];
    }

    if(keyType === 'decisionLabel') {

    }

    if(keyType === 'decisionStoryNode') {

    }
  }

  const deleteParagraph = () => {};
</script>

<style>
  :global(textarea) {
    overflow-y: hidden;
    resize: none;
    border: none;
  }

  .edit-story :global(.story-text) {
    padding-left: 40px;
    margin-bottom: 32px;
  }

  .edit-story :global(.decisions) {
    padding-left: 40px;
  }


  .edit-story :global(textarea) {
    box-sizing: border-box;
    resize: none;
  }
</style>

<section class='edit-story'>
  {#each keys(story) as storyNode}
  <div>
    <b>{storyNode}</b>
    <StoryText
      {onInput}
      {onKeydown}
      {focusPath}
      {clearFocusPath}
      text={story[storyNode].text || []}
      storyNode={storyNode}
      on:deleteParagraph={deleteParagraph}
    />
    <Decisions
      {onInput}
      {onKeydown}
      {focusPath}
      {clearFocusPath}
      decisions={story[storyNode].decisions || []}
      storyNode={storyNode}
    />
  </div>
  {/each}
</section>
