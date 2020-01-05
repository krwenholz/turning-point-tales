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
      on:keydown|preventDefault
      on:input={() => alert("WAT")}
      on:keyup={e => dispatches(e, {
        idx,
        storyNode,
        type: 'storyText',
        value: e.target.textContent.trim(),
        path: [storyNode, 'text', idx],
        keyCode: e.keyCode,
        nodeToFocus: e.target,
      })}
    >
      {paragraph}
    </div>
  {/each}
</div>
