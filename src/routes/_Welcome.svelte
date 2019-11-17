<script>
  import Introduction from "src/components/Introduction.svelte";
  import StoryPreviews from "src/components/StoryPreview/index.svelte";
  import { onMount } from "svelte";
  import { userSubscribed } from "src/lib/client/user";
  import { Logger } from "src/lib/client/logger";
  import { stores } from "@sapper/app";

  const { page, session } = stores();

  export let stories = [];

  let visitations = new Set([]);

  $: if ($page.query.user === "clear") {
    Logger.info("Clearing user");
    $session.user = null;
  }

  onMount(() => {
    fetch("/story/visits")
      .then(response => {
        if (response.ok) return response.json();
        throw Error("Failed to fetch history");
      })
      .then(response => {
        for (let visitation of response) {
          console.log("vvv", visitation);
          visitations.add(visitation.node_name);
          visitations = visitations; // because reactivity
        }
      })
      .catch(error => {
        Logger.error("Failed to fetch history", error);
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
      .catch(error => {
        Logger.error("Failed to fetch stories", error);
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

<StoryPreviews {stories} isSubscriber="{userSubscribed($session.user)}" />
