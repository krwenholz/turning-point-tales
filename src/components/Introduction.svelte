<script>
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

  h1 {
    display: inline-flex;
    align-items: center;
    grid-area: heading;
    min-width: 200px;
    max-width: 20ch;
  }

  p {
    display: flex-start;
    align-items: center;
    grid-area: description;
    max-width: 80ch;
  }

  img {
    display: flex;
    grid-area: image;
    margin: 0 auto 0 auto;
    min-width: 200px;
    max-width: 100%;
  }

  @media screen and (min-width: 600px) {
    .introduction {
      flex-flow: row;
      margin-bottom: 48px;
    }

    .about {
      display: grid;
      grid-template-areas:
        "heading     heading     image"
        "description description image"
        ".           .           image"
    }

    img {
      margin-left: auto;
    }
  }
</style>

<section class="introduction">
  <div class='about'>
    <h1 class='heading'>Where will your next tale take you?</h1>
    <img
      src="/landing.png"
      alt="A dog, a rock creature, and an astronaut cuddle up with a silly human
    pretending to read"
    />
    {#if !isSubscriber}
      <p class='description'>
        Looks like you aren't subscribed yet. That's keeping you from the
        freshest content, exclusive previews, and more. You can fix this by
        <a href="/user/profile?tab=adventurer">becoming an adventurer.</a>
      </p>
    {:else}
      <p class='description'>
        Dive into the world of grues, cardinal directions, and spooky houses.
        Reading can be scary, and not just for the illiterate! Buckle up, and
        prepare for the choices ahead.
      </p>
    {/if}
  </div>


</section>
