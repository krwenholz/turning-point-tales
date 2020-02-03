<script>
  import { fade } from "../lib/Transition";
  import Button from "../components/Button.svelte";
  import * as sapper from "@sapper/app";
</script>

<style>
  .briefing {
    width: 100%;
    max-width: 700px;
    flex: 1 0 auto;
    margin: auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  }

  nav {
    display: flex;
    width: 100%;
    flex-flow: column;
    align-items: center;
    margin: 48px auto 0 auto;
  }

  h3 {
    margin-right: auto;
  }

  @media only screen and (min-width: 701px) {
    nav { width: 70%; }
  }
</style>

<svelte:head>
  <title>pre-adventure briefing</title>
</svelte:head>

<section class="briefing">
  <h2>This is for you</h2>
  <p>New stories come out every month, subscribers get first pick!</p>

  <h2>Great stories are just waiting to be found</h2>
  <p>Out stories are original, written by new auhtors we pay, and stamped with the "We really enjoyed this guarantee. The tooling and platform is meant to be enjoyed by everyone</p>

  <h2>Focus on the journey</h2>
  <p> When you finish a story, you’ll get a badge to remember the experience. Some stories take a while, so we save your place as you read (per device). </p>

  <h2>Every choice matters</h2>
  <p> Stories are deep, often twenty minute, experiences. A few choices lead to swift ends. When they do, it’s an end worth reading. But don’t panic! We let you go back after every decision. </p>

  <nav in:fade>
    <Button on:click="{() => sapper.goto('/')}">
      Start reading
    </Button>

    <Button variation='secondary' on:click="{() => sapper.goto('/user/new')}">
      Sign up
    </Button>
  </nav>

</section>
