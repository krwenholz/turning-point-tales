<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';

  const tab = Symbol();
  const { registerTab, selectTab, selectedTab, selectIdx } = getContext(TABS);

  registerTab(tab);
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

<button class='tab' class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
  <h3>
    <slot />
  </h3>
  <slot name='tab-content'/>
</button>
