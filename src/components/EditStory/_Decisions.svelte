<script>
  import TextArea from 'src/components/TextArea';

  export let storyIdx;
  export let focusPath = '';
  export let clearFocusPath = () => {};
  export let onKeydown = () => {};
  export let onInput = () => {};
  export let storyNode = '';
  export let decisions = [];
</script>

<style>
  .decision {
    margin-bottom: 16px;
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
  .decisions :global(.text-area) {
    margin-left: 20px;
    width: 100%;
    margin-bottom: 8px;
  }
</style>

{#if decisions.length}
  <section class="decisions">
    <b>Decisions</b>
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
  </section>
{/if}
