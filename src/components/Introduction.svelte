<section class='introduction'>
  <h1>Where will your next adventure take you?</h1>

  <p>
    Dive into the world of grues, cardinal directions, and spooky houses.
    Reading can be scary, and not just for people who are illiterate! Buckle
    up, and prepare for the adventure ahead; The choice is yours.
    Your first adventure is up to you; Adventure wisely.
  </p>
</section>

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
    p {
      align-self: center;
      width: 50%;
    }

    p {
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
