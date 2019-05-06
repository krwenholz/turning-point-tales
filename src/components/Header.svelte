<script>
  import Logo from './icons/Logo.html';
  import * as sapper from '@sapper/app';

  const { session } = sapper.stores();
  // TODO(kyle): This may not be working. I don't understand the new stores very well, but
  // I think I'm grabbing the user out of the session store here (which may be null). That
  // should get us subscribed, maybe.
  // https://github.com/sveltejs/sapper/commit/bca88831dab9f8a3ff38c56e68229e7b3d63d3f1
  let user = session.user;
</script>

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

<header>
  <nav>
    <a class="logo" href='/'>
      <Logo />
      <span> Turning Point Tales </span>
    </a>
    {#if user}
    <div class="user-block">
      <img class="thumbnail" src={user.patreonThumbUrl} alt="{user.firstName}">
      <div class="menu">
        <h3 class="tier">{user.firstName} the {user.tier}</h3>
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
