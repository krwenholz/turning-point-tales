<script>
  import { createEventDispatcher, afterUpdate } from "svelte";
  import { get, toPath, join } from 'lodash';

  export let text = [];
  export let focusPath = '';
  export let storyNode = '';
  export let onUpdates = {};
  export let nodes = {};

  $: {
    console.log(nodes);
  }

  afterUpdate(() => {
    if(nodes[focusPath]) {
      nodes[focusPath].focus();
    }
  });
</script>

<style>
  .story-text {
    display: flex;
    flex-flow: column;
  }

  .content {
    margin-bottom: 24px;
  }
</style>

<div class='story-text'>
  {#each text as paragraph, idx}
    <div
      bind:this={nodes[[storyNode, 'text', idx]]}
      class='content-editable'
      contenteditable
      {...onUpdates({
        idx,
        storyNode,
        keyType: 'storyText',
        path: [storyNode, 'text', idx],
        previousValue: paragraph,
      })}
    >
      {paragraph}
    </div>
  {/each}
</div>
