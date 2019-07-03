<script>
  import Button from '../../components/Button.svelte';
  import { fetchCsrf } from '../../lib/client/csrf';
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';

	const { page } = stores();

  let csrf;
  let confirmPasswordElement
  let password = '';
  let confirmPassword = '';

  $: if(confirmPasswordElement !== undefined) {
    if (password !== confirmPassword) {
      confirmPasswordElement.setCustomValidity('Passwords must match.');
    } else {
      confirmPasswordElement.setCustomValidity('');
    }
  }

  onMount(() => csrf = fetchCsrf());
</script>

<style>
  .text {
		margin: auto;
		max-width: 38rem;
  }

  section {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  form {
    padding: 16px;
    display: flex;
    flex-flow: column;
    border: 1px solid gray;
    border-radius: var(--root-border-radius);
  }

  input {
    border: 1px solid gray;
    border-radius: var(--root-border-radius);
    margin-bottom: 1rem;
  }

  #tos_and_privacy {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 45rem) {
		.text {
			max-width: 75%;
		}

    input {
      max-width: 100%
    }
  }
</style>

<svelte:head>
  <title>User Creation</title>
</svelte:head>

{#if $page.query.error === 'unknown'}
<section class="errors text">
  <p>An unknown error occurred! Please try again or contact
  <a href="mailto:support@turningpointtales.com">support@turningpointtales.com</a>.</p>
</section>
{/if}

<section class="preamble text">
  <h1>Let's create your user!</h1>

  <p>We'll need a name to call you (never shared publicly), an email to contact you at,
  and a password for you to log in with.</p>
</section>

<section class="form text">
  <form action="/auth/new" method="POST">
    <input type="hidden" name="_csrf" value="{csrf}">

    <label for="firstName">First name</label>
    <input type="text" id="firstName" name="firstName" required>

    <label for="email">E-mail</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password (8-32 characters)</label>
    <!-- TODO(kyle): minlength isn't working -->
    <input type="password" id="password" name="password" minlength=8 maxlength=32 required bind:value={password}>

    <label for="confirmPassword">Confirm password</label>
    <input bind:this={confirmPasswordElement} bind:value={confirmPassword} type="password" id="confirmPassword" name="confirmPassword" required>

    <div>
      <input type="checkbox" id="tos_and_privacy" name="tos_and_privacy" required>
      <label for="tos_and_privacy">I agree to the <a href="/tos">Terms of Service</a> and
        <a href="/privacy">Privacy Policy</a>.</label>
    </div>

    <Button
      type="submit"
      text="Sign up"
      />
  </form>
</section>
