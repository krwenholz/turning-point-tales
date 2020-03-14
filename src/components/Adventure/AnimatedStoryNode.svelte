<script>
  import yaml from "js-yaml";

  export let idx = {};
  export let story = {};
  export let selectedIdx = undefined;
  export let scrollTo = () => {};
  export let parent;

  let self = {};
  let fadeInBorder = false;

  const scrollIntoView = node => ({
    update: () => {
      if (selectedIdx !== idx) {
        return (fadeInBorder = false);
      }
      parent.scrollTo({ top: self.offsetTop - scrollTo(), behavior: "smooth" });
      setTimeout(() => (fadeInBorder = true), 100);
    }
  });
</script>

<style>
  pre {
    padding-left: 16px;
  }

  @keyframes fadeInBorder {
    0% {
      box-shadow: -7px 0px 0px -8px var(--root-call-to-action);
    }
    100% {
      box-shadow: -7px 0px 0px -4px var(--root-call-to-action);
    }
  }

  .fadeInBorder {
    animation: 0.6s ease-in fadeInBorder forwards;
  }
</style>

<pre
  bind:this="{self}"
  class:fadeInBorder
  class="{story.start && selectedIdx === 0 ? '' : 'blur'}"
  use:scrollIntoView="{selectedIdx}"
>
  {yaml.safeDump(story)}
</pre>
