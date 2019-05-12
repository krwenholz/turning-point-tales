<script>
  export let checked = false;
  export let onChange;
</script>

<style>
  /* Customize the label (the container) */
  .checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;
    height: 25px;
    width: 25px;
  }

  .checkbox input {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    margin: 0;
    cursor: pointer;
  }

  .box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid var(--root-color-accent);
    border-radius: var(--root-border-radius);
  }

  .box:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox input:checked ~ .box:after {
    display: block;
  }

  .checkbox .box:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid var(--root-color-accent);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
</style>

<label class="checkbox">
  <input
    {checked}
    on:click={onChange}
    type="checkbox"
  />
  <div class="box" />
</label>
