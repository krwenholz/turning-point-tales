<script>
  import * as sapper from '@sapper/app';
  import Button from 'src/components/Button.svelte';
  import { choicesAndAttributes, content } from 'src/components/ads/data';
  import { createEventDispatcher } from 'svelte';
  import { sampleSize } from 'lodash';

  const dispatch = createEventDispatcher();

  let step = 'intro';
  let tags;
</script>

<style>
  /* Hack to avoid cross-browser scrollbar pop-in */
  :global(html) {
    overflow-y: overlay;
    overflow-x: hidden;
    margin-right: calc(-1 * (100vw - 100%));
  }

  .display-ad {
    min-height: 100%;
    max-width: 80ch;
    flex: 1 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 auto 0 auto;
  }

  :global(.button) {
    margin-bottom: 16px;
    width: 100%;
  }

  nav {
    margin-top: auto;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
  }

  :global(.button) {
    margin-bottom: 16px;
    min-width: 200px;
    width: 100%;
  }

  @media only screen and (min-height: 700px) {
    nav :global(.button) {
      width: fit-content;
    }
  }
</style>

<!-- TODO(kyle): ingest some JSON structure to choose ad (random?)-->
<!-- TODO(kyle): use one choice of three terms or something lead to said random ad -->
<!-- TODO(kyle): report back finished after navigating to ad and displaying -->
<section class="display-ad">
  {#if tags === undefined}
    <p><a href="/user/profile?tab=adventurer">Become a full adventurer now?</a></p>

    <p>Or can we interest you in a small diversion before your story?</p>

    <nav>
      {#each sampleSize(Object.keys(choicesAndAttributes), 2) as choice}
        <Button on:click={() => tags = choicesAndAttributes[choice]}>
          {choice}
        </Button>
      {/each}
    </nav>
  {:else}
    {#each sampleSize(content(tags), 2) as ad}
      {#each ad.description as line}
        <p>{line}</p>
      {/each}
      <p><a href="{ad.link}">I'd like to know more</a></p>
    {/each}

    <!-- TODO(kyle): local storage timer for last ad so we don't annoy people too much -->
    <Button on:click={() => dispatch('end')}>
      Now back to the regularly scheduled programming....
    </Button>
  {/if}
</section>
