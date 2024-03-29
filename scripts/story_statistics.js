#!/usr/bin/env node
require = require("esm")(module);
const { forOwn, map, each } = require("lodash");
const stories = require("../stories/index.js");

decision_texts = [];

forOwn(stories, (story, _) => {
  let decision_count = 0;
  let node_count = 0;
  forOwn(story.content, (node, _) => {
    if (!node.decisions) return;
    for (const decision of node.decisions) {
      decision_texts.push(decision.label);
      decision_count++;
    }
    node_count++;
  });
  console.log(
    `Story: ${story.title}, decisions: ${decision_count}, nodes: ${node_count}`
  );
});

const word_count_frequencies = {};
each(
  map(decision_texts, text => text.split(" ").length),
  count => {
    const curr = word_count_frequencies[count] || 0;
    word_count_frequencies[count] = curr + 1;
  }
);

const word_length_frequencies = {};
each(
  map(decision_texts, text => map(text.split(" "), word => word.length)),
  word_lengths => {
    each(word_lengths, length => {
      const curr = word_length_frequencies[length] || 0;
      word_length_frequencies[length] = curr + 1;
    });
  }
);

console.log("----------------------------------");
console.log("Total decisions: ", decision_texts.length / stories.length);
console.log("Word count frequencies: ", JSON.stringify(word_count_frequencies));
console.log(
  "Word length frequencies: ",
  JSON.stringify(word_length_frequencies)
);
