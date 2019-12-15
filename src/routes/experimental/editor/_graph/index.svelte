<script>
  import { onMount } from "svelte";

  export let story = {};

  let D3;

  // D3, used by he graph, is not SSR compatible
  onMount(async () => {
    const module = await import("./D3");
    D3 = module.default;
  });
</script>

<style>
  /* Need a nasty global here because it's unused until later and we don't want svelte
     stripping it*/
  :global(svg.story-graph .link) {
    stroke: #999;
    stroke-opacity: 0.6;
    stroke-width: 1px;
  }
</style>

<svelte:component this="{D3}" {story} />
