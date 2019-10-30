<script>
  import Preview from 'src/components/StoryPreview/Preview.svelte';
  import { goto } from '@sapper/app';

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
  {#each stories as { id, author, title, content, label, tags, general_release }}
    <Preview
      id={id}
      author={author}
      title={title}
      content={content}
      label={label}
      tags={tags}
      generalRelease={general_release}
      isSubscriber={isSubscriber}
    />
  {/each}
</section>
