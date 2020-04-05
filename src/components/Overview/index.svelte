<script>
  import { slide } from "src/lib/Transition";
  import { map } from "lodash";
  import { onDestroy } from "svelte";
  import Scrollable from "src/components/Scrollable.svelte";

  export let consequences = [];
  export let history = [{ storyNode: "start" }];

  $: history = map(history, "storyNode");
</script>

<style>
  .overview {
    display: flex;
    flex-flow: column;
  }

  :global(.history) {
    grid-area: history;
  }
  :global(.consequences) {
    grid-area: consequences;
  }

  h3 {
    font-size: 14px;
    background: var(--root-color-primary);
    color: var(--root-color-background);
    margin-bottom: 0;
  }

  :global(.detail) {
    color: white;
    background: var(--root-color-primary);
    margin-bottom: 8px;
    text-align: center;
    border-radius: var(--root-border-radius);
    padding: 4px;
    font-size: 12px;
    width: fit-content;
    width: -moz-fit-content;
  }

  .overview :global(.content) {
    padding-top: 8px;
  }
</style>

<section class="overview">
  <Scrollable className="history">
    <h3 slot="heading">History</h3>
    <ol reversed slot="content">
      {#each history.slice().reverse() as record}
        <li class="detail">{record}</li>
      {/each}
    </ol>
  </Scrollable>

  <Scrollable className="consequences">
    <h3 slot="heading">Consequences</h3>
    <ul slot="content">
      {#each consequences as consequence}
        <li class="detail">* {consequence}</li>
      {/each}
    </ul>
  </Scrollable>
</section>
