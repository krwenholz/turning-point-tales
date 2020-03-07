<script>
  import TextArea from 'src/components/TextArea/index';
  import Plus from 'src/components/icons/Plus.svelte';
  import Button from 'src/components/Button.svelte';
  import Input from 'src/components/Input/index';
  import Trash from 'src/components/icons/Trash.svelte';
  import Checkbox from 'src/components/Checkbox';

  export let focusPath = '';
  export let clearFocusPath = () => {};
  export let onKeydown = () => {};
  export let onInput = () => {};
  export let onAddNewDecision = () => {};
  export let onDeleteDecision = () => {};
  export let onSetAsFinalNode = () => {};
  export let storyNode = '';
  export let decisions = [];
  export let isFinalNode = false;
</script>

<style>
  .decisions { margin-bottom: 48px; }

  .decision {
    display: flex;
  }

  .decision :global(.delete-decision) {
    margin-right: 32px;
  }

  .decisions :global(.text-area) {
    margin-bottom: 8px;
  }

  .decision:not(:last-of-type) {
    margin-bottom: 32px;
  }

  .decisions :global(svg:hover) {
    cursor: pointer;
  }

  .label-and-story-node {
    flex: 1;
  }

  .label,
  .story-node {
    display: flex;
    flex-flow: row;
    align-items: center;
    position: relative;
  }

  header {
    display: flex;
    margin: 24px 0 24px 0;
  }

  header :global(button) {
    margin-left: 8px;
  }

  header :global(svg) {
    margin-right: 8px;
  }

  .label span,
  .story-node span {
    width: 30%;
    max-width: 130px;
    margin-bottom: 12px;
  }

  .label :global(svg) {
    margin-left: 16px;
    width: 32px;
    height: 32px;
  }

  nav {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .form-group {
    display: inline-flex;
  }

  .form-group label {
    display: inline-flex;
    margin-left: 16px;
    display: inline-flex;
    align-items: center;
  }
</style>
<section class="decisions">
  {#if !isFinalNode}
    <header>
      Decisions
      <Button
        variation='link'
        on:click={() => onAddNewDecision([storyNode, 'decisions'])}
      >
        <Plus/>
        add new decision
      </Button>
    </header>
  {/if}

  {#if decisions.length}
  {#each decisions as decision, idx}
    <div class='decision'>
      <Trash
        className={'delete-decision'}
        on:click={() => onDeleteDecision([storyNode, 'decisions'],  idx)}
      >
        Delete
      </Trash>
      <section class='label-and-story-node'>
        <div class="label">
          <span> Label </span>
          <Input
            value={decision.label}
            placeholder="button text"
            on:input={e => onInput(e, {
              idx,
              storyNode,
              location: 'decisionLabel',
              prevValue: decision.label,
            })}

            on:keydown={e => onKeydown(e, {
              idx,
              storyNode,
              location: 'decisionLabel',
              prevValue: decision.label,
            })}
          />
        </div>
        <div class="story-node">
          <span>StoryNode</span>
          <Input
            value={decision.storyNode}
            placeholder="Name of story node"
            on:input={e => onInput(e, {
              idx,
              storyNode,
              location: 'decisionStoryNode',
              prevValue: decision.storyNode,
            })}
            on:keydown={e => onKeydown(e, {
              idx,
              storyNode,
              location: 'decisionStoryNode',
              prevValue: decision.storyNode,
            })}
          />
        </div>
      </section>
    </div>
  {/each}
  {/if}

  {#if storyNode !== 'start'}
  <div class='form-group'>
    <Checkbox
      id="disable-decisions"
      on:click={e => onSetAsFinalNode({ checked: e.target.checked, storyNode })}
    />
    <label for="disable-decisions">
      Disable Decisions (make this a dead-end)
    </label>
  </div>
  {/if}
</section>
