<script>
  import { onMount } from 'svelte';
  import { fetchCsrf } from '../../lib/client/csrf';

  let csrf;

  onMount(() => csrf = fetchCsrf());
</script>

<style>
</style>

<form action="/auth/verify_login" method="POST">
  <input type="hidden" name="_csrf" value="{csrf}">

  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email">

  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

  <button type="submit">Submit</button>
</form>
