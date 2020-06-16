<script context="module">
  import { idFromSlug } from "src/lib/slugs";

  export function preload({ params, query }) {
    return this.fetch(`story/${idFromSlug(params.slug)}.json`, {
      credentials: "include"
    })
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else if (response.status == 401) {
          this.redirect(302, "/login?error=unknown");
        } else {
          throw Error("Failed to fetch story");
        }
      })
      .then(story => {
        return {
          story: story.content,
          author: story.author,
          title: story.title,
          badges: story.badges
        };
      })
      .catch(error => {
        console.error(error);
        this.error(500, error);
      });
  }
</script>

<script>
  import Adventure from "src/components/Adventure";
  import BadgePopup from "src/routes/story/_BadgePopup.svelte";
  import Button from "src/components/Button.svelte";
  import { fetchCsrf } from "src/lib/client/csrf";
  import { goto, stores } from "@sapper/app";
  import { logger } from "src/lib/client/logger";
  import { mainAdventure } from "src/lib/global-state-stores/browserStore/main-adventure";
  import { onMount } from "svelte";
  import { safeWindow } from "src/lib/client/safe-window";
  import {
    freeStoryAvailable,
    setFreeStoryRecord
  } from "src/lib/client/free-story-record";
  import { some } from "lodash";
  import { userSubscribed } from "src/lib/client/user";

  export let story;
  export let author;
  export let title;
  export let badges;

  const ONE_DAY = 1 * 24 * 60 * 60 * 1000;

  const { page, session } = stores();
  const storyId = idFromSlug($page.params.slug);
  const isSubscribed = userSubscribed($session.user);
  let haveRemainingDecisions = true;
  let badgePopup;
  let csrf;
  let previousNodeName = $page.query.storyNode;
  let visitations = [];

  $: isStoryAvailableFree = freeStoryAvailable(storyId, $session.user);

  const setURL = storyNode => {
    safeWindow().history.replaceState(
      "",
      "",
      `${safeWindow().location.pathname}?storyNode=${storyNode}`
    );
  };

  const scrollToTop = () => safeWindow().scrollTo(0, 0);

  const recordVisit = detail => {
    if (detail.final) {
      setFreeStoryRecord(storyId);
    }

    fetch("/story/visits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": csrf
      },
      body: JSON.stringify({
        storyId: storyId,
        nodeName: detail.storyNode,
        previousNodeName: previousNodeName
      })
    })
      .then(response => {
        if (!response.ok) throw new Error("Response was not ok");
        logger.info(
          { storyNode: detail.storyNode },
          "Successfully updated visitations"
        );
        previousNodeName = detail.storyNode;
        if (visitations.indexOf(detail.storyNode) !== -1)
          visitations.push(detail.storyNode);
      })
      .catch(err => {
        logger.error(err, "Error updating visitations");
      });
  };

  const finalNodeSeen = visitations => {
    return some(visitations, node => story[node].final);
  };

  onMount(() => {
    csrf = fetchCsrf();

    if (!$session.user) return;

    fetch("/story/visits")
      .then(response => {
        if (!response.ok) throw new Error("Response was not ok");
        logger.info("Successfully fetched visitations");
        return response.json();
      })
      .then(recordedVisitations => {
        for (let visitation of recordedVisitations) {
          if (visitation.story_id === idFromSlug($page.params.slug)) {
            visitations.push(visitation.node_name);
            visitations = visitations;
          }
        }
      })
      .catch(err => {
        logger.error(err, "Error fetching visitations");
      });
  });
</script>

<style>
  .route-adventure {
    display: flex;
    flex-flow: column;
    flex: 1;
  }

  .final-options {
    flex-shrink: 0;
    flex-grow: 0;
    align-self: center;
    margin: 16px 0;
  }

  .route-adventure :global(.explore-other-stories) {
    min-width: fit-content;
    min-width: moz-fit-content;
    margin-top: 16px;
  }
</style>

<svelte:head>
  <title>{title} by {author} - Turning Point Tales</title>
  <meta
    name="description"
    content="Dive into an tale by {story['author']}. {story['preview']}"
  />
</svelte:head>

<div class="route-adventure">
  {#if (process.browser && isSubscribed) || isStoryAvailableFree}
    <Adventure
      {story}
      {title}
      {visitations}
      {goto}
      className="adventure"
      store="{mainAdventure(story)}"
      storyNode="{$page.query.storyNode}"
      on:pageChange="{({ detail }) => {
        recordVisit(detail);
        scrollToTop();
        setURL(detail.storyNode);
        badgePopup.newPage(detail.storyNode);
        haveRemainingDecisions = !detail.final;
      }}"
    />
    <BadgePopup {badges} bind:this="{badgePopup}" />
    {#if !haveRemainingDecisions}
      <div class="final-options">
        {#if !isSubscribed}
          <Button
            variation="link"
            on:click="{() => goto('/user/profile?tab=adventurer')}"
          >
            <span>Enjoy more great tales, become an adventurer now</span>
          </Button>
        {/if}
        <Button
          className="{'explore-other-stories'}"
          variation="link"
          on:click="{() => goto('/')}"
        >
          <span>Explore other stories</span>
        </Button>
      </div>
    {/if}
  {:else}
    <p>
      Looks like this story isn't available to you.
      {#if $session.user}
        <a href="/user/profile?tab=adventurer">Become a full adventurer now.</a>
      {:else}
        <a href="/user/new">
          Create your user and subscribe to become a full adventurer.
        </a>
      {/if}
    </p>
  {/if}
</div>
