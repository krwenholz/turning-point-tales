<script>
  import StoryText from './_StoryText.svelte';
  import Decisions from './_Decisions.svelte';
  import TextArea from 'src/components/TextArea';
  import { setAt, dropIdx } from 'src/lib/utilities';
  import { clone, set, keys, cloneDeep, isArray, isString, get, toPath } from 'lodash';
  import { writable } from 'svelte/store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let story;
  export let focusPath = '';

  $: { console.log(story); }

  const clearFocusPath = () => focusPath = '';

  const onInput = (e, { prevValue, path, typeOfChange }) => {
    const value = e.target.value.trim();

    if (prevValue === value) return;

    if(typeOfChange === 'storyNode') {
      story[value] = story[prevValue]
      delete story[prevValue];
    } else {
      story = setAt(story, path, value);
    }

    dispatch('edit', { story })
  };

  const onKeydown = (e, { prevValue, path, typeOfChange, idx, storyNode }) => {
    if (e.key === 'Enter') {
      if(typeOfChange === 'storyText') {
        story[storyNode].text = story[storyNode].text.concat('');
        focusPath = [storyNode, 'text', idx + 1];
        e.preventDefault();
      }
    }
    else if (e.key === 'Backspace' && !prevValue) {
      story[storyNode].text = dropIdx(story[storyNode].text, idx)
      focusPath = [storyNode, 'text', idx - 1];
      e.preventDefault();
    }
  };

  const deleteParagraph = () => {};
</script>

<style>
  .edit-story :global(.story-text) {
    padding-left: 40px;
  }

  .edit-story :global(.decisions) {
    padding-left: 40px;
  }
</style>

<section class='edit-story'>
  {#each keys(story) as storyNode}
  <div>
    <TextArea
      value={storyNode}
      on:input={e => onInput(e, {
        path: [storyNode],
        typeOfChange: 'storyNode',
        prevValue: storyNode,
      })}
    />
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
