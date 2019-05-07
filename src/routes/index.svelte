<script context="module">
  export function preload({params, query}) {
    return this.fetch('story.json', { credentials: 'include' }).then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        console.error('Index story fetching error', res);
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

  const { page, session } = sapper.stores();

  export let stories;

  $: {
    // TODO(kyle): This is not working. I don't understand the new stores very well, but
    // the page store is empty here and it shouldn't be. Otherwise I think I have auth correct.
    // The cookies are all there!
    // https://github.com/sveltejs/sapper/commit/bca88831dab9f8a3ff38c56e68229e7b3d63d3f1
    console.info("updating user", page)
    const query = new URLSearchParams(page.query);
    if(page.query.get('user') === 'set' && session.user) {
      const cookie = document.cookie.split(';').filter((item) => item.startsWith('user'))[0];
      console.log('setting user')
      session.user = JSON.parse(cookie);
    } else if(query.get('user') === 'clear' && session.user) {
      session.user = null;
    }
  }
</script>

<svelte:head>
  <title>Turning Point Tales</title>
</svelte:head>

<Introduction />

<StoryPreviews {stories} />
