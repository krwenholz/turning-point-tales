<script>
  import ButtonLink from "src/components/ButtonLink.svelte";
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
  export let src = '';

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
  }

  h2 {
    font-size: 16px;
    text-align: start;
    text-decoration: underline;
    margin: 0;
  }

  img {
    margin: 4px 0 4px 0;
    height: 100px;
    width: 100%;
    background-color: lightgray;
  }

  .tag {
    float: right;
    height: fit-content;
    height: -moz-fit-content;
    background-color: #5e5d5e;
    color: whitesmoke;
    font-weight: normal;
    padding: 4px;
    margin-left: 4px;
    border: none;
    border-radius: 3px;
    font-size: 10px;
  }

  .tag:last-of-type {
    margin-left: 8px;
  }

  p {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .row {
    display: flex;
    margin-top: auto;
  }

  .row :global(.button) {
    line-height: 1;
    min-height: auto;
  }

  .row .badges {
    display: flex;
    align-items: center;
    margin: 0 0 0 8px;
  }

  hr {
    width: 100%;
  }

  footer {
    display: flex;
    align-items: flex-end;
  }

  .author {
    text-align: left;
    color: var(--root-color-primary-altered);
    margin: 0;
  }
</style>

<article>
  <h2>
    {#each tags as tag}
      <span class="tag">
        {tag.charAt(0).toUpperCase() + tag.slice(1)}
      </span>
    {/each}
    {title}
  </h2>

  <img src="//placehold.it/100x200" width="500" height="300" alt="" />

  <p>{preview}</p>

  <div class='row'>
    {#if isSubscriber || generalRelease}
      <ButtonLink href="/story/{id}">Read</ButtonLink>
    {:else if $session.user}
      <ButtonLink
        href="/user/profile?tab=adventurer"
        disabled="true"
        variation="secondary"
      >
        Subscribe now
      </ButtonLink>
    {:else}
      <ButtonLink href="/user/new" disabled="true" variation="secondary">
        Subscribers only
      </ButtonLink>
    {/if}
    {#if $session.user}{#if badges.length}
        <p class='badges'>Badges:
          {#each badges as badge}
            {#if badge.visited}
              <span class="badge">{badge.icon}</span>
            {/if}
          {/each}
          {#if undiscoveredBadgePercent > 0.5}
            <span class='badge'><i> none</i></span>
          {:else if undiscoveredBadgePercent > 0}
            <span class='badge'>... only a small number remaining</span>
          {/if}
        </p>
    {/if}{/if}
  </div>

  <hr />

  <footer>
    <small class='author'>by {author}</small>
    </footer>
</article>
