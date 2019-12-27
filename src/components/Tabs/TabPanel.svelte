<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';
  const { register, selected } = getContext(TABS);

  const panel = {};

  register({ panel });
</script>

{#if $selected.panel === panel}
  <slot />
{/if}
