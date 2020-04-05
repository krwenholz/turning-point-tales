<script>
  import { setDynamicInterval } from "../lib/DynamicInterval";
  import { createEventDispatcher } from "svelte";
  const { floor, random } = Math;
  const dispatch = createEventDispatcher();

  export let jitter = 0;
  export let typedText = "";
  export let text = "";
  export let showTypingAnimation = true;
  export let typingSpeed = 0;
  export let paragraphPause = 0;

  let interval = null;

  $: if (text) {
    if (interval === null) startTyping();
    if (!showTypingAnimation) typeWithoutAnimation();
    else if (interval.stopped()) interval.stop(() => startTyping());
  }

  const typeWithoutAnimation = () => {
    skipTyping();
  };

  const getTypingSpeed = () => {
    return typingSpeed + floor(random() * jitter);
  };

  const isLinebreak = char => {
    return char.match(/<br/);
  };

  const getChars = () => {
    return text
      .join("\n")
      .split("")
      .map(char => char.replace(/\n/, "<br/>"));
  };

  export const skipTyping = () => {
    if (typedText === text) return;

    typedText = getChars().join(""); // clear before event loop;

    interval.stop(() => {
      typedText = getChars().join(""); // clear after event loop;
      dispatch("end");
    });
  };

  const typingEnd = () => interval.stop(() => dispatch("end"));

  export const startTyping = () => {
    typedText = "";

    let chars = getChars();

    // really need to find a simpler way to do this...
    interval = setDynamicInterval(() => {
      if (!chars.length) {
        return typingEnd();
      }

      const char = chars.shift();

      interval.set({
        time: isLinebreak(char) ? paragraphPause : getTypingSpeed()
      });

      typedText = typedText + char;
    }, getTypingSpeed());
  };
</script>

{#if typedText}
  {@html typedText}
{/if}
