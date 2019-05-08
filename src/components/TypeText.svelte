<script>
  import { setDynamicInterval } from '../lib/DynamicInterval';
  import { createEventDispatcher } from 'svelte';
  const { floor, random } = Math;
  const dispatch = createEventDispatcher();

  let interval = {};
  export let jitter = 0;
  export let typedText = '';
  export let text = '';
  export let typingSpeed = 0;
  export let linebreakPause = 0;

  $: if(text){
    startTyping();
  }

  const getTypingSpeed = () => {
    return typingSpeed + floor(random() * jitter);
  };

  const isLinebreak = (char) => {
    return char.match(/<br/);
  };

  const getChars = () => {
    return text
    .join('\n')
    .split('')
    .map(char => char.replace(/\n/, '<br/><br/>'))
  };

  const skipTyping = () => {
    interval.stop(() => {
      typedText = getChars().join(''),
      dispatch('typingEnd');
    });
  };

  const startTyping = () => {
    typedText = '';
    let chars = getChars();

    // really need to find a simpler way to do this...
    interval = setDynamicInterval(() => {
      if (!chars.length) {
        return typingEnd(interval);
      }

      const char = chars.shift();

      interval.set({
        time: isLinebreak(char) ? paragraphPause: getTypingSpeed()
      });

      typedText = typedText + char;

    }, getTypingSpeed());
  };

  const typingEnd = (interval) => {
    interval.stop();

    dispatch('typingEnd');
  };
</script>

<style>
  .type-text {
    width: 80ch;
    max-width: 90%;
  }
</style>

<p class="type-text">
  {#if typedText }
  {@html typedText }
  {/if}
</p>
