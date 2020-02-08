<script>
  import * as sapper from "@sapper/app";
  import { editorBackup } from 'src/lib/global-state-stores/browserStore/editor-backup.js'
  import { get, writable } from 'svelte/store';
  import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'
  import {debounce} from 'lodash';
  import Adventure from "src/components/Adventure/index";
  import Button from "src/components/Button.svelte";
  import Overview from "src/components/Overview/index";
  import yaml from "js-yaml";
  import Scrollable from 'src/components/Scrollable.svelte';
  import WritingPane from './_WritingPane.svelte';
  import Graph from './_graph/index';
  import { isValidStory } from 'src/components/Adventure/validation';
  import { copyToClipboard } from 'src/lib/copy-to-clipboard';

  export let story = {}
  export let onEdit = () => {};
  let storyNode = 'start';
  let history = [];
  let consequences = [];

  $: storyIsValid = process.browser && isValidStory(story);

  const updateStory = debounce(e => {
    story = e.detail.story;
    onEdit(story);
  }, 500);

  const updateOverview = e => {
    debugger;
    storyNode = e.detail.storyNode;
    history = e.detail.history;
    consequences = e.detail.consequences;
  };

  const loadStoryFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.click();

    input.onchange = (onChangeEvent) => {
      const reader = new FileReader();

      reader.onload = (onLoadEvent) => {
        try {
          story = yaml.safeLoad(onLoadEvent.target.result);
          notifier.success('Story loaded successfully', 1500);
        } catch(error) {
          notifier.error('Story copied to clipboard', 1500);
          console.error(errr);
        }
      }

      reader.readAsText(onChangeEvent.target.files[0]);
    }
  }

  const saveStoryfile = () => {
    const storyBlob = new Blob([yaml.safeDump(story)], {type : 'text/plain'});
    const url = URL.createObjectURL(storyBlob);

    const a = document.createElement("a");
    a.href = url;
    a.download = 'edited-story.yaml';
    a.click();

    window.URL.revokeObjectURL(url);
  };
</script>

<style>

  .editor {
    display: grid;
    grid-gap: 48px;
    margin-bottom: 32px;
    grid-template-columns: auto 1fr 1fr;
    grid-template-rows: minmax(150px, 15%) 1fr 1fr;
    height: 85vh;
    grid-template-areas:
      "options    overview   adventure"
      "edit-story edit-story adventure"
      "edit-story edit-story adventure"
  }

  .editor :global(.scrollable-adventure) {
    grid-area: adventure;
    width: 100%;
    padding-bottom: 8px;
  }
  .editor :global(.scrollable-edit-story) {
    grid-area: edit-story;
    max-height: 100%;
  }
  .editor :global(.overview) {
    grid-area: overview;
  }
  .editor .options {
    grid-area: options;
    display: flex;
    flex-flow: column;
  }
  .options :global(.button) {
    margin-bottom: 8px;
  }

  .options :global(.button) {
    margin-right: 20px;
  }

  h2 {
    border-bottom: 1px solid gray;
  }

  @media only screen and (min-width: 1150px) {
    .editor {
      flex-flow: row;
    }
  }
</style>

<NotificationDisplay themes={{ success: 'green'}} />

<section class="editor">
  <section class='options'>
    <Button variation='link' on:click={loadStoryFile}>Load File</Button>
    <Button variation='link' on:click={saveStoryfile}>Download</Button>
  </section>

  <Overview {history} {consequences} />

  <WritingPane
    {story}
    className='scrollable-edit-story'
    on:edit={updateStory}
  />

  <Scrollable className='scrollable-adventure'>
    <h2 slot='heading'>
      <i>Story Preview:</i>
      <span>{storyNode}</span>
    </h2>
    <Adventure
      {storyNode}
      story={story}
      title="Self titled adventure: Number One"
      on:pageChange={updateOverview}
    />
  </Scrollable>
</section>
<br>
<br>

<!--<section class="graph">-->
<!--  {#if storyIsValid}-->
<!--    <h2>Preview</h2>-->
<!--    <Graph {story} />-->
<!--  {:else}-->
<!--    <p class='error'> current story is invalid </p>-->
<!--  {/if}-->
<!--</section>-->
