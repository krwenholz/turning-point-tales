<script>
  import TextArea from 'src/components/TextArea';
  import Plus from 'src/components/icons/Plus.svelte';
  import Button from 'src/components/Button.svelte';
  import Input from 'src/components/Input';
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
</script>

<style>
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
    margin-bottom: 24px;
  }

  header :global(button) {
    margin-left: 16px;
  }

  span {
    width: 30%;
    max-width: 130px;
    margin-bottom: 12px;
  }

  .actions {
    display: flex;
  }

  .label :global(svg) {
    margin-left: 16px;
    width: 32px;
    height: 32px;
  }

  .label-and-story-node :global(textarea) {
    min-height: 47px;
    width: 100%;
    max-width: 300px;
    padding: 7px 8px 0 8px;
    margin: 4px 0 8px 0;
    border: var(--input-border);
    border-radius: var(--root-border-radius);
    color: currentColor;
    font-size: var(--root-font-size-md);
  }
</style>

<section class="decisions">
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
  {#if decisions.length}
  {#each decisions as decision, idx}
    <div class='decision'>
      <Trash className={'delete-decision'} on:click={() => onDeleteDecision([storyIdx, 'story', 'decisions', idx])}>
        Delete
      </Trash>
      <section class='label-and-story-node'>
        <div class="label">
          <span> Label </span>
          <TextArea
            value={decision.label}
            autoSize={false}
            on:input={e => onInput(e, {
              idx,
              storyIdx,
              storyNode,
              typeOfChange: 'decisionLabel',
              path: [storyIdx, 'story', 'decisions', idx, 'label'],
              prevValue: decision.label,
            })}
            on:keydown={e => onKeydown(e, {
              idx,
              storyNode,
              typeOfChange: 'decisionLabel',
              path: [storyIdx, 'story', 'decisions', idx, 'label'],
              prevValue: decision.label,
            })}
          />
        </div>
        <div class="story-node">
          <span>StoryNode</span>
          <TextArea
            value={decision.storyNode}
            on:input={e => onInput(e, {
              idx,
              storyIdx,
              storyNode,
              typeOfChange: 'decisionStoryNode',
              path: [storyIdx, 'story', 'decisions', idx, 'storyNode'],
              prevValue: decision.storyNode,
            })}
            on:keydown={e => onKeydown(e, {
              idx,
              storyIdx,
              storyNode,
              typeOfChange: 'decisionStoryNode',
              path: [storyIdx, 'story', 'decisions', idx, 'storyNode'],
              prevValue: decision.storyNode,
            })}
          />
        </div>
      </section>
    </div>
  {/each}
{/if}
</section>
