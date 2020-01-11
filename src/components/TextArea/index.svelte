<script>
  import { createEventDispatcher, beforeUpdate } from "svelte";

  export let value;
  let self = {};

  export const focus = () => self.focus();

  const addAutoResize = () => {
    document.querySelectorAll('[data-autoresize]').forEach(element => {

      element.style.height = (element.scrollHeight)+"px";

      const offset = element.offsetHeight - element.clientHeight;

      document.addEventListener('input', event => {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + offset + 'px';
      });

      element.removeAttribute('data-autoresize');
    });
  }

  beforeUpdate(addAutoResize);
</script>

<style>
  textarea {
    overflow-y: hidden;
    resize: none;
    border: none;
    transition: height 1s ease-in;
  }
</style>

<textarea
  class='text-area'
  bind:this={self}
  {value}
  data-autoresize
  on:focus
  on:keydown
  on:keyup
  on:change
  on:input
  on:blur
/>
