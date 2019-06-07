<script>
  import teaserStory from './teaserStory.js';
  import { fade } from '../../lib/Transition';
  import Adventure from '../../components/Adventure.svelte';
  import Patreon from '../../components/icons/Patreon.svelte'
  import Book from '../../components/icons/Book.svelte'
  import Button from '../../components/Button.svelte';
  import * as sapper from '@sapper/app';

  const { page } = sapper.stores();

  export let story;
  export let title;

  let storyNode = $page.query.storyNode;
  let showDecisions;

  const redirect = href => () => window.location = href;
</script>

<style>
  .teaser-story {
    width: 100%;
    flex: 1 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  }

  nav {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 auto 0 auto;
  }
</style>

<svelte:head>
  <title>teaser-story</title>
</svelte:head>

<section class="teaser-story">
  <Adventure
    {storyNode}
    story={teaserStory}
    title=""
    on:end={() => showDecisions = true }
  />

  {#if showDecisions }
  <nav transition:fade >
    <Button
      text="Learn about us"
      on:click={ redirect('/about') }
    >
      <div slot="icon">
          <Book />
      </div>
    </Button>

    <Button
      text="Create an account!"
      on:click={ redirect('/user/create') }
    >
      <div slot="icon">
        <Patreon />
      </div>
    </Button>
  </nav>
  {/if}

</section>
