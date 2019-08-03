<script>
  import * as sapper from '@sapper/app';
  import Button from './Button.svelte';
  import CrossOut from './icons/CrossOut.html';
  import TypeText from './TypeText.svelte';
  import Checkbox from '../components/Form/Checkbox.svelte';
  import { fade } from '../lib/Transition';
  import { safeWindow } from '../lib/safe-window.js';
  import { createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';

  export let className = '';
  export let storyNode;
  export let story;
  export let title;
  export let store = writable({ storyNode: storyNode });

  const dispatch = createEventDispatcher();

  $: $store.storyNode = findStartingPoint();
  $: currentPage = story[$store.storyNode];
  $: haveRemainingDecisions = !story[$store.storyNode].final;
  $: if(currentPage) updateURL();

  const updateURL = () => {
    safeWindow().history.pushState(
      '',
      '',
      `${safeWindow().location.pathname}?storyNode=${$store.storyNode}`
    )
  };

  const findStartingPoint = () => {
    if(typeof(storyNode) === 'undefined') {
      return $store.storyNode || 'start'
    }

    return storyNode;
  }

  const setNextPage =(nextStoryNode) => {
    $store.storyNode = nextStoryNode;
  }
</script>

<style>
  /* Hack to avoid cross-browser scrollbar pop-in */
  :global(html) {
    overflow-y: overlay;
    overflow-x: hidden;
    margin-right: calc(-1 * (100vw - 100%));
  }

  .adventure {
    width: 100%;
    flex: 1 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  h3 {
    display: flex;
    flex-flow: column;
    margin: auto;
  }

  nav {
    margin-top: 16px;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
  }

  :global(.button) {
    margin-bottom: 16px;
    width: 100%;
  }

  @media only screen and (min-height: 700px) {
    nav :global(.button) {
      width: fit-content;
    }
  }
</style>

{#if process.browser}
  <section class={`adventure ${className}`}>
    {#if title}
    <h3>{title}</h3>
    {/if}

    {#if currentPage}
      {#each currentPage.text as paragraph}
        <p>{paragraph}</p>
      {/each}
    {/if}

    {#if haveRemainingDecisions }
      <nav in:fade>
        {#each currentPage.decisions as {storyNode, label}}
          <Button on:click={() => setNextPage(storyNode)} >
            {label}
          </Button>
        {/each}
      </nav>
    {/if}
  </section>
{/if}