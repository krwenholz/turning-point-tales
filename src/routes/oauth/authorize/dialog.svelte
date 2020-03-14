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

</style>

<h1>Hi {$session.user.firstName}!</h1>
<p>Amazon Alexa is requesting access to your account.</p>
<p>Do you approve?</p>

<form action="/oauth/authorize/decision" method="post">
  <input
    name="transaction_id"
    type="hidden"
    value="{$page.query.transactionId}"
  />
  <div>
    <input type="submit" value="Allow" id="allow" />
    <input type="submit" value="Deny" name="cancel" id="deny" />
  </div>
  <Button type="submit">Allow</Button>
  <Button type="submit">Deny</Button>
</form>
