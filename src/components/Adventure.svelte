<script>
  import * as sapper from '@sapper/app';
  import Button from './Button.svelte';
  import CrossOut from './icons/CrossOut.html';
  import TypeText from './TypeText.svelte';
  import Checkbox from '../components/Form/Checkbox.svelte';
  import { fade } from '../lib/Transition';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let showTypingAnimation = true;
  export let enableScroll = true;
  export let currentlyTyping =  true;
  export let storyNode = 'start';
  export let story;
  export let title;

  let typer;

  $: haveRemainingDecisions = !story[storyNode].final;
  $: currentPage = story[storyNode];
  $: if(typeof(window) !== 'undefined') {
    window.history.pushState( '', '', `${window.location.pathname}?storyNode=${storyNode}`);
  }

  const skipTyping = () => typer.skipTyping()

  const typingHasFinished = () => {
    if(showTypingAnimation && enableScroll) {
      window.scrollBy({top: document.body.scrollHeight, behavior: "smooth"});
    }
    currentlyTyping = false;
    dispatch('end');
  }

  const setNextPage =(nextStoryNode) => {
    window.scrollTo(0, 0);
    storyNode = nextStoryNode;
    currentlyTyping = showTypingAnimation;
  }

  const toggleAutoSkip = () => {
    showTypingAnimation = !showTypingAnimation
    currentlyTyping = showTypingAnimation;
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

  header {
    display: flex;
    flex-flow: column;
    margin-bottom: 24px;
  }

  header span {
    display: flex;
    justify-content: center;
  }

  header :global(.checkbox) {
    margin-right: 16px;
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
    <header>
      <h3>{title}</h3>
      <span>
        <Checkbox checked={!showTypingAnimation} onChange={toggleAutoSkip} />
        auto-skip
      </span>
    </header>
  {/if}

  {#if currentPage}
    <TypeText
      bind:this={typer}
      on:end={typingHasFinished}
      {showTypingAnimation}
      typingSpeed={0}
      jitter={80}
      paragraphPause={600}
      text={currentPage.text}
    />
  {/if}

  {#if !currentlyTyping && haveRemainingDecisions }
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
