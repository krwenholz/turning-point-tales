<script>
  import TextArea from 'src/components/TextArea';
  import { createEventDispatcher, afterUpdate } from "svelte";
  import { get, toPath, join, cloneDeep } from 'lodash';

  export let text = [];
  export let focusPath = '';
  export let clearFocusPath = () => {};
  export let onKeydown = () => {};
  export let onInput = () => {};
  export let storyNode = '';
  export let nodes = {};

  afterUpdate(() => {
    if(nodes[focusPath]) {
      nodes[focusPath].focus();
      clearFocusPath();
    }
  });
</script>

<style>
  .story-text {
    display: flex;
    flex-flow: column;
    margin-bottom: 24px;
  }

  .story-text :global(.text-area) {
    margin-bottom: 16px;
  }
</style>

<div class='story-text'>
  {#each text as paragraph, idx}
    <TextArea
      value={paragraph}
      bind:this={nodes[[storyNode, 'text', idx]]}
      on:input={ e => onInput(e, {
        idx,
        storyNode,
        addition: 'storyText',
        path: [storyNode, 'text', idx],
        prevValue: paragraph,
      })}
      on:keydown={ e => onKeydown(e, {
        idx,
        storyNode,
        addition: 'storyText',
        path: [storyNode, 'text', idx],
        prevValue: paragraph,
      })}
    />
  {/each}
</div>
