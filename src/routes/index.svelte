<script>
  import Landing from "src/routes/landing.svelte";
  import Home from "src/routes/_home";
  import { onMount } from "svelte";
  import { logger } from "src/lib/client/logger";
  import { stores } from "@sapper/app";
  import { get } from 'svelte/store';
  import { visited } from "src/lib/global-state-stores/browserStore/visited";
  const { page, session } = stores();

  onMount(() => {
    if ($page.query.user === "clear") {
      logger.info("Clearing user");
      session.set({});
    }
  });
</script>

<svelte:head>
  <title>Turning Point Tales</title>
</svelte:head>

{#if process.browser}
  {#if $session.user || $visited.pages.includes('landing')}
    <Home />
  {:else}
    <Landing />
  {/if}
{/if}
