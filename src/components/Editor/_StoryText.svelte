<script>
  import TextArea from "src/components/TextArea/index";
  import Minus from "src/components/icons/Minus.svelte";
  import { createEventDispatcher, afterUpdate } from "svelte";
  import { get, toPath, join, cloneDeep } from "lodash";

  export let storyNode = "";
  export let text = [];
  export let focusPath = [];
  export let clearFocusPath = () => {};
  export let onKeydown = () => {};
  export let onInput = () => {};
  export let nodes = {};
  let self = {};

  afterUpdate(() => {
    const path = focusPath.join();

    if (path && !nodes[path]) {
      // for some reason, first child never gets added to focus-list...
      self.children[0].focus();
    } else if (nodes[path]) {
      nodes[path].focus();
    }

    clearFocusPath();
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

<div class="story-text" bind:this="{self}">
  {#each text as paragraph, idx}
    <TextArea
      value="{paragraph}"
      placeholder="Once upon a time.."
      bind:this="{nodes[[storyNode, 'text', idx]]}"
      on:input="{e => onInput(e, {
          idx,
          storyNode,
          location: 'storyText',
          prevValue: paragraph
        })}"
      on:keydown="{e => onKeydown(e, {
          idx,
          storyNode,
          location: 'storyText',
          prevValue: paragraph
        })}"
    />
  {/each}
</div>
