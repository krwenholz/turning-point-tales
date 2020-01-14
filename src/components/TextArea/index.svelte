<script>
  import { round } from 'lodash';
  import { onMount, afterUpdate } from "svelte";

  export let value = '';
  export let className = '';
  export let autoSize = true;
  export const focus = () => self.focus();

  let self = {};

  const resize = () => {
    if(!autoSize) return;

    self.style.height = 'auto';
    self.style.height = self.scrollHeight + 'px';
  }

  afterUpdate(resize)
</script>

<style>
  textarea {
    box-sizing: border-box;
    overflow-y: hidden;
    resize: none;
    border: none;
    padding: 12px;
    margin: 0;
    background-color: transparent;
  }
</style>

<textarea
  {value}
  class={`text-area ${className}`}
  rows={1}
  bind:this={self}
  on:focus
  on:keydown
  on:keyup
  on:change
  on:input={resize}
  on:input
  on:blur
/>
