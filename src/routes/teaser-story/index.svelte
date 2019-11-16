<style>
  .teaser-story {
    width: 100%;
    flex: 1 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  }

  nav {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 auto 0 auto;
  }
</style>

<script>
  import teaserStory from "./teaserStory.js";
  import { fade } from "../../lib/Transition";
  import Adventure from "../../components/Adventure/index.svelte";
  import Patreon from "../../components/icons/Patreon.svelte";
  import Book from "../../components/icons/Book.svelte";
  import Button from "../../components/Button.svelte";
  import * as sapper from "@sapper/app";

  const { page } = sapper.stores();

  let storyNode = $page.query.storyNode;

  const redirect = href => () => sapper.goto(href);
</script>

<svelte:head>
  <title>teaser-story</title>
</svelte:head>

<section class="teaser-story">
  <div>
    <Adventure {storyNode} title="" story="{teaserStory}" />
  </div>

  <nav>
    <Button on:click="{redirect('/user/new')}">
      <span>Start reading!</span>
    </Button>

    <Button on:click="{redirect('/about')}">
      <span>Learn about us</span>
      <Book />
    </Button>
  </nav>
</section>
