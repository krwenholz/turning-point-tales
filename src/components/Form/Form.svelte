<script>
  export let className = '';
  export let id = '';
</script>

<style>
  form {
    display: flex;
    flex-flow: column;
    margin: auto;
    padding: 16px;
    display: flex;
    flex-flow: column;
  }
</style>

<form
  {id}
  class={`form ${className}`}
  action="javascript:void(0);"
>
  <slot></slot>
</form>
