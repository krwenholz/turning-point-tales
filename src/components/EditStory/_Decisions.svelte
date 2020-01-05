<script>
  export let decisions = [];
  export let storyNode = "";
  import { createEventDispatcher } from "svelte";
  import { getDispatchChange } from './_shared';

  const dispatchChange = getDispatchChange(createEventDispatcher());
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
            on:input="{e => dispatchChange(e, [storyNode, 'decisions', idx, 'label'])}"
          >
            {decision.label}
          </div>
        </div>
        <div class="story-node">
          <i>StoryNode</i>
          <div
            class='content-editable'
            ContentEditable
            on:input="{e => dispatchChange(e, [storyNode, 'decisions', idx, 'storyNode'])}"
          >
            {decision.storyNode}
          </div>
        </div>
      </div>
    {/each}
  </section>
{/if}
