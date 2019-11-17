<script>
  import { createEventDispatcher } from "svelte";

  export let value = "";
  export let className = "";
  export let type = "text";
  export let name = Date.now(); // Same as below... wtf?
  export let id = Date.now(); // For some reason, if this doesnt have an id, autocomplete won't work...
  export let placeholder = "";
  export let disabled = false;
  let input;

  const dispatch = createEventDispatcher();

  export const setCustomValidity = (...props) =>
    input.setCustomValidity(...props);
</script>

<style>
  label {
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 8px;
  }

  input {
    padding: 0 8px 0 8px;
    margin: 4px 0 8px 0;
    border: var(--input-border);
    border-radius: var(--root-border-radius);
    min-height: 36px;
    color: currentColor;
    font-size: var(--root-font-size-md);
  }
</style>

<label>
  <slot />
  <input
    bind:this="{input}"
    class="{`input ${className}`}"
    class:disabled
    on:click
    on:blur
    on:input
    autocomplete="on"
    {...$$props} />
</label>
