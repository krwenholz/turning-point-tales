<script>
  import * as sapper from "@sapper/app";
  import { writable } from 'svelte/store';
  import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'
  import Adventure from "src/components/Adventure";
  import Button from "src/components/Button.svelte";
  import Graph from "./_graph";
  import Overview from "src/components/Overview";
  import Toggle from "src/components/Form/Toggle.svelte";
  import YamlTracker from "src/components/Adventure/YamlTracker.svelte";
  import exampleStory from "src/lib/local-stories/story-with-consequences";
  import yaml from "js-yaml";
  import Scrollable from 'src/components/Scrollable.svelte';
  import EditStory from 'src/components/EditStory';
  import { isValidStory } from 'src/components/Adventure/validation';
  import { copyToClipboard } from 'src/lib/copy-to-clipboard';

  let story = exampleStory;
  let storyNode = 'start';
  let history = [];
  let consequences = [];

  $: storyIsValid = isValidStory(story);

  const updateOverview = e => {
    storyNode = e.detail.storyNode;
    history = e.detail.history;
    consequences = e.detail.consequences;
  };

  const updateStory = e => {
    story = e.detail.story;
  }

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

  const  copyStoryToClipboard = async () => {
    copyToClipboard(yaml.safeDump(story));
    notifier.success('Story copied to clipboard', 1500);
  }
</script>

<style>

  .toolbox {
    display: grid;
    grid-gap: 24px;
    margin-bottom: 32px;
    grid-template-columns: auto 1fr 1fr;
    grid-template-rows: minmax(150px, 15%) 1fr 1fr;
    height: 85vh;
    grid-template-areas:
      "options   overview   adventure"
      "edit-story edit-story adventure"
      "edit-story edit-story adventure"
  }

  .toolbox :global(.scrollable-adventure) {
    grid-area: adventure;
    width: 100%;
  }
  .toolbox :global(.scrollable-edit-story) {
    grid-area: edit-story;
  }
  .toolbox :global(.overview) {
    grid-area: overview;
  }
  .toolbox .options {
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

  .graph {
    display: flex;
    flex-flow: column;
    width: 100%;
    border: solid;
  }

  .error {
    margin: auto;
  }

  @media only screen and (min-width: 1150px) {
    .toolbox {
      flex-flow: row;
    }
  }
</style>

<svelte:head>
  <title>Editor</title>
</svelte:head>

<NotificationDisplay themes={{ success: 'green'}} />

<section class="toolbox">
  <section class='options'>
    <Button variation='link' on:click={loadStoryFile}>Load File</Button>
    <Button variation='link' on:click={saveStoryfile}>Download</Button>
    <Button variation='link' on:click={copyStoryToClipboard}>Copy to Clipboard</Button>
  </section>

  <Overview {history} {consequences} />

  <Scrollable className='scrollable-edit-story'>
    <EditStory {story} on:edit={updateStory} />
  </Scrollable>

  <Scrollable className='scrollable-adventure'>
    <h2 slot='heading'>
      <i>Story Preview:</i>
      <span>{storyNode}</span>
    </h2>
    <Adventure
      {storyNode}
      {story}
      title="Self titled adventure: Number One"
      on:pageChange={updateOverview}
    />
  </Scrollable>
</section>

<br>
<br>

<section class="graph">
  {#if storyIsValid}
    <h2>Preview</h2>
    <Graph {story} />
  {:else}
    <p class='error'> current story is invalid </p>
  {/if}
</section>
