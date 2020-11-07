<script>
  import * as sapper from "@sapper/app";
  import Notifications from "./Notifications.svelte";
  import Settings from "./Settings.svelte";
  import User from "src/components/icons/User.html";
  import { Tabs, Tab, TabList, TabPanel } from "src/components/Tabs";
  import { sample } from "lodash";
  import { safeWindow } from "src/lib/client/safe-window";
  import { stores } from "@sapper/app";
  const { page, session } = stores();

  const catchyProfileSayings = [
    "Slayer of slimes",
    "Betrayer of bards",
    "Pillager of the West Moors",
    "Island volleyball champ",
    "The knight who says ni!",
    "Gazer of many stars",
    "The one who thirsts in the deep",
    "Taker of things before dangerous parts",
    "Reader of the map",
    "Herald of the fallen",
    "The breaker of chains",
    "The one who knocks"
  ];

  const updateUrl = chosenTab => {
    safeWindow().history.replaceState(
      "",
      "",
      `${safeWindow().location.pathname}?tab=${chosenTab}`
    );
  };
</script>

<style>
  .profile {
    flex-flow: column;
    max-width: 720px;
    margin: 0 auto 0 auto;
  }

  .profile :global(.user-svg) {
    flex: 1;
    min-width: 75px;
    max-width: 200px;
    height: 100%;
    border: var(--root-border);
    border-radius: 50%;
    padding: 16px;
    margin-right: 24px;
  }

  header {
    display: flex;
    flex: 1;
    max-width: var(--max-width);
    margin: auto;
    justify-content: space-around;
    margin-bottom: 48px;
  }

  aside {
    display: flex;
    flex-flow: column;
  }

  h2 {
    text-align: center;
  }
</style>

<svelte:head>
  <title>Your profile - Turning Point Tales</title>
</svelte:head>

<section class="profile">
  <header>
    <aside>
      <h2 class="fs-block">{$session.user.firstName}</h2>
      <i>"{sample(catchyProfileSayings)}"</i>
    </aside>
  </header>

  <Tabs onTabSwitch="{updateUrl}" selectedTab="{$page.query.tab}">
    <TabList on:tabSelected="{updateUrl}">
      <Tab name="settings">Settings</Tab>
    </TabList>

    <TabPanel>
      <Settings />
    </TabPanel>
  </Tabs>

</section>
