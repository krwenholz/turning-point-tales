<script>
  import { editorBackup } from "src/lib/global-state-stores/browserStore/editor-backup.js";
  import Editor from "src/components/Editor/index";
  import { normalizeToPackagedStory } from "src/components/Editor/normalizeToPackagedStory.js";

  let packagedStory = editorBackup();

  const { story, title, author, badges, preview } = normalizeToPackagedStory($packagedStory);

  const save = (editedPackagedStory) => {
    $packagedStory = editedPackagedStory;
  }

  let segment = "WHAT";
</script>

<style>
  :global(.editor) {
    height: 85vh;
  }
</style>

<svelte:head>
  <title>Editor</title>
</svelte:head>

<Editor
  onEdit={save}
  {story}
  {title}
  {author}
  {badges}
  {preview}
/>
