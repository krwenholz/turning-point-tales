<script>
  import Editor from 'src/components/Editor';
  import { editorBackup } from 'src/lib/global-state-stores/browserStore/editor-backup.js'

  let backup = editorBackup();
  let story = $backup;
</script>

<Editor
  {story}
  onEdit={editedStory => $backup = editedStory}
/>