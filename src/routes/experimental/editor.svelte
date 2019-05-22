<script>
  import * as sapper from '@sapper/app';
  import Adventure from '../../components/Adventure.svelte';
  import exampleStory from '../example-story/exampleStory.js';
  import yaml from 'js-yaml';
  import { graph, validateStoryNode } from '../../lib/story_graphs.js';

  const { page, session } = sapper.stores();

  let simulation;
  let story = exampleStory;
  let storyText = yaml.safeDump(exampleStory);
  let storyNode = typeof($page.query.storyNode) === 'undefined' ? 'start' : $page.query.storyNode;

  const load = () => {
    let uncheckedStory;
    try {
      uncheckedStory = yaml.safeLoad(storyText)
      uncheckedStory["start"] = uncheckedStory["start"] || null;
      for(const nodeKey in uncheckedStory) {
        validateStoryNode(nodeKey, uncheckedStory[nodeKey]);
      }
    } catch(error) {
      alert(error);
      return;
    }

    story = uncheckedStory;
    if(simulation) simulation.stop();
    simulation = graph(story, "svg.story-graph");
  }
</script>

<style>

  .workbench {
    display: flex;
    flex-flow: column;
    min-height: 80vh;
  }

  .story-editor {
    display: flex;
    flex-flow: column;
    flex: 1;
    justify-content: space-between;
  }

  .story-editor textarea {
    flex: 1;
  }

  .story-preview {
    flex: 1;
  }

  .story-graph {
    width: 100%;
    min-height: 80vh;
    border: solid;
  }

  .loader {
    max-width: 10rem;
    display: block;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    font-size: 14px;
  }

  /* Need a nasty global here because it's unused until later and we don't want svelte
     stripping it*/
  :global(svg.story-graph .link) {
    stroke: #999;
    stroke-opacity: .6;
    stroke-width: 1px;
  }

  @media only screen and (min-width: 1150px) {
    .workbench {
      flex-flow: row;
    }
  }
</style>

<svelte:head>
  <title>Editor</title>
</svelte:head>

<p>Time to experiment. Go ahead and mess around with the example story. You can draw out
your decision tree and even experience the whole thing at the bottom of this page.</p>

<section class='workbench'>
  <article class="story-editor">
    <h2 on:click={ e => console.log(e) }>Edit your story</h2>
    <textarea rows="30" bind:value={storyText}></textarea>
    <button class="loader" on:click={load}>Load</button>
  </article>

  <aside class='story-preview'>
    <Adventure
      {storyNode}
      {story}
      enableScroll={false}
      title="Self titled adventure: Number One"
    />
  </aside>
</section>

{#if story && storyNode}
<section>
  <h2>Preview</h2>
  <svg class="story-graph"></svg>
</section>
{/if}
