<script>
  export let required = false;
  export let className = "";
  export let id = "";
  export let checked = false;
  export let onChange;
</script>

<style>
  .checkbox {
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  input {
    position: absolute;
    opacity: 0;
    margin: 0;
    cursor: pointer;
    min-height: 26px;
    min-width: 26px;
  }

  .box {
    min-height: 26px;
    min-width: 26px;
    border: var(--input-border);
    border-radius: var(--root-border-radius);
  }

  .mark {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 6px;
    left: 10px;
    width: 7px;
    height: 12px;
    margin: 0;
    border: solid var(--root-color-primary-altered);
    border-width: 0 2px 2px 0;
    transition: all 0.2s ease-out;
    transform: rotate(45deg);
  }

  input:checked ~ .mark {
    opacity: 1;
    visibility: visible;
    transition: all 0.2s ease-out;
  }

  .checkbox :global(span) {
    margin-left: 8px;
  }
</style>

<label class="{`checkbox ${className}`}">
  <input {...$$props} on:click="{onChange}" type="checkbox" />
  <div class="box"></div>
  <div class="mark"></div>
  <slot />
</label>
