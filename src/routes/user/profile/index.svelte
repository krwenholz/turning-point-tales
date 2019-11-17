<script>
  import * as sapper from "@sapper/app";
  import Notifications from "./Notifications.svelte";
  import Settings from "./Settings.svelte";
  import User from "src/components/icons/User.html";
  import { Customer } from "./Stripe";
  import { Tabs, Tab, TabList, TabPanel } from "src/components/Tabs";
  import { sample } from "lodash";

  const { page, session } = sapper.stores();

  const catchyProfileSayings = [
    "Slayer of slimes",
    "Betrayer of bards",
    "Pillager of the West Moors",
    "Island volleyball champ",
    "Gazer of many stars",
    "The one who thirsts in the deep",
    "Taker of things before dangerous parts",
    "Reader of the map"
  ];
</script>

<style>
  .profile {
    flex-flow: column;
    --max-width: 50vw;
  }

  .profile :global(.tabs) {
    margin: auto;
    min-height: 500px;
    max-width: 650px;
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
</style>

<svelte:head>
  <title>Your profile</title>
</svelte:head>

<section class="profile">

  <header>
    <aside>
      <h2>{$session.user.firstName}</h2>
      <span>{sample(catchyProfileSayings)}</span>
    </aside>
  </header>

  <Tabs>
    <TabList>
      <Tab name="adventurer">Adventurer</Tab>
      <Tab name="notifications">Notifications</Tab>
      <Tab name="settings">Settings</Tab>
    </TabList>

    <TabPanel>
      <Customer />
    </TabPanel>

    <TabPanel>
      <Notifications />
    </TabPanel>

    <TabPanel>
      <Settings />
    </TabPanel>
  </Tabs>

</section>
