<script>
  import { createEventDispatcher, afterUpdate } from "svelte";

  export let value;
  let self = {};

  export const focus = () => self.focus();

  afterUpdate(() => {
    addAutoResize();
  })

  const addAutoResize = () => {
    document.querySelectorAll('[data-autoresize]').forEach(element => {

      const offset = element.offsetHeight - element.clientHeight;

      document.addEventListener('input', event => {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + offset + 'px';
      });

      element.removeAttribute('data-autoresize');
    });
  }
</script>

<textarea
  class='text-area'
  bind:this={self}
  {value}
  data-autoresize
  rows="1"
  on:focus
  on:keydown
  on:keyup
  on:change
  on:input
  on:blur
/>
