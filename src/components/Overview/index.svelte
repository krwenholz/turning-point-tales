<script>
  import { slide } from 'src/lib/Transition/index.js';

  export let className = ''
  export let currentStoryNode = ['start']
  export let history = ['start'];
  export let consequences = [];

  let fade = false;

  export const update = ({ detail }) => {
    currentStoryNode = detail.storyNode;
    history = detail.history.map(record => record.storyNode);
    consequences = detail.consequences;
  };

  export const reset = () => {
    currentStoryNode = ['start'];
    history = ['start'];
  }

  const fadeOnChange = () => ({
    update: () => fade = true
  });

</script>

<style>
  h2 {
    border-bottom: var(--root-border);
  }

  ul {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
  }

  li {
    margin-bottom: 48px;
  }

  .history {
    flex: 5;
  }

  .consequences {
    flex: 2;
  }

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateX(10px)
    }
    100% {
      opacity: 1
    }
  }

  .fade { animation: .4s ease-in fade forwards; }
</style>

<ul class={`overview ${className}`}>
  <li>
    <h2>Current Story Node</h2>
    <div
      class:fade
      use:fadeOnChange={currentStoryNode}
      on:animationend={() => fade = false }
    >
      {currentStoryNode}
    </div>
  </li>

  <li class='consequences'>
    <h2>Consequences</h2>
    {#each consequences as consequence}
      <h3 transition:slide > * {consequence} </h3>
    {/each}
  </li>

  <li class='history'>
    <h2>History</h2>
    {#each history as record, idx}
      <h3 transition:slide > {idx + 1}. {record} </h3>
    {/each}
  </li>
</ul>
