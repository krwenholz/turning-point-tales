<script context="module">
  export function preload() {
    // WARNING: I am empty, but I am incredibly important because Sapper has a dumb bug
    // that's filed on GitHub (I can't find it right now). Basically if you remove this
    // empty preload, then you can't navigate away from error pages because preload
    // methods on other components won't be called. Dumb.
  }
</script>

<script>
  export const dev = process.env.NODE_ENV === "development";
  export let error;
  export let status;
</script>

<style>
  p {
    margin: 1em auto;
  }
</style>

<svelte:head>
  <title>{status} - Turning Point Tales</title>
</svelte:head>

{#if status === 404}
  <p>
    Oops looks like this page doesn't exist! Try
    <a href="/">heading home</a>
    and finding a new adventure.
  </p>
{:else}
  <p>{error.message}</p>
{/if}

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
