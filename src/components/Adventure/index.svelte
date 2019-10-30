<script>
  import Button from '../Button.svelte';
  import CrossOut from '../icons/CrossOut.svelte';
  import TypeText from '../TypeText.svelte';
  import { uniq, last } from 'src/lib/utils.js';
  import { fade } from 'src/lib/Transition';
  import { safeWindow } from 'src/lib/client/safe-window.js';
  import { writable } from 'svelte/store';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let className = '';
  export let storyNode;
  export let story;
  export let title;
  export let enableScroll = true;
  export let haveRemainingDecisions = true;
  export let store = writable({
    storyNode: storyNode,
    history: [
      {
        consequences: [],
        requires: [],
        storyNode: 'start',
      }
    ]
  });

  $: $store.storyNode = getStartingPoint();
  $: currentPage = story[$store.storyNode];
  $: haveRemainingDecisions = !story[$store.storyNode].final;
  $: {
    setURL();
    scrollWindow();
    dispatch('pageChange', {
      storyNode: $store.storyNode,
      history: $store.history,
      consequences: last($store.history).consequences
    });
    safeWindow().document.activeElement.blur();
  }

  const normalize = (decision = {}) => {
    return {
      consequences: [],
      requires: [],
      ...decision,
    }
  }

  const alreadyVisited = ({ storyNode }) => (
    $store.history.find(recorded => recorded.storyNode === storyNode)
  )

  const scrollWindow = () => {
    if (!enableScroll) return;

    safeWindow().scrollTo(0,0);
  }

  const rewindHistory = decision => (
    $store.history.slice(
      0,
      $store.history.findIndex(({ storyNode }) => storyNode === decision.storyNode) + 1,
    )
  )

  const setHistory = (decision) => {
    if(alreadyVisited(decision)) {
      $store.history = rewindHistory(decision);
    }

    $store.history = [
      ...(decision.storyNode === 'start' ? [] : $store.history),
      {
        storyNode: decision.storyNode,
        consequences: uniq([
          ...decision.consequences || [],
          ...last($store.history).consequences,
        ])
      },
    ]
  }

  const handleDecision = (decision) => {
    setHistory(decision);
    $store.storyNode = decision.storyNode;
  }

  const filterAvailable = (decisions) => (
    decisions.map(normalize).map(decision => {
      const availableDecision = decision.requires.every(prereq => (
        last($store.history).consequences.includes(prereq)
      ));

      return {
        ...decision,
        label: availableDecision ? decision.label : '?',
        disabled: !availableDecision,
      };
    })
  )

  const setURL = () => {
    safeWindow().history.replaceState(
      '',
      '',
      `${safeWindow().location.pathname}?storyNode=${$store.storyNode}`
    );
  };

  const getStartingPoint = () => {
    if(typeof(storyNode) === 'undefined') {
      return $store.storyNode || 'start'
    }

    return storyNode;
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
    min-height: 100%;
    max-width: 80ch;
    flex: 1 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 auto 0 auto;
  }

  h3 {
    display: flex;
    flex-flow: column;
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
        {#each filterAvailable(currentPage.decisions) as decision }
          <Button
            disabled={decision.disabled}
            on:click={() => handleDecision(decision) }
          >
            {decision.label}
          </Button>
        {/each}
      </nav>
    {/if}
  </section>
{/if}
