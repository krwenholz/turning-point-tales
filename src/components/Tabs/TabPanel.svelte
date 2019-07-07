<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';

  const panel = Symbol();
  const { registerPanel, selectedPanel } = getContext(TABS);

  registerPanel(panel);
</script>

{#if $selectedPanel === panel}
  <slot />
{/if}
