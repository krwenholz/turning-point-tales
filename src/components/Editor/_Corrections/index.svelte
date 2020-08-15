<script>
  export let corrections = { messages: [] };
</script>

<style>
  .corrections {
    flex: 1;
    display: flex;
    flex-flow: column;
    overflow-y: scroll;
  }

  h4:not(:first-of-type) {
    margin-top: 32px;
  }

  span {
    padding-left: 16px;
    color: var(--root-color-error);
  }
</style>

<div class="corrections">
  {#each corrections.getAll() as correction}
  <h4>- {correction.description}</h4>
  <span>
    {@html correction.messages.join('</br></br>')}
  </span>
  {/each}
</div>
