<script>
  import * as sapper from '@sapper/app';
  import { fade } from 'src/lib/Transition';
  import { axios } from 'src/lib/axios';
  import { statusTracking } from 'src/lib/stores/status-tracking';
  import { Input, Form, Checkbox } from 'src/components/Form';
  import Button from 'src/components/Button.svelte';
  import FAQ from 'src/routes/faq.svelte';

	const { page } = sapper.stores();
	const { goto } = sapper;

	let form;
	let confirmPasswordElement;
	let firstName = '';
	let lastName = '';
	let email = '';
  let password = '';
  let confirmPassword = '';
  let tos = false;
  let errorMsg = '';
  let [submission, track] = statusTracking();

  const validateForm = () => {
    if (confirmPassword !== password) {
      confirmPasswordElement.setCustomValidity('Passwords must match.');
    } else {
      confirmPasswordElement.setCustomValidity('');
    }

    return form.checkValidity();
  }

  const handleSubmit = track(async () => {

    if (!validateForm()) return;

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

  p {
    text-align: left;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  :global(.checkbox) {
    margin: 0 8px 16px 0;
  }

  .form-group {
    display: flex;
    align-items: center;
  }

  .form-group :global(.input) {
    margin-bottom: 0;
  }

  :global(.form-group input[type='checkbox']) {
    margin-right: 16px;
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

  <p>Creating an account grants you access to the entire library of adventures.
  We use your email and name, which we never share with anyone else, to personalize the
  experience and send you exciting updates. In lieu of sharing your data and browsing with
  a third party, we handcraft some interesting ads or let you skip those entirely with a
  paid subscription.</p>

  <p>More questions? Check out our <a href="/faq">FAQ</a>.</p>
</section>

<section class="form text">
  <Form on:submit={handleSubmit} bind:this={form}>
    {#if errorMsg}
      <span class='error form-group'>
        {errorMsg}
      </span>
      <br/>
    {/if}

    <label for="firstName">First name</label>
    <Input
      id="firstName"
      type='text'
      on:input={e => firstName = e.target.value}
      placeholder='First Name'
      required
    />

    <label for="firstName">Last name</label>
    <Input
      id="lastName"
      type='text'
      on:input={e => lastName = e.target.value}
      placeholder='First Name'
      required
    />

    <label for="email">Email</label>
    <Input
      id="email"
      type='email'
      on:input={e => email = e.target.value}
      placeholder='First Name'
      required
    />

    <label for="password">Password</label>
    <Input
      id="password"
      type='password'
      on:input={e => password = e.target.value}
      placeholder='password'
      required
    />

    <label for="confirmPassword">Confirm your password</label>
    <Input
      bind:this={confirmPasswordElement}
      id="confirmPassword"
      type='password'
      on:input={e => confirmPassword = e.target.value}
      placeholder='confirm password'
      required
    />

    <div class='form-group'>
      <Input
        type="checkbox"
        id="tos_and_privacy"
        name="tos_and_privacy"
        required
      />
      <label for="tos_and_privacy">
        I agree to the
        <a href="/tos">Terms of Service</a>
        and
        <a href="/privacy">Privacy Policy</a>.
      </label>
    </div>

    <Button
      isSubmitting={$submission.isPending}
      type="submit"
    >
      Sign up
    </Button>
  </Form>
</section>

<section>
  <p>If you already have an account with us, you can log in
  <a href="/user/login">here</a>.</p>
</section>
