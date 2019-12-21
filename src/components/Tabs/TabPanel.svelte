<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';
  const { register, selected } = getContext(TABS);

  const panel = {};

  register({ panel });
</script>

<div class:hidden="{$selected.panel !== panel}" >
  <slot />
</div>
