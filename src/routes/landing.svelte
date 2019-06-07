<script>
  import { fade } from '../lib/Transition';
  import Button from '../components/Button.svelte';
  import TypeText from '../components/TypeText.svelte';

  let typingEnd = false;

  const redirect = (href, storyNode) => () => (
    window.location = `${href}?storyNode=${storyNode}`
  );
</script>

<style>
  .landing {
    width: 100%;
    display: flex;
    flex: 1 1;
    flex-flow: column;
    align-self: center;
  }

  .text {
    display: flex;
    flex-flow: column;
  }

  .prompt {
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    margin-bottom: 64px;
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
    margin-bottom: 16px;
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
      font-size: 48px;
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
    }
  }
</style>

<section class="landing">
  <div class="text">
    <h1>Adventures you choose, tales you get lost in.</h1>
    <div class="prompt" in:fade>
      <TypeText
        on:end={() => typingEnd = true}
        typingSpeed={0}
        jitter={'100'}
        text={[`On an intergalatic starship, traveling at half the speed of light, one man sat bored to death in his stuffy office.`]}
      />
    </div>
  </div>

  <img src="/landing.png" alt="A dog, a rock creature, and an astronaut cuddle up with
  a silly human pretending to read">

  {#if typingEnd}
  <nav in:fade >
    <Button
      on:click={redirect("/teaser-story", "banks")}
      text="A day in the life of Mr. Banks"
    />

    <Button
      text="Becoming a patron"
      on:click={redirect("/teaser-story", "patreon")}
    />
  </nav>
  {/if}
</section>

