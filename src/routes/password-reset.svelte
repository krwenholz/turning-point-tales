<style>
  :global(.password-reset) {
    width: 100%;
    max-width: 50ch;
  }

  :global(.password-reset .button) {
    width: 100%;
    margin: 32px auto auto auto;
  }

  :global(.password-reset .input) {
    width: 100%;
  }

  .error-msg {
    color: red;
    margin: 8px 0 8px 0;
  }

  a {
    text-align: left;
  }
</style>

<script>
  import * as sapper from "@sapper/app";
  import { fade } from "../lib/Transition";
  import { axios } from "src/lib/axios";
  import { statusTracking } from "../lib/stores/status-tracking";
  import { Input, Form } from "src/components/Form";
  import Button from "src/components/Button.svelte";

  const { page } = sapper.stores();

  let email = "";
  let password = "";
  let successMsg = "";
  let errorMsg = "";
  let [submission, track] = statusTracking();

  const handleSendResetEmail = track(async () => {
    try {
      await axios.post("/api/password-reset", { email });
      successMsg =
        "You have been sent an email to reset your password. Be sure to check your inbox.";
    } catch ({ response }) {
      errorMsg = "Could not find the specified email. Please try again.";
    }
  });

  const handleSetNewPassword = track(async () => {
    try {
      await axios.post("/api/password-reset", {
        token: $page.query.token,
        id: parseInt($page.query.id),
        password
      });

      successMsg = "Your password was succesfully reset!";
    } catch ({ response }) {
      errorMsg =
        "Unable to update your password, please check for spelling errors.";
    }
  });
</script>

<Form className="password-reset">
  {#if successMsg}
    <h3 in:fade>{successMsg}</h3>
    {#if $page.query.token}
      <a href="/user/login">Click here to login</a>
    {/if}
  {:else if $page.query.token}
    <h2>New Password</h2>
    <small>Try not to forget this one!</small>
    <span class="error-msg">{errorMsg}</span>
    <Input
      type="password"
      on:input="{e => (password = e.target.value)}"
      placeholder="fake-password-here" />
    <Button
      on:click="{handleSetNewPassword}"
      disabled="{!password.length}"
      isSubmitting="{$submission.isPending}">
      Submit
    </Button>
  {:else}
    <h2>Enter your email</h2>
    <small>
      We'll send you a link so you can reset it. Don't worry, we all forget
      things sometimes.
    </small>
    <Input
      type="email"
      on:input="{e => (email = e.target.value)}"
      placeholder="email@example.com" />
    <span class="error-msg">{errorMsg}</span>
    <Button
      on:click="{handleSendResetEmail}"
      disabled="{!email.length}"
      isSubmitting="{$submission.isPending}">
      Submit
    </Button>
  {/if}
</Form>
