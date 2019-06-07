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
  import { stores } from '@sapper/app';
  import Introduction from '../components/Introduction.svelte';
  import Logger from 'js-logger';
  import StoryPreviews from '../components/StoryPreviews.svelte';

  const { page, session } = stores();

  export let stories;
  export let foo;

  $: switch($page.query.user) {
    case 'set':
    case 'new':
      Logger.info('Setting user')
      // TODO(kyle): This is inconsistently saving across pages, especially from index to story
      $session.user = JSON.parse($page.query.data);
      break;
    case 'clear':
      console.log('Clearing user')
      $session.user = null;
  }
</script>

<svelte:head>
  <title>Turning Point Tales</title>
</svelte:head>

{#if $page.query.user === 'new'}
  <p>Congratulations on creating your new user! We've sent you a confirmation email you'll
  need to click on in the next 48 hours, but for now you can start using the site.</p>

  <p>First things first though, let's get hooked up with your Patreon account so we can
  give you access to the freshest stories.</p>

  <button>TODO: hook up with Patreon.</button>
{/if}

<Introduction />

<StoryPreviews {stories} />
