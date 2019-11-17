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

  @media screen and (min-width: 600px) {
    .introduction {
      flex-flow: row;
      margin-bottom: calc(var(--root-vertical-spacing) * 6);
    }

    h1,
    div {
      align-self: center;
      width: 50%;
    }

    div {
      padding-left: 16px;
    }
  }

  @media screen and (min-width: 1300px) {
    .introduction {
      margin-bottom: calc(var(--root-vertical-spacing) * 6);
    }

    h1,
    p {
      width: 50%;
    }

    p {
      padding-left: 16px;
    }
  }
</style>

<section class="introduction">
  <h1>Where will you take your next tale?</h1>

  <div>
    {#if !isSubscriber}
      <p>
        Looks like you aren't subscribed yet. That's keeping you from the
        freshest content, exclusive previews, and more. You can fix this by
        <a href="/user/profile?tab=adventurer">becoming an adventurer.</a>
      </p>
    {:else}
      <p>
        Dive into the world of grues, cardinal directions, and spooky houses.
        Reading can be scary, and not just for the illiterate! Buckle up, and
        prepare for the choices ahead.
      </p>
    {/if}
  </div>

</section>
