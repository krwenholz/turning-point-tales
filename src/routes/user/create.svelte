<script>
  import { onMount } from 'svelte';
  import { fetchCsrf } from '../../lib/client/csrf';
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
</style>

<svelte:head>
  <title>User Creation</title>
</svelte:head>

{#if $page.query.error === 'unknown'}
  <p>An unknown error occurred submitting your request. Please try again or contact
  <a href="mailto:support@turningpointtales.com">support@turningpointtales.com</a>.</p>
{/if}

<h2>Let's create your user!</h2>

<p>We'll need a name to call you (never shared publicly), an email to contact you at,
and a password for you to log in with.</p>

<p>By creating an account and joining the adventure, you agree to our
<a href="/tos">Terms of Service</a> and <a href="/privacy">Privacy Policies</a>,
which include the right to give you the non-edible kind of cookies for logins. (Don't
worry, we won't share these cookies with anyone else.)</p>

<form action="/auth/new" method="POST">
  <input type="hidden" name="_csrf" value="{csrf}">

  <label for="firstName">First name:</label>
  <input type="text" id="firstName" name="firstName" required>

  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Password (8-32 characters):</label>
  <!-- TODO(kyle): minlength isn't working -->
  <input type="password" id="password" name="password" minlength=8 maxlength=32 required bind:value={password}>

  <label for="confirmPassword">Confirm password:</label>
  <input bind:this={confirmPasswordElement} bind:value={confirmPassword} type="password" id="confirmPassword" name="confirmPassword" required>

  <button type="submit">Submit</button>
</form>
