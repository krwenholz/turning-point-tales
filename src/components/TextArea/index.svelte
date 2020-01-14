<script>
  import { round } from 'lodash';
  import { afterUpdate } from "svelte";

  export let value = '';
  export let className = '';
  export let autoSize = true;
  export const focus = () => self.focus();

  let self = {};

  const resize = (e) => {
    const offset = round(self.offsetHeight - self.clientHeight);
    self.style.height = toNearestTen(self.scrollHeight - offset) + "px";
  };

  const toNearestTen = number => round(number / 10) * 10;

  afterUpdate(resize)
</script>

<style>
  textarea {
    overflow-y: hidden;
    resize: none;
    border: none;
    padding: 8px 0 0 0;
    margin: 0;
    background-color: transparent;
  }
</style>

<textarea
  {value}
  { ...(autoSize ?  {'data-autoresize': true } : {})}
  class={`text-area ${className}`}
  bind:this={self}
  on:focus
  on:keydown
  on:keyup
  on:change
  on:input={e => resize(e)}
  on:input
  on:blur
  rows={1}
/>
