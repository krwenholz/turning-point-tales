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

  const draw = (story) => {
    if(!document.querySelector(".story-editor").open) return;

    if(simulation) simulation.stop();
    simulation = graph(story, "svg.visual-story");
  }

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

    // TODO(kyle): Pretty sure I need to reload the Adventure component or sumting
    story = uncheckedStory;
    draw(story);
  }
</script>

<style>

  .editor {
    display: flex;
  }

  .story-editor {
    min-height: 80vh;
    width: 100ch;
    margin-right: 40px;
  }

  aside {
    width: 100%;
  }

  .visual-story {
    width: 100%;
    min-height: 60vh;
    border: solid;
  }

  .editor :global(.adventure) {
    min-height: 70vh;
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
  :global(svg.visual-story .link) {
    stroke: #999;
    stroke-opacity: .6;
    stroke-width: 1px;
  }

  summary {
    cursor: pointer;
  }
</style>

<svelte:head>
  <title>Editor</title>
</svelte:head>

<p>Time to experiment. Go ahead and mess around with the example story. You can draw out
your decision tree and even experience the whole thing at the bottom of this page.</p>

<section class='editor'>
  <article>
    <h2>Edit your story</h2>
    <textarea class="story-editor" rows="30" bind:value={storyText}></textarea>
    <button class="loader" on:click={load}>Load</button>
  </article>

  <aside>
    <h2>Preview</h2>
    <svg class="visual-story"></svg>
  </aside>
</section>

<section class='experience'>
  <details>
    {#if story && storyNode}
    <summary>Experience your story</summary>
    <Adventure
      {storyNode}
      {story}
      title="Self titled adventure: Number One"
      />
    {/if}
  </details>
</section>
