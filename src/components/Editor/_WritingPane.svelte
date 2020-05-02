<script>
  import TextArea from 'src/components/TextArea/index';
  import StoryNode from './_StoryNode.svelte';

  export let storyNode = '';
  export let title = '';
  export let author = '';
  export let preview = '';
  export let text = [];
  export let corrections = {};
  export let onKeydown = () => {};
  export let onInput = () => {};
  export let onEditStoryNode = () => {};
  export let deleteStoryNode = () => {};

  let self = {};
</script>

<StoryNode
  {storyNode}
  {oninput}
  {onkeydown}
  {onEditStoryNode}
  onDelete="{() => deleteStoryNode(storyNode)}"
/>

<TextArea
  className='textarea-for-story'
  value={text.join("\n\n")}
  placeholder="Once upon a time.."
  bind:this={self}
  on:input={ e => onInput(e, {
    storyNode,
    location: 'storyText',
    prevValue: text,
  })}
  on:keydown={ e => onKeydown(e, {
    storyNode,
    location: 'storyText',
    prevValue: text,
  })}
/>
