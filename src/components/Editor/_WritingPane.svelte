<script>
  import TextArea from 'src/components/TextArea/index';
  import { Tabs, Tab, TabList, TabPanel } from "src/components/Tabs";
  import Feedback from './_Corrections/index.svelte';
  import Circle from 'src/components/icons/Circle.svelte';
  import About from './_About.svelte';

  export let storyNode = '';
  export let title = '';
  export let author = '';
  export let preview = '';
  export let text = [];
  export let corrections = {};
  export let onKeydown = () => {};
  export let onInput = () => {};

  let self = {};
</script>

<style>
  .writing-pane {
    display: flex;
    flex-flow: column;
    flex: 1;
  }

  .writing-pane :global(textarea) {
    margin: 0 0 24px 0;
    font-size: 14px;
    width: 100%;
  }

  .writing-pane :global(.tab-list) {
    margin-bottom: 16px;
  }

  .writing-pane :global(.tab) {
    position: relative;
  }

  .writing-pane :global(svg) {
    position: absolute;
    left: 102%;
    color: var(--root-color-warning);
    opacity: .5;
    width: 10px;
  }
</style>

<div class='writing-pane' bind:this={self}>
  <Tabs>
    <TabList justification="left">
      <Tab name="edit">Edit</Tab>
      <Tab name="about">About</Tab>
      <Tab name="corrections" className='corrections' disabled={!corrections.length}>
        Corrections
        {#if corrections.length}
          <Circle/>
        {/if}
      </Tab>
    </TabList>
    <TabPanel className='edit-actions'>
      <TextArea
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
    </TabPanel>
    <TabPanel className='about'>
      <About
        {onKeydown}
        {onInput}
        {author}
        {title}
        {preview}
      />
    </TabPanel>
    <TabPanel>
      <Feedback {corrections} />
    </TabPanel>
  </Tabs>
</div>
