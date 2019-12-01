const choicesAndAttributes = {
  "Reading recommendations from the founders and creators": [
    "founder-read",
    "creator-read"
  ],
  "Reading adjacent things": [
    "founder-read-help",
    "creator-read-help",
    "founder-read-adjacent"
  ],
  "Reading orthogonal things": ["founder-random", "creator-random"]
};

// IndieBound links are easy. Use these.
// ?aff=h2wib
//
// Amazon go here. It's dumb.
// https://affiliate-program.amazon.com/home/productlinks/search

const rawContent = [
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07TDQSCTW/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07TDQSCTW&linkId=21d32644c9c93be0a9b61639d08f6ef3"
      }
    ],
    attributes: ["founder-read-adjacent"],
    description: [
      "Step into another world with a trusted storyteller. The Nazis won, but there's a resistance brewing."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/0553496395/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0553496395&linkId=7f517e1e0c311c096cd2ddb43373697b"
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
        url:
          "https://www.amazon.com/gp/product/B000H1217M/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B000H1217M&linkId=189d8148ba858ff0fde311ebd760e742"
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
        url:
          "https://www.amazon.com/gp/product/B07NDNZ6XS/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07NDNZ6XS&linkId=9376f3cdb831134c85e438da667d6ee4"
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
        url:
          "https://www.amazon.com/gp/product/B00PGWI6QC/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00PGWI6QC&linkId=74b05f3d26cafbab41cd945698d75742"
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
        url:
          "https://www.amazon.com/gp/product/B07FZ8S74R/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07FZ8S74R&linkId=828e1c59241a13d3ffa345884202c57d"
      }
    ],
    attributes: ["founder-read-help"],
    description: ["Alexa! Thanks for being so cool."]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B06XCPGFP3/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B06XCPGFP3&linkId=ae8ecff32aa300cc704ee2944ab3ffde"
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
        url:
          "https://www.amazon.com/gp/product/B000AJIF4E/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B000AJIF4E&linkId=2eba4b34ceb14b4c26800e5af3bb3df3"
      }
    ],
    attributes: ["founder-random"],
    description: ["Best headphones. Ever."]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B0021Y8RW6/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0021Y8RW6&linkId=a6f9d3b5473316085b7207ce9051e00b"
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
        url:
          "https://www.amazon.com/gp/product/0756404746/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0756404746&linkId=db7562f8681d3bf8e707317b42a33057"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780756404741?aff=h2wib"
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
        url:
          "https://www.amazon.com/gp/product/0553293354/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0553293354&linkId=105e7acb3e9f734c52f5394fc4f6f4cf"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780553293357?aff=h2wib"
      }
    ],
    attributes: ["founder-read"],
    description: ['Consider this "foundational" reading in Science Fiction.']
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/0618640150/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0618640150&linkId=d5a00a9443f0836f92177e781aa867cb"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780618640157?aff=h2wib"
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
        url:
          "https://www.amazon.com/gp/product/0140067477/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140067477&linkId=f2529a40bccf3875e6538d085efc8a8b"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780140067477?aff=h2wib"
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
        url:
          "https://www.amazon.com/gp/product/0345479211/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345479211&linkId=10c434317ad6efeb774f68414d51848d"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780345479211?aff=h2wib"
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
        url:
          "https://www.amazon.com/gp/product/0312156960/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0312156960&linkId=cb3172296e8094ffe31fa594eff80a77"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780312156961?aff=h2wib"
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
        url:
          "https://www.amazon.com/gp/product/0142302376/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0142302376&linkId=970bf81e2028ca6b9d616fda4515decf"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780142302378?aff=h2wib"
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
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780316204262?aff=h2wib"
      },
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/0316204269/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0316204269&linkId=c0c041ff1ffd86b524d86346ff212f12"
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
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780671027032?aff=h2wib"
      },
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07P9XWH57/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07P9XWH57&linkId=5c4ffcd994ff305b54f924b8249f25ed"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "Everyone needs friends. It's worth learning a bit about how to win them over. Sound and simple advice in a digestible form."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/1717736408/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1717736408&linkId=405ae3f9eb9bb3ef7409a64c54bd2a4a"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9781717736406?aff=h2wib"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "When you have so many words at your disposal, things can get a little jumbled.  Take it from the masters on how to put them in the right order, for the right story."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07N3XJ66N/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07N3XJ66N&linkId=790d66ac9b2686ee494f6ba073feade6"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Move over iPods, nothing says music afficionado like the warm sound of vinyl, sipping coffee, and reading a good story. Other people might like cold digital sound, but you're a person of taste, and culture. Don't be afraid to show it."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B079GF7MKM/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B079GF7MKM&linkId=858a0b285595d4c4e32e05757ba58712"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Some people like tea with their stories, others a warm cup of joe. You like something with a bit more kick. You're the creative type, you write your own stories, and drink your own brew. This is the kit for you."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B071GW2JXT/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B071GW2JXT&linkId=cf277ac326377b4d06a6aad5378c01bb"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Sometimes words aren't enough. In those cases, why not take a picture, they're worth atleast a few hundred (maybe more). Stand back, get things in frame, and say cheese. Picture perfect."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07GNK18VJ/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07GNK18VJ&linkId=d0f3c2118340db2cdcce9eec1d7aa099"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "It's a bird, it's a plane, wait... it's none of those things. You're still on your way to mastering drawing, so why not take advantage of that undo button, and give it another go. Drawing has never been easier, and with the full power of the computer at your fingertips, your imagination is the limit."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B01DLX6FNS/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01DLX6FNS&linkId=7377029dd5c91d2d0b28e5bd9f40128e"
      }
    ],
    attributes: ["founder-random"],
    description: [
      'Next time someone asks "What time is it?", stop them dead in their tracks with a one-of-a-kind watch. Everyone deserves the best, your time is now. Don\'t leave home without it.'
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B00I48M9PE/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00I48M9PE&linkId=bad5d6d4889b910298654fe0243f0b65"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "You've got ideas, and by golly you want to share them. Time to give this internet thing a try, and upload some photos. If you're the pen and paper kinda person, then this is for you. Sketch, color, scan and share. Simple as that."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B0094HBU6I/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0094HBU6I&linkId=3008316040e9eea6c7d9226549836b1a"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Here comes the sun, with more convience, and a lot less nuclear fusion. Why use a normal lamp, when you can get one with all the benefits of outdoor lighting, but inside! Turn it on, sit back, and cozy up with a good book. The future is looking bright."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07HKQ6YGX/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07HKQ6YGX&linkId=a2ad2cd58222535807fc73c92e3b05c9"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "You have to hear it to believe it. Don't compromise on quality, especially when it comes to your portable beats. Turn it up, tune in, and get the party pumping."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07WLL4621/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07WLL4621&linkId=456d92aae1a3d88fd386f983fcf7bcd7"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Wires? Who needs wires! Throw on these bad boys and crank the sound up. Enjoy cordless bouncing, head banging, arm flailing dance moves with wild abandon. Dancing never sounded so good. Neither have wireless earbuds, before now."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07351P1JK/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07351P1JK&linkId=eb038e181b4e5d235e5396734079d821"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Bring a little light to your life, with all the power of smart bulbs. Any color, any time, fully programmable and fully customizable. Analog lights are so 1879. Get with the times, and stay lit."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07DZLSRHR/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07DZLSRHR&linkId=2e187bb9bb65dde74f5c4702cd94f116"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Does your wallet look like it ate another wallet? Would you describe it as plus size? We're not here to size shame you, but sometimes sleeker is better. Go slim, and fashionable; your money will thank you."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B00838RWI4/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00838RWI4&linkId=3a8300c25e003371089be20f1b1a4065"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Throw your stuff in, go outside and explore. This isn't your typical slumpy bag, it's a one-of-a-kind carrying case. We've got your back, and so does this backpack."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07R6V1MXW/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07R6V1MXW&linkId=e111f283d8f27de1b17990f5b39acae0"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "You're hungry, even hangry, and you want food. You don't want to wait by golly, you want it right now. This is the food cooker for you. 15 minutes too long? Perfect, lets cut it in half. Why wait, when you can use multiple atmospheres of pressure to cook your food. You want it, and you want it right this instance. Time to cook."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B004RF7QJW/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B004RF7QJW&linkId=d41bb231d44e37bd2c083d40e6bc8841"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Do you like turning bigger things into smaller things? How about liquefying everything? Want all that power at your fingertips? Then this is the blender for you. Chewing is for suckers, let this blender do the work for you."
    ]
  },

  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07DLPWYB7/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07DLPWYB7&linkId=6dd8fed8a5b6cdc9f3c82fd4056b6dd2"
      }
    ],
    attributes: ["founder-read-adjacent"],
    description: [
      "Like to get lost in a great tale, and you need to bide the time while you wait for the next installment of <TPT specific book>, try this little teleportation device to new worlds and new adventures."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/0356500276/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0356500276&linkId=27a6e788a4b76d1ffc388b5108062fbf"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780356500270?aff=h2wib"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "What more could you ask for other than, magic, mystery, and a little bit of sass from this page turning urban fantasy series: The Dresden Files."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/0765319233/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0765319233&linkId=a1f7480cedeeb51fe208c85d071ac326"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780765319234?aff=h2wib"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "When morals get in the way of the mercenary code, the path becomes a lot less straight and narrow. Follow this group of hands for hire as they navigate their way through a world changing all our war."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07F8MX9XY/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07F8MX9XY&linkId=2d655464f92b41216e54f4c076e9d526"
      }
    ],
    attributes: ["founder-read-adjacent"],
    description: [
      "Love our tales, but want to reduce the strain on your eyes, try these on for size."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B01N57S4TB/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01N57S4TB&linkId=f27e9e492a9b8fbf1327d7184feb7304"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780545035170?aff=h2wib"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "Travel back to where it all began, and indulge your curiosity with these classic choose your own scares."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07XL7G4H6/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07XL7G4H6&linkId=60ce0c2a65f5720ad693d1ef42ae06b2"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "The best way to read our tales, and do a lot of other useful things. And don’t you deserve the best?"
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/1586481495/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1586481495&linkId=3ac084ca2dda64f7588a11a2f4b80e4d"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9781586481490?aff=h2wib"
      }
    ],
    attributes: ["founder-read", "founder-read-adjacent"],
    description: [
      "Every new author has to start somewhere. And once they find that somewhere, they utilize the tips and tricks in this book to craft their masterpiece."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/158297294X/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=158297294X&linkId=4d35db3c5fe95a33a5f5b884e90a54b0"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9781582972947?aff=h2wib"
      }
    ],
    attributes: ["founder-read", "founder-read-adjacent"],
    description: [
      "Think building a gripping plot end to end is tough? Try writing a choose your own adventure novel. Fortunately this book can help with the structure and method for both."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/1582974578/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1582974578&linkId=f19fc114c8414ab46c385ed74f2baba9"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9781582974576?aff=h2wib"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "If anyone could write the next world renowned, love triangle based urban fantasy novel, it is you!...and a little help from this book."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/1439156816/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1439156816&linkId=468272ccf8bf6aaa0e1b3022c35e73fc"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9781439156810?aff=h2wib"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "A memoir and insight into how to tell a good story, and how the craft of writing has changed and been changed by this great author."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/0525565108/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0525565108&linkId=ee82269af23334af28153582be7fdd3f"
      },
      {
        source: "IndieBound",
        url: "https://www.indiebound.org/book/9780525565109?aff=h2wib"
      }
    ],
    attributes: ["founder-read"],
    description: [
      "Follow on if the best detectives of all time as he uses his little grey cells to close case after case. There is no drama, and certainly no crime, like that created by the leisure class."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B000165IKU/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B000165IKU&linkId=db0ad6ac1b80c2d7989ef38b47001cff"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "The greatest story ever told, read by the smoothest voice ever heard. Enjoy stories of old as Vader tells us about the Father."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B074X1FCXP/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B074X1FCXP&linkId=7eb90c23bfe2c2a867d25af183f2831e"
      }
    ],
    attributes: ["founder-read-adjacent"],
    description: [
      "If you like choose your own tale, and build your own world, this Telltale Game will bring the crafter out of anyone."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07VGRJDFY/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07VGRJDFY&linkId=18f233a67393d1f3d7526930d8017b68"
      }
    ],
    attributes: ["founder-read-adjacent"],
    description: [
      "We get it, you need something, anything, to bide the time until the next TPT adventure is released. Why not dive into a mine, or save a princess from evil. Don’t worry we will wait right here."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B004S8F7QM/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B004S8F7QM&linkId=86ec0dbdbae8db8c34d41d93b7e4d265"
      }
    ],
    attributes: ["founder-random"],
    description: [
      "Love to choose your own adventure, but find it lonely sometimes as a wary Traveller. Why not invite a few friends over and see who can pick the best/worst/most offensive ending to the tale."
    ]
  },
  {
    links: [
      {
        source: "Amazon",
        url:
          "https://www.amazon.com/gp/product/B07K5BD5F4/ref=as_li_tl?ie=UTF8&tag=h2wib-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07K5BD5F4&linkId=9494cb98628cc3af180b843f8f440f3f"
      }
    ],
    attributes: ["founder-random"],
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
