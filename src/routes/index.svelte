<script>
  import ButtonLink from "src/components/ButtonLink.svelte";
  import TypeText from "src/components/TypeText.svelte";
  import { fade } from "src/lib/Transition";
  import { get } from "svelte/store";
  import { goto } from "@sapper/app";
  import { join } from "lodash";
  import { logger } from "src/lib/client/logger";
  import { onMount, onDestroy } from "svelte";
  import { stores } from "@sapper/app";
  import { visited } from "src/lib/global-state-stores/browserStore/visited";

  const { page, session } = stores();
  let typer;
  let showWalkthrough = false;
  let showNav = false;

  onMount(() => {
    if ($page.query.user === "clear") {
      logger.info("Clearing user");
      session.set({});
    }
    if ($session.user || $visited.pages.includes("landing")) {
      window.location = "/home";
    }
  });

  const visitLanding = () => {
    $visited.pages = [...$visited.pages, "landing"];
  };
</script>

<style>
  .landing {
    display: flex;
    width: 100%;
    flex: 1 1;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: baseline;
    align-self: center;
  }

  h1 {
    margin-top: 0;
    min-height: 70px;
    text-align: center;
    align-self: center;
    line-height: 30px;
    font-size: 20px;
  }

  img {
    width: 100%;
    display: flex;
    max-width: 500px;
    margin: 0 auto;
  }

  nav {
    display: flex;
    width: fit-content;
    width: -moz-fit-content;
    flex-flow: column;
    align-items: center;
    margin: 0 auto 0 auto;
  }

  :global(a.button) {
    margin-bottom: 24px;
    width: 100%;
  }

  @media only screen and (min-width: 800px) {
    .landing {
      display: grid;
      flex: none;
      margin: auto;
      grid-gap: 24px;
      width: 70vw;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto minmax(200px, 1fr);
      grid-template-areas:
        "typed-text image           image"
        "typed-text image           image"
        "nav        walkthrough     walkthrough";
    }

    h1 {
      grid-area: typed-text;
      font-size: 2.5vw;
      line-height: inherit;
    }

    img {
      grid-area: image;
    }

    nav {
      grid-area: nav;
      width: 70%;
      display: flex;
    }
  }
</style>

<svelte:head>
  <title>Turning Point Tales</title>
  <meta
    name="description"
    content="Your destination for adventures you choose and tales you get lost
    in. Are you ready?"
  />
</svelte:head>

{#if process.browser}
  <section class="landing" on:click="{() => typer.skipTyping()}">
    <h1>
      <TypeText
        bind:this="{typer}"
        on:end="{() => (showNav = true)}"
        typingSpeed="{40}"
        jitter="{'60'}"
        text="{[`Adventures you choose,`, `tales you get lost in.`]}"
      />
    </h1>

    <img
      src="/landing.png"
      alt="A dog, a rock creature, and an astronaut cuddle up with a silly human
      pretending to read"
    />

    {#if showNav}
      <nav in:fade>
        <ButtonLink href="/briefing" on:click="{visitLanding}">
          Start your pre-adventure briefing
        </ButtonLink>
      </nav>
    {/if}
  </section>
{/if}
