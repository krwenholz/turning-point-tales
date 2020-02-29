const the_royal_fool = {
  title: "Wagons ANd Dragons - Side Quests - The Royal Fool",
  author: "Sean Wong-Westbrooke",
  tags: ["humor", "adventure"],
  generalRelease: false,
  badges: [
    {
      icon: "😅 ",
      text: "Back to business...",
      node: "ordered_west"
    },
    {
      icon: "🏃",
      text: "Every fool for himself",
      node: "save_yourself"
    },
    {
      icon: "🎣",
      text: "Come and get me",
      node: "bait"
    },
    {
      icon: "🛡",
      text: "Every fool has his day",
      node: "push"
    },
    {
      icon: "😆",
      text: "The first step is admitting it",
      node: "years_later_support",
    },
    {
      icon: "⏳",
      text: "Guess it wasn't the right time",
      node: "refuse_support",
    },
    {
      icon: "🔅",
      text: "Now this is the good life",
      node: "comfort_king",
    },
    {
      icon: "👟",
      text: "I'm outta here",
      node: "pity",
    },
    {
      icon: "📚",
      text: "Maybe they'll write a story about you!",
      node: "to_dungeons",
    },
    {
      icon: "👻",
      text: "It could have been worse",
      node: "carriage",
    },
    {
      icon: "👸",
      text: "You've got her back",
      node: "leave_with_queen",
    }
  ],
  preview: "Twenty-seven. Twenty-seven gold pieces my dad sold me for. One stinking harvest worth, we had three good years in a row and he still sold me. Lousy fart is probably getting fat off my share of the food…",
  content: {
    "start": {
      "text": [
        "Wagons & Dragons – Side Quests – The Royal Fool",
        "Written by Sean Wong-Westbrooke",
        "You are Geraldo, the royal fool of King Nichtos. You begin this day like any other, praying that today is not the day you will be put to the axe. That was nearly your fate last night, were it not for Queen Desi’s intervention, after insinuating that the King may have been sired not by the late King, but one of the late jesters, also named Geraldo. It is tradition in the castle to name each jester Geraldo, whether it is out of amusement or apathy, you are uncertain. Though the fact that in the lifetimes of the kingdom’s ten kings there have been some thirty-seven Geraldos, including yourself, you suspect the convention is likely rather convenient.",
        "It would be generous to think of yourself as hired to be jester. Conscripted sounds more accurate. Plucked right off the streets after telling a joke within earshot of the King and Queen riding through the Capital’s streets. The King may be a gruff and melancholic middle-aged warrior, but he loves his wife. The Queen giggled at your antics and the next thing you knew you were given a new name and duty bound to be a patriot who supports his nation not with flag or steel, but jibes and farts. On the way into the castle you passed by the old Geraldo being cleaned up by some stable boys after being drawn and quartered by the well-combed stallions. You haven’t dared to ask what he said wrong.",
        "Enough remembering now though, you have a job to get to. Today is the weekly council meeting and you are required to chime in to liven things up or act as additional counsel when the King tires of all the men trying to kiss his rear. The royals will arrive in fine silks and crowns to show their need for respect. The generals will come in with their medals and swords to show might. The ministers will wear their pointy hats and white cloaks to show their wisdom and purity. And you, you have dressed yourself in your single item of clothing. A red pajama onesie with a jangling three-belled hood, it must have looked rather charming thirty-six Geraldos ago, but now, the thing has been sewn back together and re-dyed so many times it looks like the skin suit of some devil.",
        "With maybe a half-hour to spare before the meeting’s start you have enough time to debate which leisurely route to take. It is a warm spring day and the gardens are in bloom. It could also be a fine time to catch up on the latest gossip before being trapped inside with stuffy old men all day. There’s also the option of checking on Queen Desi, she has always been a rather dour woman, but in these last few weeks she has been smiling through the day. It can never hurt to have the Queen’s favor."
      ],
      "decisions": [
        {
          "storyNode": "gardens",
          "label": "Walk through the Gardens"
        },
        {
          "storyNode": "queen",
          "label": "Go Find the Queen"
        }
      ]
    },
    "gardens": {
      "text": [
        "The gardens it is. The castle looks pretty yes, but by the gods it gets cold at night, you need some sun. You take the long way to the throne room and enjoy the art filled halls. Tapestries of ten generations of kings and heroes. Paintings of the Prince in each year of his young life. Marble statues of the queens of old. A jester’s life can be a good one, the freedom to dance, twirl, and fart wherever one wishes so long as it amuses. In exchange for a lifetime of laughter the King is expected to grant the fool enough land to live comfortably, though by your estimates that means some forty more years before retirement. When you received your uniform you had to clean and sew the bloody hood back on yourself after the noose plucked its owner's head like a grape from the vine. At the thought your head falls and shakes the golden three golden bells. The jangling bells and dark thoughts makes your face gaze deep into an imaginary and distant horizon until a maid comes by and shakes you back to reality.",
        "When you finally reach the gardens the warm sun takes you out of your dread and the lavender air fills your lungs. The light injects life into your body and you can't help but be a bit more cheery and happily greet the myriad of maids and noblemen enjoying the crystal fountains and patches of flowers from each corner of the world. With the clinking of your bells they all see you coming and smile at the odd fool before them. A little noble child offers you a rose and she giggles warmly at the funny faces you repay her with. For a moment, things are just a bit better.",
        "Mid-way through the garden the sound of two men’s angry and hushed voices come out from behind an old copper statue of a slain dragon. Tasty gossip at last."
      ],
      "decisions": [
        {
          "storyNode": "listen",
          "label": "Listen In"
        }
      ]
    },
    "listen": {
      "text": [
        "\"Yes it’s serious! My spies report their ‘village’ is closer to a 'city' now. A hundred clans of orcs, snake-men, and giants at least. More join them each week,\" implores the younger voice.\n",
        "\"By the gods, what is leading them?\"\n",
        "\"The monsters call him ‘The Dark Lord’, say he has otherworldly powers. That he can raise the dead, read minds, that he cannot die!\"\n",
        "\"A monster lord? The impudence! Pay these words no heed, anything can die, even dragons, they may be getting smarter, but they’re stupid for thinking we would buy into such fantasies.\"\n",
        "\"Even if it as you say, we cannot deny the strength of so many monsters. Our people are being driven from their rightfully claimed lands and the monsters are concentrating their power. Whether they are building a city or an army, months or years from now, it will only mean one thing, war.\"\n",
        "It’s just your luck to want some gossip and instead overhear rumors of disaster. A hand taps your back and you turn to see a maid with curious eyes, \"What are you up to Sir Fool, clinging to that statue?\"",
        "\"Who’s there?!\" says the younger voice and out from behind the statue comes the one of highest ranking general in the King’s service, Sir Lionel, followed by some other decrepit looking general you don’t recognize. \"Geraldo? Wait, this is excellent.\" He waves the maid away who quickly obliges. \"How much did you hear?\" he asks you.\n",
        "\"Are we going to war?\"\n",
        "\"I hope not, but you could help us. You could make the King consider the dangers when we mention this at the meeting. He has forgotten that we exterminate monsters with overwhelming force because we can’t win a fair fight. Every day we don’t act our advantage shrinks. Show the King the folly of waiting.\"\n",
        "\"I’ll do what I can.\"\n",
        "\"Thank you kind fool, this kingdom will be in your debt.\"\n"
      ],
      "decisions": [
        {
          "storyNode": "council_gardens",
          "label": "Attend the Council Meeting"
        }
      ]
    },
    "council_gardens": {
      "text": [
        "With your relaxing walk completely ruined, you follow the generals into the throne room and take your seat beside the King and Queen. The King holds his precious family sword and the Queen looks rather disinterested in the whole affair. Meanwhile the generals and ministers look like schoolboys desperate to raise their hands.",
        "\"I hereby call this meeting to order, who wishes to go first?\" says the King. \n",
        "Sir Lionel nudges you hard in the ribs making you cough painfully. \"Yes, Geraldo, have something to say?\"\n",
        "\"Ah yes, my King, I was thinking on your family’s exploits, monster slaying and all that, and I got to thinking. Sire, I think I’m going to die.\"\n",
        "The King scoffs and shakes his head at the statement, \"Why in the world do you think you’re going to die?\"\n",
        "\"Because of you my liege. I’m going to be beaten and eaten by trolls and gnolls. I will be stabbed by an orc with a fork. A snake-man will fry me in a pan. And gods help me if I see a giant I may be so compliant as to open the gates to them. Please save me my liege, we will not survive a siege.\"\n",
        "\"First of all, don't rhyme again or you'll find your fears of death well-founded. Secondly, what has got you so worried about monsters? A siege?\"\n",
        "\"Monsters sire, they are organizing in the West in numbers not seen before, whole armies. They amass under a 'Dark Lord'.\"\n",
        "\"A ‘Dark Lord’? Haha! Very good fool, you had me worried for a moment! What silliness, monsters are a brainless lot. A 'Dark Lord', armies of monsters, what an idea. I’d sooner expect my Queen to leave me, isn’t that right love?\" As the King chuckles and grabs his Queen’s hand the generals look to you and you can only shrug at their displeased faces. \"Oh, you’ve got me remembering my adventuring days Geraldo. I feel like killing something now, this meeting is cancelled. We’re going hunting! Mr. Yao, call the royal beast master, tell him I want the bears.\"\n",
        "\"How many bears, my liege?\" sighs the butler.\n",
        "\"I need at least a semblance of a challenge, I want all the bears we have.\"\n"
      ],
      "decisions": [
        {
          "storyNode": "not_a_joke",
          "label": "Sire, it's not a joke."
        },
        {
          "storyNode": "great_idea",
          "label": "Great idea, Sire!"
        }
      ]
    },
    "not_a_joke": {
      "text": [
        "\"Truly?\"\n",
        "Sir Lionel speaks, \"Yes, your majesty. Monsters are gathering in-\"\n",
        "\"Are you really afraid of them, Sir Lionel?\"\n",
        "\"I fear nothing my liege!\"\n",
        "\"Wonderful, then you wouldn’t mind going to investigate personally then would you? I guarantee you’ll find nothing there but a bunch of rapid rabble, maybe they’re all in heat and making strange abominable bastard half-breeds. Who knows what's up with those pests. And take Geraldo with you too, since you’re both quaking in your boots.\"\n",
        "\"Sire, I don’t have boots. These are pajamas.\"\n",
        "The King looks on you with tight lips and displeased eyes, \"Don’t make me find another Geraldo. Now get a move on you two, I have bears to kill.\""
      ],
      "decisions": [
        {
          "storyNode": "ordered_west",
          "label": "Ordered West"
        }
      ]
    },
    "ordered_west": {
      "text": [
        "You and Sir Lionel have been on the road for multiple agonizing months now. Crossing rivers, climbing mountains, and camping under the stars. A few wagons of troops sent off on a king’s whim to be proven right. The royal mission moves at a quickened pace, Sir Lionel desperate to get his tasks done quickly and return to Capital for the work of war planning. And you simply desperate to not be killed. By the time you and the troops arrive in the West it seems this quickened pace was the greatest error. In the evening a messenger and his horse collapse in the camp with a message, the King is dead and the Queen is missing. That same evening the small camp is overrun by a mass of orcs lead by a helmeted and greathammer wielding scarred orc. You, the royal jester Geraldo, are the only survivor as the monsters are amused by your costume.",
        "The lead orc drags you into a simple black tent and presents you before the Dark Lord on his throne, a black cloaked thing twice as tall as you sitting down, with black hands dotted white like the night sky.",
        "\"A gift, my lord. King Nichtos’ jester.\"\n",
        "\"You bring me a fool, Garo?\"\n",
        "\"My sources tell me that every good lord has a fool, to manage the stress of ruling.\"\n",
        "The cloaked lord laughs like a collapsing cave and rests its head on a fist. \"Wonderful, well done my friend. Leave us now, I wish to enjoy this fool in privacy.\"\n",
        "When the orc leaves the tent you feel oddly even less safe, alone in the Dark Lord’s presence. He lifts his free hand and you feel a great invisible hand lift you and pull you forward, binding you in between its fingers. The fire inside dims and the tent’s walls seem to stretch upwards to infinity as the Dark Lord towers over you. His voice penetrates you. You can feel his breath in your blood, his words vibrating your bones. It feels like drowning in a sea of mouths.",
        "\"Now good fool, make me laugh.\"\n",
        "THE END \"The Dark Lord’s Pet\""
      ],
      "final": true
    },
    "great_idea": {
      "text": [
        "The generals are displeased but the King wipes a tear from his eyes. It’s safer to be on the King’s good side than anywhere else. Sir Lionel’s face is in a deep frown and he motions to speak but the ministers yell over him in requesting to cover the other topics of the meeting, which the King promptly waves off.",
        "\"Oh it’s always something or other about taxes or crop yields. Just tell me on the way to the hunting forests. Come, come Geraldo, tell me more silly things.\"\n",
        "\"Yes, my King, right away.\"\n"
      ],
      "decisions": [
        {
          "storyNode": "hunting",
          "label": "Hunting Trip!"
        }
      ]
    },
    "hunting": {
      "text": [
        "The King and his entourage are meandering about on their horses in a clearing inside the royal hunting forest. All present wield spears, even the Queen, while you have been tasked with holding the King’s wine. The hunt was meant to begin some time ago and the King’s jug has been halfway drunk as everyone waits for the beast master to blow the starting horn.",
        "\"What is ever taking so long-\" before the king can finish, the beast master runs injured and screaming into the clearing, on his heels come five bears with spears in their sides and blood on their fangs. Their eyes glow red and a black smoky aura surrounds them. The lead bear tackles the man and drags him into the woods as he calls for help. The other four rush towards the mounted hunters, panicking the horses and sending generals, ministers, and knights in all directions. Queen Desi is thrown from her horse and rolls on the ground gripping her bloody head in pain.\n",
        "\"Desi!\" the King pulls hard on his rearing horse and bends it to his will. He flies over to his fallen Queen and leans down, grabbing and lifting her onto his horse with surprising agility and strength. \"Are you alright?!\"\n",
        "\"Who is it? Is that you, my love?\" Queen Desi says, blood running down her head into her eyes.\n",
        "\"Yes, it’s me.\" Only a moment later the queen shuts her eyes and her body goes limp. The King raises his head to look around at the chaos and calls out with a kingly voice if there ever was one, \"To your King! To me! To me!\"\n"
      ],
      "decisions": [
        {
          "storyNode": "save_yourself",
          "label": "Save Yourself!"
        },
        {
          "storyNode": "stand",
          "label": "Stand by your King!"
        }
      ]
    },
    "save_yourself": {
      "text": [
        "You spit out a slurry of curses and swears as you push your horse to its limits away from the scene of disaster and past Sir Lionel and a set of knights racing to their King. An incredibly wise decision by the looks of it as when you look back you see another five bears come out of the woods and tackle one of the knights and tear them to shreds. The last thing you see before vanishing into the tree line is the King scrambling up a tree in desperation, Queen over his shoulder.",
        "Now a fool without a king, and an unknown number of witnesses to what any loyalists will see as cowardice, you do not return to the Capital. Instead you run. Far far away you run. Away from any foolish kings. You abandon your jester clothes in a ditch after stealing a set of plain clothes from some villager’s laundry and for the next weeks you head South, looking over your shoulder and at each wanted poster you pass to see if your face has been added. Your mounting stress ends in tragic relief at the news of the King and Queen’s deaths and the recent crowning of their son as king. You are free, but now the land must endure a boy king, a puppet of his ministers and advisors. You think on the coming war Sir Lionel spoke of and are filled with dread for the future. Nevertheless, you press on to the southern edge of the world, the furthest you think you can get from the coming troubles. Unfortunately, it appears that fate is the cruelest jester, as when a fleet of orc-filled ships come over the western horizon, you realize no land is safe.",
        "THE END \"Runaway Fool\""
      ],
      "final": true
    },
    "stand": {
      "text": [
        "You, Sir Lionel, and a team of knights are the first to respond. The next to respond are another set of five bears from the woods who quickly chase away the less brave knights. Those that stand and fight spear and kill one bear as the rest drag the knights from their mounts and bite into them. With few options remaining, you, the royals, and Sir Lionel climb up a tall tree and stab desperately at the bears as they climb up after you. After close to a dozen shared strikes to their faces the bears relent and begin to claw away at the tree’s trunk.",
        "\"By the gods. What’s wrong with these things? They’re never this aggressive!\" Sir Lionel laments.\n",
        "To everyone’s shock it is the King to reply, \"I may have asked the beast master to give the bears blood of the berserker, to make the hunts more intense. I suppose the dosage was too high.\"\n",
        "\"Sire, I may be the one in the rags and bells, but you are the greatest dullard I’ve ever known!\"\n",
        "\"How dare you insult your King! I’ll have you boiled alive-\" in his shaking rage the King almost tumbles off his branch down to the waiting bears. It is only Geraldo and Sir Lionel’s quick hands that save him from doom. \"Oh by the gods, you’re right. Oh what have I done? My wife, my poor wife. This is all my fault!\"\n",
        "\"I appreciate this realization my liege, but I would like a plan and not apologies. This tree won’t last much longer!\" \n",
        "\"We can’t fight them off, we need a distraction.\" King Nichtos grabs hold of his wife and eyes the jester and the General. \"One of you, draw the beasts away so your King and Queen can escape.\"\n",
        "\"Fantastic idea, your majesty. Geraldo, I am a commander of our armies, surely you understand my importance. Save us, save the kingdom. Godspeed!\" Sir Lionel salutes you with stiff arm. The tree is beginning to fall to the earth, it is now or never!\n"
      ],
      "decisions": [
        {
          "storyNode": "bait",
          "label": "Be the Bait"
        },
        {
          "storyNode": "push",
          "label": "Push Sir Lionel Down"
        }
      ]
    },
    "bait": {
      "text": [
        "A fool cannot refuse a request from his King or General. Even if it is a stupid ass request.",
        "\"Live or die. I expect a statue in my honor. Put it in the gardens!\" And with that you take Sir Lionel’s spear and leap down towards the waiting bears. You plunge the weapon deep into a bear’s spine and run as far and as fast as you can, \"Come and get it you furballs!\", you shout slapping your bottom. When you reach the tree line you look back for just an instant and see nothing but the open jaws of a bear. The beast drags you to the ground by the head and promptly tears you into about eighteen unrecognizable pieces. \n",
        "Your sacrifice buys the others time to escape the tree and make their way through the woods to eventually connect with a contingent of soldiers that have arrived to kill or capture the bears. Some time later the Queen is healed and is so struck by Geraldo’s heroic sacrifice she commissions a grand golden statue of the fool fighting off a mass of bears in the center of the gardens. It is a favorite of the servants, and a cautionary tale for the young woman that replaces you only a week after your death. Jester number thirty-eight is dressed in a brand new set of red pajamas and bells, considering the last set was eaten. The plaque on your memorial reads, \"Geraldo is dead, long live Geraldo.\"",
        "THE END \"Bear Food\""
      ],
      "final": true
    },
    "push": {
      "text": [
        "\"What are you doing?! No! No!\"\n",
        "\"You’re the soldier here, do your duty!\" With a quick shove you push Sir Lionel from his branch and into the waiting mouths below. The beasts lose themselves in ripping the man apart and claw at each other over his meaty legs. With the bears distracted, you and the royals leap out of the tree and run like hell away from the growling and gore. To your and the King’s relief you soon encounter a mass of soldiers come to rescue their King and eliminate the berserker bears. \n",
        "In time the King and Queen make a full recovery from their ordeal and you earn yourself a new uniform not made out of dead men’s rags. A vibrant purple set of pajamas and no more jangly hat as a reward for your decisiveness with Sir Lionel, the latter of which has received a golden statue in the gardens depicting his ‘grand’ sacrifice. The King may be foolish, but he loves his wife, and his endangering her was just too much. From henceforth you are able to speak truth to the King whenever the man is being truly daft without fear of reprisal. A role of much value amidst the army of sycophants surrounding the King at all times. In a way you honor the late Sir Lionel’s wishes, by keeping the kingdom strong and slowly feeding concerns regarding the monsters to the West to him. When war does come, history will note it was a fool named Geraldo that helped the kingdom survive even just a bit longer.",
        "THE END \"Fool’s New Clothes\""
      ],
      "final": true
    },
    "queen": {
      "text": [
        "Queen Desi’s always been kind to you. It will be good to see her.",
        "The way to the Queen is through the most beautiful and newly renovated parts of the castle. The high walls are decorated with tapestries depicting the feats of great heroes and the founding of the royal Capital on the nest of a slain red dragon. The scent of old books flows thick out of the Queen’s library. The greatest private collection of knowledge on the continent. The last sight before the Queen’s room is the grand aquarium built into the walls and floor with thick glass. A rainbow of mermaids drift along with their colored fish tails. Their human upper halves are grey-skinned and topless with forlorn faces filled with needle like teeth and blood red eyes. You imagine they would be sights equally beautiful and terrifying for sailors. A pair of servant boys with a basket of fish toss them into the water as if it were a game.",
        "Finally, at the queen’s quarters you see the door ajar and poke your head in slowly, ever cautious, only to find nothing. Thinking little of it you head to the library, few ever go there but the Queen. It is a silent place with high stacks of shelves and rolling ladders waiting to be used. Wandering through the shelves you spot in the distance through the books the unmistakable crown of your Queen, gold and adorned with sapphires. You make to greet her when you see a pair of hands take her head and pull her in. As you move closer you spy a scene of treason. Pressed to the far wall is Queen Desi and the head butler, Mr. Yao. They hold each other tenderly and press their heads together whilst running their hands through the other’s brown hair. Queen’s have lost their heads for less. Jesters, even less so.",
        "\"Yao. I have to go. I have duties to attend to.\"\n",
        "\"And I must attend to my lovely pigeon. Just a moment more, your majesty.\"\n",
        "\"You annoyance,\" she giggles. \"I told you to call me Desi when we’re alone. Say it.\"\n",
        "Yao takes his head from the Queen’s and leans into her ear and whispers something that makes the Queen blush and press her nose to his.",
        "\"We must relent now, love. Come, fix this hair you’ve so ruined, I can’t be late for the council meeting.\"\n",
        "\"Yes, Desi. Take a seat and I’ll comb your-\" his eyes turn upwards to meet yours with unmistakable shock, \"Geraldo? Stay right there! I need a word with you!\" The Queen stands back as her butler comes toward you, he has never been much of an imposing force, but now he advances with a mission in him. The Queen has always been good to you, surely she wouldn’t let you come to harm, would she?\n"
      ],
      "decisions": [
        {
          "storyNode": "stay_put",
          "label": "Stay Put"
        },
        {
          "storyNode": "run_queen",
          "label": "Run Away!"
        }
      ]
    },
    "stay_put": {
      "text": [
        "You trust the Queen. After all, what would anyone think of you telling of a queenly affair? Such things are often told as jokes anyway. Who would ever believe the fool? Mr. Yao takes you by the arm with a firm but painless grip and takes you back to the scene of the treasonous intimacy and sits you down in a corner chair.",
        "\"How much did you see?\" the butler asks.\n",
        "\"Enough to consider you a surprisingly tender man and the Queen a still spry pigeon.\"\n",
        "\"Dammit, what will it take then? To have your silence?\"\n",
        "\"To be honest I wish I never saw it, returning to a state of affairs where we were all ignorant of the other would be ideal.\"\n",
        "\"We can do little to turn back time, Geraldo,\" the Queen chimes in.\n",
        "\"Yes, yes I see that. I won’t tell anyone what I saw, I would either not be believed, and then you’ll kill me. Or they will and you both will be killed, and then possibly me, just to be safe. This Geraldo would like to actually survive to retirement. Your secret is mine. I must ask though, do you really expect a happy ending for yourselves?\"\n",
        "The Queen sighs, \"Is that so wrong? That we still hope for one?\"\n",
        "\"You did bumble into a romance with a grand social divide, not something one could ever call wise. But, it’s not something one can judge or be judged for. Who initiated?\"\n",
        "Yao takes his lover’s hands and speaks, \"I did, we were, whatever were we in the start? Friends?\"\n",
        "\"Friends, always,\" smiles the Queen.\n",
        "\"It was innocent at first. I brought her tea and cookies as she studied late into the night in her library. Mathematics, history, chemistry, magic. We got to talking sometimes and before I knew it, I was looking forward to our time together.\"\n",
        "\"And what drove you to steal her from another man? The King, for all his boyishness, does seem to care for her.\"\n",
        "\"Then you are a fool, you are not needed every where and when as I am. Do not see the things I see. Hear the things I hear standing behind the King and Queen as he talks and talks and talks. Everything she is, the king is not. The King drags her to jousts. Fighting pits. Hunting. She loves poetry. She cares for the gardens. She can name all the stars. And after each night when she is called to his chambers she pulls away from the King’s touch like an injured animal. I did not steal her, I-\"\n",
        "\"I was never a thing to be had by anyone, the King rescued me all those years ago from that tower of cold stone, but he never saved me. He simply moved me into another prison. He never knew me, never cared to. But now, now whenever this man here holds me and asks for nothing but a longer embrace, I feel the walls fall away and the sun on us. By the gods I will not let that go.\"\n",
        "\"So what will you do with me?\"\n",
        "\"Swear yourself to secrecy and provide aid us in remaining secret and so long as I am Queen you will have no reason to fear my husband’s wrath or his headsman. You will fear for nothing and want for nothing. But if we are discovered, all our heads will roll. Refuse, and I will do what I can to turn back the clock. We will forget this exchange and return to normal. But, you will be without added protection. Our fates separate and unbound.\"\n"
      ],
      "decisions": [
        {
          "storyNode": "support_affair",
          "label": "Support the Queen's Affair"
        },
        {
          "storyNode": "refuse_support",
          "label": "Refuse to Assist"
        }
      ]
    },
    "support_affair": {
      "text": [
        "You take a knee before your Queen and lower your head, \"I am a fool, a gambler, and a hopeless romantic. Your gifts are generous and even if we were to be ruined tomorrow, I could not expect a better chance at happiness.\"\n",
        "\"Oh thank you, kind fool.\"\n",
        "\"The pleasure is mine, but the two of you, do please choose your rendezvous points more wisely. It would also serve you well to steal kisses, not hoard them. Stick to the shadows and tunnels. I will do all I can.\"\n",
        "And so a conspiracy of love was born. You would distract maids and nobles as your charges snuck through the castle. Lock the doors and stand watch for forbidden cuddling and the rare chance to sleep beside one another. With your Queen’s protection you become a terror in the castle, mocking and harassing all in sight. The King’s anger at any slight is subdued by a gentle caress from his wife. The man is a fool but his love is deep and great. The times are grand and Yao and the Queen become like friends to you."
      ],
      "decisions": [
        {
          "storyNode": "years_later_support",
          "label": "Years Later"
        }
      ]
    },
    "years_later_support": {
      "text": [
        "Emboldened and happier than ever, the Queen takes a more prominent role in her governance and the kingdom finds itself enjoying years of progress and lessened bloodshed. It would all be wonderful, until the day passions went too far and the Queen is found with child while the King is away managing a war against monsters in the West. The fool, the butler, and the Queen are all thrown into the darkest dungeon by the crown prince who rules in his father’s stead. No headsman comes for you or them and months bleed into what seems like years. When the Capital falls to the monsters’ invasion and their giants and dragons break their way into the dungeons and let in sunlight you haven’t felt in ages, you feel almost thankful towards them.",
        "A wizard in a black robe turns all the cell bars into dust and reaches out his hand, \"The Dark Lord has claimed this city as his own. Do not worry, be useful and we won’t harm you. Now, who are all of you?\"\n",
        "You can’t tell if this is grand luck or a rotten turn of events. You laugh without a care as to which it is, \"Just a bunch of professional fools.\"\n",
        "THE END \"Set of Fools\""
      ],
      "final": true
    },
    "refuse_support": {
      "text": [
        "It is a rare thing to be offered a chance to turn back time and you take it happily. All returns to normal for some time. But it seems the Queen's words were not absolute. Months later you awake to a racket in the castle as news spreads of the Queen eloping with her servant. The King flies into a violent cycle of depression and rage to which you are a frequently the victim of. This continues for weeks until at a fateful council meeting the ministers and generals end the King's life and place his young son as the new king and their brand new puppet. Without a father or mother the boy becomes oddly attached to you. From then on your days are filled with entertaining the boy and trying to make the castle feel a little less empty.",
        "THE END \"The Boy King's Fool\""
      ],
      "final": true
    },
    "run_queen": {
      "text": [
        "The Queen gasps as you dash out of the library down the hall. Your mind is racing and your bells are ringing. \"Of all things, an affair! The Queen has a husband and son! Oh no no this could mean her head! Even worse, it could be my head!\" Before you know it you have arrived before the King and the rest of the council.",
        "King Nichtos looks tired despite the day having only recently begun, \"Geraldo? You look like you’ve seen something terrible. What’s on your mind?\"\n",
        "A gentle hand falls on your shoulder, \"Yes, good fool, is something the matter?\" It is Queen Desi in her golden gown, looking every bit the concerned friend. Coming from behind her is Mr. Yao, with a pot of tea and set of cups, a look of knowing in his eyes.\n"
      ],
      "decisions": [
        {
          "storyNode": "expose_queen",
          "label": "Expose the Queen"
        },
        {
          "storyNode": "keep_secret",
          "label": "Act Natural"
        }
      ]
    },
    "expose_queen": {
      "text": [
        "You point with a shaking finger at the Queen, \"Adulterer! Sire, your wife is having an affair with the butler!\"\n",
        "\"What?! You dare insult my wife like this? Guards! Take the fool!\"\n",
        "\"What? No! I tell only the truth!\"\n",
        "\"Again with the blasphemy! I’ll feed your tongue to my dogs!\"\n",
        "\"No don’t hurt him! It is true, husband. It is true.\"\n",
        "\"Desi? Love?\" Nichtos’ face of shock turns to anger and all in the room are enemies. \"If any word of this spreads outside this meeting, none of you shall survive. None. This is a matter between a man and his wife.\" All leave promptly as Nichtos grips the table with a white fist. \"Yao. Geraldo. You two stay.\" The King falls back in his seat and takes a long sad sigh, looking all the while simply a tired man.\n",
        "\"How could you? I- I fought tribes of orcs for you. I slew giants. I killed a dragon for you! My companions, my friends, died to save you. I love you.\"\n",
        "\"I will be forever grateful for their sacrifices, but they cannot force me to love you, not any longer.\"\n",
        "I remember finding you in that tower, you were glowing. Those magical weeks we spent in bliss. By the gods Desi, we have a son together. How could you do this to our family?",
        "\"Once you were my hero. And once I did love you. But things change. I changed.\" \n",
        "\"I built you a library with every book in the world.\"\n",
        "\"And only once did you ever visit me there, or take an interest in what I read. What I learned. You only talk of hunting and past battles. Of dead friends.\"\n",
        "The King’s voice creaks and shakes as his eyes soften and his jaw hangs down, \"But I- I thought you liked hearing my stories. I thought we were happy. I-\"\n",
        "\"Please, dear. Anymore will only hurt you. I am lost to you.\"\n",
        "\"Fine then. If I have lost you, then I will win you back.\"\n",
        "\"Try all you wish, my heart is decided. What will become of Yao? Will you hurt him?\"\n",
        "\"No, that would make you hurt. I will win your heart like a man, not a jealous boy. Now, please leave me. My spirit cannot bear so much so quickly.\" The Queen and Yao take their leave leaving you alone with the King who sits with eyes that threaten to release welling tears, his breath short and hiccuping. All regality gone, the throne room holds only a shaken man and his dazed fool.\n"
      ],
      "decisions": [
        {
          "storyNode": "comfort_king",
          "label": "Comfort the King"
        }
      ]
    },
    "comfort_king": {
      "text": [
        "For the first time in your service you feel a sense of duty, a need, to care for your lord. You take pity on the man who has shed all kingly airs. He does not recoil at your touch on his hand and when you place your other on his shoulder he grips your hand with his. He crushes it with terrible strength, but you bear it as best you can in the minutes until his breath steadies. The King releases you and makes to leave without a word.",
        "\"Where are you going, my King?\"\n",
        "\"To the library, it’s time I learned who my wife is.\"\n",
        "From then on the King, nor the Queen, would call on you again. King Nichtos would spend tireless days working to regain the Queen’s love but, all efforts would end in failure. The Queen would never relent in her love for the butler. Oddly enough though, their relationship would improve drastically when the war against the Dark Lord began. With no time for love they learned to rely on each other as co-rulers and even while the world burned, they eventually found themselves friends. Luckily for you, with the marital problems and war congealing into a more chaotic court life than ever before, the jester Geraldo is mostly forgotten. Free to lounge in the gardens and wait for the day someone needs a fool besides themselves.",
        "THE END \"Forgotten Fool\""
      ],
      "final": true
    },
    "keep_secret": {
      "text": [
        "\"Oh, nothing is the matter. Just a bit of rough sleeping.\"\n",
        "\"If you say so. Yao, pour the fool some tea, they need it.\"\n",
        "The butler pours you a cup and it does wonders to soothe your roiling stomach, \"Ah, thank you Yao.\"\n",
        "\"Well then, everyone sit down, let’s get this over with,\" says the King.\n",
        "The oldest minister is the first to speak, \"Good morning your majesty, I am sorry to inform you that Miss Willow Stein and her monsters’ rights activists numbers have grown past expectations.\"\n",
        "\"She’s just a girl, so what if she has some rabble to cry over dead orcs with?\"\n",
        "\"Well, that’s the issue, there have been reports of sabotage and theft of monster corpses by masked men and women. Some of which were seen attempting to burn down the Stein monster hunters guild house last night. We gave them too much freedom to hawk their ideas and now they have turned treasonous.\"\n",
        "\"I see, we’ll have to nip that right away.\"\n",
        "I have a number of gods fearing faithful ready to act on your command. Miss Willow and some supporters will be traveling out of the Capital soon to spread their message, an opportune moment to do some, as you put it, 'nipping'.",
        "\"I see, I see. Tell these faithful of yours to make it look like a monster attack-\"\n",
        "\"No, husband. You’ll only make martyrs of them. This requires a more delicate touch. Place spies in their meetings, follow them closely and discredit them from within.\"\n",
        "\"Wise words as always my dear, it will be as you wish.\"\n",
        "The meeting carries on like this for hours. Listening endlessly to cloak and dagger plots interspersed with issues of budgeting and discussion of rumors. As the generals discuss a disturbance in the West, something to do with monsters in abnormal numbers, you cannot help but stare at the Queen who stirs the spoon in her tea listlessly. Her neck bent over and her shoulders sagging as if her crown had a great weight. Her eyes only rising whenever a man at the table says something uniquely cruel or foolish and she points out the flaws, which the King rarely disputes. She can make men bow to her, but this place of power seems to suck the life from her. The Queen notices your stare and she is not alone.",
        "\"Hold on a moment, Geraldo, you’re staring daggers into my wife. You lecher, stop ogling and liven up this meeting with a joke would you?\"\n",
        "Mr. Yao comes from behind the Queen and serves her fresh tea. At the sight of him and the scent of the drink her face lights up like a young maiden."
      ],
      "decisions": [
        {
          "storyNode": "joke_love",
          "label": "Tell a Joke"
        }
      ]
    },
    "joke_love": {
      "text": [
        "You’re stunned for a moment at the King’s blindness towards the woman beside him and can only sit silent. \n",
        "\"Geraldo, if you cannot even tell a good joke when asked what am I even paying you for?\"\n",
        "\"This is a paid position?\"\n",
        "\"Of course it is. Isn’t it?\" the King looks over to the minister in charge of finance and the man only shrugs. \"You’ve been my fool for more than a few years now Geraldo, how the devil have you been getting by?\"\n",
        "\"I’ve been pretending to be the Queen’s dog, she feeds me daily and has me sleep in her bed at night.\"\n",
        "\"A dog? Oh, now I get your game, fool. Very good, wasn’t it love? The only dog in your bed is I, eh?.\"\n",
        "\"Indeed, husband.\" Queen Desi sighs before looking at you quizzically and you can only reply with raised eyebrows that make her stare into her tea and stiffly stir in sugar. \n",
        "The meeting carries on into the late afternoon before all retire for the day and when you return to your room you find a letter waiting on your bed with a red royal seal that reads,",
        "\"Fool. Come to the library at the stroke of midnight, we have matters to discuss.\"\n"
      ],
      "decisions": [
        {
          "storyNode": "flee_castle",
          "label": "Flee the Castle"
        },
        {
          "storyNode": "obey_summons",
          "label": "Obey the Summons"
        }
      ]
    },
    "flee_castle": {
      "text": [
        "Like you would obey such a thing. The jig is up and it is time to make haste!"
      ],
      "decisions": [
        {
          "storyNode": "stables",
          "label": "Head to the Stables"
        }
      ]
    },
    "stables": {
      "text": [
        "You make a break for the stables and dash behind some barrels to observe the mass of ministers and generals boarding their carriages out of the castle grounds. Across from them are some bored looking guards talking to one another as they stand by the horses."
      ],
      "decisions": [
        {
          "storyNode": "guards_horse",
          "label": "Try to Get a Horse from the Guards"
        },
        {
          "storyNode": "carriage",
          "label": "Try to Join a Carriage"
        }
      ]
    },
    "guards_horse": {
      "text": [
        "\"Good day my friends!\"\n",
        "\"Oh, Geraldo, the Queen wishes to speak with you.\"\n",
        "\"Oh I know, but she’ll have to wait, the King has sent me on a vital errand in the city.\"\n",
        "\"Our Queen described her need as, urgent. You’re going to have to come with us.\"\n"
      ],
      "decisions": [
        {
          "storyNode": "pity",
          "label": "Please, take pity on me"
        },
        {
          "storyNode": "insist_1",
          "label": "I'm sorry, but I have orders"
        }
      ]
    },
    "pity": {
      "text": [
        "\"What does pity have to do about anything?\"\n",
        "\"Good sirs, do you not remember what happened to the last Geraldo, beaten and torn apart by horses? Please sirs, let me ride one of these horses, otherwise you’re going to watch them kill me.\"\n",
        "The guards look to each other and their faces speak of remembering an awful sight. One of them nudges the other, \"Let the jester be. Their life is a perilous one. We just have to stand around all day.\"\n",
        "\"Fine, then, we never saw you. Good luck, poor fool.\"\n",
        "\"Bless your hearts, may the gods be kind to you!\"\n",
        "Mounting a black mare you ride on past the leaving carriages and through the great castle gates. When you look behind you you see guards pour out of the castle into the stables and a great bit of shouting begins with them and the guards you duped. But, that is their own issue now. You drive your legs into the horse and race through the city faster than orders to capture you can spread. Your destination? Anywhere but here!",
        "THE END \"Thieving Fool\""
      ],
      "final": true
    },
    "insist_1": {
      "text": [
        "\"Do you have any sort of letter or proof of such a thing?\" asks the guard.\n",
        "\"Do you really want to be the one to deny the King’s equally, if not more urgent, request?\n",
        "\"Either present some proof or it's the dungeons with you.\"\n",
        "\"Um,\" you struggle to voice anything convincing.\n",
        "\"I see, dungeons it is.\"\n"
      ],
      "decisions": [
        {
          "storyNode": "to_dungeons",
          "label": "To the Dungeons"
        }
      ]
    },
    "to_dungeons": {
      "text": [
        "You are taken to the dungeons kicking and screaming. Through the iron gates and down black stairways your already horrid outfit is torn and dirtied. And finally you are tossed into a dank little cell at what feels like the bottom of the world.",
        "\"Well hello there, Geraldo,\" laughs a voice in a cell distantly to your left.\n",
        "\"Who’s there? How do you know me?\" No reply comes for a minute or so but you can hear quite a bit of shuffling going on beneath you when the stone your butt rests on suddenly lifts to reveal two older and bearded faces crawling out of the revealed hole. They reach out a hand each and you shake them warily.\n",
        "\"Pleasure to meet ya. I’m Geraldo, or well I was at least, number thirty-five to be precise,\" says the black haired man.\n",
        "\"And I’m thirty-two!\" says the greying man. \"What number are you? Thirty-six?\"\n",
        "\"Thirty-seven.\"\n",
        "The nearer voice laughs, \"King Nichtos sure does burn through his fools. I stepped on and broke the man’s favorite toy when he was young. Little bastard’s first royal act was throwing a man in a dungeon, seems he got a taste for it. Number thirty-five over there got a bit too intimate with the King’s mother one time.\"\n",
        "\"Honestly, I still think it was worth it, what a beauty! So, what are you in for friend?\" \n",
        "\"I spotted the Queen being intimate with her butler, and then I was spotted too.\"\n",
        "\"Oh ho! Best of luck to her, anything that could hurt that damn King.\" \n",
        "\"What, no pity for me being thrown in this hole with you?\"\n",
        "\"Oh yes, not pity at all, see we’re getting out of here! With another set of hands we can dig even faster. We’re getting out tonight!\"\n",
        "True to their word, an hour after their meager soup supper the Geraldos complete their tunnel to exit outside the castle walls and into the fresh night air. Without a moment to lose you and your fellow fools make for the docks and stow away onto the largest ship you can find. When morning comes and the ship takes to the sea, with your band undiscovered, you rest easy in a successful escape. Your journey has been an odd one, first a random civilian, to royal jester, to prisoner for a day, to grand escapee, and now stowaway. All in all, an impressive addition to the Geraldo legacy.",
        "THE END \"Geraldos\""
      ],
      "final": true
    },
    "carriage": {
      "text": [
        "You run on over the carriages, the last to board there transport is the old minister who mentioned wanting to get rid of the monsters rights activists. \"Excuse me sir!\"\n",
        "\"Wha- oh, hello there Geraldo. For what reason does the royal fool approach a man of the cloth?\"\n",
        "\"I’m here on the King’s behalf, he had to relent before his wife, but he is indeed very invested in your idea on how to deal with this 'Willow' girl. He wants me to help, so I can report back all the gruesome details.\"\n",
        "\"Is that so?\" the old man smiles wryly, \"I knew the man would see sense. Climb in, we have much to discuss.\"\n",
        "The Next Day",
        "Like you’re about to help with some kind of attack on anyone. You slip out of the church once the minister had gone to bed, steal a set of his fine white holy clothes, and wait for Willow Stein and her band of activists to leave the city the next morning.",
        "You run up to the green-eyed and proud woman at the head of her wagons of people and wave her down, \"Have room for one of the cloth?\"\n",
        "She looks at you with a wrinkled brow and a slight smirk, \"What is a clergyman doing wishing to join us? You preach extermination of monsters.\"\n",
        "\"Well let’s just say I’m more foolish than holy and leave it at that.\"\n",
        "\"You’re a desperate fool then, my sources tell me my companions and I are surely going to be pursued by vile cutthroats.\"\n",
        "\"To be honest, we’re in the same boat there.\"\n",
        "\"I suppose those of us with targets on our backs should stick together then. Welcome aboard. Let’s fight the good fight shall we?\"\n",
        "\"Let's.\"\n",
        "And that is how you found yourself binding your fate to a group of monster activists on the run from the King and his blades. It would be an exciting life and whether or not you really come to believe in their cause, you find yourself relishing simply being alive.",
        "THE END \"Foolish Company\""
      ],
      "final": true
    },
    "obey_summons": {
      "text": [
        "It’s unlikely you could get away. Hopefully the Queen is looking for conversation more than blood. When you reach the Queen’s chambers the door is ajar. You enter and see her waiting and her butler, sitting on her grand bed, holding hands.",
        "\"What do you have to say for yourself?\" the butler asks.\n",
        "\"You really should pay more attention to your surroundings if you’re going to have an affair. Luckily the King isn’t as sharp as his sword. Although I suppose that depends on what you will do with me.\"\n",
        "\"Well do not worry, I won’t have you killed unless it is necessary, tell me, is it necessary?\" asks the Queen.\n",
        "\"It sure won’t help you, that’s for sure.\"\n",
        "\"Explain.\"\n",
        "\"It seems to me that if you’re so enamored with each other you're forgetting to be cautious, you’re bound to be caught by someone else soon enough. And when that happens, it means Yao’s head. And your head too, your majesty. And probably mine because dead jesters seems to be a trend in this family. You can either give up this romance and do your queenly duty, or go ahead and elope.\"\n",
        "\"My queenly duty was having a child I did not want, if we really are so careless as to be found out by the fool. Then I think it is time we vanished.\"\n"
      ],
      "decisions": [
        {
          "storyNode": "leave_with_queen",
          "label": "Leave with Them"
        }
      ]
    },
    "leave_with_queen": {
      "text": [
        "You are Geraldo number thirty-seven, thirty-seven fools divided over ten kings. The foolish thing would be to not take this chance, \"It is time to flee, for all of us.\" \n",
        "\"Won’t someone come for us?\" Yao says.\n",
        "\"Someone will no matter what we do, it is only a matter of time. This is only way any of us will be happy.\"\n",
        "\"Tomorrow then, caravans leave the city each day, we can easily buy passage on one. We can vanish in some no name town and live in peace.\" The Queen kisses her lover's hand. \"We'll be okay.\"\n",
        "\"Okay, then, I'll make the preparations,\" smiles the treasonous butler.\n",
        "The Next Day",
        "You, the butler, and the Queen are all dressed in mundane clothes stolen from the servants’ laundry and approach a caravan finishing loading cargo into its armored wagons. No one gives any of you a look as you board along with a family of modest wealth. Not after rubbing a bit of dirt into the Queen’s face to get rid of her royal complexion. The caravan leaves the city without a hitch. The royal servants are still scouring the castle for their missing queen when you all ride to seek freedom.",
        "\"I suppose love does liberate you, eh?\" you nudge the lovebirds to your side who haven’t stopped embracing since taking their seats. The pair roll their eyes and do their best to ignore you and submerge themselves in each other. You simply chuckle and stare out the back of the wagon. You wonder when the servants will find your last joke. You can just barely make it out as you pass through the city gates, atop the flagpole of the highest tower of the castle on the hill, instead of the royal flag, what whips in the wind instead is your red jester outfit. Bells ringing.\n",
        "THE END \"Third-Wheeling Fool\""
      ],
      "final": true
    }
  }
};

module.exports = the_royal_fool;
