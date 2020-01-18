<script>
  import TextArea from 'src/components/TextArea/index';
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

  .story-text :global(textarea) {
    margin: 0 0 24px 0;
    font-size: 14px;
    font-family: "IBM Plex Mono", "monospace";
    line-height: 1.68;
    border: var(--input-border);
    box-shadow: inset 1px 1px 1px 0px lightgray;
    border-radius: 8px;
  }

  .story-text :global(svg) {
    position: absolute;
    top: 0;
    left: -1%;
    width: 26px;
  }
</style>

<div class='story-text'>
  {#each text as paragraph, idx}
    <TextArea
      value={paragraph}
      placeholder="Once upon a time.."
      bind:this={nodes[[storyIdx, 'story', 'text', idx]]}
      on:input={ e => onInput(e, {
        idx,
        storyIdx,
        storyNode,
        changeLocation: 'storyText',
        prevValue: paragraph,
      })}
      on:keydown={ e => onKeydown(e, {
        idx,
        storyIdx,
        storyNode,
        changeLocation: 'storyText',
        prevValue: paragraph,
      })}
    />
  {/each}
</div>
