<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`story/${params.slug}.json`, { credentials: 'include' }).then((res) => {
      if (res.status == 200) {
        return res.json();
      } else if(res.status == 401) {
        this.redirect(302, '/login');
      } else {
        console.error(res);
        this.error(res.status, res);
      }
    }).then(({ content: story, title }) => {
      return { story, title, };
    });
  }
</script>

<script>
  import Adventure from '../../components/Adventure.svelte';
  import * as sapper from '@sapper/app';
  import { mainAdventure } from '../../lib/stores/browserStore/main-adventure';

  export let story;
  export let title;

  const { page } = sapper.stores();
</script>

<style>
  :global(.adventure) {
    margin: auto;
    width: 90%;
    max-width: 80ch;
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Adventure
  {story}
  {title}
  store={mainAdventure()}
  className='adventure'
  storyNode={$page.query.storyNode}
/>
