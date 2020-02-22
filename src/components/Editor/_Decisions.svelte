<script>
  import TextArea from 'src/components/TextArea/index';
  import Plus from 'src/components/icons/Plus.svelte';
  import Button from 'src/components/Button.svelte';
  import Input from 'src/components/Input/index';
  import Trash from 'src/components/icons/Trash.svelte';

  export let storyIdx;
  export let focusPath = '';
  export let clearFocusPath = () => {};
  export let onKeydown = () => {};
  export let onInput = () => {};
  export let onAddNewDecision = () => {};
  export let onDeleteDecision = () => {};
  export let storyNode = '';
  export let decisions = [];
  export let isFinalNode = false;
</script>

<style>
  .decision {
    display: flex;
    margin-bottom: 48px;
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
</style>

<section class="decisions">
  {#if !isFinalNode}
  <header>
    Decisions
    <Button
      size='small'
      variation='link'
      on:click={() => onAddNewDecision([storyIdx, 'story', 'decisions' ])}
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
        on:click={() => onDeleteDecision([storyIdx, 'story', 'decisions', idx])}
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
              storyIdx,
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
              storyIdx,
              storyNode,
              location: 'decisionStoryNode',
              prevValue: decision.storyNode,
            })}
            on:keydown={e => onKeydown(e, {
              idx,
              storyIdx,
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
</section>