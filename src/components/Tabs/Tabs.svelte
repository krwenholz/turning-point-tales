<script context="module">
  export const TABS = {};
</script>

<script>
  import { safeWindow } from 'src/lib/client/safe-window.js';
  import { setContext, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { stores } from '@sapper/app';

  const { page } = stores();

  const tabs = [];
  const panels = [];
  const selectedTab = writable(null);
  const selectedPanel = writable(null);

  setContext(TABS, {
    registerTab: tab => {
      tabs.push(tab);
      selectedTab.update(current => $page.query.tab === tab ? tab : current);

      onDestroy(() => {
        const i = tabs.indexOf(tab);
        tabs.splice(i, 1);
        selectedTab.update(current => current === tab ? (tabs[i] || tabs[tabs.length - 1]) : current);
      });
    },

    registerPanel: panel => {
      panels.push(panel);
      const indexOfTab = tabs.indexOf($page.query.tab);
      selectedPanel.update(current => current == undefined || indexOfTab == (panels.length - 1) ? panel : current);

      onDestroy(() => {
        const i = panels.indexOf(panel);
        panels.splice(i, 1);
        selectedPanel.update(current => current === panel ? (panels[i] || panels[panels.length - 1]) : current);
      });
    },

    selectIdx: idx => {
      selectedTab.set(tabs[idx]);
      selectedPanel.set(panels[idx]);
    },

    selectTab: tab => {
      const i = tabs.indexOf(tab);
      selectedTab.set(tab);
      selectedPanel.set(panels[i]);

      safeWindow().history.replaceState(
        '',
        '',
        `${safeWindow().location.pathname}?tab=${tab}`
      )
    },

    selectedTab,
    selectedPanel
  });

</script>

<div class="tabs">
  <slot />
</div>
