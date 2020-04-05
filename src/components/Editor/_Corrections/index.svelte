<script>
  export let corrections = [];
</script>

<style>
  .corrections {
    display: flex;
    flex-flow: column;
    flex: 1;
  }

  pre {
    padding-left: 16px;
    color: var(--root-color-error);
  }
</style>

<div class="corrections">
  {#each corrections as correction}
  <h4>- {correction.heading}</h4>
  <pre>
    {correction.messages.join('\n\n')}
  </pre>
  {/each}
</div>
