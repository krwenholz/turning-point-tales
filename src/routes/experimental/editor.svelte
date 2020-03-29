<script>
  import { editorBackup } from "src/lib/global-state-stores/browserStore/editor-backup.js";
  import Editor from "src/components/Editor/index";

  let story = editorBackup();
</script>

<style>
  :global(html) {
    overflow-y: scroll;
  }
</style>

<svelte:head>
  <title>Editor</title>
</svelte:head>

<Editor story="{$story}" onEdit="{editedStory => ($story = editedStory)}" />

<!--<section class="graph">-->
<!--  {#if storyIsValid}-->
<!--    <h2>Preview</h2>-->
<!--    <Graph {story} />-->
<!--  {:else}-->
<!--    <p class='error'> current story is invalid </p>-->
<!--  {/if}-->
<!--</section>-->
