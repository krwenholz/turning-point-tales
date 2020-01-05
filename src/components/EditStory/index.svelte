<script>
  import StoryText from './_StoryText.svelte';
  import Decisions from './_Decisions.svelte';
  import { set, keys, cloneDeep, isArray, isString, get } from 'lodash';
  import { writable } from 'svelte/store';
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let story;
  story = cloneDeep(story);

  $: {
    console.clear();
    console.log(story.start.text);
  }

  const updateStory = (e) => {
    debugger;
    set(story, e.detail.path, e.detail.value);
    dispatch('edit', { story });
  }

  const enter = (e) => {
    if(e.detail.type === 'storyText') {
      story[e.detail.storyNode].text = [
        ...get(story, [e.detail.storyNode, 'text']),
        ""
      ];
    }
  }
</script>

<style>
  :global(textarea) {
    border: none;
  }

  .edit-story :global(.story-text) {
    padding-left: 40px;
    margin-bottom: 32px;
  }

  .edit-story :global(.decisions) {
    padding-left: 40px;
  }

  :global(.content-editable) {
    display: inline-block;
    padding: 8px;
  }
</style>

<section class='edit-story'>
  {#each keys(story) as storyNode}
  <div>
    <b>{storyNode}</b>
    <StoryText
      text={story[storyNode].text || []}
      storyNode={storyNode}
      on:edit={updateStory}
      on:enter={enter}
    />
    <Decisions
      decisions={story[storyNode].decisions || []}
      storyNode={storyNode}
      on:edit={updateStory}
      on:enter={enter}
    />
  </div>
  {/each}
</section>
