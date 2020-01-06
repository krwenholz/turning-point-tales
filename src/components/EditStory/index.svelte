<script>
  import StoryText from './_StoryText.svelte';
  import Decisions from './_Decisions.svelte';
  import { set, keys, cloneDeep, isArray, isString, get, toPath } from 'lodash';
  import { writable } from 'svelte/store';

  export let story;
  export let focused = '';
  story = cloneDeep(story);


  $: {
    console.log(story);
  }

  const onEvents = ({ previousValue, path, type, idx, storyNode }) => ({
    oninput(e) {
      if (previousValue === e.target.textContent) return;

      //if (!previousValue && !textContent) { //return dispatch('deleteParagraph');}
      updateStory({
        textContent: e.target.textContent,
        path
      });
    },
    onkeydown(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        return addNewParagraph({ type, storyNode, idx})
      }
    },
  });

  const updateStory = ({ path, textContent }) => {
    story[toPath(path)] =  textContent;
  }

  const addNewParagraph = ({ type, detail, storyNode }) => {
    if(type === 'storyText') {
      story[storyNode].text = [
        ...get(story, [storyNode, 'text']),
        ""
      ];
    }
  }

  const deleteParagraph = () => {};
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
      {onEvents}
      text={story[storyNode].text || []}
      storyNode={storyNode}
      on:deleteParagraph={deleteParagraph}
    />
    <Decisions
      {onEvents}
      decisions={story[storyNode].decisions || []}
      storyNode={storyNode}
    />
  </div>
  {/each}
</section>
