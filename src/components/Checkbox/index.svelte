<script>
  export let id = "";
  export let className = "";
  export let checked = false;
</script>

<style>
  .checkbox {
    display: inline-block;
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
    visibility: hidden;
  }

  .box {
    min-height: 26px;
    min-width: 26px;
    border: 1px solid var(--input-border-color);
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
  <input {id} {checked} on:change on:input on:click type="checkbox" />
  <div class="box"></div>
  <div class="mark"></div>
  <slot />
</label>
