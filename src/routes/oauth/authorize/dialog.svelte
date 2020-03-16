<script>
  import Button from "src/components/Button.svelte";
  import Input from "src/components/Input";
  import { fetchCsrf } from "src/lib/client/csrf";
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";

  const { session, page } = stores();

  let csrf;

  onMount(() => (csrf = fetchCsrf()));
</script>

<style>
  section {
    align-items: center;
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
</style>

<section class="text">
  <h1>Hi {$session.user.firstName}!</h1>
  <p>Amazon Alexa is requesting access to your account.</p>
  <p>Do you approve?</p>

  <nav>
    <form action="/oauth/authorize/decision" method="post">
      <input type="hidden" name="_csrf" value="{csrf}" />
      <input
        name="transaction_id"
        type="hidden"
        value="{$page.query.transactionId}"
      />
      <input name="allow" id="allow" type="hidden" />
      <Button type="submit">Allow</Button>
    </form>

    <form action="/oauth/authorize/decision" method="post">
      <input type="hidden" name="_csrf" value="{csrf}" />
      <input
        name="transaction_id"
        type="hidden"
        value="{$page.query.transactionId}"
      />
      <input name="deny" id="deny" type="hidden" />
      <Button type="submit">Deny</Button>
    </form>
  </nav>
</section>
