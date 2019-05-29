<script>
  import Button from '../components/Button.svelte';

  export let stories = [];

  function redirect(href) {
    window.location = `${href}`;
  }
</script>

<style>
  .story-previews {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
    grid-gap: 32px;
  }

  article {
    padding: 16px;
    display: flex;
    flex-flow: column;
    border: 1px solid gray;
    border-radius: var(--root-border-radius);
  }

  header {
    display: flex;
    flex-flow: column;
  }

  h2 {
    text-align: center;
    margin-bottom: 8px;
    text-decoration: underline;
  }

  small {
    text-align: center;
    color: var(--root-color-light);
    margin-bottom: 24px;
  }

  .tags {
    display: flex;
    flex-flow: row wrap;
    min-height: 20px;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .tag {
    color: black;
    font-weight: normal;
    padding: 4px;
    margin: 5px;
    border: 1px solid var(--root-color-primary);
    border-radius: 1px;
    font-size: 10px;
  }

  :global(.button) {
    margin-top: auto;
    display: flex;
    align-items: center;
    color: var(--root-call-to-action);
  }
</style>

<section class="story-previews">
  {#each stories as { id, author, title, content, preview, previewPrompt, tags }}
    <article>
      <header>
        <h2>
          {title}
        </h2>
        <small>by {author}</small>
      </header>
      <div class="tags">
        {#each tags as tag}
        <span class="tag">{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
        {/each}
      </div>
      <p>{preview}</p>
      <Button
        text={previewPrompt}
        on:click={() => redirect(`/story/${id}`)}
      />
    </article>
  {/each}
</section>
