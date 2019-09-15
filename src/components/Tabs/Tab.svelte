<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';

  export let name;

  const { registerTab, selectTab, selectedTab, selectIdx } = getContext(TABS);

  registerTab(name);
</script>

<style>
  button {
    flex: 0 1;
    margin: 0 24px 0 0;
    background: none;
    border: none;
    outline: none;
    border-bottom: var(--root-border-cta);
    border-bottom-color: transparent;
    cursor: pointer;
  }

  .selected {
    border-bottom: var(--root-border-cta);
  }
</style>

<button class='tab' class:selected="{$selectedTab === name}" on:click="{() => selectTab(name)}">
  <h3>
    <slot />
  </h3>
  <slot name='tab-content'/>
</button>
