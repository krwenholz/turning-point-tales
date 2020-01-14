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
    margin: 0 0 24px 0;
    padding: 0
  }

  p :global(.text-area) {
    flex: 1;
    font-size: 14px;
    font-family: "IBM Plex Mono", "monospace";
    padding: 16px;
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
    <p>
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
