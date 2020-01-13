<script>
  import Trash from 'src/components/icons/Trash';
  import EditText from 'src/components/icons/EditText.svelte';
  import Input from 'src/components/Input';
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
    align-items: center;
    margin-bottom: 16px;
  }

  span,
  .story-node :global(.text-area) {
    margin-bottom: 16px;
  }

  .story-node :global(svg) {
    fill: black;
    margin-left: 16px;
  }

  .story-node :global(.input),
  .story-node :global(label) {
    margin: 0;
  }
</style>

<div class='story-node'>
  {#if storyNode === 'start'}
    <span class='story-node'>{storyNode}</span>
  {:else}
    <Input
      value={storyNode}
      on:input={e => onInput(e, {
        storyIdx,
        path: [storyNode],
        typeOfChange: 'storyNode',
        prevValue: storyNode,
      })}
    />
    <Trash on:click={() => dispatch('delete', { storyIdx })}>
      Delete
    </Trash>
  {/if}
</div>
