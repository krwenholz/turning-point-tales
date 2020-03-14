<script>
  import { stores } from "@sapper/app";
  const { session } = stores();

  export let isSubscriber;
</script>

<style>
  .introduction {
    display: flex;
    flex: 1 0 auto;
    margin-bottom: calc(var(--root-vertical-spacing) * 3);
    flex-flow: column;
  }

  .about {
    display: flex;
    flex-flow: column;
  }

  .enticement {
    display: flex-start;
    align-items: center;
    grid-area: enticement;
    max-width: 80ch;
  }

  .explainer {
    display: flex-start;
    align-items: center;
    grid-area: explainer;
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
    .introduction {
      flex-flow: row;
      margin-bottom: 48px;
    }

    .about {
      display: grid;
      grid-template-areas:
        "heading    heading    image"
        "enticement enticement image"
        "explainer  explainer  image";
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

<section class="introduction">
  <div class="about">
    <h1 class="heading">Where will your next tale take you?</h1>
    <img
      src="/landing.png"
      alt="A dog, a rock creature, and an astronaut cuddle up with a silly human
      pretending to read"
    />

    {#if !$session.user}
      <p class="enticement">
        Looks like you don't have an account yet. Want to earn badges, and learn
        about upcoming adventures? Try
        <a href="/user/new">creating an account.</a>
      </p>
    {:else if !isSubscriber}
      <p class="enticement">
        Looks like you aren't subscribed yet. That's keeping you from the
        freshest content, exclusive previews, and more. You can fix this by
        <a href="/user/profile?tab=adventurer">becoming an adventurer.</a>
      </p>
    {:else}
      <p class="enticement">
        Dive into the world of grues, cardinal directions, and spooky houses.
        Reading can be scary, and not just for the illiterate! Buckle up, and
        prepare for the choices ahead.
      </p>
    {/if}
    <p class="explainer">
      This is your adventuring hub. Here, you'll find stories and badges earned,
      with some sense for how many are left. At the top you'll see links to
      access settings (subscription preferences, etc.) or log out.
    </p>
  </div>

</section>
