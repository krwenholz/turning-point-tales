<script context="module">
  export const TABS = {};
</script>

<script>
  import { setContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  import { get, first, isEmpty, concat, without } from "lodash";

  export let onTabSwitch = () => {};
  export let selectedTab = "";

  let listOf = writable({
    tabs: [],
    panels: []
  });

  let selected = writable({
    panel: null,
    tab: null
  });

  setContext(TABS, {
    selected,
    register({ tab, panel }) {
      const type = tab ? "tabs" : "panels";
      const item = tab || panel;

      $listOf[type] = concat($listOf[type], item);
      $selected[type] = item;

      onMount(() => {
        $selected.tab = $listOf.tabs.includes(selectedTab)
          ? selectedTab
          : first($listOf.tabs);
        $selected.panel = get(
          $listOf.panels,
          $listOf.tabs.indexOf($selected.tab)
        );
      });
    },
    choose(chosenTab) {
      $selected.tab = chosenTab;
      let idx = $listOf.tabs.indexOf(chosenTab);
      $selected.panel = $listOf.panels[idx];

      onTabSwitch(chosenTab);
    }
  });
</script>

<style>
  .tabs {
    display: flex;
    flex-flow: column;
  }
</style>

<div class={`tabs`}>
  <slot />
</div>
