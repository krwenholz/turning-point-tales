<script>
  export let focusPath = '';
  export let clearFocusPath = () => {};
  export let onKeydown = () => {};
  export let onInput = () => {};
  export let storyNode = '';
  export let decisions = [];
</script>

<style>
  .label,
  .story-node {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 15px;
  }

  .decision {
    margin-bottom: 16px;
  }

  i {
    width: 25%;
  }
</style>

{#if decisions.length}
  <section class="decisions">
    <b>Decisions</b>
    {#each decisions as decision, idx}
      <div class='decision'>
        <div class="label">
          <i>Label</i>
          <div
            ContentEditable
            class='content-editable'
            on:input={e => onInput(e, {
              idx,
              storyNode,
              keyType: 'decisionLabel',
              path: [storyNode, 'decisions', idx, 'label'],
              prevValue: decision.label,
            })}
            on:keydown={e => onKeydown(e, {
              idx,
              storyNode,
              keyType: 'decisionLabel',
              path: [storyNode, 'decisions', idx, 'label'],
              prevValue: decision.label,
            })}
          >
            {decision.label}
          </div>
        </div>
        <div class="story-node">
          <i>StoryNode</i>
          <div
            class='content-editable'
            ContentEditable
            on:input={e => onInput(e, {
              idx,
              storyNode,
              keyType: 'decisionLabel',
              path: [storyNode, 'decisions', idx, 'storyNode'],
              prevValue: DECISION.storyNode,
            })}
            on:keydown={e => onKeydown(e, {
              idx,
              storyNode,
              keyType: 'decisionLabel',
              path: [storyNode, 'decisions', idx, 'storyNode'],
              prevValue: decision.storyNode,
            })}
          >
            {decision.storyNode}
          </div>
        </div>
      </div>
    {/each}
  </section>
{/if}
