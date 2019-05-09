<script>
  import Adventure from '../../components/Adventure.svelte';
  import exampleStory from './exampleStory';
</script>

<style>
  .example-story {
    display: flex;
    flex: 1 0 auto;
  }
</style>

<svelte:head>
  <title>example-story</title>
</svelte:head>

<section class="example-story">
  <Adventure
    story={exampleStory}
    storyNode="start"
    title="A gentle introduction"
  />
</section>
