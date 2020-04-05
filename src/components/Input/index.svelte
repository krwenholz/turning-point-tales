<script>
  export let className = "";
  export let type = "text";
  export let name = Date.now(); // Same as below... wtf?
  export let id = Date.now(); // For some reason, if this doesnt have an id, autocomplete won't work...
  export let placeholder = "";
  export let disabled = false;
  let self;

  export const setCustomValidity = (...props) =>
    self.setCustomValidity(...props);
</script>

<style>
  input {
    padding: 0 16px;
    border: 1px solid var(--input-border-color);
    border-radius: 3px;
    min-height: 42px;
    color: currentColor;
    font-size: var(--root-font-size-md);
  }
</style>

<input
  {...$$props}
  {type}
  bind:this={self}
  class="input"
  class:disabled
  on:change
  on:click
  on:blur
  on:input
  on:keypress
  on:keydown
  autocomplete="on"
/>
