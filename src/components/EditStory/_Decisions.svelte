<script>
  import TextArea from 'src/components/TextArea';
  import Plus from 'src/components/icons/Plus.svelte';
  import Button from 'src/components/Button.svelte';
  import Input from 'src/components/Input';

  export let storyIdx;
  export let focusPath = '';
  export let clearFocusPath = () => {};
  export let onKeydown = () => {};
  export let onInput = () => {};
  export let onAddNewDecision = () => {};
  export let storyNode = '';
  export let decisions = [];
</script>

<style>
  .decisions :global(.text-area) {
    width: 100%;
    margin-bottom: 8px;
  }

  .decision:not(:last-of-type) {
    margin-bottom: 32px;
  }

  .label,
  .story-node {
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  span {
    min-width: 15%;
    margin-bottom: 12px;
  }

  .actions {
    display: flex;
  }

  .actions :global(svg) {
    margin-right: 16px;
    width: 32px;
    height: 32px;
  }
</style>

{#if decisions.length}
  <section class="decisions">
    <span> Decisions </span>
    {#each decisions as decision, idx}
      <div class='decision'>
        <div class="label">
          <span>Label</span>
          <Input
            value={decision.label}
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
          <Input
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
      </div>
    {/each}
    <Button
      size='small'
      variation='link'
      on:click={() => onAddNewDecision([storyIdx, 'story', 'decisions' ])}
    >
      <Plus/>
      add new decision
    </Button>
  </section>
{/if}
