<script>
  import yaml from "js-yaml";
  import AnimatedStoryNode from "./AnimatedStoryNode.svelte";

  const { keys } = Object;

  export let self = {};
  export let story = {};
  export let storyNode = "start";

  $: indexedStory = keys(story).map(key => ({
    [key]: story[key]
  }));
</script>

<style>
  .yaml-tracker {
    background: white;
    overflow-y: scroll;
    padding: 12px;
  }
</style>

<div class="{'yaml-tracker'}" bind:this="{self}">
  {#each indexedStory as story, idx}
    <AnimatedStoryNode
      {idx}
      {story}
      parent="{self}"
      scrollTo="{() => self.offsetTop}"
      selectedIdx="{indexedStory.findIndex(story => story[storyNode])}"
    />
  {/each}
</div>
