const choicesAndAttributes = {
  corporeal: ["corporeal", "physical", "local"],
  thoughtful: ["thoughtful", "brainy", "ethics", "timeless"],
  furry: ["furry", "pets", "animal"],
  motive: ["bike", "physical"],
  aesthetic: ["visual", "pretty"],
  fantastic: ["fantastic", "fantasy", "story"],
  futuristic: ["futuristic", "sci-fi", "story"],
  "only Jeff gets": ["jeff", "random", "weird"]
};

const rawContent = [
  {
    link: "https://smile.amazon.com/gp/product/B07TDQSCTW",
    attributes: ["physical", "timeless"],
    description: [
      "Step into another world with a trusted storyteller. The Nazis won, but there's a resistance brewing."
    ]
  },
  {
    link: "https://smile.amazon.com/dp/0553496395",
    attributes: ["random", "physical"],
    description: [
      "Read a new tale, one where you follow directions and make something tasty! The folks at Half Baked Harvest will help you gear up with a full tummy before your next tale."
    ]
  },
  {
    link: "https://smile.amazon.com/dp/product/B07CXG6C9W",
    attributes: ["physical", "brainy"],
    description: [
      "Reading is fun. It's even more fun when the library and more are at your fingertips. Check out a Kindle for an easy screen reading experience."
    ]
  },
  {
    link: "https://smile.amazon.com/dp/B000H1217M",
    attributes: ["funny", "physical", "pets"],
    description: [
      "One of us has a dog. That dog loves being smart. Why? Because smart puppies get Zuke's! Who's a good girl?!"
    ]
  },
  {
    link: "https://smile.amazon.com/dp/B07NDNZ6XS",
    attributes: ["jeff", "strong"],
    description: [
      "Arnold gets a bit crazy. Or maybe not. Either way, Total Recall is a gem. You should watch it."
    ]
  },
  {
    link: "https://smile.amazon.com/dp/B00PGWI6QC",
    attributes: ["jeff", "strong"],
    description: [
      "One of Arnold's first appearances. He's strong. He's a businessman. And he may be unintentionally funny. Check out Andre the Giant and a few other strong men in this fabled documentary."
    ]
  },
  {
    link: "https://smile.amazon.com/dp/B07FZ8S74R",
    attributes: ["physical", "weird", "conversational"],
    description: ["Alexa! Thanks for being so cool."]
  },
  {
    link: "https://smile.amazon.com/dp/B06XCPGFP3",
    attributes: ["transport", "bike", "physical"],
    description: [
      "You have a bike? We like bikes. Hopefully you like yours too. Don't keep that a secret, but do keep it safe. Lock it up!"
    ]
  },
  {
    link: "ihttps://smile.amazon.com/dp/B000AJIF4E",
    attributes: ["physical", "audio"],
    description: ["Best headphones. Ever."]
  },
  {
    link: "https://smile.amazon.com/dp/B001GI94SO",
    attributes: ["physical", "visual"],
    description: [
      "Contacts? Dry eyes? Check out this solution. Hah. See what we did there?"
    ]
  },
  {
    link: "https://smile.amazon.com/gp/video/detail/B0021Y8RW6",
    attributes: ["outdoors", "visual", "funny"],
    description: [
      "Park your butt for soome good old recreation. Enjoy the comedic stylings in this fabled series. Their jokes are way better than ours."
    ]
  },
  {
    link: "https://www.indiebound.org/book/9780756404741",
    attributes: ["fantastic", "aesthetic"],
    description: [
      "Patrick Rothfuss is a masterful storyteller. Dig in to this tale and you won't be disappointed."
    ]
  },
  {
    link: "https://www.indiebound.org/book/9780553293357",
    attributes: ["sci-fi", "thoughtful"],
    description: ['Consider this "foundational" reading in Science Fiction.']
  },
  {
    link: "https://www.indiebound.org/book/9780618640157",
    attributes: ["fantasy", "physical"],
    description: [
      "We like fantasy. We think you might too. It's a long read and a little old, but Lord of the Rings is where a lot of modern fantasy tropes began, for very good reason."
    ]
  },
  {
    link: "https://www.indiebound.org/book/9780140067477",
    attributes: ["thoughtful"],
    description: [
      "Pooh Bear has many lessons to teach us. Mr. Hoff uses that in a most enjoyable way to introduce the teachings of Taoism. A worthwhile read, even if you aren't looking to be an uncarved block."
    ]
  },
  {
    link: "https://www.indiebound.org/book/9780345479211",
    attributes: ["sci-fi", "thoughtful"],
    description: [
      "In need of a suspenseful science fiction masterpiece? Check out a Peter F. Hamilton treasure."
    ]
  },
  {
    link: "https://www.indiebound.org/book/9780312156961",
    attributes: ["fantastic", "jeff"],
    description: [
      "Do you like sweeping stories? A bit of grit? Bernard Cornwell introduces us to a more real Arthur than any other. One we can feel and weep for."
    ]
  },
  {
    link: "https://www.indiebound.org/book/9780142302378",
    attributes: ["fantastic", "furry"],
    description: [
      "Cheer for the critters in this fantasy adventure. Only problem? Once you're hooked, there are over a dozen more stories in this universe to sink your fangs into."
    ]
  },
  {
    link: "https://www.indiebound.org/book/9780316204262",
    attributes: ["funny", "jeff", "local"],
    description: [
      "Based in Seattle, Bernadette goes missing. It's a fun ride hunting her down."
    ]
  },
  {
    link: "https://www.indiebound.org/book/9780671027032",
    attributes: ["thoughtful", "jeff"],
    description: [
      "Everyone needs friends. It's worth learning a bit about how to win them over. Sound and simple advice in a digestible form."
    ]
  }
];

const content = optionAttributes =>
  rawContent.filter(({ attributes }) => {
    return optionAttributes.some(attribute => attributes.includes(attribute));
  });

export { choicesAndAttributes, content };
