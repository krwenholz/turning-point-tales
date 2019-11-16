<style>
  button {
    flex: 1;
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

<script>
  import { getContext } from "svelte";
  import { TABS } from "./Tabs.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let name;

  const { registerTab, selectTab, selectedTab, selectIdx } = getContext(TABS);

  registerTab(name);
</script>

<button
  class="tab"
  class:selected="{$selectedTab === name}"
  on:click="{e => {
    dispatch('click');
    selectTab(name);
  }}">
  <h3>
    <slot />
  </h3>
  <slot name="tab-content" />
</button>
