<script>
  import Button from "../components/Button.svelte";
  import TypeText from "../components/TypeText.svelte";
  import { fade } from "../lib/Transition";
  import { goto } from "@sapper/app";
  import { join } from "lodash";

  let typer;
  let walkthroughDiv;
  let walkthroughIndex = -1;
  let scrollY;
  let displayedWalkthrough = [];

  // TODO(kyle): give first choice
  // TODO(kyle): each choice displays elements or lead to Banks (at end?) but always give choice to join
  // TODO(kyle): Last choice does not display a next
  let walkthrough = [
    {
      details: ["Your first choice is below...."]
    },
    {
      lead: "This is for you.",
      details: [
        "New stories come out every month, subscriber only for three to four weeks."
      ]
    },
    {
      lead: "Great stories are just waiting to be found.",
      details: [
        "Our stories are original, sourced from unknown authors, and stamped with the “we really enjoyed this” guarantee. The tooling and platform will eventually be open to everyone."
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

  $: {
    displayedWalkthrough = walkthrough.slice(0, walkthroughIndex + 1);
    scrollY =
      scrollY +
      (walkthroughDiv && walkthroughDiv.lastChild
        ? walkthroughDiv.lastChild.getBoundingClientRect().top
        : 0);
  }
</script>

<style>
  .landing {
    width: 100%;
    display: flex;
    flex: 1 1;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: baseline;
    align-self: center;
  }

  .text {
    display: flex;
    flex-flow: column;
    align-self: flex-start;
    margin-bottom: 64px;
  }

  .walkthrough {
    display: flex;
    width: 100%;
    flex-flow: column;
    justify-content: center;
    text-align: center;
  }

  h1 {
    text-align: center;
    align-self: center;
    max-width: 400px;
    padding-bottom: 20px;
  }

  img {
    display: none;
    width: auto;
    height: 500px;
    transform: translate(0, -25%);
  }

  nav {
    display: flex;
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

  @media only screen and (min-height: 700px) {
    .landing {
      margin-top: 15vh;
    }
  }

  @media only screen and (min-width: 1150px) {
    .landing {
      flex-flow: row wrap;
      justify-content: space-around;
    }

    h1 {
      font-size: 44px;
      line-height: 1.3;
    }

    .text {
      width: 50%;
    }

    img {
      display: flex;
      transform: none;
      max-width: 50%;
    }

    nav {
      width: 100%;
      display: flex;
    }

    nav :global(.button) {
      width: fit-content;
      width: -moz-fit-content;
    }
  }
</style>

<svelte:window bind:scrollY />

<section class="landing" on:click="{() => typer.skipTyping()}">
  <div class="text">
    <h1>
      <TypeText
        bind:this="{typer}"
        on:end="{() => walkthroughIndex++}"
        typingSpeed="{0}"
        jitter="{'100'}"
        text="{[`Adventures you choose, tales you get lost in.`]}" />
    </h1>
    <div class="walkthrough" bind:this="{walkthroughDiv}" in:fade>
      {#each displayedWalkthrough as { lead, details } (lead + join(details, ''))}
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
  </div>

  <img
    src="/landing.png"
    alt="A dog, a rock creature, and an astronaut cuddle up with a silly human
    pretending to read" />
</section>

{#if displayedWalkthrough.length}
  <nav in:fade>
    {#if displayedWalkthrough.length !== walkthrough.length}
      <Button on:click="{() => walkthroughIndex++}">
        <span>Learn more about the site</span>
      </Button>
    {/if}

    <Button variation="link" on:click="{() => goto('/teaser-story')}">
      <span>Experience a day aboard an intergalactic starship</span>
    </Button>

    <Button variation="link" on:click="{() => goto('/user/new')}">
      <span>Adventure now</span>
    </Button>
  </nav>
{/if}
