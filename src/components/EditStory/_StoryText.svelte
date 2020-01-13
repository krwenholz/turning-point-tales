<script>
  import TextArea from 'src/components/TextArea';
  import Minus from 'src/components/icons/Minus.svelte';
  import { createEventDispatcher, afterUpdate } from "svelte";
  import { get, toPath, join, cloneDeep } from 'lodash';

  export let storyIdx;
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
  }

  p {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 0 16px 0;
    padding: 0
  }

  .story-text :global(svg) {
    position: absolute;
    top: 0;
    left: -1%;
    width: 26px;
  }

  .story-text :global(.text-area) {
    flex: 1;
    padding-left: 24px;
  }
</style>

<div class='story-text'>
  {#each text as paragraph, idx}
    <p>
      <Minus />
      <TextArea
        value={paragraph}
        bind:this={nodes[[storyIdx, 'story', 'text', idx]]}
        on:input={ e => onInput(e, {
          idx,
          storyIdx,
          storyNode,
          typeOfChange: 'storyText',
          path: [storyIdx, 'story', 'text', idx],
          prevValue: paragraph,
        })}
        on:keydown={ e => onKeydown(e, {
          idx,
          storyIdx,
          storyNode,
          typeOfChange: 'storyText',
          path: [storyIdx, 'story', 'text', idx],
          prevValue: paragraph,
        })}
      />
    </p>
  {/each}
</div>
