<script>
  import { createEventDispatcher } from "svelte";

  export let href = "#";
  export let variation = "button";

  const dispatch = createEventDispatcher();
</script>

<style>
  a {
    display: flex;
    padding: 12px;
    min-height: 50px;
    justify-content: center;
    align-items: center;
    font-size: var(--root-font-size-md);
    line-height: 24px;
    border: none;
    border-radius: var(--root-border-radius);
    color: var(--root-color-background);
    background: var(--root-color-accent) none;
    text-decoration: none;
  }

  .button.button--link:hover {
    box-shadow: none;
  }

  .button:hover {
    color: var(--root-color-accent);
    background: var(--root-color-background);
    box-shadow: 0px 0px 0px 2px currentColor;
    cursor: pointer;
  }

  .button--secondary {
    border: 2px solid currentColor;
    min-width: auto;
    border-radius: var(--root-border-radius);
    background-color: transparent;
    color: var(--root-color-accent);
  }

  .button--link {
    width: fit-content;
    background-color: transparent;
    color: var(--root-color-accent);
    border: none;
    padding: 0;
    min-height: 20px;
    text-decoration: underline;
  }

  .button--small {
    min-height: auto;
    padding: 4px 8px;
    font-size: 13px;
  }

  :global(span) {
    line-height: 1;
  }
</style>

<a class="button button--{variation}" {href} on:click>
  <slot />
</a>
