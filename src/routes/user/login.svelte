<script>
  import Button from "../../components/Button.svelte";
  import Input from "../../components/Form/Input.svelte";
  import { fetchCsrf } from "../../lib/client/csrf";
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";

  const { page } = stores();

  let csrf;

  onMount(() => (csrf = fetchCsrf()));
</script>

<style>
  .login {
    width: 100%;
    margin: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .login :global(.button) {
    width: 100%;
    margin: 32px auto auto auto;
  }

  .reset-text {
    margin-top: 8px;
  }
</style>

{#if $page.query.error === 'unknown'}
  <section class="errors text">
    <p>
      An unknown error occurred! Please try again or contact
      <a href="mailto:support@turningpointtales.com">
        support@turningpointtales.com
      </a>
      .
    </p>
  </section>
{/if}

<section class="login">
  <h1>Welcome!</h1>

  <p>
    If you're new, go ahead and
    <a href="/user/new">create an account.</a>
  </p>

  <form action="/api/user/login" method="POST">

    <input type="hidden" name="_csrf" value="{csrf}" />

    <Input type="email" id="email" name="email">
      <span>email</span>
    </Input>

    <Input type="password" id="password" name="password">
      <span>Password</span>
    </Input>

    <Button type="submit">Log in</Button>
    <span class="reset-text">
      Forgot your password? Click
      <a data-cy="password-reset" href="/password-reset">here</a>
      .
      <span></span>
    </span>
  </form>
</section>
