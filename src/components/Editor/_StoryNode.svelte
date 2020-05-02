<script>
  import Trash from "src/components/icons/Trash";
  import EditText from "src/components/icons/EditText.svelte";
  import Input from "src/components/Input/index";

  export let storyNode = "";
  export let onDelete = () => {};
  export let onEditStoryNode = () => {};

  const onKeydown = e => {
    const isInvalidKeystroke = e.key.match(/[-'\s"]/);

    if (isInvalidKeystroke) {
      e.preventDefault();
      return false;
    }
  }
</script>

<style>
  .story-node {
    display: flex;
    flex-flow: row;
    align-items: center;
    margin-bottom: 16px;
  }

  .story-node label {
    margin-right: 16px;
  }

  .story-node :global(svg) {
    fill: black;
    margin-left: 16px;
  }

  .story-node :global(svg:hover) {
    cursor: pointer;
  }
</style>

<div class="story-node">
  <label>Current StoryNode: </label>
  {#if storyNode === 'start'}
    <Input
      value="{storyNode}"
      placeholder="Name of story node"
      disabled={true}
    />
  {/if}
  {#if storyNode !== 'start'}
    <Input
      value="{storyNode}"
      placeholder="Name of story node"
      on:keydown={onKeydown}
      onBlur={onEditStoryNode}
    />
    <Trash on:click="{onDelete}">
      Delete
    </Trash>
  {/if}
</div>
