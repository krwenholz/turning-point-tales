<script>
  import { settable } from 'src/lib/settable.js';

  const story = settable(['what', 'whom', { stuff: [] }]);
</script>

<div> {$story[0]} </div>
<div>
  {JSON.stringify($story)}
</div>

<button on:click={() => story.pullAt(['2', 'stuff'], 0)} >
  inc
</button>

<button on:click={() => story.pushAt(['2', 'stuff'], Math.random())} >
  add RANDO
</button>
