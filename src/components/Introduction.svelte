<script>
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";

  export let isSubscriber;

  const { page, session } = stores();
</script>

<style>
  .about {
    display: flex;
    flex-flow: column;
    margin: auto auto 16px auto;
  }

  .about h1 {
    display: none;
  }

  .enticement {
    display: flex-start;
    align-items: center;
    grid-area: enticement;
    max-width: 80ch;
  }

  img {
    display: flex;
    grid-area: image;
    margin: 0 auto 0 auto;
    min-width: 200px;
    max-width: 100%;
  }

  h1 {
    display: inline-flex;
    align-items: center;
    grid-area: heading;
    min-width: 200px;
    max-width: 20ch;
  }

  @media screen and (min-width: 600px) {
    .about {
      display: grid;
      grid-template-areas:
        "heading    heading    image"
        "enticement enticement image"
        "explainer  explainer  image";
    }

    .about h1 {
      display: inline-block;
    }

    img {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 1300px) {
    img {
      padding-left: 100px;
    }
  }
</style>

<div class="about">
  <h1 class="heading">Where will your next tale take you?</h1>
  <img
    src="/landing.png"
    alt="A dog, a rock creature, and an astronaut cuddle up with a silly human
    pretending to read"
  />

  {#if !$session.user}
    <p class="enticement">
      Your pre-adventure briefing
      <a href="/briefing">is here.</a>
      Earn badges, learn about upcoming adventures, and more by
      <a href="/user/new">creating an account.</a>
      Or just read a story below!
    </p>
  {:else if !isSubscriber}
    <p class="enticement">
      Looks like you aren't subscribed yet. That's keeping you from the freshest
      content, exclusive previews, and more. You can fix this by
      <a href="/user/profile?tab=adventurer">becoming an adventurer.</a>
    </p>
  {:else}
    <p class="enticement">
      Dive into the world of grues, cardinal directions, and spooky houses.
      Reading can be scary, and not just for the illiterate! Buckle up, and
      prepare for the choices ahead.
    </p>
  {/if}
</div>
