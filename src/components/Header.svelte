<script>
  import Logo from "./icons/Logo.html";
  import { stores } from "@sapper/app";

  const { session } = stores();
</script>

<style>
  header {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--root-color-background);
  }

  nav {
    flex: 1;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid currentColor;
  }

  nav > * {
    padding: 16px 0 16px 0;
    text-decoration: none;
    align-items: center;
  }

  a:visited {
    color: inherit;
  }

  h1 {
    font-size: var(--root-font-size-md);
    margin: 0 0 0 8px;
  }

  hr {
    height: 80%;
  }

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
    margin-left: 16px;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-content: center;
  }

  .user-block a:hover {
    font-weight: bold;
  }

  .user-block > * {
    margin-left: 10px;
  }

  .user-block > *:first-child {
    margin-left: 0;
  }

  @media only screen and (max-width: 700px) {
    .user-name,
    .user-name + hr {
      display: none;
    }
  }

  @media only screen and (max-width: 450px) {
    .user-block {
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }

    .user-block > * {
      margin: 5px 0 5px 0;
    }

    hr {
      width: 80%;
    }
  }
</style>

<header>
  <nav>
    <a class="logo" href="/">
      <Logo />
      <h1>Turning Point Tales</h1>
    </a>
    {#if $session.user}
      <div class="user-block">
        <span data-cy="user-name" class="user-name">{$session.user.firstName}</span>
        <hr />
        <a href="/user/profile">Profile and settings</a>
        <hr />
        <a href="/api/user/logout">Logout</a>
      </div>
    {:else}
      <a data-cy="test-login-hook" href="/user/login" class="nav-vert">
        <span>Login</span>
      </a>
    {/if}
  </nav>
</header>
