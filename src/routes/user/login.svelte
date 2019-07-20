<script>
  import Button from '../../components/Button.svelte';
  import { fetchCsrf } from '../../lib/client/csrf';
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';

	const { page } = stores();

  let csrf;

  onMount(() => csrf = fetchCsrf());
</script>

<style>
  section {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .text {
    margin: auto;
		max-width: 38rem;
  }

  form {
    padding: 16px;
    display: flex;
    flex-flow: column;
    min-width: 20rem;
    border: 1px solid gray;
    border-radius: var(--root-border-radius);
  }

  input {
    border: 1px solid gray;
    border-radius: var(--root-border-radius);
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 45rem) {
		.text {
			max-width: 75%;
		}

    form {
      max-width: 100%
    }
  }
</style>

{#if $page.query.error === 'unknown'}
<section class="errors text">
  <p>An unknown error occurred! Please try again or contact
  <a href="mailto:support@turningpointtales.com">support@turningpointtales.com</a>.</p>
</section>
{/if}

<section class="text">
  <h1>Welcome!</h1>

  <p>If you're new, go ahead and <a href="/user/new">create an acocunt.</a></p>

  <form action="/api/user/login" method="POST">
    <input type="hidden" name="_csrf" value="{csrf}">

    <label for="email">E-mail</label>
    <input type="email" id="email" name="email">

    <label for="password">Password</label>
    <input type="password" id="password" name="password">

    <Button type='submit'>Log in</Button>
    <span class='reset-text'>
      Forgot your password? Click <a data-cy="password-reset" href='/password-reset'>here</a>.
    <span/>
  </form>
</section>
