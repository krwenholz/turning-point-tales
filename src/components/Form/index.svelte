<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let form;
  export let className = "";
  export let id = "";

  export const checkValidity = (...props) => form.checkValidity(...props);
</script>

<style>
  form {
    display: flex;
    flex-flow: column;
    margin: auto;
    padding: 16px;
    display: flex;
    flex-flow: column;
  }
</style>

<form
  {...$$props}
  bind:this="{form}"
  {id}
  class={`form ${className}`}
  action="javascript:void(0);"
  on:submit="{e => {
    e.preventDefault();
    dispatch('submit');
  }}"
>
  <slot />
</form>
