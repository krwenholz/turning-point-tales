export default {
  start: {
    text: [
      "Lets help you learn about navigating stories, and branching through decisions.",
      "Choose an option below.",
    ],
    decisions: [{
        storyNode: 'option_a',
        label: 'Choose option a',
      },
      {
        storyNode: 'option_b',
        label: 'Choose option b',
      }
    ]
  },
  option_a: {
    text: [
      "Awesome, you chose 'option a'. That's a great option, way better than 'option b' (Can you believe that some people even choose that option?)",
      "At this point, we've started branching off in two different directions in our story, but we can always 'jump over' into another branch by linking a key with a decision",
      "If you want, you can jump over into the 'option b' timeline, else, continue on."
    ],
    decisions: [{
        storyNode: 'option_b',
        label: 'jump over into option b',
      },
      {
        storyNode: 'continue_on',
        label: 'continue onto!',
      }
    ]
  },
  option_b: {
    text: [
      "Awesome, you chose 'option a'. That's a great option, way better than 'option a' (Can you believe that some people even choose that option?)",

      "At this point, we've started branching off in two different directions in our story, but we can always 'jump over' into another branch by linking a key with a decision",

      "If you want, you can jump over into the 'option a' timeline, else, continue on.",
    ],
    decisions: [{
        storyNode: 'option_a',
        label: 'jump over into option a',
      },
      {
        storyNode: 'continue_on',
        label: 'continue on',
      }
    ]
  },
  continue_on: {
    text: [
      "Seems like all the decisions have ended up at one single branch.",
      "While nice to have, we don't have to go that route, they can diverge immensely."
    ],
    decisions: [{
        storyNode: 'go_left',
        label: 'go left',
      },
      {
        storyNode: 'go_right',
        label: 'go right',
      }
    ],
  },
  go_left: {
    text: [
      'We have to go deeper',
    ],
    decisions: [{
        storyNode: 'deeper_left',
        label: 'Go deeper left',
      },
      {
        storyNode: 'deeper_right',
        label: 'Go deeper right',
      }
    ]
  },
  go_right: {
    text: [
      'Lets see how deep this rabbit hole can go',
    ],
    decisions: [{
        storyNode: 'left_rabbit_hole',
        label: 'Go down the left rabbit hole',
      },
      {
        storyNode: 'right_rabbit_hole',
        label: 'Go down the right rabbit hole',
      }
    ]
  },
  deeper_left: {
    text: [
      "Okay, this is starting to get out of hand, your decision making priveleges  are behing revoked",
      "Sometimes this is cheesy, but it can be used for interesting narrative effects..."
    ],
    decisions: [{
      storyNode: 'only_option',
      label: 'Only option',
    }]
  },
  deeper_right: {
    text: [
      "Okay, this is starting to get out of hand, your decision making priveleges are behing revoked",
      "Sometimes this is cheesy, but it can be used for interesting narrative effects..."
    ],
    decisions: [{
      storyNode: 'only_option',
      label: 'Only option',
    }]
  },
  left_rabbit_hole: {
    text: [
      "Okay, this is starting to get out of hand, your decision making priveleges are being revoked",
      "Sometimes this is cheesy, but it can be used for interesting narrative effects..."
    ],
    decisions: [{
      storyNode: 'only_option',
      label: 'Only option',
    }]
  },
  right_rabbit_hole: {
    text: [
      "Okay, this is starting to get out of hand, your decision making priveleges are being revoked",
      "Giving the reader one option is sometimes a bit cheesy, but it can be used for interesting narrative effects..."
    ],
    decisions: [{
      storyNode: 'only_option',
      label: 'Only option',
    }]
  },
  only_option: {
    text: [
      'Hold onto your butts!'
    ],
    decisions: [{
      storyNode: 'only_option_2',
      label: 'more more more!'
    }]
  },
  only_option_2: {
    text: [
      'Turn on the ludicrous speed!'
    ],
    decisions: [{
      storyNode: 'has_dead_end',
      label: 'here we go again!'
    }]
  },
  has_dead_end: {
    text: [
      "There is one more important part of writing stories that we need to cover, and that's the 'ending'",

      "Sometimes your reader will choose a path that ends the story, and that's great! All good things must come to an end.",

      "To create an ending, just give them a route with no decisions."
    ],
    decisions: [{
        storyNode: 'dead_end',
        label: 'You have met with a terrible fate'
      },
      {
        storyNode: 'a_bit_more',
        label: 'Wait! I need just a bit more'
      }
    ],
  },
  dead_end: {
    text: [
      "Well, you've done it, you've ended it all. There's no where left for the reader to go. This would be considered the end of the story.",

      "Don't worry about a 'back button', we give the reader the option of starting the story over.",

      "Maybe, just maybe, they'll choose better options next time.",
    ],
    final: true,
  },
  a_bit_more: {
    text: [
      "You wanted one more set of questions, the story isn't quite over yet!"
    ],
    decisions: [{
        storyNode: 'so_long',
        label: "So long!",
      },
      {
        storyNode: 'farewell',
        label: "Farewell!",
      }
    ]
  },
  so_long: {
    text: [
      'So long, and thanks for all the first!'
    ],
    final: true,
  },
  farewell: {
    text: [
      'Farewell, goodbye, so long!'
    ],
    final: true,
  }
};