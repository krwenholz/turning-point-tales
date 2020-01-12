<script>
  import { settable } from 'src/lib/settable.js';

  const story = settable(['what', 'whom', { stuff: [] }]);
</script>

<div> {$story[0]} </div>
<div>
  {JSON.stringify($story)}
</div>

<button on:click={() => story.pull(['2', 'stuff', 0]) }>
  dec
</button>

<button on:click={() => story.pushAt(Math.random(), [2, 'stuff'])} >
  add RANDO
</button>
