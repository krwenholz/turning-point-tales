<script>
  import Preview from "./_StoryCard.svelte";
  import { goto } from "@sapper/app";
  import { slug } from "src/lib/slugs";
  import { sortBy, filter } from "lodash";

  export let stories = [];

  $: {
    stories = sortBy(stories, story => story.created);
    stories = filter(stories, story => story.general_release).concat(
      filter(stories, story => !story.general_release)
    );
  }
</script>

<style>
  .story-previews {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
    grid-gap: 32px;
    width: 100%;
    justify-content: space-evenly;
  }
</style>

<div class="wrapper">
  <section class="story-previews">
    {#each stories as { id, author, title, badges, preview, tags, content_warnings, general_release }, idx}
      <Preview
        slug="{slug(title, id)}"
        {idx}
        {author}
        {title}
        {badges}
        {preview}
        {tags}
        {content_warnings}
        generalRelease="{general_release}"
      />
    {/each}
  </section>
</div>
