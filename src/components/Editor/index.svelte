<script>
  import * as sapper from "@sapper/app";
  import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'
  import Adventure from "src/components/Adventure/index";
  import Overview from "src/components/Overview/index";
  import Graph from './_graph/index';
  import { isValidStory } from 'src/components/Adventure/validation';
  import Select from 'svelte-select';
  import StoryText from './_StoryText.svelte';
  import Decisions from './_Decisions.svelte';
  import StoryNode from './_StoryNode.svelte';
  import Button from 'src/components/Button.svelte';
  import Checkbox from 'src/components/Checkbox/index';
  import { Tabs, Tab, TabList, TabPanel } from "src/components/Tabs";
  import { last, debounce, keys, findIndex, concat, omit, isArray, get } from 'lodash';
  import { pathWrittable } from 'src/lib/path-writtable.js';
  import { saveFile, loadFile } from 'src/lib/load-and-save-files.js';
  import { safeWindow } from 'src/lib/client/safe-window.js';

  export let story = {}
  export let storyNode = 'start';
  export let className ='';
  export let focusPath = '';
  export let onEdit = () => {};
  let selectWrapperRef = null;
  let history = [];
  let consequences = [];
  let inOrderStory = pathWrittable(keys(story).map(storyNode => ({
    storyNode,
    story: story[storyNode],
  })));

  $: storyIsValid = process.browser && isValidStory(story);

  $: items = $inOrderStory.map(({ storyNode }) => ({
    value: storyNode,
    label: storyNode,
  }));

  $: storyIdx = findIndex($inOrderStory, { storyNode });

  const updateStory = editedStory => {
    story = editedStory;
    onEdit(editedStory);
  };

  const updateOverview = e => {
    storyNode = e.detail.storyNode;
    history = e.detail.history;
    consequences = e.detail.consequences;
  };

  const clearFocusPath = () => focusPath = '';

  const loadStoryFile = () => loadFile(data => {
      story = data;
      notifier.success("Story loaded", 1500);
  });

  const saveStoryFile = () => saveFile(story);

  const asStoryDict = (storyArray = []) => storyArray.reduce((story, fragment) => ({
    ...story,
    [fragment.storyNode]: fragment.story,
  }), {});

  const onInput = (e, { idx, prevValue, location, storyId }) => {
    if (prevValue === e.target.value) return;

    const path = {
      storyNode: [storyIdx, 'storyNode'],
      storyText: [storyIdx, 'story', 'text', idx],
      decisionLabel: [storyIdx, 'story', 'decisions', idx, 'label'],
      decisionStoryNode: [storyIdx, 'story', 'decisions', idx, 'storyNode'],
    }[location];

    inOrderStory.setAt(path, e.target.value);

    if(location === 'storyNode') {
      storyNode = e.target.value;
    }

    onEdit(asStoryDict($inOrderStory));
  };

  const onKeydown = (e, { prevValue, location, idx, storyNode, storyIdx }) => {
    const addedNewParagraphByHittingEnter = e.key === 'Enter' && location === 'storyText'

    const deletedParagraphByHittingBackspace = e.key === 'Backspace' && !prevValue && idx !== 0;

    const invalidKeystroke = e.key.match(/[-'\s"]/) && location.match(/decisionStoryNode|storyNode/);

    if(invalidKeystroke) {
      e.preventDefault();
      return false;
    }

    if(addedNewParagraphByHittingEnter) {
      inOrderStory.concatAt([storyIdx, 'story', 'text'], '');
      focusPath = [storyIdx, 'story', 'text', idx + 1];
      e.preventDefault();
    }
    else if (deletedParagraphByHittingBackspace) {
      inOrderStory.dropAt([storyIdx, 'story', 'text', idx]);
      focusPath = [storyIdx, 'story', 'text', idx - 1];
      e.preventDefault();
    }

    onEdit(asStoryDict($inOrderStory));
  };

  const deleteStoryNode = (storyIdx) => {
    var answer = window.confirm(
      "Are you sure you want to delete this story fragment?\n\n" +
      "This will delete all its text and decisions."
    );

    if(!answer) return;

    inOrderStory.dropAt([storyIdx]);
    storyNode = last($inOrderStory).storyNode;
  }

  const onAddNewDecision = (path) => inOrderStory.concatAt(path, {
    label: '',
    storyNode: ''
  });

  const addNewStoryNode = () => {
    inOrderStory.concat({
      storyNode: 'temp',
      story: {
        text: [''],
        decisions: [
          {
            label: '',
            storyNode: '',
          }
        ]
      }
    });

    storyNode = 'temp';
  }

  const onSetAsFinalNode = ({ checked, storyIdx}) => {
    const path = [storyIdx, 'story'];

    if(checked) {
      inOrderStory.setAt(path, {
        ...get($inOrderStory, path),
        decisions: [],
        final: true,
      });
    } else {
      inOrderStory.setAt(path, {
        ...omit(get($inOrderStory, path)),
        decisions: [
          {
            label: '',
            storyNode: '',
          }
        ],
        final: false,
      });
    }
  }

  const onDeleteDecision = (path) => inOrderStory.dropAt(path);

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
      <Tab name="overview">Overview</Tab>
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
          variation='small'
          on:click={loadStoryFile}
        >
          Load from File
        </Button>
        <Button
          variation='small'
          on:click={saveStoryFile}
        >
          Download
        </Button>
      </nav>

      <StoryNode
        {storyNode}
        {storyIdx}
        {onInput}
        {onKeydown}
        onDelete={() => deleteStoryNode(storyIdx)}
      />

      <Decisions
        {storyIdx}
        {focusPath}
        {clearFocusPath}
        {onKeydown}
        {onInput}
        {onAddNewDecision}
        {onDeleteDecision}
        {storyNode}
        {onSetAsFinalNode}
        isFinalNode={$inOrderStory[storyIdx].story.final}
        decisions={$inOrderStory[storyIdx].story.decisions}
      />

      <StoryText
        text={$inOrderStory[storyIdx].story.text || []}
        storyNode={storyNode}
        {storyIdx}
        {onInput}
        {onKeydown}
        {focusPath}
        {clearFocusPath}
      />
    </TabPanel>

    <TabPanel className='preview'>
      <Adventure story={story} storyNode="start" />
    </TabPanel>

    <TabPanel className='overview'>
      <Overview
        story={story}
        storyNode="start"
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

