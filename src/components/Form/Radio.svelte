<script>
  export let className = "";
  export let checked = false;
  export let name = "";
  export let onChange;
</script>

<style>
  /* Customize the label (the container) */
  .radio {
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;
    height: 26px;
    width: 26px;
  }

  .radio input {
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
    position: relative;
    top: 0;
    left: 0;
    border: 2px solid var(--root-color-accent);
    border-radius: 100%;
  }

  .radio input:checked ~ .center-circle {
    opacity: 1;
    transition: all 0.2s ease-out;
  }

  .radio .center-circle {
    content: "";
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15px;
    height: 15px;
    transform: translate(-50%, -50%);
    background-color: var(--root-color-accent);
    transition: all 0.2s ease-out;
    border-radius: 100%;
  }
</style>

<label class="radio">
  <input {className} {name} {checked} on:click="{onChange}" type="radio" />
  <div class="box"></div>
  <div class="center-circle"></div>
</label>
