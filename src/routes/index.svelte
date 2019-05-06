<script context="module">
  export function preload(page, session) {
    // TODO(kyle): This preload isn't being called, that's bad.
    console.info("Preloading index")
    const { path, params, query } = page;
    return this.fetch('story.json', { credentials: 'include' }).then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        console.error(res);
        this.error(res.status, res);
      }
    }).then((stories) => {
      return { stories };
    });
  }
</script>

<script>
  import Introduction from '../components/Introduction.svelte';
  import StoryPreviews from '../components/StoryPreviews.svelte';
  import * as sapper from '@sapper/app';

  const { session } = sapper.stores();

  export let stories;

  export function onupdate() {
    const query = new URLSearchParams(window.location.search)
    if(query.get('user') === 'set' && !this.store.get().user) {
      const cookie = document.cookie.split(';').filter((item) => item.startsWith('user'))[0];
      console.log('setting user')
      this.store.set({ user: JSON.parse(cookie) });
    } else if(query.get('user') === 'clear' && this.store.get().user) {
      this.store.set({ user: null });
    }
  }
</script>

<svelte:head>
  <title>Turning Point Tales</title>
</svelte:head>

<Introduction />

<StoryPreviews {stories} />
