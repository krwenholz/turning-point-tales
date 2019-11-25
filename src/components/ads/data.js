const choicesAndAttributes = {
  "Reading recommendations from the founders and creators": [
    "founder-read",
    "creator-read"
  ],
  "Reading adjacent things": ["founder-read-help", "creator-read-help"],
  "Reading orthogonal things": ["founder-random", "creator-random"]
};

const rawContent = [
  {
    links: [
      {
        source: "Amazon",
        url: "https://amazon.com/gp/product/B07TDQSCTW"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "Step into another world with a trusted storyteller. The Nazis won, but there's a resistance brewing."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://amazon.com/dp/0553496395"
      }
    ],
    attributes: ["founder-read", "founder-random"],
    description: [
      "Read a new tale, one where you follow directions and make something tasty! The folks at Half Baked Harvest will help you gear up with a full tummy before your next tale."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://amazon.com/dp/product/B07CXG6C9W"
      }
    ],
    attributes: ["founder-read-help"],
    description: [
      "Reading is fun. It's even more fun when the library and more are at your fingertips. Check out a Kindle for an easy screen reading experience."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://amazon.com/dp/B000H1217M"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "One of us has a dog. That dog loves being smart. Why? Because smart puppies get Zuke's! Who's a good girl?!"
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://amazon.com/dp/B07NDNZ6XS"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Arnold gets a bit crazy. Or maybe not. Either way, Total Recall is a gem. You should watch it."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://amazon.com/dp/B00PGWI6QC"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "One of Arnold's first appearances. He's strong. He's a businessman. And he may be unintentionally funny. Check out Andre the Giant and a few other strong men in this fabled documentary."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://amazon.com/dp/B07FZ8S74R"
      }
    ],
    attributes: ["founder-read-help"],
    description: ["Alexa! Thanks for being so cool."]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://amazon.com/dp/B06XCPGFP3"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "You have a bike? We like bikes. Hopefully you like yours too. Don't keep that a secret, but do keep it safe. Lock it up!"
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "ihttps://amazon.com/dp/B000AJIF4E"
      }
    ],
    attributes: ["founder-random"],
    description: ["Best headphones. Ever."]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://amazon.com/dp/B001GI94SO"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Contacts? Dry eyes? Check out this solution. Hah. See what we did there?"
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://amazon.com/gp/video/detail/B0021Y8RW6"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Park your butt for soome good old recreation. Enjoy the comedic stylings in this fabled series. Their jokes are way better than ours."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://www.indiebound.org/book/9780756404741"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "Patrick Rothfuss is a masterful storyteller. Dig in to this tale and you won't be disappointed."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://www.indiebound.org/book/9780553293357"
      }
    ],
    attributes: ["founder-read"],
    description: ['Consider this "foundational" reading in Science Fiction.']
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://www.indiebound.org/book/9780618640157"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "We like fantasy. We think you might too. It's a long read and a little old, but Lord of the Rings is where a lot of modern fantasy tropes began, for very good reason."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://www.indiebound.org/book/9780140067477"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "Pooh Bear has many lessons to teach us. Mr. Hoff uses that in a most enjoyable way to introduce the teachings of Taoism. A worthwhile read, even if you aren't looking to be an uncarved block."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://www.indiebound.org/book/9780345479211"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "In need of a suspenseful science fiction masterpiece? Check out a Peter F. Hamilton treasure."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://www.indiebound.org/book/9780312156961"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "Do you like sweeping stories? A bit of grit? Bernard Cornwell introduces us to a more real Arthur than any other. One we can feel and weep for."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://www.indiebound.org/book/9780142302378"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "Cheer for the critters in this fantasy adventure. Only problem? Once you're hooked, there are over a dozen more stories in this universe to sink your fangs into."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://www.indiebound.org/book/9780316204262"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "Based in Seattle, Bernadette goes missing. It's a fun ride hunting her down."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url: "https://www.indiebound.org/book/9780671027032"
      }
    ],
    attributes: ["founder-read"],
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
