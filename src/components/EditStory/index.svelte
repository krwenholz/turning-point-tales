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
  let inOrderStory = keys(story).map(key => ({
    storyNode: key,
    story: story[key],
  }));

  $: {
    dispatch('edit', {
      story: inOrderStory.reduce((story, fragment) => {
        return {
          ...story,
          [fragment.storyNode]: fragment.story,
        }
      }, {})
    });
  }

  const clearFocusPath = () => focusPath = '';

  const onInput = (e, { prevValue, path, typeOfChange, storyIdx }) => {
    const value = e.target.value.trim();

    if (prevValue === value) {
      return;
    }
    else if (typeOfChange === 'storyNode') {
      inOrderStory[storyIdx].storyNode = value;
    }
    else {
      inOrderStory = setAt(inOrderStory, path, value);
    }
  };

  const onKeydown = (e, { prevValue, path, typeOfChange, idx, storyNode, storyIdx }) => {
    if (e.key === 'Enter') {
      if(typeOfChange === 'storyText') {
        inOrderStory[storyIdx].story.text = inOrderStory[storyIdx].story.text.concat("");
        focusPath = [storyIdx, 'story', 'text', idx + 1];
        e.preventDefault();
      }
    }
    else if (e.key === 'Backspace' && !prevValue) {
      inOrderStory[storyIdx].story.text = dropIdx(inOrderStory[storyIdx].story.text, idx)
      focusPath = [storyIdx, 'story', 'text', idx - 1];
      e.preventDefault();
    }
  };
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
  {#each inOrderStory as { storyNode, story }, storyIdx }
  <div>
    <TextArea
      value={storyNode}
      on:input={e => onInput(e, {
        storyIdx,
        path: [storyNode],
        typeOfChange: 'storyNode',
        prevValue: storyNode,
      })}
    />
    <StoryText
      {storyIdx}
      {onInput}
      {onKeydown}
      {focusPath}
      {clearFocusPath}
      text={inOrderStory[storyIdx].story.text || []}
      storyNode={storyNode}
    />
    <Decisions
      {storyIdx}
      {onInput}
      {onKeydown}
      {focusPath}
      {clearFocusPath}
      decisions={inOrderStory[storyIdx].story.decisions || []}
      storyNode={storyNode}
    />
  </div>
  {/each}
</section>
