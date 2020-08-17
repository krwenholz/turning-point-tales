const forgotten_forest = {
  title: "The Forgotten Forest",
  author: "Sean Wong-Westbrooke",
  tags: ["mystery", "horror"],
  contentWarnings: "Contains violence and frightening imagery",
  generalRelease: false,
  badges: [
    {
      icon: "💀",
      text: "Some things are better off dead anyway",
      node: "let_it_wither"
    },
    {
      icon: "💨",
      text: "Every man or monster for themselves",
      node: "refuse_to_help"
    },
    {
      icon: "🙅",
      text: "The art of the deal",
      node: "demand_a_deal_for_help"
    },
    {
      icon: "🆘",
      text: "No man gets left behind",
      node: "save_madds"
    },
    {
      icon: "😏",
      text: "Frasier would be proud",
      node: "enter_therapy"
    },
    {
      icon: "🌲",
      text: "Into the wild",
      node: "return_to_forest"
    },
    {
      icon: "🎀",
      text: "Please don't hurt me, I'm too pretty to die",
      node: "surrender"
    },
    {
      icon: "🔚",
      text: "All good things must come to an end",
      node: "take_necklace_a_end"
    },
    {
      icon: "🔇",
      text: "Peace and quiet at last",
      node: "leave_necklace_a_end"
    },
    {
      icon: "🏃",
      text: "Every man for himself!",
      node: "abandon_madds"
    },
    {
      icon: "💍",
      text: "My precious",
      node: "take_necklace_b"
    },
    {
      icon: "📤",
      text: "What's yours is yours, and what's mine is yours",
      node: "leave_necklace_b"
    },
    {
      icon: "⌛",
      text: "An adventurer always fufills their promises",
      node: "keep_promise"
    },
    {
      icon: "🏠",
      text: "Home sweet home",
      node: "put_on_your_necklace"
    },
    {
      icon: "🚫",
      text: "I didn't pinky promise",
      node: "break_your_oath"
    },
    {
      icon: "🎆",
      text: "Destroy all the things!",
      node: "destroy_gudrid_and_sigurds_necklaces"
    },
    {
      icon: "😬",
      text: "It's not me, it's you",
      node: "destroy_gudrids_necklace_killed_sigurd"
    }
  ],
  preview:
    "In the dream you see a thick dark forest with a small stone path winding into it. Your father took you hunting in forests as a child. It never really felt good to kill, but your father called it important to build your character. You did not care for it much, but you were good at it and your aim was true. But, out of all the forests, this one is different.",
  content: {
    start: {
      text: [
        "You are a 30-something myth and folklore history teacher, you live in Europe, are comfortably single, and you are unwell. For months now, you’ve been having the same dream that robs you of a restful night and leaves you sweating and panicked. In the dream you see a thick dark forest with a small stone path winding into it. Your father took you hunting in forests as a child. It never really felt good to kill, but your father called it important to build your character. You did not care for it much, but you were good at it and your aim was true. But, out of all the forests, this one is different. Familiar and yet foreign. Staring at it makes your bones feel like ice. You are standing on the road’s first step and hear something weeping. You try to fight it, but something possesses you to enter the forest. When you are deep inside the woods you glimpse something, cloaked in shadow, circling you. Frozen from sleep paralysis or sheer fear you cannot move an inch as you feel warm breath on your ears as something speaks to you. Its voice is almost imploring, “Come home.” You awake with these words rattling inside your skull.",
        "You’ve done your best to ignore it, to not give in to this mad dream. But your will alone is not enough. When you start seeing the stone road in your dream while driving to work, you almost take it one day and miss your exit. In class, the back windows normally look out on a plain parking lot. But more often than not you now see the tree line in your dreams, branches swaying and snapping as something paces through them. Sometimes you get lost staring into the trees only to jump when a student calls your name."
      ],
      decisions: [
        {
          storyNode: "see_doctor",
          label: "See a Doctor"
        }
      ]
    },
    see_doctor: {
      text: [
        "It is becoming increasingly apparent to your colleagues and students that you are distracted, forgetful, and jumpy. Late to work, unable to pay attention in meetings, and having to be taken out of a stupor by your students. You tell your doctor of nightmares and the sleep deprivation and you are prescribed powerful sleeping pills in order to see you finally get some real rest. They work for a time and you feel rejuvenated, any signs or the forest, stone road, and the voice vanishing from your vision with a few blinks, as if they were simply specks of dust. All seems to be well as you deliver the mid-term to your students, but as you hand a test to a student you feel that same breath and voice in your ears “Come home.” You shriek and twist around looking for the voice. But there is nothing to be found except yourself with wide eyes breathing heavy. You are placed on administrative leave.",
        "An increased dosage of medication offers you an escape to rest but again and again the voice and visions break through and push you to use more and more. The doctors say to exercise more. They ask if you’ve “tried to feel differently.” Your friends are growing concerned for you, they invite you out, but just see their friend sluggish from exhaustion and sedatives. They worry for you, but there is nothing they can do, they have their own families to care for. The drug dosages are reaching dangerous levels, you are unable to return to work, you can feel the world shrinking in your growing isolation from your friends and family. This can’t go on. The next time the voice asks you to “come home” you shout “Where?” As if in response a feeling grips your insides, an urge to tear open your history books and drag your finger across the maps. When your finger settles on the northern tip of Norway the voice comes again “Home.”"
      ],
      decisions: [
        {
          storyNode: "investigate_the_north",
          label: "Investigate the North"
        }
      ]
    },
    investigate_the_north: {
      text: [
        "You look into the area and find that besides a few small villages, it is largely considered uninhabited wilderness. Miles of rocks, grass, and snow. You scour pictures of forests in the area, but none feel right. With no other option you decide that you must go and see this place for yourself. You need to confirm that there is truly nothing there, maybe then you can move on.",
        "Your experience hunting sees your bags packed tightly and efficiently. Food, water, shelter, kindling and lighter fluid make the bulk of it. The drive north passes by quickly, a combination of focus and dulled senses. Your father’s shotgun is in its double locked case in the trunk, sliding around with a heavy ‘thunk’ as you travel the winding countryside. The area circled in red on your map is considered home to relatively poor hunting and few and far in between threats. But it cannot be denied there is some comfort in the power the gun can grant. You’ve never been in a forest without one before. Whatever your true feelings about the tool may be, it makes you feel safe.",
        "You drive your car as close as you can to where your heart points, but the road falls some 20 kilometers short at a wooden cabin doubling as a campers’ inn. You’ve arrived in the off-season and in a terribly remote location, you enter awkwardly as its single guest, at the moment. You decide to stay the night before heading off in the morning. After taking your pills, you lay in bed and wait for sleep to take you, hoping against hope for a peaceful dream. That hope is answered in an odd way, on your plain white sheets and feather mattress in this building of wood older than your grandparents, a single murky glass window letting in contorted blue moonlight and frigid air, it feels like the shadows are watching over you. Your last thought as you fade to sleep is how the air smells so wonderful, it feels like you’re where you’re supposed to be."
      ],
      decisions: [
        {
          storyNode: "sleep",
          label: "Sleep"
        }
      ]
    },
    sleep: {
      text: [
        "First thing in the morning you leave the inn and begin your journey. For the entire day all you see are rolling hills, grassy fields with piles of snow, and ever-present broken boulders and stones split by ice. When night comes, you find that sleep evades you. The voices in your head only grow louder as you feel yourself draw closer. All you can do is continue at first light.",
        "Past noon the next day you come across a high hill. You feel in your heart that your goal lays just beyond it and you climb eagerly. Eager to be free.",
        "The sight atop the hill is almost beautiful. Down below you there stretches more grassland until reaching a small but thick forest with leaves so dark it’s almost black. It’s as if you were looking at a hole in the world. And out from the Southern edge is a thin winding stone road. You feel this place that is not on any map or in any records calling to you, the road beckoning you in. Carefully you descend the high hill towards the road and do not take your eyes off the forest rustling in the wind.",
        "The section of road nearest to the road in your dreams is unfinished, piles of cut stone piled up as if ready to be used at any moment. You would think they were about to be placed if not for the thick moss blanketing them. The stones of the road are overgrown with grass and sit somewhat sunk into the mud. As you walk along you notice something in the stone sparkling in the overcast light. You pick up a necklace of nearly undiscernible bones strung along a fine silver chain. An expensive item. And here it is in the mud of an unfinished road. The only bones on the necklace you can discern are molars, molars just the right size to have been from a person."
      ],
      decisions: [
        {
          storyNode: "take_necklace_a",
          label: "Take Necklace",
          consequences: ["necklace"]
        },
        {
          storyNode: "leave_necklace_a",
          label: "Leave Necklace"
        }
      ]
    },
    take_necklace_a: {
      text: [
        "You pick up the necklace and notice it feels heavier than its small size would denote. The bones have runes carved into them, the same pattern repeating over and over. Holding it feels comforting in a way, a familiarity of sorts. You place the necklace in your pocket. You came here for answers. Perhaps this will help you find them."
      ],
      decisions: [
        {
          storyNode: "continue_down_the_path",
          label: "Continue Down the Path"
        }
      ]
    },
    leave_necklace_a: {
      text: [
        "You feel there is something wrong and that this necklace has a part in it. It feels cursed and it should not be played with. You leave the necklace where it lays, but as you pass over it, this nearly imperceptible whisper seeming to come from all around you. Choosing to believe it was the wind you shake your head and carry on. You wish to get in and then get out. Nothing extra must be done."
      ],
      decisions: [
        {
          storyNode: "continue_down_the_path",
          label: "Continue Down the Path"
        }
      ]
    },
    continue_down_the_path: {
      text: [
        "Once you are past the tree line the cold winds vanish. The forest is warm, far warmer than a northern forest should be. You carry on without paying it too much heed, you’re a bit out of shape. Of course, you’re warm after a long hike. This excuse does not work for long. The sky was cloudy outside the forest, and the lighting muted, but inside, it is much too bright. And something more is off. The shadows of the trees and plants are misshapen or missing, as if the light was coming from multiple suns and angles. Something inside you tells you to head back, to leave this place. You almost do, but it feels like if you turn your back, this place will take you. There is nothing to do but go deeper. Soon, you come across a bend in the road that reveals the path forking into three. The left bears a stone road. The center a stone bridge. And the right is a dirt road with a pool of blood mixed with broken branches."
      ],
      decisions: [
        {
          storyNode: "examine_the_forked_road",
          label: "Examine the Forked Road"
        }
      ]
    },
    examine_the_forked_road: {
      text: [
        "To the left, the path winds behind another bend. The road is well-worn with what looks like wagon tracks leaving indentations in the stones where the moss settles and piles up. A route so commonly used may lead to evidence of what kind of people were here. And it is far away from the blood…",
        "To the middle, the path is straight with a sagging stone bridge over a large ditch with a quiet stream at the bottom. The bridge is old, but its craftsmanship is impeccable. Surely an important building would be nearby to necessitate the expensive construction of a stone bridge. Maybe such a place holds answers.",
        "To the right, the path has still wet blood on it beside crushed saplings and flowers. Signs of a struggle. Something was hunting here, recently. Only one gone mad would pursue an unknown beast or man in an unknown forest. But is that that not exactly why you are here? Gun in hand? Find the cause of your pain, kill it, and go home. Be done with this madness. Take back your life."
      ],
      decisions: [
        {
          storyNode: "take_the_wagon_worn_path",
          label: "Take the Wagon-Worn Path"
        },
        {
          storyNode: "cross_the_old_bridge",
          label: "Cross the Old Bridge"
        },
        {
          storyNode: "follow_the_blood",
          label: "Follow the Blood"
        }
      ]
    },
    take_the_wagon_worn_path: {
      text: [
        "The bridge looks ready to collapse, best not to risk it. And the bloody path; nothing could lose that much blood and live. You take out your gun and begin moving down what you hope is the safer route. Along the path you see the rotten and overgrown remains of wagons fallen to the sides. Their loads of moss laden lumber laying atop wooden wheels now soft to the touch. The piles of wood completely cover the remains of the wagons, these were full loads, ready for transport and sale. All abandoned en-route. Without a gun in hand, you’re not sure you would have the courage to push on.",
        "Further on the path becomes thicker with more wagon remains, their spokes and boards poking upwards like the ribs of half-eaten horses. Looking inside the wreckages you find rotted safe boxes split open by decay to reveal silver finery. Were they attacked? By who? By what?"
      ],
      decisions: [
        {
          storyNode: "keep_going",
          label: "Keep Going"
        }
      ]
    },
    keep_going: {
      text: [
        "A short way ahead of the wagons you come out into a clearing with a tall and wide structure. You feel some relief at seeing something still standing, in place of rot it is wrapped in thin vines. But all is not well. Not visible from the road is that a fallen tree has crushed in the roof of the mill and the water wheel. The great blade stands rusted, still waiting to be used. The large river meant to power it has also dried up. This mill’s days of operation distant memories. Yet, in front of the saw lays a tree ready to be processed.",
        "A sawmill mid-use, wagons filled with precious cargo, a fine necklace abandoned on the forest’s outskirts. These people left in a hurry. They fled. But this logging operation is substantial, there must have been a decently sized population. What would make them all leave everything behind in an instant? “What scared them so much?”, you think. You remember the blood at the forked road. Sweat builds on your brow and you realize you are holding the gun too tightly. You hear the crunching of leaves and spin to face the sound. “Hello there!” a foreign voice calls out from your flank. You find yourself looking at a tall and burly man in hiking gear with his hands up. He has fiery red hair, a machete hanging on his hip and wears a wide, friendly, smile.",
        "“Can we talk?”, the stranger says."
      ],
      decisions: [
        {
          storyNode: "aim_shotgun_at_stranger",
          label: "Aim Shotgun at Stranger"
        },
        {
          storyNode: "lower_shotgun",
          label: "Lower Shotgun"
        }
      ]
    },
    aim_shotgun_at_stranger: {
      text: [
        "You aim your weapon at the stranger. “Woah there friend! I come in p-peace! Peace!” The man visibly stiffens, and his eyes are wide. He lowers his voice and is shaking slightly. “It’s ok, it’s ok. I’m not going to do anything. M-my name is Madds, I’m from a town on the coast. Sm- small, nice town.”",
        "You move your sweaty hands along the grip and barrel of the shotgun, pulling it tighter into your shoulder. “Unbuckle your gear belt with the machete, throw it to the side.” Madds does so quickly after fumbling with his belt for a moment.",
        "“See? Everything is fine. I’m n-no threat. Can we talk? I just want to talk. Ok? Friends?”",
        "You have him directly in your sights.",
        "“Friends?”, he says."
      ],
      decisions: [
        {
          storyNode: "interrogate_madds",
          label: "Interrogate Madds"
        },
        {
          storyNode: "lower_shotgun",
          label: "Lower shotgun"
        }
      ]
    },
    interrogate_madds: {
      text: [
        "“Who are you? Where are you from? Why are you here?”, you ask.",
        "“I -I’m Madds Niemi. I’m from a fishing town west of here. I-I don’t really know why I’m here. I’ve been having nightmares, hearing voices. Please, I’m not crazy, you felt the same thing too, right? They said to come here. I’m just here for answers.” His breathing is heavy, and his eyes are wide and trying to stay focused on you, but they keep drifting over to his machete. “Please don’t shoot.”"
      ],
      decisions: [
        {
          storyNode: "shoot_madds",
          label: "Shoot Madds"
        },
        {
          storyNode: "threaten_madds",
          label: "Threaten Madds"
        },
        {
          storyNode: "lower_shotgun",
          label: "Lower Shotgun"
        }
      ]
    },
    shoot_madds: {
      text: [
        "The next time Madds looks at his machete you shoot him dead.",
        "What have you done? You've killed a man. A terrified man who asked for his life. The urge to vomit becomes overwhelming and your breathing becomes so rapid you feel like you're drowning. You stumble back to the fork in the road and the still wet patch of blood and branches. Kneeling at the fork you curse yourself, this place, and whatever brought you here."
      ],
      decisions: [
        {
          storyNode: "surrender_yourself_to_the_forest",
          label: "Surrender Yourself to the Forest"
        }
      ]
    },
    surrender_yourself_to_the_forest: {
      text: [
        "You don't deserve to go home. Even if the voices and visions vanished, how could you ever face your friends and family as a murderer? The moment you killed Madds, you killed yourself. You wait by the blood for whatever spilled it to return and feel a kind of relief when an unknowable creature breathes warm breath down your neck and carries you back to its cave.",
        "In the near total darkness of the cave you can see the creature is like something from the oldest myths. It carries itself with a grace unbefitting something that looks like the mountainous bastard child of all the beasts of the forest. Claws, fangs, beaks, and antlers sprout from its endless limbs covered in all kinds of fur and feather. Shining in the dark are two beautiful blue eyes that look just like yours, almost hidden under matted feathers. It feels like the amalgamation of everything ancient man feared in the night. It tries to speak with you with a malformed and almost child-like voice, but it is futile. You don’t care about answers anymore. You just want this creature to take all the pain away.",
        "“Claws. Magic. I don’t care. End this for me, please.” In an act almost merciful it embraces you and covers you in a blackness as deep as a dreamless sleep. As you fade away you wonder if you could have made better choices."
      ],
      decisions: [
        {
          storyNode: "examine_the_forked_road",
          label: "Examine the Forked Road"
        }
      ]
    },
    threaten_madds: {
      text: [
        "“Don’t move or I’ll shoot.”",
        "At the word ‘shoot’ Madds dashes into the woods and leaves his machete behind. It takes only a few seconds for him to fully disappear from view into the thick forest. He is gone before you can get a shot off and the panic in his eyes made it clear he will be gone for good. Whether Madds was a friend or foe, it doesn’t matter now. All there is to do is continue on this path you’ve chosen."
      ],
      decisions: [
        {
          storyNode: "investigate_saw_mill_alone",
          label: "Investigate Sawmill"
        }
      ]
    },
    investigate_saw_mill_alone: {
      text: [
        "You came here for answers, best starting investigating.",
        "There is a small hut behind the sawmill. It is overgrown with vines, its hinges rusted so horribly it is a miracle the door continues to function. Inside you see that its walls are thick and strong, littered on the floor and on the remains of a collapsed desk you find remnants of scrolls and log books. You have found what must have been the foreman’s hut.",
        "Of all the books and scrolls, only one does not disintegrate from your touch. A thick leather tome with still a few specks of its red dye prominent, the rest of its cover is faded grey by time and light. Its pages are half-eaten by time and bugs. It is barely legible, the paper and ink smudged by water damage. Its pages crumble as you go through them, taking sentences and words piecemeal. “More wood” repeats over and over. “Fuel.” “We’re going to be rich.” The last legible page has a word requiring little examination. In chipping and rusted iron ink reads “Monster.” The book’s strength fails at last and it crumbles apart in your hands. As you watch it fall, your eyes catch something long and white on the other side of the hut’s door outside."
      ],
      decisions: [
        {
          storyNode: "exit_hut",
          label: "Exit the Hut"
        }
      ]
    },
    exit_hut: {
      text: [
        "Upon going out to investigate, the sight knocks you off your feet. A marble white skeleton is staring at you with grass for eyes. The skeleton’s lower half is some meters away, its upper laying down beside the hut, a torch in one hand and flint in the other. Its spine is mangled and torn. Above the bones you find grand gashes in the wall of the hut. Gashes deeper and longer than any creature alive should be able to make. Suddenly, the undergrowth is rustling loudly and the last word you read rings loud, “Monster.”"
      ],
      decisions: [
        {
          storyNode: "hide_in_the_hut",
          label: "Hide in the Hut"
        }
      ]
    },
    hide_in_the_hut: {
      text: [
        "You quickly grab the torch and flint and retreat inside the foreman’s hut. Covering your mouth, you peer through the gaps in the walls towards the source of the sounds.",
        "The first thing you see is the teeth. Teeth not made of fangs, but long twisting in-grown ivory antlers wrapped in black lips. Next comes its bulbous deer-like head, overgrown with its skin stretched and tearing. Its body is malformed and shifting, its form impermanent. Its proportions wild and shifting slowly as if its insides were simultaneously exploding and collapsing in on itself. Its body is wrapped in black fur and feathers. The most stable aspect of it is how its limbs extend like grotesquely muscled deer legs, its hooves replaced with mangled but so clearly deadly claws. Trailing behind it come some two dozen, things. They are shadows in the form of men, fingers ending in claws and with featureless forms as dark as the coldest nights. They march closely to their master. It is the truest visage of a demon you could ever imagine. But, with each step the creature takes across grass and stone, life bursts forth. Flowers of such beauty burst forth it makes your terrified heart flutter. More than a demon, you are looking at a god."
      ],
      decisions: [
        {
          storyNode: "be_quiet",
          label: "Be Quiet"
        }
      ]
    },
    be_quiet: {
      text: [
        "You cover your mouth and do your best to stifle your heavy breaths. You quickly realize it was a futile effort as a voice like burning trees flows over you, “I know you are there, child in the hut. You can come out now. I will not harm you.” Its great head leans down as if to peer inside your hiding place. The masses of feathers move away like eyelashes to reveal eyes like sapphires the size of your fist. They would seem almost kind if not for the skeleton outside. “How do I know that?”, you ask. It almost laughs, “Because I would have already, that decrepit hovel you are in, I’m confident I could blow it down if I so wish.” You take the shotgun in your hands and hold it ready. “Then why haven’t you? I-I’m right here.” It is difficult to tell with its form, but with the great thud it makes as it comes to ground, the beast takes a seat on the earth. “Because we’re family.”",
        "“That is why I called you here, it is why I have been calling people here for years. Your ancestors, my children, they abandoned me centuries ago. All to chase their greed. Now, they have had their time and I have waited patiently for them, all alone. All alone but for the few I could keep from leaving.” The Shadow Men stand vigilant around the forest god. “You mean… they’re people?” It grips one of its Shadows in its long-fingered hand, “Yes, they are my blood. This way, they cannot leave me and lose their way.” Your hands are coated in sweat, if not for the ribbing of the gun handle, surely it would fall loose. “Why did you not go to them, if you missed them so much?” You have struck a nerve, the Shadow in the monster’s grip is beginning to writhe, its captor’s claws shaking with the act of crushing. “Alas, I am a forest spirit. This forest is my domain as much as it is a prison, I cannot leave its bounds for any reason.”",
        "The creature leans forward, its heavy warm breath flowing through the cracks of your pathetic bunker, “In my name Aurvandil, ‘The Morning Star’, you may feel free to try to leave me. I promise you it will cost you everything.” Your weapons are limited and the road out of here is long. You douse your torch in lighter fluid for a stronger burn, you must be ready. “Or, you can accept your heritage and reside here with me and all your cousins I will call here just like I did you. Your life will be endless, I promise you that.” Its great claws rests on the roof of your hut, “Now you must choose, what will it be? I have waited long enough. CHOOSE!”"
      ],
      decisions: [
        {
          storyNode: "escape_alone",
          label: "FIGHT"
        },
        {
          storyNode: "give_up",
          label: "Give Up"
        }
      ]
    },
    escape_alone: {
      text: [
        "Your mind is ablaze and with a roar you kick open the door and fire a slug into the creature’s blue eye. Its skull explodes and it writhes and claws at the world. In its flailing in pain it tears apart the sawmill and shatters the great saw like nothing. There is no killing this thing. You can only escape.",
        "All you have in the world now is a gun and torch. You run at the screeching Shadows waving the torch, the fire eats away at their bodies turning chunks of them into ash. Even injured the Shadows are relentless, they scrape and tear at your back and soon you are covered in shreds, rags, and your blood. Breaking ahead of the pack into the woods you turn back and see the monster has recovered and is tearing through the forest towards you. Its claws are smashing the stone road and clouds of dust burst around it like meteor impacts with each thunderous step. The trees shake with its screams of anger and pain.",
        "You fire your second shot at it making it crumble once again and fire a third while it lays on the ground, but its rage is making each shot less and less effective despite the crippling nature of each wound. The Shadows are moving in on all sides, but your torch is just barely holding them back. Your heart is pounding, and your breathing is so haggard you fear you may pass out. But you cannot hold back a smile at the sight of the edge of the road out of the forest. Your smile shatters when a Shadow tackles you and tears the torch from your hands. It beats and claws at you like an ape and all you can see and hear is blackness and roaring. Desperately you fire your fourth shot into the Shadow’s chest, the slug and burning exhaust tears the Shadow in two. The forest god is now right upon you."
      ],
      decisions: [
        {
          storyNode: "shoot",
          label: "SHOOT"
        }
      ]
    },
    shoot: {
      text: [
        "BOOM. BOOM. With a desperate roar you fire your last remaining shells and turn the beast’s head into a gruesome flange of gore. The behemoth collapses and falls like a felled charging elephant, twitching and writhing as it tries to sew itself back together. It is getting back up."
      ],
      decisions: [
        {
          storyNode: "drop_gun_run",
          label: "Drop the Gun and Run"
        }
      ]
    },
    drop_gun_run: {
      text: [
        "In your exhaustion the shotgun feels like an I-Beam in your arms. You toss the empty weapon and run with everything you have. The beast, slowed but unrelenting, continues to come towards you and soon you’re deaf to your own heavy and labored breathing as it screams into your ears. As you slow the Shadows take their opening and turn their black claws on you. Your back and arms feel wet and you know they have cut you badly. The Shadows are desperate to hold onto you and quickly you are dragging a mass of them with you through the dirt. With the tree line just inches away you give your own roar, and suddenly, all you can hear is your own mangled voice.",
        "You have left the forest and lay on the stone road that led you here. The beast and the Shadows pound on an invisible wall in the air while you shout like a madman at them, the snowy night air burning your wounds. You scream and laugh at the trapped creatures, but quickly your spiteful gloating turns to terror as you see the Shadows and beast digging their claws into the invisible wall. They create a small tear, small but large enough to let something through. A blob of black fur plops down through the barrier, held open by Shadows. You crawl backwards along the snowed over path as something emerges from the black mass. It is a black fawn with little crystalline budding antlers on its head. “Why won’t you stay? Why won’t anyone stay?”, the thing whimpers like a child."
      ],
      decisions: [
        {
          storyNode: "respond",
          label: "Answer it"
        }
      ]
    },
    respond: {
      text: [
        "“This is all you were? A little babe?”, you scoff. It is beautiful, with skin like the night sky dotted with stars. You stand up, indignant at having to endure this nightmare. The motion scares the black fawn, it cowers, as if preparing for you to hit it. It looks weak, weaker by the second as it stands outside its domain. Its skin thins and its muscles fade revealing bony ribs and shoulders. As it hobbles towards you, it looks almost pitiful. “Help me”, it says."
      ],
      decisions: [
        {
          storyNode: "let_it_wither",
          label: "Let it Wither"
        },
        {
          storyNode: "comfort_it",
          label: "Comfort it"
        }
      ]
    },
    let_it_wither: {
      text: [
        "This monster you barely survived deserves no sympathy. The people it must have killed, the people it would kill and turn into its captives. The months of tortured sleep and a ruined life. You feel a sort of victory standing over this dying beast and do not look away until its cries cease, and its body crumbles into dust in the wind.",
        "The forest spirit truly is dead, the forest and everything within it fading from existence as it begins to snow. The Shadows are melting away, revealing the people within. You explain to them that their god has passed on. They are all ready to finally enter the new world they were stopped from joining all those years ago. It is a long walk to the nearest road, and you pray the weather does not worsen.",
        "“Hey! Hey! Heyyyyy!”, someone in the distance yells. Back in full gear, it’s the man you scared off, Madds! “Is everyone alright?” He is taken aback at you after what you did, but after witnessing a monster die, all is forgiven.",
        "Madds ends up sparing you all an arduous hike back to the inn with his flare gun, it takes hours, but soon rescue helicopters arrive for you all. Upon your return to civilization Madds manages to concoct a story about the villagers being an isolated people whose village burned down in an accident. The best lies are built on truth, and many of them decide to stay somewhere familiar and move into Madds’ fishing town. The doctors tell you that you will live with some chronic pain in your back from your “bear” attack, but as time goes on, knowing you have reclaimed your life, makes it worthwhile.",
        "END"
      ],
      final: true
    },
    comfort_it: {
      text: [
        "You take the powerless and dying god into your arms and feel it become lighter with every breath it takes. Its legs soon become little more than skin wrapped bones and its beautiful eyes are cloudy and unresponsive. “Please, he-help me. I don’t want to die. I don’t want to die. I can’t see. I c-can’t. Please, I’m scared!”"
      ],
      decisions: [
        {
          storyNode: "refuse_to_help",
          label: "Refuse to Help"
        },
        {
          storyNode: "demand_a_deal_for_help",
          label: "Demand a Deal for Help"
        }
      ]
    },
    refuse_to_help: {
      text: [
        "“No”, you say, caressing its head. It’s more bone than flesh now.",
        "“Please.”",
        "“This is all I will do.” The mercy you now show is generous, perhaps too generous. “Nothing more.”",
        "No more words come from the creature in your arms. Its limbs softly fall to the ground, the ligaments faded away. Its skin’s night sky luster has aged into sand. It has no more words, only the sort of a ragged broken self-loathing weeping of something cursing the world and themselves. Its blind eyes turn to you as if seeking a last second reprieve, but in that moment its neck gives way and its eyes finally shut. All that remains of the creature is whisked away by the wind and you sit in the grass and feel the first snows of winter begin to fall into your hands.",
        "Epilogue: Halfway Mercy",
        "You awake half-conscious to the sound of helicopter blades. The stranger Madds speaking inaudibly to the pilot crew. It seems you’ve been saved. With what little consciousness you have left, you feel yourself feeling pity, disgust, anger, sympathy. When something dies in your hands, it changes you. Now is no exception. As the medical tech places an IV in your arm you find yourself briefly hope the forest spirit finds some peace.",
        "END"
      ],
      final: true
    },
    demand_a_deal_for_help: {
      text: [
        "“What do you need?”, you ask.",
        "“Inside. Put me inside the forest”, it coughs.",
        "“I will help you, but we must make a deal. Let the Shadows go, let them be human again. You need to swear to never imprison or hurt anyone every again. Do you swear?”",
        "Its blind eyes are shaking, and its nearly lifeless jaw lays agape “Yes”, it says.",
        "You carry the dying spirit and hand it back to the Shadows through the tear they made. Looking from outside the barrier you see that immediately the spirit’s aging ends. You can see under its re-growing skin muscles flowing along and wrapping themselves around its bones. It’s cloudy eyes clear to reveal their true blue. Its shoulders and neck are strong and broad, and its skin is as vibrant as the clearest night sky. It looks strong again. And for a moment you let yourself fear you made the wrong choice.",
        "It is fear unfounded thankfully. Quickly the Shadows begin to melt away and reveal the people beneath. “I made a promise”, it says. At this the pain of your wounds and exhaustion come into full strength and you fall unconscious.",
        "The smell of cooking meat wafts into your recovery room and you remember you haven’t eaten in days. You are shocked to awake within a building clearly within the village. Wandering outside with a blanket wrapped around you, you find a fire pit burning with skewers of meats and thick stews boiling. Beside it are the villagers reveling in their freedom with other strangers called by the forest spirit. The atmosphere is so lively you cannot help but give a warm smile.",
        "The villagers tell you that you slept for three days while the forest spirit healed you. It is a relief to be spared the scarring and pain that would otherwise remain. Amidst the night of dancing and eating you sense something behind you watching. The forest spirit gently sparkling in the shadows is lazily watching the festivities in the undergrowth. Its eyes close gently when your eyes meet, and it seems to list off into sleep, resting its head on its legs.",
        "Epilogue: Returned Forest Spirit",
        "Free of any threat from their guardian, the previously missing village begins to thrive again, its members free to venture out into the world and bring back what they find. Soon the village is officially put onto the maps and attracts new blood. The village goes onto maintain dedicated respect towards and honoring of its forest god for the safe home it provides them. Far into the future, in your old age you even decide to retire in the modernized and heavily spiritual village. As you enjoy food at the annual restoration feast, you are happy to know the spirit is watching somewhere, its wishes fulfilled and your nightmares long over.",
        "END"
      ],
      final: true
    },
    give_up: {
      text: [
        "It’s hopeless. You can’t possibly fight them all. You open the door emptyhanded and kneel to your god. “Welcome home my child. Welcome home.”",
        "Epilogue: Cornered",
        "Years have passed now in your life as a worshipper of the forest god Aurvandil, “The Morning Star.”  In time the name almost sounds beautiful. Every day you are made to pray to Aurvandil to grow its power. As it grows in size and reach, it draws more and more people into the village. You become lost in the routine of capturing people and seeing them made into Shadows, enslaved like you, or simply eaten. It all becomes the same to you.",
        "You try not to think about the horror of your life. You focus on the food you are provided and the simple joy of breathing another breath. There is nothing else to your life. You lie to yourself and say that it is enough.",
        "END"
      ],
      decisions: [
        {
          storyNode: "examine_the_forked_road",
          label: "Examine the Forked Road"
        }
      ]
    },
    lower_shotgun: {
      text: [
        "Just what are you even doing? You lower the shotgun and sling it over your back. “I’m sorry. I’m sorry, this was so stupid. What are you even doing here?”",
        "“It’s going to sound crazy, but something has been pulling me here, it won’t let me sleep. I can’t take it anymore.” He starts to run his fingers through his hair at the stress of remembering the dreams. “…Yes, dreams. I’ve been having dreams”, you say after a moment’s pause. “Terrible dreams, crying.”",
        "“I knew I wasn’t going crazy”, his smile is small but real, clearly still recovering from being so close to death at your over-eager hands. “Hey, don’t mean to scare you, but you should pick up your machete. There was a lot of blood on the path further back on this path.”",
        "“There was blood? There’s not supposed to be any wolf packs or bears here, but then again, this forest shouldn’t be here...” He begins to scan the woods, fear back in his eyes. “Hey, what’s your name again?”, you hope asking can calm him, even a little. “Oh, it’s Madds. Madds Niemi”",
        "“Get your machete out Madds, whatever spilled all that blood can’t be far.” Madds quickly does so. “Do you have any other tools on you?”, you ask. “Yes, a flare gun and some spare flares. For an emergency.” You make a mental note of your expanded arsenal. “Good, that’s good. And, Madds, where did you even come from?”, you say. “I’ve been wandering the woods from the west headed east. This forest isn’t on any map and I’ve passed by on ship multiple times. This is supposed to be just another patch of grass and snow. That and the nightmares, I don’t know what to believe right now.” There’s no good response to such a question, you think to yourself. But what you come up with seems good enough. “For starters, let’s look around and see what we can learn from this place.”"
      ],
      decisions: [
        {
          storyNode: "investigate_saw_mill_with_madds",
          label: "Investigate Sawmill"
        }
      ]
    },
    investigate_saw_mill_with_madds: {
      text: [
        "You see a large barn-like building some ways further down the clearing. “Madds’, check out the sawmill. I’ll go look into that building down there.” He seems almost reluctant to separate. “Ok, be careful.” But he knows you need answers.",
        "You hold the gun at the ready and move carefully towards the barn, eyes on the trees outside the clearing. The barn is covered in thick vines, the roof is sagging inwards from their weight. The doors are tall and thick but split and grey from age. You slowly open one door but the hinges give way and the great door comes tumbling down with a muted impact, the vines wrapping it softening the impact. Your look back to see Madds worried by the sawmill but give him a thumbs up. Inside the barn it is almost unbearably warm and dry. The barn trapped the heat inside turning its insides into a sort basic greenhouse. The room is almost overflowing with towering piles of charcoal. No village could need this much charcoal for heating, not with a forest full of wood. And even if they are using it to smelt, it must be an enormous operation.",
        "As you head back to update Madds you look further down the road, the tip of a large pointed structure lays in the distance. Looking at it you feel the same magnetic quality of the visions in your nightmares. You feel yourself begin to step towards it. “Hey! I think you need to see this!”, Madds calls out."
      ],
      decisions: [
        {
          storyNode: "run_to_madds",
          label: "Run to Madds"
        }
      ]
    },
    run_to_madds: {
      text: [
        "You shake your head reclaiming your senses and rush over with your gun ready, the sight you find freezes you in your steps. Madds has his shaking finger pointed behind a hut built behind the sawmill, at his feet is a human skeleton bleached white, its torso ripped in two with wild grasses running through the bones. The wall behind the body explains its end. Three two-meter long gouges have been torn into the thick wooden wall. There truly is a monster here.",
        "“I found this in the skeleton’s hand.” Madds presents you a torch wrapped in rags still stinking of some vile oil. “They never got a chance to light it.”",
        "“T-take it. We may need it.” Without an already substantial arsenal of a shotgun, flare gun, machete, and torch you’re not sure you would have the courage to move forward. Life back outside the forest was already akin to death. There is no choice but to move on."
      ],
      decisions: [
        {
          storyNode: "investigate_church_with_madds",
          label: "Investigate Building with Madds"
        }
      ]
    },
    investigate_church_with_madds: {
      text: [
        "“Let’s push on”, you say.",
        "“Did you find anything?”, Madds asks. “I found mountains of charcoal in that barn, there must have been a few hundred people living here to collect that much”",
        "“What do you think happened to them?”",
        "“Probably whatever happened to that skeleton. But never mind that, I saw another large building down the road, at the very least it may be a safer place to hide than out in the open or inside a barn full of fire fuel. He walks beside you with strong fisherman hands, blade in one hand and torch in another, ready to use them. He looks damn near medieval and there is a comfort in that. “Ok”, he says.",
        "At the end of the road, you exit into a town square. Homes and merchant stalls stand collapsed and rotting. The building you spotted originally is the tallest and most well preserved of them all. Its walls are thick. Elevated off the ground the floors are clear of rot. Inside the building are hundreds of cobwebbed candles, the largest mass of them sitting at the further wall inside the long building. Laying all over the floor are dozens of carved deer, their features created with exquisite detailing."
      ],
      decisions: [
        {
          storyNode: "examine_deer_shrine",
          label: "Examine Deer Shrine"
        }
      ]
    },
    examine_deer_shrine: {
      text: [
        "When you hold one in your hand you cannot bring yourself to imagine they were carved out of anything but love. As you and Madds stare into the deer’s painted blue eyes you feel nothing so beautiful could be made in fear.",
        "Suddenly the world all around you two seems to be within a thick bubble of water, everything distorted and bending. The laughter of children surrounds you. Looking down around your feet you see children dressed in clothes from centuries ago, playing with the deer like all children have played with toys. The laughter does not cease when a group of adults enter the room and pick up their respective children. They begin whispering to each other, but almost all the words are unintelligible. “Mommy, Mommy look! Look what I made!” a little black-haired child says pulling on his mother’s dress.  “Not now, Sigurd, mommy’s busy.” Says a woman with hair like starlight and sky-blue eyes. Madds seems almost transfixed with her before he looks back to you. “She looks just like you, you have her eyes.”"
      ],
      decisions: [
        {
          storyNode: "reach_for_her",
          label: "Reach for Her"
        }
      ]
    },
    reach_for_her: {
      text: [
        "Madds grabs you by the shoulders, “Nightmares, visions, a clearly magic forest. That’s why, why we’re drawn here, why this place feels so familiar. We’re descendants of this place.” You remove yourself from his grip, “Then why did they leave?” Words spoken too loud come from the whisperers, “Shadow Men” and “Monster.” At this a distorted inhuman roaring comes from within the bubble, the memory growing darker as something massive blocks the sunlight. “RUN” the adults in the memories yell, dragging their children behind them. Rushing into the room come shadows in the form of men, they grab and drag away the nearest people by the door, but some people wave torches madly in defense. The Shadows screech and recoil in pain as they retreat and let their master in. The room is torn to shreds by a shapeless black mass clawing and ripping the floorboards and snatching the slower adults. A deafening roar fills the room with such malice it makes your heart freeze “GUDRIIIIIIID.” Your vision becomes filled with nothing but endless teeth and darkness. You drop the carving as you cover your head and in an instant the vision vanishes.",
        "You and Madds emerge from the vision breathing so hard you nearly miss the shaking of the earth growing stronger and stronger. Something is coming. The words of the silver haired woman ring in your head. Shadow Men. Monster.",
        "A hundred lifetimes could not prepare you for what you see. The beast’s arms seem to stretch endlessly as they come into view, bent and twisting unnaturally. The monster looks less like a being but more so an amorphous mass of flesh, teeth, bone, and feathers. At the center of the disjointed mass that must be its head you notice two gem blue eyes bigger than your fist staring at you.",
        "Behind the monster follows dozens of Shadows, they bring with them a stranger dressed just like you, ready for a long hike and camping. He is old and gaunt with dirty blond hair and brilliant green eyes. A voice like snapping bark flows from the monster’s maw, “What is your name child?” The monster is circling the old man like a hungry animal, but rather than desiring food, it wants to burn the image of this person into its wide eyes. The man stares unflinchingly and tracks it, defiant, “Petyr. Petyr Poletaev.” The beast brings its head down to look into the man’s eyes. “Petyr. Kneel.” The stranger does not react, even as his legs shake, blood stains on his legs. The Shadows push him down and Petyr cries out as blood pools around his knees. This man is going to die."
      ],
      decisions: [
        {
          storyNode: "fight_your_way_out_with_madds",
          label: "Fight Your Way Out"
        },
        {
          storyNode: "surrender",
          label: "Surrender"
        },
        {
          storyNode: "hide",
          label: "Hide"
        }
      ]
    },
    fight_your_way_out_with_madds: {
      text: [
        "The odds are against you. But you are not going to hide. You are not going to surrender. And you’re sure as hell not going to watch that man die. Madds’ heart is a pure one, he is ready to save this man. The monster is beginning to bare its teeth as Madds handles the loaded flare pistol. Using a camping lighter, you ignite the torch in Madds’ hand. You’re ready. “Get the Shadows, I’ll take the monster! GO!” You kick open the doors and fire a slug into the monster’s blue eye.  Its skull caves in and it begins to writhe and claw at the earth. Madds fires a flare into the densest crowd of Shadows and waves his blazing torch making them scream and vanish, but not for long. Your ammo is limited and the road out of here is long. You can make them hurt. You can do this!",
        "“Take this!” Madds yells, tossing the machete to the injured old man. The stranger grips the blade and hacks away into the god beast’s body, he is consumed in a manic rage you have no time to try to understand. He is not running, and the monster is only continuing to recover from your blasts. You need to run!",
        "You and Madds run and run down the road as the forest god recovers. In what seems like only moments you see it tearing through the forest towards you, it tosses the stranger’s mangled body at you and Madds like a broken rag doll, sending you both tumbling along the ground. Madds is first to his feet and when he pulls you to yours you know you have broken ribs. The torch is lost, knocked far out of reach by the impact of the stranger’s corpse. With his now free hand Madds pulls you along as your head turns back to see the angry god’s claws and weight smash the stone road and clouds of dust burst around it with each thunderous step. The trees shake with its screams of anger and pain.",
        "The edge of the road and escape from the forest is in sight, but you have only two shells and one flare left. “We’re almost there!” Madds shouts, a crazed smile on his face. Suddenly Madds is clotheslined by a Shadow. Your momentum carries you past him and you trip on the uneven steps of the road. Madds is surrounded by Shadows that beat him and hold him down. He manages to shoot his last flare, but it fires uselessly into the trees and falls into the undergrowth. “Help! Don’t let them have me!” The monster is bearing down on the path, the edge of the forest is so close! “HELP ME.”"
      ],
      decisions: [
        {
          storyNode: "save_madds",
          label: "Save Madds"
        },
        {
          storyNode: "leave_madds",
          label: "Leave Madds"
        }
      ]
    },
    save_madds: {
      text: [
        "You don’t leave friends behind. You take your shotgun and empty the last two shells into the monster’s chest, blood spills from it and its screams turn to coughs and choking and back to screams as it sews itself back together as a flood of flesh and rage. In the moments between its recovery you drop the gun and dive into the undergrowth for the still burning hot red flare. You grab it with your bare right hand and scream as it burns and melts into your flesh. “Back! Get back you monsters!”, you shout as you wave the flare at the Shadows as they shriek and vanish. You use your remaining hand and arm to pick up the injured Madds and with him leaning on your left shoulder you run to the forest edge as best you can. Waving the flare at any Shadow that gets close you can hear the God getting closer. Your back is wet with where its claws gouge you as it continues to give chase with, its eyes have turned red from the agony of its crippled state. Soon, you’re deaf to your own and Madds’ shouting as the God screams into your ears. But suddenly, all you can hear is your own voices.",
        "Turning back, you see the behemoth clawing at an invisible wall at the forest’s edge, its mouths contorting until they tear, but still you hear nothing. Together you and Madds scream back with everything you have, knowing this thing hears you at the very bottom of its soul. You scream in victory.",
        "Epilogue: Saved Madds",
        "Your hand was destroyed by the flare, and the injuries to your back and ribs leave you reliant on a regime of pain medications. The damage they’ll do to your liver most likely mean you won’t see your 70’s. But, somehow, it’s not so bad. Madds and his family have been taking very good care of you in return for saving his life from “a bear attack” as you tell those who ask.",
        "It’s been years since you moved in with them, you’ve really taken to the Northern life and fishing. You even have a trip planned with Madds set to start tomorrow. You lost a hand, but you’ve got a fabulous hook now.",
        "Together with a good friend, cheap beer, and good fishing, you will outlast your demons.",
        "END"
      ],
      final: true
    },
    leave_madds: {
      text: [
        "You turn forward and don’t look back, even as you hear Madds calling your name as he is dragged away. Running with everything you have you feel cold claws tear into your back as you exit the forest. You run to the edge of the road you came in on before you realize nothing is behind you. You see the contorted spirit smashing again and again against an invisible wall at the forest’s edge. The beast motions to its Shadows and they drag Madds the wall and press him to it as he transforms into a Shadow, all memory and desire leave him. But there is some kind of pain in his form, looking out on freedom. You tear your eyes away; this was the cost of your choice.",
        "Without your gear, numerous injuries over your back, and no flare gun to attract help, you spend three days slowly making your way onto a country road where you collapse from the cold and exhaustion. You awake weeks later missing numerous fingers and toes and with massive scars on your back.  The nightmares continue as the Forest still beckons you to it, but in an odd turn of fate your escape left with you such nerve damage your own moans of pain can almost deafen them. You’re put onto a drug regime more intense as the one you had come north to escape. The doctor tries to console the fact that the drugs will shorten your life by claiming they will at least allow you one at all. You escaped a hell, and with so much lost, you will be truly damned if you do not make the most of it.",
        "Twenty Years Later",
        "It took years of re-writes and additions, but eventually you made a comfortable living off a dramatized account inspired by your experiences, and the occasional celebrity appearance. You found acclaim in making the reader wonder whether it was the protagonist or the monster that was more disturbing. Yet, despite being free; it is difficult to escape what you have learned, what you saw, what you did. Some things, drugs cannot bury. Sometimes before you drift off to sleep you see the forest god standing at the foot of your bed. You see it leaning over the threshold, watching you. The whispers and call of the forest are on mute from the drugs, but your own mind has become your enemy. You see Madds in the crowds of your fans, on the train, sometimes you can feel him grab your hand so very tightly. All this too, is eventually silenced by more medication. Life is often a daze to you now, but you hold tight to it. You fought for it, you sacrificed someone for it, you need to hold onto it and never ever let go. Right?",
        "Now, years later, there have been mounting reports of missing people, their families saying they vanished during camping trips to Norway. Many of them were understood to be massive fans of your books, and they were going on a sort of pilgrimage to the place of your inspiration. How much of this is your responsibility? You are growing older now, how much fight is left in you?"
      ],
      decisions: [
        {
          storyNode: "enter_therapy",
          label: "Enter Therapy"
        },
        {
          storyNode: "return_to_forest",
          label: "Return to the Forest"
        }
      ]
    },
    enter_therapy: {
      text: [
        "In time you enroll yourself in therapy to finally share your real experience, hopefully it will help bring you some peace. The therapist doesn’t really believe you; he thinks you’re researching for a sequel, but it’s nice to talk about your experience regardless. You hope someone else will finish off the monster and free the Shadows at last. But, despite it all, you still can’t shake the image of Madds sitting and watching you on the spare therapy couch, the creature in all its black glory sprawled on the floor and its flesh flowing over and through the room and you as you share its secrets. “Was it worth it?”, you ask yourself.",
        "END"
      ],
      final: true
    },
    return_to_forest: {
      text: [
        "The disappearances don’t stop. There are no reports of a forest in the area. No one can fight the forest god or free its captives if they do not have the monster’s permission. You need to finish this; you cannot say you are free of any blame regarding all those that have gone missing after you. You have not had the weeping nightmares in years now, but you can’t escape Madds. He speaks to you now, even convinced you to buy a seat for him on the plane. In your declining drug addled health, you have to hire a Snowcat and a team to operate it to bring you to the site again.",
        "The crew lose themselves in a mix of excitement and confusion over the ‘discovery’ of an unknown forest not on the maps. In celebration you offer them all hot chocolate laced with sleeping pills from your vast reserves. Soon they are asleep, and you have set foot back within the forest.",
        "There wasn’t much of a life to be found outside this place in the end. When you left someone behind, you feel you left yourself as well. You escaped and managed to suppress the nightmares and call of the forest, but they simply came to be replaced by new ghosts and guilt and shame. The Shadows lead you into the arms of their lord who embraces you like a child finally come home, as its claws dig into you and you begin to turn into a Shadow, you flick the switch of the device in your hand and detonate the explosives hidden inside.",
        "By the time your crew awakes the next day the forest is in engulfed in flame before suddenly vanishing. Your fans mourn your passing and continue to make pilgrimages to the site of your death. The sudden appearance of the forest and its disappearance go down as a bewildering phenomenon that is in time written off as a moment of mass hysteria. You go down in history as a popular author with a mysterious disappearance. Your picture finds itself hanging in a place of honor above the fireplace of the inn by the forest site, beneath the picture is your name and small epitaph that reads: “The last recorded person to ever go missing in the Forgotten Forest.”",
        "END"
      ],
      final: true
    },
    surrender: {
      text: [
        "You throw your gun to the side. There is no fighting a monster like this. Nor its army of Shadows. You walk out and kneel alongside Petyr and hope for mercy.",
        "Madds is not so eager to give in. “What are you doing?! Oh god!” He picks up your shotgun and empties it into the monster’s face until it is a bloody stump. He tries to make a run for it, but the Shadows take him and hold him down as their god convulses and regrows its head. Once it is recovered, you watch as the god picks up Madds to drop him into its maw. He calls your name, asking you to save him, but it is too late. You do not lift a finger. You watch.",
        "Epilogue: Coward",
        "Your days are spent in servitude, helping lure folk who come looking for and wander into the woods. They are all either transformed, killed, or imprisoned like yourself. Over the years you bring in so many their faces have become a blur.",
        "Your nights are spent in fervent prayer to your warden. With each prayer you grow its strength. Its body grows more massive. The forest’s boundaries expand daily, drawing more and more victims within. And through the beast’s magic you will live and pray so long as it wills it. Each night the monster comes by to watch you pray and behind its broken Cheshire smile, you swear you can hear Madds begging for help from inside the god’s hellish stomach. There is no hope anymore. No one to save you. All you can do is pray louder than the screams.",
        "END"
      ],
      final: true
    },
    hide: {
      text: [
        "You and Madds are crouched down behind the great doors, hugging them, trying to get as small as possible. You can see outside through the tiniest opening in the planking of the walls.",
        "“Petyr. My son, you’re home. I’m sorry you have been hurt. There was no other way. I had to give you your gift.”",
        "Petyr speaks with unflinching eyes, “And what gift is that?”",
        "“The truest gift a god could ever give, endless life. Here with your family, never wanting and never suffering.” The monster looks at Petyr expectant. “Will you take it? Your birthright?” It cannot suppress a gangly smile.",
        "The stranger bears browned teeth and plunges a boot knife into the monster’s doe-like eye. “Go to hell.” The monster screams as it rears back in pain as the Shadows press Petyr into the gravel, his enraged eyes never leaving his enemy, “Gift? Birthright? You ruined my life! My wife left me! The drugs, the alcohol, the cancer is rotting me from the inside out! Go to Hell! Go to Hell!” The monster’s eye has healed and now bares its teeth. It takes the cursing Petyr into its mouth whole. After the sickening crunching and squelching ends the beast says something as if it were satisfied. “Welcome home” it repeats.",
        "Together you and Madds stifle your screams. In time the monster and its Shadows wander off into the woods again. You wait quietly, fearful of the monsters’ return. In time night comes and it feels safe enough to make a break for it."
      ],
      decisions: [
        {
          storyNode: "head_back_to_sawmill",
          label: "Head Back to Sawmill"
        }
      ]
    },
    head_back_to_sawmill: {
      text: [
        "The night is lit by a half moon, more than enough to move about, but also to be noticed. You have no other options unfortunately. Quickly and quietly you return to the sawmill without any sign of discovery, any discovery would have meant your immediate death anyway. Madds pulls you inside the charcoal barn. “Where are you going?”, Madds whispers.",
        "“What do you mean, where? Out of here! Now let’s go!” Madds will not let go. “No, you saw what that guy did, we can hurt these things. We can kill them. We can keep anyone else from dying like him.”",
        "“Why?”, you ask. “We sat there and watched him die. We have a responsibility to fight. We owe him that much.”",
        "“Madds…” His eyes are resolute, “You can go without me. I won’t hold it against you. No matter what happens. At least, leave the gun.”"
      ],
      decisions: [
        {
          storyNode: "fight_forest_god_at_Sawmill",
          label: "Fight Alongside Madds"
        },
        {
          storyNode: "abandon_madds",
          label: "Abandon Madds"
        }
      ]
    },
    fight_forest_god_at_Sawmill: {
      text: [
        "You and Madds are the ones here and now. You are the ones with the knowledge, the weapons. These things can be hurt. Any more deaths will be on your head. You can do this. You have to do this. You have a monster to kill.",
        "You need to draw the monster and Shadows in and there is not better tool than the charcoal barn. You have Madds fill his pack with charcoal and empty it over the sawmill and then coat it in lighter fluid from your gear. Your trap is ready. You set the barn alight with the flint from the skeleton and wait for the fires to take. It is not long until it is a raging inferno illuminating everything around you clearly. And soon the earth begins to shake with monstrous footsteps.",
        "You and Madds hide in the undergrowth as the monster comes into view between the barn and mill, roaring in confusion at the disruption of its forest, its Shadows useless to battle the flames that turn them to ash with a touch. It now stands directly before the mill you have coated in fuel. Your kill zone has been made and you fire two slugs into the beast’s chest. It writhes in pain as great holes are torn through its body. You can see tendrils of sinew pulling itself back together and fire another two shots that rip through its healing wounds. The hole grows big enough you can see the trees behind the monster now. Behind you Madds stands ready with a lit torch swiping at any Shadow that gets close to you.",
        "You fire your last two loaded shots into the beast’s head. Your onslaught proves too much, and it falls back through the roof of the sawmill and onto the great rusted blade. The sawmill comes apart as the felled creature flails in pain with the blade splitting its torso in two horrifically."
      ],
      decisions: [
        {
          storyNode: "trigger_fire_trap",
          label: "Trigger the Trap!"
        }
      ]
    },
    trigger_fire_trap: {
      text: [
        "“Madds! Now!”, the monster now lays in your trap. Madds fires his shot. Flames engulf the mill and spread over the monster quickly and violently, the smell of burnt hair and fat permeates everything. There is no screaming anymore, just the same weeping that has been in your dreams all these months. The beast isn’t fighting back anymore.",
        "As the great mass of fur, antler, and claw burns and melts away, you see a smaller form is crawling from the burning tower of flesh. It has four legs but is dragging itself forward with only two. You see a black buck emerge with broken antlers so clear, they would be like water in the cleanest river. Regardless of its beauty, you wish to finish this. With Madds at your back with his torch and gun you rush the broken deer as it crawls into the undergrowth, your last remaining shot loaded and ready.",
        "But, as you push away the plant cover, all you see is a juvenile buck, skin like the night sky, stars and all, a great red crater in its ruined belly. It is shivering and looks at you with not deer, but human eyes. Eyes a vibrant sky blue. “I- I didn’t want t-to be alone. I’m sorry. I’m sorry”, the god’s true form says.",
        "Standing above a felled god you watch it shiver and end its misery with a final solemn blast. Abandoning the gun in the bushes and weeds you stand above a creature that was misguided, lonely, and afraid. All around you the fire burns strong and the blackness of the Shadows melts away revealing the villagers imprisoned inside for so long. The whole of the forest and everything within it begins to fade away until you, Madds, and the surviving villagers stand free and cold in the wilderness.",
        "Madds’ fires off his last flare and in a few hours, a rescue party of helicopters comes for you. They land at the road’s edge and quickly shepherd the tired and confused ex-Shadows to safety. As you leave to board the helicopter you notice yourself standing at the very end, or was it the beginning (?), of the road that led you here. You remember the necklace that marked this journey’s beginning."
      ],
      decisions: [
        {
          storyNode: "take_necklace_a_end",
          label: "Take Necklace",
          consequences: ["necklace"]
        },
        {
          storyNode: "leave_necklace_a_end",
          label: "Leave Necklace"
        }
      ]
    },
    take_necklace_a_end: {
      text: [
        "At one time this land was a people’s home. That book you found, the memories of that shrine. This necklace was made during a time when this land was place of love, of belonging. Despite what their creator had become, the necklace was made with love. You want to believe that means something. You wrap the necklace around your neck and place it under your shirt. You look at all the people freed from being Shadows, and you think that they will all need a home of love too. Maybe you can help somehow.",
        "Epilogue: Recovery",
        "With the nightmares gone you steadily manage to wean yourself off the drugs that kept you going. It takes time, a long time, but through daily effort you rebuild your life with friends and family. A bit of fame from discovering a barely industrial community hidden in the northern wilderness was absolutely helpful as well, it sure did help your career as a historian. You stay in touch with Madds, as he helps integrate the freed villagers into his fishing community and maintain good relations with the them as their savior. The esteem you brought to your university is repaid in full through assistance in helping the villagers find their way in the modern world. You continue to teach for almost forty years and retire highly accomplished and adored. The last of your days are spent in the care of the children of the villagers you saved so long ago as their thanks for their chance to live. They are happy and peaceful days by warm fires and surrounded by the sounds of crashing waves.",
        "Your gravestone holds the epitaph: “Teacher. Protector. Friend.”",
        "End"
      ],
      final: true
    },
    leave_necklace_a_end: {
      text: [
        "This is not your land. It is not your home. It was once, a very long time ago, but not anymore. This is a place of tragedy. And there is no need to hold tight to that. You leave the necklace where you found it and press it down into the mud. It is time for all to move on. As you board the helicopter you feel at peace with your lone memento from here being your life and the peaceful years ahead.",
        "Epilogue: An Ordinary Life",
        "The nightmares are gone, and you are free to live your life as you please. You have had enough excitement and supernatural dealings for a lifetime. You pick up your life right where you left it and enjoy the trappings of normal civilian life. You cut contact with Madds and live an ordinary life until retiring in comfort and obscurity. The only “Home” for you was the one the forest almost made you leave behind forever. You relish the normalcy you reclaimed. Until your final day, the life you live is not glamorous. It is not tragic. It is not exciting. It is not easy. It is not too hard. It is not blessed. It is not cursed. In the end, it is enough.",
        "Your gravestone holds the epitaph: “A quiet life is a beautiful thing.”",
        "End"
      ],
      final: true
    },
    abandon_madds: {
      text: [
        "You’ve seen death incarnate now, and it was horrific. You don’t know this man beside you. Whatever broken life awaits you back home, there is still some happiness to be found there, however small. Here in this forest, there is just death.",
        "You hand him your father’s shotgun and all your shells. “Take it. Good luck.” As you run away in the night you think arming him was the least you could do. There is no turning back now. Madds sets the charcoal barn alight and the warm glow quickly illuminates the midnight forest. You can only imagine the heat Madds is enduring standing beside it. And the terrifying stand-off he has begun. You can hear the roaring of the monster, called to the one challenging it. Even when you are far enough away from the fire’s light that it is barely visible, you can still feel the world shaking under you. A shotgun blast echoes through the trees. One man against a god.",
        "You go as quickly as you can through the woods and reach the free outside air unmolested. The world is blanketed in white snow and you push on. At the top of the hill the unmistakable scent of smoke surrounds you. The west of the forest near the sawmill is burning violently and fully out of control. You can just make out the continuing reports of the shotgun. “He’s still going?” In that moment you feel such regret at leaving such a brave man behind. But, before you even have the opportunity to run back to him, the forest vanishes.",
        "The world is silent with the sounds of falling snow. Not even a gust of wind to carry away the lingering smell of smoke. That smell is all that is left of the forest from what you can see. The black hole in the world has been replaced with miles of fresh grass, all being quickly covered by the snow. There is no sign of any monsters, any village, any people. You walk back down and wander through the filling in grassland. There truly is nothing. There is no sign of Madds.",
        "Epilogue: Madds’ Sacrifice",
        "It has been two weeks since Madds vanished. In that time, you have tracked down his small fishing village and his family. A grandmother, a father, a mother, and a sister. You tell them of how you ran into each other while hiking and how he valiantly defended you from a pack of wolves. How he died for you. The news of their missing son breaks them. But what is even worse than their weeping, is how they embrace you. You who left their son.",
        "The funeral is held soon after. The entire village comes to honor the memory of one of their finest sons. A hero. The service is simple, but the hall of the small sea salt battered church is filled entirely, the later mourners having to stand outside. When all the services are finished you watch Madds’ mother carry his empty urn onto a wooden fishing boat in the port. His mother tells you, “He always liked Vikings, he would have wanted this.” You set the boat alight and with Madds’ family push it out to sea. “Thank you”, you say. You are the last one standing on the port late into the night, listening to the sounds of softly crashing waves.",
        "End"
      ],
      final: true
    },
    cross_the_old_bridge: {
      text: [
        "The bridge must lead to something important like the middle of town, and if not, gaining the high ground sounds like a good idea in this unknown territory. Especially with something potentially dangerous nearby. To cross the bridge, you need both hands free and must leave the shotgun in your backpack, as much as you would like to have it on hand after seeing all that blood. The stone bridge is fragile. You take a few steps over it before it starts falling away. You fall on your hands and knees and scramble to the other side of the bridge as the rest behind you falls ten meters down into the dead riverbed below.",
        "You’ve gained high ground now and can see all around you, and what is most clear now is that you won’t be heading back the same way you came. You take your shotgun out and march down the path with determination. At the end of the straight path you enter into the edge of a small run-down village. The haphazardly organized and half-finished roads are overgrown with weeds and lined with sagging wooden homes weighted down by vines and rot. To your left is the only stone structure, and it appears to be in decent shape."
      ],
      decisions: [
        {
          storyNode: "investigate_stone_structure",
          label: "Investigate Stone Structure"
        }
      ]
    },
    investigate_stone_structure: {
      text: [
        "The building’s door is gone. All that remains are rusted hinges half torn from the doorway. The first room is the dining room, a long and thick broken table leans against the back wall. In the back of the building sits what remains of a grand bed. The metal frame standing tall, little remaining of its feather bed. Beneath it lays a metal box coated in rust. It is heavy and thick iron and locked. It is clear it was strong once, but those days are passed. Its lid sits ajar and inside you can see a large decorated book. Taking your survival knife from your belt you leaver it inside and snap off the aged hinges. The book is remarkably well preserved, the pages little eaten by time and bugs.",
        "On its cover, a name is written out with metal studs, “Gudrid.” Whoever made this for her must have loved her dearly. It is a journal, detailing this Gudrid’s life starting from when she was just a little girl. Writing ceases in the thick book less than half of the way through. There is a name that continues to repeat itself throughout the writing, “Aurvandil.”"
      ],
      decisions: [
        {
          storyNode: "turn_page_1",
          label: "Turn the Page"
        }
      ]
    },
    turn_page_1: {
      text: [
        "“Father asked Aurvandil to grow more trees and Aurvandil got mad. They made up later, and now there are so many more trees!”",
        "You have to skip ten pages that have been ruined by spilled ink and bugs.",
        "“Aurvandil is angry again. It’s been years since I saw them like this. They look tired too. Father and Uncle found silver beneath the town! Father said to be happy, but I don’t see them often now, they spend all their time in the mines these days. Mommy looks sad too. Today is my birthday, but no one seemed to remember besides Aurvandil.”"
      ],
      decisions: [
        {
          storyNode: "turn_page_2",
          label: "Turn the Page"
        }
      ]
    },
    turn_page_2: {
      text: [
        "The next few pages carry on about the same topics repeatedly; talk of chores, boys, parties, and weddings. The name “Einar” repeats again. It is the clearest word over dozens of pages. Written with thought and diligent care. It becomes clear why in a moment.",
        "“I’m getting married! Einar proposed with a silver ring he made himself!”"
      ],
      decisions: [
        {
          storyNode: "turn_page_3",
          label: "Turn the Page"
        }
      ]
    },
    turn_page_3: {
      text: [
        "The following pages describe Einar’s promotion to foreman of the sawmill. The passing of her mother from age. The expansion of the village. Life is bustling for her.",
        "“I am with child. Aurvandil said they could tell by just smelling me. They said they’re so happy for me and they would bless the child! I must tell Einar!”"
      ],
      decisions: [
        {
          storyNode: "turn_page_4",
          label: "Turn the Page"
        }
      ]
    },
    turn_page_4: {
      text: [
        "The following dozens of pages are filled with descriptions of married life and young parenthood. Gudrid and Einar have a son, Sigurd. The name Aurvandil is frequent, always bringing gifts and watching over Sigurd.",
        "“Aurvandil gave me a silver necklace, they said they made it themselves. Just for me. They said they don’t mind the silver mines anymore, they’re just happy to be able to see their great- grandchild every day. I got to hug Aurvandil, their fur was so soft and warm and smelled of honey.”"
      ],
      decisions: [
        {
          storyNode: "turn_page_5",
          label: "Turn the Page"
        }
      ]
    },
    turn_page_5: {
      text: [
        "The next page is curled and discolored, pockmarked by tears. “The mine caved in. Father, Uncle, dozens of boys crushed.” There is a great gap in the book, page after page ripped out of the book. The remnants are covered in fragments of writing, Gudrid was trying to forget something."
      ],
      decisions: [
        {
          storyNode: "turn_page_6",
          label: "Turn the Page"
        }
      ]
    },
    turn_page_6: {
      text: [
        "“The silver mines have reopened. It’s good to see people smiling again. I’m worried though, Sigurd has been talking of wanting to work in the mines one day. I’d rather he work at the sawmill with his father. It’s safer.”"
      ],
      decisions: [
        {
          storyNode: "turn_page_7",
          label: "Turn the Page"
        }
      ]
    },
    turn_page_7: {
      text: [
        "“Aurvandil looks different. They’re bigger, they are growing thicker fur, and feathers are sprouting from it. But their eyes are the same as ever, the same as mine. I hope it passes soon.”",
        ""
      ],
      decisions: [
        {
          storyNode: "turn_page_8",
          label: "Turn the Page"
        }
      ]
    },
    turn_page_8: {
      text: [
        "“These days Einar won’t stop talking about leaving, of getting on some big ship and sailing somewhere new. What’s has him so entranced? All our friends and family are here. This has been our little Sigurd’s home, we’re safe here. The mine was an accident, just an accident. Aurvandil says it’s safe here. I trust them. I hope he comes to his senses.”",
        ""
      ],
      decisions: [
        {
          storyNode: "turn_page_9",
          label: "Turn the Page"
        }
      ]
    },
    turn_page_9: {
      text: [
        "“Something is wrong. People are missing, some were leaving the forest, but not this many. Why would they leave without telling anyone? Most of their belongings are still here. What is going on?”",
        ""
      ],
      decisions: [
        {
          storyNode: "turn_page_10",
          label: "Turn the Page"
        }
      ]
    },
    turn_page_10: {
      text: [
        "“Einar is scared. He said he saw something watching him in the woods. It was shaped like a man, but when he called out, it vanished. He swears he saw it. I didn’t know what to say, I just pet his head until he fell asleep.”"
      ],
      decisions: [
        {
          storyNode: "turn_page_11",
          label: "Turn the Page"
        }
      ]
    },
    turn_page_11: {
      text: [
        "“I proposed an idea to Einar to help him calm down. I said we could take a vacation and leave for a year and come back when he felt better. He refused that though, he wants to leave forever, but maybe we could have rotating years, a few in a town and a few in the forest. Maybe we can reach a compromise. I hope things can go back to normal soon.”"
      ],
      decisions: [
        {
          storyNode: "turn_page_12",
          label: "Turn the Page"
        }
      ]
    },
    turn_page_12: {
      text: [
        "“Something was watching me when I was playing with Sigurd in the river. I asked them to show themselves, but they just vanished. I went to Aurvandil and they said it was nothing to be concerned about, just seeing things. I want to trust them, they are my blood, but they have been changing…Aurvandil used to be beautiful, but now, I don’t know what they are anymore.  I feel awful, but when Aurvandil smiled at me, I felt scared. I don’t know what to do. I- “",
        "‘CRACK’. Suddenly the sound of breaking glass and a man’s yell hits you. You drop the book a few pages from the last entry and rush out in the direction of the sound. You see deeper into the town stands a building towering over all with a pointed roof. Elevated off the ground away from the mud, it feels like a church. You ready your shotgun."
      ],
      decisions: [
        {
          storyNode: "enter_church",
          label: "Enter Church"
        }
      ]
    },
    enter_church: {
      text: [
        "You rush into the building ready to protect someone and fling open the doors. In the middle of the candle and cobweb filled room you see an old and grizzled man with long blond hair cursing up and down over a broken bottle of vodka on the church floor, “Dammit!”",
        "You are left standing in the doorway dumbfounded with the display of the man. You cannot tell if he is condemning or mourning his lost liquor. He does not seem to notice you even with sunlight flooding in through the doorway. “Ahem.” He is unresponsive and pulls out a flask from his coat pocket. “Ahem!” With that he now notices you. “Oh! Hello!”, his eastern European accent is thick, almost Russian, but not quite. His slurring does not help with discerning this though. He reeks of alcohol; you can taste it from even a meter away."
      ],
      decisions: [
        {
          storyNode: "ask_petyr_questions",
          label: "Ask Him Who He Is"
        }
      ]
    },
    ask_petyr_questions: {
      text: [
        "“Um, who are you? How’d you get here?”, your shotgun hangs in one hand now. He holds up a finger to you as he finishes emptying his flask. “Ahh, that’s better. I’m Petyr.” His eyes are lazy and dulled but still scan you like someone who knows what they are looking for. “I came in from the northeast, nothing but abandoned buildings and broken ore furnaces.”",
        "“Why are you here? Have you been getting nightmares too? It’s been months for me.”",
        "“Months? For me, years. No doctor could help, and the drugs were killing me. Liquor has been easier.”, he says as he pulls out a second flask from his coat. Clinking sounds come from his backpack as he moves, and you wonder just how much of his supplies is alcohol. “I can’t get a bit of sleep without being drunk anymore. One day, I finally decided to listen to the voices, and here I am.” As he drinks his sleeves fall away revealing horribly gaunt arms, it seems he consumes little but alcohol anymore in order to stay sane. “Have you found anything else? I came in over a bridge and found a journal, it kept describing this ‘thing’ called Aurvandil. It sounded… inhuman.”",
        "“Aurvandil?”, he asks. Petyr holds out a black wood carved buck, you would think it was a toy if not for the intricate detailing all it and the painted blue eyes that have survived the centuries somehow untouched. “I picked this up from a pile in the back. Take it, you should see this.”"
      ],
      decisions: [
        {
          storyNode: "examine_deer_shrine_drunk_petyr",
          label: "Examine Deer Charm"
        }
      ]
    },
    examine_deer_shrine_drunk_petyr: {
      text: [
        "The world is tinted blue as a sort of bubble fills the room. The laughter of children surrounds you as the ghostly forms of children run after each other and pass through you. The room is filled with people and children talking, eating, and carving deer like the one you hold. It truly is a church.",
        "Petyr steps to the side to allow you to see a group of adults huddling closely together. “What are we going to do?”, a man asks.",
        "“We need to pack our things and go, now! My son said something tried to get into our house last night. It only left after he screamed”, says a young woman with hair like starlight and brilliant blue eyes.",
        "“Mommy, Mommy look! Look what I made!” a little black-haired child says pulling on his mother’s dress. “Not now, Sigurd, Mommy’s busy”, says the starlight woman. Petyr seems almost confused with her before he looks back to you. “You have her eyes, no, you look just like her.”",
        "“Aurvandil is ignoring us now, people are missing, it’s not safe anymore. Einar and I are going at dawn, spread the word.” It was her journal you read, Gudrid."
      ],
      decisions: [
        {
          storyNode: "reach_for_her_petyr",
          label: "Reach for Her"
        }
      ]
    },
    reach_for_her_petyr: {
      text: [
        "Before you can touch her Petyr grabs your face tightly, “Nightmares, visions, a magic forest. That’s why we’re drawn here, why this place feels so familiar. This is our homeland.” At this a distorted inhuman roaring comes from within the memory, the room grows darker as something massive blocks the sunlight. “RUN” the adults in the memories yell, dragging their children behind them. Rushing into the room come shadows in the form of men, they grab and drag away the nearest people by the door, some waving torches in a panic. The Shadows screech and recoil in pain as they retreat and let their master in. The room is torn to shreds by a shapeless black mass clawing and ripping the floorboards and snatching the slower adults. A deafening roaring fills the room with such malice it makes your heart freeze “GUDRIIIIIIID.” Your vision becomes filled with nothing but endless teeth and darkness. You drop the carving as you cover your head and in an instant the vision vanishes.",
        "You are breathing so hard you would have missed the shaking of the earth if not for Petyr pulling you down and hiding you both in the crawlspace below the floorboards. Something is coming."
      ],
      decisions: [
        {
          storyNode: "look_on",
          label: "Look On"
        }
      ]
    },
    look_on: {
      text: [
        "It is impossible to prepare for what you see. The beast’s arms seem to stretch endlessly as they come into view, bent and twisting unnaturally. The monster looks less like a being but more so an amorphous mass of flesh, teeth, bone, and feathers. At the center of the disjointed mass that must be its head you notice two gem blue eyes more beautiful than any crystal.",
        "Behind the monster follows a troupe of black amorphous creatures vaguely resembling human silhouettes, they bring with them a stranger dressed just like you, ready for a long hike and camping. He is tall and broad with fiery red hair. His right arm is broken, and he is dragged along with a limp. A voice like snapping bark flows from the monster’s maw, “Kneel.” The stranger does not react, even as his legs shake, he stands defiant. The Shadows push him down and the stranger cries out and falls face down into the dirt. This man is going to die.",
        "You squirm and try to shake Petyr off you, after all you have learned, how could you ever stay silent and watch? Petyr covers your mouth desperately. “If they see us, we die. So, shush.”"
      ],
      decisions: [
        {
          storyNode: "stay_silent",
          label: "Stay Silent"
        }
      ]
    },
    stay_silent: {
      text: [
        "“What is your name child?”, the monster Aurvandil asks. Either out of pain or spite the injured man does not look at the creature before him “…Madds Niemi”",
        "“Tell me, Madds, will you stay here with me? And live on as one of my blood should? I am a being of my word above all, if you so choose, you will never be harmed, and you will live until the stars fade. But, if you flee, I will kill you. I promise. My child, there is the blood of a god running through you, accept my gifts, please.” Madds looks up at the creature and some unreadable thought is in his eyes. “My answer is, yes, I have a gift for you even.”",
        "“Truly?!”, the monster’s almost vestigial head rears back in laughter. “Oh, what joy! A son returned to me and a gift! A gift! My first in centuries, show me! Show me!” The Shadows release Madds and allow him to rummage through his pack. What he takes out is hidden from view until he is almost pressing it to the monster’s child-like eye. It is a bright orange flare gun. “What is it?”",
        "“My gift.” POW.",
        "The monster rears back in agony, the sound and smell of searing flesh filling the air. Its screams of betrayal and pain make your bones feel like ice. Madds is being beaten by the Shadows and he is no longer fighting back. Is there anything you can do to save him? Amidst the screams a realizations rings loudly in your head. The monster can be hurt. But is it worth the risk to fight? Is there another way?",
        "The monster’s eye is half-healed, and it can now focus its rage on Madds. It is swinging its great arm down to finish him!"
      ],
      decisions: [
        {
          storyNode: "fight_monster_in_church",
          label: "Fight the Monster"
        },
        {
          storyNode: "make_a_trade",
          label: "Try to Bargain"
        }
      ]
    },
    fight_monster_in_church: {
      text: [
        "You are not going to do nothing, and you will not beg. If you are to die you will at least be as brave as that man outside. You break free from Petyr’s grasp and fire a shotgun slug at the arm of the monster and watch the gangly thing almost snap in two from the injury. “It is emotional, use that”, you think. “Hey! Monster! Demon! Abandoned god! Come and get us!” You almost regret this when you see its arm sewing itself back together, its sinews moving and striking out like lightning.",
        "Aurvandil barrels towards you into the church, half of its gang of Shadows abandoning Madds to follow their master. You fire two of your precious few shells meticulously and carefully at the beast’s leg and head until it lies crippled on the church floor in a great pool of its blood. It writhes as you watch its muscles and bones knit themselves back together. You and Petyr crawl frantically out from under the church and close the doors on the wailing creature. The Shadows trapped inside lunge toward but quickly retreat in agony from the flash of another one of your shotgun blasts into the monster’s belly. As you reload with shaking hands you yell to Petyr, “BURN THE CHURCH.” The time for running and hiding is long past. He empties his alcohol along the sides of the building and sets it off with his lighter. The blue flames spread swiftly, and the building begins to be consumed. “HOLD THE DOOR”, you shout, and Petyr comes back to brace the door against the Shadows desperate to force their way out the burning death trap. The doors crack and open just enough for a black arm to grab onto Petyr. Petyr forcefully holds it to the spreading fire until the cursed creature’s arm turns to ash."
      ],
      decisions: [
        {
          storyNode: "look_inside_church",
          label: "Look Inside the Church"
        }
      ]
    },
    look_inside_church: {
      text: [
        "You can see inside that the monster is nearly back on its feet, its roaring so deafening the only sound that still registers is your shotgun blasting through the kill hole in the door your shots made. The beast writhes and falls with a wood crunching boom when you blow apart the leg it was standing up with. The fires inside are spreading and at your feet is the pile of ash that was the Shadows. “How much alcohol is left?!” Petyr is busy using a makeshift torch of his alcohol-soaked shirt on a stick to bat away the remaining Shadows while you work the gun, “Almost half!” he shouts. “Throw it!” The suggestion seems to terrify him, “How much?” The pains of repeated blasts are destroying your shoulder and strains your fingers. Your reloading grows slower as your fingers shake. All the while the monster is crawling towards you, its blue eyes replaced with eviscerated gore holes. After an agonizing few seconds you load your second to last shell and shout, “ALL OF IT.” You open the flaming doors wide and Petyr throws his still sagging bag of alcohol high above the monster’s head. A single well-placed shot vaporizes the bag of glass like a clay pigeon. With fuel added to the flames they become fully out of control. The heat becomes too much to bear and as you retreat you can see the monster’s beautiful blue eyes re-growing once again. They vanish in flame as the roof of the church caves in and the beast’s roaring finally ceases. “Help!”, Petyr yells."
      ],
      decisions: [
        {
          storyNode: "save_petyr",
          label: "Save Petyr"
        }
      ]
    },
    save_petyr: {
      text: [
        "You rush over to Petyr and fire a shot tearing the Shadow bearing down on him two. With no more shells you are forced to use the smoking and burning hot gun as a makeshift spear, poking and prodding the shrieking Shadows. Back to back with Petyr, now wielding the flare gun, you two stand defiant by the unconscious Madds.",
        "Suddenly, the fighting stops. The black aura around the Shadows are drifting off into the wind and revealing the people within. You listen intently and hear nothing more of the monster. The magic is gone, the forest is melting away all around you, giving way to a grassy plain and the light snowfall above. You can’t believe it, it’s over. The weeping of the ex-Shadows bring you out of your head. They are mourning those they lost, they list so many names. Some of the villagers take to their knees and begin to pray. In their weeping you hear things like ‘guardian’, ‘protector’, ‘friend’. They are mourning the monster you killed. Fervently and wholeheartedly. They cry with the sounds a child makes for their parents’ passing.",
        "The villagers continue to mourn and while the snow is light, it shows no signs of abating as it has already begun to coat the mourners’ kneeling forms. All of the flares were used up in the fight and so there is no way to signal for help. It is a long walk back to the inn and you are all unprepared for the cold. It takes some pushing and pulling by you and Petyr, but soon you are able to begin to lead the tired villagers along the stone path back towards the direction of your inn. The ex-Shadows wear necklaces around their necks that look just like the one you found but tied with simple iron links instead. They hold them as dearly as people would grasp rosary beads. What does the one you found abandoned mean to you?"
      ],
      decisions: [
        {
          storyNode: "take_necklace_b",
          label: "Take Necklace"
        },
        {
          storyNode: "leave_necklace_b",
          label: "Leave Necklace"
        }
      ]
    },
    take_necklace_b: {
      text: [
        "This was an item made with love, it shouldn’t lay forgotten in the mud. You decide to hold onto it and find some way to not let the forest god be forgotten either. There must have been something good in it for it to be so loved once.",
        "The walk to civilization is hard and cold, even with your and Petyr’s tents and jackets. You give the jackets to the weakest of the party, a child and the heavily injured Madds. It takes two days and costs many of your party toes or fingers, yourself included. But, by putting one foot in front of the other you all reach the inn and give the keeper the most confusing day of her life. To her credit she calls for medical help immediately and works through the night making soup and coffee for your exhausted caravan. Once the steaming coffee hits your tongue you feel a tear run down your face. The fact that your ordeal is over finally sinks in, you’re free.",
        "Epilogue: Keep Necklace",
        "You stay in touch with the villagers as they adjust to the modern day and allow you to compile the story of their village and their god. The discovery of an isolated village somehow hidden from the world so long and so nearby with a unique faith rejuvenates your career and personal life. Even though the villagers mourn the god they once loved, they are thankful for their release from eternal bondage. They saw you take one of their necklaces, they saw your respect. Over the years you find they become like a second family. For the rest of your professional life you live knowing there are always many homes willing to take you in and offer you a bed, food, and good drinking. The physical and mental tolls of your nightmares and the violence of your final confrontation are washed away by their thankfulness and friendship.",
        "In time, a day comes when you feel old and ready to leave the bustling world. You settle peacefully in a little northern village and in your retirement, you give talks about forest spirits and old northern legends to the local children. They will remember your stories and you fondly. How you spent your days carving countless wooden bucks and painted them like the night sky. That the parts you painted most delicately were its vibrant blue eyes and how you sat lost in them, as if they stared into you. They will remember your long greying hair blending beautifully with the silver chain and little bones wrapped around your neck.",
        "END"
      ],
      final: true
    },
    leave_necklace_b: {
      text: [
        "This is not your land. It’s not anyone’s. Not anymore. This land’s god has taken its leave, it’s your turn now.",
        "With the necklace laying in your open palm you turn it over and watch the white bones and silver chains fall into the grass. The snow has begun to fall heavier, and you are happy to know that soon all sign of the stone road, the necklace, and all this place ever was will be hidden from the world once again.",
        "The march back to the inn is cold and painful. Two adults’ supplies are not enough for everyone with you, not even close. You are all quickly hungry and terribly cold, the only saving grace being the inn’s relative proximity. “You are not going to die here.” This phrase becomes a mantra inside you, pushing you on through the sudden snows. Through pure grit you emerge over the final hill to the inn and collapse inside calling for help.",
        "Epilogue: Defiance",
        "The next thing you know you’re lying in a hospital bed, the cost of your snowy march being two toes and a little finger. This fact fills you with no sadness, it seems a fair trade for killing a monster. You notice the nightstand on your right has a small flask with a note on it. “I got you the good stuff. Petyr.” You fall back to sleep with a smile on your face, you’ve won.",
        "END"
      ],
      final: true
    },
    make_a_trade: {
      text: [
        "“WAIT!”",
        "“No! Don’t try it!”, Petyr yells. His position revealed he tries to make a break for it but is captured by a troupe of Shadows. “This is it, all or nothing”, you think.",
        "You walk out into the light and you look around at all the transformed villagers staring into your soul. You realize this creature cannot be conquered, but maybe you can bargain with it. You think back to the compromise Gudrid wrote of in her journal.",
        "“H-half! You can have half my life! Let me stay human, and I’ll give you half my life. Every other year, I’ll come to stay with you. I will never betray you. I will never hurt you. I will never need to be forced to do anything. I will do all things eagerly! I will not be a slave; I will give my all to you. You won’t need any more Shadows. I promise you! Just, let Madds and Petyr go. That’s all I ask.” The creature moves its eyes over you and then its crowd of Shadows.",
        "An army of empty shadows or a grandchild of its beloved Gudrid, you have faith in your offer. The god cocks its head to the side, “Half”, is all it says as the Shadows guide the three of you to the forest’s edge and release you.",
        "Epilogue: Traded Half of Life",
        "A year has almost passed in your normal life, but you feel not a tinge of magic on you. Maybe the oath you took is not so strong after all. But there may be consequences either way."
      ],
      decisions: [
        {
          storyNode: "keep_promise",
          label: "Keep Promise"
        },
        {
          storyNode: "break_promise",
          label: "Break Promise"
        }
      ]
    },
    keep_promise: {
      text: [
        "And so, that is how the rest of your life has gone for all these years. You’re old now. You have lived the life you bargained for, but it was not a great life. Needing to spend every other year in the village, unable to really set down roots or tell anyone where you really go, you feel alienated from your friends and family. In time they leave your life forever, knowing you can never be there for them. In time it begins to feel like your real home may be the forest after all. Aurvandil is odd and overbearing in its desire to make up for generations alone with nothing but Shadows, but there is something pleasant about being doted on so intensely. This is what you think, drinking coffee in a café near some woods, staring with tired eyes at the trees blowing in the wind. Envisioning blue eyes on the branches like morning dew.",
        "END"
      ],
      final: true
    },
    break_promise: {
      text: [
        "Without worshippers, it seems the forest god’s power is limited. All it has the strength to do is feed you nightmares and whisper in your head. You can feel its angry voice reverberate inside your skull, its breath on the backs of your eyes. But that is all it can do. It is too weak for anything else. Knowledge of this only makes its words more bitter.",
        "Painkillers and alcohol work well to silence the voices, but as it focuses every last ounce of its rage on you, the quantity needed takes its toll. Your organs struggle to endure the poisoning and it becomes clear your actions are shaving away decades of your life.",
        "And what life remains, is troubled. Substance abuse to hide voices in your head isolates you from everyone but the doctors who try to help you. This is not much of a life and you wonder if there may have been another way.",
        "END"
      ],
      decisions: [
        {
          storyNode: "examine_the_forked_road",
          label: "Examine the Forked Road"
        }
      ]
    },
    follow_the_blood: {
      text: [
        "You came here for answers and you will take them. By force if necessary. This forest is strange with its warmth and omnipresent sunlight, something isn’t right, and you know how these stories go. Being toyed with by something that sends you in circles as you piece together the horror. You won’t play that game. You have your own. And so, you march down the path, shotgun in hand, the grasses and bushes by your feet clearly crushed underfoot by something large. Much larger than you.",
        "You begin to hear light weeping all around you. You find nothing and continue on, the weeping growing louder as you approach a dark cave in the side of the rocky hill to your left. Your grip on the gun growing stronger and sweat building on your brow in the warm forest. Then, all becomes silent for a moment. Followed by the sounds of massive, labored steps and breathing, as if something was trying to form words. Emerging from the cave comes a towering mass of fur, feather, and antlers. It has two gem blue human eyes above a maw of wolf fangs and antlers for teeth. You are frozen, your bravery forgotten as this god-like beast unfurls and breathes in so deep you are nearly pulled off your feet. The god-beast is weeping the same sad sobs you’ve heard in your mind for months. Tears fall from those blue gem eyes and into your gaping mouth and wide eyes. “Y-you c-came back.” Its amorphous limbs move to your flanks, as if to embrace you."
      ],
      decisions: [
        {
          storyNode: "shoot_the_god_beast",
          label: "Shoot the God-Beast"
        },
        {
          storyNode: "flee_from_god_beast",
          label: "Flee from God-Beast"
        }
      ]
    },
    shoot_the_god_beast: {
      text: [
        "Blood covers your face as you fire the shotgun point blank into the god-beast’s chest. The beasts’ weeping gives way to wailing in agony. It is hurt but it is quickly sewing itself back together. In horror you fall on your back. It’s wailing eventually gives way to enraged breathing, blood vessels popping in its eyes.",
        "You can see its limbs expand as it tenses its muscles and its hair stand as it crawls and looms over you. It reaches for you and you fire shot after shot into its bulbous chest. But you are too close, it is not enough. The god-beast slashes the shotgun out of your grip and cripples your arms in the process. It grabs your legs and flings you high into the air, breaking the branches as you go.",
        "The pain is overwhelming as shards of wood dig themselves deep inside you. As you fall back down to earth all you can see is the countless spear-like teeth in the monster’s open maw. You wonder if you could have avoided this as you plummet towards your death."
      ],
      decisions: [
        {
          storyNode: "examine_the_forked_road",
          label: "Examine the Forked Road"
        }
      ]
    },
    flee_from_god_beast: {
      text: [
        "You shed your backpack and gun and give everything you have to running. The monster’s arms grab nothing but air as you sprint off. To your relief, when you look back it seems to sit halfway out of its cave, as if confused. You feel your hope turn to dust in your mouth as you see it explode towards you on four limbs. You reach the forked road and cross over the pool of blood, but you go no further. The monster lifts you up by your torso and presses you to its chest like a mother would a child. The monster is shaking, almost prancing back to the cave. It holds you too tight, so tight you cannot breathe. As you blackout you look into its blue eyes that mirror your own, and you can hear the monster gently laughing the name, “Gudrid.”"
      ],
      decisions: [
        {
          storyNode: "wake_up",
          label: "Wake Up"
        }
      ]
    },
    wake_up: {
      text: [
        "You awake smelling smoke. A quick look around shows there is no way out of the cave, the monster is laying down plugging the exit.  A voice comes from where the smoke smells strongest, “Soup?” Beside the fire is a middle-aged man with gray hair and brilliant sad blue eyes. The soup smells of garlic and onion. You can see chunks of cabbage and some dark meat floating in the iron pot. On a normal day it would make your mouth water. Unfortunately, nearly dying has ruined your appetite, “N-no. Who are you?”, you ask.",
        "“Me? I’m Sigurd. Tell me, what year is it?”"
      ],
      decisions: [
        {
          storyNode: "answer_sigurd",
          label: "Answer Sigurd"
        }
      ]
    },
    answer_sigurd: {
      text: [
        "“…2019, why?”",
        "A rueful smile comes over his lips, “Two hundred and fifty-seven…” Sigurd looks into the fire and grits his teeth. He bows his head down and his whispers are nearly hidden by the cracking of the fire, “Mother, I’m an old man now…”",
        "“Old? You’re two hundred and fifty-seven years old? That’s impossible.” Sigurd sharply points to the monster ten meters away, his message clear. Impossible has no meaning anymore.",
        "“It has been a long life, too long. The monster beside you, it did not always look like this. It was beautiful once, skin like the night sky. Gentle enough to raise children. The legend is that when it was just a child god it fell down from the stars. As luck would have it, where it fell was upon a camp of settlers dying in a blizzard. When our ancestors went to investigate, they took the baby god into their arms thinking it would die in the cold. But, when it opened its eyes, life sprung up all around our dying people. The trees jutted from the earth building a canopy above to halt the snow and break the harsh winds. They raised the fallen god as their dearest friend and prayed to it in thanks for salvation. They named it and gave it love. Once it reached adulthood it became our guardian, gave us food, shelter, gave us long life. It cared for its people for ages, as the world changed and warred and faced disease, those here lived with full bellies peacefully ignorant of the wider world. The god’s name is Aurvandil, the Morning Star.”",
        "Sigurd places a bowl of soup into your hands, whether he is ignoring your previous denial or trying to be kind you cannot discern from his cold face. “What are you doing here? What happened?” He throws more wood on the fire before answering you, “In time it took a human form and mixed its blood with that of man. It made strong beautiful human children with eyes like blue fire. These children were loved by all and given freedoms not all were allowed. But their spirits were free, wanderers at heart. Against the wishes of the forest god they ventured out into the world and returned with tales of ships that had gone around the world and cities that had grown beyond imagination. Soon the village was taken with fantasies and the desire to explore and join the world that had recused themselves from for so long.”",
        "“Eager to keep its people happy Aurvandil acquiesced against its own wishes to keep its people and children happy. It grew them more trees to cut and sell, had the beasts breed and grow faster for slaughter. Even helped them find a silver mine to enrich themselves with. Things were good for a time. But, whatever Aurvandil did it was not enough. People were leaving the village to chase dreams; the hardships be damned. Aurvandil tried to keep at least its children from leaving.”",
        "“Children…that name it said…what was it?”, it was something the monster was saying as it took you."
      ],
      decisions: [
        {
          storyNode: "ask_about_gudrid",
          label: "Ask About the Name Gudrid"
        }
      ]
    },
    ask_about_gudrid: {
      text: [
        "“Tell me, who is Gudrid?” At the mention of that name a flash of happiness goes over Sigurd’s face before vanishing into one of spite. “Aurvandil’s youngest grandchild, a beautiful woman. My mother”, he says. “Where is she now?”, you ask.",
        "“She is long dead, outside without any magic. She abandoned us. Aurvandil and I. Aurvandil tried to show that it was able to accept who its people were becoming. It made them necklaces of with bones of all the beasts of the forest, all made from its own godly body. It was to grant her almost endless life, but she would never again be able to leave the forest. She fled in that moment along with most of the villagers. Aurvandil told me all this and how they watched her stamp the necklace he gifted her into the earth in betrayal. My own mother left me in a prison she helped make.”",
        "“Sigurd, if she could have taken you, I’m sure she would have.”",
        "“I was just seven! At seven I was left all alone with a monster and my enslaved friends and neighbors who could not escape. That’s all that matters! We’ve waited for so long for someone to return, but no one ever did. That’s when they started calling descendants to come home. And finally, finally! You’ve come back! The grandchild of my mother. I’m not alone anymore!” Sigurd yells as he grabs your hands and looks at you like long lost family. “I won’t be alone!” Your crazed great uncle’s shouting awakens Aurvandil and Sigurd immediately silences himself and bows. Fighting or fleeing is impossible"
      ],
      decisions: [
        {
          storyNode: "bow",
          label: "Bow Down"
        }
      ]
    },
    bow: {
      text: [
        "You quickly press your knees to the ground and lower your head to the earth as low as you can. You are shaking and do so even harder as the forest god runs a finger of its gargantuan clawed hand down your cheek. “Worry not. I will never hurt you, blood of my blood.” Its touch reminds you of your mother, warm, soft, and loving. Only your mother did not wield claws the size of sword. “You two, come with me, we have work to do.”",
        "Aurvandil leads the two out of the cave and down a winding dirt trail. You exit into a small-town square-like clearing with a well in the middle. There a few dozen homes and craft shops and stalls. They are all worn down and quite old, with vines beginning to wrap over some and gaping holes in the roofs of others. Despite the disrepair, they seem to have signs of maintenance. Some roofs are half repaired with planks covering the holes. The Church is the largest building in this opening section of the village. Its open doors are thick, and its walls look strong. Aurvandil beckons you inside with its malformed arm. “This is the most important spot Sigurd, see what you need to do first and begin work immediately. I will be managing the others.” When the forest god is gone, and you are alone with Sigurd you gain the courage to speak again. “What does it want? Sigurd?”",
        "“It wants you to help repair the village. You were one of the first people to arrive, more are surely on their way. It wants the village in working order as a place to live again. The Shadows, the enchanted villagers, cannot stand flame, you’re to help me make nails and tools. I don’t know if it was lucky or unlucky that Gudrid left her necklace outside the village, that’s how it is able to call out to you and the rest. The necklace acts as a connection to the outside world.”"
      ],
      decisions: [
        {
          storyNode: "assist_shadows",
          label: "Assist Shadows"
        },
        {
          storyNode: "discuss_escape_with_sigurd",
          label: "Ask Sigurd About Escaping"
        }
      ]
    },
    assist_shadows: {
      text: [
        "The best move is to play along until an opening arises, you can’t be certain that Sigurd can be trusted yet. When you step outside the Shadows lead you and Sigurd to the blacksmithing station and he quickly begins to show you how you will help him.",
        "For hours you work with Sigurd as he begins the laborious process of teaching you. In the meantime, you watch the Shadows clear debris and tear down the rotten foundations of building after building. The Shadows work swiftly and diligently under the watchful eye of Aurvandil. “They expect more like you to arrive soon, they need us to work quickly.” Sigurd says in between his hammering of nails to form. “When more arrive…” Ah! There will be your opening, when the Shadows and the monster are distracted with a new arrival you can slip away surely!",
        "This event happens much sooner than you expected as you hear a stranger’s screaming. “Help! Help me! Oh god!” The Shadows bring a red-haired man kicking and clawing at them to his knees before Aurvandil. Its foot pats the ground excited, almost like a dog welcoming its master home. “What is your name child?”, it asks the man. “M-Madds. What are you going to do to me?” The god-beast almost laughs, “Nothing, you’re home. You’re safe here. You’ll be safe forever. I won’t hurt you. Let him go.” The Shadows oblige immediately and go back to their business with the town, leaving Madds to their master. “You won’t?” Aurvandil bends down to place its eyes closely to Madds’. Something indescribable comes over the beast’s maw, as if it was trying to convey love amidst its rows of twisted teeth. “Never.”",
        "“O-ok. The-then I have a gift for you. Can I have my bag back?” The god waves and the Shadows bring it post haste. You and Sigurd have both stopped working to watch the scene unfold. Madds goes through his pack and opens an orange case inside. “Oh no”, you whisper. Madds aims and fires an orange flare gun into the monster’s eye. “My gift!” The beast roars in agony, you can hear its eye steaming with the flame as Madds prepares a second shot and fires it into the mass of fur. Madds fights valiantly firing a third shot at the Shadows that come to restrain him, the light has them retreat while shrieking and Madds makes a run for it. “Come with me! Quick- “But, it is nowhere near enough. Madds is grabbed by the great claw arm of the enraged god. “I was going to give you eternal life! And this is your GIFT?!” Aurvandil lifts Madds high into the air above its widening mouth. He’s going to be eaten!"
      ],
      decisions: [
        {
          storyNode: "do_nothing",
          label: "Do Nothing"
        },
        {
          storyNode: "appeal_to_forest_god_with_necklace",
          label: "Appeal to Forest God with Ancestor’s Necklace",
          requires: ["necklace"]
        },
        {
          storyNode: "try_to_escape",
          label: "Try to Escape"
        }
      ]
    },
    do_nothing: {
      text: [
        "You stand still and watch as Madds is bitten in two, drops of blood hitting your face. This is the cost of fighting back, running away. It’s hopeless. No gun, no allies, too many enemies. You kneel to your god.",
        "Epilogue: Surrendered",
        "Years have passed now in your life as a worshipper of the forest god Aurvandil. Soon after Madds’ death you were made a necklace to bind you to this place forever. You have accepted your subservience to your lord and your lineage. Every day your prayers grow its power and more and more people continue to arrive at the rebuilt village. All these arrivals are either turned to Shadows or join you in worship after watching one of their own devoured.",
        "You try not to think about the horror of your life. You focus on the food you are provided and the simple joy of breathing another breath. There is nothing else to your life. You lie to yourself and say that it is enough.",
        "END"
      ],
      decisions: [
        {
          storyNode: "examine_the_forked_road",
          label: "Examine the Forked Road"
        }
      ]
    },
    appeal_to_forest_god_with_necklace: {
      text: [
        "You can speak as a descendant, a child of its most beloved. You may be able to negotiate a release. You have no weapons but the knowledge you have gained. You swallow your fear and focus upon the love and sadness in Sigurd’s stories. It still thought so highly of Gudrid despite her ‘betrayal’. You place the necklace around your neck and grip it tight. “You’re her spitting image”, Sigurd says. Hopefully looking like its daughter and wearing her necklace will jog some memories, some positive emotions in Aurvandil. This is not who the it really is, you have to reach out to the good still within them the only way you know how. Or else you’ll become a Shadow or live imprisoned like Sigurd."
      ],
      decisions: [
        {
          storyNode: "call_out_gudrids_name",
          label: "Call Out “Gudrid!”"
        }
      ]
    },
    call_out_gudrids_name: {
      text: [
        "“GUDRID!” Aurvandil turns away from Madds to look at you. It growls, “Why do you speak her name?” “Is this what Gudrid would want? To see her god imprisoning people? Look at yourself!” You walk over to the stranger pinned by the Shadows. The Shadows move to stop you but with a motion of an arm the it makes them halt. It is still maintaining its promise to not harm you. “You did not always look like this, Sigurd tells me. You were gentle, beautiful like the night. Why can’t we go back to that? Why can’t you be who Gudrid loved?”",
        "“I tried!”, they roar. “I grew their food. Raised their game. Made the trees grow faster than they should just to be turned to charcoal. It was unnatural. I was the one who found the silver they lost themselves in. I gave and gave, and it wasn’t enough. Did Sigurd tell you that? Even after I let them overtax and pollute the forest, they wanted more. More than even I could give. They wanted to leave me, leave me all alone. They had stopped loving me a long time ago. I needed to stop them, I needed to live how I always have, even if it was act. Maybe it would become real.” Aurvandil’s head sags downwards, forced to look in on what it has been doing. “I didn’t want to be alone. I-, you hate me, don’t you? I’ve made another of my blood hate me.” Its antlers are growing unceasingly and pull the beast’s great head down to the earth. The antlers are twisting and wrapping around themselves as their owner suffocates in its realization and misery. They are growing out like vines and are wrapping themselves around the homes and trees and people. The roof of the forest and all the light quickly becomes increasingly obscured by the river of antlers that flood out as this broken spirit weeps and moans. This forest will become an ivory tomb for everything in it if nothing is done."
      ],
      decisions: [
        {
          storyNode: "reach_out",
          label: "Reach Out"
        }
      ]
    },
    reach_out: {
      text: [
        "You climb through the tightening web of jagged horns that cut you again and again until you are close enough to reach out and place your hand upon Aurvandil’s head and look into its reddened eyes. “I don’t hate you.” The antlers beginning to stab into your ribs cease moving at your words. “I, god this hurts, I don’t- I don’t hate you. And you’re not alone. You’re not alone. I- I’ll be here. I’ll be your friend. A real one.”",
        "“I won’t be alone?”, they ask. “No, I’ll stay with you. I’ll stay with you for as long as you want. But you need to listen to me right now.” The antlers pressing into your ribs are receding back into the its body along with all the rest covering the forest. “Good. For me to stay you need to do a few things, for me, and for Gudrid.” Aurvandil’s bloodshot eyes are returning to their ocean blue. Its monstrous form is giving way as pound after pound of fur, muscle, claws and feathers recede into itself “Anything,” it says.",
        "“First, let the villagers you’ve transformed go and never imprison people again. Let them make the choice to stay or not. Second, let Madds and Sigurd go free as well. Sigurd has endured enough already. Third, you must let me live my life as well. I swear on my life to return when I am old and had enough of the world. Then I shall take your gift of long life. I will stay by your side until the end of the world or one of us turns to dust.”",
        "“I have your word?”"
      ],
      decisions: [
        {
          storyNode: "promise_to_return",
          label: "Promise to Return One Day"
        }
      ]
    },
    promise_to_return: {
      text: [
        "I swear that when I have tired of the world Gudrid fled to, I will return to be at your side. In exchange, you will never again harm a person in body or mind. Accept?”",
        "Aurvandil has almost entirely returned to the shape of a woodland buck. It’s more beautiful than what Sigurd described. When it accepts your deal, it feels like the very stars are speaking to you.",
        "You, Madds, and Sigurd lead the ex-Shadows out of the village and out into the world nearly three centuries later than when they originally planned to leave. None stay and Aurvandil says it understands, that regardless, it will wait for you. A sense of relief comes over you and you relish exiting the warm forest for the chilled winds of freedom. You feel nothing binding you to your promise besides yourself. How your life ends is up to you."
      ],
      decisions: [
        {
          storyNode: "keep_promise_to_return_one_day",
          label: "Keep Promise to Return One Day"
        },
        {
          storyNode: "break_your_oath",
          label: "Break Your Oath and Destroy Gudrid’s Necklace"
        }
      ]
    },
    keep_promise_to_return_one_day: {
      text: [
        "Epilogue: Retire to Forest",
        "You are 85 years old now. You saw wonders. You went on more adventures with friends and family. You raised a family that bore kind and caring children and grandchildren. You have had a lifetime of happy days. It was a good life. But now your body aches and your memory grows weaker. You decide to return to the north while your strength lasts. The world has changed in ways you can’t even imagine, it is time to quietly exit the stage.",
        "Upon returning to the inn it becomes apparent that in the last fifty years the village is no longer shrouded in magic or mystery. It has become a slowly growing home for those seeking to escape a world overflowing with machines and people racing through exit-less mazes. Man has set roots on new worlds and in response many have sought to return to the woods and make their home there. After crossing over the same stone road as all those years ago you find the sawmill is repaired and in moderate use. The old bridge has been rebuilt and the low stream is now heavy and strong. And the silver mine has been depleted and filled in. In the center of town stands a silver statue of the local forest spirit with a plaque reading: “Our guardian, our friend”",
        "To the northern side of the active village you find a newly finished house with your name on the family name plate. In the open red doorway stands the starry black buck you made your promise to. You look around to see if anyone notices it, but you cannot tell if they do not notice the deer or if they are already accustomed to it. Nevertheless, you go and say hello. Inside your house you find a necklace just like Gudrid and Sigurd’s laying on your bed. You made a promise, and it will be kept."
      ],
      decisions: [
        {
          storyNode: "put_on_your_necklace",
          label: "Put on your Necklace"
        }
      ]
    },
    put_on_your_necklace: {
      text: [
        "The first thing you notice is how cold the silver feels on your neck, followed by the vanishing of your ache in your joints and the fog hounding your aged mind. How exactly you’ll be a friend to a god escapes you, but you have a lifetime of stories to tell and all the time in the world to tell them. Start from there and figure it out as you go along. Aurvandil looks at you inquisitively and the thoughtful look on your face.",
        "“I’m back”, you say turning to pet its head.",
        "There is love in their voice, “Welcome home.”",
        "END"
      ],
      final: true
    },
    break_your_oath: {
      text: [
        "You freed the Shadows, Sigurd, Madds. The only beings in the forest now are a monster and the beasts of the forest. Just as Aurvandil’s magic ends at the tree line, the meaning of words is fragile and limited. You can’t risk any more people becoming trapped in this spirit’s own personal hell. You will never return here. You will destroy the necklace and see that these woods are nothing but a prison. A hole in the world.",
        "Madds uses his flare gun to call for help and soon you are all safe in civilization and taken to hospitals to be examined. The villagers and Sigurd scatter to the wind as soon as the opportunity arises, and before the staff could determine who or where they came from. They had waited long enough to be a part of the world, it seems fair.",
        "Your first night in the hospital you sneak into the incinerator room with Gudrid’s necklace. You toss it in with the rest of the rubbish and complete Gudrid’s legacy. Aurvandil is twice abandoned now by its own blood. Before your growing pity becomes too much the necklace turns to ash. It is finished, and it’s time to live your life.",
        "You live a peaceful life for the remainder of your days. It is quiet, plain, simple life. It is enough. And there is a magic to that.",
        "Epilogue: Abandon the Forest God",
        "Long after your death from old age the inn nearest to the forest closes down. Patrons continued to become spooked by strange sounds, they would swear that on windless nights they could hear inhuman weeping rolling over the hills. Now, there is no one to remember the forest and its guardian. No one but itself and the wind and snow.",
        "END"
      ],
      final: true
    },
    discuss_escape_with_sigurd: {
      text: [
        "“Sigurd, isn’t there some way out of here?”",
        "“There’s only one way for both of us to leave. You’ll need to run”",
        "“Don’t you mean ‘we’ll’? And what do you mean? You’ve seen that monster; we can’t outrun it!”",
        "“You don’t need to. Aurvandil can’t leave the forest, not in its starved state. You just need to get past the tree line and you’re free!” There is almost an excitement in his eyes at the prospect of shared liberation. “Ok, when it goes back to its cave, we go!” A sadness falls over Sigurd’s face, “I- I can’t. I’ve tried before, and it crippled these legs of mine.” He removes the blanket wrapped around his body to reveal legs curved in ways none should ever be. “The necklace’s magic keeps the pain mostly at bay, but it can return at any time. You won’t get anywhere if you take me with you.”",
        "“What do we do then?” Sigurd places his hands on your shoulders in a way befitting a kindly great-uncle. “I need you to take off my necklace. It was charmed so that I could not remove it, it’s just a loveless collar. But you can take it off for me. With the spell gone, it won’t hold back the centuries I’ve lived any longer.”",
        "“You’ll die, you mean.” He grips you tighter, “No, I’ll be free. Aurvandil will sense it and come for me. It will be distracted long enough for you to sneak away, at the least you’ll have a head start. It’s our only chance. Please.”"
      ],
      decisions: [
        {
          storyNode: "remove_sigurds_necklace",
          label: "Remove Sigurd’s Necklace"
        },
        {
          storyNode: "refuse_sigurds_request",
          label: "Refuse Sigurd’s Request"
        }
      ]
    },
    remove_sigurds_necklace: {
      text: [
        "“…Ok.” You pull the beautiful necklace over Sigurd’s head. With it removed Sigurd begins to rapidly age, his hair turns silver and his eyes fog over. His voice decays and weakens as he says “Thank you” over and over. He continues to repeat these words as his skin shrivels and his body shortens. Suddenly the forest god forces its way into the church. It doesn’t say a word as its eyes pour over the room looking for Sigurd. It picks up the fading Sigurd, still saying endless thanks. The Shadows surround Aurvandil and kneel as if in mourning. As you slip out the doorway you see the creature rocking Sigurd’s now silent body like a grieving parent. A part of you wants to mourn, but another part of you yells something louder: “Don’t waste this chance!”"
      ],
      decisions: [
        {
          storyNode: "escape_with_sigurds_distraction",
          label: "Escape with Sigurd’s Distraction"
        }
      ]
    },
    escape_with_sigurds_distraction: {
      text: [
        "Without your gun or gear you move quickly and quietly. The air is shaking with the terrible moaning coming from the church. Your senses are heightened in your rush to leave, every falling leaf and branch shaking in the wind attracts your eyes. The sound of your own labored and panicked breathing builds onto itself in a vicious cycle. You are crossing over the old bridge and part of it falls down into the inescapable ditch below. This shatters your nerves and you break into a sprint to the tree line to freedom. But, throughout all this, the weeping and crying of the forest grows no closer. You emerge from the forest unharmed and unimpeded, met by freezing winds and hearing nothing but the wind.",
        "You take Gudrid’s necklace in hand and make the trek back to civilization. You arrive at the inn you left from in the early morning the next day; half-frozen, tired, hungry, and thirsty. But overall you are well. The worried innkeeper sits you down in a soft chair by the fire as you tell her you fell down a cliff and lost your gear. She brings you a mug of hot cocoa, the sweet milk and chocolate filling your nose. The hot porcelain feels almost burning in your half-frozen hands, but you relish it. Swallowing the thick warmth greedily you feel your heart pound and your whole body and spirit come to life. For a moment you let yourself forget all that has happened and enjoy the flames. But, only a moment.",
        "Your thoughts turn to Aurvandil and Sigurd and you notice that silence in your mind. It is not cursing you or calling you back. For it to cease what it had been doing for months now you wonder how great its mourning must be for its entire world to vanish as it cries for its grandchild. Perhaps it suspects no foul play, that it was its own magic that failed and let Sigurd die. Your thoughts turn to Sigurd’s last words, “Thank you.” Did Aurvandil think those words were meant for it?",
        "“No.” You cease your pity. Aurvandil may have truly loved Sigurd. But, in the end, Aurvandil surrounded itself with slaves and imprisoned its own grandchild. You have to finish honoring Sigurd’s request. You must destroy the necklaces and see to it that no one else suffers like you or him."
      ],
      decisions: [
        {
          storyNode: "destroy_gudrid_and_sigurds_necklaces",
          label: "Destroy Gudrid and Sigurd’s Necklaces"
        }
      ]
    },
    destroy_gudrid_and_sigurds_necklaces: {
      text: [
        "You toss the two necklaces into the flames and watch them and their silver, their bones, and their magic turn to ash. You could not save the Shadows but at least you and all the other descendants of those who fled their forest guardian turned maddened warden are now safe forevermore. They would thank you for that. You lean back and fall asleep in your chair with a full stomach after dinking your third mug of cocoa. A normal life, a good life, awaits you back home, and you could not be more relieved.",
        "Never again do you hear weeping or voices in your dreams or waking life. You know Aurvandil will never relent in its misery and when its mourning abates it will curse you forever. But you are free from having to listen it’s cries ever again. Now, all you can hear is your breathing mixing with the roaring fire.",
        "END"
      ],
      final: true
    },
    refuse_sigurds_request: {
      text: [
        "“I won’t do it. I’m not going to kill you.”",
        "He takes you by the shoulders and looks into your eyes. “Please.”",
        "“There has to be another way!”",
        "“There is no other way. We have no weapons, I’m too weak to run. We’re always being watched. I have not been left alone for years; this moment is the rarest of chances. If I die you can get away, live a life, death is the only way I’ll get out of this place!”",
        "“This isn’t fair to me. It’s not fair.” His head sinks down as if it turned to stone. His fingers dig painfully into your shoulders. “Please, don’t make me do this Sigurd.”",
        "“If I can’t leave”, his blue eyes are crazed with the kind of desperation of a child already once abandoned, “then you’ll have to stay with me.” His chest balloons as he takes in a great breath. He’s going to shout a warning! Stop him!"
      ],
      decisions: [
        {
          storyNode: "knock_out_sigurd",
          label: "Knock Out Sigurd"
        },
        {
          storyNode: "kill_sigurd",
          label: "Kill Sigurd"
        },
        {
          storyNode: "try_to_escape",
          label: "Run Away!"
        }
      ]
    },
    knock_out_sigurd: {
      text: [
        "You strike Sigurd hard in the temple before he can shout. He crumbles like a bag of rocks and you lean him against the wall of the church. You can’t kill Sigurd; he’s just gone mad with being left behind and trapped here for so long. But, if you won’t accept his plan, you need to wait for another opportunity to escape. At least before Sigurd wakes up and alerts Aurvandil. There’s only one move to make now."
      ],
      decisions: [
        {
          storyNode: "go_outside_and_look_for_opening",
          label: "Go Outside"
        }
      ]
    },
    go_outside_and_look_for_opening: {
      text: [
        "You exit the church and walk calmly through the village, examining the buildings as if you had any intention of doing so. You are almost struck by the quiet beauty of the forest, perhaps it was a good place to live at one time. Now though, it is a hell. You continue to quietly slink away when you hear the great church doors creaking open, Sigurd behind them. “Escape! They’re escaping! You won’t leave me!”"
      ],
      decisions: [
        {
          storyNode: "try_to_escape",
          label: "Run Away!"
        }
      ]
    },
    kill_sigurd: {
      text: [
        "You tackle Sigurd before he can scream, and you bash his head into the ground until his eyes are wide and lifeless. The back of his head is wet where his aged skull gave in. You want to vomit and cry, but you had no other choice. This is not how he should have been made free.",
        "Focus. This is your one chance to escape, make the most of it. You drag his lifeless body into the back of the church and find a simple bedroom, Sigurd’s room. You lay him in the bed and pile the dark blankets around his head to hide the blood. You know that the moment the forest God notices the blood it will come for you."
      ],
      decisions: [
        {
          storyNode: "use_sigurds_corpse_as_distraction",
          label: "Use Sigurd’s Corpse as a Distraction"
        }
      ]
    },
    use_sigurds_corpse_as_distraction: {
      text: [
        "“Help! Help! Come quickly! Something’s wrong with Sigurd!” The Shadows arrive first and hold the great church doors open as Aurvandil floods into the building. “What’s wrong?” You move towards the door under the guise of making room, “He just started convulsing and then he went still.” You almost let pity take control of you when the look into the terrified eyes of the forest god. Terrified at its lack of control over death. But you hold your tongue.",
        "It begins to caress Sigurd’s cheek and brush away the hair over his open eyes. “Please, no. Not my grandson. Not Sigurd, don’t leave me. Please don’t leave me behind, Sigurd.” You ask yourself as you exit the church threshold: Is it even concerned for Sigurd? Or is it just afraid of being alone?",
        "You shake your head and run as swiftly and silently as you can for the bridge, the shortest and fastest route out of here. The way Sigurd is being handled means it will only be a short while until the blood is noticed. Once the bridge comes within view a roar explodes in the distance behind paralyzing you with fear. You instinctively look back and witness Aurvandil tear itself out from the roof of the church and look at you, it’s peaceful blue eyes replaced with blood red orbs. It bursts through the church walls and charges towards you. But your legs won’t move! You beat your legs and slap yourself until you can take steps that feel as if you are running through glue. “Move, dammit!” At the monster’s next roar, you sprint onwards over the bridge. You are halfway across, when stones start to fall away and the whole bridge begins to wobble. The bridge is too old, but you can’t let that stop you. “Go! Go! Go!” is your singular thought now. Aurvandil is on the bridge with its unknowable weight worsening the bridge’s collapsing. You can feel claws tearing open your back and legs as it tries to drag you down with it. The edge of the bridge is just there, but it’s missing! There’s a two-meter gap! You need to jump for it!"
      ],
      decisions: [
        {
          storyNode: "jump_the_gap",
          label: "JUMP!"
        }
      ]
    },
    jump_the_gap: {
      text: [
        "You jump with everything you have and clear the gap as the whole weight of the monster makes the bridge fall down into the ditch and streambed below. It roars in rage and in pain at what must be tons of stone falling with and onto its body with a great crash. You land from your jump painfully and roll poorly, sprained ankles and torn muscles scream at you, but you need to be strong. You limp desperately down the stone path and out of the tree line until you breathe in icy night air. You made it. You remember what Sigurd said about the necklace, that it is Aurvandil’s connection to the outside world in its weakened state. You grip it tightly in your hand and you push on, even as that monstrous voice screams and rages in your head. You need to destroy it. It has to be done, so that no one else ends up like Sigurd. It is the only way you can atone.",
        "It takes you three days to reach the inn with your injuries. Wounded, starved, dehydrated, feverish, and frostbitten you drag yourself inside and lay down by the fire as the inn keeper calls for medical help."
      ],
      decisions: [
        {
          storyNode: "destroy_gudrids_necklace_killed_sigurd",
          label: "Destroy Gudrid’s Necklace"
        }
      ]
    },
    destroy_gudrids_necklace_killed_sigurd: {
      text: [
        "Before you fall unconscious, you use the last of your strength to toss the necklace into the hearth’s raging fire. The chains blacken and warp and the raging voice of the forest fades away like the wind. All you can hear as you fade is the popping and cracking of the necklace’s burning bones. You’re free.",
        "END"
      ],
      final: true
    },
    try_to_escape: {
      text: [
        "You run down the trail with all your might. Your heart feels ready to burst and your lungs burn, but it is not enough. A mass of Shadows takes you by the legs and drag you to their master. The monster envelops you and takes away all of you that is human. You are now merely a shadow of the forest. Made to play house with and keep the monster company.",
        "You live in monotony and brotherhood with your fellow Shadows. The years go by and more descendants wander into the village to be turned into Shadows. Some even worship as normal humans, growing your lord’s power with every word of awe and love. In time the village becomes bustling and beautiful again, the streets patrolled by Shadows and each home full of worshippers by the hearths. There is even talk now among Aurvandil and its followers of expanding the magic forest towards the nearest town, a fishing hamlet, to have their residents bolster their ranks. Under their orders you go and retrieve the shotgun you brought with you so long ago. You begin to feel something almost like joy, knowing that from every day henceforth, you will fight to expand your god’s domain.",
        "END"
      ],
      decisions: [
        {
          storyNode: "examine_the_forked_road",
          label: "Examine the Forked Road"
        }
      ]
    }
  }
};

module.exports = forgotten_forest;
