<script>
  export let className = 'tab-list'
  export let justification = 'left';
</script>

<style>
  .tab-list {
    display: flex;
  }

  .justify-content-center {
    justify-content: center;
  }
</style>

<div class={`tab-list ${className} justify-content-${justification}`}>
  <slot />
</div>
