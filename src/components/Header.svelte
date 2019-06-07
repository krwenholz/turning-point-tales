<script>
  import Logo from './icons/Logo.html';
  import { stores } from '@sapper/app';

  const { session } = stores();
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
    padding: 16px 0 16px 0;
    text-decoration: none;
    align-items: center;
  }

  a:visited {
    color: inherit;
  }

  h2 { margin: 0 0 0 8px; }

  :global(svg) {
    width: 24px;
  }

  .logo {
    display: flex;
    flex-flow: row;
  }

  .logo:hover {
    font-weight: normal;
  }

  span {
    margin-left: 8px;
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
      <h2> Turning Point Tales </h2>
    </a>
    {#if $session.user}
    <div class="user-block">
      <img class="thumbnail" src={$session.user.patreonThumbUrl} alt="{$session.user.firstName}">
      <div class="menu">
        <h3 class="tier">{$session.user.firstName}</h3>
        <ul>
          <li><a href='auth/logout'>Logout</a></li>
          <li><a href='https://www.patreon.com/join/turningpointtales/checkout'>Adjust contribution</a></li>
        </ul>
      </div>
    </div>
    {:else}
    <a data-cy="test-login-hook" href='/user/login' class="nav-vert">
      <span>Login</span>
    </a>
    {/if}
  </nav>
</header>
