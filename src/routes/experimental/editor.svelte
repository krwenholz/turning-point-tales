<script>
  import * as sapper from '@sapper/app';
  import Adventure from 'src/components/Adventure';
  import exampleStory from 'src/lib/local-stories/story-with-consequences';
  import yaml from 'js-yaml';
  import { graph, validateStoryNode } from 'src/lib/client/story_graphs.js';
  import Overview from 'src/components/Adventure/Overview.svelte';
  import YamlTracker from 'src/components/Adventure/YamlTracker.svelte';
  import Button from 'src/components/Button.svelte';

  const { page, session } = sapper.stores();

  let simulation;
  let story = exampleStory;
  let storyText = yaml.safeDump(exampleStory);
  let storyNode = $page.query.storyNode;
  let history = [];
  let consequences = [];
  let mode = 'Edit';

  const update = (e) => {
    storyNode = e.detail.storyNode;
    history = e.detail.history;
    consequences = e.detail.consequences;
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

  .toolbox {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    flex: 1;
    max-height: calc(100vh - 25vh);
    margin-right: 32px;
  }

  .toolbox :global(.yaml-tracker),
  .toolbox :global(.overview) {
    flex: 1;
    border: 1px solid var(--root-color-primary-altered);
  }

  .toolbox header {
    display: inline-flex;
    align-items: baseline;
  }

  .toolbox button {
    line-height: 1;
    width: fit-content;
    background: none;
    border: none;
    text-decoration: underline;
    margin-left: 16px;
    color: var(--root-call-to-action);
  }

  .toolbox textarea {
    flex: 1;
    align-items: center;
  }

  .toolbox :global(.yaml-tracker) {
    height: 100px;
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
  <article class="toolbox">
    <header>
      <h2>Toolbox: {mode}</h2>
      <button on:click={() => mode = mode.match('View') ? 'Edit' : 'View'}>switch</button>
    </header>
    {#if mode === 'Edit'}
      <textarea rows="30" bind:value={storyText}></textarea>
      <button class="loader" on:click={load}>Load</button>
    {:else}
      <Overview currentStoryNode={storyNode} {history} {consequences} />
      <YamlTracker story={story} {storyNode} {history} {consequences} />
    {/if}
  </article>

  <aside class='story-preview'>
    <Adventure
      {storyNode}
      {story}
      enableScroll={false}
      title="Self titled adventure: Number One"
      on:pageChange={(e) => update(e)}
    />
  </aside>
</section>

<section>
  <h2>Preview</h2>
  <svg class="story-graph"></svg>
</section>
