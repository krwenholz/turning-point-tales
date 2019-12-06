<script>
  import Button from "../components/Button.svelte";
  import TypeText from "../components/TypeText.svelte";
  import { fade } from "../lib/Transition";
  import { goto } from "@sapper/app";

  let typingEnd = false;
  let typer;
</script>

<style>
  .landing {
    width: 100%;
    display: flex;
    flex: 1 1;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    align-self: center;
  }

  .text {
    display: flex;
    flex-flow: column;
    align-self: flex-start;
    margin-bottom: 64px;
  }

  .prompt,
  .details {
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

    .prompt :global(p) {
      font-size: 16px;
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

<section class="landing" on:click="{() => typer.skipTyping()}">
  <div class="text">
    <h1>
      <TypeText
        bind:this="{typer}"
        on:end="{() => (typingEnd = true)}"
        typingSpeed="{5}"
        jitter="{'100'}"
        text="{[`Adventures you choose, tales you get lost in.`]}" />
    </h1>
    {#if typingEnd}
      <div class="details" in:fade>
        <p>
          Turning Point Tales lets your choices determine where the story goes.
          We find new adventures from excellent, often unknown, authors and
          bring them to you in this unique format. Your first choice is
          below....
        </p>
        <p data-cy="landing-text-scroll" class="prompt" in:fade>
          On an intergalatic starship, traveling at half the speed of light, one
          man sat bored to death in his stuffy office.
        </p>
      </div>
    {/if}
  </div>

  <img
    src="/landing.png"
    alt="A dog, a rock creature, and an astronaut cuddle up with a silly human
    pretending to read" />
</section>

{#if typingEnd}
  <nav in:fade>
    <Button on:click="{() => goto('/teaser-story')}">
      <span>A day in the life of Mr. Banks</span>
    </Button>

    <Button variation='link' on:click="{redirect('/teaser-story', 'hooked')}">
      <span>Join the adventure</span>
    </Button>
  </nav>
{/if}
