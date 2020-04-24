<script>
  import * as sapper from "@sapper/app";
  import Button from "src/components/Button.svelte";
  import { axios } from "src/lib/axios";
  import { fetchCsrf } from "src/lib/client/csrf";
  import { logger } from "src/lib/client/logger";
  import { onMount } from "svelte";

  const { goto } = sapper;
  const { session } = sapper.stores();

  const deleteUser = async () => {
    try {
      await axios.delete("/api/user/", {
        params: {
          email: $session.user.email
        }
      });

      session.set({});
      window.location.href = "/?user=clear"; // since we deleted, need hard page refresh
    } catch (error) {
      alert(error);
    }
  };

  const unlinkAlexa = () => {
    fetch("/alexa/link", {
      method: "DELETE",
      headers: {
        "XSRF-TOKEN": fetchCsrf()
      }
    })
      .then(response => {
        logger.info({ response }, "fff");
        if (response.ok) return ($session.alexaLinked = false);
        throw Error("Failed to unlink Alexa");
      })
      .catch(err => {
        logger.error(err, "Failed to unlink Alexa");
      });
  };

  onMount(() => {
    $session.alexaLinked = $session.alexaLinked || false;
    if (!$session.alexaLinked) {
      fetch("/alexa/link")
        .then(response => {
          if (response.ok) return ($session.alexaLinked = true);
          throw Error("Failed to fetch alexa linkage");
        })
        .catch(err => {
          logger.error(err, "Failed to fetch linkage");
        });
    }
  });
</script>

<style>
  section {
    margin-bottom: 24px;
  }
</style>

<section>
  {#if $session.alexaLinked}
    <p>
      Do you need to unlink your account from Amazon Alexa? Here's your button!
      If you're having trouble getting her to play nice with our stories, hit us
      up at
      <a href="mailto:support@turningpointtales.com">
        support@turningpointtales.com
      </a>
    </p>

    <Button on:click="{unlinkAlexa}">Unlink Amazon Alexa</Button>
  {:else}
    <p>
      You don't have an account link with Amazon Alexa. But you could! Check out
      the app
      <a href="TODO">here.</a>
    </p>
  {/if}
</section>

<hr />

<section>
  <p>
    Sometimes the adventure needs to end. If that's the case for you, You can
    request to delete your user here. If there's anything we can do to keep you
    around, please hit us up at
    <a href="mailto:support@turningpointtales.com">
      support@turningpointtales.com
    </a>
  </p>

  <Button on:click="{deleteUser}">DELETE</Button>
</section>
