<script>
  import * as sapper from "@sapper/app";
  import Button from "src/components/Button.svelte";
  import { axios } from "src/lib/axios";
  import { fetchCsrf } from "src/lib/client/csrf";
  import { logger } from "src/lib/client/logger";
  import { onMount } from "svelte";

  const { goto } = sapper;
  const { session } = sapper.stores();

  const deleteUser = async () => {
    try {
      await axios.delete("/api/user/", {
        params: {
          email: $session.user.email
        }
      });

      session.set({});
      window.location.href = "/?user=clear"; // since we deleted, need hard page refresh
    } catch (error) {
      alert(error);
    }
  };
</script>

<style>
  section {
    margin-bottom: 24px;
  }
</style>

<section>
  <p>
    Sometimes the adventure needs to end. If that's the case for you, You can
    request to delete your user here. If there's anything we can do to keep you
    around, please hit us up at
    <a href="mailto:support@turningpointtales.com">
      support@turningpointtales.com
    </a>
  </p>

  <Button on:click="{deleteUser}">DELETE</Button>
</section>
