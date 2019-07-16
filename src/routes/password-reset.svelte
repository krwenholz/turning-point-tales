<script>
  import * as sapper from '@sapper/app';
  import { fade } from '../lib/Transition';
  const { page } = sapper.stores();
  import { axios } from 'src/lib/axios';
  import { statusTracking } from '../lib/stores/status-tracking';
  import Button from 'src/components/Button.svelte';
  import Input from 'src/components/Form/Input.svelte';

  let email    = '';
  let password = '';
  let errorMsg = '';
  let successMsg = ''
  let [submission, track] = statusTracking();

  const handleResetPassword = track(async () => {
    try {
      await axios.post('/api/password-reset', { email });
      successMsg = 'You have been sent an email to reset your password. Check your inbox';
    }
    catch ({ response }) {
      errorMsg = 'Could not find the specified email. Please try again.'
    }
  });

  const handleSetNewPassword = track(async () => {
    try {
      await axios.post('/api/password-reset', {
        token: $page.query.token,
        id: parseInt($page.query.id),
        password,
      });

      successMsg = 'You have been sent an email to reset your password. Check your inbox';
    }
    catch ({ response }) {
      errorMsg = 'Unable to update your password, please check for spelling errors.'
    }
  });
</script>

<style>
  form {
    display: flex;
    flex-flow: column;
    max-width: 60ch;
    margin: auto;
  }

  .error-msg {
    color: red;
    margin: 8px 0 8px 0;
  }

  .password-reset :global(.button) {
    width: 100%;
    margin: 32px auto auto auto;
  }

  .password-reset :global(.input) {
    width: 100%;
  }

</style>

<form class='password-reset'>
  {#if successMsg}
    <h3 in:fade>{ successMsg }</h3>
  {:else if $page.query.token}
    <h2>New Password</h2>
    <small>
      Try not to forget this one!
    </small>
    <span class='error-msg'>{errorMsg}</span>
    <Input
      type='password'
      on:input={e => password = e.target.value}
      placeholder='super-secret-password'
    />
    <Button
      on:click={handleSetNewPassword}
      disabled={!password.length}
      isSubmitting={$submission.isPending}
    >
      Submit
    </Button>
  {:else}

    <h2>Enter your email</h2>
    <small>
      We'll send you a link so you can reset it.
      Don't worry, we all forget things sometimes.
    </small>
    <Input type='email' on:input={e => email = e.target.value} placeholder='email@example.com' />
    <span class='error-msg'>{errorMsg}</span>
    <Button
      on:click={handleResetPassword}
      disabled={!email.length}
      isSubmitting={$submission.isPending}
    >
      Submit
    </Button>
  {/if}
</form>
