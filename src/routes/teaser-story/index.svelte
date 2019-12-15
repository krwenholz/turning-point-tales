<script>
  import teaserStory from "./data.js";
  import { fade } from "../../lib/Transition";
  import Adventure from "../../components/Adventure/index.svelte";
  import Patreon from "../../components/icons/Patreon.svelte";
  import Book from "../../components/icons/Book.svelte";
  import Button from "../../components/Button.svelte";
  import * as sapper from "@sapper/app";

  const { page } = sapper.stores();

  let storyNode = $page.query.storyNode;
  let showNav = false;

  const redirect = href => () => sapper.goto(href);
</script>

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
    margin: auto auto 0 auto;
  }
</style>

<svelte:head>
  <title>teaser-story</title>
</svelte:head>

<section class="teaser-story">
  <Adventure
    title=""
    enableExtraNavigation={false}
    story="{teaserStory}"
    {storyNode}
    on:pageChange={ e => showNav = e.detail.final }
  />

  {#if showNav}
    <nav>
      <Button on:click="{redirect('/user/new')}">
        <span>Create an account!</span>
      </Button>

      <Button variation='link' on:click="{redirect('/about')}">
        <span>Learn about us</span>
      </Button>
    </nav>
  {/if}

</section>
