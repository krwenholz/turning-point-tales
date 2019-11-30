<script>
  import Button from "../Button.svelte";
  import CrossOut from "../icons/CrossOut.svelte";
  import TypeText from "../TypeText.svelte";
  import Undo from "src/components/icons/Undo.svelte";
  import ReplayOne from "src/components/icons/ReplayOne.svelte";
  import { uniq, last, filter, get } from 'lodash';
  import { fade } from "src/lib/Transition";
  import { safeWindow } from "src/lib/client/safe-window.js";
  import { writable } from "svelte/store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let className = "";
  export let enableScroll = true;
  export let haveRemainingDecisions = true;
  export let story;
  export let storyNode;
  export let title = '';
  export let visitations = [];
  export let store = writable({
    storyNode: storyNode,
    hasInitialCompletion: false,
    history: [
      {
        consequences: [],
        requires: [],
        storyNode: "start"
      }
    ]
  });

  $: $store.storyNode = getStartingPoint();
  $: $store.hasInitialCompletion = checkInitialCompletion(visitations);
  $: currentPage = getCurrentPage(story[$store.storyNode]);
  $: haveRemainingDecisions = !story[$store.storyNode].final;
  $: {
    setURL();
    scrollWindow();
    safeWindow().document.activeElement.blur();
    recordUnlockSkipIntro();
    dispatch("pageChange", {
      storyNode: $store.storyNode,
      history: $store.history,
      consequences: last($store.history).consequences
    });
  }

  const getCurrentPage = (currentPage) => ({
    ...currentPage,
    text: currentPage.text.map(line => line.replace(/\s\s+?/gi, '&nbsp; ')),
  });

  const normalize = (decision = {}) => {
    return {
      consequences: [],
      requires: [],
      ...decision
    };
  };

  const alreadyVisited = ({ storyNode } = {}) =>
    $store.history.find(recorded => recorded.storyNode === storyNode);

  const recordUnlockSkipIntro = () => {
    if ($store.hasInitialCompletion) return;
    $store.hasInitialCompletion = currentPage.final;
  };

  const scrollWindow = () => {
    if (!enableScroll) return;

    safeWindow().scrollTo(0, 0);
  };

  const rewindHistory = decision =>
    ($store.history = $store.history.slice(
      0,
      $store.history.findIndex(
        ({ storyNode }) => storyNode === decision.storyNode
      ) + 1
    ));

  const setHistory = decision => {
    if (alreadyVisited(decision)) {
      rewindHistory(decision);
    }

    $store.history = [
      ...(decision.storyNode === "start" ? [] : $store.history),
      {
        storyNode: decision.storyNode,
        consequences: uniq([
          ...(decision.consequences || []),
          ...last($store.history).consequences
        ])
      }
    ];
  };

  const goBack = () => {
    const previousDecision = $store.history[$store.history.length - 2];
    goToDecision(previousDecision);
  };

  const goToDecision = decision => {
    setHistory(decision);
    $store.storyNode = decision.storyNode;
  };

  const showSkipIntro = () =>
    $store.hasInitialCompletion &&
    $store.storyNode === "start" &&
    getStoryNodeAfterIntro(story, 'start') !== 'start';

  const showGoBackButton = () => {
    if ($store.storyNode === 'start') return false;

    const previousDecision = $store.history[$store.history.length - 2];

    return get(previousDecision, 'storyNode') !== $store.storyNode;
  }

  const skipIntro = () =>
    goToDecision({
      storyNode: getStoryNodeAfterIntro(story, $store.storyNode)
    });

  const getStoryNodeAfterIntro = (story, storyNode) => {
    const page = story[storyNode];

    if (page.final || story.start.decisions.length > 1) {
      return "start";
    }

    if (story[storyNode].decisions.length >= 2) {
      return storyNode;
    }

    return getStoryNodeAfterIntro(
      story,
      story[storyNode].decisions[0].storyNode
    );
  };

  const filterAvailable = decisions =>
    decisions.map(normalize).map(decision => {
      const availableDecision = decision.requires.every(prereq =>
        last($store.history).consequences.includes(prereq)
      );

      return {
        ...decision,
        label: availableDecision ? decision.label : "?",
        disabled: !availableDecision
      };
    });

  const setURL = () => {
    safeWindow().history.replaceState(
      "",
      "",
      `${safeWindow().location.pathname}?storyNode=${$store.storyNode}`
    );
  };

  const getStartingPoint = () => {
    if (typeof storyNode === "undefined") {
      return $store.storyNode || "start";
    }

    return storyNode;
  };

  const checkInitialCompletion = visitations => {
    return (
      filter(story, (value, key) => {
        return value.final && visitations.indexOf(key) !== -1;
      }).length > 0
    );
  };
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

  nav {
    margin: auto auto 0 auto;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 600px) {
    nav {
      width: auto
    }
  }

  .adventure :global(.button) {
    min-width: 100%;
  }

  .adventure :global(.button:not(:last-of-type)) {
    margin-bottom: 16px;
    min-width: 100%;
  }
</style>

{#if process.browser}
  <section class="{`adventure ${className}`}">
    {#if title && currentPage.storyNode === 'start'}
      <h3>{title}</h3>
    {/if}

    {#if currentPage}
      {#each currentPage.text as paragraph}
        <p>{@html paragraph}</p>
      {/each}
    {/if}

    <nav in:fade>
      {#if showSkipIntro()}
        <Button variation="secondary" on:click="{skipIntro}">
          <span>Skip intro</span>
          <Undo />
        </Button>
      {/if}
      {#if showGoBackButton()}
        <Button variation="secondary" on:click={goBack}>
          <span>go back</span>
          <ReplayOne />
        </Button>
      {/if}
      {#if haveRemainingDecisions}
        {#each filterAvailable(currentPage.decisions) as decision}
          <Button
            disabled="{decision.disabled}"
            on:click="{() => goToDecision(decision)}">
            {decision.label}
          </Button>
        {/each}
      {:else}
        <Button
          variation="secondary"
          on:click="{() => goToDecision({ storyNode: 'start' })}">
          <span>restart</span>
          <Undo />
        </Button>
      {/if}
    </nav>
  </section>
{/if}
