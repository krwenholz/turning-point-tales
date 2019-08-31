<script>
  import * as sapper from '@sapper/app';
  import User from 'src/components/icons/User.html';
  import { Tabs, Tab, TabList, TabPanel } from "src/components/Tabs";
  import { Customer } from "./Stripe";
  import Notifications from './Notifications.svelte';
  import Settings from './Settings.svelte';

  const { page, session } = sapper.stores();

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
  <title>Editor?</title>
</svelte:head>

<section class='profile'>

  <header>
    <User className='user-svg'/>
    <aside>
      <h2>{$session.user.firstName}</h2>
      <span>Lorem ipsum dolor sit amet </span>
    </aside>
  </header>

  <Tabs>
    <TabList>
      <Tab> Notifications </Tab>
      <Tab> Settings </Tab>
    </TabList>

    <TabPanel>
      <Notifications/>
    </TabPanel>

    <TabPanel>
      <Settings/>
    </TabPanel>
  </Tabs>

</section>

<Customer></Customer>
