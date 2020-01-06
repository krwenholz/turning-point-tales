<script>
  import { createEventDispatcher, afterUpdate } from "svelte";
  import { get } from 'lodash';

  export let text = [];
  export let focused = '';
  export let storyNode = '';
  export let onUpdates = {};
  let nodes = {}

  afterUpdate(() => {
    if(nodes[focused]) {
      console.log(nodes[focused]);
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
      bind:this={nodes[idx]}
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
