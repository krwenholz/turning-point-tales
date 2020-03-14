<script>
  import { getContext } from "svelte";
  import { TABS } from "./_Tabs.svelte";
  const { register, selected } = getContext(TABS);
  const panel = {};
  register({ panel });

  export let className = "";
</script>

{#if $selected.panel === panel}
  <div class="{className}">
    <slot />
  </div>
{/if}
