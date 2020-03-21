<script>
  export let errors = [];
</script>

<style>
  .feedback {
    display: flex;
    flex-flow: column;
    align-items: center;
    flex: 1;
    padding-top: 24px;
  }
</style>


<div class="feedback">
  {#if errors.length}
    <b>Feedback</b>
  {/if}

  {#each errors as error}
  <pre class='error'>{error.message}</pre>
  {/each}
</div>
