<header>
  <nav>
    <a class="logo" href='/'>
      <Logo />
      <span> Turning Point Tales </span>
    </a>
    {#if $user}
    <div class="user-block">
      <img class="thumbnail" src={$user.patreonThumbUrl} alt="{$user.firstName}">
      <div class="menu">
        <h3 class="tier">{$user.firstName} the {$user.tier}</h3>
        <ul>
          <li><a href='auth/logout'>Logout</a></li>
          <li><a href='https://www.patreon.com/join/turningpointtales/checkout'>Adjust contribution</a></li>
        </ul>
      </div>
    </div>
    {:else}
    <a href='auth/initiate_login' class="nav-vert">
      <span>Login with Patreon</span>
    </a>
    {/if}
  </nav>
</header>

<style>
  header {
    display: flex;
    width: 100%;
    justify-content: space-evenly; align-items: center;
    background-color: var(--root-color-background);
  }

  nav {
    flex: 1;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
  }

  nav > * {
    padding: var(--root-vertical-spacing);
    text-decoration: none;
    align-items: center;
  }

  .nav-vert {
    float: left;
    color: var(--root-color-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .user-block {
    margin-right: 16px;
  }

  .user-block:hover .menu, .user-block:active .menu {
    left: auto;
    right: 16px;
  }

  .menu {
    background-color: var(--root-color-background);
    border-radius: var(--root-border-radius);
    border: 1px solid gray;
    position: absolute;
    left: -999em;
    margin-top: 5px;
    padding: 5px;
  }

  .menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .menu li {
    border-bottom: 1px solid #ccc;
  }

  .menu li:last-child {
    border: none;
  }

  .menu li:hover {
    font-weight: bold;
  }

  .logo {
    display: flex;
    flex-flow: row;
  }

  .logo span {
    margin-left: 16px;
  }

  .thumbnail {
    display: block;
    height: 44px;
    width: 44px;
    border-radius: 50%;
  }
</style>

<script>
  import Logo from './icons/Logo.html';
  import { store } from '@sapper/app';

  // TODO(kyle): This is the broken bit, it used to use "this" but we don't have access to
  // "this" outside of the good old sapper functions, need to figure out what exports that
  // store and grab it. Looks like it may be here:
  // https://github.com/sveltejs/sapper/blob/c99b787632acd33efec38e3fcc0a69884b54f20b/runtime/src/app/app.ts
  let user = store.get().user;
</script>
