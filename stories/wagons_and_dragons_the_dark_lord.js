const wagons_and_dragons_the_dark_lord = {
  "content": {
    "start": {
      "text": [
        "Before the Dark Lord led great armies to reclaim the Dark Lands and ushered in a new era of prosperity for monsters, he was nothing. Less than nothing, an accident. You are that accident.",
        "In a frontier forest in the west there is a grave holding a thousand rotting monsters. Their bodies turn to ooze in the summer sun, the magic in their bodies made viscous by the misery of their tragic ends at the hands of adventurers and settlers. The magic pools and mixes with their vengeful souls until a new world the size of a pond is formed beneath the grave. A perverted primordial soup. These thousand souls and their magic continue to mix and mutate until you, the being that would become the Dark Lord, are born.",
        "Your body is little more than a brain, tail, and eyes. You propel yourself about your little magic pond and look upon the skulls of your fathers, mothers, brothers, and sisters and all your kin of tens of races. You can hear each of them speaking to you, all their last dying breaths and hopes fusing with you. You know you cannot stay here, this world of darkness and wild magic is not where one can truly live. You will be the surrogate for a thousand souls, born to live the life those taken too soon could not. You have to leave the nest.",
        "The souls inside you pound like a thousand offbeat hearts and you feel bones sprout from your tail to become a spine. From there come the ribs and more arms than you know what to do with. You use them all to claw out of the membrane of your world and through the soft rotted bodies of your creators. When your eyes receive their first taste of sunlight you see a sight that makes claws sprout from your skinless fingers. A dwarf in heavy armor, axe at his side. An elf all in black but for a bow on her back and two silver daggers on her sides. A human woman in holy clothes with a golden staff. They are all setting sticks and oil atop the pile of monster corpses you have called home since your birth moments ago. In the distance a grey-bearded man in simple clothes removes the horns from a felled minotaur. The beast's chest is caved in and burnt, its head full of arrows.",
        "The holy woman is approaching your corpse home, the top of her golden staff is aflame and her chants fill you with ice. The others in her party laugh and take seats to watch the burning soon to come. The voices in your grave swirl around you as an ocean storm. Each screaming for something else. All demanding a different kind of salvation. Hide! Hide and Live! Kill them all! Dominate! Smash! Let the magic flow through you. Become one with it!"
      ],
      "decisions": [
        {
          "label": "Become a Human - Blend In",
          "storyNode": "become_human"
        },
        {
          "label": "Become a Monster - Dominate",
          "storyNode": "become_monster"
        }
      ]
    },
    "become_human": {
      "text": [
        "Survival is salvation. No matter what form it takes. You scan your memories for humans your creators saw. Images of violence and vulnerability teach you the tautness of human skin. The way the bones press out from within. Their voices and the way their tongues contort. With all this knowledge you feel your skeleton compress and contort. Your hundred arms recede into you to sprout two human arms and legs. New black organs form inside you and human-like flesh wraps around these new bones like vines wrapping a cage. But it is a cage that will keep you alive.",
        "You drive a gore-coated arm out from the pile of dead and reach for the holy woman. “Help! I’m trapped! I can’t breathe! I can’t breathe!” Your newly formed tongue and throat are raw, and your voice comes out like cracking branches. The holy woman screams and drops her staff at the sight of you. Her compatriots move in an instant to ‘save’ you. The dwarf lifts the heavy and nearly indistinguishable bodies while the elf and wizard take your arms and pull you from your terrible womb. The next thing you know the adventurers are carrying you off somewhere and the strain of your transformation sends you into the familiar black void of sleep.",
        "In what feels like only a moment later you are awoken to a dwarf yelling by your ear with his deep and rumbling voice. “Open the gate! We have injured!”",
        "“Sure he’s not dead already? We don’t need any diseased corpses in town.”",
        "“There’s going to be two corpses in town if you don’t open the bloody gate already!”",
        "“Could you please not be so loud?” you croak out.",
        "“See! The lad is alive, now hurry up!”",
        "The young guard on the gate sighs and his shoulders slunk as he goes down and swings open the small gate into town. The elf and holy woman help you over to the town well and pour cool water down your raw throat. You notice you’ve been wrapped up in a leftover blanket, as underneath you are utterly naked.",
        "“Good stranger, how are you feeling? What do you need?” asks the holy woman.",
        "“What would a human say now?” you think to yourself."
      ],
      "decisions": [
        {
          "label": "I need a drink!",
          "storyNode": "enter_town"
        }
      ]
    },
    "enter_town": {
      "text": [
        "The wizard and dwarf’s eyes light up a bit and get wry grins. “Now that’s what we like to hear!”",
        "The nearest tavern is just on the other end of the town square. It’s nameless but boasts a sign with a full moon carved into it. As you approach you have strength in you to walk unassisted and look around the town. It’s a simple place, only one or two buildings two stories tall. These being the tavern and the Mayor’s office. The square is busy; children battle with wooden swords. Wives gut fish and rabbits for dinner. Men cut wood and raise walls for new buildings. A bed of flowers of a dozen colors bloom in front of the Mayor’s office. The people are dirty and tired, but smiling and laughing.",
        "The happiest though are the ones on break enjoying sitting down with friends and cool drinks. A large crowd of men and women sit around a portly man telling a story that receives raucous laughter.",
        "“A round for my friends and I, this fella we dragged in has got a story!” The dwarf pulls out a seat for you and the rest take their seats around you. “Tell me friend, what’s your name? And how’d you wind up stark naked in a pile of rotten abominations?”",
        "The holy woman flicks the dwarf, “Darqin! Come off it, the poor man has been through enough already.”",
        "“No, no it’s alright. But, might I ask who you all are?” You need to keep blending in.",
        "The holy woman smiles at you, “Oh, my apologies, I’m Happiness. My impolite friend there is Darqin. Our elf is Yana. And the wizard here is Slab.”",
        "“I’m sorry, your name is Slab?”",
        "“My parents were geologists, weird ones. But it’s my name,” he shrugs.",
        "“…Well, good to meet you all. And thank you, truly. Now, who am I…?” ",
        "You search your mind for the best lie to tell. The souls inside you once more offer up their memories. Flashes and dream-like remembrances of monsters observing humans driving wagons full of food, clothes, and gold wash over you. Merchants. Many of the dead inside you killed such people. But other memories also rise. Visions of human hunters invading your kin's forests, killing with abandon. Goading great beasts off cliffs by the herd. The most terrible memories of hunters who even ate the flesh of monsters. Your people starved as a result, but their eyes feasted on a banquet of deadly skills and knowledge.",
        "Which should you be? Dive into your human disguise as a merchant? Or walk between the worlds of prey and predator as a hunter?"
      ],
      "decisions": [
        {
          "label": "I'm a Merchant",
          "storyNode": "merchant"
        },
        {
          "label": "I'm a Hunter",
          "storyNode": "hunter"
        }
      ]
    },
    "merchant": {
      "text": [
        "“I’m a merchant. I was on my way to the next town when some bandits jumped me. Took my cart, horse, everything. Beat me and threw me in with the corpses, bastards.”",
        "Happiness takes your hand, “That’s terrible, I’m so sorry!” ",
        "“I’m not sure what I’ll be doing now, not a coin to my name.”",
        "“What kind of merchant were you?”",
        "“Oh, y’know. Anything really. Food, clothes, books, weapons.”",
        "“That’s an odd variety of things. What guild are you with? Where are you from? What brought you to the frontier?”",
        "You’re starting to sweat from so many questions. “Guild?” you ask before taking a great gulp of your beer.",
        "Yana has a befuddled look on her face, “Yes, which one are you with?”",
        "“Ah, um, none? I’m not from here.” Memories of snake-men fleeing the deserts and into the forests come to your mind. For an instant you see yourself as a snake-woman crying over her dead lover, you can taste the salty tears falling into your mouth. His name was Hassa. “Came all the way from the south, deep deep south. No guilds down there, just people. And I’m sorry for being so late with this, my name’s Hassa- excuse me, Haza.”",
        "Slab refills your hastily emptied pint, “Good to meet you, Haza. Unusual name. What brings you to the frontier, all alone? Must have traveled for many long months.\"",
        "“I couldn’t stay where I was. Wasn’t very safe, lots of death and fire.”",
        "There's a silence around the table for a moment before Slab puts a hand on your back, \"Well, things are more stable around here friend. I'm sure you'll be back on your feet in no time.\"",
        "\"You think so?\" you say.",
        "Darqin gives a look with ruffled brows, “Now don't go spreading bad information Slab. Seems to be more monster attacks each week out here. And now Haza's here telling us there's bandits preying on merchants. And he doesn't even have a guild.”",
        "The wizard sighs and looks to the ceiling, “You couldn't leave it alone? I was just trying to be uplifting.”",
        "The banterers' attention turns to another as a stranger joins your table with a plate of cheese and bread. \"Hope you don't mind my joining.\" The man waits for no response before taking his seat.",
        ""
      ],
      "decisions": [
        {
          "label": "Examine the Stranger",
          "storyNode": "examine_stranger"
        }
      ]
    },
    "hired_hand": {
      "text": [
        "Soon after everyone has finished their drinks and food Sakurai leads you to his wagons.",
        "“Well, we can’t travel with you still wrapped in a blanket. Let’s see if I can find you something to wear.” He rummages around in the back of his wagon and pulls out a pair of faded canvas pants and a white cotton shirt. “Aha, it’s not much, but it’ll keep you going. Get dressed and climb aboard.”",
        "You dress yourself and turn back to the adventurers who nod approvingly at the sight of you. Darqin and Yana whistle at you as you climb to your wagon seat, it feels strange to blush for the first time. The adventurers soon follow after you and take their seats in the back. With all aboard Sakurai begins leading the wagons out of the town on the rocky road."
      ],
      "decisions": [
        {
          "label": "On the Road",
          "storyNode": "on_road"
        }
      ]
    },
    "dakori": {
      "text": [
        "As you come over the last hill you gain a perfect view of Dakori. The city is far larger than anything you can recall. There must be near fifty-thousand citizens settled inside, though the current count is now inflated beyond knowing by the influx coming to partake in the festivities. A river with three-bridges bisects the city and is less a river of water but tethered boats filled with all manner of humans and goods. The rhythmic sound of dwarven drums is like distant thunder. You can't help but think cities are wonderous things.",
        "With no danger in sight the adventurers have come off patrol and joined your wagon to play cards. “I really want to visit your homeland Haza, what with all the dragons, giant snakes, mummies and temples. Why haven't more heard of it?” asks Darqin.",
        "Your cold sweats around being discovered have long stopped and your cordial smile has improved quite a bit you think, but this game...You've played this one a number of times already yet still have little clue as to how it works. And at this point you're too afraid to ask. “I fold. What can I say? We’re a quiet people.\" Also, entirely a fabrication. But they'll never know that. Hopefully.",
        "“I could do with some more quiet,” chimes in Happiness, “No orcs troubled us or anything else, I wonder where they went. Raise.”",
        "“Well, let’s be happy for the easy payday. Fold.” Slab groans.",
        "“And to many more. All in.” Yana puts her pile of coins in the center.",
        "Darqin matches her, “Pansies, we all need a nice killing to keep ourselves sharp. All in.”",
        "You’re not sure what the cards mean but by Yana covering her face and Darqin’s cheers, the winner is clear. You've grown comfortable with these people, so much so you feel a bit of you bemoaning the journey's end as pass through the city gate. The souls in you grind their teeth at the feeling, but you cannot let it go fully.",
        "When the wagons finally stop in a guild courtyard Sakurai turns to you with a smile. “Alright, everyone! We’ve made it. Here’s your pay.” He happily hands you and the adventurers each a decently hefty bag of gold coins.",
        "“Um, why am I getting paid? In all of two weeks you never asked me to do anything. Is this how things work around here?”",
        "“Gods no man! You were robbed and needed a helping hand! If you must, consider it a favor you owe me down the line if we ever cross paths again. It was nice to have some unusual company to spice things up.”",
        "Darqin slaps you lightly on the back and the adventurers give you soft smiles, smiles you’d normally give to a child. “Psst, just take it friend.”",
        "“Ah, thank you, Sakurai. So, what next?”",
        "The merchant composes himself after a bit of laughter, “Well, you’re all free to join me at the auction, sure to be exciting. Otherwise, go and enjoy the festival!”"
      ],
      "decisions": [
        {
          "label": "Go to the Auction",
          "storyNode": "auction"
        },
        {
          "label": "Explore the Festival",
          "storyNode": "festival"
        }
      ]
    },
    "auction": {
      "text": [
        "You want to stay near this Sakurai fellow, you can't shake this feeling something is off with him.",
        "“You mentioned rare items, let’s go see what they have.”",
        "\"The auction it is,\" Happiness says. \"Maybe we could buy something useful with this pay.\" Her companions nod their heads happily.",
        "“It's settled then, just wait for the boys to finish unloading this wagon and we'll go.”",
        "It is exciting going through the city, Sakurai's wagon parting the small sea of people in the streets. People in an endless variety of costumes and booths with all kinds of foods and jewelry, it almost makes you forget yourself. The wagon stops before a crowd of merchants sitting with their families and patiently waiting by a newly erected stage.",
        "“Here we are. You all go and find some seats, I’ve got to drop something off and be right back.\" As Sakurai rides off the smell of old death sharpens around him. Free from the majority of the cargo disguising it with the smells of earth, iron, and rust, the stench fills the air. It oozes from an oversized glass jar in the back of the wagon. Leather wrappings obscuring its contents. Cloth rags stained green are strewn about as an ooze leaks from within. The souls inside you boil up once more, some plead you keep to yourself, others demand to know why the merchant smells of death. The angry voices are louder."
      ],
      "decisions": [
        {
          "label": "Follow Sakurai",
          "storyNode": "follow_sakurai"
        }
      ]
    },
    "follow_sakurai": {
      "text": [
        "“You all go ahead, I forgot I need to ask Sakurai something.”",
        "Your ‘friends’ give you a thumbs off as you head off. A focus takes you and you begin to trace the scent trailing off Sakurai. A familiar agility provided by your memories comes to you as you slink like a snake through the thick crowds after the merchant’s wagon. When the merchant comes to a halt he takes the bound jar and stands before a pair of guards stationed near a large tent behind the auction stage. He says something to the guards and they calmly let him enter. You circle around the tent and past the workers, it’s a good thing Sakurai lent you such plain clothes, you blend right in. A weather worn hole in the tent presents you with an answer to the smell of death. A tall man in black robes with a red sash is leaning on a table covered in books and documents, “I take it you’ve something interesting for me, old friend?”",
        "“Oh, I believe so.” Sakurai removes the jar's cork and leather bindings to reveal the beating eight-valved heart of a hydra. It writhes in a jar filled with its own green blood. Looking at it feels as if your own heart was torn from you. You can feel the soul inside the heart is crying out for someone to help it.",
        "“By the gods, where did you find it? I see it's already regenerating, that jar looks ready to overflow.\"",
        "“That’s why I’m trying to pass it on, ha! And you know I can’t go sharing secrets, without compensation. Put it up for auction and we split the proceeds, then I’ll share.”",
        "“Happily. I'll have the boys put the heart in today’s queue. But before that, come with me into the back so I can give you a sneak peak of the monsters in stock. I think I have something sure to impress you.”",
        "Sakurai begins to make his way out of the tent, “I’ll have to refuse, nothing like a good surprise.”",
        "The tall man chuckles a bit and rolls his eyes, “Oh course, come back after the auction and I’ll have your money.”",
        "\"You better! I've got some muscle with me, adventurers!\"",
        "The auctioneer laughs and waves his hands in mock terror, \"Oh, I'm terrified!\"",
        "Sakurai leaves laughing and the auctioneer has gone off with the jar into a separate curtained off section of the tent. You know you’ve got to get that heart. You’ll never be free of its cries, never be free of the fury of the souls inside you if you run."
      ],
      "decisions": [
        {
          "label": "Sneak into the Tent",
          "storyNode": "sneak_tent"
        }
      ]
    },
    "sneak_tent": {
      "text": [
        "You carefully crawl under the tent wall and scan the room for anything useful. The room is filled with tapestries and statues, at the center of it all an ornamental sword propped up for display beside a suit of elven armor. You could take it and kill the auctioneer, then take whatever you need. Can you do it quick enough? Quiet enough? Your thoughts cease and you curse a goblin’s curse when you hear the auctioneer’s voice call out, “Sakurai? You're back already? Did you forget something?”"
      ],
      "decisions": [
        {
          "label": "Go for the sword",
          "storyNode": "go_sword"
        },
        {
          "label": "Make up a story",
          "storyNode": "make_story"
        }
      ]
    },
    "go_sword": {
      "text": [
        "You take action and rush for the sword. The auctioneer runs for the exit at the sight of you. “Guards! Guards! Help!” By the time you have the sword in hand the two spear wielding guards have come inside. There’s no time for negotiation or mercy. They stick you like a pig and you bleed black monstrous blood that pools at your feet. You feel yourself turn back into the black ooze you were born from as you die. The world will see a Dark Lord one day, but it will not be you.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "make_story": {
      "text": [
        "“Hello, stranger...What are you doing in my tent?” He calmly rests his hand near a dagger on his waist. The auction is in full swing and the applause of the crowd makes it hard to think.",
        "“Oh, no trouble sir. I’m Haza, Master Sakurai sent me to get a list of the monsters you were selling today.”",
        "“I just sent him on his way, he said he didn’t want to know.”",
        "“He had a change of mind. He told me to tell you: ‘Why be surprised when you can make a more informed purchase?’ He just didn’t have the heart to come back himself.”",
        "The auctioneer looks at you in your workman’s clothes as you give him your best friendly human smile. You have to suppress a desire to show a toothy grin when he takes his hand off his knife. “Hmph, that man never ceases to amuse. Well, come on back, Haza.” You follow after the auctioneer to see a tent in almost full darkness, the only light coming from a few lanterns spread about. “We keep our stock mostly in the dark to keep them tired and groggy. Look here.”",
        "The auctioneer shows you two rows of cages of varying sizes. Crammed tight in birdcages are a rainbow of faeries. Over half the larger cages hold orcs of varying size. Some stand proud and stare down the auctioneer as he passes, the thin ones lie down and hold themselves. The remaining cages hold goblins, kobolds, and snake-men of various colors and tribal markings. The monsters sniff the air curiously as you pass by, pressing themselves to their bars to be closer. You can soon feel over a hundred eyes glued to your spine. They know you are different.",
        "“I’m not from around here, from deep south actually, so this is all a rather large surprise. Why do you sell them?”",
        "“Really from some backwater, aren’t you? We haven’t got a way to preserve their organs quite yet, so this is the next best thing, selling them wholesale. Our medicine and alchemy shops look more like butcher shops than the butchers’ these days.\" He lazily tosses some fruit into a few of the cages. \"Ah, but look over here, the top shelf piece. Keep your distance, it’s a dangerous one.” He holds the lantern up to the final and largest cage, inside sits a sad eyed griffin, its wings tied by thick chains. “Magnificent, isn’t she?”",
        "Your eyes have adjusted to the darkness and now you see more clearly than ever. You can see all the eyes of the creatures around you, glowing in the dark, looking for something, someone to be their light."
      ],
      "decisions": [
        {
          "label": "Push Auctioneer into the Cage",
          "storyNode": "kill_auctioneer"
        }
      ]
    },
    "kill_auctioneer": {
      "text": [
        "“They really are magnificent.” You wait for the crowd outside to gasp and applaud once more and you take the auctioneer by the legs and pull. His head falls forward into the cage and the griffin quickly thrashes him against the iron bars. His bones crack like twigs. You rummage through the corpse’s pockets and find a ring of keys and begin freeing your kin in the cages.",
        "Once free, the orcs help you remove the chains binding the griffin. Her beak is wet with the auctioneer's blood. A female orc towers over you and sniffs you heavily. “You look human, but you smell, different. You smell like us, all of us. What are you?”",
        "“I’m not sure, but we can figure that out later. Right now, you all need to get out of here.\"",
        "“How? There are humans everywhere.”",
        "“I don’t know – I don’t know.” The sound of a beating heart strikes your mind. “The hydra heart. Find me a green glass jar, it’s here somewhere.” A snake-man provides the overflowing vessel and what comes to mind feels almost natural. You're a being born of magic, magic that turned souls into flesh, surely you can impart some of that?",
        "You take the auctioneer’s knife and cut your arm. The monsters gasp at your blood as black as night. You drip the blood inside the heart and flesh and bone is soon growing from it. “When this is done, it will be big enough to force our way out of here. Then we run as far as we can.”",
        "Your heart drops when the familiar gentle voice of Happiness rings out from the other side of the tent. “Haza? Haza are you here? Sakurai said he never saw you.”",
        "Darqin’s gruff voice follows, “C’mon buddy, you’re going to miss out on the whole auction.”",
        "“Haza! I found this local beer I need to share with you, are you here?” calls out Slab.",
        "You silence the monsters as you wonder what to do. Flee now from this horrid society and become seen freeing monsters, or hold onto your human disguise to see what else you can do?"
      ],
      "decisions": [
        {
          "label": "Re-Join the Humans",
          "storyNode": "stay_humans"
        },
        {
          "label": "Stay with the Monsters",
          "storyNode": "stay_monsters"
        }
      ]
    },
    "stay_humans": {
      "text": [
        "“All of you, listen to me. You’re going to be okay. When the hydra is grown, go west, go until you reach the sea. Take care of each other.” You leave the monsters and go past the curtain to return to being human. “Sorry guys! I got caught up talking with the auctioneer.”",
        "“No worries, was it fun?” says Happiness as she takes your arm in hers.",
        "“C’mere Haza, try this, it’s to die for.” Slab hands you a pint of, something, that to your shock is really darn good.",
        "“See anything cool back there?” asks Darqin.",
        "“Yeah, I think you’ll be seeing them soon.”",
        "Some ten minutes pass and you are back at the seats and see a very drunk Yana and a confused Sakurai wondering what you had to ask him.",
        "“Well, I was wondering if you would be willing to hire me again, I don't have much else going on for myself these days.\"",
        "The not yet middle-aged man looks at you like one might look at a nephew, “Well, you make for good conversation. Why not? But don’t be expecting things to be easy.\" He tries to look firm, but the man cannot suppress an almost giddy smile, \"I gotta make you work for your pay this time- by the gods! What the hell?!”",
        "A roar that shakes the world tears through the air as the black auction tent explodes and a towering eight-headed hydra rises into the sky. It seems your magic blood gave it a serious power boost. Riding atop it are the all monsters you freed roaring their hearts out. The hydra rushes west, trampling building after building before climbing over the wall and racing into the distant forest. Happiness, Darqin, Yana, and Slab are dumbfounded for moments before they find their courage and chase after the escaped monsters. You cannot help but smile and have to cover your face in mock horror to hide your joy at your kin's escape."
      ],
      "decisions": [
        {
          "label": "Continue Making Use of Your Disguise",
          "storyNode": "continue_disguise"
        }
      ],
      "final": false
    },
    "stay_monsters": {
      "text": [
        "You’re done with pretending to be human. It’s time to be something more, your kin need you to be more. They need a leader. You look back at the gore that was the auctioneer, his head is missing, but the robes remain intact. You cloak yourself in the black and blood-stained robes, it feels right. You move with purpose and climb atop the griffin before a snake-man hands you the heart in the jar. “Follow me, we’re cutting our way out of this city. Hyah!” The griffin roars and the monsters follow behind as you rush forward through the tent. Your adventurer friends stand frozen as you barrel through them.",
        "It does not take long before city guards are launching arrows at you and your band. Worst of all, Slab stands back up and his staff begins to glow as he prepares a spell. Almost instinctively you cut open your arm again, and pour the blood in globs over the vibrating and growing hydra heart. You drop the jar to the earth below and its growth goes beyond imagination. With the thunderous boom of flesh exploding into existence an eight-headed hydra ten men tall crashes into the earth, sending Slab and the other guards flying in a whirlwind. The strong orcs and snake-men hold tight to the earth and all the smaller creatures hold onto them for dear life. When the winds pass, the monsters rush to the city wall unobstructed. They are stopped before the wall only for moments until the roaring hydra empowered by your magic flesh tears through the walls like something possessed. The monsters crawl upon the hydra’s wide and scaly back as it sprints west on gargantuan legs. From your view above it looks like a storm came through Dakori, leveling buildings by the dozen and setting great fires. You lead your kin west as the city and its river of boats burns.",
        "Many long hours later the hydra at last tires and you bring your monstrous stead to the earth. Your legs shake when you set foot on the ground once again, but you do your best to hide it. You have to lead these monsters. Take care of them. You took this cloak from your first kill, best make use of it. You don't turn around as you address your kin, “Faeries, use your dust to get a fire going. Orcs, see if you can find some game or anything else we can eat. Snake-men, tend to the wounded. Kobolds, find water. Goblins, on watch. We march at night from here on. Is that clear?\" There is no response. \"Did you hear me? There are surely hunting parties being sent for us, we must be quick- “Your gaze turns from the forest ahead to see the fifty-two monsters on their knees, including the griffin and hydra, their heads pressed to the earth. “What are you doing?”",
        "The oldest female orc speaks, “Honoring you, stranger, you are our salvation. We thank you, you saved us when our gods failed us. Stranger, you are our Lord. Our beloved lord with life-giving blood. Blood black as night.”",
        "As the sun sets the monsters press their hands together while chanting their thanks, “Lord. Lord. Lord. Lord. Lord.”",
        "The souls in you are singing. You were born in the ooze of the dead, you are born again as a Lord. A Dark Lord that will bring the world crashing down and build a better one. You hope you are ready.",
        "THE BEGINNING."
      ],
      "decisions": [],
      "final": true
    },
    "festival": {
      "text": [
        "The smells of street food and music in the air gets to you. “I want to see the city.”",
        "Sakurai nods with a smile, “Alright, then. Till we cross paths again.”",
        "Happiness takes you by the arm and off you go. It’s like nothing you’ve ever seen. Musicians roam down the streets with dancers trailing behind. Couples walk about in beast masks. And there is more food and drink readied than the thousand monsters inside you can remember seeing combined. You lose yourself in food and street games with the adventurers. When you win a stuffed wolf toy for Happiness and see her smile at you, you even begin to think she’s a bit cute. Everyone has been so nice since you became human, you really feel you’ve made the right choice. The reverie ends with the sound of shattering glass.",
        "You come off one of the crowded bridges and see a handful of apron wearing elves standing outside their bakery, rolling spins in hand. Behind them their window is gone all but for a few large shards still standing in the frame. Out front is a group of dwarves, beers in hand, red-faced, and cussing up a storm. Around them a crowd of onlookers and those stepping up the pace to get away quickly.",
        "“Pay for the window you ruffians!” says the oldest seeming elf. She pounds the pin in her hand like a club.",
        "“We didn’t break it! It was some kid!” replies a black-haired dwarven woman.",
        "“I know it was you! This is the third window this month, we’re barely making it by! Don’t make me call the guards!”",
        "“Call them! You got no case!”",
        "“I don’t need a case. My word versus yours.”",
        "“I’ve been in this city as long as you, I know my rights!” The dwarves have thrown down their drinks, trading them for tight fists and rocks from the road.",
        "The shouting match continues, but both sides seem reluctant to toss blows quite yet. Happiness looks to her friends. “Darqin, Yana. Can’t you do something?”",
        "“What do you want us to do? We don’t know what really happened. Best not get involved. Darqin, back me up.”",
        "\"They aren't my clan, Haza, they won't listen to an outsider.\"",
        "Happiness looks on dejected. “Fine, let’s just go then,\" she sighs.",
        "Slab puts on hand on your shoulder. \"Haza. Let’s get out of here.”\n"
      ],
      "decisions": [
        {
          "label": "Get Involved",
          "storyNode": "get_involved"
        },
        {
          "label": "Don't Get Involved",
          "storyNode": "no_involved"
        }
      ]
    },
    "get_involved": {
      "text": [
        "“Haza! What are you doing?”",
        "You’re your own person. You do what you want to do. After being born from the souls of murdered monsters, you just aren’t comfortable leaving alone a scene of potential violence.",
        "“Um, excuse me? Is there any way we can avoid this getting bloody?”",
        "“What are you doing here kid? Get out of our business.” The head elf waves you away.",
        "“Get on out of here sonny, this ain’t your fight,” says the black-haired dwarf.",
        "Happiness comes into the corner of your eye and calls to you, “Haza! Get back here!”",
        "You take the payment from Sakurai for your company and toss it to the elves. “That should cover the window, more or less. Now can you all just go back to what you were doing?”",
        "The head elf smiles happily at the sack, more happily than you’re comfortable with. Maybe you gave her too much. Not being human really hampers your understanding of currency. “Deal!”",
        "“Heck no! Sonny don’t you know how much you just gave her? We appreciate it but we don’t need help from outsiders. Now elfie, give the lad his money back!”",
        "“He gave it to me! It’s mine now.”",
        "“Ain’t no honor in taking money from a fool, give it back, we’ll settle this ourselves!”",
        "“No!”",
        "“I said give it back!”",
        "The elf strikes the dwarf with her rolling pin with a hard clunk. Dwarf skulls are very thick though; the shorter woman tackles her elven attacker and takes her to the ground. Your bag of gold spills open and soon the crowd is jumping in for a bit of free money. The crowd pushes you forward into the growing melee and soon you cannot tell up from down as sticks and rocks and fists go flying. Everything is unintelligible until you feel an aching pain in your arm. The fighting stops as screams rise around you. You open your eyes to see all staring at you and a shard of glass from the window coated black in your blood. Blood black as night. Blood not even normal monsters have.",
        "“Monster! Monster!”",
        "You hold your bleeding arm as much of the crowd runs away in fright. Those remaining have taken up rocks and planks of wood as they hold you in place and send runners for the city guard. It feels like the end, you’ll die pinned to a wall by the people you just tried to help. Desperate to escape your monstrous origin boils to the surface and your eyes go red and claws sprout from your fingers. Your jaw grows as your teeth turn to fangs. You swipe at the mob as they advance and push them back, but more and more join them by the moment. The crowd may tear you apart before you can discard this human form. In the corner of your eye you can see Happiness covering her mouth as the adventurers watch you about to die."
      ],
      "decisions": [
        {
          "label": "\"Happiness, help me!\"",
          "storyNode": "help_me"
        },
        {
          "label": "Die Proud",
          "storyNode": "die_proud"
        }
      ]
    },
    "explain_yourself": {
      "text": [
        "Darqin can’t stop shaking his head, “We ate and drank together, and you're a monster?\"",
        "“How is such a thing possible? Slab?” asks Yana.",
        "“I’m a dropout apprentice wizard in my fifties, not exactly a font of knowledge.”",
        "“Thank you for telling us the truth, Haza.” Happiness says gently.",
        "“I told you that’s not my name, just some dead snake’s.”",
        "“You still chose it. And, I like it too. We all like you, else, well. You'd be dead.”",
        "Everyone’s clothes are dirty from their desperate scuffle out of Dakori. Darqin and Yana have their bloody wounds wrapped tight. They fought hard for you. You smile softly at them all, “Thank you, for saving me. I don’t deserve you.”",
        "“We should be apologizing to you, all this time, we’ve been killing creatures just like us.” Darqin shakes his head harder. “I can’t stand the thought.”",
        "Yana puts a hand on Darqin’s shoulder, “So what happens now? We stole that merchant’s wagon, bet my life there are hefty bounties on us now.”",
        "Slab has been drawing a map in the dirt of the continent and he crosses an X in the top left, “Only one way left to go, West. Deep into the frontier, where no one will chase us. Hopefully Haza can help us make some monster friends.”",
        "“And what if we get eaten?\" Yana drawls a bit sarcastically, \"No offense, Haza.”",
        "“None taken. It’s a legitimate concern.”",
        "Slab shrugs, “Quicker than being hanged as traitors after sitting in a cell for months.”",
        "Happiness has been mending your wounds carefully during this talk, she says to expect large scars. You think it is a small price to pay. “Is everyone in agreement then? We’ll head to west in the morning?”",
        "“I’m pretty sure I broke in the teeth of a half-dozen guards, sure won’t be forgetting me anytime soon.” Darqin extends his fist to everyone. “I’m in.”",
        "“I always wanted an interesting life; this will make it more so.” Slab joins his fist to Darqin’s.",
        "“Someone’s got to keep you drunkards alive.” Yana laughs and hits Slab’s hand with a hard crack. \"I'm in.\"",
        "“Once the church finds out I saved a monster they’ll deem me a heretic. What’s a heretic to do but join the monsters?” Happiness softly knocks her fist against each of her compatriots'.",
        "A complicated stew of emotions roils in you, “You’re all really okay with this?”",
        "Happiness can only chuckle, “We’re adventurers, aren’t we? It seems you offer the greatest adventure yet.”",
        "Some of the angrier voices inside you despise what is going on, but so very many of them feel excited. It is that feeling you hold onto. You join your fist with the adventurers and feel an unfamiliar and wonderful calm take you. You sleep that night eager to meet what the next day offers.",
        "Generations later; when the great histories are written about the Dark Lord and his four generals who took the world, they will note how it all began in a cave filled with friends.",
        "THE BEGINNING"
      ],
      "decisions": [],
      "final": true
    },
    "hunter": {
      "text": [
        "“I’m a hunter. I was tracking a bear spotted in the area. And I'm embarrassed to say that it was the bear that found me, while I was bathing nonetheless. I ran and hid in the corpse pile but got stuck inside.”",
        "“Ran from a bear and had to hide in rotting corpses?” The dwarf’s eyes furrow along with a pitying smile, “Barkeep! Another drink for this fool beside me.”",
        "Darqin flinches painfully as Happiness flicks him. “That’s enough mockery. Our friend here has clearly had a hard enough time as is. And, just what is your name stranger?”",
        "“My name?” The world goes black around you, replaced with the scene of a cave lit by fires. You are an orc mother looking out from a cliff upon the forest you were born in. Cradled in your arms is your sleeping youngling. You hum a gentle song to the boy and caress his hair. You look into the distance and see a town filled with fire lit homes and feel fear in you. It is the town you are sitting in right now. You feel the mother quash her fear and continue her song to her son. His name is Dima.",
        "“I’m Dima.”",
        "“Dima? First time I’ve heard that name.” Yana says, cocking her head.",
        "“Um, my family is way up North? Name’s get odd up there,” you lie.",
        "“I’m from north end of the Krenning Mountains, never heard of anyone called Dima.”",
        "Slab rolls his eyes at the pointy ear elf, “Oh lay off the lad you paranoid bat,” he refills your drink. “So what brings you to the frontier then, Dima? We’ve been killing monsters as a group for a year now, good pay in it.”",
        "“Well, y’know. Small towns can weigh you down. Wanted to stand on my own two feet, get a little adventure in my life.”",
        "All at the table get a glimmer in their eye. “Adventure you say? Well aren’t you lucky. We’re all kind of a little crazy for excitement,” says Happiness. “This town has a job actually, and we could really use an extra hand. We need to clear some orcs off a nearby mountain. Good pay and good fun, what do you say, Dima?”",
        "These adventurers are going to kill your kin. They’re going to kill Dima in the mountains. You have to stop them, somehow. It’s time to be a wolf in sheep’s clothing."
      ],
      "decisions": [
        {
          "label": "Join the Monster Hunt",
          "storyNode": "monster_hunt"
        }
      ],
      "final": false
    },
    "continue_disguise": {
      "text": [
        "You continue your journeys with Sakurai as his new hire and in the long months you find yourself once more not pressed to work so much. The man has a great loneliness within him, and you fill this void. A fact you take the utmost advantage of. You push him for training and make yourself into the ideal apprentice for his to forge into a fine man. Years pass as you absorb everything he knows of business, ingratiating yourself with his network, and creating a web of informants on all things monster related. You have to watch so many thousands be sold and killed, but you stay true to your path for the greater good.",
        "When you have learned all you can from Sakurai you part ways as good friends. You even continue to write to him often, he last wrote of having found a boy named Gamon he's considering making an apprentice.",
        "Ready to put your plan into motion you settle in the Capital and quickly rise through the ranks of a local guild. A process aggressively accelerated through carefully cultivated connections and the occasional hiring of cutthroats. Once all is said and done you have enough power and influence to buy up captured monsters wholesale en masse. All while simultaneously providing funding to monsters' rights groups that, to your surprise arose naturally. With enough greased hands no one questions where thousands upon thousands of crates of 'animals' are being shipped. Not when ten times more with monsters are flowing in regularly.",
        "You have never been to the west, but reports of monsters coming together in untold numbers under one banner tells you that your work has been done well. Soon you will leave the Capital and go west to lead the forces you have collected. But tonight, you have one more shipment of monsters to send to freedom. You wonder if you should have the histories tell that the Dark Lord was an upper management bureaucrat before the conquests. You give the thought only a moment before you doodle a black-cloaked figure with skeleton hands releasing torrents of lightning. \"Ah, yes. Much better.\"",
        "THE BEGINNING"
      ],
      "decisions": [],
      "final": true
    },
    "no_involved": {
      "text": [
        "You're meant to be hiding. Getting involved in what will likely become a brawl is not good hiding. You get back to enjoying the festival and win Happiness a second toy, this time an oversized bear. She gives you a kiss on the cheek and honestly, everything feels good.",
        "When the time to settle down for the night comes you are all on your way to an inn when Sakurai drives by in his wagon. \"Hello again, friends. Enjoy the festival, Haza?\"",
        "\"It has been fantastic, what did you get at the auction?\"",
        "\"Oh just a few things, some orcs, dozen faeries, even a part of a griffin. Too bad they had to put it down once it tried to escape. Bit the auctioneer's hand clean off, overzealous fool. At least I got the wings!\"",
        "You feel your heart sink down to your guts, while you had fun in town your kin were being sold and killed.",
        "\"What are you going to do with them?\"",
        "\"Could do anything, eat them, sell them, set them loose if I wanted to.\"",
        "The fog of today's excitement clears from your mind and you speak with purpose. \"Master Sakurai, would you consider hiring me again?\"",
        "The man raises an eye and extends his hand, \"I was hoping you'd ask.\" ",
        "And so, you set your fate."
      ],
      "decisions": [
        {
          "label": "Dedicate Yourself to Saving Monsters",
          "storyNode": "continue_disguise"
        }
      ]
    },
    "on_road": {
      "text": [
        "In only mere hours of riding you go further east than any of the souls in you have ever ventured. It may be best to see what information you can get from Sakurai, or maybe you should just enjoy the scenery on the way to Dakori."
      ],
      "decisions": [
        {
          "label": "Arrive at Dakori",
          "storyNode": "dakori"
        },
        {
          "label": "\"What are we transporting?\"",
          "storyNode": "transporting"
        },
        {
          "label": "\"What's the latest news?\"",
          "storyNode": "news"
        },
        {
          "label": "\"Any trouble about?\"",
          "storyNode": "trouble"
        }
      ]
    },
    "transporting": {
      "text": [
        "“So, what are we transporting?” you ask.",
        "“We tend to deliver salt and some luxury items to the frontier towns. Then we buy up their ore and the occasional batch of monster remains to refine in the cities. Though all we’ve got is iron and copper now.”",
        "‘Monster remains’, the phrase makes your ears twitch. You look at Sakurai and involuntarily sniff, you can tell he’s lying. There’s the scent of a slain monster on him. You can feel the souls of the creatures inside you twisting themselves into knots. Some want to strike Sakurai over the head with a rock, but that is not why you chose this form. You chose to hide. The calmer and more careful voices hold fast.",
        "You wonder if you even wanted to know such a thing, but you also wonder what else there is to learn."
      ],
      "decisions": [
        {
          "label": "Ask More Questions",
          "storyNode": "on_road",
          "consequences": [
            ""
          ]
        },
        {
          "label": "Arrive at Dakori",
          "storyNode": "dakori"
        }
      ]
    },
    "news": {
      "text": [
        "“Sakurai, I’m not really from around here, can’t remember the last time I was in a city. What’s the latest news?”",
        "“Well, expansion into the Dark Lands is going smoothly. The westernmost explorers should be reaching the coast in the next year or so. The monster culls are going well, we keep finding new uses for their bodies. New potions and elixirs keep popping up so fast I wonder when we’ll be making wine out of them! Haha I kid, I kid. Things are good, the mines and territory in the Dark Lands are making business good and food is cheap and plenty. That night black soil is so potent, farmers are turning profits that'd make you weep. It’s a good time to start a family and they’re coming in droves to settle out west.\"",
        "\"Ever think of joining them? Settling down with anyone?\"",
        "\"Me?\" He looks away and at the road, his usual smile stiffening a bit, \"No, it's not for me. What would my master, rest his soul, think if his apprentice left to go hack away at grass? No, the road is my partner.\"",
        "Sakurai turns the topic to the drama among his workers, all the while he begins to look older than his years to you."
      ],
      "decisions": [
        {
          "label": "Arrive at Dakori",
          "storyNode": "dakori"
        },
        {
          "label": "Ask More Questions",
          "storyNode": "on_road"
        }
      ]
    },
    "trouble": {
      "text": [
        "“Any trouble I should be aware of?”",
        "“Ah, yes. There’s been some bad riots in the southeast, dwarves are rioting against the elves again. Been getting very serious this time, the King may have to send the army in if tensions grow worse. Really too bad, I wish they could just get along.”",
        "“Really? The dwarf and elf you hired seem to get along well enough.”",
        "“Money has a way of making fast friends, long term ones though? I wonder.”",
        "Money, the sound of clinking coins bounces in your head. Like a fog, memories fall over you. You’re a goblin hiding in the bushes watching adventurers counting their earnings, coins plucked from the pockets of your friends. Things the goblins collected for their beauty. “Yes, money has an effect doesn’t it?”",
        "Sakurai smiles, \"It can rot a man's heart to sludge. But, in the right hands it can do some good. Hopefully when I'm old, and rich, gods willing, I'll be remembered as of the latter.\""
      ],
      "decisions": [
        {
          "label": "Arrive at Dakori",
          "storyNode": "dakori"
        },
        {
          "label": "Ask More Questions",
          "storyNode": "on_road"
        }
      ]
    },
    "help_me": {
      "text": [
        "\"Happiness, you saw! You saw I tried to help! I don't want to die-\" The town guards are pushing their way through the crowds, their spears high in the air. \"Please!\" No movement comes from her, only a quivering lip mouthing what you think is a goodbye. In your distraction you barely dodge a spear that slices your side. You hold the black seeping wound as you ready yourself for a final stand. The spears rush toward you and you close your eyes, expecting searing, terrible pain. Yet, you only feel a gentle breeze, soon followed by a great torrent of wind that blasts the mob down the road. When you open your eyes again the adventurers now stand between you and the bruised crowd coming to their feet.",
        "\"I’ll cover us, get Haza and go! Darqin, Yana, don't let anyone get close! Move it!” Slab casts a blinding light at the recovering mob who crumple back to the ground.",
        "Happiness takes you by the arm and you race over the bridge and towards the city gates. Darqin and Yana knock guards off their feet and throw them off the bridge while Happiness does her best to stop your bleeding with healing chants while on the run. It feels like she's setting your arm and side on fire, but the bleeding blissfully stops. You commandeer the nearest wagon available, which just so happens to be Sakurai’s. He curses and damns you all to a dozen hells as you ride back for Slab. Yana launches arrows into the pursuing crowd behind the old wizard, buying him precious time. He leaps into the wagon screaming and arms flailing like a chicken, \"For all that's holy let's get the hell out of here!\" Yana whips the horses and the wagon tears through the streets and out the gates. Horsemen are right behind you but Happiness chants and riles up the winds to create a great dust cloud that sends the riders' horses into a panic. Soon enough all you can hear are the sounds of hooves, wheels, and every curse humans, elves, and dwarves know.",
        "You sit in shock for some time before you realize you've truly been saved. In time you calm, and your monstrous form recedes until you look just like normal human Haza. You turn to express your thanks to your friends, but none say a word for long and lonely hours, even as you pull into a cave to hide in for the night they avoid even looking at you.",
        "Only once the fire is going does someone speak, “Alright, Haza. Talk, explain yourself.”"
      ],
      "decisions": [
        {
          "label": "Explain Yourself",
          "storyNode": "explain_yourself"
        }
      ]
    },
    "die_proud": {
      "text": [
        "You won't die begging. Being human was a mistake. All the fun you had. The friends you made. The things you felt. It was all a fake. \"A lie,\" you growl.",
        "Something inside you snaps. You feel the human cage around you and its bars of bone bending. The sinews tightening beyond their limits. Your human flesh boiling away to reveal the black abyss inside. In an explosive instant your bonds snap and the souls of a thousand monsters rise together in one grand behemoth that towers over the buildings and the little men and women below you. The power is intoxicating as you bring down great claws on the fleeing crowds. Your high is interrupted as you feel half your amorphous face set aflame and turn to see Happiness and Slab with terror in their eyes, staves glowing with magic. Darqin is charging you with his axe high and Yana drives arrows into you from the bridge. The agony is nearly blinding, but only nearly. You grab Darqin and send him crashing through the boats in the river. Yana screams and she empties her quiver into you. With lumbering steps, you rush her and smash the bridge down around her, burying her in stone. The city screams around you and it feels exquisite.",
        "You smile with fifty-thousand teeth and slash at the two remaining adventurers. Slab exhausts himself to unconsciousness with a spell that shields he and Happiness from your great blows. You bring down fists that strike the magic shield like thunder. The shield cracks and bends, but the woman does not flee. To your shock, Happiness stands her ground and takes up Slab's staff as well, you almost want to laugh at her defiance as she yells her chants and readies a spell. Such feelings don't last as those with courage in the city rush you with torches, spears, and even shards of glass. You crush them by the dozens and hundreds, yet they keep coming, just long enough for Happiness to finish her spell. A single spark flits into existence at the end of her staves and you laugh in pity of her. This laugh is cut short by a grand lightning bolt tearing you in two. Unholy agony erupts from you as Happiness faints, exhausted. You writhe madly as the blast has set your very insides aflame, the electricity refusing to leave your body until every cell is torn to shreds. The mob in the city continue to stab, beat, and burn you as you flail. You continue killing them through your maddened twitching, but they are perhaps even more mad. Despite it all they attack, wanting nothing less than to erase the destroyer before them from existence.",
        "As you fade into a darkness unlike the one you were born in, you hope you have left behind something real. A scar in the world that will never be forgotten.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "examine_stranger": {
      "text": [
        "The man is of mature age, couldn't be more than thirty. He bears good muscles under his simple workman clothes with rolled up sleeves. His black hair is kept short and easy to manage while his brown eyes are soft and friendly. “Couldn’t help hearing your story, please eat. Least I can do for a troubled merchant. I’m Sakurai, I'm in charge of a caravan passing through here.”",
        "You stare blankly at the man before Happiness coughs and stares daggers into you, “Oh that’s very kind of you, thank you.” The food is high quality, it makes your tongue made of tongues sing. When you look back to Happiness she has her usual gentle smile back. Then she takes some of the food herself.",
        "“I won’t lie and say it’s just out of the kindness of my heart. My people and I were about to head out to a town east of here, we could use another hand and a little extra security.”",
        "Yana speaks with a calm voice, “Where are you headed?”",
        "“Dakori, their summer festival and auction is coming up. Should be some rare items and creatures to purchase. Been reports of a band of orcs harassing caravans recently, and since this poor fellow here has mentioned being robbed by bandits, I want to secure my investment.”",
        "“Hired!” shouts Slab.",
        "“Not so fast.” Yana puts her hand out.",
        "“What? We need the money. Our gear is seriously out of date. Also, we wouldn’t want to leave our new friend Haza all alone, now would we?”",
        "Yana sighs heavily, “Are you saying this because you’re behind on child support again?”",
        "“…Yeah, I really need this money.”",
        "Happiness takes Sakurai’s hands swiftly, “We’ll do it!” She turns her smiling face to you and her dark blue eyes move quickly between you and Sakurai. “Ahem.”",
        "“Oh, um, yes! Thank you for the work.”",
        "“Wonderful!”"
      ],
      "decisions": [
        {
          "label": "Hired Hand",
          "storyNode": "hired_hand"
        }
      ]
    },
    "monster_hunt": {
      "text": [
        "“I suppose I do owe you one for saving me. Yana, let me borrow that bow of yours and let’s get going then.”",
        "And just like that, a few hours after your birth you’re part of an adventuring party heading into the forest and up a mountain. They dress you in their spare leather and gear and you come to look the part of a real hunter. Like one of them.",
        "You march for hours through the woods, but there is only so much walking people can do before they get to talking. “So how many orcs are we expecting?” you ask.",
        "“Maybe twenty or so?” Darqin leads the marchers, moving at a pace unbecoming of his stubby legs. “Should be spread throughout the mountain’s cave systems so no need to worry about getting overwhelmed.”",
        "“Provided Slab and Dima don’t miss their shots.” Yana is last in line, just behind you, and you cannot quite shake the sense she’s staring holes into your head.",
        "“I trust them, this isn’t the first cave we’ve cleared.” Happiness is struggling a bit with the pace and uses her staff as a walking stick. “We’ve got this.”",
        "“You mean the Kobolds?” Yana’s voice is incredulous. “They’re like two-foot-tall lizards, we’re talking six-foot-tall, on average, orcs.”",
        "“So, what’s the plan then?” you ask.",
        "Slab chuckles loudly, “What works really well is we set some fires at the mouths of the lower cave entrances at night to drive them upwards. Then we pick them off as they run out. They come out one by one blind and scared, easy targets. And we don’t even need to risk going inside. Easy money.”",
        "“Yeah, so long as one of us doesn’t try to skim a little extra off the top.”",
        "Darqin sighs heavily, “One time Yana. How long are you going to lord that over me? It wasn’t even intentional, I just miscounted.”",
        "“Whatever, this time I’m divvying up our pay- shoot.” ",
        "Before you are sheer cliffs with piles of bones strewn about the bottom. Bones of men and monsters.",
        "“Do we find a way around?” Slab says.",
        "The prospect of letting gravity do the dirty work for you is enticing, “No time to waste. Let’s climb. I'm from the north, remember?”"
      ],
      "decisions": [
        {
          "label": "Climb the Cliff",
          "storyNode": "climb_cliff"
        }
      ]
    },
    "climb_cliff": {
      "text": [
        "“I’ve been climbing in the mountains all my life, that cliff shouldn’t be a problem. I’ll throw you guys a rope down.”",
        "“But, it’s really very high…” says Yana. ",
        "Darqin does not seem to hear her over his own deep voiced laugh, “I like your enthusiasm, Dima.” He wraps some ropes around you and up you go. You find the climbing comes quite natural to you, even once sixty feet up you do not slow. Once atop you tie the rope around a nearby tree and soon your new ‘friends’ are making their way up. It’s just you alone with a rope and the people attached. Best be quick."
      ],
      "decisions": [
        {
          "label": "Cut the Rope",
          "storyNode": "cut_rope"
        }
      ]
    },
    "cut_rope": {
      "text": [
        "You take a knife your ‘friends’ gave you and begin sawing into the rope. It frays in seconds and you can hear everyone screaming down below. You listen intently for the sound of cracking bones, but it never comes. As you look over the cliff side a whirling gust of wind blows you back and you see all the adventurers floating on the wind, safe and sound.",
        "Slab’s staff is glowing and wind billows in his robes as he sets his friends down. “What happened?! We almost died!”",
        "“The rope just snapped, like it was rotten,” you quickly lie. Yana is holding her chest and breathing heavily. “Bad with heights? Are you okay?\"",
        "“Y-yes. Thank you.\" Her eyes narrow as she turns to the dwarf. \"Dammit Darqin you should have bought better rope!”",
        "“It’s not my fault the blasted general store sold rotten rope!”",
        "“Well maybe we could have bought a better one if you weren’t spending all our money on booze!”",
        "“That’s enough!” commands Happiness. ",
        "The elf and dwarf stop their bickering at the woman's assertion. It seems she's the real boss here.",
        "“The sun will be setting soon. We’ll deal with this later, now set camp. Dima, give me a hand?”",
        "“Of course.”"
      ],
      "decisions": [
        {
          "label": "Set Camp",
          "storyNode": "set_camp"
        }
      ]
    },
    "set_camp": {
      "text": [
        "The remainder of the night is fairly calm. Slab is on watch and Darqin cooks up a rather great soup. His mother’s recipe he calls he it. It’s mostly meat and potatoes, but you’re not complaining. Yana took first watch and sleeps now while Happiness keeps the fire. When it is your turn to take watch, Happiness brings you the last of the soup.",
        "“Thank you. Tell me, do those two always fight like this? It’s been a long time since I heard any news about dwarves and elves.”",
        "“They’ve fought in the past, but nothing like this. I suppose it’s because of the riots back east. Tensions have flared up since a dwarf was sentenced for killing and elf, some say wrongly. Lots of burnt down stores and homes on both sides now. They’re frustrated, want to take their feelings out on something, someone. But, things will get better, I know that. They have to.” She sighs before putting her smile back on. “Well, I best get some rest before my watch. Take care now.”",
        "Hours pass and you are the only one awake. Four killers of your kin helpless. And you with a bow and knife in your hands. What should you do?"
      ],
      "decisions": [
        {
          "label": "Kill Them Now",
          "storyNode": "kill_them"
        },
        {
          "label": "Frame Darqin",
          "storyNode": "frame_darqin"
        }
      ]
    },
    "kill_them": {
      "text": [
        "These people are not your friends. They’re going to kill the monsters who are the same as your own kin. They celebrated when you killed that orc. They are not your friends. First, the wizard. You knock an arrow and loose it into Slab’s back, he gurgles for a moment and goes limp. Darqin stirs, “Hng? What’s happening?” You shoot him next, but his leathery dwarven skin is thick. He manages to scream before you strike him one more final time. Happiness awakes with a terrible scream and reaches for her staff, you rush her and wrench it from her hands. You strike her like twice like a hammer and she falls limp. With only Yana remaining you ready yourself to strike with your stolen staff.",
        "As you turn and see her coming for you the elf is almost too fast to dodge. Your face burns as Yana's knives cut open your cheek. The elf looks like something possessed as she breathes heavy and angry, slashing at you without end. Dodge after dodge and parrying away her knives takes all you have, but soon you find it almost fun. Yana is but one elf, you have a thousand lives worth of fighting in you. Their deaths teaching you what mistakes not to make. In one fluid motion your lock Yana's in a vice and throw her towards the cliffside. Her focus leaves her as the cliff comes near and she flails in her fear of heights. Her panic buys you enough time to take up your bow again. Seeing you ready to strike from afar Yana curses and disappears over the cliff. No scream or sound of crashing comes. You rush over only to see her daggers driven deep into the stone wall and Yana dashing down the mountain path towards the frontier town, faster than anything you've seen. She is gone.",
        "Three out of four isn't bad. But you still have work to do. She'll be warning the town, and they'll be on their way in force. The orcs must go if they are to survive."
      ],
      "decisions": [
        {
          "label": "Go Warn the Orcs",
          "storyNode": "meet_orcs_alone"
        }
      ],
      "final": false
    },
    "frame_darqin": {
      "text": [
        "That elf and dwarf, they’ve been fighting so much. Maybe you can take advantage of that. Your memories are ignited by your choice as a thousand instances of sneaking about, often for the sake of survival, fuse and combine in you to see you move about with calm and above all, silent steps. With delicate fingers you open Yana’s travel bag and remove her pouch of shining gold coins. It fits in nicely among the things in Darqin’s bag. With your handiwork done you go and wake Slab for next watch. You’re excited to see what becomes of your machinations."
      ],
      "decisions": [
        {
          "label": "Next Morning",
          "storyNode": "next_morning"
        }
      ]
    },
    "next_morning": {
      "text": [
        "“Darqin! You damn thief!”",
        "“Yana? It's too early for this. What are you talking about? What’d I do now?”",
        "“My gold’s missing! Show me your bag!”",
        "“What is all this?” Happiness is rubbing the sleep from her eyes. “Just open your bag and show her, she probably lost it in town or back at the corpse pit.”",
        "“I didn’t lose it; I know you took it!”",
        "“Okay, fine!” The dwarf takes his bag and turns it upside down, “But when you see I’m innocent- what?” Amidst the rest of the rations, water, and tools that fall out are two pouches of gold. Darqin’s red face has turned white, “Yana, Yana no. Yana come on, someone’s playing games with me. Someone tell her. Why would I take your gold out in the wilderness?”",
        "Yana takes a sharp step toward the dwarf and Slab steps between them. ",
        "“Yana, come now, calm down. Maybe it was an accident,\" says Slab.",
        "“Or maybe it’s because he’s greedy.” Her eyes narrow in hate. “If I’d known you were just another greedy worm I never would have joined this party.”",
        "Darqin puts a hand on his axe. “What did you call me? You take that back or we’re going to settle things in the old way.”",
        "“Maybe this has worked too well”, you think to yourself. Best continue your role, “Calm down everyone. Darqin, just give her the gold her back and we can move on.”",
        "Yana spits on the ground and draws her daggers, “It’s not about the gold anymore, it’s about trust and how this worm keeps violating it, over and over!”",
        "“I warned you!” ",
        "Darqin rushes with his axe but Yana leaps over the stocky warrior, mid-air she slashes twice across his shoulders. Blood pours down him for a moment before his body glows with golden light that seals his wounds as he screams. The same light pours out from the pained looking Happiness.",
        "“Stop this. Stop this right now! Slab!”",
        "“On it!” Slab’s eyes glow green and he drives his staff into the earth. Like watching twenty years of growth in seconds roots and vines sprout from the earth and wrap around Darqin and Yana’s legs. The older man falls to his knees from the exertion. “What the hell happened? We’ve been traveling for months, and this is how it ends? Well, fine! You can kill each other if you want, but I won’t be sticking around to watch. Screw the orcs, I’m going back to town. Happiness. Dima. Let’s go.”"
      ],
      "decisions": [
        {
          "label": "Go Back to Town",
          "storyNode": "back_2_town"
        },
        {
          "label": "Go On and Warn the Orcs",
          "storyNode": "warn_orcs"
        }
      ]
    },
    "back_2_town": {
      "text": [
        "This adventuring party is ruined. You’ve done your job. Time to go rest.",
        "You look at the elf and dwarf still staring daggers into one another, “I hope you two can come to some agreement. Thank you, for saving me. Happiness?”",
        "She is gripping her staff tight and shaking ever so slightly. “No, go on ahead. Someone has to make sure no one here dies. I’ll bring them back, safe and sound.”",
        "Slab’s eyes soften at the brave girl, “You’re a better person than I. I’ll see you in town.”",
        "And so, you and Slab take the long walk back to the frontier town you came from. It’s a faster journey downhill and you’re back inside the tavern soon after sundown.",
        "“I need a drink. Dima?”",
        "You need to celebrate, don’t you? “Ah, yes.”",
        "“Bartender! Two drinks, big ones.”",
        "It’s a rather dour moment when the drinks come, Slab inhales his as his eyes sag and his back slouches. You’ve about ruined the man. “So, what will you do next?”",
        "He sighs long and deep, “Probably find another party to join. Those guys back there, they weren’t my first, but I was hoping they’d be my last. Then they tried to kill each other. I- I really liked them.” He orders another drink.",
        "“Are there lots of parties available?”",
        "“Just look behind you.”",
        "“What?”",
        "Your blood turns to ice when you turn around. Behind you, the back wall has five boards full to overflow with postings of guilds looking for guards, parties looking for specialists, and hundreds of bounties seeking the heads of single orcs and snake-men and wizards, to entire clans within whole regions. What you stopped wasn’t a basic hunt, it was part of something grander. A culling of the grandest scales. All you have done is delay the inevitable, more adventurers will come for the monsters in the caves and mountains and forests. They will come for them everywhere. They will hunt them all down until only you are left because you look human. You burst out from the tavern, ready to race up the mountain and warn the orcs, only to hear the screaming of men and the pounding of drums.",
        "“MONSTERS ARE ATTACKING. TAKE POSITIONS.” ",
        "There is no time to act. You can see in the moonlight the orcs are already over the walls. Windows shatter and doors are kicked in. Fires spread as if by some kind of magic. The town militia come together but as you stand frozen a towering orc slashes you from shoulder to hip with a greataxe. You recognize the orc as the youngling you held in your memories, Dima.",
        "None notice your night black abomination blood in the chaos and fire. You bleed out in a no name frontier town, never to be known as the Dark Lord.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "warn_orcs": {
      "text": [
        "Your job is not done. You still need to warn the orcs.",
        "“I’m going on ahead, I want to finish the job.”",
        "Slab hangs his head and looks away, “Then you’re an idiot too. Happiness?”",
        "Sweat drips down the woman’s brow, torn between helping the two people liable to tear each other apart. Or stopping the person walking into certain death. “Don’t do this to me. Dima! Dima wait! I’m going with you.” She points back at the two bound compatriots. “And you two better not hurt each other or else I’ll heal so much you grow a second head! I swear I'll do it!”",
        "Slab has a sadness in his face as he grabs one of the vines he grew and descends down the cliffside. “You’re all idiots, but, good luck. It was nice while it lasted.”",
        "And that is how you wind up climbing a mountain with a pretty girl desperate to make you stop climbing the mountain.",
        "“Dima! This is suicide! What’s really going on? Just tell me and maybe I can help!”",
        "Do you tell her the truth? This could be a problem once you meet the orcs. She’s a healer, a holy woman, she threw herself between two people hungry for blood. She’s trying to stop someone from dying, maybe she would understand what you are?",
        "“What should I say? Orcs killed my parents? You can leave me, it’s alright.”",
        "“I can’t! Something else is going on here, something that would make you risk your life. I’m not leaving you!”",
        "“Why are you trying so hard?”",
        "“What are you even asking? You’re a person, I can’t not help you.”",
        "You stop walking and turn to the young woman, “Are you going to try and stop me?”",
        "She holds her holy staff tight, “If I have to.”"
      ],
      "decisions": [
        {
          "label": "Tie Happiness to a Tree",
          "storyNode": "happiness_tree"
        },
        {
          "label": "Scare Her Off",
          "storyNode": "happiness_scare"
        }
      ]
    },
    "happiness_tree": {
      "text": [
        "“So be it.” You rush Happiness as her staff glows as she tries to blind you, but you’ve seen the trick before and cover your eyes just in time. You are more than a head higher than the holy woman. You wrench the staff from her hands and toss it down the mountain. It does not take much more effort to grab hold of her and bind her to a tree with the ropes in her bag. “You should be able to wriggle out eventually. Don’t follow me. Else, that really would be suicide.”",
        "“Dima! Stop this!” She continues to call out to you well after you leave her sight."
      ],
      "decisions": [
        {
          "label": "Meet with the Orcs",
          "storyNode": "meet_orcs_alone"
        }
      ]
    },
    "meet_orcs_alone": {
      "text": [
        "After another hour of hiking you reach the mouth of the highest cave on the mountain, the various species’ skulls on sticks and hanging in the trees makes it clear whose territory this is. You take a step forward only for a large hand to grab you from behind. Out from behind the trees come orcs covered in suits made of plants and moss, in their hands clubs and axes.",
        "“Human, why do you come here, to die?”",
        "“No, I am a friend. I come with a message, a warning!”",
        "One of the orcs removes his mask to reveal his emerald eyes and red face paint. “A friend! Ha! You fool- what?” He grips you in both hands and buries his nose in your face as he sniffs rapidly, “You look human, but you smell like- Mother?” He grips your throat and tears you to the ground. “My mother has been dead for years, why do you smell like her?!”",
        "You struggle to speak through the choking, “D-Dima? A-Are you Dima?”",
        "“The human knows you? Chief?” says an orc warrior.",
        "The orc Dima releases you, “How do you know me?” Your only response is to hum the same song Dima’s mother sang for him in his youth. It brings a tear to the orc’s face. “Who, what are you?”",
        "“I’m here to help, the humans and their ilk below are coming for you, maybe not today, but soon. I promise you that. I stopped one group, but more and more are going to come. It’ll never stop. You need to leave while you can.”",
        "“We can’t leave our home,” says one of the camouflaged orcs.",
        "“If you stay, you’ll die. You’ll be overrun. No matter how strong you are. They’ll fill your caves with smoke and plug the exits. They'll burn the mountain down if they have to. These lands are not safe.”",
        "“Chief, you can’t be serious. Listening to this outsider?” ",
        "“Lower your weapons, this outsider is special. The spirit of my mother has come back to rescue her son, her clan. We must listen to such powerful magic. Spread the word, we go west, tonight. Take only the essentials. Go!”",
        "“As you command.” The orcs run deep into the bowels of their home, faces like stone but wet with tears, knowing they may never return.",
        "You look to the orc chief and a feel a warmth in your heart spread to every inch of your body. “Your mother says she is proud of you, Dima.”",
        "The orc’s eyes go wide and he embraces you in a flash, “Thank you, brother. For this gift. Please, join us. Help me protect our people.”",
        "You join in the embrace with all your strength.",
        "When the legends are told of the Dark Lord, they will speak of more than your grand military conquests, they will also look to your humble origin decades prior. How it all began by granting a son a chance to say a final goodbye. Born from a pit of death, the Dark Lord found purpose and peace in their duty to their kin.",
        "THE BEGINNING "
      ],
      "decisions": [],
      "final": true
    },
    "happiness_scare": {
      "text": [
        "“Fine, you want to know what’s really going on? Take a good look!” Your body is not human, its borrowed strands of flesh wrapped around mismatched bones. It’s a cage disguising what you are. You shake in release as you let yourself unravel and the skin and muscle peels from your face to reveal a black sea within you. You stand before her as a man-shaped storm. The wailing souls in you roll over Happiness and turn her rosy face white. She steps back in horror and you turn back up the path. “Goodbye, Happiness.”",
        "You get but ten steps away before you feel something tugging on your cloak.",
        "“What?”",
        "“If you’re a monster, why the trick with the gold?”",
        "“I wanted to stop you. Stop you from killing those orcs. Let go.”",
        "“Why do you look human then?”",
        "“Let go of me-”",
        "“Why were you in that grave?”",
        "“I was born there, you were going to burn me. Why, why haven’t you attacked me?”",
        "“Why haven’t you?”",
        "“I- I don’t want to?”",
        "“You spend the whole night with us and don’t attack, instead you make us distrust each other. Then you don’t attack me alone, you try to scare me off. You show me something that, terrifies me more than I think anything has, and you walk away. To save something!” You can feel her sky blue eyes strip you bare, no sea of souls between you, just you and her.",
        "“What are you getting at?”",
        "“You’re a good person, aren’t you?”",
        "Your black cheeks warm as she refuses to let you go. “W-What are you going to do now?”",
        "“Go with you, of course.”",
        "\"Then Slab was right, you are an idiot.\"",
        "\"You're going to have to find better insults.\"",
        "“I-I’m not getting rid of you, am I?”",
        "She has already taken your hand and is dragging you along up the path. “You had your chance.”",
        "“Why do you even want to help? You were coming here to kill them earlier.”",
        "“I’m a holy woman, if I have the option to avoid violence, and get to know a strange thing like you, I’ll take it. Now how do we get them off this mountain? Do we just wander up like two strangers? They might just kill us both. Or can we make them leave in a more indirect way?”"
      ],
      "decisions": [
        {
          "label": "Speak with the Orcs",
          "storyNode": "orcs_happiness"
        },
        {
          "label": "Scare away the Orcs",
          "storyNode": "scare_orcs"
        }
      ]
    },
    "orcs_happiness": {
      "text": [
        "You’re sweating heavily at the entrance to the orc caves. A dozen spears are aimed for your throat. Maybe this wasn’t the best move.",
        "“Speak, demon! Why do you come here with this, this witch?”",
        "“Witch!” Happiness gasps.",
        "Your head snaps to her and you stare her down until she sighs. ",
        "“We’re friends. Here to warn you, there’s dangerous adventurers on their way to kill you.”",
        "The tallest orc with red claws marks painted on his face exhales warm breath down your neck. “We’ve dealt with their kind before.”",
        "“Happiness? A little help here?”",
        "“You’ve fought small groups before yes, Mr. Orc. But this fall and through the winter, the culling will begin. The kings in the east will send teams of men, dozens, hundreds strong to clear out any monsters near any settlements. If you don’t run, they will fill your caves with fire and smoke and spear you as you run for air. If you don’t go far enough west, you’ll be run down by horses and steel lances. That is if the cold or starvation doesn’t get you. If you want to live, you’ll listen to this witch and her pet demon and go!”",
        "The woman is breathing heavy from her moment and you can only look at her and be impressed, and a little scared.",
        "“If your words are true, witch. Then even better that we stay, even if we die. This is our home, and we will not leave it behind at the words of outsiders. But, because you have amused me, I gift you your lives. Now, be gone.”",
        "The orc chieftain’s men begin to prod you and Happiness down the mountain with spears.",
        "“We tried our best, Dima.” Says Happiness.",
        "The chieftain turns and bursts towards you, lifting you high in the air. “What did she call you?”",
        "“D-Dima?”",
        "“Why does a demon share my name?”",
        "The memory of the mother singing to her youngling rushes back to you. You remember the weight and warmth of the child in your lap. The child now full grown before you.",
        "“Your mother, she’s a part of me. She, among others, created me. She just wants you safe, she wants you to go west.” Your eyes turn to the orcs around you and suddenly they all begin to feel familiar. Memories flash like lightning in you and see every monster before you has lost someone, someone who became a part of you. You point to the orc with blue face pain, “Okur, your brother, he says he’s sorry he missed your son’s birth.” Next, the shortest, “Gorn, your father, he was too scared to say it, but he loved you more than anything.” You say the last words of loved one after loved one until each orc has shed a tear.",
        "Chieftain Dima had left after the first few messages and has now returned with all the orcs within the caves. They carry with them all they have in the world.",
        "“Brothers and Sisters. Our kin protect us even in death, they have sent us a witch and a demon to guide us to a land where we can be safe. We will honor them and march on, to a new sanctuary.” And so they went, without another word.",
        "Ages from now, the histories will tell of how the Dark Lord shed his skin and led his first followers to the west. There they would build their strength, and one day, return with a mighty army to see that no more tragedies like the one that created the monsters’ savior would ever come to be again. But, right now, you’ve got a long walk ahead of you.",
        "“I guess you’re a witch now, huh?”",
        "“And you’re a walking therapy dispenser.”",
        "“Wow. I think we’re going to get along quite well.”",
        "“Swimmingly.” She takes your abyssal hand in hers and squeezes tight.",
        "THE BEGINNING"
      ],
      "decisions": [],
      "final": true
    },
    "scare_orcs": {
      "text": [
        "You have positioned yourself in the undergrowth some distance away from the entrance to the orc caves. Night has come and the full moon is high behind the clouds. Orc sentries stand watch.",
        "“Let’s go over the plan one more time,” Happiness says. ",
        "“Right, you blind the sentries with light, and I harass them into the caves. Then when they run inside you use your magic to make thunder sounds while I flood the cave and tunnels with the soul wailing thing I did earlier. They’ll want nothing to do with the mountain after a night of terror from demons.”",
        "“Sounds perfect.” ",
        "And it was perfect, worked wonders really. The orcs screamed and ran. Your wails boomed and echoed through the caves with such power it felt like they could be heard from miles around. In a frenzied panic the orcs took their things and into the west. Every last man, woman, and child. Leaving you and Happiness to sit on a cliffside, enjoying the full moon.",
        "“What will you do now?” Happiness asks.",
        "There are a thousand souls in you, the orcs were only a fraction of them all. There are so many other monsters in the world, their clans growing weaker as the frontier either consumes them or forces them to leave their homes. There’s only one thing you really can do, try to help. “I think I’ll keep doing this.”",
        "“Terrifying monsters?”",
        "“N-No. You know what I mean, helping them. Saving them. They’ve all been through so much. Maybe next time I’ll try talking with them. Maybe if they came together, they could fight back. Stop the slaughter.”",
        "Happiness rests her hand on yours, “That sounds like a lonely mission.”",
        "“Perhaps. But if I can do some good, I don't think I'll regret it.”",
        "“Then perhaps I should go with you.” ",
        "Your eyes struggle to look at anything but her.",
        "“You don’t have to, go back home, be with your people. Be safe.”",
        "“No. No I’ve made up my mind. I’m coming with you, you starry eyed revolutionary. I am warning you now though, get out of line, become like the monsters in the stories, you won’t live long.” Despite her threat the woman glows in the moonlight, she’s lovely.",
        "“Happiness, you- ",
        "Your senses snap to the woods and from out of the darkness come an elf, dwarf, and wizard. They charge red-faced and yelling, “FOR OUR FRIENDS YOU GREEN BASTARDS- Happiness? What are doing with that- that thing, Dima? Is that you?”",
        "“Um, hi guys. You’re back? Weren’t you fighting earlier?”",
        "“The mountain was screaming! Seemed a bit more important than a spat. Slab came back from town to investigate and freed us. Then we came to save you two, or avenge you failing that,” says Darqin.",
        "“But I guess we interrupted something instead?” Yana says, pointing to Happiness’ hand on yours.",
        "Slab can barely stand, hunched over and breathing hard, “Happiness, we just ran up a whole mountain to save you two. I even used some spells to speed us up. I’m tired. I’m guessing the wailing mountain was Dima. Is he, whatever the heck he is, y’know, okay?”",
        "“Mhmm.”",
        "“That’s that then, scoot over.” ",
        "Darqin and Yana look to each other and can only shrug before joining you on the cliff in the cool night air. As you sit beside the adventurers you want to explain yourself, speak of your plans, ask more questions, apologize. You know it in your heart that one day you will be the leader who unites the monsters into one honorable nation, you almost want to jump out of your skin and run off into the night. Yet, the moment is so peaceful. And Happiness’ hand is so warm. So, you think to yourself that those adventures can wait until the morning. Tonight, you’re among friends.",
        "THE BEGINNING"
      ],
      "decisions": [],
      "final": true
    },
    "become_monster": {
      "text": [
        "Your black gangly arm with mismatched bones reaches out from the corpses and grabs the holy woman by the leg, pulling her to the ground. Her flame spell flits from existence as she screams and wrenches herself from your grasp to run to the other adventurers, now ready for a fight. Four of them and one of you. How to even the odds?"
      ],
      "decisions": [
        {
          "label": "Become a Behemoth - Bone and Muscle",
          "storyNode": "become_behemoth"
        },
        {
          "label": "Become a Necromancer - Magic and Machinations",
          "storyNode": "become_necromancer"
        }
      ],
      "final": false
    },
    "become_behemoth": {
      "text": [
        "A monster lives and dies by their own strength. You feel the mass of dead flesh and bone reshaping itself to your will, a black bone-spiked tendril bursts from your cradle and wraps itself around the recently slain minotaur. The limb retracts to the grave like lightning with the corpse in tow and you crawl inside the formidable creature. You crawl inside and feel the mounds of bodies you stand in wrap around you and build off the scaffolding that is the minotaur’s skeleton. One thousand creatures’ worth of bone and muscle, bound together by angry souls, wrap around you and soon tower over the adventurers as a thing of nightmares. Legs thick as trees. Five men high. Chest like a city wall. As many eyes as you can imagine. Intoxicated by the power your world slows, and the look of rising terror on the adventurers’ faces is the most exquisite thing you have ever known. You give a roar that shakes the world. Yet, even with terror in their faces, the brave hunters before you stand their ground, blades shining, staves sparking with magic."
      ],
      "decisions": [
        {
          "label": "Slash the Wizard",
          "storyNode": "slash_wizard",
          "consequences": [
            "happiness_survives"
          ]
        },
        {
          "label": "Swallow the Elf",
          "storyNode": "swallow_elf",
          "consequences": [
            "darqin_survives"
          ]
        },
        {
          "label": "Throw the Holy Woman",
          "storyNode": "throw_woman",
          "consequences": [
            "slab_survives"
          ]
        },
        {
          "label": "Smash the Dwarf",
          "storyNode": "smash_dwarf",
          "consequences": [
            "yana_survives"
          ]
        },
        {
          "label": "Negotiate",
          "storyNode": "negotiate"
        }
      ]
    },
    "slash_wizard": {
      "text": [
        "Claws like swords sprout from your thick fingers and lunge at the greying magician. A spark shines from his staff, but he has no time to finish his words. The wizard is cut in two in an instant. Your attention turns to the holy woman only to be distracted as the elf buries arrow after arrow into your thick hide. The dwarf has slipped under you and hacks away at your ankles as the holy woman blinds your many eyes. In a rage you stomp madly until you feel yourself flatten the tiny man under your heel.",
        "When some vision returns to your eyes you spot the elf and holy woman running eastwards. You barrel towards the pair like a charging bear. Just as you draw near, the holy woman’s staff is wrapped in wind and a river of air collides into you. Your claws drive deep into the earth as you stand your ground. Your grip weakens as the unrelenting winds are filled with arrows pushed to obscene speeds by the current. The arrows pierce bone and do not stop, it feels like lances running you through, draining your strength by the moment. The pain keeps you unmoving, even when the winds blissfully stop. The duo look almost ready to cheer until they see your hands buried in the earth. The same spiked tendrils you used to grab the minotaur burst from the soil behind the pair and enwrap them. Without hesitation the elf cleaves her daggers into the flesh binding the holy woman, freeing her. Her chance to escape herself gone, the elf stabs at you pointlessly as she disappears in your maw. The holy woman vanishes into the east as you roar behind her, your wounds too great to pursue, else you risk your body fall to pieces. For now, it is time to rest.\n"
      ],
      "decisions": [
        {
          "label": "Spend Time Healing",
          "storyNode": "heal",
          "consequences": [
            "happiness_survives"
          ]
        }
      ]
    },
    "heal": {
      "text": [
        "Some days pass hiding in your grave den and, to your relief, your body heals rapidly. There was a great cost to it though, to heal your grievous wounds, it cost a number of the limited souls inside you. So many memories lost in order to rebuild bone and reknit your muscles. You know you must be more careful, else lose all those who created you. To protect yourself you need to go on the offensive and see that none dare harm you.",
        "You advance east through the woods, towards where the last adventurer fled. Past the forest’s edge is a human settlement, basic but functional. It would look entirely normal, if not for the tribe of orcs drinking themselves into a stupor in the town square.",
        "You take large heavy steps out from the trees and towards the orcs. They’re laughter and drinking comes to a sputtering halt as more notice your approach. When you step over the meager walls surrounding the town some orcs flee, others kneel, most stand frozen with mouths gaping.",
        "“What happened? Where are the humans?”",
        "An older orc steps forward, “We don’t know. We came to raid them some nights ago, they were all gone when we arrived, most of their things were left behind.” He motions to the substantial supply of alcohol bottles, many of them now spilled after witnessing you. “Who, or what are you?”",
        "As the orc speaks a sense of familiarity seeps into you. You lean over the frozen orcs and breathe their scents in deep. Soon the memories come and you recognize them all, they are the sons, daughters, mothers, and fathers of many of the dead inside you. Their families’ souls reside in you. The emotions send you reeling, and it takes great will to not embrace your kin in your gargantuan arms.",
        "You take a seat in the town square and breathe the sigh of seeing old loved ones again, “I’m a friend, that’s all that matters. Tell me, what will you do next, now that the humans have fled?”",
        "“They’ll be back. No matter how many we kill, more come to replace them. I bet my life on that.”",
        "“You’ve been pushing them back at least?”",
        "“Hardly. We stop the humans here, they push forward somewhere else, one day we’ll be practically surrounded, forced to flee west. But we’ll die before that happens, proud and defending our home.”",
        "“But you’ve never had someone like me on your side. I smashed three monster hunters already, sent another fleeing for her life. Point me at a target and I’ll bring it down. Let me help.”",
        "The orc looks you up and down, a behemoth of muscle and bone, and he gives a boy’s excited smirk. “I have some ideas.”"
      ],
      "decisions": [
        {
          "label": "Guerilla Warfare",
          "storyNode": "guerilla_war"
        }
      ]
    },
    "guerilla_war": {
      "text": [
        "The next months are spent destroying swathes of human settlements, the only survivors being those you let go to spread the word of your power. Their town guards are weak, the magic users hidden away in their studies or off slaying beasts in the unmapped lands of the far west. In between wreaking havoc on towns you block roads with great trees. Set crops aflame. Poison the wells with your undead flesh. Assisting you are a small team of orcs that ride atop you as you race through the forests and over the plains faster than the birds above.",
        "As monsters retake their land and move into the abandoned human settlements, word spreads of your exploits. A legend is in the making as monsters witness a creature with almost godlike power bringing their wrath down on their tormentors. Over the coming months the desperate and scattered tribes of monsters hiding in the forests and fields come to join your stronghold. Snake-men from the southern reaches. Kobolds and goblins from the swamps. Orcs from every land. Minotaurs from the mazes under the world. Cursed beings, werewolves and the like, banished from their human homes. They all offer their claws and fangs in exchange for giving their families a safe place to grow up. A humble request that honors you beyond measure.",
        "The humans and their dwarf/elf allies do little to pressure you. Your raids have produced documents detailing a great conflict in the southeast between the dwarves and elves, riots blooming into all out bloodshed. All your settlement has been forced to face have been hordes of soft settlers, poorly equipped and unaware they were at war with the monsters they have freely slaughtered for a generation. Your territory now stands as an island, surrounded by human controlled territory proudly deemed “the Dark Lands”.",
        "You are planning your next move to reclaim the West with the elders and strongest warriors of a hundred clans when a goblin messenger rushes into your tent with a panic in his eyes. “Army! There’s an army coming!”",
        "It’s earlier than you would have hoped, but it seems the real war must begin today."
      ],
      "decisions": [
        {
          "label": "Face the Army",
          "storyNode": "face_happiness",
          "consequences": [
            ""
          ],
          "requires": [
            "happiness_survives"
          ]
        },
        {
          "label": "Face the Army",
          "storyNode": "face_darqin",
          "requires": [
            "darqin_survives"
          ]
        },
        {
          "label": "Face the Army",
          "storyNode": "face_slab",
          "requires": [
            "slab_survives"
          ]
        },
        {
          "label": "Face the Army",
          "storyNode": "face_yana",
          "requires": [
            "yana_survives"
          ]
        }
      ]
    },
    "face_happiness": {
      "text": [
        "A procession of gold and white marches on from the horizon. An army of priests armed with spears advance, their aged leaders are carried atop wooden thrones and wield golden rods. All but the elders bear happy faces, still round with the fat of youth and inexperience with fighting. At their head is a familiar face, the holy woman who escaped you the day you were born. She leads her army dressed in chainmail and wielding her own golden staff. The human army halts just beyond bow range and their leader beckons you to her. You approach cautiously.",
        "The youth in the holy woman’s eyes has been replaced with a seething, focused anger. “Hear me, Demon. In the name of the gods we offer you a chance at redemption. Leave these lands, disband your army, and hand yourself over for purification. Accept these terms and we promise there will be no bloodshed this day.”",
        "“Do you really think I’ll do that?”",
        "“No, it was just a formality. You killed my friends. This day ends with you as ash. Now, come at me, Demon.” Her staff is sparking and vibrating in her tightening grip.",
        "“You’ve got fire, little one. One of my advisors thought of accepting human defectors. What do you say to joining us? You’d make a fine monster.”",
        "“I said, come at me!”"
      ],
      "decisions": [
        {
          "label": "Attack!",
          "storyNode": "attack_happiness",
          "requires": [
            "happiness_survives"
          ]
        },
        {
          "label": "Make a Deal",
          "storyNode": "deal_happiness"
        }
      ]
    },
    "attack_happiness": {
      "text": [
        "You have been attacking towns for months now, fighting has only become more and more second nature to you. You have grown stronger, wiser. While the holy woman before you is absorbed in rage. She does not notice your tendrils hidden beneath the earth until it is too late. With a single motion you yank her into the air and swallow her whole like a beast of legend.",
        "A moment of utter shock holds the priests in place before they cry out to avenge their champion. The elder priests loose fireballs that explode against the earth, your barely dodge with your life, your fur singed and smoking. “Is this all you have? More! I’ll devour the whole lot of you, now give us a fight!” At your words your collected horde joins the fray. The sky turns dark as arrows fill each inch only to then be illuminated by the magical shields from the elder priests stopping the arrows in their tracks. Following the arrows comes your improvised cavalry. Two snake-men with lances wrapped around a charging minotaur. Few things in this world could withstand one, let alone a full unit. The first two ram to a halt into the magic shield with a boom, and the following five charge through the damaged shield like it was glass, shattering it into nothing. They barrel through the crowds of priests, lances and horns skewering priest after priest. As the spearmen’s ranks break you go deeper into the humans’ position and lift an elder in his throne and toss him, chair and all, into another. No priest’s clothes retain their pure white and gold as gore touches all. Shattered and demoralized, your remaining horde rush into the gaps. No monster fights alone, sticking to rudimentary but effective mixed tactics making the most of their unique bodily advantages. It was lucky the naïve looking holy woman roused an army of the similarly foolish. Only a small handful of priests escape you and they will undoubtedly tell tall tales of your power.",
        "One priest though, one of the elders, stays behind. With his throne bearers killed, his throne itself splintered in the melee, and his golden rod of power twisted and ruined by a minotaur’s hoof, he is defeated. When you lean over him to consume him you hear he does not pray to his gods, he is praying to you.",
        "“Oh marvelous one. Oh lord of darkness, grant me mercy and I shall forever be your servant. Oh lord, please, let me serve you.”",
        "As your army happily loots the fallen priests you take the elder in your hand the man ceases his prayer and shakes in your grip. “Oh, no. Please, continue. Honor your Lord.” You smile a grin with endless teeth and it only grows larger as the first of your faith recites new prayers through the day and deep into the night.",
        "Your army is blooded. The last of your first victims is gone, along with her pitiful army of boys. And soon the world know your power. Soon all will know and follow the Dark Lord.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "deal_happiness": {
      "text": [
        "You take a step back from the holy woman and let the magic binding your undead body together release for just a moment. Your great head splits open like a flower to reveal the horrors of a thousand dead monsters fused together, their still anguished and raging souls screaming out in a deafening wave that falls over the holy army. \"Join me, and live! Resist, and die!\"",
        "As your sickening miasma washes over the priests as a terrible black cloud their ranks begin to dissolve. The weakest of heart and mind flee or collapse in terror. Some of the most devout turn against their surrendering brothers and sisters. But, when one of the elder priests in his throne climbs down to bow his head to you, the army’s ranks scatter like a pile of sand in the wind.",
        "The holy woman is lost in confusion before anger takes control once more. “No! Demon, damn you!” A bolt of lightning explodes from her staff, striking you in the chest. Your insides spasm and burn from the energy, your claws gouge the earth as you fall to a knee. You feel the souls inside you burning away, giving themselves to oblivion to rapidly erase your wounds. Your organs are boiling but all you can think about are the pieces of yourself, gone forever. Anger replaces sorrow and smoke leaves your mouth as your roar defiant, injured, but alive. She holds up her staff again, though this time with burned and shaking hands, it sparks with power as you reach to tear her apart. But before she can cast what may very well be her's and your's last strike a group of her few remaining devout and loyal take her in their arms and flee to east, kicking and screaming.",
        "As you kneel and heal the defecting priests gather round you and pray new and terrible prayers.\n"
      ],
      "decisions": [
        {
          "label": "Aftermath",
          "storyNode": "aftermath_happiness"
        }
      ]
    },
    "aftermath_happiness": {
      "text": [
        "This day will go on to be marked as the first day of the real war. When the humans and their allies realized the true depths of the threat you had become. There will be countless more trials to endure, deals to make, and sacrifices to made. But this day, one day, will become a holy day in your monster kingdom.",
        "It will be celebrated that on the first day of the real war, the only blood spilled was your own, and that of humans who turned on one another. The monsters following you soon become intensely devout, in part of because of the many future victories that will come, and the many faithful who, either through cowardice or a dark epiphany, come to worship you as their new god. Their dark and beautiful Lord. Their Dark Lord stood who alone against an army and turned them away through his own power. It will be a day fervently recognized by the descendants of monsters and defected humans alike.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "face_darqin": {
      "text": [
        "TBD"
      ],
      "decisions": [],
      "final": true
    },
    "face_slab": {
      "text": [
        "TBD"
      ],
      "decisions": [],
      "final": true
    },
    "face_yana": {
      "text": [
        "TBD"
      ],
      "decisions": [],
      "final": true
    },
    "swallow_elf": {
      "text": [
        "TBD"
      ],
      "decisions": [],
      "final": true
    },
    "throw_woman": {
      "text": [
        "TBD"
      ],
      "decisions": [],
      "final": true
    },
    "smash_dwarf": {
      "text": [
        "TBD"
      ],
      "decisions": [],
      "final": true
    },
    "become_necromancer": {
      "text": [
        "The adventurers are many, and you are but one, the odds must be evened. You hide in a pit of wild and pure magic. A whole world of power is at your fingertips, all you need to do is claim it. Against your greater instincts you dive back down to the pool of magic at the bottom of your grave den. You submerge yourself in the whirling magic and let it fill you as the corpses above are set alight. The shadows and darkness of the pool wrap around you to give you a basic semblance of a body fit for walking upright. Eager to enjoy your body and new power of speech you whisper in a language all your own, forged from the tongues of ten races. Your words pour souls into the dead above you, giving them a false life. They crawl out from the grave and push aside their burning kin to pursue the monster killers nearby. The sounds of bones blades swinging, bones breaking, and spells casting becomes a cacophony. As you crawl up from the grave assisted by undead orcs the sunlight burns away your fragile flesh and you must hide under your servants to escape the pain.",
        "The solution is simple, but functional. A larger undead orc removes their black cloak coated in gore and faded by the summer sun and drapes it carefully over you. The hood falls over your face and grants you blessed relief. By the time your attention is drawn to the ongoing combat you see the dwarf has fallen; his chest caved in by an undead minotaur standing over him. The forest is a battleground of burning trees, arrows, and dozens of dismembered undead twitching uselessly. In the distance the remaining undead piling atop the remaining adventurers, the sounds of chewing tell you all you need to know about their fates.",
        "You can feel the souls in you singing in release, relishing their part in ridding four killers of their kind from the world. They cheer even louder when you bend your magics and breathe unholy life back into the adventurer’s mangled bodies. Their souls subjugated, bound to you as your servants forevermore. As you bind their spirits to you, you can taste knowledge unlike anything your dead and rotten kin possess. It brings out a hunger in you."
      ],
      "decisions": [
        {
          "label": "Harvest the Adventurers' Memories",
          "storyNode": "harvest_memories"
        }
      ]
    },
    "harvest_memories": {
      "text": [
        "As all wise leaders do, you know the value of knowledge. You take your latest servants’ skulls in your bony hands and breathe in all they know, a wider world than your monsters knew appears in your mindscape. Grand sprawling cities of stone and steel. Countless temples of worship of gods for every matter of life. Elves and dwarves rioting in bloody feuds. Wizards training in dungeons and pining for adventure in ‘the frontier’. Your lands. You see rows of wagons miles long filled with families with fortune in their eyes. Endless fertile lands to be cleared with the help of their trained warriors. The reason behind it all becomes all too clear only a moment later.",
        "You see scenes that are normal and tragic among all races. Elderly parents in bed, an agonizing cough signaling their coming end. A young man with a leg bleeding and broken beyond repair. A baby suddenly unresponsive. You see all are given doses of red potions in glass vials. The old parents’ coughs cease, the young man’s legs bends back into shape and his wounds close, and the baby turns from blue to lively pink in its parent’s arms. Miracles you can hold in your palm. The vials read: “Concentrated Orc Heart”. Images of potions for all kinds of ailments flash before you, made from all manner of monsters. Almost perfect cures to tragedy itself. Armed with these miracles the humans have nearly conquered death itself, and so their numbers grew. And grew and grew. And now they must take your lands so they can grow forevermore.",
        "Your hands crack the skulls of the adventurers as you rip the last memories from their minds, you see a village nearby. A quaint frontier-town. It shall be the first territory you reclaim for your kind.\n"
      ],
      "decisions": [
        {
          "label": "Take the Town",
          "storyNode": "take_town"
        }
      ]
    },
    "take_town": {
      "text": [
        "TBD. From here you’ll decide how you will expand and begin the war."
      ],
      "decisions": [],
      "final": true
    },
    "negotiate": {
      "text": [
        "Even the strongest beasts know to at times avoid combat. You are made of a thousand and one slain creatures. You perhaps are more aware of morality than any other being. And with that comes wisdom. Your voice rumbles like a landslide, “Adventurers, before you try to slay me, think of your own lives. The lives around you. You are all friends, no? Are you willing to watch them die? You, Holy Woman, do you wish to see tomorrow?”",
        "The woman’s legs are shaking, her staff more for keeping herself on her feet than for casting magic now. “Y-Yes. Of course.”",
        "“Then leave this forest, leave and never come back. All of you. I swear on all the gods I will not harm you. Understand this though, try and kill me, I promise not all of you will survive. Even if you rip me in two I will tear you to the ground and drown you in my blood. Now, go. Go and never forget what lurks here in the West.”",
        "The adventurers’ wide eyes scan your horned visage, your limbs like towers of bone and black muscle, and the sea of teeth and eyes of all colors woven into your being. Without looking back they flee into the East as fast as their legs can take them. “Wise choice, my friends,” your laugh booming behind them.\n"
      ],
      "decisions": [
        {
          "label": "Months Later",
          "storyNode": "months_later"
        }
      ]
    },
    "months_later": {
      "text": [
        "TBD. The adventurers will return with a force with a large number of warriors, forcing you to flee West."
      ],
      "decisions": [],
      "final": true
    }
  },
  "author": "Sean Wong-Westbrooke",
  "title": "Wagons & Dragons: The Dark Lord – An Accident of Magic",
  "preview": "Never before have the fate of so many rested on the shoulders of so few",
  "tags": ["fun", "fantasy", "adventure", "war"],
  "generalRelease": false,
  "badges": [
    {
      "node": "kill_sleep",
      "text": "A Brutal and Short Life",
      "icon": "💀️"
    },
    {
      "node": "back_to_town",
      "text": "Messenger ",
      "icon": "🏡️"
    },
    {
      "node": "go_sword",
      "text": "Brave Death",
      "icon": "⚔️"
    },
    {
      "node": "stay_monsters",
      "text": "The Griffin, the Hydra, and the Lord",
      "icon": "👾️"
    },
    {
      "node": "continue_disguise",
      "text": "In Plain Sight",
      "icon": "😷️"
    },
    {
      "node": "explain_yourself",
      "text": "The Greatest Adventure",
      "icon": "⁉️"
    },
    {
      "node": "die_proud",
      "text": "Let the Monster Out",
      "icon": "💀️"
    },
    {
      "node": "back_2_town",
      "text": "No Sanctuary",
      "icon": "🏡️"
    },
    {
      "node": "meet_orcs_alone",
      "text": "Final Goodbye",
      "icon": "😥️"
    },
    {
      "node": "orcs_happiness",
      "text": "Therapy Dispenser ",
      "icon": "🗳️"
    },
    {
      "node": "scare_orcs",
      "text": "The Adventurers, the Demon, and the Moon",
      "icon": "🌑️"
    },
    {
      "node": "attack_happiness",
      "text": "Merciless",
      "icon": "😁️"
    },
    {
      "node": "aftermath_happiness",
      "text": "A New God",
      "icon": "☁️"
    }
  ]
};

module.exports = wagons_and_dragons_the_dark_lord;
