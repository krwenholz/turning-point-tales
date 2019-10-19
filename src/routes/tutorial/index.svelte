<script>
  import { Tabs, Tab, TabList, TabPanel } from "src/components/Tabs";
  import yaml from 'js-yaml';
  import Button from 'src/components/Button.svelte';
  import Adventure from 'src/components/Adventure/index.svelte';
  import tutorialStory from 'src/lib/local-stories/tutorial-story.js';
  import storyWithConsequences from 'src/lib/local-stories/story-with-consequences.js';
  import Overview from 'src/components/Overview';
  import YamlTracker from './YamlTracker.svelte';

  let overview;
  let storyNode;
  let history;
  let consequences;
  let selectedStory = storyWithConsequences;

  const update = (e) => {
    storyNode = e.detail.storyNode;
    history = e.detail.history;
    consequences = e.detail.consequences;
  }

  const tabSelected = (selected) => {
    history = [{ storyNode: 'start' }];
    consequences = [];
    storyNode = 'start';
    selectedStory = selected;
  }

</script>

<style>
  .tutorial {
    display: flex;
    flex: 1;
  }

  .helpers {
    display: flex;
    flex-flow: column;
    max-height: 80vh;
    width: 50%;
    margin-right: 32px;
  }

  .helpers > :global(*) {
    resize: vertical;
    overflow-y: scroll;
    border: 1px solid var(--root-color-primary-altered);
    border-radius: 2px;
    padding: 12px;
  }

  .resize {
    resize: both;
    overflow: scroll;
  }

  .tutorial :global(.overview) {
    height: 30%;
    margin-bottom: 32px;
  }

  .tutorial :global(.yaml-tracker) { height: 70%; }

  .tutorial > :global(.tabs) {
    margin: 0 auto 0 auto;
    width: 70%;
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
  <section class='helpers'>
    <Overview currentStoryNode={storyNode} {history} {consequences} />
    <YamlTracker story={selectedStory} {storyNode} {history} {consequences} />
  </section>

  <Tabs>
    <TabList>
      <Tab
        on:click={() => tabSelected(storyWithConsequences)}
        name="storyWithConsequences"
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
