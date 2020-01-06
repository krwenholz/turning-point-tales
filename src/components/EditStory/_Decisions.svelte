<script>
  export let onEvents = {};
  export let decisions = [];
  export let storyNode = "";
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
            on:keyup={e => eventBus.keydown({
              idx,
              storyNode,
              type: 'decisionLabel',
              value: e.target.textContent,
              path: [storyNode, 'decisions', idx, 'label'],
              keyCode: e.keyCode,
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
            on:keyup={e => eventBus.keydown({
              idx,
              storyNode,
              type: 'decisionStoryNode',
              value: e.target.textContent,
              path: [storyNode, 'decisions', idx, 'storyNode'],
              keyCode: e.keyCode,
            })}
          >
            {decision.storyNode}
          </div>
        </div>
      </div>
    {/each}
  </section>
{/if}
