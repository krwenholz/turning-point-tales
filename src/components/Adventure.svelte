<script>
  import * as sapper from '@sapper/app';
  import Button from './Button.svelte';
  import CrossOut from './icons/CrossOut.html';
  import TypeText from './TypeText.svelte';
  import { fade } from '../lib/Transition';

  export let currentlyTyping =  true;
  export let showDecisions = false;
  export let story;
  export let storyNode = 'start';
  export let title;

  const { page, session } = sapper.stores();
  let typer;
  let scrollY;

  $: currentPage = story[storyNode];
  $: if(typeof(window) !== 'undefined') {
    window.history.pushState( '', '', `${window.location.pathname}?storyNode=${storyNode}`);
  }

  function skipTyping() {
    typer.skipTyping();
  }

  function endTyping(event) {
    showDecisions = true;
    currentlyTyping = false;
    if(typeof(window) !== 'undefined') {
      // TODO(kyle): Not working for some, likely dumb, reason
      console.info('scrolling',document.body.scrollHeight )
      window.scrollBy({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }

  function setNextPage(nextStoryNode) {
    window.scrollTo(0, 0);

    storyNode = nextStoryNode;
    showDecisions = false;
    currentlyTyping = true;
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
    align-items: center;
  }

  nav {
    margin-top: auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
  }

  :global(.button) {
    margin-bottom: 16px;
    width: 100%;
  }

  .skip {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    color: var(--root-color-accent);
  }

  .skip span {
    color: currentColor;
  }

  .skip :global(svg) {
    width: 24px;
    height: auto;
    margin-left: 16px;
  }

  .skip:hover {
    font-weight: bold;
  }

  @media only screen and (min-height: 700px) {
    nav :global(.button) {
      width: fit-content;
    }
  }

</style>

<section class="adventure">
  {#if title}
    <h3 on:click={skipTyping}>{title}</h3>
  {/if}

  {#if currentPage}
    <TypeText
      bind:this={typer}
      on:end={endTyping}
      typingSpeed={0}
      jitter={80}
      paragraphPause={600}
      text={currentPage.text}
    />
  {/if}

  {#if showDecisions}
    <nav in:fade>
      {#each currentPage.decisions as {storyNode, label}}
        <Button
          on:click={() => setNextPage(storyNode)}
          text={label}
        />
      {/each}
    </nav>
  {/if}

  {#if currentlyTyping }
    <nav in:fade >
      <button
        on:click={skipTyping}
        class="skip"
      >
          <span>skip</span>
          <CrossOut/>
      </button>
    </nav>
  {/if}
</section>
