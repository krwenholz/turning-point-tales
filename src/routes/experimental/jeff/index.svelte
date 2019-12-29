<script>
  import yaml from "js-yaml";
  import { logger } from "src/lib/client/logger";
  import { onMount } from "svelte";

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
      .catch(err => {
        logger.error(err, "Failed to fetch stats");
        stats = `Error fetching data!`;
      });
  });
</script>

<pre>{yaml.safeDump(stats)}</pre>
