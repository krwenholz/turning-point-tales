<svelte:options accessors={true}/>
<script>
  // Reference https://github.com/rob-balfre/svelte-select
  import Select from 'svelte-select';

  export let className = '';
  export let focus = () => self.querySelector('input').focus();

  let self = {};
</script>

<style>
  .fuzzy-select {
    /* without this, <Select> hides all text when text is typed in the input */
    min-width: 130px;
    height: fit-content;
    height: -moz-fit-content;
  }

  .fuzzy-select :global(input) {
    border: 1px solid var(--input-border-color) !important;
  }

  .fuzzy-select :global(.selectContainer) {
    border: none !important;
  }
</style>

<label
  class={`fuzzy-select ${className}`}
  bind:this={self}
>
  <Select
    {...$$props}
    on:select
    on:clear
  />
</label>
