<script>
  import { createEventDispatcher } from "svelte";
  import { getDispatches } from './_shared';
  import { get } from 'lodash';

  export let text = [];
  export let storyNode = '';
  export let story = {};

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
      on:input={e => dispatches.input(e, {
        idx,
        storyNode,
        type: 'storyText',
        path: [storyNode, 'text', idx],
        keyCode: e.keyCode,
        value: e.target.textContent.trim(),
        previousValue: paragraph,
      })}
      on:keydown={e => dispatches.keydown(e, {
        idx,
        storyNode,
        type: 'storyText',
        value: e.target.textContent.trim(),
        path: [storyNode, 'text', idx],
        keyCode: e.keyCode,
        previousValue: paragraph,
      })}
    >
      {paragraph}
    </div>
  {/each}
</div>
