<script>
  import yaml from 'js-yaml';

  export let idx = {};
  export let story = {};
  export let selectedIdx = undefined;
  export let scrollTo = () => {};
  export let parent;

  let self = {};
  let unblur = false;

  const scrollIntoView = (node) => ({
    update: () => {
      if(selectedIdx !== idx) {
        return unblur = false;
      }
      parent.scrollTo({ top: self.offsetTop - scrollTo(), behavior: 'smooth' });
      setTimeout(() => unblur = true, 500);
    }
  });

</script>

<style>
  .blur {
    color: transparent;
    text-shadow: 0 0 4px rgba(0,0,0,0.5);
  }

  @keyframes unblur {
    0% {
      color: transparent;
      text-shadow: 0 0 4px rgba(0,0,0,0.5);
    }
    100% {
      color: inherit;
      text-shadow: 0 0 0px rgba(0,0,0,0);
    }
  }

  .unblur {
    animation: .7s ease-in unblur forwards;
  }
</style>

<pre
  bind:this={self}
  class:unblur
  class={story.start && selectedIdx === 0  ? '' : 'blur'}
  use:scrollIntoView={selectedIdx}
>
  {yaml.safeDump(story)}
</pre>
