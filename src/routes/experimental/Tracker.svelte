<script>
  import yaml from 'js-yaml';
  import exampleStory from 'src/lib/local-stories/tutorial-story.js';
  import AnimatedStoryNode from './AnimatedStoryNode.svelte';
  import { first } from 'src/lib/utils';

  const { keys } = Object;

  export let self = {};
  export let story = {};
  export let storyNode = 'start';
  let selectedIdx;

  let indexedStory = keys(exampleStory).map(key => ({
    [key]: exampleStory[key]
  }));
</script>


<style>
  div {
    overflow: scroll;
  }
</style>
<div bind:this={self}>
  {#each indexedStory as story, idx}
    <AnimatedStoryNode
      {idx}
      {story}
      parent={self}
      scrollTo={() => self.offsetTop}
      selectedIdx={indexedStory.findIndex(story => story[storyNode])}
    />
  {/each}
</div>
