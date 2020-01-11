<script>
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
    addAutoResize();

    if(nodes[focusPath]) {
      nodes[focusPath].focus();
      clearFocusPath();
    }
  });

  // Stackoverflow ftw!
  const addAutoResize = () => {
    document.querySelectorAll('[data-autoresize]').forEach(element => {

      const offset = element.offsetHeight - element.clientHeight;

      document.addEventListener('input', event => {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + offset + 'px';
      });

      element.removeAttribute('data-autoresize');
    });
  }

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
    <textarea
      data-autoresize
      rows="1"
      on:focus={() => console.log("FOCUS")}
      bind:this={nodes[[storyNode, 'text', idx]]}
      value={paragraph}
      on:input={ e => onInput(e, {
        idx,
        storyNode,
        keyType: 'storyText',
        path: [storyNode, 'text', idx],
        prevValue: paragraph,
      })}
      on:keydown={ e => onKeydown(e, {
        idx,
        storyNode,
        keyType: 'storyText',
        path: [storyNode, 'text', idx],
        prevValue: paragraph,
      })}
    />
  {/each}
</div>
