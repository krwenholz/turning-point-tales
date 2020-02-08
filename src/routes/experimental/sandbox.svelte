<script>
  import { stores } from "@sapper/app";
  import Editor from 'src/components/Editor';

  const story = {
    start: {
      text: ["what"],
      decisions: [
        {
          storyNode: 'placeholder',
          label: 'storyNode'
        }
      ]
    }
  }
</script>


<Editor {story} />
