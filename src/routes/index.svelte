<script>
  import Landing from "src/routes/landing.svelte";
  import Welcome from "src/routes/_welcome";
  import { Logger } from "src/lib/client/logger";
  import { stores } from "@sapper/app";

  const { page, session } = stores();

  $: if ($page.query.user === "clear") {
    Logger.info("Clearing user");
    session.set({});
  }
</script>

<svelte:head>
  <title>Turning Point Tales</title>
</svelte:head>

{#if $session.user}
  <Welcome />
{:else}
  <Landing />
{/if}
