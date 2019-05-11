<script>
  import { setDynamicInterval } from '../lib/DynamicInterval';
  import { createEventDispatcher } from 'svelte';
  const { floor, random } = Math;
  const dispatch = createEventDispatcher();

  export let jitter = 0;
  export let typedText = '';
  export let text = '';
  export let typingSpeed = 0;
  export let linebreakPause = 0;
  export let paragraphPause = 0;

  let interval = null;

  $: if(text) {
     if(interval === null) startTyping();
     else if (interval.stopped()) interval.stop(() => startTyping());
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

  export const skipTyping = () => {
    typedText = getChars().join('');

    interval.stop(() => {
      typedText = getChars().join('');
      dispatch('end');
    });
  };

  const typingEnd = (interval) => interval.stop(() => dispatch('end'));

  export const startTyping = () => {
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
