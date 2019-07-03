<script>
  import { createEventDispatcher } from 'svelte';

  export let text;
  export let type = "";

  const dispatch = createEventDispatcher();
</script>

<style>
  button {
    display: flex;
    height: 48px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-radius: var(--root-border-radius);
    background: none;
    border: 1px solid currentColor;
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
</style>

<button class="button" type="{type}"
  on:click={() => dispatch('click', this)}>
  {text}
  <slot name="icon"></slot>
</button>
