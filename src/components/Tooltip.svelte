<script>
  export let text = "";
</script>

<style>
  .tooltip {
    position: relative;
    display: inline-block;
  }
  /* Tooltip text */
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 240px;
    background-color: var(--root-call-to-action);
    color: var(--root-color-background);
    text-align: center;
    padding: 5px;
    border-radius: var(--root-border-radius);

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
    right: 105%;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>

<div class="tooltip">
  <slot />
  <span class="tooltiptext">{text}</span>
</div>
