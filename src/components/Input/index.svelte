<script>
  export let error = false;
  export let className = "";
  export let type = "text";
  export let name = Date.now(); // Same as below... wtf?
  export let id = Date.now(); // For some reason, if this doesnt have an id, autocomplete won't work...
  export let placeholder = "";
  export let disabled = false;
  export let onBlur = () => {};
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

  .error {
    border: 2px solid red;
  }
</style>

<input
  {...$$props}
  {type}
  bind:this={self}
  class="input"
  class:disabled
  class:error
  on:change
  on:click
  on:blur={e => onBlur(e)}
  on:input
  on:keypress
  on:keydown
  autocomplete="on"
/>
