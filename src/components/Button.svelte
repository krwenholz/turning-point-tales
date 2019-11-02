<script>
  import { createEventDispatcher } from 'svelte';

  export let text;
  export let disabled = false;
  export let type = "button";
  export let variation = 'button';
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
    font-size: var(--root-font-size-md);
    border: 1px solid currentColor;
    border-radius: var(--root-border-radius);
    color: var(--root-color-background);
    background: var(--root-color-accent) none;
  }

  .link {
    justify-content: flex-start;
    padding: 0;
    height: auto;
    color: var(--root-color-accent);
    background: none;
    border: none;
    text-decoration: underline;
  }

  @media (hover: hover) {
    button:hover {
      color: var(--root-color-accent);
      background: var(--root-color-background);
      cursor: pointer;
    }

    .disabled:hover {
      cursor: not-allowed;
      color: var(--root-color-background);
      background-color: gray;
    }

    .link:hover,
    .link:active {
      color: var(--root-color-primary);
    }
  }

  .button :global(svg) {
    width: 24px;
    height: auto;
    margin-left: 16px;
  }

  :global(span) {
    line-height: 1;
  }

  .disabled {
    cursor: not-allowed;
    background-color: gray;
    opacity: .7;
  }
</style>

<button
  class={`button ${variation}`}
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
