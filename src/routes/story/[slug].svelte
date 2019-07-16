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
  import { browserStore } from '../../lib/stores/browserStore';
  import { safeWindow } from '../../lib/safeWindow';
  import { MAIN_ADVENTURE } from '../../lib/stores/browserStore/preDefinedKeys';

  export let story;
  export let title;

  const { page } = sapper.stores();

  const store = browserStore(MAIN_ADVENTURE, safeWindow().localStorage, {
    storyNode: $page.query.storyNode
  });

</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Adventure
  {story}
  {title}
  store={store}
  storyNode={$page.query.storyNode}
/>