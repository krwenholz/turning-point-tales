<script>
  import { slide } from "src/lib/Transition/index.js";

  export let className = "";
  export let currentStoryNode = ["start"];
  export let consequences = [];
  export let history = [{ storyNode: "start" }];
  $: history = history.map(record => record.storyNode);
  let highlight = false;

  const highlightOnChange = () => ({
    update: () => (highlight = true)
  });
</script>

<style>
  .overview {
    background: white;
  }

  h3 {
    border-bottom: var(--root-border);
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  .overview > li {
    padding: 0 16px 0 16px;
    width: 33.33%;
  }

  .detail {
    color: white;
    background: var(--root-color-primary);
    margin-bottom: 8px;
    text-align: center;
    border-radius: var(--root-border-radius);
    padding: 8px;
    font-size: var(--font-size-sm);
    line-height: 1;
  }

  .history,
  .consequences {
    overflow-y: auto;
  }

  @keyframes highlight {
    0% {
      opacity: 0;
      transform: translateX(10px);
    }
    100% {
      opacity: 1;
    }
  }

  .highlight {
    animation: 0.4s ease-in highlight forwards;
  }
</style>

<ul class="{`overview ${className}`}">
  <li>
    <h3>Current Story Node</h3>
    <div
      class="detail"
      class:highlight
      use:highlightOnChange="{currentStoryNode}"
      on:animationend="{() => (highlight = false)}">
      {currentStoryNode}
    </div>
  </li>

  <li class="history">
    <h3>History</h3>
    <ol reversed>
      {#each history.slice().reverse() as record}
        <li transition:slide class="detail">{record}</li>
      {/each}
    </ol>
  </li>

  <li class="consequences">
    <h3>Consequences</h3>
    <ul>
      {#each consequences as consequence}
        <li transition:slide class="detail">* {consequence}</li>
      {/each}
    </ul>
  </li>

</ul>
