<script>
  import Trash from "src/components/icons/Trash";
  import EditText from "src/components/icons/EditText.svelte";
  import Input from "src/components/Input/index";

  export let storyNode = "";
  export let onInput = () => {};
  export let onKeydown = () => {};
  export let onDelete = () => {};
</script>

<style>
  .story-node {
    display: flex;
    flex-flow: row;
    align-items: center;
    margin-bottom: 16px;
  }

  .story-node :global(svg) {
    fill: black;
    margin-right: 16px;
  }

  .story-node :global(svg:hover) {
    cursor: pointer;
  }

  .story-node :global(.input),
  .story-node :global(label) {
    margin: 0;
  }
</style>

<div class="story-node">
  {#if storyNode === 'start'}
    <Input
      value="{storyNode}"
      placeholder="Name of story node"
      disabled={true}
      on:keydown="{e => onKeydown(e, {
          location: 'storyNode',
          prevValue: storyNode
        })}"
      on:input="{e => onInput(e, {
          location: 'storyNode',
          prevValue: storyNode
        })}"
    />
  {/if}
  {#if storyNode !== 'start'}
    <Trash on:click="{onDelete}">
      Delete
    </Trash>
    <Input
      value="{storyNode}"
      placeholder="Name of story node"
      on:keydown="{e => onKeydown(e, {
          location: 'storyNode',
          prevValue: storyNode
        })}"
      on:input="{e => onInput(e, {
          location: 'storyNode',
          prevValue: storyNode
        })}"
    />
  {/if}
</div>
