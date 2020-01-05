<script>
  import { stores } from "@sapper/app";

  const { session } = stores();

  console.log($session);
</script>

<button on:click={() => alert($session.user.id)}>clickme</button>