<script>
  import TextArea from 'src/components/TextArea/index';
  import Minus from 'src/components/icons/Minus.svelte';
  import { PARAGRAPH_DELIMITER } from './_constants.js';
  import { createEventDispatcher, afterUpdate } from "svelte";
  import { get, toPath, join, cloneDeep } from 'lodash';

  export let storyNode = '';
  export let text = [];
  export let focusPath = [];
  export let clearFocusPath = () => {};
  export let onKeydown = () => {};
  export let onInput = () => {};
  export let nodes = {};

  let self = {};

  afterUpdate(() => {
    self.focus();
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
  }

  .story-text :global(svg) {
    position: absolute;
    top: 0;
    left: -1%;
    width: 26px;
  }
</style>

<div class='story-text' bind:this={self}>
  <TextArea
    value={text.join(PARAGRAPH_DELIMITER)}
    placeholder="Once upon a time.."
    bind:this={self}
    on:input={ e => onInput(e, {
      storyNode,
      location: 'storyText',
      prevValue: text,
    })}
    on:keydown={ e => onKeydown(e, {
      storyNode,
      location: 'storyText',
      prevValue: text,
    })}
  />
</div>
