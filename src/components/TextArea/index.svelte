<script>
  import { round } from "lodash";
  import { onMount, afterUpdate } from "svelte";

  export let id = '';
  export let value = "";
  export let className = "";
  export let autoSize = true;
  export let placeholder = "";
  export const focus = () => self.focus();

  let self = {};

  const resize = () => {
    if (!autoSize) return;

    self.style.height = "auto";
    self.style.height = self.scrollHeight + "px";
  };
  afterUpdate(resize);
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
  on:input="{resize}"
  on:input
  on:blur
></textarea>
