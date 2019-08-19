<script>
  import Adventure from 'src/components/Adventure';
  import * as sapper from '@sapper/app';
  import { mainAdventure } from 'src/lib/stores/browserStore/main-adventure';

  const { page } = sapper.stores();

  const story = {
    id: 2,
    author: "Kristopher C. Paulsen",
    title: "A Story with Consequences",
    paid: true,
    created: "2019-03-02T02:18:53.192Z",
    modified: "2019-03-02T02:18:53.192Z",
    tags: ["funny", "existential"],
    preview: "Life onboard an intergalactic starship can be pretty dull",
    previewPrompt: "Maybe it's time for a change...",
    content: {
      start: {
        text: [
          "It's a monday, and you're sleeping, what should you do?"
        ],
        decisions: [
          {
            storyNode: "breakfast",
            label: "wake up immediately and start my day, no time to waste.",
          },
          {
            storyNode: "breakfast",
            consequences: ['rested'],
            label: "Hit snooze, then finally wake up. I want to be rested",
          }
        ]
      },
      breakfast: {
        text: [
          'You could really go for a meal before you start your day...'
        ],
        decisions: [
          {
            storyNode: "how_to_travel",
            label: "coffee",
            consequences: ['rested'],
          },
          {
            storyNode: "how_to_travel",
            label: "avocado toast",
          }
        ]
      },
      how_to_travel: {
        text: [
          "You need to get to work, I hope you're rested and ready for the day!"
        ],
        decisions: [
          {
            storyNode: "drive_car",
            label: "Drive car",
            requires: ['rested'],
          },
          {
            storyNode: "walk",
            label: "Guess you'll walk",
          }
        ]
      },
      drive_car: {
        text: [
          "Yay, cars are fun"
        ],
        decisions: [
          {
            storyNode: "breakfast",
            label: "well, time to start over",
          },
        ]
      },
      walk: {
        text: [
          "Walking sucks, and so does exercise"
        ],
        decisions: [
          {
            storyNode: "breakfast",
            label: "well, time to start over",
          },
        ]
      },
    },
  }
</script>

<style>
  :global(.adventure) {
    margin: auto;
    width: 90%;
    max-width: 80ch;
  }
</style>

<Adventure
  story={story.content}
  store={mainAdventure()}
  className='adventure'
  storyNode={'start'}
/>
