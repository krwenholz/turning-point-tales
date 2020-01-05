<script>
  import { createEventDispatcher } from "svelte";
  import { getDispatches } from './_shared';

  export let text = [];
  export let storyNode = '';

  const dispatches = getDispatches(createEventDispatcher());
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
      class='content-editable'
      contenteditable
      on:input={e => dispatches.edit({
        value: e.target.textContent.trim(),
        path: [storyNode, 'text', idx],
      })}
      on:keydown={e => dispatches.keydown({
        idx,
        storyNode,
        type: 'storyText',
        keyCode: e.keyCode,
        value: e.target.textContent.trim(),
        path: [storyNode, 'text', idx]
      })}
    >
      {paragraph}
    </div>
  {/each}
</div>
