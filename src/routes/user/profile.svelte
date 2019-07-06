<script>
  import Button from '../../components/Button.svelte';
  import { fetchCsrf } from '../../lib/client/csrf';
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';

	const { session } = stores();

  let csrf;

  onMount(() => csrf = fetchCsrf());
</script>

<style>
  .text {
    margin: auto;
		max-width: 38rem;
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

<h3>Hey, {$session.user.firstName}!</h3>

<p>Let's set up cool things.</p>

<section class="text">
  <p>Sometimes the adventure needs to end. If that's the case for you, You can request
  to delete your user here. If there's anything we can do to keep you around, please hit
  us up at <a href="mailto:support@turningpointtales.com">support@turningpointtales.com</a>.</p>

  <form action="/auth/destroy" method="POST">
    <input type="hidden" name="_csrf" value="{csrf}">
    <input type="hidden" name="email" value="{$session.user.email}">
    <Button
      type="submit"
      text="Delete my user"
      />
  </form>
</section>
