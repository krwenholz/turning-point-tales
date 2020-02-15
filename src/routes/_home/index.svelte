<script>
  import Introduction from "src/components/Introduction.svelte";
  import StoryPreview from "./StoryPreview";
  import { onMount } from "svelte";
  import { userSubscribed } from "src/lib/client/user";
  import { logger } from "src/lib/client/logger";
  import { stores } from "@sapper/app";
  import { visited } from "src/lib/global-state-stores/browserStore/visited";

  const { page, session } = stores();

  export let stories = [];

  let visitations = new Set([]);

  onMount(() => {
    if(!$session.user) return;

    fetch("/story/visits")
      .then(response => {
        if (response.ok) return response.json();
        throw Error("Failed to fetch history");
      })
      .then(response => {
        for (let visitation of response) {
          visitations.add(visitation.node_name);
          visitations = visitations; // because reactivity
        }
      })
      .catch(err => {
        logger.error(err, "Failed to fetch history");
      });
  });

  onMount(() => {
    fetch("story.json?context=preview")
      .then(response => {
        if (response.ok) return response.json();
        throw Error("Failed to fetch stories");
      })
      .then(response => {
        stories = response;
      })
      .catch(err => {
        logger.error(err, "Failed to fetch stories");
      });
  });

  $: {
    for (let { badges } of stories) {
      for (let badge of badges) {
        if (visitations.has(badge.node)) {
          badge.visited = true;
        }
      }
    }
    stories = stories; // because reactivity
  }
</script>

{#if $page.query.user === 'new'}
  <p>
    Congratulations on creating your new user! We hope you enjoy the adventure.
  </p>
{/if}

<Introduction isSubscriber="{userSubscribed($session.user)}" />

<StoryPreview {stories} isSubscriber="{userSubscribed($session.user)}" />
