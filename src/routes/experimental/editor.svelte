<script>
  import * as sapper from '@sapper/app';
  import Adventure from 'src/components/Adventure';
  import exampleStory from 'src/lib/local-stories/story-with-consequences';
  import yaml from 'js-yaml';
  import { graph, validateStoryNode } from 'src/lib/client/story_graphs.js';
  import Overview from 'src/components/Adventure/Overview.svelte';
  import YamlTracker from 'src/components/Adventure/YamlTracker.svelte';
  import Button from 'src/components/Button.svelte';
  import Toggle from 'src/components/Form/Toggle.svelte';

  const { page, session } = sapper.stores();

  let simulation;
  let story = exampleStory;
  let storyText = yaml.safeDump(exampleStory);
  let storyNode = $page.query.storyNode;
  let history = [];
  let consequences = [];
  let mode = 'Edit';

  const toggleMode = (e) => {
    mode = e.target.checked ? 'View' : 'Edit';
  }

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
    min-height: 78vh;
    margin-top: 16px;
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
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 4px;
  }

  header :global(.button) {
    margin-left: 16px;
  }

  .current-mode {
    line-height: 1;
    font-size: var(--root-font-size-md);
  }

  header h2 {
    line-height: 10px;
  }

  header nav {
    display: inline-flex;
    margin-left: auto;
  }

  header .toggle-text {
    margin: 0 8px 0 8px;
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
      <h2>Toolbox <span class='current-mode'>{mode} |</span></h2>
      <nav>
        <span class='toggle-text'>Switch</span>
        <Toggle on:input={toggleMode} />
      </nav>
      <Button variation="link" class="loader" on:click={load}>Load</Button>
    </header>
    {#if mode === 'Edit'}
      <textarea rows="30" bind:value={storyText}></textarea>
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
