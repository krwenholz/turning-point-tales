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
  import * as sapper from '@sapper/app';
  import Adventure from 'src/components/Adventure';
  import DisplayAd from 'src/components/ads/DisplayAd.svelte';
  import { adStore } from 'src/lib/stores/browserStore/display-ads';
  import { mainAdventure } from 'src/lib/stores/browserStore/main-adventure';
  import { stores } from '@sapper/app';

  export let story;
  export let title;

  const { page, session } = sapper.stores();
  const userSubscribed = $session.user.subscriptionPeriodEnd !== null
    && $session.user.subscriptionPeriodEnd.getMilliseconds() < Date.now();

  const oneDay = 1 * 24 * 60 * 60 * 1000;

  const adInfo = adStore();

  const adFinished = () => {
    $adInfo.dateSeen = Date.now();
  }

  $: hideAd = userSubscribed || (Date.now() - $adInfo.dateSeen) < oneDay;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#if hideAd}
  <Adventure
    {story}
    {title}
    store={mainAdventure()}
    className='adventure'
    storyNode={$page.query.storyNode}
  />
{:else}
  <DisplayAd
    on:end={adFinished}
  />
{/if}
