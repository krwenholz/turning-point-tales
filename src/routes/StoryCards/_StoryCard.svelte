<script>
  import ButtonLink from "src/components/ButtonLink.svelte";
  import StripedCone from "src/components/icons/StripedCone.svelte";
  import Tooltip from "src/components/Tooltip.svelte";
  import { freeStoryAvailable } from "src/lib/client/free-story-record";
  import { goto } from "@sapper/app";
  import { idFromSlug } from "src/lib/slugs";
  import { stores } from "@sapper/app";
  import { testIds } from "src/lib/test-ids.js";

  const { session } = stores();

  export let idx = "";
  export let slug;
  export let author;
  export let title;
  export let preview;
  export let badges;
  export let tags;
  export let content_warnings = "";
  export let isSubscriber;

  let acheivedBadges = [];
  let undiscoveredBadgePercent = 0;
  let isStoryAvailableFree = freeStoryAvailable(
    idFromSlug(slug),
    $session.user
  );

  $: src = title;

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

  h2 {
    font-size: 14px;
    text-align: start;
    text-decoration: underline;
    margin: 0;
    min-height: 70px;
  }

  img {
    margin: 4px 0 12px 0;
    height: auto;
    width: 100%;
    max-width: 360px;
    border: 1px solid gray;
    border-radius: 3px;
    box-shadow: 0px 7px 13px -9px rgba(0, 0, 0, 0.75);
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
    align-items: center;
    justify-content: space-between;
  }

  .author {
    text-align: left;
    color: var(--root-color-primary-altered);
    margin: 0;
  }
</style>

<article data-test-id="{`${testIds.STORY_CARD}-${idx}`}">
  <h2>
    {#each tags as tag}
      <span class="tag">{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
    {/each}
    {title}
  </h2>

  {#if process.browser}
    <a href="/story/{slug}">
      <img
        src="{`/story-card-images/${src}`}"
        on:error="{() => (title = 'placeholder.png')}"
        alt="click to go to story"
      />
    </a>
  {/if}

  <p>{preview}</p>

  <div class="row">
    {#if isSubscriber}
      <ButtonLink href="/story/{slug}">Read</ButtonLink>
    {:else if isStoryAvailableFree}
      <ButtonLink href="/story/{slug}">Read your one freebie</ButtonLink>
    {:else if $session.user}
      <ButtonLink href="/user/profile?tab=adventurer" variation="secondary">
        Subscribe now
      </ButtonLink>
    {:else}
      <ButtonLink href="/user/new" variation="secondary">
        Create an account and subscribe
      </ButtonLink>
    {/if}
    {#if $session.user}
      {#if badges.length}
        <p class="badges">
          Badges:
          {#each badges as badge}
            {#if badge.visited}
              <span class="badge">{badge.icon}</span>
            {/if}
          {/each}
          {#if undiscoveredBadgePercent > 0.5}
            <span class="badge">
              <i>none</i>
            </span>
          {:else if undiscoveredBadgePercent > 0}
            <span class="badge">... only a small number remaining</span>
          {/if}
        </p>
      {/if}
    {/if}
  </div>

  <hr />

  <footer>
    <small class="author">by {author}</small>
    {#if content_warnings}
      <Tooltip text="{content_warnings}">
        <StripedCone color="var(--root-color-error)" />
      </Tooltip>
    {/if}
  </footer>
</article>
