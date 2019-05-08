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
    const query = new URLSearchParams($page.query);
    if($page.query.user === 'set' && $session.user) {
      console.log('Setting user')
      $session.user = JSON.parse($page.query.data);
    } else if(query.get('user') === 'clear' && $session.user) {
      console.log('Clearing user')
      $session.user = null;
    }
  }
</script>

<svelte:head>
  <title>Turning Point Tales</title>
</svelte:head>

<Introduction />

<StoryPreviews {stories} />
