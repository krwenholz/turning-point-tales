<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(
      `story/${params.slug}.json`,
      { credentials: 'include' }
    );

    if (res.status == 200) {
      const json = await res.json();

      return {
        story: json.content,
        title: json.title,
      }

    } else if(res.status == 401) {
      this.redirect(302, '/login');
    } else {
      console.error(res);
      this.error(res.status, res);
    }
  }
</script>

<script>
  import Adventure from '../../components/Adventure';
  import * as sapper from '@sapper/app';
  import { mainAdventure } from '../../lib/stores/browserStore/main-adventure';

  export let story;
  export let title;

  const { page } = sapper.stores();
</script>

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
