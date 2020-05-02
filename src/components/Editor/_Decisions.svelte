<script>
  import TextArea from "src/components/TextArea/index";
  import Plus from "src/components/icons/Plus.svelte";
  import Button from "src/components/Button.svelte";
  import Input from "src/components/Input/index";
  import Trash from "src/components/icons/Trash.svelte";
  import Checkbox from "src/components/Checkbox";
  import FuzzySelect from 'src/components/FuzzySelect';
  import emojis from 'src/lib/emojis.json';
  import { find } from 'lodash';

  export let decisionsWithInvalidLabels = [];
  export let decisionsWithInvalidStoryNodes = [];
  export let onKeydown = () => {};
  export let onInput = () => {};
  export let onAddNewDecision = () => {};
  export let onDeleteDecision = () => {};
  export let onSetAsFinalNode = () => {};
  export let storyNode = "";
  export let decisions = [];
  export let isFinalNode = false;
  export let badgeLookup = {};

  let fuzzySelectRef = {};

  $: emojiChoices = emojis.map(meta => ({
    value: meta.emoji,
    label: `${meta.emoji} ${meta.description}`,
  }));

  $: badge = badgeLookup[storyNode] || {};

  const updateBadge = (e, { prevValue, storyNode, location }) => onInput(
    {
      target: {
        value: e.detail.value
      }
    },
    {
      storyNode,
      location,
      prevValue,
    }
  );
</script>

<style>
  .decisions {
    margin-right: 32px;
    height: 100%;
    overflow-y: scroll;
    padding-right: 16px;
  }

  .decisions :global(.text-area) {
    margin-bottom: 8px;
  }

  .decision {
    display: flex;
  }

  .decision:not(:last-of-type) {
    margin-bottom: 42px;
  }

  .decision :global(.delete-decision) {
    margin-right: 32px;
  }

  .decisions :global(svg:hover) {
    cursor: pointer;
  }

  ul {
    width: 100%;
  }

  header {
    display: flex;
    margin-bottom: 24px;
  }

  .decisions :global(.add-new-decision) {
    margin-left: 0px;
  }

  header :global(svg) {
    margin-right: 8px;
  }

  .label :global(svg) {
    margin-left: 16px;
    width: 32px;
    height: 32px;
  }

  .form-group {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    position: relative;
    margin-top: 24px;
  }

  .form-group label {
    margin-bottom: 6px;
  }

  .form-group :global(.input) {
    width: 100%;
  }

  .set-final-node {
    display: flex;
    margin-top: 24px;
  }

  .set-final-node label {
    margin-left: 24px;
  }
</style>

<section class="decisions">
  {#if !isFinalNode}
    <Button
      className="add-new-decision"
      variation="link"
      on:click="{() => onAddNewDecision([storyNode, 'decisions'])}"
    >
      <Plus />
      add new decision
    </Button>
  {/if}

  {#if isFinalNode}
  <ul class='badges'>
    <li class="form-group">
      <label>Badge Text</label>
      <Input
        value="{badge.text}"
        placeholder="You did the thign"
        on:input="{e => onInput(e, {
          storyNode,
          location: 'badgeText',
          prevValue: badge.text
        })}"
        on:keydown="{e => onKeydown(e, {
          storyNode,
          location: 'badgeText',
          prevValue: badge.text
        })}"
      />
    </li>
    <li class='form-group'>
      <label>Badge Icon</label>
      <FuzzySelect
        items={emojiChoices}
        on:select={e => updateBadge(e, {
          storyNode,
          location: 'badgeIcon',
          prevValue: badge.icon || '',
        })}
        bind:this={fuzzySelectRef}
        className="badge-fuzzy-select"
        isClearable="{false}"
        selectedValue={badge.icon}
      />
    </li>
  </ul>
  {/if}

  {#if decisions.length}
    {#each decisions as decision, idx}
      <div class="decision">
        <Trash
          className="{'delete-decision'}"
          on:click="{() => onDeleteDecision([storyNode, 'decisions'], idx)}"
        >
          Delete
        </Trash>
        <ul>
          <li class="form-group">
            <label>Button label</label>
            <Input
              value="{decision.label}"
              placeholder="button text"
              on:input="{e => onInput(e, {
                  idx,
                  storyNode,
                  location: 'decisionLabel',
                  prevValue: decision.label
                })}"
              on:keydown="{e => onKeydown(e, {
                  idx,
                  storyNode,
                  location: 'decisionLabel',
                  prevValue: decision.label
                })}"
            />
          </li>

          <li class="form-group">
            <label>Goes to StoryNode</label>
            <Input
              value="{decision.storyNode}"
              placeholder="Name of story node"
              on:input="{e => onInput(e, {
                  idx,
                  storyNode,
                  location: 'decisionStoryNode',
                  prevValue: decision.storyNode
                })}"
              on:keydown="{e => onKeydown(e, {
                  idx,
                  storyNode,
                  location: 'decisionStoryNode',
                  prevValue: decision.storyNode
                })}"
            />
          </li>

          <li class="form-group">
            <label>Consequences (optional)</label>
            <Input
              value="{decision.consequences || ''}"
              placeholder="example: tired, angry"
              on:input="{e => onInput(e, {
                  idx,
                  storyNode,
                  location: 'decisionConsequences',
                  prevValue: decision.consequences
                })}"
              on:keydown="{e => onKeydown(e, {
                  idx,
                  storyNode,
                  location: 'decisionConsequences',
                  prevValue: decision.consequences
                })}"
            />
          </li>

          <li class="form-group">
            <label>Requires (optional)</label>
            <Input
              value="{decision.requires || ''}"
              placeholder="example: tired"
              on:input="{e => onInput(e, {
                  idx,
                  storyNode,
                  location: 'decisionRequires',
                  prevValue: decision.requires
                })}"
              on:keydown="{e => onKeydown(e, {
                  idx,
                  storyNode,
                  location: 'decisionRequires',
                  prevValue: decision.requires
                })}"
            />
          </li>
        </ul>
      </div>
    {/each}
  {/if}

  {#if storyNode !== 'start'}
  <div class='set-final-node'>
    <Checkbox
      checked={isFinalNode}
      id="disable-decisions"
      on:click={e => onSetAsFinalNode({ checked: e.target.checked, storyNode })}
    />
    <label for="disable-decisions">
      Disable Decisions (make this a dead-end)
    </label>
  </div>
  {/if}
</section>
