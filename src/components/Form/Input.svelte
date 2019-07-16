<script>
  import { createEventDispatcher } from 'svelte';

  export let value = '';
  export let className = '';
  export let type = 'text';
  export let placeholder;
  export let disabled = false;

  const dispatch = createEventDispatcher();
</script>

<style>
  input {
    padding: 0 8px 0 8px;
    border: var(--input-border);
    border-radius: var(--root-border-radius);
    min-height: 36px;
    color: currentColor;
    font-size: var(--root-font-size-md);
  }

</style>

<label>
    <input
      class={`input ${className}`}
      disabled={disabled}
      {value}
      {type}
      {placeholder}
      class:disabled
      on:click
      on:blur
      on:input
    />
</label>
