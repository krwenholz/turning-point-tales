<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`story/${params.slug}.json`, {
      credentials: "include"
    });

    const json = await res.json();
    if (res.status == 200) {
      return {
        story: json.content,
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
  import * as sapper from "@sapper/app";
  import Adventure from "src/components/Adventure";
  import DisplayAd from "src/components/ads/DisplayAd.svelte";
  import BadgePopup from "src/routes/story/_BadgePopup.svelte";
  import { Logger } from "src/lib/client/logger";
  import { adStore } from "src/lib/stores/browserStore/display-ads";
  import { fetchCsrf } from "src/lib/client/csrf";
  import { mainAdventure } from "src/lib/stores/browserStore/main-adventure";
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";
  import { userSubscribed } from "src/lib/client/user";

  export let story;
  export let title;
  export let badges;
  export let generalRelease;

  const { page, session } = sapper.stores();
  const isSubscribed = userSubscribed($session.user);
  const released = new Date(generalRelease) < new Date();
  const oneDay = 1 * 24 * 60 * 60 * 1000;
  let previousNodeName = $page.query.storyNode;
  let visitations = [];
  let csrf;
  let badgePopup;

  const adInfo = adStore();

  const adFinished = () => {
    $adInfo.dateSeen = Date.now();
  };

  const handleBadges = detail => {
    Logger.info("bbb", badges, detail);
  };

  const recordVisit = ({ detail }) => {
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
        Logger.info("Successfully updated visitations", detail.storyNode);
        previousNodeName = detail.storyNode;
        if (visitations.indexOf(detail.storyNode) !== -1)
          visitations.push(detail.storyNode);
      })
      .catch(error => {
        Logger.error("Error updating visitations", error);
      });
  };

  $: adSeen = Date.now() - $adInfo.dateSeen < oneDay;

  onMount(() => (csrf = fetchCsrf()));

  onMount(() => {
    fetch("/story/visits")
      .then(response => {
        if (!response.ok) throw new Error("Response was not ok");
        Logger.info("Successfully fetched visitations");
        return response.json();
      })
      .then(recordedVisitations => {
        for (let visitation of recordedVisitations) {
          visitations.push(visitation.node_name);
          visitations = visitations;
        }
      })
      .catch(error => {
        Logger.error("Error fetching visitations", error);
      });
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#if isSubscribed || (released && adSeen)}
  <div class="story-container">
    <Adventure
      {story}
      {title}
      store="{mainAdventure(story)}"
      className="adventure"
      storyNode="{$page.query.storyNode}"
      {visitations}
      on:pageChange="{recordVisit}"
      on:pageChange="{({ detail }) => badgePopup.newPage(detail.storyNode)}" />
    <BadgePopup {badges} bind:this="{badgePopup}" />
  </div>
{:else if released}
  <DisplayAd on:end="{adFinished}" />
{:else}
  <p>
    Looks like this story isn't released to non-subscribers yet.
    <a href="/user/profile?tab=adventurer">Become a full adventurer now.</a>
  </p>
{/if}
