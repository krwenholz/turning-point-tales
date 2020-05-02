<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  :global(html) {
    background-color: whitesmoke;
    font-family: "IBM Plex Mono", "monospace";
    color: var(--root-color-primary);
    line-height: 1.8;
  }

  :global(html, body) {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    display: flex;
    flex-flow: column;
    margin: auto;
    max-width: 1600px;
    padding-left: var(--root-wrapper-padding);
    padding-right: calc(
      var(--root-wrapper-padding) + 6px
    ); /* account for right scrollbar */
  }

  main {
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;
    padding-top: calc(var(--root-wrapper-padding) * 2);
    padding-bottom: calc(var(--root-wrapper-padding) * 2);
  }
</style>

<Header />

<main>
  <slot/>
</main>

{#if segment !== 'experimental'}
  <Footer />
{/if}
