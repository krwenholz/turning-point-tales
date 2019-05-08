<script>
  import * as sapper from '@sapper/app';
  import Button from './Button.svelte';
  import CrossOut from './icons/CrossOut.html';
  import TypeText from './TypeText.svelte';
  import { fade } from '../lib/Transition';

  const { page, session } = sapper.stores();

  function oncreate() {
    // TODO(kyle): I think these all just need to be let/const on their own here to be
    // reactive (even the history call)
    this.set({
      story: this.get().story,
      page: this.get().story[this.get().storyNode],
      currentlyTyping: true,
      showDecisions: false,
      storyNode: 'start',
    });

    this.saveToHistory();
  }

  function skipTyping() {
    this.refs.TypeText.skipTyping();
    this.refs.TypeText.on('typingEnd', () => (
      window.scrollBy({ top: document.body.scrollHeight, behavior: "smooth" })
    ));
  }

  function showDecisions() {
    this.set({
      showDecisions: this.get().page.decisions,
      currentlyTyping: false,
    });

    if (!this.get().page.decisions) {
      this.fire('storyEnd');
    }
  }

  function setNextPage(storyNode) {
    window.scrollTo(0, 0);

      this.set({
        page: this.get().story[storyNode],
        storyNode: storyNode,
        showDecisions: false,
        currentlyTyping: true,
      });

      this.saveToHistory();
  }

  function saveToHistory() {
    console.info("saving", this.get().storyNode);
    // TODO(kyle): need to make this safe for when no window exists
    window.history.pushState( '', '', `${window.location.pathname}?storyNode=${this.get().storyNode}`);
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

  {#if page}
    <TypeText
      bind:this={TypeText}
      on:typingEnd={showDecisions}
      typingSpeed={0}
      jitter={80}
      paragraphPause={600}
      text={page.text}
    />
  {/if}

  {#if showDecisions}
    <nav
      bind:this={decisions}
      in:fade
    >
      {#each page.decisions as {storyNode, label}}
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
