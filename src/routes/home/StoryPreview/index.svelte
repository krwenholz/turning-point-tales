<script>
  import Preview from "./Preview.svelte";
  import { goto } from "@sapper/app";
  import { slug } from "src/lib/slugs";

  export let stories = [];
  export let isSubscriber;
</script>

<style>
  .story-previews {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
    grid-gap: 32px;
  }
</style>

<section class="story-previews">
  {#each stories as { id, author, title, badges, preview, tags, general_release }}
    <Preview
      id="{slug(title, id)}"
      {author}
      {title}
      {badges}
      {preview}
      {tags}
      generalRelease="{general_release}"
      {isSubscriber}
    />
  {/each}
</section>
