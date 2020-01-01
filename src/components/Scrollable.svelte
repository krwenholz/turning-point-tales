<script>
  import { get } from 'lodash';
  export let heading = '';
  export let className = '';

  const hasHeadingSlot = Boolean(get($$props.$$slots, 'heading'));
  const hasContentSlot = Boolean(get($$props.$$slots, 'content'));
</script>

<style>
  .scrollable {
    display: flex;
    flex-flow: column;
    position: relative;
    overflow-y: auto;
  }

  header {
    position: sticky;
    top: 0;
    background: var(--root-color-background);
    text-align: center;
    margin-bottom: 0;
  }

  .scrollable > * {
    width: 100%;
  }

  .scrollable .content {
    height: 100%;
  }
</style>

<section class={`scrollable ${className}`}>
  {#if hasHeadingSlot}
    <header>
      <slot name='heading'/>
    </header>
  {/if}
  <div class='content'>
  {#if hasContentSlot}
    <slot name='content'/>
  {:else}
    <slot />
  {/if}
  </div>
</section>
