<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(
      `story/${params.slug}.json`,
      { credentials: 'include' }
    );

    const json = await res.json();
    if (res.status == 200) {

      return {
        story: json.content,
        title: json.title,
        generalRelease: json.general_release,
      }
    } else if(res.status == 401) {
      this.redirect(302, '/login?error=unknown');
    } else {
      console.error(res);
      this.error(res.status, res);
    }
  }
</script>

<script>
  import * as sapper from '@sapper/app';
  import Adventure from 'src/components/Adventure';
  import DisplayAd from 'src/components/ads/DisplayAd.svelte';
  import { adStore } from 'src/lib/stores/browserStore/display-ads';
  import { userSubscribed } from 'src/lib/client/user';
  import { mainAdventure } from 'src/lib/stores/browserStore/main-adventure';
  import { stores } from '@sapper/app';

  export let story;
  export let title;
  export let generalRelease;

  const { page, session } = sapper.stores();
  const isSubscribed = userSubscribed($session.user);

  const oneDay = 1 * 24 * 60 * 60 * 1000;

  const adInfo = adStore();

  const adFinished = () => {
    $adInfo.dateSeen = Date.now();
  }

  const released = new Date(generalRelease) < new Date();

  $: adSeen = Date.now() - $adInfo.dateSeen < oneDay;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#if isSubscribed || (released && adSeen)}
  <Adventure
    {story}
    {title}
    store={mainAdventure(story)}
    className='adventure'
    storyNode={$page.query.storyNode}
  />
{:else if released}
  <DisplayAd
    on:end={adFinished}
  />
{:else}
  <p>Looks like this story isn't released to non-subscribers yet.
  <a href="/user/profile?tab=adventurer">Become a full adventurer now.</a></p>
{/if}
