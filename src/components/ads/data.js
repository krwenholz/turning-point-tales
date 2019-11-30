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
        url: "https://amazon.com/dp/B07CXG6C9W"
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
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/1717736408" }],
    attributes: ["founder-read"],
    description: [
      "When you have so many words at your disposal, things can get a little jumbled.  Take it from the masters on how to put them in the right order, for the right story."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07N3XJ66N" }],
    attributes: ["founder-read"],
    description: [
      "Move over ipods, nothing says music afficionado like the warm sound of vinyl, sipping coffee, and reading a good story. Other people might like cold digital sound, but you're a person of taste, and culture. Don't be afraid to show it."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B079GF7MKM" }],
    attributes: ["founder-read"],
    description: [
      "Some people like tea with their stories, others a warm cup of joe. You like something with a bit more kick. You're the creative type, you write your own stories, and drink your own brew. This is the kit for you."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B079GF7MKM" }],
    attributes: ["founder-read"],
    description: [
      "Who needs electricity, you've got fire! Nothing beats reading by the gentle glow of candlelight, especially when you're the one who made it. Bring a little light to your life."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B071GW2JXT" }],
    attributes: ["founder-read"],
    description: [
      "Sometimes words aren't enough. In those cases, why not take a picture, they're worth atleast a few hundred (maybe more). Stand back, get things in frame, and say cheese. Picture perfect."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07GNK18VJ" }],
    attributes: ["founder-read"],
    description: [
      "It's a bird, it's a plane, wait... it's none of those things. You're still on your way to mastering drawing, so why not take advantage of that undo button, and give it another go. Drawing has never been easier, and with the full power of the computer at your fingertips, your imagination is the limit."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B01DLX6FNS" }],
    attributes: ["founder-read"],
    description: [
      'Next time someone asks "What time is it?", stop them dead in their tracks with a one-of-a-kind watch. Everyone deserves the best, your time is now. Don\'t leave home without it.'
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B01NASYZ9" }],
    attributes: ["founder-read"],
    description: [
      "When 2 dimensions just aren't enough space-time for your artistic needs, there's the scribbler. Draw here, then everywhere, all dimensions are up for grabs. Bring those little ideas in your head to life, one scribble at a time."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B019U00D7K" }],
    attributes: ["founder-read"],
    description: [
      "Hear that? Didn't think you would, cause nothing beats noise-cancling bliss. Finally, you have your nice books, and your quiet thoughts to yourself. Time for a bit of silent reading."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B00I48M9PE" }],
    attributes: ["founder-read"],
    description: [
      "You've got ideas, and by golly you want to share them. Time to give this internet thing a try, and upload some photos. If you're the pen and paper kinda person, then this is for you. Sketch, color, scan and share. Simple as that."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B0094HBU6I" }],
    attributes: ["founder-read"],
    description: [
      "Here comes the sun, with more convience, and a lot less nuclear fusion. Why use a normal lamp, when you can get one with all the benefits of outdoor lighting, but inside! Turn it on, sit back, and cozy up with a good book. The future is looking bright."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07HKQ6YGX" }],
    attributes: ["founder-read"],
    description: [
      "You have to hear it to believe it. Don't compromise on quality, especially when it comes to your portable beats. Turn it up, tune in, and get the party pumping."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07WLL4621" }],
    attributes: ["founder-read"],
    description: [
      "Wires? Who needs wires! Throw on these bad boys and crank the sound up. Enjoy cordless bouncing, head banging, arm flailing dance moves with wild abandon. Dancing never sounded so good. Neither have wireless earbuds, before now."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07351P1JK" }],
    attributes: ["founder-read"],
    description: [
      "Bring a little light to your life, with all the power of smart bulbs. Any color, any time, fully programmable and fully customizable. Analog lights are so 1879. Get with the times, and stay lit."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07W9B83YV" }],
    attributes: ["founder-read"],
    description: [
      "Looking to find yourself? How about a couple lost items? Just strap these bad boys on, and let the power of the electromagnetic spectrum be your guide. Activate homing beacon, find keys. Simple as that."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07CXG6C9W" }],
    attributes: ["founder-read"],
    description: [
      "Tired of reading on pieces of paper? Hate using the same boring old text technology? Do you like carrying thousands of books, but don't have the space? Get a kindle, it's a library in your pocket."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07DZLSRHR" }],
    attributes: ["founder-read"],
    description: [
      "Does your wallet look like it ate another wallet? Would you describe it as plus size? We're not here to size shame you, but sometimes sleeker is better. Go slim, and fashionable, your money will thank you."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B00838RWI4" }],
    attributes: ["founder-read"],
    description: [
      "Throw your stuff in, go outside and explore. This isn't your typical slumpy bag, it's a one-of-a-kind carrying case. We've got your back, and so does this backpack."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07R6V1MXW" }],
    attributes: ["founder-read"],
    description: [
      "You're hungry, even hangry, and you want food. You don't want to wait by golly, you want it right now. This is the food cooker for you. 15 minutes too long? Perfect, lets cut it in half. Why wait, when you can use multiple atmospheres of pressure to cook your food. You want it, and you want it right this instance. Time to cook."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B004RF7QJW" }],
    attributes: ["founder-read"],
    description: [
      "Do you like turning bigger things into smaller things? How about liquefying everything? Want all that power at your fingertips? Then this is the blender for you. Chewing is for suckers, let this blender do the work for you."
    ]
  },

  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07DLPWYB7" }],
    attributes: ["founder-read"],
    description: [
      "Like to get lost in a great tale, and you need to bide the time while you wait for the next installment of <TPT specific book>, try this little teleportation device to new worlds and new adventures."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/0356500276" }],
    attributes: ["founder-read"],
    description: [
      "What more could you ask for other than, magic, mystery, and a little bit of sass from this page turning urban fantasy series: The Dresden Files."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/0765319233" }],
    attributes: ["founder-read"],
    description: [
      "When morals get in the way of the mercenary code, the path becomes a lot less straight and narrow. Follow this group of hands for hire as they navigate their way through a world changing all our war."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07F8MX9XY" }],
    attributes: ["founder-read"],
    description: [
      "Love our tales, but want to reduce the strain on your eyes, try these on for size."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B01N57S4TB" }],
    attributes: ["founder-read"],
    description: [
      "Travel back to where it all began, and indulge your curiosity with these classic choose your own scares."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07XL7G4H6" }],
    attributes: ["founder-read"],
    description: [
      "The best way to read our tales, and do a lot of other useful things. And don’t you deserve the best?"
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/1586481495" }],
    attributes: ["founder-read"],
    description: [
      "Every new author has to start somewhere. And once they find that somewhere, they utilize the tips and tricks in this book to craft their masterpiece."
    ]
  },
  {
    links: [
      { source: "Amazon", url: "https://www.amazon.com/gp/aw/d/158297294X" }
    ],
    attributes: ["founder-read"],
    description: [
      "Think building a gripping plot end to end is tough? Try writing a choose your own adventure novel. Fortunately this book can help with the structure and method for both."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/1582974578" }],
    attributes: ["founder-read"],
    description: [
      "If anyone could write the next world renowned, love triangle based urban fantasy novel, it is you!...and a little help from this book."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/1439156816" }],
    attributes: ["founder-read"],
    description: [
      "A memoir and insight into how to tell a good story, and how the craft of writing has changed and been changed by this great author."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/089879045X" }],
    attributes: ["founder-read"],
    description: [
      "An all inclusive and insightful manual on everything you need to know to write best selling fiction from one of the best in the business."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/0525565108" }],
    attributes: ["founder-read"],
    description: [
      "Follow on if the best detectives of all time as he uses his little grey cells to close case after case. There is no drama, and certainly no crime, like that created by the leisure class."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B000165IKU" }],
    attributes: ["founder-read"],
    description: [
      "The greatest story ever told, read by the smoothest voice ever heard. Enjoy stories of old as Vader tells us about the Father."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B074X1FCXP" }],
    attributes: ["founder-read"],
    description: [
      "If you like choose your own tale, and build your own world, this Telltale Game will bring the crafter out of anyone."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07VGRJDFY" }],
    attributes: ["founder-read"],
    description: [
      "We get it, you need something, anything, to bide the time until the next TPT adventure is released. Why not dive into a mine, or save a princess from evil. Don’t worry we will wait right here."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B004S8F7QM" }],
    attributes: ["founder-read"],
    description: [
      "Love to choose your own adventure, but find it lonely sometimes as a wary Traveller. Why not invite a few friends over and see who can pick the best/worst/most offensive ending to the tale."
    ]
  },
  {
    links: [{ source: "Amazon", url: "https://www.amazon.com/dp/B07K5BD5F4" }],
    attributes: ["founder-read"],
    description: [
      "Love the funny combination of brash outcomes choose your own ending party games bring, but need more pictures because Nana’s eyes are going bad. We have the solve."
    ]
  }
];

const content = optionAttributes =>
  rawContent.filter(({ attributes }) => {
    return optionAttributes.some(attribute => attributes.includes(attribute));
  });

export { choicesAndAttributes, content };
