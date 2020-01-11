<script>
  import TextArea from 'src/components/TextArea';
  import Plus from 'src/components/icons/Plus.svelte';
  import Button from 'src/components/Button.svelte';
  import { createEventDispatcher, afterUpdate } from "svelte";

  const dispatch = createEventDispatcher();

  export let storyIdx;
  export let focusPath = '';
  export let clearFocusPath = () => {};
  export let onKeydown = () => {};
  export let onInput = () => {};
  export let storyNode = '';
  export let decisions = [];
</script>

<style>
  .decisions :global(.text-area) {
    margin-left: 20px;
    width: 100%;
    margin-bottom: 8px;
  }

  .decision {
    margin-bottom: 32px;
  }

  h2 {
    display: flex;
  }

  h2 :global(svg) {
    margin-left: 8px;
  }

  .label,
  .story-node {
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  span {
    min-width: 15%;
    margin-left: 20px;
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
    <h2>
      Decisions
    </h2>
    {#each decisions as decision, idx}
      <div class='decision'>
        <div class="label">
          <span>Label</span>
          <TextArea
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
      </div>
    {/each}
    <nav class='actions'>
      <Button on:click={() => dispatch('addNewDecision', { storyIdx })} size='small' variation='link'>
        <Plus/>
        add new decision
      </Button>
    </nav>
  </section>
{/if}
