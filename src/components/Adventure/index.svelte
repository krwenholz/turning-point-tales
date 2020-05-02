<script>
  import Button from "../Button.svelte";
  import CrossOut from "../icons/CrossOut.svelte";
  import Undo from "src/components/icons/Undo.svelte";
  import ReplayOne from "src/components/icons/ReplayOne.svelte";
  import { get, last, filter } from "lodash";
  import { fade } from "src/lib/Transition";
  import { writable } from "svelte/store";
  import { createEventDispatcher } from "svelte";
  import * as History from "./history";

  const dispatch = createEventDispatcher();

  export let className = "";
  export let story;
  export let storyNode;
  export let title = "";
  export let visitations = [];
  export let enableExtraNavigation = true;
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
  $: currentPage = get(story, $store.storyNode, story.start);
  $: {
    recordUnlockSkipIntro();
    dispatch("pageChange", {
      storyNode: $store.storyNode,
      final: Boolean(currentPage.final),
      history: $store.history,
      consequences: last($store.history).consequences
    });
  }

  $: showRestart = enableExtraNavigation && $store.storyNode !== "start";
  $: showSkipIntro =
    enableExtraNavigation &&
    $store.hasInitialCompletion &&
    $store.storyNode === "start" &&
    story.start.decisions.length > 1;

  let showGoBackButton = false;
  $: if (!enableExtraNavigation || $store.storyNode === "start") {
    showGoBackButton = false;
  } else {
    const previousDecision = $store.history[$store.history.length - 2];

    showGoBackButton = get(previousDecision, "storyNode") !== $store.storyNode;
  }

  const skipIntro = () =>
    goToDecision({
      storyNode: getStoryNodeAfterIntro(story, $store.storyNode)
    });

  const recordUnlockSkipIntro = () => {
    if ($store.hasInitialCompletion) return;
    $store.hasInitialCompletion = currentPage.final;
  };

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

  const goToDecision = decision => {
    $store = History.goToDecision(decision, $store);
  };

  const goBack = () => {
    $store = History.goBack($store);
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

  .poem {
    padding-left: 48px;
    font-style: italic;
  }

  @media only screen and (min-width: 600px) {
    nav {
      width: auto;
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

<section class="{`adventure ${className}`}">
  {#if title && currentPage.storyNode === 'start'}
    <h3>{title}</h3>
  {/if}

  {#if currentPage}
    {#each currentPage.text as paragraph}
      <p class="{get(paragraph, 'formatting', []).join(' ')}">
        {@html get(paragraph, 'words', paragraph)}
      </p>
    {/each}
  {/if}

  <nav in:fade>
    {#if !currentPage.final}
      {#each History.filterAvailable(currentPage.decisions, $store) as decision}
        <Button
          disabled="{decision.disabled}"
          on:click="{() => goToDecision(decision)}"
        >
          {decision.label}
        </Button>
      {/each}
    {/if}
    {#if showRestart}
      <Button
        variation="secondary"
        on:click="{() => goToDecision({ storyNode: 'start' })}"
      >
        <span>restart</span>
        <Undo />
      </Button>
    {/if}
    {#if showSkipIntro}
      <Button variation="secondary" on:click="{skipIntro}">
        <span>Skip intro</span>
        <Undo />
      </Button>
    {/if}
    {#if showGoBackButton}
      <Button variation="secondary" on:click="{goBack}">
        <span>go back</span>
        <ReplayOne />
      </Button>
    {/if}
  </nav>
</section>
