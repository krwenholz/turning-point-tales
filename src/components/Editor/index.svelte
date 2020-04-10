<script>
  import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'
  import FuzzySelect from 'src/components/FuzzySelect';
  import { keys, omit, get, reduce } from 'lodash';
  import yaml from "js-yaml";
  import { assoc, update } from "lodash/fp";
  import Adventure from "src/components/Adventure/index";
  import Overview from "src/components/Overview/index";
  import Graph from './_graph/index';
  import { isValidStory } from 'src/components/Adventure/validation';
  import Button from 'src/components/Button.svelte';
  import { Tabs, Tab, TabList, TabPanel } from "src/components/Tabs";
  import { renameKey, dropIdx } from 'src/lib/utilities.js'
  import { saveFile, loadFile } from 'src/lib/load-and-save-files.js';
  import { safeWindow } from 'src/lib/client/safe-window.js';
  import WritingPane from './_WritingPane.svelte';
  import Decisions from './_Decisions.svelte';
  import StoryNode from './_StoryNode.svelte';
  import { toSyntaxErrorMessage, getCorrections } from './_Corrections/_formatting.js';
  import { normalizeToPackagedStory } from './normalizeToPackagedStory.js';

  export let storyNode = 'start';
  export let story = {};
  export let title = '';
  export let author = '';
  export let preview = '';
  export let badges = [];
  export let onEdit = () => {};

  let fuzzySelectRef = null;
  let history = [];
  let consequences = [];
  let syntaxError = '';

  $: badgeLookup = reduce(badges, (lookup, badge) => ({
    ...lookup,
    [badge.node]: {
      text: badge.text,
      icon: badge.icon,
    }
  }), {});

  $: storyIsValid = process.browser && isValidStory(story);

  $: corrections = process.browser && getCorrections(story) || [];

  $: items = keys(story).map(key => ({
    value: key,
    label: key
  }));

  const updateOverview = e => {
    storyNode = e.detail.storyNode;
    history = e.detail.history;
    consequences = e.detail.consequences;
  };

  const resetOverview = () => {
    storyNode = 'start';
    history = [];
    consequences = [];
  };

  const toBadgeArray = () => keys(badgeLookup).map(storyNode => ({
    node: storyNode,
    text: badgeLookup[storyNode].text,
    icon: badgeLookup[storyNode].icon
  }));

  const loadStoryFile = () => loadFile(data => {
    try {
      const file = normalizeToPackagedStory(yaml.load(data));
      console.log(JSON.stringify(file.badges, null, 2));
      story = file.story;
      author = file.author;
      title = file.title;
      badges = file.badges;
      preview = file.preview;

      notifier.success("Story loaded", 1500);
      syntaxError = '';
    } catch(error){
      syntaxError = toSyntaxErrorMessage(error, data);
    }
  });

  const saveStoryFile = () => {
    saveFile({
      fileName: 'edited-story',
      text: yaml.dump(normalizeToPackagedStory({
        story,
        author,
        title,
        preview,
        badges: toBadgeArray(badgeLookup),
      })),
    });
  }

  const onInput = (e, { idx, prevValue, location, storyId }) => {
    if (prevValue === e.target.value) return;

    const path = {
      title: ['title'],
      author: ['author'],
      preview: ['preview'],
      badgeText: [storyNode, 'text'],
      badgeIcon: [storyNode, 'icon'],
      storyText: [storyNode, "text"],
      decisionLabel: [storyNode, "decisions", idx, "label"],
      decisionStoryNode: [storyNode, "decisions", idx, "storyNode"],
      decisionConsequences: [storyNode, "decisions", idx, "consequences"],
      decisionRequires: [storyNode, "decisions", idx, "requires"],
    }[location];


    if(location.match(/badge/)) {
      badgeLookup = assoc(path, e.target.value, badgeLookup);
    } else if(location.match(/title/)) {
       title = e.target.value;
    } else if(location.match(/author/)) {
       author = e.target.value;
    } else if(location.match(/preview/)) {
       preview = e.target.value;
    } else if (location.match(/decisionConsequences|decisionRequires/)) {
      story = assoc(path, e.target.value.split(/,\s|,|\s/g), story);
    } else if (location.match(/decisionLabel|decisionStoryNode/)) {
      story = assoc(path, e.target.value, story);
    } else {
      story = assoc(path, e.target.value.split("\n\n"), story);
    }

    onEdit({
      story,
      author,
      title,
      preview,
      badges: toBadgeArray(badgeLookup),
    });
  };

  const onEditStoryNode = (e) => {
    story = renameKey(story, storyNode, e.target.value);
    storyNode = e.target.value;

    onEdit({
      story,
      author,
      title,
      preview,
      badges: toBadgeArray(badgeLookup),
    });
  }

  const onKeydown = (e, { location }) => {
    const invalidKeystroke = e.key.match(/[-'\s"]/) && location.match(/decisionStoryNode|storyNode/);

    if (invalidKeystroke) {
      e.preventDefault();
      return false;
    }

    onEdit({
      story,
      author,
      title,
      preview,
      badges: toBadgeArray(badgeLookup),
    });
  };

  const deleteStoryNode = (storyNodeToDelete) => {
    const answer = window.confirm(
      "Are you sure you want to delete this story fragment?\n\n" +
        "This will delete all its text and decisions."
    );

    if (!answer) return;

    story = omit(story, [storyNodeToDelete]);

    storyNode = 'start';
  };

  const onAddNewDecision = path => {
    story = update(
      path,
      decisions => [
        ...decisions,
        {
          label: "",
          storyNode: ""
        }
      ],
      story
    )
  };

  const addNewStoryNode = () => {
    story = assoc(
      "temp",
      {
        text: [""],
        decisions: [
          {
            label: "",
            storyNode: ""
          }
        ]
      },
      story
    );

    storyNode = 'temp'
  };

  const onSetAsFinalNode = ({ checked, storyNode }) => {
    const path = [storyNode];

    if (checked) {
      story = update(
        path,
        prev => ({
          ...prev,
          decisions: [],
          final: true
        }),
        story
      );
    } else {
      story = update(
        path,
        prev => ({
          ...prev,
          final: false,
          decisions: [
            {
              label: "",
              storyNode: ""
            }
          ]
        }),
        story
      );

      badgeLookup = omit(badgeLookup, storyNode);
    }
  };

  const onDeleteDecision = (path, idx) => {
    story = update(
      path,
      decisions => dropIdx(decisions, idx),
      story
    );
  };

  safeWindow().document.addEventListener("keydown", event => {
    // TODO: These can be added to component itself, instead of globally (being lazy)
    if (event.ctrlKey && event.key === "p") {
      fuzzySelectRef.focus();
      event.stopPropagation();
      event.preventDefault();
    }
    if (event.key === "Escape") {
      safeWindow().document.body.click();
    }
    if(event.ctrlKey && event.key === 's') {
      saveFile({ fileName: 'edited-story', text: story });
    }
  });
</script>

<style>
  .editor :global(.tabs) {
    display: flex;
    margin-bottom: 24px;
  }

  .editor :global(.tablist) {
    margin-bottom: 24px;
  }

  .editor :global(.edit-actions button) {
    margin-left: 24px;
  }

  .editor :global(.preview) {
    display: flex;
  }

  nav {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 32px;
  }

  nav :global(.story-node-fuzzy-select) {
    min-width: 300px;
    margin-top: auto;
  }

  .editor :global(.tab-list) {
    margin-bottom: 16px;
  }

  .panes {
    display: flex;
  }

  .panes :global(.tabs) {
    flex: 1;
  }

  .panes :global(.writing-pane) {
    flex: 1.5;
  }

  .preview-text {
    border-bottom: 1px solid gray;
  }

  @media only screen and (min-width: 1150px) {
    .editor {
      flex-flow: row;
    }
  }
</style>

<NotificationDisplay themes="{{ success: 'green' }}" />

<section class="editor">
  <Tabs onTabSwitch={resetOverview} >
    <TabList className="tablist" justification="center">
      <Tab name="edit">Edit</Tab>
      <Tab name="preview">Preview</Tab>
      <Tab name="graph">Graph</Tab>
    </TabList>

    <TabPanel className="edit-actions">
      <nav>
        <FuzzySelect
          {items}
          on:select="{e => (storyNode = e.detail.value)}"
          bind:this={fuzzySelectRef}
          className="story-node-fuzzy-select"
          isClearable="{false}"
          selectedValue="{storyNode}"
        />

        <Button variation='small' on:click={addNewStoryNode} >
          + story node
        </Button>

        <Button variation='secondary' on:click={loadStoryFile} >
          Load from File
        </Button>

        <Button variation='secondary' on:click={saveStoryFile} >
          Download
        </Button>
      </nav>

      <div class="panes">
        <Tabs>
          <TabList justification="left">
            <Tab name="story-node">Story Node</Tab>
            <Tab name="decisions">Decisions</Tab>
          </TabList>
          <TabPanel className='story-node'>
            <StoryNode
              {storyNode}
              {onInput}
              {onKeydown}
              {onEditStoryNode}
              onDelete="{() => deleteStoryNode(storyNode)}"
            />
          </TabPanel>
          <TabPanel className='decisions'>
            <Decisions
              {onKeydown}
              {onInput}
              {onAddNewDecision}
              {onDeleteDecision}
              {storyNode}
              {badgeLookup}
              {onSetAsFinalNode}
              isFinalNode="{get(story, [storyNode, 'final'])}"
              decisions="{get(story, [storyNode, 'decisions'])}"
            />
          </TabPanel>
        </Tabs>
        {#if syntaxError}
          <pre class='error'>
            {syntaxError}
          </pre>
        {:else}
          <WritingPane
            text={get(story, [storyNode, 'text'])}
            storyNode={storyNode}
            {onInput}
            {onKeydown}
            {corrections}
            {title}
            {author}
            {preview}
          />
        {/if}
      </div>
    </TabPanel>

    <TabPanel className="preview">
      <Overview {story} {history} {consequences} {storyNode} />
      <Adventure {story} storyNode="start" on:pageChange="{updateOverview}" />
    </TabPanel>

    <TabPanel>
      {#if storyIsValid}
        <h2 class="preview-text">Preview</h2>
        <Graph {story} />
      {:else}
        <p class="error">current story is invalid</p>
      {/if}
    </TabPanel>
  </Tabs>
</section>
