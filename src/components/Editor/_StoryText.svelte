<script>
  import TextArea from "src/components/TextArea/index";
  import { createEventDispatcher, afterUpdate } from "svelte";

  export let storyNode = "";
  export let text = [];
  export let focusPath = [];
  export let clearFocusPath = () => {};
  export let onKeydown = () => {};
  export let onInput = () => {};
  export let nodes = {};

  let self = {};
</script>

<style>
  .story-text {
    display: flex;
    flex-flow: column;
    flex: 1;
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

<div class="story-text" bind:this="{self}">
  <TextArea
    value="{prev.join('\n\n')}"
    placeholder="Once upon a time.."
    bind:this="{self}"
    on:input="{e => onInput(e, {
      storyNode,
      location: 'storyText',
      prevValue: text
    })}"
    on:keydown="{e => onKeydown(e, {
      storyNode,
      location: 'storyText',
      prevValue: text
    })}"
  />
</div>
