<script>
  import * as sapper from '@sapper/app';
  import { fade } from 'src/lib/Transition';
  import { axios } from 'src/lib/axios';
  import { statusTracking } from 'src/lib/stores/status-tracking';
  import { Input, Form, Checkbox } from 'src/components/Form';
  import Button from 'src/components/Button.svelte';

	const { page } = sapper.stores();
	const { goto } = sapper;

	let firstName = '';
	let lastName = '';
	let email = '';
  let password = '';
  let confirmPassword = '';
  let tos = false;
  let errorMsg = '';
  let [submission, track] = statusTracking();

  const handleSubmit = track(async () => {
    try {
      await axios.post('/api/user/new', {
        firstName,
        lastName,
        email,
        password,
      });

      window.location.href = '/'; //hard refresh needed to propogate login
    }
    catch ({ response }) {
      errorMsg = `Unable to create your account. Please check for spelling and formatting.`;
    }
  });
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

  @media only screen and (max-width: 45rem) {
		.text {
			max-width: 75%;
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
  <Form>

    {#if errorMsg}
      <span class='error form-group'>
        {errorMsg}
      </span>
    {/if}

    <label for="firstName">First name</label>
    <Input
      id="firstName"
      type='text'
      on:input={e => firstName = e.target.value}
      placeholder='First Name'
    />

    <label for="firstName">Last name</label>
    <Input
      id="lastName"
      type='text'
      on:input={e => lastName = e.target.value}
      placeholder='First Name'
    />

    <label for="email">email</label>
    <Input
      id="email"
      type='email'
      on:input={e => email = e.target.value}
      placeholder='First Name'
    />

    <label for="password">password</label>
    <Input
      id="password"
      type='password'
      on:input={e => password = e.target.value}
      placeholder='password'
    />

    <label for="confirmPassword">Confirm your password</label>
    <Input
      id="confirmPassword"
      type='password'
      on:input={e => confirmPassword = e.target.value}
      placeholder='confirm password'
    />

    <div>
      <Checkbox
        id="tos_and_privacy"
        name="tos_and_privacy"
        className="form-group"
      >
      <span for="tos_and_privacy">
        I agree to the
        <a href="/tos">Terms of Service</a>
        and
        <a href="/privacy">Privacy Policy</a>.
      </span>
      </Checkbox>
    </div>

    <Button
      on:click={handleSubmit}
      isSubmitting={$submission.isPending}
    >
      Sign up
    </Button>
  </Form>
</section>
