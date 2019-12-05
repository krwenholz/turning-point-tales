<script>
  import { onMount } from "svelte";
  import { Logger } from "src/lib/client/logger";

  let stats = {};

  onMount(() => {
    fetch("/experimental/jeff/data")
      .then(response => {
        if (response.ok) return response.json();
        throw Error("Failed to fetch stats");
      })
      .then(response => {
        stats = response;
      })
      .catch(error => {
        Logger.error("Failed to fetch stats", error);
        stats = `Error fetching data!`;
      });
  });
</script>

<pre>{JSON.stringify(stats, null, 2)}</pre>
