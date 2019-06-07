<script>
  import { onMount } from 'svelte';
  import { fetchCsrf } from '../../lib/client/csrf';

  let csrf;
  let password;
  let confirmPassword;

  onMount(() => csrf = fetchCsrf);

  $: if(password !== confirmPassword) {
    document.getElementById('confirm_password').setCustomValidity('Passwords must match.');
  };

  const handleSubmit = () => {
    const data = new URLSearchParams();

    fetch('/auth/new', {
      method: 'post',
      body: data,
    }).then((response) => {
      alert(response);
    });
  };
</script>

<style>
</style>

<!-- TODO(kyle): Need to add make form post async and on response we process and display
  the email setup info -->

<h2>Let's create your user</h2>

<p>First please enter your email and the password you want to use.</p>

<form  on:submit|preventDefault={handleSubmit}>
  <input type="hidden" name="_csrf" value="{csrf}">
  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email">

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" minlength="8" maxlength="32" value={password}>

  <label for="confirm_password">Confirm password:</label>
  <input type="password" id="confirm_password" name="confirm_password" value={confirmPassword}>

  <button type="submit">Submit</button>
</form>

