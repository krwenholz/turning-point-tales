<script>
  import { getContext } from "svelte";
  import { TABS } from "./_Tabs.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const { choose, selected, register } = getContext(TABS);
  import uuidv4 from "uuid/v4";

  export let name = uuidv4();
  export let className = '';
  export let disabled = false;

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

  .disabled {
    cursor: not-allowed;
  }
</style>

<h3
  class={`tab ${className}`}
  class:disabled
  class:selected="{$selected.tab === name}"
  on:click="{() => {
    if(disabled) return;

    choose(name);
    dispatch('click');
  }}"
>
  <slot />
</h3>
