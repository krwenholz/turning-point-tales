<script>
  import { createEventDispatcher } from 'svelte';

  export let disabled = false;
  export let type = "button";
  export let variation = 'button';
  export let isSubmitting = false;

  let active = false;
  const self = {};
  const dispatch = createEventDispatcher();

  const isHover = () => {
    if(!process.browser) return false;

    return 'ontouchstart' in window ? '' : 'HOVER'
  }
</script>

<style>
  button {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    font-size: var(--root-font-size-md);
    line-height: 24px;
    border: none;
    border-radius: var(--root-border-radius);
    color: var(--root-color-background);
    background: var(--root-color-accent) none;
  }

  button:active,
  button.active {
    transform: translateY(3px);
  }

  .button--secondary {
    border: 2px solid currentColor;
    min-width: auto;
    border-radius: var(--root-border-radius);
    background-color: transparent;
    color: var(--root-color-primary);
  }

  #HOVER.button:hover {
    color: var(--root-color-accent);
    background: var(--root-color-background);
    box-shadow: 0px 0px 0px 2px currentColor;
    cursor: pointer;
  }

  #HOVER.disabled:hover {
    cursor: not-allowed;
    color: var(--root-color-background);
    background-color: gray;
  }

  button :global(svg) {
    width: 24px;
    height: auto;
  }

  button :global(span + svg) {
    margin-left: 16px;
  }

  button :global(svg + span) {
    margin-right: 16px;
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
  bind:this={self}
  class={`button button--${variation}`}
  class:active
  id={isHover()}
  type="{type}"
  disabled={disabled}
  on:keyup={() => active = false}
  on:keydown={({ keyCode }) => {
    if(keyCode !== 13) return;
    active = true;
  }}
    on:click
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
