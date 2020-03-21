<script>
  import * as sapper from "@sapper/app";
  import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'
  import Select from 'svelte-select';
  import { dropRight, debounce, keys, findIndex, concat, omit, get } from 'lodash';
  import yaml from "js-yaml";
  import { assoc, update } from 'lodash/fp';
  import Adventure from "src/components/Adventure/index";
  import Overview from "src/components/Overview/index";
  import Graph from './_graph/index';
  import { isValidStory } from 'src/components/Adventure/validation';
  import Button from 'src/components/Button.svelte';
  import Checkbox from 'src/components/Checkbox/index';
  import { Tabs, Tab, TabList, TabPanel } from "src/components/Tabs";
  import { renameKey, dropIdx } from 'src/lib/utilities.js'
  import { saveFile, loadFile } from 'src/lib/load-and-save-files.js';
  import { safeWindow } from 'src/lib/client/safe-window.js';
  import { PARAGRAPH_DELIMITER } from './_constants.js';
  import StoryText from './_StoryText.svelte';
  import Decisions from './_Decisions.svelte';
  import StoryNode from './_StoryNode.svelte';
  import Feedback from './_Feedback.svelte';
  import { toMessage } from './_syntax-error.js';

  export let story = {}
  export let storyNode = 'start';
  export let className ='';
  export let focusPath = []
  export let onEdit = () => {};

  let selectWrapperRef = null;
  let history = [];
  let consequences = [];
  let errors = [];

  $: storyIsValid = process.browser && isValidStory(story);

  $: items = keys(story).map(key => ({
    value: key,
    label: key,
  }));

  const updateStory = editedStory => {
    story = editedStory;
    onEdit(editedStory);
  };

  const updateOverview = e => {
    storyNode = e.detail.storyNode;
    history = e.detail.history;
    consequences = e.detail.consequences;
  };

  const clearFocusPath = () => focusPath = [];

  const clearFeedback = () => errors = [];

  const loadStoryFile = () => loadFile(data => {
    try {
      story = yaml.load(data)
      notifier.success("Story loaded", 1500);
      clearFeedback();
    } catch(error){
      errors = [
        {
          message: toMessage(error, data)
        }
      ];
    }
  });

  const saveStoryFile = () => saveFile('edited-story.yaml', yaml.safeDump(story));

  const onInput = (e, { idx, prevValue, location, storyId }) => {
    if (prevValue === e.target.value) return;

    const path = {
      storyText: [storyNode, 'text'],
      decisionLabel: [storyNode, 'decisions', idx, 'label'],
      decisionStoryNode: [storyNode, 'decisions', idx, 'storyNode'],
      decisionConsequences: [storyNode, 'decisions', idx, 'consequences'],
      decisionRequires: [storyNode, 'decisions', idx, 'requires'],
    }[location];

    if(location === 'storyNode') {
      story = renameKey(story, storyNode, e.target.value);
      storyNode = e.target.value;
    } else if (location.match(/decisionConsequences|decisionRequires/)) {
      story = assoc(path, e.target.value.split(/,\s|,|\s/g), story);
    } else {
      story = assoc(path, e.target.value.split(PARAGRAPH_DELIMITER), story);
    }

    onEdit(story);
  };

  const onKeydown = (e, { prevValue, location, idx, storyNode }) => {
    const invalidKeystroke = e.key.match(/[-'\s"]/) && location.match(/decisionStoryNode|storyNode/);

    if(invalidKeystroke) {
      e.preventDefault();
      return false;
    }

    onEdit(story);
  };

  const deleteStoryNode = (storyNodeToDelete) => {
    var answer = window.confirm(
      "Are you sure you want to delete this story fragment?\n\n" +
      "This will delete all its text and decisions."
    );

    if(!answer) return;

    story = omit(story, [storyNodeToDelete]);

    storyNode = 'start';
  }

  const onAddNewDecision = (path) => {
    story = update(path, decisions => [
      ...decisions,
      {
        label: '',
        storyNode: '',
      }
    ],
      story
    )
  }

  const addNewStoryNode = () => {
    story = assoc(
    'temp',
      {
        text: [''],
        decisions: [
          {
            label: '',
            storyNode: '',
          }
        ]
      },
      story
    );

    storyNode = 'temp'
  }

  const onSetAsFinalNode = ({ checked, storyNode }) => {
    const path = [storyNode];

    if(checked) {
      story = update(
        path,
        prev => ({
          ...prev,
          decisions: [],
          final: true,
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
              label: '',
              storyNode: '',
            }
          ],
        }),
        story
      );
    }
  }

  const onDeleteDecision = (path, idx) => {
    story = update(
      path,
      decisions => dropIdx(decisions, idx),
      story
    );
  }

  safeWindow().document.addEventListener("keydown", (event) => {
  //TODO: These can be added to component itself, instead of globally (being lazy)
    if(event.ctrlKey && event.key === "p") {
      selectWrapperRef.querySelector('input').focus();
      event.stopPropagation();
      event.preventDefault();
    }
    if(event.key === 'Escape') {
      safeWindow().document.body.click();
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

  .editor nav {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 32px;
  }

  .editor .select-wrapper {
    /* without this, <Select> hides all text when text is typed in the input */
    min-width: 130px;
  }

  .editor :global(.edit-actions button) {
    margin-left: 24px;
  }

  .editor :global(.preview) {
    display: flex;
  }

  .editor .decisions-and-feedback {
    display: flex;
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
  <Tabs>
    <TabList className='tablist' justification="center">
      <Tab name="edit">Edit</Tab>
      <Tab name="preview">Preview</Tab>
      <Tab name="graph">Graph</Tab>
    </TabList>

    <TabPanel className='edit-actions'>
      <nav>
        <div class='select-wrapper' bind:this={selectWrapperRef}>
          <Select
            {items}
            className='story-node-select'
            on:select={e => storyNode = e.detail.value}
            isClearable={false}
            selectedValue={storyNode}
          />
        </div>
        <Button
          variation='small'
          on:click={addNewStoryNode}
        >
          + story node
        </Button>

        <Button
          variation='secondary'
          on:click={loadStoryFile}
        >
          Load from File
        </Button>

        <Button
          variation='secondary'
          on:click={saveStoryFile}
        >
          Download
        </Button>
     </nav>

      <StoryNode
        {storyNode}
        {onInput}
        {onKeydown}
        onDelete={() => deleteStoryNode(storyNode)}
      />

      <div class="decisions-and-feedback">
        <Decisions
          {focusPath}
          {clearFocusPath}
          {onKeydown}
          {onInput}
          {onAddNewDecision}
          {onDeleteDecision}
          {storyNode}
          {onSetAsFinalNode}
          isFinalNode={get(story, [storyNode, 'final'])}
          decisions={get(story, [storyNode, 'decisions'])}
        />

        <Feedback {errors} />
      </div>


      <StoryText
        text={get(story, [storyNode, 'text'])}
        storyNode={storyNode}
        {onInput}
        {onKeydown}
        {focusPath}
        {clearFocusPath}
      />
    </TabPanel>

    <TabPanel className='preview'>
      <Overview
        story={story}
        history={history}
        consequences={consequences}
        storyNode={storyNode}
      />
      <Adventure
        story={story}
        storyNode="start"
        on:pageChange={updateOverview}
      />
    </TabPanel>

    <TabPanel>
      {#if storyIsValid}
        <h2>Preview</h2>
        <Graph {story} />
      {:else}
        <p class='error'> current story is invalid </p>
      {/if}
    </TabPanel>
  </Tabs>
</section>

