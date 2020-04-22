const the_apprentice_and_the_dragon = {
  title: "Wagons and Dragons - Side Quests - The Apprentice and the Dragon",
  author: "Sean Wong-Westbrooke",
  tags: ["humor", "adventure"],
  generalRelease: false,
  badges: [
    {
      icon: "🥊",
      text: "Fighting is always the answer",
      node: "attack"
    },
    {
      icon: "🏳",
      text: "Let it go, let it go!",
      node: "move_on"
    },
    {
      icon: "💭",
      text: "Wishful thinking",
      node: "solo_apprentice"
    },
    {
      icon: "👟",
      text: "Bravely run away",
      node: "run_away"
    },
    {
      icon: "🐉",
      text: "The ending you really wanted",
      node: "dragonriders"
    },
    {
      icon: "🐉",
      text: "A dragon is all you need",
      node: "two_days_later"
    },
    {
      icon: "👬",
      text: "Friends come in all shapes and sizes",
      node: "steal_wagon"
    },
    {
      icon: "💤",
      text: "It all worked out",
      node: "hide"
    },
    {
      icon: "📗",
      text: "Have your cake and eat it too.",
      node: "apprentice"
    }
  ],
  preview:
    "Twenty-seven. Twenty-seven gold pieces my dad sold me for. One stinking harvest worth, we had three good years in a row and he still sold me. Lousy fart is probably getting fat off my share of the food…",
  content: {
    start: {
      text: [
        "We begin deep in the bowels of a winding dungeon on the forested edge of the Dark Lands. At its heart is a spindly teen apprentice, training to be a powerful master of magic. A wizard! Or at least, that’s what he expected to become. Instead, he finds himself cleaning out a cave troll’s latrine.",
        "“Become an apprentice they said. Learn ancient wisdom! Learn arcane powers! Learn the secrets of magic! Apprentice? More like servant,” the teen grumbles while wiping his sweaty brow. “Twenty-seven. Twenty-seven gold pieces my dad sold me for. One stinking harvest worth, we had three good years in a row and he still sold me. Lousy fart is probably getting fat off my share of the food…” The apprentice’s grumbling is cut short when the earth begins to shake and the resident troll comes scrambling forth.",
        '"Outta the way Zayne! Emergency! Emergency!”\n',
        '"Yurg?! What’s wrong?! Are we under attack again?!”\n',
        "“No! Rotten eggs!” the troll quickly plucks the comparatively tiny boy out of the way and rushes into the latrine, shutting the great wooden door with a slam.",
        "Zayne throws his head back with a great sigh before covering his ears and eyes and tries to think happy thoughts, “You’ll be a powerful wizard one day. You’ll be tall and handsome.”",
        "“Zayne,” says an older man’s voice.",
        '"Everyone will be begging to follow me and be my apprentice.”\n',
        '"Zayne?” repeats the old voice.\n',
        "“I’ll live in a tower, not some stupid dank dungeon.”",
        '"Zayne!”\n',
        '"Ah! Master Wendel!”\n',
        "The almost ancient looking silver-haired man taps his foot on the stone floor. “Stupid dungeon, eh?”",
        "Zayne’s eyes suddenly find the mossy floor incredibly fascinating. “Sorry Master,” the boy sighs. “It’s just, when will my lessons advance? It’s been months since you taught me my first spell, I want to do more than make things out of ice. I want to learn.”",
        "“Yes, yes I can see that. I can also see that even after a year with me you still need to learn a little respect for the one who took you in. Now, clean out Yurg’s latrine once he finishes and scrub the floors from here to the entrance. You’re going to make this ‘stupid dungeon’ spic and span.” He moves to leave before calling back a last time, “Oh and bring me my dinner at sundown. Let’s have grilled salmon, mushrooms, buttered toast, and a pot of green tea tonight. And don’t be late!”",
        "It takes the boy all has to not sigh, “Yes, Master.”",
        "An entire day of cleaning later, plus cooking, and the apprentice has prepared his and Wendel’s dinner right to order. “At least I eat better here than back home,” Zayne thinks. The candle on the food tray gives an orange glow to the dungeon’s dark blue stones as Zayne goes down the staircase to Master Wendel’s lab and chambers. At the bottom of the stairs and down the hallway is a thick door of wood and iron, at its base is a slot for food to be slid through. It’s something Zayne would expect in a prison, not a study or lab.",
        "Suffice it to say, any sort of wonderment Zayne felt towards his apprenticeship, has faded. He looks at Wendel’s meal with disdain, should he seek out some petty revenge?"
      ],
      decisions: [
        {
          storyNode: "spit",
          label: "Spit in the Teapot"
        },
        {
          storyNode: "spit_no",
          label: "Serve Food and Leave"
        }
      ]
    },
    spit_no: {
      text: [
        "Better not risk it, who knows what Wendel would do to him if he ever found out what Zayne did. The teen decides to go out and clear his head, the evening air will do him good."
      ],
      decisions: [
        {
          storyNode: "go_outside",
          label: "Go Outside"
        }
      ]
    },
    spit: {
      text: [
        "Master Wendel had it coming to him. It’s not like it’ll hurt him anyway. And so Zayne hocks a mouthful of spit into the soothing smelling tea. He slides the tray of food through the slot and carries on, feeling at least somewhat victorious. Wanting to bask in the feeling a bit, Zayne decides to go out and enjoy the evening air."
      ],
      decisions: [
        {
          storyNode: "go_outside",
          label: "Go Outside"
        }
      ]
    },
    go_outside: {
      text: [
        "Wendel’s dungeon is in the middle of a great forest, it is a week of travel along the roads to get from one end to the next, with only a few small towns scattered about inside. The nearest civilization is a small dirt road rarely traveled, as such, none but snake-men, the occasional desperate traveler, or adventurer ever come close to the dungeon’s mouth. On those occasions Master Wendel and Yurg repel them with ease. It’s been months since any incidents now but still Master Wendel says to not go out at night, “dangerous men and beasts blah blah blah,” but right now, Zayne needs a little rebellion.",
        "The spring air outside is comfortable, and the moon is high and bright. Zayne finds an old stump to sit and eat his dinner before just listening to the wind and the night bugs. It would be fully peaceful if he did not notice the sound of something lightly moaning.",
        "Always curious, Zayne tracks the moaning sound for some minutes before finally coming across a cave in a mountainside. The moaning ceasing as he draws close. The apprentice readies his pine training wand as he inches closer to the cave’s darkness.",
        "“Hello? Is anyone there? Do you need help?” Zayne says, stepping forward. A puff of warm mist is illuminated by the moonlight as a green reptilian head emerges with honey eyes. Zayne is frozen as the dragon comes closer. It is no bigger than a horse, though with a neck twice as long. Its green scales shine and its four limbs are thick with muscles. Its breath is like putting your face before a furnace. It would be like looking at a god, were it not for the creature’s distinct limp. The dragon tries and fails to hide the extent of its injuries. A whole swathe of scales is missing on its right side, revealing red and pink flesh beneath. The inside of its mouth is shining with small sparks as it approaches, keeping its head low."
      ],
      decisions: [
        {
          storyNode: "attack",
          label: "Attack!"
        },
        {
          storyNode: "flee",
          label: "Flee!"
        },
        {
          storyNode: "still",
          label: "Stay Still!"
        }
      ]
    },
    attack: {
      text: [
        "Zayne knows one type of spell and he pours everything he’s got into it. He draws his pine apprentice wand and pulls the water from the air, forming it into a spear of ice that he hurls with a great yell. The spear lands square in the dragon’s wound and it roars in pain. Zayne can only manage to let out a short yell of victory before the dragon’s jaw unhinges with a sickening pop and the creature swallows him whole.",
        "THE END"
      ],
      final: true
    },
    flee: {
      text: [
        "Zayne runs as fast as he can from the dragon. The lessons from Wendel running through his head. “Armor like living stone. Claws like scythes. Breath that boils away lakes.” The teen runs straight into the dungeon, through the halls, down the stairs and starts banging rapidly on Master Wednel’s reinforced door. The door swings open and Wendel’s eyes are dark with anger. “Why do you disturb me?! What is it-”",
        '"Dragon! There’s a dragon in a cave!”\n',
        "Wendel’s eyes go wide at the word, “What? Take me! Take me now!”",
        "Wizard and apprentice race back through the night towards the cave, the dragon is caught pacing outside the cave, watching its territory. On sighting the pair it spreads its torn wings with a roar Zayne cannot discern as angry or pained.",
        "“Get behind me Zayne, it’s mine!” Wendel draws his wand and the air goes dry as he surrounds himself with five spears of ice whilst the dragon digs its claws on the ground like a bull ready to charge. With a few words lightning begins to spread from Wendel’s fingers and wrap the ice with wild energy. “There is no getting away! I must know the secrets inside you!” The dragon’s eyes dart side to side, as if looking for somewhere to run, before its pupils sharpen and settle on Wendel with deadly focus."
      ],
      decisions: [
        {
          storyNode: "obey",
          label: "Obey Wendel"
        },
        {
          storyNode: "betray",
          label: "Stop Wendel!"
        }
      ]
    },
    obey: {
      text: [
        "Zayne is just an apprentice and this is no place for him. He runs and hides behind a rock as the fight begins. It is short, Wendel opens with launching all of his sparking spears at the dragon. The dragon rushes forward and twists its body letting the spears strike the thick scales on its back. Swathes of scales peel away, revealing the pink flesh beneath, but with a bloody roar the dragon continues to advance. The wizard tries to form a golden shield of magic, but as he flourishes his wand once more, a burst of dragon fire disintegrates his wand and hand. The green and bloodied dragon tackles the wailing master and grips his head inside its mouth. The dragon breathes a storm of sparks over Wendel’s struggling form and almost instantly, his spark is put out.",
        "After finishing with Wendel the dragon slowly approaches the cowering Zayne who looks at the creature with horror and fear that he is next. He closes his eyes as the dragon’s furnace like breath washes over him. But no pain comes. He opens his eyes to see the dragon’s tail vanishing into the woods."
      ],
      decisions: [
        {
          storyNode: "move_on",
          label: "Move On"
        }
      ]
    },
    move_on: {
      text: [
        "Zayne digs his master a shallow grave before going and taking anything of value in the dungeon he could fit in a sack. The apprentice without a master simply returns to a simple farmer’s life. Only gone for about a year, Zayne integrates back into his town fairly easy. He makes a life for himself, a normal and simple life planting and harvesting the crops. A good life. Sometimes though, even years later, Zayne would use his small bit of magic to make statues of the dragon in ice and wonder where it had gone and what could have been.",
        "THE END"
      ],
      final: true
    },
    betray: {
      text: [
        "The dragon locks eyes with Zayne for only a moment, its honey eyes imploring.",
        "“No!” Zayne yells as he pushes Wendel to the ground. The wizard’s magic spears are sent flying into the mountainside above the cave, showering the clearing with stones. Zayne covers his head at the storm of rock but no pain comes. Above him he can see the dragon covering him with its back. Master Wendel is not so lucky, he is lying in a pile of rubble and struggling to rise while holding his bleeding head.",
        '"Zayne! How could you?!” he calls out.\n',
        "“Let’s go!” Zayne yells to which the dragon nods its head. Together the boy and beast run into the thick woods, only barely illuminated by moonlight.",
        "As soon as Wendel recovers enough to follow he conjures spheres of light to track the escaping pair. “Come back Zayne! I won’t hurt you! Just give me that dragon! Come back, please!” The dragon tries to extend its wings, but it can only screech in pain at the effort. Zayne’s options are becoming limited as his master’s lights draw closer. In the darkness Zayne can see only a few possibilities. A campfire with the faint sounds of conversation. And a lone road to the nearest town bearing the sounds of a wagon."
      ],
      decisions: [
        {
          storyNode: "campfire",
          label: "Run to the Campfire!"
        },
        {
          storyNode: "road",
          label: "Make for the Road!"
        }
      ]
    },
    campfire: {
      text: [
        "Zayne knows he cannot do this alone. He needs help, and maybe, just maybe there is a group of adventurers able to fight off the wizard. He veers left, leaving the dragon confused as he goes for the campfire. Zayne has never felt so wrong when he sees four spear wielding snake-men hiding in the treeline, waiting to pounce on the passing wagon. Their torsos are like a man’s covered in scales bearing muscled arms ending in three-fingered hands, their heads and lower bodies are entirely serpentine. “We’ve been sssspotted!” hisses the largest one, an eyepatch wrapping its scarred head. In a split second their long bodies explode out towards the apprentice, their hissing chills Zayne’s bones.",
        "“What isss your busssinesss? Human?” hisses the one missing an eye, a red scar running down its head. Before Zayne can respond the green dragon emerges from the darkness and breathes sparking flames over the snake-men’s heads. “A dragon?!” yells One-Eye.",
        "The snake-men recoil themselves from the apprentice and bow down on the ground, pressing their faces into the dirt.  “Pleassse forgive usss, oh Great One. We did not know he wassss yoursssss-” the lead snake-man looks up and gasps, “Great One, you’re injured! Boy, what iss the meaning of thisss?!”",
        "At that moment Wendel emerges from the darkness and leans heavily on a tree. His grey robes are bloody and drenched with sweat. His eyes and hair wild with anger. “Zayne! Enough games!”",
        '"He’s trying to kill the dragon! Help us!”\n',
        "The snake-men take up their spears without question and move to surround the wizard. “For the Great One! For the honor of our clan! Die Wisssard!” The snake-men’s spears come at the wizard from four directions, two press their slithering bodies to the earth and aim their spears for his gut while the other two circle the trees and go for his neck. Wendel waves his wand in a flurry as the weapons come for him. At the end of the flourish the snake-men spears do not hit flesh, instead stopping mid-air, their steel tips chip against a translucent golden film in the air that surrounds Wendel.",
        "“Try all you want primitives, spears are nothing to magic!”",
        "The dragon rushes to join the fight and breathes a torrent of roaring flame over the wizard’s shield, the flames heating the snake-men’s spear heads red hot. Wendel forms a fist with his left hand and his body shakes as he maintains his shield, in the same moment he is whispering old words to conjure another set of ice spears. Wednel’s power is great but his body is still old, the strain of so much magic is making his ears and nose bleed. The dragon fire is bending and distorting the magic shield, deforming it like a hammer slamming into armor over and over again, but despite it all, Wendel is smiling. His eyes glow white as he wraps his spears in lightning, “I’ve never felt more alive!”",
        "The dragon replies to Wendel’s boasts with angry eyes that quickly go empty as the dragon begins to sway, struggling to stand. Its stream of flame rapidly weakens until the dragon collapses, breathing heavily. With their god on the line the snake-men are unrelenting as they continue to stab at the weakened shield, all whilst staring down the wizard with nothing but bits of sharpened steel."
      ],
      decisions: [
        {
          storyNode: "attack_wendel",
          label: "Attack Wendel"
        }
      ]
    },
    attack_wendel: {
      text: [
        "Unable to stand by, Zayne charges at the damaged shield enveloping Wendel and presses his wand to the dented wall. Calling on all the magic inside him to form a spear of ice at the tip of his wand. The apprentice crushes and condenses the spear more and more until its is the size of a nail. Zayne’s wand begins to crack and glow as his master’s shield cracks and shakes.",
        '"Zayne?! What are you doing?! Stop! I am your master! I AM YOUR MASTER!”\n',
        '"Not anymore!”\n',
        "“ZAYNE, NO!”",
        "And with a last push Zayne’s wand shatters as the magic shield collapses with a crash of golden glass. In that instant the shards explode out as raw energy, blasting the snake-men and Zayne back into distant trees, unconscious."
      ],
      decisions: [
        {
          storyNode: "awake",
          label: "Wake Up"
        }
      ]
    },
    awake: {
      text: [
        "The next thing Zayne knows is the warmth of the sun. “Good morning, my apprentice.” Wendel says, standing over the rousing boy.",
        "Zayne crawls backwards until he finds himself pressed to a tree, “What are you going to do to me?”",
        "Master Wendel bends down and squats before he hangs his head and sighs in disappointment, “Obviously nothing, considering you woke up safe and sound.”",
        "“Where are the snake-men?” Zayne says, scanning the campsite.",
        "“They’re fine. They’re waiting with the dragon over there, in the treeline,” he says gesturing behind him.",
        '"Why didn’t they run?”\n',
        "“I think the dragon likes you, Zayne. It’s been waiting for you since it woke up, tried to run off at first, but it came back.”",
        "“So what happens now?” Zayne stands up, “Are you going to try to kill it?”",
        "“No, not anymore. I’m spent after last night, can’t cast anything right now. Not that the lizards know that thankfully. Instead, I’m making you an offer. What you did last night, you didn’t just show me raw ability, but the will to use it too. I was withholding your lessons to see what you would do, and well, I can see that I went too far. Considering you almost stabbed me. I’m sorry for that. You can leave, right now, no strings, and join that dragon in whatever fate you forge for yourself. Or, you can stay with me. I promise no more games, no more chores. Every day will be filled with spells, learning, all the secrets of the world. I will teach you everything I know. I will even give you access to spells I am too old to learn.” He extends his hand with a gentle smile, “So, what do you say, will you be my apprentice once more?”"
      ],
      decisions: [
        {
          storyNode: "solo_apprentice",
          label: "Become a Wizard"
        },
        {
          storyNode: "run_away",
          label: "Leave with Dragon"
        }
      ]
    },
    solo_apprentice: {
      text: [
        "Zayne takes his Master’s hand with a firm grasp and looks to the dragon. It nods its head simply and turns away to its followers. Zayne always wanted power. The esteem of being a wizard. He has saved the dragon and now it would be with beings who worship it like a god. It will be well cared for. It feels like the best of both worlds really. Despite this, even years and years into his training he finds himself hoping they’ll meet again one day. Even when he can shoot lightning, conjure spirits, heal the sick, and name all the stars, he still finds himself dreaming of flying on that honey eyed dragon.",
        "THE END."
      ],
      final: true
    },
    run_away: {
      text: [
        "Zayne gives his old master an incredulous look and pushes past him to the waiting dragon. “I meant it when I said you’re not my master anymore. Good luck with everything, Wendel.”",
        "The ex-apprentice does not look back to watch Wendel return to his dungeon. He instead embraces the waiting dragon as it rubs its head gently to his. As a friend of a Great One, Zayne is brought to the snake-men village to live with them as the dragon is treated by their healers. The snake-men host Zayne kindly and let him watch the healers wrap the dragon in medicinal mosses and feed it piles of ash and charcoal that it licks up greedily. The ex-apprentice stays with the creature into the night, talking for hours. While they sleep that evening, a word begins to emerge in Zayne’s dreams. A word that makes him feel warm and safe, “Ziggurath.”",
        "The letters come together in the form of an egg that begins to hatch. From the cracks emerges a green head and claws. The green dragon, only a baby, prances and leaps around its gargantuan emerald parents. The baby breathes small plumes of sparks and fire and its parents hold it tight. It is happy. Until a great shadow comes down and all Zayne can hear and sense is heat and the taste of rubble. From the debris rises the bleeding green dragon, all alone, crying into the sky.",
        "Zayne awakes in the dead of night to see the dragon shaking and moaning. He gently rubs its hard and spiky head as he speaks, “Ziggurath. It’s okay. It’s okay now. You’re safe. I’ll keep you safe. I promise. We’re going to do great things, truly great things. Just you wait Ziggurath, just you wait.” At the words and kind touch the sleeping dragon calms its moaning and wraps itself around the boy. Its soothing warmth lulls Zayne back to a peaceful sleep the two would share each night until their final days.",
        "THE END."
      ],
      final: true
    },
    road: {
      text: [
        "Zayne would rather take his chances trying for civilization. Running into the open Zayne spots a lone covered wagon racing towards him on the dirt road.",
        "“Halt! Please halt!” the teen yells as he waves down the wagon driver. He has to squint to see Zayne standing in his path, barely able to hear him over the horses. In surprise he rears the horses reins painfully and comes to a rough stop.",
        "“Get on! It’s not safe out here! What devil possessed you to be out here alone boy?!” shouts the white-beared driver.",
        "“Nevermind that! Just go!” Zayne yells hopping aboard the driver’s bench before waving back behind him.",
        "At Zayne’s signal the dragon runs out from the shadows to the wagon. The wagon starts back up as the driver screams in panic “AHHHH!!! Dragon! It’s a dragon! What the hell have you gotten me into?!”",
        "“Don’t worry, its friendly!” Zayne says as the dragon rapidly throws out the supplies in the wagon before climbing into the back.",
        '"Friendly? Then what are you running from?!”\n',
        "Suddenly Master Wendel’s lights emerge from the woods. From his wand he forms another set of spears when from the side a group of tall and scaly snake-men suddenly smash into him and drag the wizard towards the campfire, kicking and cursing. Zayne breathes a sigh of relief at not going towards the campfire and avoiding the monsters beside it.",
        "The wagon carries on through the night, the panic of the escape and the fact that the old driver is keenly aware of the god-like monster behind him keeps him very awake. After only a day of incredibly awkward silence as the dragon sleeps and moans the odd group arrive at the small town of Larlo.",
        "At its southern gate is a poorly armored young man armed with a spear he is currently falling asleep on. The wagon almost gets past the dozing guard before he comes alive, “H-Halt! State your business!” As soon as he finishes his eyes squint in confusion, “Mr. Kahak? Where is your caravan, are you alright?”",
        "“Yes, I’m fine. Good to see a familiar face Grayson. It’s awful, a group of Snake-men, wiped us out halfway through the forest. I don’t know if anyone else made it out.”",
        "“I'm sorry to hear that, been getting dangerous recently. I’ll inform the mayor, we’ll need to hire some adventurers to clear the beasts out.” The guard then turns his eye to the boy currently trying to make himself look as small as possible, “Sorry to ask, but its protocol, what cargo are you carrying? And who is the boy? I don’t recognize him.”",
        "Kahak, the white-bearded driver, looks at Zayne with an unreadable look of intense thought."
      ],
      decisions: [
        {
          storyNode: "trust",
          label: "Trust the Driver"
        },
        {
          storyNode: "no_trust",
          label: "Tell a Lie"
        }
      ]
    },
    trust: {
      text: [
        "Zayne remains silent and places his bet on the kindness of the old driver. He grips the driver’s sleeve tight and twists it nervously.",
        "The driver pats Zayne on the back and smiles. “He’s a nephew of mine, I’m getting old, needed another hand around the shop.” The driver’s face then suddenly goes hard, “And are you really asking me about my cargo? After I told you my caravan was attacked? Grayson, do you want me to tell your mother you’re harassing an old man who just wants to go home?”",
        "The guard’s face goes white and he audibly gulps, “Oh, um. No sir, sorry sir, please, carry on.”",
        "And so the guard lets the wagon pass through the gate into Larlo, a decently well-off town, based off the number of inns and travel gear shops around its citizens make their living off acting as a resupply center and traveler’s waypoint. The driver eventually turns into a courtyard away from view of the streets and up to a large but rather unused looking storage house.",
        "The old man pulls open the large wooden doors before going over and patting Zayne on the shoulder, “Alright, go ahead and get the big lizard in there.”",
        "“Why are you helping me, I mean us, so much?”",
        "“Do I need much of a reason to help a boy so clearly in over his head? This is a traveler’s town, we help people who need it. Oh, you heard from the dunce outside I’m Kahak. Who are you?”",
        "The ex-apprentice sighs at ease, “Zayne. Good to meet you, old man.”",
        '"Likewise.”\n'
      ],
      decisions: [
        {
          storyNode: "week_later",
          label: "One Week Later"
        }
      ]
    },
    week_later: {
      text: [
        "For the next week Zayne and Kahak care for the dragon, now named Ziggurath after it carved the letters into the earth. To Kahak’s relief Ziggurath much prefers ashes, char, and charcoal over expensive things like meat. With regular meals, a warm and dry place to sleep, and lots of love, Ziggurath is able to spread its wings wide without issue. The truest mark of Ziggurath’s health is that its green color has transformed into a shining emerald sheen on its scales.",
        "On the eighth night Zayne and Kahak lead the dragon into the open courtyard and motion to the sky, its honey eyes sparkle with the stars reflecting in them. The emerald beast flaps its wings twice and bends its knees before stopping to look back to its friends. Ziggurath presses its body as low to the ground as it can and looks eagerly at them as it shakes its back."
      ],
      decisions: [
        {
          storyNode: "dragonriders",
          label: "Ride Ziggurath"
        }
      ]
    },
    dragonriders: {
      text: [
        "Zayne and Kahak look at each other with looks of disbelief that are quickly replaced with stupid boyish grins from ear to ear. The pair take their seats and grab a hold of whatever bit of scale, horn, and spike they can as Ziggurath takes to the sky like an arrow. It proves too much for old Kahak as he loses his grip and tumbles to the earth.",
        '"AHHHHHHHH!!!”  the old man screams as the ground races toward him.\n',
        "Ziggurath goes into a rapid dive that makes Zayne’s eyes well up as it just manages to grab Kahak’s arms in its front claws moments before crashing into the trees below. Kahak’s screams quickly turn from terror to excitement, “I’m flying! I’m flying! Zayne, we’re flying!”",
        "Ziggurath snorts and gives its own attempt at chortling lizard laughter. With all the freedom of the sky in his hands and good friends at his side, the ex-apprentice discovers a kind of magic he would never trade for anything.",
        "THE END."
      ],
      final: true
    },
    no_trust: {
      text: [
        "Zayne speaks just as the driver opens his mouth, “I’m no one sir, just a doctor’s apprentice, he died in the attack. And Mr. Kahak lost his cargo in the attack too, all we have is this one snake-man the horses ran over. Do you want to see?”",
        "Zayne quickly crawls back into the wagon and whispers to the waiting dragon, “If you can understand me, oh please oh please, play dead!” The beast cocks it head to the side for a moment before its head goes limp and it sticks out its long tongue. The rogue apprentice pulls the head out over the driver’s bench to show the guard who winces at the sight. “Didn’t die at first, even after being trampled!” Zayne says as he makes sure the slimy tongue hits the guard’s face.",
        '“Pah! Watch it!” he wipes his face before examining the dragon closely. "So this is a snake-man? Never seen one like this before," he says holding his chin inquisitively. He stares deeply at it before suddenly poking the dragon’s eye. The dragon yelps before unhinging its jaw and hissing at the guard with death in its eyes. The young guard faints in his armor and slinks against a wall like a bag of bricks. Kahak shoves the teen and the dragon back under the canvas and does a quick look around before carrying on into the town as if nothing happened.',
        "“You stupid boy, why didn’t you let me speak! We’ll be lucky if that guard thinks it was all just a dream.”  Zayne has no response for his lack of trust. The driver stops the wagon at the reeking opening to the town’s sewer system. “Get out. I’ve taken you far enough and risked enough.”",
        "“What are you going to do?” Zayne asks, wary.",
        "“I won’t tell anyone about you. But after that stunt back there, I can’t have some reckless kid with me. You can hide in the sewers, leave town as soon as you’re able. Goodbye.”",
        "And so the old driver leaves the apprentice and the dragon to become sewer dwellers."
      ],
      decisions: [
        {
          storyNode: "enter_sewers",
          label: "Enter the Sewers"
        }
      ]
    },
    enter_sewers: {
      text: [
        "The sewer tunnels are lit by swamp bugs, small scum sucking monstrosities, but harmless and good for illumination. Zayne leads the dragon along the platforms beside the river of sewage and after some twisting and turning they manage to find an abandoned landing and what seems like a creature’s den, a large creature.",
        "Zayne and the dragon look around the swamp bug lit tunnels for any sign of danger, but unfortunately don’t look up until it is too late. With a great crash a minotaur falls from a hole in the ceiling and onto the dragon’s back. Zayne can hear the air leave the dragon’s lungs before the two-horned behemoth throws it hard into a brick wall.",
        "The monster speaks with a gravelly and angry voice, “Go! Leave! Leave me alone!”",
        "The dragon roars painfully at the minotaur and stands with shaking legs and heavy breathing, its wounds have reopened."
      ],
      decisions: [
        {
          storyNode: "fight_mino",
          label: "Fight the Minotaur"
        },
        {
          storyNode: "shelter",
          label: "Ask for Shelter"
        }
      ]
    },
    fight_mino: {
      text: [
        "The apprentice stands between the minotaur and the dragon and takes out his wand.",
        '"So be it.” The minotaur spits before he charges with pounding hooves.\n',
        "Zayne has no time for an ice spear. From his wand comes a blizzard of cold that envelops and slows the minotaur as its fur freezes and its eyes are covered in frost. But it is not enough. The creature is too big, too fast. It grabs Zayne’s wand and snaps the arcane focus in its fingers before lifting the teen by his waist. The minotaur readies his arm to slame Zayne down into the ground when the dragon rushes forward and bites the monster’s leg, ripping and tearing at the frost covered flesh. The minotaur roars in pain, releasing Zayne, and pounding on the dragon’s back. Just as it brings its hands together to smash down on the lizard’s skull, the dragon unleashes all its spark filled fire. The heat burns through the frost and sets his oily fur aflame, in unbearable agony and desperation the minotaur dives into the sewage and vanishes."
      ],
      decisions: [
        {
          storyNode: "two_days_later",
          label: "Two Days Later"
        }
      ]
    },
    two_days_later: {
      text: [
        "Zayne and the dragon have settled a bit deeper inside the sewers, it was necessary to avoid the guards who had come to investigate after word spread of someone spotting a minotaur running out of town from a sewer pipe. All things considered, the boy and the dragon are doing okay. During the day Zayne nurses the dragon’s wounds and helps it stretch its wings. Being able to go out for a bit of fresh air at night does wonders to speed up the dragon’s recovery. At night, Zayne goes up to the surface and steals what supplies he can, a bit of ice magic can nullify any and all locks of the local storehouses.",
        "Weeks pass like this and in that time the dragon has healed and it has revealed its name after carving it into the brick walls, “Ziggurath.”",
        "On the first night Ziggurath can spread its wings without pain it and Zayne fly off into the night above Larlo. The world from up high looks endless and full of possibility as they dance through the sky, ready to forge a new future.",
        "THE END."
      ],
      final: true
    },
    shelter: {
      text: [
        "Zayne does not wish to fight. Instead he goes to check the injured dragon. It is weakened from the beating, but with effort it can limp along. Zayne looks at the minotaur with the eyes of a desperate boy.",
        "“Please, will you let us stay? We have nowhere else to go. The townspeople won’t have us. And the woods outside these walls are full of monsters. We’re sorry that we disturbed you.”",
        "“You cannot stay with me,” the minotaur huffs.",
        "“We do not need to! We could go to the other side of town! Let us stay underground, just to give me friend time to heal. A few weeks, that’s all I ask.”",
        "The minotaur huffs before speaking, “Fine. Two weeks, that’s it, then i’ll throw you out myself. Head as far in the sewers as you can, and stay there.”",
        "Zayne carefully guides the injured dragon deep into the sewers where they take shelter in a nest of swamp bugs. It smells and is filled with gunk, but it’s safe and hidden. Zayne spends his days and nights sneaking about and stealing what supplies he can for himself and to heal the dragon.",
        "But, trapped deep in the sewer, even with food and medicine the dragon barely heals without fresh air. And soon the two weeks are up and it has only regained the strength to walk freely and its wings show no signs of recovery. In truth, they have begun to shrivel and Zayne fears that flight may never be possible for the exhausted creature. The minotaur leads them out in the dead of the night in a huff. Few options remain for Zayne if he wishes to protect his friend."
      ],
      decisions: [
        {
          storyNode: "steal_wagon",
          label: "Steal a Wagon"
        }
      ]
    },
    steal_wagon: {
      text: [
        "Maybe the next town will have more options for the pair to hide and heal, maybe there will be a safer cave or mountaintop to hide on, somewhere. Maybe even Zayne’s home village would be an option. Regardless, to gain these options, they will need speed.",
        "And so, on the night of their eviction, Zayne quietly approaches the nearest stable, with no one in sight he uses his wand to freeze the lock until it shatters into nothing. Once inside, his childhood as a farmhand comes into play as he leads a team of horses as silently as possible out towards a nearby wagon. The wagon owned by the old driver from before. Once the dragon climbs in the back, stealth isn’t much of an option anymore with night guards manning the gates. Zayne slaps the horses onward and with a cry they go.",
        "Not a moment later the white-bearded driver from before comes from his home yelling, “Thief! Thief!” he meets the fleeting eyes of Zayne as the wagon leaves his property, “You! I’ll get you for this! You hear me! I’ll never forgive you!”",
        "There is no going back now. Zayne fires a pair of ice spears at the gate, breaking the iron bar holding it shut and terrifying the guards standing right next to it. The wagon loudly tears towards the busted open gate and out into the night. No one pursues, as only a madman would race into the monster filled night. And after everything that has happened, abandoning an apprenticeship for a dragon, confronting a minotaur, and stealing a wagon, Zayne couldn’t describe himself as anything less.",
        "And so the one-spell apprentice turned thief and the dragon with broken wings rode off into the night. The pair would bring havoc everywhere they went, to both monster and man. All in desperate bids to survive in a world not built for them to be together. They would be called outlaws, hoodlums, and fiends. Yet, until their final days, the two would forever be friends.",
        "THE END"
      ],
      final: true
    },
    still: {
      text: [
        "Zayne remembers lessons from his childhood, specifically how not to run when faced with a bear or a wolf, else you make yourself look incredibly tasty. Right now he’s betting his life on the hope that the same logic applies to dragons. He freezes in place as the beast approaches him on clawed hands and feet. The creature begins to circle Zayne, smelling him and exhaling on him with its furnace-like breath. It circles him two times before stopping in front and kicking up dirt, sparks bouncing around inside its maw.",
        "“Hey, hey hey!” Zayne says too loud. “It’s okay, it’s okay.” The dragon continuously licks its lips, not in a hungry way, but it appears its tongue is awfully dry. An idea pops into Zayne’s head and he goes down on his knees. The apprentice pulls out his wand and after some focusing, uses the only spell he knows to form a ball of crystal clear ice. He holds it out in his hand and offers it. “Are you thirsty?” Zayne quickly licks the painfully cold ice, “See? It’s safe. Go ahead, you try.”",
        "The dragon approaches cautiously and sticks the tip of its tongue to the ice, to which it twists its head in shock and delight. It quickly takes Zayne’s whole hand into its mouth and nabs the ice, much to Zayne’s horror as he yelps. To his relief and disgust though, the dragon does not take his hand. Instead, it leaves his hand covered in slime while it loudly chews and crushes the ice between its white teeth. After a few more chews the dragon swallows before looking at Zayne expectantly.",
        "“More? You want more?” Zayne makes another ice ball and tosses it to the dragon who again crushes and swallows it. Three more times he does this until the big lizard comes up and licks the apprentice’s face. “Agh!” Zayne says before the dragon lays down around him and places its head in his lap. “Oh,” he breathes. The dragon’s eyes are closed and there is a subtle vibration coming from its neck, almost like a purr, but with vocal cords like ship chains."
      ],
      decisions: [
        {
          storyNode: "pet_dragon",
          label: "Pet the Dragon"
        }
      ]
    },
    pet_dragon: {
      text: [
        "The dragon’s scales shrink around its head, but they look no weaker than the great armored plates on its back. Its scales are smooth to the apprentice’s fingers, and so warm, it is a warmth closer to sunlight than body heat. Zayne finds himself sitting with the dragon and rubbing its head for close to an hour before he tries to leave, unfortunately for him, each time he tries to move the dragon hisses slightly and pushes him down. “Is this my life now?” he says, to which the dragon snorts and nuzzles deeper into his lap.",
        "The awkward situation intensifies as a voice calls out from the direction of the dungeon, “Zayne! Zayne, where are you? It’s past curfew!”",
        "The dragon quickly stands and retreats back into its cave while Zayne runs off to meet with his master. “Over here Master!”",
        "“You know you’re not supposed to be out here so late. What’s wrong with you?”",
        "Zayne looks down to hide his annoyance at another scolding, “Nothing Master, just got lost in the stars.”",
        "“Well you should be in bed, come along, you have a lot of work to do tomorrow.”"
      ],
      decisions: [
        {
          storyNode: "next_evening",
          label: "The Next Evening"
        }
      ]
    },
    next_evening: {
      text: [
        "Zayne is dead tired after another day as Wendel’s apprentice, though it feels more like being a housekeeper. “Fetch this, fetch that, clean Yurg’s latrine again, blah blah.” The only thing that kept him from screaming in Wendel’s face was the thought of being able to visit the dragon in the evening, and now that time has come. Zayne remembers how much the dragon liked the ice, and he wonders what sort of things a dragon would like."
      ],
      decisions: [
        {
          storyNode: "think_back",
          label: "Remember"
        }
      ]
    },
    think_back: {
      text: [
        "Zayne thinks back on his early days in the dungeon, when Wendel actually taught him things. On the days Wendel told him about dragons."
      ],
      decisions: [
        {
          storyNode: "diet",
          label: "Dragon Food",
          consequences: ["Ashes"]
        },
        {
          storyNode: "personality",
          label: "Dragon Personalities",
          consequences: ["Story"]
        }
      ]
    },
    diet: {
      text: [
        "Only a month into his training the forest outside the dungeon caught fire, the result of a random lightning strike. Zayne remembers crying over the remains of the deer and birds who could not escape in time.",
        "He remembers one of the few times he thinks Wendel was trying to be kind, “Do not cry, Zayne. It is simply nature. The fire spreads the trees’ children, to make new life. Even the ashes and charred wood feeds back into the cycle as nutrients. It’s not good or bad, just natural.” Zayne did not react, he had heard such things before on the farm. But Wendel tried once more, “Did you know that dragons survive mostly on the ashes left over from fires? They seek out overgrown forests to burn and devour.”",
        'Zayne wiped away his tears before looking to Wendel with curiosity, "Why?"',
        "“I can't say why they do it. There may be some chemical component that they're after. Or perhaps it has something to do with their connection to fire. Without studying a specimen we'll never know.” Wendel then took his apprentice’s and led him back inside the dungeon, “Come now, I’ll make us some tea.”"
      ],
      decisions: [
        {
          storyNode: "return_dragon",
          label: "Leave Memory"
        }
      ]
    },
    personality: {
      text: [
        "It was a warm and sunny day. Zayne was out picking herbs and roots with his master when they saw it. Or to be more accurate, heard it. Numerous explosions of sound boomed out from above, the source, a group of dragons flying in V formation tearing through the clouds.",
        "“Master! Master look! A flock of dragons! I’ve never heard of such a thing!”",
        "“I know! I heard them too, and they’re called a ‘thunder’ of dragons, for obvious reasons.”",
        "“Really? I didn’t know dragons traveled in, thunders, why is that?”",
        "Master Wendel does not cease digging up roots as he speaks to Zayne. “They tend to be solitary, but on some occasions they’ll band together for protection or companionship. The young ones especially so. They’re remarkably capable socially when they need to be, seem to understand most common languages, though they can't seem to speak. I remember my Master told me of how they enjoy the company of bards and their stories. But, back to work, I need you to fill your basket before we head home.”"
      ],
      decisions: [
        {
          storyNode: "return_dragon",
          label: "Leave Memory"
        }
      ]
    },
    return_dragon: {
      text: [
        "Wielding knowledge, Zayne decides to make the most of it and help his new friend."
      ],
      decisions: [
        {
          storyNode: "dragon_food",
          label: "Bring Dragon Food",
          requires: ["Ashes"]
        },
        {
          storyNode: "tell_story",
          label: "Bring Dragon a Story",
          requires: ["Story"]
        }
      ]
    },
    dragon_food: {
      text: [
        "After delivering Wendel's dinner Zayne returns to the kitchen for a treat for the dragon. The kitchen is one of the better places in the dungeon, hosting an oven, large prep table, and multiple wood burning stoves. The teen has been neglecting his litany of duties wherever possible and so there are some oddly large collections of ash beneath the stoves. Zayne quickly sweeps it up into a spare bed sheet and quietly slinks outside.",
        'The green dragon emerges from its cave and cocks its head at the sight of the apprentice carrying a large squishy sack over his shoulder. "Hey, boy! Wait, are you a boy?" the dragon shakes its head, "Girl?"',
        'The dragon nods her head up and down with an open mouth. From her mouth comes a split tongue that seeks out the ash filled sack. "I brought it for you!"',
        "Zayne carefully unravels the bed sheet and the pile of ash looks like, well, a pile of ash. It's much more interesting to the dragon who quickly begins to lick it up. The food is gone in only moments and the dragon presses her ash covered snout to the young apprentice's face, exhaling terribly warm breath. \"That tickles! But, I'm glad you liked it.\"",
        "The dragon wraps her warm body around the boy in the cave and promptly shuts her eyes to rest. Zayne rubs her head as he looks at her red injured flesh, only beginning to scab over. But, then it begins to glow lightly. It is slow and minor, almost imperceptible, but without a doubt, the wounds are visibly closing."
      ],
      decisions: [
        {
          storyNode: "more_ash",
          label: "Bring More Ash"
        }
      ]
    },
    more_ash: {
      text: [
        "The next week would be a routine of cleaning the dungeon before sneaking out and collecting branches the dragon would burn to ash and lick up. Its wounds would continue to close faster and faster as it ate, but the dragon would continue to grow as well. Along with its appetite. By the week's end there aren't many loose branches to collect and the ash's healing power has remained only minor, while the beast’s appetite continues to grow. To sate the dragon's hunger Zayne is forced to enlist the troll in the dungeon, Yurg.",
        'Yurg waddles alongside Zayne to a patch of trees near the dragon’s cave, "So why you need me cut down trees?"',
        "“Um, I thought it would be fun?”",
        'Yurg gives a happy toothy smile, "Yeah, that makes sense to Yurg."',
        "Once they have arrived Zayne rushes ahead to tell the dragon to hide in the shadows. Yurg wastes no time hacking away at the trees with an oversized axe. With his thick and powerful arms he makes quick work of them and begins to pile up the logs by the cave entrance.",
        "“Thanks Yurg, you've been a great help.”",
        'He pats Zayne on the back, "Ah shucks, is good to be needed," knocking the teen to the ground, "Sorry Zayne, Yurg sometimes forget Yurg\'s strength."',
        'Zayne replies with a voice muffled by his face being stuck in the dirt, "It\'s fine." Just as the apprentice rises he hears a voice that sends shivers down his spine.',
        "“Zayne! I know you’ve been sneaking out, but now you take my troll? What are you up to?”"
      ],
      decisions: [
        {
          storyNode: "hide",
          label: "Hide!"
        }
      ]
    },
    hide: {
      text: [
        'The apprentice grabs and whispers to the troll, "Hide Yurg, hide now!" Yurg runs off into the woods while Zayne ducks inside the cave.',
        'To Zayne’s misfortune Wendel quickly casts a seeking spell and in only a moment a ball of light finds and rats the apprentice out,  "Zayne, what the devil are you doing in that cave, what are doing with these trees, all in the middle of the evening? I better get some answers this instant-" the wizard\'s growing voice attracts the dragon who emerges from the back of the cave to investigate, "A dragon? An injured baby dragon?" Wendel extends his hand to Zayne, "Get out of there Zayne! That thing is priceless!”',
        '"What are you going to do to it?”\n',
        '"Kill it of course. It’s not safe to study it alive.”\n',
        "\"You can't! It's my friend!”\n",
        "Suddenly Wendel draws his wand and paralyzes Zayne, “Silence!” Frozen in place, Zayne can do nothing but watch, \"It’s not a friend, It's a creature full of secret magic! Secrets I must have!”",
        "Wendel surrounds himself with a golden magic shield as he begins to form a set of ice spears in the air. The dragon hisses at him and claws at the shield, refusing to use its fire breath so close to Zayne. Just before Wendel launches his attack a great grey hand picks him up, shield and all, and tosses the wizard high over the trees and far far away, the old man’s screams growing faint in the distance.",
        '"No hurt dragon! It pretty!”\n',
        "With Wendel’s concentration shattered Zayne is free to yell in shock, “Yurg! What the heck! You killed him!”",
        '“No, he fine. He cast landing spell. Any second now," moments pass, “Any second now”.',
        "Suddenly, a lightning bolt explodes from a cloud down to the earth, setting the forest aflame. Wendel’s voice is in the thunder. “I WILL HAVE THAT DRAGON.”",
        '“See? Yurg right. Oh, Yurg right. We run now, bring dragon friend!" The troll quickly picks up the still weak dragon and the odd trio run off into the night. They would be pursued by Master Wendel for weeks before losing him deep in the human controlled Dark Lands to the West. There would be many adventures for the three as they evade the notice of adventurers and soldiers. Living in caves, feeding the dragon, and battling boredom. It’s not a glamorous life, but they steal enough food and gold to survive and they keep each other safe.',
        "Sometimes at night the rogue apprentice wonders if he could have made different choices. But, when he sees the dragon cuddling with Yurg, the two of them snoring up a storm, Zayne feels quite satisfied.",
        "THE END"
      ],
      final: true
    },
    tell_story: {
      text: [
        "Stories. Zayne remembers the magical nights when a bard would come to town and share their stories. Heroes slaying monsters. Heroes slaying great beasts. Heroes slaying evil kings. Come to think of it, Zayne can’t really recall many stories not about something being slain. “Probably not the best bedtime stories for a dragon,” Zayne sheepishly says to himself.",
        "The teen thinks hard about where he could find a good story. He considers asking Master Wendel for a moment before imagining the almost inevitable chewing out he would receive. But, he does remember Wendel’s lab being filled with books and scrolls, piled up on shelves to the ceiling. “There’s gotta be something in there.”"
      ],
      decisions: [
        {
          storyNode: "wait_book",
          label: "Wait for Wendel to Leave"
        }
      ]
    },
    wait_book: {
      text: [
        "Zayne waits late into the evening, cleaning and polishing the dungeon hall outside his master’s lab until eventually the old wizard opens and stands in the threshold of the reinforced door as he lets out a wide yawn. “Oh, hello there Zayne,” his eyes wander over the practically immaculate dungeon, “You’ve worked hard today. Good work. Get yourself some food, but don’t stay up too late,” he yawns once more, “Goodnight.”",
        "“Yes, thank you Master. Goodnight.”",
        "Just as Wendel turns the corner to his bedchambers Zayne discreetly casts his ice spell and a small block keeps the iron and wood door open just a crack. Quietly he sneaks into the lab and is free to take from the great shelves. Zayne never had time for a solid look at it all before, considering Wendel’s usual nagging. But there is a feeling in the air, a majesty Zayne cannot ignore looking at all the knowledge. He tries to imagine the hundreds of lifetimes scholars spent collecting the information and he feels humbled before it. And maybe a little dirty for sneaking in to steal from it.",
        "It takes some time but Zayne manages to locate a book titled “Legends and Gods”. It is a thin but heavy book, weighed down by its metal bindings. Inside are stories Zayne has never heard of before. “The Faerie King Eyrek. Sato the Snake-Man. Dragonrider Elaine.” The book is filled with delicately drawn pictures that move ever so slightly, magic infused into the ink. This is the book Zayne needs.",
        "Quietly Zayne returns to the dragon’s cave with a candle and the large book. The green dragon pokes its head out of the shadows and cocks it to the side at the sight of the teen arriving in the dead of night.",
        "“Hey there! I brought something for you,” he says lighting the candle and presenting the book. “A bedtime story! I heard your kind like stories, and well, I think it might help you heal. It’s what my mother did when I was sick.” The dragon still looks rather confused but it nonetheless sits on its back legs and looks curiously at the book. Zayne begins to read the stories through the night, flipping page by page as the candle melts down into only a nub. The apprentice fails to notice when the dragon has fallen asleep listening to him before falling asleep himself. He awakens with a jolt at the first birdsong of the day.",
        '"I’m late for morning chores!”\n'
      ],
      decisions: [
        {
          storyNode: "run_back",
          label: "Go Back!"
        }
      ]
    },
    run_back: {
      text: [
        "Zayne runs as fast as he can to the dungeon with the heavy book, only to find Master Wendel standing at the dungeon’s mouth, stamping his foot in the ground.",
        "“Why good morning Zayne, what have you got there?”",
        "“H-Hi, Master Wendel. A book, from your lab. I-I took it.”",
        '"Without asking?”\n',
        "“Without asking,” Zayne shrinks.",
        "Wendel’s eyes are narrowed and his lips are in a tight frown, before turning into a wry grin, “Haha! About time my boy!” says the wizard as he grabs the boy’s shoulder.",
        '"What?” Zayne sputters.\n',
        "“Zayne, wizards TAKE knowledge, they don’t simply wait for it to be learned. Did you really think I didn’t notice you sneaking past me? The weirdly clean halls, you’ve never cleaned that well the whole time you’ve been here. I’m so happy to see you taking your life into your own hands, I thought you were going to spend your whole life as my servant, poor Yurg’s been bored out of his mind.”",
        "“Master, forgive me, but that seems like an incredibly inefficient process. I-I kind of hate you.”",
        "“Haha! Oh, I won’t deny that, but it’s tradition! I hated my master too. Come, come, you’ve proven yourself, now your true lessons can begin.”"
      ],
      decisions: [
        {
          storyNode: "apprentice",
          label: "Become a True Apprentice"
        }
      ]
    },
    apprentice: {
      text: [
        "Thus, Zayne became the full-fledged apprentice of Master Wendel. He would continue to sneak out at night, under the guise of more study, to visit the dragon. He would read it stories for weeks, until it was finally strong enough to fly away. Years of study and practice would pass before Zayne would become a true wizard. But, once a year, the dragon would return to the dungeon, to spend time with its old friend and listen to a new story.",
        "THE END"
      ],
      final: true
    }
  }
};

module.exports = the_apprentice_and_the_dragon;
