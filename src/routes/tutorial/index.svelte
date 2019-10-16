<script>
  import { Tabs, Tab, TabList, TabPanel } from "src/components/Tabs";
  import yaml from 'js-yaml';
  import Button from 'src/components/Button.svelte';
  import Adventure from 'src/components/Adventure/index.svelte';
  import tutorialStory from 'src/lib/local-stories/tutorial-story.js';
  import storyWithConsequences from 'src/lib/local-stories/story-with-consequences.js';
  import Overview from 'src/components/Overview';
  import Tracker from '../experimental/Tracker.svelte';

  let overview;
  let storyNode;
  let selectedStory = storyWithConsequences;

  const update = (e) => {
    overview.update(e)
    storyNode = e.detail.storyNode;
  }

  const tabSelected = (selected) => {
    overview.reset();
    selectedStory = selected;
  }

</script>

<style>
  .tutorial {
    display: flex;
    flex: 1;
  }

  :global(.overview) {
    margin-top: 48px;
  }

  :global(.tabs),
  :global(.overview) {
    flex: 1;
    padding: 0 16px 0 16px;
    margin-left: auto;
  }

  :global(.tab) {
    white-space: nowrap;
  }

  .tutorial :global(.adventure) {
    min-height: 40vh;
  }

  pre {
    border: var(--root-border);
    padding: 0 16px 0 16px;
  }
</style>

<svelte:head>
  <title>example-story</title>
</svelte:head>

<section class="tutorial">
  <Overview bind:this={overview} />

  <Tabs>
    <TabList>
      <Tab
        on:click={() => tabSelected(tutorialStory)}
        name="historyAndConsequences"
      >
        History and Consequences
      </Tab>

      <Tab
        on:click={() => tabSelected(tutorialStory)}
        name="tutorialStory"
      >
        A Simple Story
      </Tab>
    </TabList>

    <TabPanel>
      <Adventure
        story={storyWithConsequences}
        storyNode="start"
        on:pageChange={(e) => update(e)}
      />
    </TabPanel>

    <TabPanel>
      <Adventure
        story={tutorialStory}
        storyNode="start"
        on:pageChange={(e) => update(e)}
      />
    </TabPanel>
  </Tabs>
</section>

<hr/>

<h2>Raw Text</h2>
<pre>
    {yaml.safeDump(selectedStory)}
</pre>
