<script>
  import { afterUpdate } from "svelte";
  import { safeWindow } from 'src/lib/client/safe-window.js';

  export let id = '';
  export let value = "";
  export let className = "";
  export let autoSize = true;
  export let placeholder = "";
  export const focus = () => self.focus();

  let self = {};
</script>

<style>
  textarea {
    box-sizing: border-box;
    overflow-y: hidden;
    resize: none;
    font-family: "IBM Plex Mono", "monospace";
    line-height: 1.68;
    border: 1px solid gray;
    box-shadow: inset 1px 1px 1px 0px lightgray;
    border-radius: 3px;
    padding: 16px;
    margin: 0;
    background-color: white;
  }
</style>

<textarea
  {id}
  {value}
  {placeholder}
  class="{`text-area ${className}`}"
  rows="{1}"
  bind:this="{self}"
  on:focus
  on:keydown
  on:keyup
  on:change
  on:input
  on:blur
></textarea>
