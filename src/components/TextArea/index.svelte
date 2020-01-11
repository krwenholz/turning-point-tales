<script>
  import { createEventDispatcher, onMount } from "svelte";

  export let value;
  export let className = '';
  let self = {};

  onMount(() => {
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
  );

  export const focus = () => self.focus();
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
  {value}
  data-autoresize
  class={`text-area ${className}`}
  bind:this={self}
  on:focus
  on:keydown
  on:keyup
  on:change
  on:input
  on:blur
/>
