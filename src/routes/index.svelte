<script>
  import Landing from 'src/routes/_landing.svelte';
  import Welcome from 'src/routes/_welcome.svelte';
  import { Logger } from 'src/lib/client/logger';
  import { stores } from '@sapper/app';

  const { page, session } = stores();

  export let stories;
  export let foo;

  $: if($page.query.user === 'clear') {
      Logger.info('Clearing user');
      $session.user = null;
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
