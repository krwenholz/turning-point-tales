<script>
  import Button from 'src/components/Button.svelte';
  import { goto } from '@sapper/app';

  export let id;
  export let author;
  export let title;
  export let content;
  export let label;
  export let tags;
  export let generalRelease;
  export let isSubscriber;

  $: releaseDate = new Date(generalRelease);
  $: isReleased = releaseDate < new Date();
</script>

<style>
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
    color: var(--root-color-primary-altered);
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

<article>
  <header>
    <h2>
      {title}
    </h2>
    <small>by {author}</small>
    {#if !isReleased}
      <small>Subscribers only before {releaseDate.toDateString()}</small>
      {#if !isSubscriber}
        <small><a href="/user/profile?tab=adventurer">Become a full adventurer now to unlock access.</a></small>
      {/if}
    {/if}
    <small></small>
  </header>
  <div class="tags">
    {#each tags as tag}
      <span class="tag">{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
    {/each}
  </div>
  <p>{content.start.text[0].slice(0, 200)}...</p>
  {#if isSubscriber || isReleased}
    <Button on:click={() => goto(`/story/${id}`)} >
      Continue...
    </Button>
  {/if}
</article>

