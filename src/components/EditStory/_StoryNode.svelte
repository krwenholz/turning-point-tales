<script>
  import TextArea from 'src/components/TextArea';
  import Trash from 'src/components/icons/Trash';
  import { createEventDispatcher, afterUpdate } from "svelte";

  const dispatch = createEventDispatcher();

  export let storyIdx;
  export let storyNode = '';
  export let onInput = () => {};
</script>

<style>
  .story-node {
    display: flex;
    flex-flow: row;
    align-items: flex-start;
  }

  span,
  .story-node :global(.text-area) {
    margin-bottom: 16px;
  }

  .story-node :global(svg) {
    fill: black;
    margin-right: 16px;
  }
</style>

<div class='story-node'>
  {#if storyNode === 'start'}
    <span class='story-node'>{storyNode}</span>
  {:else}
    <Trash
      on:click={() => dispatch('delete', { storyIdx })}
    >
      Delete
    </Trash>
    <TextArea
      value={storyNode}
      className='story-node'
      on:input={e => onInput(e, {
      storyIdx,
      path: [storyNode],
      typeOfChange: 'storyNode',
      prevValue: storyNode,
      })}
    />
  {/if}
</div>
