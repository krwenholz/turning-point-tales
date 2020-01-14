<script>
  import { createEventDispatcher, afterUpdate } from "svelte";

  export let value;
  export let className = '';
  export let autoSize = true;
  let self = {};

  const resize = (e) => {
    self.style.height = (self.scrollHeight)+"px";
    const offset = self.offsetHeight - self.clientHeight;
  };

  afterUpdate(resize)

  export const focus = () => self.focus();
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
/>
