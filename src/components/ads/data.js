const choicesAndAttributes = {
  'corporeal': ['local', 'physical'],
  'thoughtful': ['ethics', 'timeless'],
  'only Jeff gets': ['random', 'weird'],
};

const rawContent = [{
    link: 'krwenholz.com',
    attributes: ["physical", "timeless"],
    description: ["Something really really cool"]
  },
  {
    link: 'google.com',
    attributes: ["random"],
    description: ["Something less cool"]
  },
  {
    link: 'https://en.m.wikipedia.org/wiki/The_Tao_of_Pooh',
    attributes: ["ethics"],
    description: ["Something thoughtful"]
  },
];

const content = (optionAttributes) => rawContent.filter(({
  attributes
}) => {
  return optionAttributes.some((attribute) => attributes.includes(attribute));
});

export {
  choicesAndAttributes,
  content
}