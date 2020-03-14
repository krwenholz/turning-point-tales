<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  export let badges;

  let earnedBadge;
  let timeout = null;

  export const newPage = storyNode => {
    earnedBadge = null;
    if (timeout) window.clearTimeout(timeout);

    for (let badge of badges) {
      if (storyNode === badge.node) {
        earnedBadge = badge;
        timeout = window.setTimeout(clearBadge, 10000);
      }
    }
  };

  const clearBadge = () => {
    earnedBadge = null;
    timeout = null;
  };
</script>

<style>
  section {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 10vh;
    left: 0;
  }

  p {
    font-size: var(--root-font-size-lg);
    text-align: center;
    background: var(--root-color-background);
    cursor: pointer;
    border: 1px solid var(--root-color-primary-altered);
    border-radius: var(--root-border-radius);
    padding: var(--root-wrapper-padding);
    box-shadow: 10px 5px 5px var(--root-color-primary-altered);
  }
</style>

{#if earnedBadge}
  <section
    in:fade="{{ duration: 1000 }}"
    out:fade="{{ duration: 2000 }}"
    on:click="{() => (earnedBadge = null)}"
  >
    <p>
      Badge earned:
      <span>{earnedBadge.icon}</span>
      {earnedBadge.text}
    </p>
  </section>
{/if}
