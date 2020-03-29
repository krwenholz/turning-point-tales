<script>
  import * as sapper from "@sapper/app";
  import { axios } from "src/lib/axios";
  import { fade } from "src/lib/Transition";
  import { statusTracking } from "src/lib/status-tracking";
  import Form from "src/components/Form";
  import Input from "src/components/Input";
  import Button from "src/components/Button.svelte";
  import FAQ from "src/routes/faq.svelte";

  const { page, session } = sapper.stores();
  const { goto } = sapper;

  let form;
  let confirmPasswordElement;
  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  let confirmPassword = "";
  let tos = false;
  let errorMsg = "";
  let [submission, track] = statusTracking();

  const validateForm = () => {
    if (confirmPassword !== password) {
      confirmPasswordElement.setCustomValidity("Passwords must match.");
    } else {
      confirmPasswordElement.setCustomValidity("");
    }

    return form.checkValidity();
  };

  const handleSubmit = track(async () => {
    if (!validateForm()) return;

    try {
      await axios.post("/api/user/new", {
        firstName,
        lastName,
        email,
        password
      });

      // Populate the session, because we don't always get a full page refresh.
      const sessionResponse = await axios.get("/api/user/session");
      if (sessionResponse.data) session.set(sessionResponse.data);

      window.location.href = "/";
    } catch ({ response }) {
      errorMsg = `Unable to create your account. Please check your spelling and formatting. If you already have an account, please request a password reset using the login page.`;
    }
  });
</script>

<style>
  .user-new {
    max-width: 720px;
    margin: auto;
    --spacing: 16px;
    --spacing-large: 32px;
  }

  p {
    text-align: left;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  :global(input[type="checkbox"]) {
    margin-right: 16px;
  }

  label {
    display: flex;
    flex-flow: column;
    margin-top: var(--spacing)
  }

  label :global(input) {
    margin-top: 8px;
  }

  .form-group {
    display: flex;
    align-items: center;
    margin-top: var(--spacing);
  }

  .form-group label {
    display: inline-block;
    margin-top: 0;
  }

  :global(.button) {
    margin-top: var(--spacing-large);
  }
</style>

<svelte:head>
  <title>User Creation</title>
</svelte:head>

<section class="user-new">
  {#if $page.query.error === 'unknown'}
    <article class="errors">
      <p>
        An unknown error occurred! Please try again or contact
        <a href="mailto:support@turningpointtales.com">
          support@turningpointtales.com
        </a>
        .
      </p>
    </article>
  {/if}

  <article>
    <h1>Let's create your user!</h1>

    <p>
      Creating an account grants you access to the entire library of adventures.
      We use your email and name, which we only share for things like payments,
      to personalize the experience and send you exciting updates. In lieu of
      sharing your data and browsing with a third party, we handcraft some
      interesting ads or let you skip those entirely with a paid subscription.
    </p>

    <p>
      More questions? Check out our
      <a href="/faq">FAQ.</a>
    </p>
  </article>

  <Form on:submit="{handleSubmit}" bind:this="{form}">
    {#if errorMsg}
      <span class="error form-group">{errorMsg}</span>
      <br />
    {/if}

    <label>
      First Name
      <Input
        id="firstName"
        type="text"
        on:input="{e => (firstName = e.target.value)}"
        placeholder="First Name"
        required
      />
    </label>

    <label>
      Last Name
      <Input
        id="lastName"
        type="text"
        on:input="{e => (lastName = e.target.value)}"
        placeholder="Last Name"
        required
      />
    </label>

    <label>
      Email
      <Input
        id="email"
        type="email"
        on:input="{e => (email = e.target.value)}"
        placeholder="Email"
        required
      />
    </label>

    <label>
      Password
      <Input
        id="password"
        type="password"
        on:input="{e => (password = e.target.value)}"
        placeholder="Password"
        required
      />
    </label>

    <label>
      Confirm Your Password
      <Input
        bind:this="{confirmPasswordElement}"
        id="confirmPassword"
        type="password"
        on:input="{e => (confirmPassword = e.target.value)}"
        placeholder="Confirm Your Password"
        required
      />
    </label>

    <div class="form-group">
      <Input
        type="checkbox"
        id="tos_and_privacy"
        name="tos_and_privacy"
        required
      />
      <label for="tos_and_privacy">
        I agree to the
        <a href="/tos">&nbsp;Terms of Service&nbsp;</a>
        and
        <a href="/privacy">&nbsp;Privacy Policy.</a>
      </label>
    </div>

    <Button isSubmitting="{$submission.isPending}" type="submit">
      Sign up
    </Button>
  </Form>

  <article>
    <p>
      If you already have an account with us, you can log in
      <a href="/user/login">here.</a>
    </p>
  </article>
</section>
