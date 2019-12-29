<script>
  export let text = [];
  export let storyNode = '';
  import { createEventDispatcher } from "svelte";
  import { getDispatchChange } from './shared';

  const dispatchChange = getDispatchChange(createEventDispatcher());
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
      on:input={e => dispatchChange(e, [storyNode, 'text', idx])}
    >
      {paragraph}
    </div>
  {/each}
</div>
