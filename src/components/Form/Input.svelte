<script>
  import { createEventDispatcher } from 'svelte';

  export let value = '';
  export let name = '';
  export let className = '';
  export let id = '';
  export let type = 'text';
  export let placeholder;
  export let disabled = false;

  const dispatch = createEventDispatcher();
</script>

<style>
  label {
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 8px;
  }

  input {
    padding: 0 8px 0 8px;
    margin-top: 4px;
    border: var(--input-border);
    border-radius: var(--root-border-radius);
    min-height: 36px;
    color: currentColor;
    font-size: var(--root-font-size-md);
  }

</style>

<label>
    <slot/>
    <input
      {placeholder}
      {name}
      {value}
      {id}
      {type}
      class={`input ${className}`}
      disabled={disabled}
      class:disabled
      on:click
      on:blur
      on:input
    />
</label>
