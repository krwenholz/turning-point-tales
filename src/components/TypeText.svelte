<p ref:node>
    {#if typedText }
        {@html typedText }
    {/if}
</p>

<style>
  ref:node {
    width: 80ch;
    max-width: 90%;
  }
</style>

<script>
  import { setDynamicInterval } from '../lib/DynamicInterval';
  const { floor, random } = Math;

  export default {
    data() {
      return {
        jitter: 0,
        typedText: '',
        text: '',
        typingSpeed: 0,
        startTyping: false,
        linebreakPause: 0,
      };
    },
    onupdate({ current = {}, previous = {} }) {
      if(current.text !== previous.text ) {
        this.startTyping();
      }
    },
    methods: {
      getTypingSpeed() {
        return this.get().typingSpeed + floor(random() * this.get().jitter);
      },
      isLinebreak(char) {
        return char.match(/\<br/);
      },
      getChars() {
        return this.get().text
          .join('\n')
          .split('')
          .map(char => char.replace(/\n/, '<br/><br/>'))
      },
      skipTyping() {
        this.get().interval.stop(() => {

          this.set({
            typedText: this.getChars().join(''),
          });

          this.fire('typingEnd');
        });
      },
      startTyping() {
        this.set({ typedText: '' });
        let chars = this.getChars();

        // really need to find a simpler way to do this...
        const interval = setDynamicInterval(() => {
          if (!chars.length) {
            return this.typingEnd(interval);
          }

          const char = chars.shift();

          interval.set({
            time: this.isLinebreak(char) ? this.get().paragraphPause: this.getTypingSpeed()
          });

          this.set({
            typedText: this.get().typedText + char,
          });

        }, this.getTypingSpeed());

        this.set({ interval });
      },
      typingEnd(interval) {
        interval.stop();

        this.fire('typingEnd');
      }
    },
  };
</script>
