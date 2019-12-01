<script>
  const { goto } = sapper;
  const { session } = sapper.stores();
  import * as sapper from "@sapper/app";
  import Button from "src/components/Button.svelte";
  import { axios } from "src/lib/axios";

  const deleteUser = async () => {
    try {
      await axios.delete("/api/user/", {
        params: {
          email: $session.user.email
        }
      });

      window.location.href = "/landing"; // since we deleted, need hard page refresh
    } catch (error) {
      alert(error);
    }
  };
</script>

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

<!--<h3>Hey, {$session.user.firstName}!</h3>-->

<!--<section class="text">-->
<!--  <p>Sometimes the adventure needs to end. If that's the case for you, You can request-->
<!--  to delete your user here. If there's anything we can do to keep you around, please hit-->
<!--  us up at <a href="mailto:support@turningpointtales.com">support@turningpointtales.com</a>.</p>-->

<!--  <form action="/api/user/destroy" method="POST">-->
<!--    <input type="hidden" name="_csrf" value="{csrf}">-->
<!--    <input type="hidden" name="email" value="{$session.user.email}">-->
<!--    <Button-->
<!--      type="submit"-->
<!--      text="Delete my user"-->
<!--      />-->
<!--  </form>-->
<!--</section>-->
