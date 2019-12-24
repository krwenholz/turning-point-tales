<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`story/${params.slug}.json`, {
      credentials: "include"
    });

    const json = await res.json();
    if (res.status == 200) {
      return {
        story: json.content,
        storyId: json.content,
        title: json.title,
        badges: json.badges,
        generalRelease: json.general_release
      };
    } else if (res.status == 401) {
      this.redirect(302, "/login?error=unknown");
    } else {
      console.error(res);
      this.error(res.status, res);
    }
  }
</script>

<script>
  import Adventure from "src/components/Adventure";
  import DisplayAd from "./DisplayAd";
  import BadgePopup from "src/routes/story/_BadgePopup.svelte";
  import Button from "src/components/Button.svelte";
  import { logger } from "src/lib/client/logger";
  import { adStore } from "src/lib/global-state-stores/browserStore/display-ads";
  import { fetchCsrf } from "src/lib/client/csrf";
  import { mainAdventure } from "src/lib/global-state-stores/browserStore/main-adventure";
  import { onMount } from "svelte";
  import { goto, stores } from "@sapper/app";
  import { userSubscribed } from "src/lib/client/user";
  import { some } from "lodash";

  export let story;
  export let title;
  export let badges;
  export let generalRelease;

  const ONE_DAY = 1 * 24 * 60 * 60 * 1000;

  const { page, session } = stores();
  const isSubscribed = userSubscribed($session.user);
  const released = new Date(generalRelease) < new Date();
  let haveRemainingDecisions = true;
  let badgePopup;
  let csrf;
  let previousNodeName = $page.query.storyNode;
  let visitations = [];

  const adInfo = adStore();

  const adFinished = () => {
    $adInfo.dateSeen = Date.now();
  };

  const recordVisit = detail => {
    fetch("/story/visits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": csrf
      },
      body: JSON.stringify({
        storyId: $page.params.slug,
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

  $: adRecentlySeen = Date.now() - $adInfo.dateSeen < ONE_DAY;
  $: userInTrial =
    finalNodeSeen(visitations) &&
    Date.now() - $session.user.created < ONE_DAY * 4;
  $: adDisabled = adRecentlySeen || userInTrial;

  onMount(() => {
    csrf = fetchCsrf();

    fetch("/story/visits")
      .then(response => {
        if (!response.ok) throw new Error("Response was not ok");
        logger.info("Successfully fetched visitations");
        return response.json();
      })
      .then(recordedVisitations => {
        for (let visitation of recordedVisitations) {
          if (visitation.story_id === $page.params.slug) {
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
  <title>{title}</title>
</svelte:head>

{#if (process.browser && isSubscribed) || (released && adDisabled)}
  <div class="route-adventure">
    <Adventure
      {story}
      {title}
      {visitations}
      store="{mainAdventure(story)}"
      className="adventure"
      storyNode="{$page.query.storyNode}"
      {goto}
      bind:haveRemainingDecisions
      on:pageChange="{({ detail }) => {
        recordVisit(detail);
        badgePopup.newPage(detail.storyNode);
      }}" />
    <BadgePopup {badges} bind:this="{badgePopup}" />
    {#if !haveRemainingDecisions}
      <div class="final-options">
        {#if !isSubscribed}
          <Button
            variation="link"
            on:click="{() => goto('/user/profile?tab=adventurer')}">
            <span>Enjoy more great tales, become an adventurer now</span>
          </Button>
        {/if}
        <Button
          className="{'explore-other-stories'}"
          variation="link"
          on:click="{() => goto('/')}">
          <span>Explore other stories</span>
        </Button>
      </div>
    {/if}
  </div>
{:else if released}
  <DisplayAd on:end="{adFinished}" />
{:else}
  <p>
    Looks like this story isn't released to non-subscribers yet.
    <a href="/user/profile?tab=adventurer">Become a full adventurer now.</a>
  </p>
{/if}
