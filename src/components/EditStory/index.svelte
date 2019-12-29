<script>
  import StoryText from './StoryText.svelte';
  import Decisions from './Decisions.svelte';
  import { set, keys, cloneDeep } from 'lodash';
  import { writable } from 'svelte/store';
  import { createEventDispatcher } from "svelte";

  export let story;
  story = cloneDeep(story);

  const dispatch = createEventDispatcher();

  const updateStory = (e) => {
    set(story, e.detail.path, e.detail.value);
    dispatch('edit', { story });
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
    />
    <Decisions
      decisions={story[storyNode].decisions || []}
      storyNode={storyNode}
      on:edit={updateStory}
    />
  </div>
  {/each}
</section>
