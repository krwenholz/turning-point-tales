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
  import Introduction from 'src/components/Introduction.svelte';
  import StoryPreviews from 'src/components/StoryPreview/index.svelte';
  import { userSubscribed } from 'src/lib/client/user';
  import { Logger } from 'src/lib/client/logger';
  import { stores } from '@sapper/app';

  const { page, session } = stores();

  export let stories;
  export let foo;

  $: if($page.query.user === 'clear') {
      Logger.info('Clearing user');
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

<StoryPreviews
  stories={stories}
  isSubscriber={userSubscribed($session.user)}
  />
