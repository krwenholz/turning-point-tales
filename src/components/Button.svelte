<script>
  import { createEventDispatcher } from 'svelte';

  export let text;
  export let disabled = false;
  export let type = "button";
  export let isSubmitting = false;

  const dispatch = createEventDispatcher();
</script>

<style>
  button {
    display: flex;
    height: 48px;
    padding: 0 16px 0 16px;
    justify-content: center;
    align-items: center;
    background: none;
    font-size: var(--root-font-size-md);
    border: 1px solid currentColor;
    border-radius: var(--root-border-radius);
    color: var(--root-color-background);
    background-color: var(--root-color-accent);
  }

  .button :global(svg) {
    width: 24px;
    height: auto;
    margin-left: 16px;
  }

  button:hover {
    color: var(--root-color-accent);
    background: var(--root-color-background);
    cursor: pointer;
  }

  .disabled {
    cursor: not-allowed;
    background-color: gray;
    opacity: .7;
  }

  .disabled:hover {
    cursor: not-allowed;
    color: var(--root-color-background);
    background-color: gray;
  }

  :global(span) {
    line-height: 1;
  }
</style>

<button
  class="button"
  type="{type}"
  disabled={disabled}
  on:click={() => dispatch('click', this)}
  class:disabled
>
  {#if isSubmitting}
    <span>
      ...Submitting
    </span>
  {:else }
    <slot/>
  {/if}
</button>
