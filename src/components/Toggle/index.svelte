<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let toggled = false;
  let checked = toggled;
</script>

<style>
  .switch {
    display: inline-block;
    font-size: 20px; /* 1 */
    height: 1em;
    width: 2em;
    background: gray;
    border-radius: 1em;
  }

  .switch input {
    position: absolute;
    opacity: 0;
  }

  .switch div {
    height: 1em;
    width: 1em;
    border-radius: 1em;
    background: #fff;
    box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
    transition: all 300ms;
  }

  .switch input:checked + div {
    transform: translate3d(100%, 0, 0);
  }

  .checked {
    background: var(--root-call-to-action);
  }
</style>

<label class="switch" class:checked>
  <input on:change on:input on:click bind:checked type="checkbox" />
  <div></div>
</label>
