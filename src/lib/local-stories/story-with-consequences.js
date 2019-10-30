export default {
  start: {
    text: [
      "It's a monday, and you're sleeping, what should you do?"
    ],
    decisions: [{
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
    decisions: [{
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
    decisions: [{
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
    decisions: [{
      storyNode: "start",
      label: "well, time to start over",
    }, ]
  },
  walk: {
    text: [
      "Walking sucks, and so does exercise"
    ],
    decisions: [{
      storyNode: "start",
      label: "well, time to start over",
    }, ]
  },
};