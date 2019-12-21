<script>
  import Button from "../components/Button.svelte";
  import TypeText from "../components/TypeText.svelte";
  import { fade } from "../lib/Transition";
  import { goto } from "@sapper/app";
  import { join } from "lodash";

  let typer;
  let showWalkthrough = false;
  let showNav = false;

  const walkthrough = [
    {
      lead: "This is for you.",
      details: ["New stories come out every month, subscriber only for now."]
    },
    {
      lead: "Great stories are just waiting to be found.",
      details: [
        "Our stories are original, sourced from unknown authors we pay, and stamped with the “we really enjoyed this” guarantee. The tooling and platform will eventually be open to everyone."
      ]
    },
    {
      lead: "Focus on the journey.",
      details: [
        "When you finish a story, you’ll get a badge to remember the experience. Some stories take a while, so we save your place as you read (per device)."
      ]
    },
    {
      lead: "Every choice matters.",
      details: [
        "Stories are deep, often twenty minute, experiences. A few choices lead to swift ends. When they do, it’s an end worth reading. But don’t panic! We let you go back after every decision."
      ]
    },
    {
      lead: "We are glad you came."
    }
  ];
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

  .walkthrough {
    display: flex;
    width: 100%;
    flex-flow: column;
    justify-content: center;
    text-align: left;
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
    min-height: 200px;
    width: fit-content;
    width: -moz-fit-content;
    flex-flow: column;
    align-items: center;
    margin: 0 auto 0 auto;
  }

  .lead {
    font-weight: bold;
  }

  :global(.button) {
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

    .walkthrough {
      grid-area: walkthrough;
      align-self: start;
    }
  }
</style>

<svelte:window />

<section class="landing" on:click="{() => typer.skipTyping()}">
  <h1>
    <TypeText
      bind:this="{typer}"
      on:end="{() => (showNav = true)}"
      typingSpeed="{40}"
      jitter="{'60'}"
      text="{[`Adventures you choose,`, `tales you get lost in.`]}" />
  </h1>

  <img
    src="/landing.png"
    alt="A dog, a rock creature, and an astronaut cuddle up with a silly human
    pretending to read" />

  {#if showNav}
    <nav in:fade>
      <Button on:click="{() => goto('/user/new')}">Create an account</Button>

      <Button variation="secondary" on:click="{() => goto('/teaser-story')}">
        A day aboard an intergalactic starship
      </Button>

      {#if !showWalkthrough}
        <Button variation="link" on:click="{() => (showWalkthrough = true)}">
          Learn more about the site
        </Button>
      {/if}
    </nav>
  {/if}

  {#if showWalkthrough}
    <div class="walkthrough" in:fade>
      {#each walkthrough as { lead, details } (lead + join(details, ''))}
        <div in:fade>
          {#if lead}
            <p class="lead">{lead}</p>
          {/if}
          {#if details}
            {#each details as paragraph}
              <p>{paragraph}</p>
            {/each}
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</section>
