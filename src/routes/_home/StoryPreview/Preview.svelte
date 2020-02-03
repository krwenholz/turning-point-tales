<script>
  import Button from "src/components/Button.svelte";
  import { goto } from "@sapper/app";
  import { stores } from "@sapper/app";
  const { session } = stores();

  export let id;
  export let author;
  export let title;
  export let preview;
  export let badges;
  export let tags;
  export let generalRelease;
  export let isSubscriber;

  $: releaseDate = new Date(generalRelease);

  let acheivedBadges = [];
  let undiscoveredBadgePercent = 0;

  $: {
    acheivedBadges = [];
    undiscoveredBadgePercent = 0;
    for (let badge of badges) {
      if (badge.visited) acheivedBadges.push(badge);
      else undiscoveredBadgePercent++;
    }
    undiscoveredBadgePercent = undiscoveredBadgePercent / badges.length;
  }
</script>

<style>
  article {
    padding: 16px;
    display: flex;
    flex-flow: column;
    border: 1px solid gray;
    border-radius: var(--root-border-radius);
  }

  header {
    display: flex;
    flex-flow: column;
  }

  h2 {
    text-align: center;
    margin-bottom: 8px;
    text-decoration: underline;
  }

  small {
    text-align: center;
    color: var(--root-color-primary-altered);
    margin-bottom: 24px;
  }

  .tags {
    display: flex;
    flex-flow: row wrap;
    min-height: 20px;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .tag {
    color: black;
    font-weight: normal;
    padding: 4px;
    margin: 5px;
    border: 1px solid var(--root-color-primary);
    border-radius: 1px;
    font-size: 10px;
  }

  :global(.button) {
    margin-top: auto;
    display: flex;
    align-items: center;
    color: var(--root-call-to-action);
  }
</style>

<article>
  <header>
    <h2>{title}</h2>
    <small>by {author}</small>
    {#if !generalRelease}
      <small>Subscribers only</small>
      {#if $session.user && !isSubscriber}
        <small>
          <a href="/user/profile?tab=adventurer">
            Become a full adventurer now to unlock access.
          </a>
        </small>
      {/if}
    {/if}
    <small></small>
  </header>
  <div class="tags">
    {#each tags as tag}
      <span class="tag">{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
    {/each}
  </div>
  <div class="badges">
    {#if badges.length}
      <p>
        Badges:
        {#each badges as badge}
          {#if badge.visited}
            <span class="badge">{badge.icon}</span>
          {/if}
        {/each}
        {#if undiscoveredBadgePercent > 0.5}
          ... many more to discover.
        {:else if undiscoveredBadgePercent > 0}
          ... only a small number remaining.
        {/if}
      </p>
    {/if}
  </div>
  <p>{preview}</p>
  {#if isSubscriber || generalRelease}
    <Button on:click="{() => goto(`/story/${id}`)}">Continue...</Button>
  {/if}
</article>
