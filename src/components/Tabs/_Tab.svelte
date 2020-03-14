<script>
  import { getContext } from "svelte";
  import { TABS } from "./_Tabs.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const { choose, selected, register } = getContext(TABS);
  import uuidv4 from "uuid/v4";

  export let name = uuidv4();
  register({ tab: name });
</script>

<style>
  .selected {
    border-bottom: 2px solid var(--root-call-to-action);
    color: #333;
  }

  h3 {
    margin-right: 24px;
    cursor: pointer;
  }
</style>

<h3
  class:selected="{$selected.tab === name}"
  on:click="{() => {
    choose(name);
    dispatch('click');
  }}"
>
  <slot />
</h3>
