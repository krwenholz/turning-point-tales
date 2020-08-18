const wagons_and_dragons = {
  author: "Sean Wong-Westbrooke",
  title: "Wagons and Dragons: Caravan to the Capital",
  tags: ["fantasy", "fast-paced"],
  contentWarnings: "Contains some fantasy violence and gore",
  generalRelease: false,
  badges: [
    {
      icon: "🍻",
      text: 'You\'re going out for drinks with the "Red Man".',
      node: "ask_for_release"
    },
    {
      icon: "🚜",
      text: "Off to, maybe, greener pastures.",
      node: "become_colonist"
    },
    {
      icon: "⚰️",
      text: "You will carry the dead.",
      node: "become_smuggler"
    },
    {
      icon: "🏨",
      text: "No place like home.",
      node: "buy_an_inn"
    },
    {
      icon: "Ʊ",
      text: "You lucky dog.",
      node: "enter_capital_luck"
    },
    {
      icon: "🏃",
      text: "You came, you saw, you fled.",
      node: "flee_to_new_lands"
    },
    {
      icon: "🐋",
      text: "You sink beneath the waves... and the bile.",
      node: "get_away_leviathan"
    },
    {
      icon: "⚒",
      text: "It's off to work you go.",
      node: "hard_labor"
    },
    {
      icon: "🧙‍♀️",
      text: "By the grace of Melanie, you survive.",
      node: "leave_ship"
    },
    {
      icon: "😱",
      text: "You know only your own fate.",
      node: "refuse_service"
    },
    {
      icon: "💪",
      text: "There's no substitute for horsepower.",
      node: "take_cover_2"
    },
    {
      icon: "❓",
      text: "Sacrifices were made, but who knows where it got you.",
      node: "wake_up_2"
    }
  ],
  preview:
    "...The eleven-year old boy's voice is calm, only disturbed by the beginnings of its cracking and deepening. “We are not heroes. We do not adventure. We do not hunt monsters. We have another duty. Delivering food to the hungry. Clothes to the cold. Arms to the weak. Giving all safe passage. So long as our wheels spin, so will this world.”",
  content: {
    dive: {
      text: [
        'The party leaps into the river\'s speeding currents. The sound of cracking wood and exploding water fills the air. The shockwave is like a hammer to each of Sakurai\'s ribs. Sakurai rises painfully to the surface and sees Melanie and Gamon flailing with staff-less hands while Bard holds onto a plank of wood. "Mai!" Bard yells, but she is nowhere to be seen. "There!" he yells before diving under the water. Sakurai follows him to find Mai desperately trying to remove her heavy plate armor while being dragged along the bottom river bed. With their knives, Sakurai and Bard sever the leather straps of her suit until she is light enough to bring upwards. All three reach air as soon as the river deposits them all into the ocean. A moment slower and Mai would have sunk along with her steel into the endless watery abyss.',
        "But, there is no salvation at the surface. Upon breaching, another tentacle is readying itself to come smashing down on the party. \"GET AWAY!!! GET AWAY NOW!!!\" Sakurai screams out, there is no time for anyone to look around, there is no time to pray, there is only time to dig and claw at the ocean with everything he has. The world goes black from the deafening impact of a mountain of flesh slapping the water's surface. The waves send the party rolling through the waters, up or down are lost to them until they gain the courage to open their eyes and look for light. From the surface Sakurai sees something rising from the water yet again, only far larger than anything he could have dreamed of. At first it seems a mountainous torso of some creature, this thought dies when it splits open to reveal a tunnel of teeth. The great maw is sucking in the ocean and Sakurai's party in with it as it eclipses the sun, replacing it with its own thousand burning eyes. ",
        'Sakurai shouts remembering Bard\'s song, a song of death and surrender. "LEVIATHAN!!!"',
        '"Master! Help!" Gamon shouts in garbled drowning breaths. Sakurai swims over to him and holds him tight as they are dragged towards the Leviathan\'s maw. There are no heroic words or promises. The old master just holds the boy tight and closes his eyes. ',
        'Suddenly, a loud whistling sound pierces Sakurai\'s ears. FWEEEEEET. Eyes opened from the pain, Sakurai sees before him a small rowboat filled with orcs, the most scarred one extending their hand, "Take it!"'
      ],
      decisions: [{ label: "Take the Orc's Hand!", storyNode: "take_orc_hand" }]
    },
    flee: {
      text: [
        "The couple is lost. There is no more time to think. Sakurai takes Gamon into his arms and flies through the forest. Quickly the master and apprentice catch up to the last other injured survivor running as fast as his limp can allow. The three run together until the limping man is tackled and dragged into the teeth filled darkness. “Don’t look back. Don’t look back.” The mantra is as much for Sakurai as it is for the boy pressed to his chest. ",
        "Sakurai runs for as long as he can, and only when his legs finally give out does he realize the two of them are wholly alone in the forest. No snarling, no footsteps, no wolves. The last survivors of three caravans, sitting in the moonlight. Fearing it would all be for naught if they still die, Sakurai stands up once more on bleeding feet and walks on, heart full of determination.",
        "The week to the Capital is painful and slow, cold autumn days and terrifying nights spent in trees. Food and water are hard to find, but there is enough to barely keep the two going. Thin and tired, the pair finally come into view of the Capital to find it filled with black smoke, the royal white castle crushed and turned into slag. The Dark Lord’s black banner falling over the holy walls. Sakurai collapses at the sight, his body and spirit pushed far beyond its limits, and the world goes black."
      ],
      decisions: [{ label: "Wake Up", storyNode: "wake_up_2" }]
    },
    stop: {
      text: [
        'Sakurai rears the reins upwards and hard to halt the horses, it is barely enough to stop the wagon from falling into what is a large river. "What is it?!" Sakurai yells to Bard.',
        '"Light! I see light! Through this wall!" Sakurai climbs down from his wagon and places his eye in between the ajar stones. Surely enough, the flickering of a fire can be seen in the distance. "Mai! Hammer! Now!" Sakurai commands. The gargantuan woman leaps from her wagon and removes her terribly injured arm from its sling. Her arms are shaking from almost unbearable pain as she grips her warhammer in two hands. The remaining survivors including Sakurai, Bard, and Gamon do everything in their power, stabbing, crushing, and shielding Mai from slimes as she makes six almighty swings that knock more and more stones from the opening until the hole is big enough for a child. Her wounds tear open with each swing and blood pools at her feet. With her seventh and last swing the hammer itself shatters and Mai brings the whole wall tumbling down as unconsciousness takes her.',
        "The caravan quickly pick up Mai and races the wagons and horses towards the light. To everyone's infinite relief, the slimes do not pursue. As they reach the fire and begin to tend to their wounded, the sweetest scent overcomes the caravan and sleep takes them all."
      ],
      decisions: [{ label: "Wake Up", storyNode: "wake_up_witch" }]
    },
    start: {
      text: [
        "“Ok, Gamon. Recite the guild’s mantra.”",
        "“Yes, Master Sakurai.” The eleven-year old boy's voice is calm, only disturbed by the beginnings of its cracking and deepening. “We are not heroes. We do not adventure. We do not hunt monsters. We have another duty. Delivering food to the hungry. Clothes to the cold. Arms to the weak. Giving all safe passage. So long as our wheels spin, so will this world.”",
        "“Congratulations, stop cleaning that stable, you’re coming with me this time.”",
        "“I’ll finally get to leave the city?” ",
        "“Yes, it’s about time my apprentice learned the roads he will work on. Now, come along. We’ll be leaving after I do a last inspection, and pay attention.”",
        "“Right away!” the boy chirps."
      ],
      decisions: [
        { label: "Inspect the Caravan", storyNode: "inspect_your_caravan" }
      ]
    },
    attack: {
      text: [
        "Gamon begins by throwing small stones at the Mimic from outside its room. The stones thud and clack on the ground after bouncing off its wooden skin. On the third impact the monster's hatch comes apart and hundreds of nail thin teeth protrude from its pink gums. Angry and starved from lonely decades the Mimic’s desiccated limbs ooze out of it and it digs long claws into the ground to drag itself toward the delicious looking child. Over its teeth comes a great tongue longer than Mai is tall, darting out rapidly, desperate to grab anything it can eat. As it crosses the room’s threshold Sakurai comes racing down the hall and runs the mimic over with a heavy wagon. The wheels pin the mimic's worm-like legs while the survivors surround and stab the creature with their makeshift spears to try to hold it in place.",
        "“Now!” Sakurai commands.",
        "Mai and the Bard leap from the top of the roofed wagon, three hands to the massive warhammer. With a roar the pair bring the weapon down like an anvil centered on the mimic’s screeching head. The impact shuts its hatch with such force it bites off its own twitching tongue which flies into the terrified arms of a survivor. It takes that man quite a while to recover mentally. ",
        "As the party celebrates, Mai digs through the remains and pulls out what the symbol on the Mimic denoted, a dungeon key. ",
        "“A key! Let’s use it right now and get out of here!” exclaims Bard.",
        "“No, wait a moment. We have no reason to believe this key leads to an exit. I say we rest a bit before heading on. I’ve been told mimics taste rather nice actually,” says Mai.",
        '“You want us to eat it?" Bard kicks the mimic as it goes through its death rattles. "That still twitching mess of scrambled nerves, goo, and tongue?”',
        '“Master?" Gamon takes Sakurai\'s hand and looks to him with apprehension. "Do we have to?” '
      ],
      decisions: [
        {
          label: "Eat Mimic",
          consequences: ["cooked_mimic"],
          storyNode: "eat_mimic"
        },
        {
          label: "Don’t Eat Mimic",
          consequences: ["uncooked_mimic"],
          storyNode: "don’t_eat_mimic"
        }
      ]
    },
    gamble: {
      text: [
        'The game is brutal, but short, high stakes all the way. Drunkenness quickly begins to affect everyone as all the expensive wine and beer begins to be drunk early. The games cease when it has devolved into mostly eating and drinking, whomever won in the end now irrelevant to Sakurai and his new friends. All part on good terms, never mind Sakurai\'s losing nearly all he had come to bet with. "Perhaps I should have prayed for luck after all," Sakurai chuckles to himself. The sun has fully set now, and Sakurai leaves the masters to sit by a fire, its occupants are a female adventurer and the bard from earlier.'
      ],
      decisions: [
        { label: "Join Pair by Fire", storyNode: "join_pair_by_fire" }
      ]
    },
    bet_mai: {
      text: [
        "The adventurer may be shorter, but her chest and arms are covered with long scars. She knows how to fight and keep going. And she’s still two heads taller than Sakurai regardless. An easy bet. “A hundred gold on Mai!” Sakurai hands a weighty bag of gold coins to the announcer’s apprentice to add to the pool.",
        "“Quite some faith in our muscled maiden! You all know the rules, first to pin their opponent for three counts or submission wins. No gouging, choking, or hits below the belt. Although, I admit it would be interesting to see a fight of only hits below the belt, but I’m rambling. Fight already!”",
        "Mai steps forward as quick and soft as a wraith, a giantess wraith, and Dillford is sent flying into the crowd by Mai’s show-stopping uppercut. Dillford is unconscious, and so are the two men the ogre of a man fell on. Mai flexes for the crowd to their raucous cheers and the clinking of gold coins. With one punch Sakurai has doubled his gold.",
        "“The winner of the Crossroads Tourney is Mai Lee! Winners collect your gold. Losers, go cry in the forest!” After being handed back his sack of gold, now twice as heavy, Sakurai is tempted to go and introduce themselves to Mai, it's always good to know capable fighters, but she is occupied carrying around children hanging on her arms. Everyone is laughing and Sakurai loses track of how long he has been smiling. A thought intrudes into this happy moment, “Do you really want these days to end? Riding through the woods and plains? Seeing the great ruins and nature’s monuments. Being out in the wild, dancing, eating, and playing with strangers by fires? Is the promotion worth losing this?” The thoughts flood in, and feel almost unstoppable. The gold now feels almost as insubstantial as air.",
        'But, before Sakurai can hate himself for thinking of rejecting the dream of all those in the guild, the other masters call out for him to join them. "You can debate what to do after this job is finished," Sakurai thinks. The two masters’ card game was finished some time ago during the wrestling tourney, the piles of gold, food, and spices now beside the younger female master. They are waving a jug of wine; it would be rude to pass them by.'
      ],
      decisions: [
        { label: "Relax with the Masters", storyNode: "relax_with_masters" }
      ]
    },
    go_left: {
      text: [
        'Sakurai listens intently to his instincts and feels some invisible force leading him to the way out of this bleak hell. "Left. Of course," he says. For yet more hours Sakurai leads the pitiful caravan down the vast hallway, passing by and investigating dozens of looted rooms with wooden chests left to rot in them. In time, Sakurai wonders if he made the wrong choice for a moment before Gamon calls out.',
        "“I see something! It’s a chest with a key symbol on it.”",
        "“Wait! Be careful boy,” calls out Mai, long awoken from her rest. “Does the chest have a chain attached to it?”",
        "“Um, yes!”",
        "“A Mimic. I’m not sure we can fight it, even with my hammer, I only have one arm.”",
        "“We’re already burning wagons, it took us hours to come this far, who knows if we’ll even find anything down that way. That key symbol, maybe it’s worth the risk?” says Bard.",
        "“Master?” Gamon asks."
      ],
      decisions: [
        { label: "Fight Mimic", storyNode: "fight_mimic" },
        { label: "Fall Back", storyNode: "fall_back" }
      ]
    },
    hug_him: {
      text: [
        '“Come here boy, well done,” Sakurai says taking him into a great hug. "The boy takes things seriously, maybe some extra kindness will keep him encouraged. I wish my Master had done the same for me," Sakurai thinks. “Now go and fetch yourself some dinner, as much as you want," he commands.',
        "“And more w-wine!” the bard hiccups, now being picked off the grass by the giant armored woman.",
        "“And that too,” Sakurai laughs. "
      ],
      decisions: [
        { label: "Talk to the Odd Pair", storyNode: "talk_to_odd_pair" }
      ]
    },
    wake_up: {
      text: [
        "“The Gods’ Plains and then...the Capital” Sakurai coughs.",
        "“Master you’re awake! Mai! Bard!” Gamon shouts. His head is bandaged heavily, a patch of cloth over his left eye is black from blood. The eye is gone, but the boy is alive.",
        "Bard looks at Sakurai with a tear in his eye. “Well how about that? Good to see you friend. So very good.” His right arm is in a makeshift sling and he is missing fingers.",
        "A soft kiss falls on Sakurai's cheek from Mai, “Thank you, we owe everything to you.\" Her signs of fever are gone and she is walking, though with a heavy limp.",
        "Sakurai has been asleep for over a week now. The master can barely move his body after destroying it in that final effort on the cliff side. The three of them were able to fashion a stretcher for Sakurai out of branches that they have been dragging along the road. It has been a painful journey, but in only a half-day more of walking the Capital is within sight from atop a high hill.",
        "Yet, only a tragic sight is found. Smoke billows from behind the walls. The great gate is cooled slag on the ground. The royal castle on the center hill has been caved in and a black dragon is digging through the rubble. The king’s banners have been replaced, now flies the Dark Lord’s. A white moon on a solid black banner. “We are lost,” gasps Bard. Suddenly the sound of shifting undergrowth surrounds the party and all but the immobile Sakurai takes up a knife. ",
        "A green cloaked man calls down from a tree, he removes his hood and reveals midnight hair and elven ears. “Enough with the knives, we’re here to help you. Get off the road or their scouts will find you!” "
      ],
      decisions: [{ label: "Take Cover", storyNode: "take_cover_2" }]
    },
    go_right: {
      text: [
        '"Right. Of course. The way was always right." ',
        'The stones are wet and green with moss. As the wagons venture deeper down the hallway the air grows colder and wetter. When the cold becomes too much the caravaners have to wrap themselves in blankets to endure it. All the while, they begin to make out the almost imperceptible sound of running water. As Sakurai is about to discuss the water with his companions, screaming erupts from the back of the caravan. "Slimes!" A woman yells.',
        'The living green globules landing atop the covered wagons rapidly eat through the wood and armor with their acidic touch. "Run!" Sakurai commands. Regardless as to whether anyone heard the order or not, everyone is pushing their horses hard, batting away the slimes that approach them with clubs and stabbing them until they die and dissolve. ',
        '"Haha! Take that!" Bard shouts after smashing a slime with his lyre.',
        '"Less talking, more killing!" Mai yells swinging her spiked warhammer. All survivors fight valiantly as a mixture of novices and intermediates, but none but Mai has any real training here. A pair of survivors are swarmed by slimes and devoured, their wagon turns over as the horses panic.  In Sakurai\'s own panic he has lost his makeshift torch and is now pushing terrified and acid burned horses deeper down the tunnel in utter darkness. As the sound of a river grows louder and wagons slam and grind against stone walls; it is almost impossible for Sakurai to hear Bard calling his name.',
        '"Stop! Everyone stop! Sakurai!"'
      ],
      decisions: [
        { label: "Don't Stop", storyNode: "dont_stop" },
        { label: "Stop", storyNode: "stop" }
      ]
    },
    head_off: {
      text: [
        "“Welcome aboard,” Sakurai laughs happily. ",
        "With everyone finally ready, Mai pushes off the raft and all watch their home of so long fade from view. Gamon casts a small spell and a ball of light takes point, lighting the dark waters ahead. ",
        'The raft floats down the river for two days before the first scent of fresh air reaches its crew. The blinding light at the end of the tunnel makes Sakurai\'s chest go tight, "Oh how I have missed this smell." The raft crosses the threshold and for the first time in years the party feels the warmth of the sun shine down on them. Sakurai slowly opens his eyes wider, letting them adjust to the sun. He does not expect to see so much black when his vision clears. ',
        "All around the river is the fertile black soil of the Dark Lands. Territory that was conquered by the Dark Lord years ago. Shining on the fertile earth is the orange and red setting sun, the river has led all the way west, deep into the Dark Lord's territory. The river is running across the terrain and deposits in the great western sea. Filling the sea are brutal Orcish ships with dozens of oars and foreign cargo vessels speeding across the waters. The ships are flying the solid black banners of the Dark Lord. Circling the hulks are whales and ghastly gargantuan serpents with tails breaching and falling through the surface. This is a land not meant for humans. ",
        '"Turn back! Back! Back to the tunnel!" Sakurai shouts while grabbing hold of the witch. "Do something! We have to go!" The current grows in speed as the river flows down the steepening terrain.',
        '"Dark Mother grant us salvation. Hear your daughter\'s cry! Grant us safe passage!" With a flourish of her staff an almost invisible power enwraps the raft, lifting it up and back upstream. "It worked. It work- oh no." The witch stops as a tentacle rises from the distant sea and like the embodiment of death comes crashing down with thunder in its wake. ',
        '"Dive! Dive!" Sakurai commands.'
      ],
      decisions: [{ label: "Dive!", storyNode: "dive" }]
    },
    help_mai: {
      text: [
        "Sakurai will not run and let his friends be eaten alive. Gamon already has his knife drawn. Sakurai unsheathes his own steel and the two rush forward to the fire and grip a bundle of flaming sticks in their hands. They swipe the beasts across their faces over and over until embers and the smell of burning fur fills the air. Together the three pull Mai forward as quickly as they can; with each swing of their primitive torches, they can see another pair of eyes added to the darkness. “We’re not going to make it!” Bard yells panicked. The group has exited the forest and finds their backs to a high cliffside into darkness.",
        "“We’ll make it! I promise we’ll make it-” Sakurai's desperate denial is cut off by Gamon’s pained scream as a flanking wolf drags away the boy. “Gamon!” Sakurai chases after Gamon and picks up the boy’s fallen knife before plunging the two blades into Gamon’s attacker. With a yelp the wolf releases him and falls over. Standing over the bleeding boy Sakurai waves his knives angrily at the circling wolves “Get behind me.\" The master is breathing heavily, his lungs on fire.",
        '"Get to the river! The river! The riv-" Bard\'s voice turns to a scream as a wolf bites into his arm. At this Sakurai finally notices the sounds and smells of a river below the cliff. ',
        "The world freezes and a woman’s voice fills Sakurai's ears as the pain in his arms and legs numbs, “You please me, weak one. So brave. So bold. Do you wish for power? Yes, of course you do. I will grant you power, the cost will be your blood and others’. Do you accept?”"
      ],
      decisions: [{ label: "Accept Power", storyNode: "accept_power" }]
    },
    climb_out: {
      text: [
        "Up is the only way to go. Sakurai has people pack whatever they can carry while staying light. Even the Mimic tongue is readied as something to eat, it is a week of traveling to the Capital by wagon, it will be even longer by foot. ",
        "The climb out is deadly. Two survivors fall to their dooms and another two fall and injure themselves. Those who did not want to risk the climb take the injured and go back through the portal to look for any other possible way out. Sakurai faced the wizard; he saw the explosion and the power within it. He will not stay in a place so fraught with danger. Sakurai can still feel holy strength filling him as he climbs and does not look back.",
        "The six remaining members of Sakurai's party emerge from the side of a mountain overseeing the burnt remnants of the Crossroads camp. The sight is a painful one, but Sakurai cannot suppress relief at seeing the red light of the setting sun in the distance. It is a sight Sakurai feared he would never get the chance to see again, but there is no more time to enjoy it. Whatever attacked the Crossroads has heard the explosion and come to investigate. Coming up the mountainside now are armed humanoids lead by a club wielding giant. There is no way to fight, and so Sakurai leads his party to descend the mountain quickly and hope the trees of the forest can hide them.",
        "Luckily, the bandits seem much more interested in what is inside the mountain than whatever may have left footprints out of it. For the next few days there is no sign of any pursuit, at least by men. In the dead of the third night Sakurai awakes to screams. The survivor on first watch by the campfire is being swarmed by wolves as he yells for help. Mai smashes the head of a wolf with her hammer, but her wounds have grown infected the last few days leaving her red with fever. Unwilling to relent, she makes a great one-armed swing which bats a second wolf into a distant tree. But it is too much, she weakly yells “Run!” before fainting. ",
        "\"Mai! I'm coming!\" Bard stabs and throws away a wolf before wrapping his arms in the straps of Mai's armor. He yells from the pain of dragging Mai’s body and can only pull her forward slowly. He stabs and swipes desperately at the growing sea of wolves flowing into the clearing."
      ],
      decisions: [
        { label: "Try to Save Mai & Bard", storyNode: "help_mai" },
        { label: "Flee", storyNode: "flee" }
      ]
    },
    eat_mimic: {
      text: [
        '"We need to stay strong, Gamon." Using its wooden skin, the newly blooded survivors make a simple fire and grilling platform. It is a gnarly process, but hunger is a truly great motivator and the work is done rather quickly. After a bit of experimenting it becomes apparent the only actually edible part is the tongue. Dinner is grilled monster tongue skewers. The more squeamish survivors try not to think about it too much. Some find it quite nice.',
        "“Y’know. I take it back, this is delicious!” says Bard as he swallows another hearty hunk of meat. “This isn’t a dungeon, it’s a feast hole!”",
        "“Never say ‘feast hole’ ever again,” an exhausted Mai sighs.",
        "“Yes yes, my apologies. Can you pass the sauce?”",
        "The massive tongue is devoured quickly by the ravenous, hungover, and sleep deprived party. Thankfully, the tongue is so large there is plenty left over after being cooked. Killing the monster has done good for everyone's morale and taking this moment to rest is well appreciated. But it cannot last. "
      ],
      decisions: [{ label: "Use Dungeon Key", storyNode: "use_dungeon_key" }]
    },
    exit_town: {
      text: [
        "The next six days on the road are pleasant and the caravan makes good time. Few are concerned over the war, they find their fears struggling to speak over the sounds of bubbling brooks, blowing leaves, and the crackling of cooking fires. Gamon has been keeping himself busy making sure the horses are fed and watered. Plus the additional task of memorizing the landmarks on the roads to know the caravan’s pace. A very tedious but necessary lesson the boy needs to be both humble and knowledgeable.",
        "“...The Blue Brook. The Felled Oak. The Watcher’s Mountain. The Ruined Castle. The Wolf God’s Spring. The Apple Hills. The Singing Trees. The Traveler’s Graveyard. The Crossroads. Master, how much longer must I say this?”",
        "“Until I hear you say it in your sleep. There are many routes and dozens of landmarks to the Capital, you must know them all. Again.”",
        "“The Blue Brook. The Felled Oak. The Ruined Castle- ow!” he says as Sakurai flicks his forehead.",
        "“If you want anything more than soup for dinner, you’ll recite the whole thing correctly, tonight. Again.”",
        "Few things are more effective than threatening a boy and his food. Gamon gains a look of focus upon the threat of a hungry night and begins reciting diligently. ",
        '"The boy is smart, attentive, he just needs to learn to work hard. And if not, a few hungry nights of nothing but thin soup will motivate him. It worked for me!" Sakurai thinks to himself. Thankfully the bitter memories have sweetened with time, and Sakurai gives the boy an encouraging smile. The next hours are filled with the rocking of the wagons, Gamon’s cracking voice, and the light chuckling of the drivers and guards as Sakurai intermittently flicks the boy’s head for his mistakes. By the time evening comes Sakurai is thankful to have reached the Crossroads, his finger was starting to hurt from all the flicking. Already settled along the Crossroads are two other caravan parties setting up camp for the night.'
      ],
      decisions: [{ label: "Greet Campers", storyNode: "greet_campers" }]
    },
    fall_back: {
      text: [
        'This is not an adventuring party, the people with Sakurai are merchants, not to mention almost all injured. There is still enough wood to burn to for perhaps another day of travel. "Let\'s not risk it." Sakurai orders. Further hours pass as the caravan returns to the splitting path. '
      ],
      decisions: [{ label: "Go Right", storyNode: "go_right" }]
    },
    pay_taxes: {
      text: [
        'Sakurai\'s mind races trying to think of ways to avoid this catastrophe, but without a captive wizard and a vanished scroll, he has no evidence or collateral to work with. "Not even a bribe is an option now," thinks Sakurai, damning himself for not befriending Luck. In the end there is only one option. "Do as you will, Commander. My apologies, and thank you for your service.”',
        "“Very good, welcome to the Capital. Lads, be quick and earn your keep.” The soldiers roughly rummage through the wagons, but by the time they are done it does appear only ninety percent was taken. ",
        "“Small blessings,” Sakurai whispers. The great gates are opened and the pristine streets sprawl out up hills and to the horizon. Sakurai and the survivors enter with dramatically lighter wagons and collapsed morale. In time, Sakurai finds a buyer for the monster remains, but after the 'taxation', there is little to sell other than goblin and orc bones. Sakurai receives one small sized bag of gold, it cannot be more than eighty gold coins. A far cry from the massive chests that were expected. It becomes even less when the earnings, wagons, and horses are divided between the survivors, the least Sakurai can do to begin to make amends for this ordeal. The survivors have arrived safely, but few have any connections in the city, and with their belongings lost, even if one were to sell the wagons and horses, if they do not find good work soon, only pauperdom awaits.",
        '"So, what happens now?" asks Bard. "With these funds we can maybe have room and board in a flee-infested inn for less than a week. After that, it\'s menial labor or entertainment."',
        '"The colonists..." says Mai laying weakly in Sakurai\'s red wagon.',
        '"Oh, yes! The colonists are leaving for the Unknown Lands in the next week or so. We\'ll be on the lower rungs of society with our funds, but that isn\'t much different than normal, is it Mai?" He gently moves the hair from her eyes before looking toward Sakurai. "And what of you, Caravan Master?"'
      ],
      decisions: [
        { label: "Stay in the City", storyNode: "look_4_work" },
        { label: "Become a Colonist", storyNode: "become_colonist" }
      ]
    },
    pray_luck: {
      text: [
        'Sakurai presses his palms together gently and leads Gamon in prayer. "Luck. The strongest man in the world can be killed by drowning. The richest man in the world can grow ill and die young in the finest of beds. I would not have survived this many voyages out of the city without being lucky. And we shall take all we can get. Who knows when one will need it against man or monster? Oh, Lord of Fortune and Fate, Lord of Gamblers and Liars, I give myself to you. I shall see your kindness repaid tenfold. Let us avoid all dangers you will allow us and let our plans be as smooth as silk. Lom.”'
      ],
      decisions: [{ label: "Leave Courtyard", storyNode: "leave_courtyard" }]
    },
    wake_up_2: {
      text: [
        "Sakurai awakes to the feeling of cold water flowing down his parched throat. Upon opening his eyes Sakurai stares into a pair of golden cat eyes looking down on them. The eyes belong to an elven nun. “Where am I? Where is my boy?” Sakurai blurts out. She pushes the master down and points to another elven priest nursing the child across from Sakurai.",
        "“Some resistance scouts found you and handed you over to us. You're both going to be okay.”",
        "“Where are we going?” Sakurai asks. The earth is shaking in the familiar pattern of a wagon. The sounds of horse hooves stamping on dirt and wheels rolling denotes at least twenty horses and as many wagons. ",
        "“We are fleeing to the Unknown Lands. The king is dead, the war is over. A resistance is mounting but the soldiers have requested we evacuate the injured. The colonists are only a few days ride ahead, we can catch them if we move quick.”",
        'Suddenly the magnitude of these events comes crashing down onto Sakurai, all the fighting, the sacrifices, the losses. His head falls to the side, taking what comfort he can in the familiar rocking and jostling. "Forgive me, everyone." Sakurai weeps for some time before he can control himself again. ',
        "Sakurai has never felt older than when he takes Gamon’s hand and grabs it tight. One word fills the master's heart, and Sakurai knows Gamon must hear it. “Onward.\" Sakurai says. The Caravan Master falls back to sleep as he feels Gamon's grip gently tighten. ",
        "The End"
      ],
      final: true
    },
    buy_an_inn: {
      text: [
        'After the horror of the caravan’s decimation Sakurai chooses to not risk him, or Gamon, being caught vulnerable in the wilderness ever again. The city is surrounded by high white stone walls lined with archer towers, trebuchets, and ballistas. Soldiers are marching through the streets at the ready at all times, and the gate is solid steel thicker than any human is tall. The cold metal fills him with a great calm. "This is the safest place in the world, and it is where I will place my bet."',
        "The party seeks out and finds an inn deep into the city, near the castle on the high hill in the center of the walls. The innkeeper was reluctant to sell the place of their livelihood, but that was solved with a sizable bag of gold and their subsequent early retirement. It's a good two-story inn, safe and secure by being near the castle. The inn is renamed “Master’s” and in a week everything is up and running smoothly. The old staff stayed on and Gamon takes quickly to serving food and drinks. Mai spends her days recovering, but for at least a short time every day Sakurai finds her arm wrestling and gambling with boastful men downstairs. Said men then leave much poorer and humbler. All the while Bard sings his songs and plays his new lyre. The money is coming in as soldiers, mercenaries, and refugees pour into the Capital looking for a bed, food, and respite. In a time of uncertainty, such things are now among the most sought after blessings.",
        "A week after arriving in the Capital, Sakurai awakes in the night to what sounds like a thousand flags whipping in the wind. The smell of smoke and sulfur. And the booming sound of war horns blaring. He runs outside to the King’s Road cutting through the city to see in the distance the great steel door of the city gates glowing red hot. Outside the walls are towering plumes of flame and lightning illuminating the endless hordes in the darkness beyond the wall. It is a black and silver ocean of teeth, steel, and raging magic. Sakurai feels his hair turn white from utter terror, but he does not let himself freeze up. He retrieves everyone he can within the inn and directs them to mount their horses and wagons. Once again Sakurai, his companions, and a mass of strangers are fleeing in the middle of the night. They are heading for the northern gate and out of the city when the assaulted main gate finally collapses and the roars of man, orc, minotaur, giants, and dragons flood the streets. Gamon at his side, Bard and Mai in the back, and reins in his still strong hands, Sakurai adds in his own war cry, “Onward!”",
        "The End"
      ],
      final: true
    },
    dont_stop: {
      text: [
        '"Stopping is death!" Sakurai responds. "Don\'t stop! No one stop-" there is no time to finish before Sakurai is falling into icy waters. Before the shock takes over he manages to take hold of Gamon. He holds him tight as a world of blackness consumes them. At the feeling of crushing bone, Sakurai and Gamon cease to sense anything.',
        "The End"
      ],
      decisions: [
        {
          label: "Use Blessing of Health",
          requires: ["blessing_of_health"],
          storyNode: "use_health_2"
        }
      ]
    },
    hard_labor: {
      text: [
        '"Thank you, but please leave us." To Sakurai\'s relief the smuggler leaves sounding simply disappointed. After two more days, the master and apprentice duo are removed from their inn and now own nothing in the world but a single horse and a wagon. The ports are willing to hire anyone able to carry and move goods, Sakurai pities his horse, but this is the only way to survive. And so, day in and day out Sakurai moves, opens, and seals crate after crate from ships while Gamon pushes the horse to its limits delivering cargo. ',
        "In the end, the work pays and keeps them fed. This solace does little to keep them from feeling almost relieved when one night dragons and wizards come to burn down the city's walls. The port masters are much less enthused and quickly go aboard their luxury ships to sail far, far away. Seeing the opportunity, and armies of orcs flooding through the gate, Sakurai and Gamon along with dozens of other able-bodied people scramble aboard the fleeing ships. Any captains or port masters that refuse them or try to remove the hulking workers are promptly thrown overboard. ",
        "Sakurai, Gamon, and their fellow refugees breathe a sigh of relief as the evening winds are strong and the ships are quickly carried northeast. The Capital is gone, but those aboard are now fleeing with a fully stocked ship. The future is unknown as the makeshift crews sail for the Unknown Lands. Gamon holds Sakurai's hand as he watches the burning Capital disappear into the distance. ",
        '"Onward," Gamon whispers to himself. "Onward."',
        "The End."
      ],
      final: true
    },
    leave_ship: {
      text: [
        '"Come along now," says the scarred orc with glee in his voice. "The Company Master will want to meet you all and hear your story; should be able to find folk like you work right quick too. And remember, if you ever need safe passage on the sea, it was Captain Garo of the \'Dark Lady\' that saved you!" Sakurai takes hold of Gamon\'s hand tightly as they are led off the ship and toward the dragon. It is unclear which of them is shaking more. Sakurai wonders what will happen to them now.',
        "The End"
      ],
      final: true
    },
    take_cover: {
      text: [
        "Sakura deftly takes Gamon into his arms the two take what shelter they can behind the thick fireside logs. Despite the security, the sound of arrows driving deep into the wood makes Sakurai's heart skip. As Sakurai and Gamon hide, Bard is trying desperately to drag away the hulking female adventurer. Barely able to move her, Bard continues to survive only because Mai's thick armor deflects the arrows trying to pick them off.",
        "“Gamon, hold onto me and do not let go. Do not let go! Come!” Sakurai runs over to Bard and together they manage to lift the warrior. All throughout the camps are dozens of Sakurai's friends and new strangers cower behind stumps and boxes, waiting for a plan, for help. Tents are ablaze. The horses are crying. The sound of steel on steel rings loudly. “To the wagons!” Sakurai shouts. And with steps that feel like running through mud Sakurai's injured party makes their desperate way to the lead red wagon. The mercenaries and armed men are yelling about being surrounded as they are cut down one by one by men in black. As their formations fail they begin to call for everyone to flee. Sakurai and Bard toss Mai into the back of the wagon and climb aboard as Gamon readies the horses.",
        '“Southern Guild, to me!" Sakurai takes the reins pushes the horses harder than ever before. The wagon shakes violently along the rocky earth, it feels as if it were to break apart in an instant. There is only one path in the Crossroads open, the Valley of Ruins, whether it be a trap or not does not matter, the whole surrounding forest has been set aflame and dozens of bloody wagons and arrow filled bodies litter the other roads out. All that can be done is pray this path bears salvation. ',
        "As Sakurai exits the camp he sees in the corner of his eye for just an instant, a half-dozen archers, their steel arrows bright silver in the moonlight. Sakurai is frozen in time, his arms as taught as the bowstrings about to kill him. As they release Sakurai pulls the wagon to the side in a last-ditch attempt to survive. He shuts his eyes as something pushes him down into his seat.",
        "“Master, watch out!” ‘Thunk thunk thunk thunk thunk thunk’.",
        "“Gamon! No!”",
        "Sakurai looks in horror to find not Gamon, but Mai’s great armored arm and shoulder turned into a hellish sight. “Ride,” she orders before passing out on the driver's bench.",
        "Sakurai's mind is racing. \"The valley is a half-day ride to cross, we’ll be easy to track. There has to be somewhere we can hide!",
        "“To the left! Go in the dungeon! We can hide in there!” Bard yells.",
        '"We’ll be trapped!”',
        "“We’re trapped anyway! Look!” Bard points to the top of the valley, a great boulder pushed by some great inhuman shadow is rolling down the hill towards Sakurai and the band of wagons following them."
      ],
      decisions: [{ label: "Enter Dungeon", storyNode: "enter_dungeon" }]
    },
    fight_mimic: {
      text: [
        '"Bard is right, we can’t take a risk on what else may be when there is an opportunity staring at us." The survivors gather to create a plan of attack. Soon everyone has their roles and is ready to execute them.'
      ],
      decisions: [{ label: "Attack!", storyNode: "attack" }]
    },
    look_4_work: {
      text: [
        "Traveling into unknown territory, without any gear or supplies? Being forced to rely on charity and the wealth of the land to survive. It's too risky. This city has high and strong walls, the main gate is some two meters thick of steel. It is manned by deplorable guards, but they will be the first to die in an attack, so that's a pleasant thought. \"I think we'll try our luck here. I've plied my trade in towns almost as much as you did your singing. Surely someone will have work for me.\"",
        "As a gift for their help, Sakurai gives Mai and Bard one of his two horses and wishes the couple the best on their journey to a new life. They ride off laughing, Mai demanding massages and breakfast in bed, Bard nodding his head repeatedly, promising that and more.",
        "It takes a few days, but it seems word has fully traveled of Sakurai's disastrous caravan. His professional reputation is in tatters. No one caring at all whose fault the attack was, in the end, Sakurai was of the three in charge, and ironically, his survival is a further black mark against his name. Sakurai is officially 'Bad Luck' and no reputable trade house is interested in his services or expertise. ",
        'In time Sakurai\'s funds are nearly depleted, and it is a real possibility that Gamon will be forced to beg on the streets again. But still, Sakurai resists resorting to the back-breaking work of unloading cargo at the port, it is either that or the sewage disposal crews. Noting his great need, a rather unscrupulous looking man seeks Sakurai out, he requests assistance in smuggling goods to a city in the west. "It will pay well. We need a driver and someone who can be professional," the smuggler says.'
      ],
      decisions: [
        { label: "Become a Smuggler", storyNode: "become_smuggler" },
        { label: "Pursue Hard Labor", storyNode: "hard_labor" }
      ]
    },
    pray_health: {
      text: [
        'Sakurai presses his palms together gently and leads Gamon in prayer. "Health. Whether you are rich or poor. Or if it is man that wins or loses the war. It would all be  meaningless if our body or minds were beset by illness. I have a boy beside me, if nothing else, he must be kept safe. Oh, Lord of Flesh and Spirit, grant us strong bodies and clear minds. Please allow us to live long lives full of thankfulness towards you. Lom.”'
      ],
      decisions: [{ label: "Leave Courtyard", storyNode: "leave_courtyard" }]
    },
    sell_organs: {
      text: [
        "After the party gathers themselves, this takes a while, Sakurai seeks out the monster organs buyer and finds said buyer deeply confused as to how Sakurai arrived almost a week ahead of time. Ultimately though, after giving an abridged version of the story, the goods are sold and exchanged for three chests of gold. Sakurai shares this wealth and the wagons among everyone who has survived this tragic ordeal as thanks and to honor their forced camaraderie. Bags of coin in hand, the survivors part ways to find they families and to inform local officials of the attack and all those lost. It was never clear whether it was unholy monsters or bandits that struck, in the end it seems to have become irrelevant.",
        "“What now?” asks Bard collecting his and Mai's share of gold. ",
        "Sakurai cocks his head to one side in thought. “I’m not sure now. All I have in the world is this wagon and a chest of gold. There's no going home, the guild will cut its ties with me as soon as they get the news of what happened. Whether the blame falls on me or not, I’ll be disgraced. I guess that means I’m unemployed now.”",
        "“You could stay with us; we can rent rooms in an inn for as long as we want with your gold. Could even buy one actually,” says Mai, now laying down resting in a hand drawn cart Bard bought her with his share.",
        "“Tempting, but what of the colonists? Are you not going to join them in the east?” Sakurai says.",
        "“Mai is still fairly hurt. She's recovering, but it is a hard journey east for even the strongest, I’m told. Without this gold, we'd really have no choice but to become colonists.”",
        "“The Capital will be attacked one day, that is almost guaranteed,” Sakurai responds.",
        "“Yes, but if any city could endure it, it is here.” Mai says.",
        "“And who knows, if the colonists succeed, maybe there will be another exodus. Someday,” shrugs Bard. ",
        "Sakurai holds his chin and thinks long and hard about what fate to pursue. “I suppose the final question then, is whether we run away to new lands and hope for something better, or bunker down with new friends, come what may?” "
      ],
      decisions: [
        { label: "Buy an Inn with Mai and Bard", storyNode: "buy_an_inn" },
        { label: "Flee to New Lands", storyNode: "flee_to_new_lands" }
      ]
    },
    thank_witch: {
      text: [
        "“Thank you, Ms. Nettles. Who knows how long we would have been stuck on that river if we did not hear you singing. We are in your debt,” Sakurai says.",
        "“Please, there is no need for that. I haven’t had anyone to sing with for years. And all I did now was offer some tea. The debt is all mine. What are you doing down here anyway? The dungeon should have been abandoned ages ago.”",
        "“I could ask you the same thing. Long story short; bandits attacked our caravan, we fled, killed a crazed wizard, jumped in a hole with no idea where it went, and then we...sang a song....” says Mai, who sounds more confused with each word, realizing the madness that has become her life.",
        "“I’m sorry you went through all that, but did you say you ‘killed a wizard’? Is Tim really dead?” asks Melanie, now gripping and twisting her robes.",
        "“Very, there is nothing left of him. How do you know him?” Sakurai says.",
        '“He was my Master. He cruel, selfish, and arrogant. It felt like he took an apprentice just to have someone to gloat over. Never taught me anything the whole time I was with him. When I had a chance, I trapped him inside his lab. And I’ve been living down here since, where I can do my research in peace. Good riddance to him I say. Would you like to see my research? I\'ve been looking into the magical properties of bioluminescent fungi." The witch stands up so excited she almost hops. "Come, come let me show you!”'
      ],
      decisions: [{ label: "Ask for the Exit", storyNode: "ask_about_exit" }]
    },
    accept_power: {
      text: [
        "“YES!” Sakurai roars. The old master rises up on two torn and bleeding legs. “I ACCEPT!” In an instant he grabs Gamon and tosses him over the cliff, the sound of splashing water bounces back. Sakurai then rushes over to Mai and Bard, beating wolf after wolf out of the way, and takes them both into his bulging arms and makes for the cliff side. Wolves are piling atop the trio, biting and tearing at Sakurai's legs trying to drag down the empowered master. Sakurai can feel bones chipping from their teeth and claws, hear muscles tearing like torn sheets, but it does not hurt. With a last roar and leap Sakurai pulls his companions off the cliff and into the fast waters far below. Upon impact, the world goes black and cold.",
        "“How did it come to this? Did I go wrong somewhere? No, I- I did my best. Mai. Bard. Gamon. Are they alright? Are they safe?” Sakurai thinks, feeling as if he were floating in some empty void.",
        "A boy's soft pained voice intrudes into the emptiness, the voice is speaking familiar words “...The Blue Brook. The Felled Oak. The Watcher’s Mountain. The Ruined Castle. The Wolf God’s Spring. The Apple Hills. The Singing Trees. The Traveler’s Graveyard. The Crossroads.” Sakurai can feel himself being dragged across uneven earth, the sun shining down on his face as he listens further. “The Valley of Ruins. The Black Forest. The Quiet River. The Failed Colony. The Dwarf’s Fist. The City of Glass....” "
      ],
      decisions: [{ label: "Awake", storyNode: "wake_up" }]
    },
    bet_dillford: {
      text: [
        "Dillford’s arms are almost twice as thick as the adventurer’s head, one could think his mother was a giant or a worryingly buff dwarf. “A hundred gold on the blacksmith!” Sakurai hands a weighty bag of gold coins to the announcer’s apprentice to add to the pool.",
        "“It brings a tear to my eye to see such gaming spirit! Now, you all know the rules, first to pin for three counts or submission wins. No gouging, choking, or hits below the belt. Everything goes otherwise. Begin!”",
        'Dillford steps forward and opens with a heavy right hook, Mai responding with a left of her own, so much for wrestling, and both drive their fists into the other’s face for a crashing cross-counter. The crowd goes wild as Dillford breaks off for the tackle only to be dodged by the surprisingly nimble Mai. The hulking man now off balance, Mai steps behind him and wraps her arms around his gullet. With a terrifying roar the veins in her forearms bulge out as she lifts and throws the blacksmith back over her head and onto his own. Dillford is knocked out cold, his eyes have rolled into his head and froth is pooling in his mouth. “The winner of the Crossroads Tourney is, Mai lee!” A cacophony of cheers and groans bursts from the crowd. "Winners collect your gold. Losers, go drown your sorrows, we have plenty of wine left!” ',
        'Sakurai grabs his head in excitement and dismay, "My gold!" ',
        "Once he has mentally recovered from his loss, Sakurai walks up to Dillford who has been recently revived by his friends. The giant man is currently nursing what must be a raging headache with how much alcohol he’s drinking.",
        "“Dillford? Well fought, but I’ve got to ask. Why is that your name?”",
        "“My parents wanted me to have a name I’d hate. Because hate makes you strong But, it just makes me sad!” The man begins an ugly cry that would be enough to make an ogre cringe. And it shows no sigs of abating.",
        "“…Okay then. Have a good evening now!” Sakurai says before walking away quicker than is polite. Once away from, whatever that was, he notices that while he attended the fight it seems the other masters finished their gambling, the grey-bearded master now sitting beside a pile of trophies the clear victor. Sakurai is starting to feel like he has had his fun, the night is still young, but a quiet end sounds sweeter than anything."
      ],
      decisions: [
        { label: "Relax with the Masters", storyNode: "relax_with_masters" }
      ]
    },
    bribe_guards: {
      text: [
        '“Commander, let me tell you what my cargo is worth to you. I’m carrying monster organs; liver, teeth, brains, and bones from creatures that could tear through your armor like an axe through silk. Do you even know where or who to sell it to? What this cargo is even worth? I bet most of it would rot away before you could figure out a buyer, let alone a good price." Sakurai retrieves the bag of gold under his seat. "Now here, this bag holds more than a year’s salary for you, and all your friends here.” Sakurai says, his voice like a soothsayer\'s.',
        '“O-Our salaries are much more than that o-one bag," stutters the commander, staring at the bag mouth agape and unblinking.',
        '“No, no it’s not. I’ve passed and spoke to countless guards in my profession. What are you? Some fallen minor noble, demoted to guard duty? I think I am being generous. Only a fool would gamble and risk gaining nothing when offered a bag of gold. It\'s a win-win friend.” It is taking Sakurai everything he has to keep from shaking, never before has he been so brazen in bribery. "Your men are watching, Commander." ',
        "The commander takes a moment to look about his companions, closely watching him. They look akin to a pack of hungry wolves, ready to devour their leader as much as the sagging bag of gold. “Let them through! Let them through! The master is making a kind donation to the city watch!”"
      ],
      decisions: [{ label: "Enter Capital", storyNode: "enter_capital_bribe" }]
    },
    bring_wizard: {
      text: [
        "The survivors tie the wizard up with random chains found around the lab. Even finding a muzzle and collar. Soon Tim looks more like a makeshift anchor than a man, let alone a powerful wizard. Unable to move a finger or speak a clear word, he is seemingly powerless. But who knows how long that will last? The caravan quickly gather the wagons into the scroll’s listed area of effect. "
      ],
      decisions: [
        {
          label: "Teleport to Capital with Captive Wizard",
          storyNode: "teleport_with_wizard"
        }
      ]
    },
    drink_potion: {
      text: [
        "In a split second Sakurai dunks his head into the potion and swallows the raw power. As Sakurai rises from the potion he feels all powerful, muscles brimming with strength, eyes glowing with magic, but then the smell of flesh burning becomes impossible to ignore.",
        "“Oh, oh my. You should not have done that. Only one of sufficient power could endure this potion.”",
        "“H-Help,” Sakurai begs while clawing at Tim’s robes. ",
        "Tim is leaning on the cauldron, looking down on Sakurai in agony like someone watching a dog chase its tail. “Oh, you are being a big help, I've never gotten to witness a magical overdose of this magnitude before. I must admit this is a treat my friend, I'll memorialize you in my notes. Thank you for your sacrifice.”",
        "Sakurai can feel the potion eating its way through his guts when he finally passes out. The Caravan Master never returns to his companions and their respective fates will forever be unknown to the other.",
        "The End"
      ],
      decisions: [
        {
          label: "Use Blessing of Health",
          requires: ["blessing_of_health"],
          storyNode: "use_health_1"
        }
      ]
    },
    leave_wizard: {
      text: [
        "Whatever reward is being offered isn’t worth the trouble of him coming back. They set fire to any and all scrolls they can find in the lab so no more gate scrolls can be made. Without the dungeon key or a scroll, he will truly be trapped once and for all. It sounds like justice."
      ],
      decisions: [
        {
          label: "Teleport to Capital",
          storyNode: "teleport_without_wizard"
        }
      ]
    },
    punish_Gamon: {
      text: [
        "Sakurai's master was a harsh one at times, but the discipline had a purpose. It is because of such practices that Sakurai is successful today. It pains him to do this, nonetheless. The boy must learn he cannot rely on mercy or pity. “I keep my word Gamon, plain soup for you tonight. After, come and join us. I am not so cruel as to let you sleep in the cold.”",
        "“Yes, Master. Thank you, Master,” says the boy with a frown. Mai and Bard go along with Gamon to cheer him up. The masters look on with a solemn but accepting look, remembering their own hungry nights. ",
        '“You gave him a hard task early on. I assume you have your reasons. Where did you find the boy?" asks the elder master.',
        "“My men caught him stealing food from the storehouses a few years ago. He was awfully skinny, taking just enough to survive and go mostly unnoticed. He was smart and cautious, so I took him under my wing. Better that than hand him off to the city watch.”",
        "“That's good to hear, but take some advice from an old man, don't be too hard on the boy. It is a terrible thing to have an apprentice that resents you.”",
        "“Thank you Elder, but that is my business,” responds Sakurai.",
        "Mai and Bard return with Gamon, an almost clear and unappetizing bowl of soup in his hands. But, upon closer inspection Sakurai can see the remnants of bread crumbs over his mouth, all the while Bard tears himself pieces off of a loaf. Sakurai finds comfort in thinking that perhaps someone has done kindness in his stead. And so, everyone around the fire pretends to not notice as Gamon wipes his mouth before even drinking his soup.",
        "“Enough with this talk and tests, let us relax. Another song?” Bard offers, already tuning his lyre.",
        "“Please.” Sakurai says.",
        "A song of travels and friends dances in the air. Gamon is fruitlessly trying to arm wrestle Mai as the masters pour themselves very full glasses of wine. Sakurai is pouring himself another cup when the arrows strike. The first arrow takes Mai's ear. The second lodges in her shoulder and knocks her to the ground. In the same moment the masters Gogol and Ennis are peppered with a half-dozen more.",
        "“Mai?” whispers Gamon."
      ],
      decisions: [{ label: "Take Cover!", storyNode: "take_cover" }]
    },
    rub_his_head: {
      text: [
        '“Well done, Gamon,” Sakurai says messing his long black hair. "A hug is too much, best keep some distance so the boy can stand on his own feet. It’s what most masters would say to do," Sakurai thinks. “Now go get your dinner," he commands.',
        "“And more w-wine!” the bard hiccups, now being picked off the grass by the giant armored woman.",
        "“Right away!” Gamon says, running off.",
        "Sakurai's eyes drift over to the adventurer lifting up her red-faced companion. What a strange pair they are."
      ],
      decisions: [
        { label: "Talk to the Odd Pair", storyNode: "talk_to_odd_pair" }
      ]
    },
    take_cover_2: {
      text: [
        "Sakurai is dragged off the road and can tell little of where the party is taken as he lays on his back, watching the clouds go by. The sounds of marching soldiers and clanking armor pushing through bushes and branches is almost suffocating. The clouds are replaced with darkness and torch light as the party is taken underground. The air inside the cavern is cold and wet and smelling of mold. Sakurai's caravan is led past hundreds of injured civilians and soldiers but are finally told to sit and wait down for a briefing deep in the cave system.",
        "Sakurai watches as the elf who called out to the caravan's remnants stands before his human and elven soldiers. Still exhausted, Sakurai struggles to make out what he is saying in the echoing mess of a cave. But the message is clear from the raising of fists into the air and cheers with each word from their leader. Sakurai can make out the last line alone, “The war is just beginning.” ",
        "The cave is busy with activity after the speech. Yet, there is something odd, Sakurai sees the visage of a woman in black armor, standing in the crowd, her raven hair falls down her back and reaches almost down to her knees. She passes through the crowds like a wraith as she kneels besides the wounded master. Sakurai can now see her helmet and armor is wrought iron. It is the Goddess of Strength. She whispers in his ear with voice so sweet it is almost loving, “Did you like it? The power? Forcing your way through?.”",
        "“My lady? Why have you been so kind? I prayed to you but once.”",
        '“Because the gods would never choose someone as old and weak as you to be given power, I want to see why. And if they are wrong.” She gives Sakurai the grin of a demon before placing a calloused hand on his chest. From her palm spreads a red light and Sakurai\'s body is filled with painlessness and the freedom to move his broken and torn body. “Stand." Before Sakurai can even comprehend the order he is already at his feet. "The merchant’s story is over. Show me something new.”',
        "Sakurai wonders if this is how it was always going to end. With death and rebirth. The Goddess’s gleeful smile betrays nothing to him. The only thing that is clear, is that Sakurai the Merchant is dead, and that what Sakurai the Warrior will do with this power, is another story entirely.",
        "The End"
      ],
      final: true
    },
    use_health_1: {
      text: [
        "Sakurai awakes standing in a black void, the pain of their dissolving body vanished. “Am I dead?” Sakurai asks into the emptiness. ",
        "“Not yet,” the void calls back. “You asked for protection, and it shall be given. Live long and serve me well.” The void turns to blinding white and damp air fills Sakurai's lungs as he awakes back in the wizard’s lab.",
        "“Master! You’re alive! Oh, thank the gods!” says the boy half laying on Sakurai's chest, the signs of dried tears on his face. ",
        '"Wizard! Run! There\'s a wizard!" Sakurai shouts throwing Gamon off of him toward the open portal. He stands to run with him when he sees a gaping acid eaten hole in the floor, beside it a spilled cauldron and Tim\'s half-melted severed legs. "W-What?" ',
        "“A wizard you say? He's very dead now, but Sakurai, how are you? We thought we lost you.” asks Mai.",
        "“No, we did lose you. Friend, you haven’t been breathing for ages. What devil did you deal with?” says Bard suspiciously. ",
        "“No devils, a God. One whom I believe I owe very heavily now. But wait, I told you to leave if I didn’t come back, why are you here?”",
        "Gamon looks at the ground like a caught puppy. “The lad broke off and ran in on his own, knife in hand.” Bard says. ",
        "“And you didn’t stop him? I encountered a wizard!” Sakurai says angrily grabbing the bumbling bard.",
        "“I tried; honest I did! The little guy went between my legs!” ",
        "Sakurai relents and sighs before looking gently at the disobedient child. Sakurai walks over to Gamon and flicks his forehead hard as he can. He pulls the boy into a hug and holds him tightly. “Stupid child. Stupid. But brave. You’ll be a good man one day.” After a celebration of Sakurai's survival, everyone's attention turns back to the hole and pair of burned wizard legs. \"It seems he vastly overestimated his own tolerance,\" Sakurai says cockily. ",
        "The party turns its attention to the cool air and low rumbling of a river coming from the hole."
      ],
      decisions: [{ label: "Investigate Hole", storyNode: "investigate_hole" }]
    },
    use_health_2: {
      text: [
        "Sakurai awakes to his shock, with no pain at all. Miraculously, he feels only a few bruises and finds himself sitting in a warm and dry jail cell. \"Okay, so not that lucky then I suppose,\" Sakurai thinks somberly. Across from his cell is Gamon sleeping in a similar state. To the master's relief, the boy looks wholly unhurt, breathing softly and unlabored. An elder orc with white hair and grey tunic makes himself known by coming around a corner and sliding a tray of food into Sakurai's cell. ",
        "\"Oh? So you finally woke up? You're a hearty one I'll give you that. And before you ask, you're in the Dark Lord's domain now. We fished you out a riverbank.\" ",
        '"W-Why would an orc save humans?" ',
        '"Because you\'re interesting. The Dark Lord and their commanders greatly value information. They will surely be interested in how you appeared in a land that has been devoid of humans for nearly a year now, Caravan Master." The elder pours himself a cup of tea before sliding another into Sakurai\'s cell. "Tell me, who is the boy? Your son?" ',
        'Sakurai drinks his tea as he thinks on his response. "Yes, he is. Elder, what will happen to us?"',
        '"Who knows? Interrogation? Lunch with a wizard? Be fed to a dragon?" He refills Sakurai\'s cup and breathes a great sigh. "Take a tired old orc\'s advice, toss away your pride. For the boy\'s sake at least, you will need to make yourself useful. Very useful indeed." The old orc leaves and for the next two days only silent and slimy snake-men guards come to feed and watch over Gamon and Sakurai. The only sounds the guards make are terrifying venom spitting hisses whenever Sakurai or Gamon try to speak with one another.',
        "On the dawn of the third day there are sounds of a great flapping and whirling wind above. Like a great bat took flight. Then Sakurai hears the roar and he knows what has come. The silent guards come and drag Sakurai and Gamon to the black and fertile open fields outside, they are made to kneel before a red robed wizard atop an emerald dragon. The beast's breath is so warm the master and apprentice feel themselves sweating heavily through their clothes from meters away. ",
        '"I speak as an emissary of the Dark Lord and I will keep this short, for all our sakes. You, Caravan Master, have the potential to be useful to the war effort. If you prove yourself, you will be generously granted a pardon, farm, and protection in the Dark Lord\'s lands. Refuse or fail, and I, or whomever is nearest to you, will slay you and/or let a beast devour you. Choose. Now."'
      ],
      decisions: [
        { label: "Refuse", storyNode: "refuse_service" },
        { label: "Serve the Dark Lord", storyNode: "serve_dark_lord" }
      ]
    },
    use_strength: {
      text: [
        "Sakurai feels holy power flow through him. In an instant he grabs Tim from across the cauldron and pulls him toward the boiling solution. Tim only has enough time to yelp before Sakurai pushes his head down into the glowing liquid and holds the wizard in by his legs. Tim writhes and kicks with all his might, but in the end, he is no match for whatever being has chosen to favor the caravan master.",
        "Sakurai continues to submerge the wizard until the white potion turns abyssal black and the cauldron begins to shake violently. Sakurai releases the wizard's legs and dives behind a far stone table to take cover from whatever is coming. He feels his bones turn to ice at the sight of the fleshless screaming skeleton of the wizard attempting to climb out from the cauldron. Its chilling advance is ended as the cauldron finally explodes and a great pillar of energy beams through the stone ceiling and floor, destroying the unholy wizard. Sakurai cowers beneath the stone table until the rocks stop falling and the shaking of the earth is done. Only opening his eyes once the warm and fresh afternoon air washes over his face.",
        "Looking above, Sakurai sees whatever reaction took place in the potion has torn a way to the surface that looks climbable, but inaccessible for the horses and wagons. It is a painful thought for Sakurai to give up his cargo, but with the caravan destroyed, his reputation is already ruined one way or another. Sakurai wonders if his master will ever forgive him for being the one to end his legacy as a merchant. A chill flows over his ears, “I suppose not, eh?”",
        "Besides the hole above, Sakurai sees the hole in the floor leading to a large river. Perhaps the wagons could be transformed into makeshift rafts, who knows what heard that explosion earlier, wherever this river leads could be safer than facing bandits or wolves in the forests above.",
        "Sakurai goes back through the portal and finds his party cowering inside a wagon circle with their weapons ready. It seems the shaking mountain got to them. “Master! Everyone Master is back!” Sakurai quickly explains what just happened and relieves the group’s stress, any disbelief vanishing when they see the devastation of the laboratory.",
        '"You\'re in charge, Caravan Master. Which way do we go? Up? Or down?" Bard asks.'
      ],
      decisions: [
        { label: "Climb out of Mountain", storyNode: "climb_out" },
        { label: "Investigate Hole", storyNode: "investigate_hole" }
      ]
    },
    call_off_bard: {
      text: [
        "“Bard! Stop!”",
        "“He wants to kill your boy! He hurt Mai! Enough!”",
        "“Is this what Mai would want?! She is watching you!”",
        "“Mai?” he says, letting go of Tim who crumples down beside his cauldron.",
        "“D-Don’t do it.” Mai says with a broken and pained voice.",
        "“Go to her. Gamon, I’ll be ok, now go. Go help the rest.”",
        'As Gamon tends to the wounded, Sakurai takes the time to confirm Tim\'s unconsciousness and takes the gate scroll from his robes. "This is it; this is salvation. The fool wizard could have left anytime, his apprentice didn’t need to trap him, he was already captive to his own obsession," muses Sakurai before presenting the find to the jubilation of the few conscious survivors.',
        "“So then let's go!” says Bard cradling a sleeping Mai.",
        "“What about the wizard, Master?”",
        "“The Capital is always paying well for captured wizards and valuable information; we could bring him with us and sell him.” Sakurai says.",
        "Bard moves a hair out of Mai’s bloody and tired face. “I vote leave him, make this place his prison.”",
        "“Master, we’re going to need the money.”",
        "“Sometimes the wizards escape Gamon, we’ll be in trouble in that event.”",
        "“We beat him once, maybe it’s worth it.” "
      ],
      decisions: [
        { label: "Leave the Wizard", storyNode: "leave_wizard" },
        { label: "Bring the Wizard", storyNode: "bring_wizard" }
      ]
    },
    cheer_on_bard: {
      text: [
        "“Bard! Do it!” Sakurai shouts.",
        "A weak yells comes from where Mai lays, “Bard, no!”",
        "With a final motion Tim’s neck tears open, and Bard tosses the lifeless body to the floor. ",
        "“Gamon, take him to Mai, she’s still alive.” ",
        'As Gamon tends to the wounded Sakurai takes the time to confirm the wizard\'s death and searches through Tim’s robes for the gate scroll. "This is it; this is salvation. The fool wizard could have left anytime, his apprentice didn’t need to trap him, he was already captive to his own obsession," muses Sakurai before presenting the find to the jubilation of the few conscious survivors.',
        "Bard holds a now sleeping Mai in his lap, her face wet from tears. He wears a face of regret, his hands cut painfully from holding the metal strings.",
        '“Good, let him rot. Can we go now? I’m done," says Bard curtly.',
        '“We can, and for what it’s worth, I’m sorry you had to do that." Sakurai says.',
        "“It’s- it's alright, I didn’t have to listen to you. It was my choice in the end,” he caresses Mai’s tired face. “I can’t make her cry ever again, we’ll go somewhere peaceful and quiet. One day, Mai. I promise.”",
        "“That sounds lovely,” says the groggy Mai. “Don’t blame yourself love. Please.” Bard takes her into a hug, and he has the most infectious teary-eyed smile Sakurai has ever seen. Everyone leaves the couple alone to gather up all the survivors and wagons for the jump."
      ],
      decisions: [
        {
          label: "Teleport to Capital",
          storyNode: "teleport_without_wizard"
        }
      ]
    },
    enter_dungeon: {
      text: [
        "“Dammit! Hold on!” With a violent lurch of the reins the horses turn a hard left into the darkness of the cavern entrance. The sounds of wagons that did not make the turn are followed by the screams of men and horses caught by the boulder and the assailants’ arrows. Sakurai is riding entirely blind, at any second the wagon could run into something and be sent flying onto the stones below. The world begins to shake and soon the entrance to the dungeon seals shut as the side of the mountain disintegrates from the boulder’s crashing. The dust fills Sakurai's lungs and he coughs desperately as feels around in the darkness for a torch. ",
        "Sakurai moves towards the sound of flint and steel clashing and the darkness is eaten away by a torch in Gamon’s hand. The whole of the cavern’s innards are stone blocks and soft moss. Sight returned to him, Bard turns to his partner and cradles her head. ",
        "“Mai! Mai! You’re going to be okay! You’re going to be okay!” He looks to Sakurai with tears in his eyes. “Help her!”",
        '“Shh. Shh. You’re too loud, you fool. I’m okay," Mai says quietly.',
        "“B-But, y-your ear. Your arm.”",
        "“I have a spare for each,” she says running her good arm’s hand through Bard's brown curly hair. “Now get these things out of me and wrap me up. A dungeon is no place to rest.” Sakurai and Bard quickly and carefully do everything they can for her arm, stopping the bleeding at the very least, but it is unclear if the limb could ever recover.",
        'Mai is not the only injured in the party, the smoky torch light reveals a crowd of a dozen, half of which are bleeding and holding injured limbs. Out of the more than ninety wagons at the Crossroads, only five have made it beneath the earth. The rest are victim to the bandits or monsters outside. If any managed to escape, they are undoubtedly running blind through the woods. Sakurai hates to consider it, and hates to feel it even more, but he cannot help feeling relieved at his luck. "If you don’t want to join those outside in death, we need to find a way out of here. Let\'s get moving," Sakurai commands. "We cannot waste our luck."'
      ],
      decisions: [{ label: "Explore Deeper", storyNode: "explore_deeper" }]
    },
    greet_campers: {
      text: [
        "“Take note Gamon, this is how strangers greet one another. Hello there! I made a mistake and have too much cheese and wine! Could anyone, help me?”",
        "“Only if you help with our pork!” says the grey-bearded caravan master.",
        "“And our potatoes!” responds a younger female master with a ring on each finger.",
        "It is not common for more than two party’s schedules to align so nicely. Just as ships come to the aid of their fellows, so must wagon drivers, although in these cases the need is a feigned surplus of food. If one offers their best supplies, others will do the same. Else the gods will punish you for your greed, as the saying goes.",
        "Sakurai's workers are eager to rest and join the feast and get to know the men and women traveling in the wagon trains, either for gambling, drinking, fighting, other activities, or all of the above. They tie up the horses, set their tents, and fires in record time, Gamon helping with arms made strong from working in the stables. Sakurai is carefully double-checking that the wagons with monster remains are secured tight in the event of any thievery when his apprentice taps his shoulder.",
        "“Master! Can I join everyone else? I’ve done all my duties.” His feet are almost shaking with excitement. The gods have been favorable and quite the revelry is breaking out with so much food and drink about. ",
        "“Go ahead, but if I catch you eating before your test, there’ll be hell to pay!”",
        "“Yes, thank you Master!”",
        "Sakurai takes a moment to lean on his wagon and look out onto the on-goings. The dining and drinking area hold the bulk of the revelers at the moment, followed by the wrestlers and card games. A burly man with a broken nose is already being dragged away by his friends in the makeshift arena. And Sakurai smiles proudly upon seeing that the first one to go broke and have to strip naked at the card tables wasn’t one of his men.   ",
        "At that moment, years of memories and a hundred caravans led come flooding in. And suddenly, Sakurai feels the weight of his years.  “If this job goes well, I’ll be promoted. No longer Caravan Master, but Guild Master. This might be my last time outside of a city,” he whispers to no one. The sound of cheering and laughing breaks the melancholy, and Sakurai feels as if there is a great voice urging him on. “Leave the wagons alone. Go and enjoy yourself.” When his feet begin to move as if on their own, the master does not resist."
      ],
      decisions: [{ label: "Join the Party", storyNode: "join_the_party" }]
    },
    let_tim_drink: {
      text: [
        "Sakurai stands motionless, his instincts warning him of something terrible. The caravan master watches the wizard place his lips to the potion brew and drink heartily. His whole body is glowing with the same magical light, sparks are dancing on his fingertips.",
        "“Ahahahaha! I can feel the energy of the universe flow through me. It is pure, limitless power! And it is mine! All mine! Soon the whole world shall know the name Tim! They shall fear it! They will worship it! I AM A GOD-” he grabs his throat. “Oh. Oh no.”",
        "Tim’s writhing and screaming is horrifying. Sakurai can smell his insides cooking, and by the gods it is clear Tim is feeling everything. His throat is so damaged soon even his screams vanish, and he is slamming his head against the cauldron as if to cave in his own skull. He fails, and in less than a minute from his drinking the potion, the wizard Tim stands dying gripping his cauldron. But, as he falls, he pulls down the iron pot he toiled over for so many years, its ghastly contents flowing over himself and the stone floor. The potion quickly melts through the floor and down into a cavern below. Suddenly, the laboratory is filled with the calm sound of a river."
      ],
      decisions: [{ label: "Investigate Hole", storyNode: "investigate_hole" }]
    },
    locate_singer: {
      text: [
        "A beautiful and older black robed woman with midnight skin and silver hair comes towards the party. “Welcome friends! Welcome! It’s been, well, never since I’ve had guests. Would you care for some tea? It’ll warm you right up.” ",
        "“Um, that would be lovely, Ms.?” Sakurai stands up and extends his hand.",
        "“Oh yes, where are my manners? I’m Melanie Nettles. Self-taught witch.”",
        "“Don’t witches y’know, cast spells on people and eat them?” Mai asks.",
        "“Oh honey, yes. Yes we do,” laughs the witch. Mai recoils and reaches for her warhammer. “Just kidding! You’ve been hearing too much royal propaganda I take it. I'm sorry, I haven't gotten to tell a joke in ages. Come now, tea time!” ",
        "The party cautiously follows the smiling woman into her house, it looks to be a mushroom, only extremely oversized. On her way to the kitchen she snaps her fingers and says a few kind words and mushroom seats rise from the floor. They are exceptionally comfortable, Gamon almost falls asleep upon contact with it. The mint tea she returns with sparkles with magic. With little options really, everyone takes a sip of the steaming tea. Upon swallowing, Sakurai can feel all the ache in his body fade away. Looking around the room he can peoples' wounds close and fade away. Even Mai’s arm full of arrow holes has recovered with only some residual soreness and bruising. \"I guess you're a good witch after all,\" smiles Sakurai."
      ],
      decisions: [{ label: "Thank the Witch", storyNode: "thank_witch" }]
    },
    order_Gamon_1: {
      text: [
        "“That’s an order,” Sakurai says with a stony face that soon cracks into a hearty laugh. ",
        '"Yes, Sir," the boy sighs.',
        "“You better do it, else when I’m dead I’ll come and haunt you.” Sakurai ruffles the boy's long black hair and he is satisfied to see the pouting boy smile and accept his fate.",
        "Sakurai never married or had a child. He never really wanted either. Yet, as the guards open the gates out of the city, the well-traveled master cannot help but wonder if this is what it feels like to be a father."
      ],
      decisions: [{ label: "Exit Town", storyNode: "exit_town" }]
    },
    order_Gamon_2: {
      text: [
        "“Aren’t you hungry? Speak!” Sakurai commands.",
        "Gamon begins strong, though his words are shaking a bit under the staring eyes of three caravan masters. Sakurai places a hand on his back, but it seems only to place further pressure on Gamon. He says the names slower and less certain until he finally lowers his head. “I-I d-don’t know, I’m sorry Master.”"
      ],
      decisions: [
        { label: "Punish Gamon", storyNode: "punish_Gamon" },
        { label: "Ease off Gamon", storyNode: "let_Gamon_pass" }
      ]
    },
    pray_strength: {
      text: [
        'Sakurai presses his palms together gently and leads Gamon in prayer. "Strength. A sound body is worthless if the Dark Lord’s forces take the kingdom, and gold will be nothing but a weight slowing us down. I have cut down wolves and bandits on my journeys. And I have barely survived a giant smashing my horses and wagon. The world is filled with danger, and so I ask a favor of you, oh good Lady of Might and War, Gruesome Guardian and World Burner. Grant us sharp steel and strong arms with true aim against our foes, to be slain in your name. Lom.”'
      ],
      decisions: [{ label: "Leave Courtyard", storyNode: "leave_courtyard" }]
    },
    take_orc_hand: {
      text: [
        "Sakurai grips the calloused hand with only fleeting strength, thankfully the orc does the rest. Sakurai and Gamon are both pulled into the boat where the master finds the rest of his party already catching their breath. FWEEEEEEET. Again the painful whistle blows. The Leviathan shuts its mouth and sits motionless in the water, as if stunned. \"That won't calm her for long! Row! Row!\" The orcs' green arms bristle with power and arrives starboard to their ship faster than anything man powered could travel.",
        "The boat is pulled up by the ship's pulleys rapidly, so much so the orcs have to hold Sakurai's party in their seats so they do not fall into the sea. Before even aboard the ship the scarred orc is shouting orders, \"Full speed north! Row you bastards row or we're dead!\" The ship moves almost like a flying fish as the orcs tear their way through the sea. Sakurai's attention is drawn from the spectacle when the Leviathan begins to move from its stupor, sending heavy waves from all around it. ",
        'To Sakurai\'s luck, his ship is just a bit faster, overtaking a fat cargo ship powered only by sails. The crew of the rowing vessel watches as the mountainous Leviathan lifts the one-hundred-meter cargo vessel of oak and iron into the air, not with its tentacles, but two bony green arms that have risen from the depths. Its captain is desperately blowing a whistle, but whatever effect such a tool held originally, has faded now. Like cracking a crab leg, the Leviathan tears the hull in two and lets the crew and cargo fall into its maw before tossing the mangled and twisted hull into the water. "ROW HARDER!" The scarred orc commands. And by the gods do they. ',
        'After a half-hour of hard rowing the orcs are nearly spent. "We\'re all clear now men! Quarter-speed now, ease off." The scarred orc walks over to help up the waterlogged witch. "You\'re damn lucky, Witch. What the devil were you doing? Why did you not call off the Leviathan? Did you lose your whistle?"',
        '"Whistle? Call off? What do you mean?" asks Melanie.',
        '"What? Every captain and sorcerer on the coast was gifted one by the Dark Lord, to deal with the Leviathan. Although clearly they need an upgrade...." The scarred orc rubs his temple tiredly. "Where the hell have you and your acolytes been?"',
        'Melanie looks over her party with confusion before realization and survival instincts take over. "Acolytes? Yes, my acolytes. We\'ve been trapped under a mountain for years now, what became of the war?"',
        'The scarred orc thumps his chest with a loud thud and smiles a great toothy smile, "We won of course! Took the Capital in one night. Killed ten humans myself!" The crew of orcs cheer in pride while the humans\' eyes go wide at the news of destruction. "The Dark Lord holds dominion over nearly all of the continent now. I have to say though, you wizards and witches are really lucky, you and your followers got pardons for being human and land grants if you swore loyalty to the Dark Lord. Congratulations!" Sakurai quietly thanks the gods that the sun has set fully now, so that the darkness can hide his horrified expression. ',
        "The evening goes on and the orcs eagerly ask the witch about her time under the mountain and the fate of her master. Thankfully for Sakurai's party, she and Bard are excellent liars and story tellers. The orcs are thoroughly entertained and they happily share a supper of fish stew, hard tack, and grog. After four years without meat and eating little but mushroom soups, for now, dinner is mostly grog. ",
        'Late in the night, the ship arrives at last at port. Attached to it is a bright and vibrant city of buildings of brutal but elegant make, as if it were carved out of a mountain by dragon fire and hammer. The sound of songs not penned by men and the smells of unknown spices waft over the orcs\' ship. Working the ports are a mixture of all kind of dark creatures doing things no human could have imagined except in jest. Merfolk are guiding ships carefully to their docks. Giants and trolls quickly load and unload cargo. Fairies are delivering messages. And over seeing it all is a red dragon perched atop an extravagant and towering red brick building, its sign reads: "The Western Trade Company".  '
      ],
      decisions: [{ label: "Leave the Ship", storyNode: "leave_ship" }]
    },
    thank_witch_2: {
      text: [
        '"I can\'t thank you enough." Sakurai takes hold of his savior\'s hands. "Can I ask your name?"',
        '"Melanie Nettles. Self-taught witch. No need to thank me, not often a hermit gets so many guests. Though I never would have thought they would show up in such bad shape. But never mind that, I can tell you more later, you just rest now." She gently pushes Sakurai back down and pulls a blanket over him that puts him to sleep once more.',
        "Sakurai awakes what he assumes is the next day. Sakurai readies himself in and takes a quick look at himself in the witch's mirror. It seems his hair has begun to grey from this ordeal. After quickly mourning his days of black hair, Sakurai looks through the witch's window and sees the rest of his companions already out and about, exploring the witch's herb and mushroom gardens. Others are stealing back up the hallway of slimes. The rest are by the river and have broken down the wagons into makeshift rafts, ready to find their way home, any way they can.",
        "In the gardens Sakurai sees Melanie showing Gamon some magic tricks, she is guiding a horde of spiders in the sewing of another silk pillow and displaying a whole rainbow of floating lights that move as if alive. The boy's eyes are alight with fascination. Sakurai wonders if he could ever make Gamon produce such a face, and he cannot suppress a bit of jealousy. Melanie notices Sakurai watching from inside and waves for him to come join them. Once outside Gamon runs over to his master grabs and excitedly describes what Melanie has been showing him.",
        'Melanie is smiling wide. "Allow me to give you a tour of my home."'
      ],
      decisions: [{ label: "Ask for the Exit", storyNode: "ask_about_exit" }]
    },
    wake_up_witch: {
      text: [
        'Sakurai awakes with soft silk pillows under his neck, his nose cold from the heavy scent of mint. He opens his eyes to see a black as night woman with silver hair and a pointed black hat toiling over her cauldron. "Stay still," she says sweetly. "You\'re all exhausted and injured. You best not move for a bit." She comes over to Sakurai with a boiling green concoction. "Here, this\'ll help." Sakurai is not sure if it is her magic or the exhaustion, but he cannot resist, and the green liquid flows into him. To the Caravan Master\'s relief, while the drink was awfully bitter, all pain quickly fades. "And don\'t you worry about your warrior woman, she\'s stable now, arm is going to be ok too, if sore for very long time."'
      ],
      decisions: [{ label: "Thank Woman", storyNode: "thank_witch_2" }]
    },
    ask_about_exit: {
      text: [
        "“Ah, that would be lovely, Ms. Nettles, truly, but do you know a way to the surface? We are hoping to be on our way to the Capital as soon as we can. We all have people waiting for us. There is even a war on, we must take shelter.”",
        '“Oh...of course. I’m terribly sorry. I just got all excited about having guests. For once." She is rubbing her hands together absently, her eyes refusing to meet with anyone else\'s. "Sorry, sorry, the way out. I know you can leave by continuing down the river, but I do not know where it exits or ends. I’ll give you what supplies I can though.” ',
        "“I could not thank you enough for your generosity. We’ll be on our way then.”",
        "Melanie finally locks eyes with Sakurai and the rest of the survivors, still nervously rubbing her hands. “But! But, if any of you wish to stay, I can think of fewer safer places than here, in a secret cavern beneath a mountain. My enchanted farms are unlimited, so long as you don’t mind mushrooms and a lack of meat. The river water is clean and fresh too. Go if you must, but I live very comfortably here.” ",
        "Four of Sakurai's party of twelve are swayed by her offer. After the dangers they have faced, and what the war may bring, one cannot blame them. In fact, the offer is undeniably tempting to Sakurai as well.  "
      ],
      decisions: [
        { label: "Stay with the Witch", storyNode: "stay_with_witch" },
        { label: "Return to the River", storyNode: "return_2_river" }
      ]
    },
    explore_deeper: {
      text: [
        "The survivors get themselves into as good a shape as possible, the wagons and horses feel like such blessings to their tired bodies. Sakurai is lucky, the survivors who arrived were those who took the armored wagons, the ones bearing monster organs. A comfortable living awaits Sakurai, provided he can still find a way to the Capital. That’s the bright side of things. On the dark side, the survivors only have so many torches and in less than six hours they'll need to start burning parts of the wagons for light. Further unfortunately, Sakurai does not recognize any of the other survivors’ faces, they are nothing but strangers. Thankfully, desperation allows for making fast friends. This sad band walks briskly but cautiously, the underground of the Valley of Ruins has been abandoned for decades, but one can never be too careful.",
        "Everyone is wielding a knife, some of which have been tied to sticks as primitive spears. Gamon holds a torch while Sakurai drives the head wagon. Bard is plucking some calming chords for his resting warrior. The sounds calm everyone's haggard breathing, and all thank him silently for it.",
        "Hours pass in the dungeon, passing by countless empty and looted rooms littered with human and monster skeletons. The long spines of snake men. Skulls of giants. And piles of goblins and orcs with clear evidence of brain and spinal fluid extraction. ",
        "As the last torch burns out the survivors are forced to start lighting torn off planks of the wagons. The light is weak, but enough. After what must be a full day of slow riding with little water and less food, the party has slowed dramatically. In time though, they reach a wall with a splitting hallway. ",
        "Now they face a decision that could be everyone's salvation or ultimate doom. Left? Or right?"
      ],
      decisions: [
        { label: "Go Left", storyNode: "go_left" },
        { label: "Go Right", storyNode: "go_right" }
      ]
    },
    join_the_party: {
      text: [
        "First things first, a belly full of hot food and cool wine. Sakurai cuts to the front of the line, as is his right, and he is immediately handed a piping hot bowl of thick and rich stew. Large chunks of pork, potatoes, onions, and leeks float in the rich vegetable soup. A chunk of bread sits inside and a layer of cheese on top is quickly melting. The barrels of wine are strewn about the camp ground, beside them baskets full of cups and jugs. Sakurai makes sure to serve himself a generous cup. With dinner acquired Sakurai takes a seat at the largest fire and those also enjoying a fine meal in a makeshift outdoor public house.",
        "Near the fire, a bard in puffy purple clothes is singing a drinking song Sakurai hasn’t heard sung since he was a novice porter. Back then, his body ached from carrying loads for days. In those times sometimes a good drink and song was the only thing that kept him going. ",
        "Sakurai begins to think back to the promotion waiting for him, but first chooses to lose himself in the food and a bit of nostalgia. With the food sticking to Sakurai's ribs, he breathes a contented sigh. And the wine is sweet as candy. When he is done he closes his eyes and ruminates on the taste of spicy potatoes with just a bit too much pepper. Next, he lets the bard’s strings and voice flow take control. It is a lively but soothing song about coming home. It takes Sakurai into a sea of memories of family and old friends long past that leaves his eyes a bit wetter. When the bard's song is done Sakurai walks up to him and tosses a few gold coins into his purple hat. \"Credit where credit is due.\"",
        "“Thank you for your patronage!” The bard says giving a deep bow before looking out to the audience. “Now what of you, you cheapskates! Another?!”",
        "“Another!” the crowd yells back. Some throw silver and copper coins while other toss cups and spoons which the bard deftly dodges. ",
        "The master's belly is full and it is time to see what else is about. There is an impromptu wrestling tourney going on between the largest members of each caravan. One could swear the earth is shaking. And on a board set up by a fire are the two other caravan masters playing a game of cards, surrounded by piles of gold coins and jewelry being gambled on and a crowd eager to see who comes out on top."
      ],
      decisions: [
        { label: "Watch the Wrestlers", storyNode: "watch_the_wrestlers" },
        { label: "Join the Gamblers", storyNode: "join_the_gamblers" }
      ]
    },
    let_Gamon_pass: {
      text: [
        "Sakurai cannot bring himself to punish the boy. He wonders if even he would have been able to do what Gamon was ordered to at his young age, especially under the focused stares of many. “Just tell it to me tomorrow. This is a special night, but do not expect me to be so forgiving in the future. Now go get some stew and bread and join us.”",
        "“Yes, Master! Right away!” smiles the boy running off to the chow line. Bard follows after him, whispering something in his ear that makes the boy laugh loudly. ",
        "“Kind of you. Letting him off.” Mai says.",
        "“A good master knows when to be generous to their apprentice. He was practicing all day too; the boy is trying,” responds Sakurai.",
        "“How’d you find him?” asks Mai after a sip of wine.",
        "“Word was spreading of someone breaking into homes and storehouses stealing food, my men caught him one night and they were going to take him to the city watch. But the boy was so haggard you see. Better to make him into an extra pair of hands than rat food. A few years later, and here we are.” ",
        "Mai nods along to Sakurai's story and smiles fondly at Gamon when he and Bard return. “We’re back. Mai, tell our new friends the story of how we escaped the rabid minotaur beneath our village. Trust me everyone, it’s a riot.”",
        "“No, it's not! We almost died Bard!”",
        "“Ah, but we didn’t! C’mon now, go on. A bard rarely gets to eat to a story.” He is already eating mouthfuls when he sits down beside and leans on the deadly woman.",
        '"What a sight," Sakurai thinks. In the end, the story begins to be told and it does quickly get laughs, much to its teller’s bemusement. At the climax of the story and the pair’s final escape a whistling sound cuts through the air and the next thing Sakurai notices is an arrow tearing off Mai\'s ear and another burrowing into her shoulder. In the same moment Sakurai sees the masters Gogol and Ennis fall from their seats, arrows in their backs. They look like macabre pin cushions.',
        '"Mai?" Bard whispers.'
      ],
      decisions: [{ label: "Take Cover!", storyNode: "take_cover" }]
    },
    listen_to_song: {
      text: [
        "The voice is distant, but its sullen sweetness is almost addictive. As the rafts go deeper through the tunnel the voice grows in strength, echoing and dancing off the walls until its words and female voice can be discerned.",
        {
          formatting: ["poem"],
          words: "“There is something in the sea”"
        },
        {
          formatting: ["poem"],
          words: "“From the deep or the cove?”"
        },
        {
          formatting: ["poem"],
          words: "“Larger than the greatest tree”"
        },
        {
          formatting: ["poem"],
          words: "“Swifter than a dove”"
        },
        {
          formatting: ["poem"],
          words: "“The Leviathan cometh, and it comes for thee”"
        },
        "“I know this song!” says Bard. “It’s a sailor shanty, a fun one! I think!”",
        '“You think?!” Sakurai shouts before taking a moment to think. “Okay, just sing! I’m damn tired of this water!” He says retching once more. "I hope this person is kinder than the    wizard," Sakurai thinks. Bard readies his lyre and takes a deep breath.',
        {
          formatting: ["poem"],
          words: "“There is something in the sea”"
        },
        {
          formatting: ["poem"],
          words: "“What do you see Captain?”"
        },
        {
          formatting: ["poem"],
          words: "“A beast that should not be!”"
        },
        {
          formatting: ["poem"],
          words: "“Ready the Cannon!”"
        },
        "The beautiful voice calls back in response to the song, a new energy injected into her previously sullen voice.",
        {
          formatting: ["poem"],
          words: "“Oh, there is something in the sea”"
        },
        {
          formatting: ["poem"],
          words: "“Ready Men!”"
        },
        {
          formatting: ["poem"],
          words:
            "“A hundred arms, a thousand eyes, a thing that should not be!”"
        },
        {
          formatting: ["poem"],
          words: "“Fire!”"
        },
        "It is now the bard’s turn once again. “Come on now, clap along everyone!” Some do, most look at Bard as if he's gone mad.",
        {
          formatting: ["poem"],
          words: "“Oh, there is something in the sea”"
        },
        {
          formatting: ["poem"],
          words: "“Is it dead? Is it alive?”"
        },
        {
          formatting: ["poem"],
          words: "“Who cares, let us flee!”"
        },
        {
          formatting: ["poem"],
          words: "“Before the Leviathan can arrive!”"
        },
        "The two singers now mix their voices and sing together. Sakurai can almost hear the crashing of waves, booming cannons, and panicked men.",
        {
          formatting: ["poem"],
          words: "“Oh, there is something in the sea”"
        },
        {
          formatting: ["poem"],
          words: "“Oh, gods the ship is swallowed”"
        },
        {
          formatting: ["poem"],
          words: "“Now we are in the maw”"
        },
        {
          formatting: ["poem"],
          words: "“Now we are lost”"
        },
        {
          formatting: ["poem"],
          words: "“There is something in the sea!”"
        },
        {
          formatting: ["poem"],
          words: "“A thing that should not be!”"
        },
        {
          formatting: ["poem"],
          words: "“There is something crawling inside me!”"
        },
        {
          formatting: ["poem"],
          words: "“Oh, gods help us!”"
        },
        "Bard does a final strumming of his lyre before replying, “Haha! Thank you for the song friend! Are you on dry land? My companions and I are in great need of a reprieve!” There is no vocal response, but a large flame shines in the darkness illuminating the makings of a small wooden dock. The rafts quickly make for it and after securing themselves, everyone takes a much-needed rest on the blissfully still stone floor."
      ],
      decisions: [{ label: "Locate Singer", storyNode: "locate_singer" }]
    },
    refuse_service: {
      text: [
        "Sakurai will not be a servant to an evil lord. It is not a fate he would wish for Gamon either. Sakurai spits before the wizard and smiles defiantly. The now condemned master hopes the boy will forgive him for having them die free. ",
        'The red wizard sighs deeply. "Very well. Guards, take the apprentice for questioning." Sakurai\'s smile shatters in horror as Gamon calls for him, but there is no more time. The Caravan Master is engulfed in dragon fire and that is the end their story.',
        "The End"
      ],
      final: true
    },
    return_2_river: {
      text: [
        "“I am truly thankful for your kindness, and it will not be forgotten. But we will be leaving after we have rested.” The witch nods her head understandingly but disappointed as she leads the party to her storehouse.",
        "Hours pass as weeks of food, water, and medicine are loaded onto the rafts. As a sign of friendship, Sakurai leaves with the witch a few chests of monster organs. They will be invaluable to her research, and it does not hurt to keep oneself on good terms with a witch. Sakurai logs it away in his mind as a worthwhile investment as he and Mai finish placing the chests in the witch's home. Once everyone leaving has eaten their fill of mushroom soup they begin boarding their rafts. In the end, four survivors choose to stay with the witch and will try to live peacefully beneath the earth. All part ways wishing the others only the best. ",
        "“Gamon? Set us off,” orders Sakurai."
      ],
      decisions: [{ label: "Order Gamon", storyNode: "order_Gamon_river" }]
    },
    ask_exit_wizard: {
      text: [
        'Sakurai continues to stir the potion. "So, um, Tim?"',
        'Tim is still pouring over table after table, shelf after shelf filled with fangs, horns, and piles of desiccated limbs. Tossing anything clearly not useful to the floor. "Yes my good friend?"',
        '"You wouldn\'t know a way out of here would you? The front entrance is completely caved in."',
        "\"Truly? Oh well, no matter, I can draw up a gate scroll for you in just a moment. Anywhere in particular you want to go? I can teleport you to any place you've been before.\" He pulls a blank scroll from a pile of them on a shelf and begins penning the spell with what seems to be some creature's blue spinal fluid for ink.",
        '"The Capital would be perfect, but is it really that easy?"',
        "\"The Capital, oh wonderful. I was going to head there myself after I was finished here. Oh, and it is indeed not that easy to make a gate scroll for everyone, but for a Dungeon Master? It's nothing, always need to have an emergency exit available when you're a wizard you know. Never know when some pesky adventurers will come in trying to kill you.\" He slides the scroll inside his robe before leaning on a table and sighing. \"It's a stupid question, but you wouldn’t happen to have any essence of mimic on you, would you? It's the last material I need, and it would seem I've run out, oh but wait a moment. Outside the portal, did you find a mimic outside, possibly starved to death?”",
        "“Oh um, actually, we did run into a mimic outside. It’s...dead. I can go get a piece for you, if you want?” ",
        "“Oh, so Mimmy is dead? Poor girl, why did she wait for me all this time?” Tim covers his face at the news.",
        "“Mimmy the Mimic?” ",
        "“Yes, charming no?” ",
        "“...Quite. I’ll go get some for you now” Sakurai says handing back Tim his stirring stick."
      ],
      decisions: [
        {
          label: "Bring Back Cooked Mimic",
          requires: ["cooked_mimic"],
          storyNode: "bring_back_cooked_mimic"
        },
        {
          label: "Bring Back Mimic Remains",
          requires: ["uncooked_mimic"],
          storyNode: "bring_back_mimic_remains"
        }
      ]
    },
    ask_for_release: {
      text: [
        'The ancient looking red wizard is mounting his emerald dragon once more when Sakurai calls out. "My lord Wizard, I have assisted in delivering a wanted madman to you. Have I proven myself fully?"',
        '"When the war is won, your worth will be known. For now, we are to head to the Capital, we will need those literate in writing and logistics to process the plunder." ',
        '"I\'m sorry sir, plunder?" Says Sakurai with wide-eyes.',
        '"I\'ve just received word the Capital was taken during our rescue operation. It seems no one was spared, and the officers are in need of literates and money counters. Tell your companions we have further use of them. And hurry up, I will not have us be late." Without even time to process the news Sakurai, Mai, Bard, and Gamon climb atop the dragon.',
        "A day later, the group is walking through the razed Capital. Sakurai wonders if he could have ever dreamed he would arrive in a city one day, not leading a wagon train, but by dragon. That he would not be counting his own gold but walking through the royal vault doors, melted by dragon fire, to collect the gold and documents in the king's coffers. Sakurai struggles to discern whether this predicament is a nightmare or a dream.",
        "Sakurai's next days are spent reading through hundreds of scrolls, looking for information on the most productive towns, military assets, and other royal secrets. All the while his friends are busy counting and organizing all the gold and treasures in the coffers. Never could the master have thought he would fall into dark servitude. Even less likely could he have conceived that it would not be so terrible, a bit mind numbing yes, but not dangerous. On the fourth day of counting and the delivery of useful information, the red wizard returns. He comes holding a scroll bearing the black and white stamp of the Dark lord. Contained inside is a pardon and deed to a farm on the outskirts of the Capital.",
        '"The Dark Lord gives credit where it is due. Thank you for your collaboration." The red wizard then lets out a long sigh unbecoming of his stern personality thus far. "I suppose there\'s no need to be hard on you now, being pardoned and all. Any of you want to get a drink? I\'m buying." ',
        'Sakurai looks on at the red wizard, his face contorting with confusion at the offer before finally sighing and accepting his strange fate. He waves over to his equally surprised friends and they all begin following the wizard out of the vault. "That sounds wonderful," chuckles Sakurai lightly.',
        "The End"
      ],
      final: true
    },
    become_colonist: {
      text: [
        '"Allow me to accompany you, strength in numbers, no?"',
        '"Aha! Welcome, Master! Good to have you." Bard says slapping Sakurai\'s shoulder.',
        '"I\'m not really a Master, now am I? Sakurai will do just fine now." Bard nods his head with an understanding smile.',
        "Two days later and the first colonization of the Unknown Lands leaves the Capital. Sakurai's little party is situated in the back of the wagon train, dead last in a line of some two-hundred wagons. The only cargo the red wagon carries now is more people than any conception of over-capacity could deem reasonable. Some people are even riding atop the wagon. Thankfully two more horses owned by other travelers have been added to help drag along the overcrowded mess. Even in the driver's seat Sakurai and Gamon are forced to sit shoulder to shoulder with people of similarly desperate situations. Those who could not fit are left to walk barefoot along the open wilderness, eagerly waiting to replace anyone who can't take the shaking anymore or anyone who happens to fall off the roof. Needless to say, everyone is complaining, nauseous, and mildly murderous. Especially the injured Mai who is riding in the back. \"Bard!\" Sakurai yells. ",
        '"Yeah?! What is it?!" Bard shouts from atop the wagon.',
        "\"Sing us a song, will you?! It's going to be a long journey! Preferably, something lucky, we'll need it!\"",
        '"You got it!" His song is a strange one about a ship falling victim to a monstrous leviathan in the sea. Its lyrics are brutal but spoken merrily. A song of destruction to bring good luck. Sakurai laughs at the irony as he looks over and sees Gamon already somehow sleep from the rocking of the wagon. As Sakurai looks ahead at the river of wagons and families with music in the air, he cannot help but feel like everything is going to be alright.',
        "The End."
      ],
      final: true
    },
    become_smuggler: {
      text: [
        "Sakurai looks at the boy at his side and thinks, \"I have little choice in the matter here.\" It should only be a week round-trip from what the smugglers say. Sakurai is made to leave that same day and his precious red wagon is painted funeral black. Sakurai and Gamon are not told what they will be smuggling, simply that they will travel together dressed as coroners. The goods are wrapped inside thrice layered sheets, they are tied up in the form of human corpses. \"No guard or tax collector should dare to disturb the 'bodies' of soldiers being returned home\" was the smugglers' reasoning for this method. Two smugglers with short swords ride with the 'bodies' to make sure all goes smoothly. It seems the smugglers' faces are too well known among the city watch and they needed a reliable person to make the delivery for them.",
        "Sakurai tries not to think how low he has fallen, being reduced to such deceptions. Any other wagons he passes by almost go off the road to avoid drawing near a cart full of 'dead men'. The ruse works perfectly, and soon the wagon enters a western town on a high hill. After delivering the goods to the morgue one guard enters as another makes sure there is no alerting of the authorities. When the other guard returns, they hand Sakurai a sizable bag of gold and invite him for a drink at a tavern. Sakurai almost feels ready to accept and get to know the surprisingly professional smugglers when he sees a great pillar of black smoke in the distance.",
        "From atop the town's high hill the denizens can see that the Capital has been sacked, utterly sacked. Its walls reduced to rubble. Sakurai thinks of how he could have been inside there, a beggar on the streets, without any allies or protection. The thought gives him chills. Lost in his thoughts, Sakurai almost fails to feel a realization tear through the town as panic erupts and everyone turns to flee. From the black smoke towers come dragons flying in formation to the West and South. They move so fast the sound of thunder comes races after them and the air visibly warps.",
        "But before anyone can even reach the gates, the town is surrounded by dragon fire. With nowhere to run, all one can do is wait until an army of orcs comes to take everyone prisoner. When Sakurai and Gamon are led away in chains, the fallen master wonders if he made a wrong choice, if he prayed to the wrong god. ",
        "The End."
      ],
      final: true
    },
    leave_courtyard: {
      text: [
        "Satisfied with his prayer, Sakurai leads the way to the head wagon. It is an elegant red to make it easy to follow. Sakurai climbs onto the high seat and pulls Gamon up to it. And with a flick of the reins the Second Autumn Caravan of the Southern Trade Guild is off north. “Onward!” Sakurai shouts at the top of his lungs, turning many a head of passerby and guild workers, regardless that many of them have heard the exclamation before.",
        "“You always say that when you head off, Master. Isn't it a bit flashy?\" ",
        "“Perhaps,” he lightheartedly chuckles. “It’s what my Master used to say, did you see all the eyes on me? Consider it good self-advertising. Be sure to pass it on yourself”.",
        '“Truly Master?" Gamon offers up the pouting face of a child who knows they cannot win, as is fitting for his youth.'
      ],
      decisions: [{ label: "Order Gamon", storyNode: "order_Gamon_1" }]
    },
    serve_dark_lord: {
      text: [
        'Sakurai holds more than one life in his hands. A life that cannot be betrayed. "I will serve, just let the boy stay with me. Please." The red wizard nods his head and then and there Sakurai tells him everything that has been endured thus far. ',
        "That same day Sakurai is leading the wizard and a unit of armored orcs back into the dungeon to root out and loot whatever monsters or secrets are still hidden inside. The wizard's magic has frozen the river solid and makes for easy walking. In time Sakurai returns to where he made his fateful decision and find a wall broken down. Through the hole, the remainder of Sakurai's party is found. They are caught eating dinner with a witch in a great mushroom house. The thought that such comforts were so near makes his heart ache. Mai goes to grab her hammer, but at the sight of an armored orc with a sword to Gamon's neck, she surrenders.",
        "It takes close to a week to clear the dungeon room by room. Again and again the orcs break down hundreds of secret doors leading to experimentation chambers and prisons cells full of monsters. The red wizard frees countless dark beings left to starve and consume each other in the dark. Families of goblins in cages. Horse-sized spiders chained to walls. Vampires feeding off one another. The red wizard looks all of them with a look of pity and seems them cared for.",
        "One of the final rooms discovered is the Dungeon Master's laboratory. It appears the dungeon was so decrepit because he was trapped inside his lab by his own apprentice, endlessly stirring some potion. The wizard is promptly arrested for his experimentation on and imprisonment of monsters. Upon exiting the dungeon, Sakurai wonders just how much more he will have to do."
      ],
      decisions: [
        {
          label: "Ask if Service is Fulfilled",
          storyNode: "ask_for_release"
        }
      ]
    },
    stay_with_witch: {
      text: [
        'Sakurai begins to wonder if there is any kind of life waiting for him outside this dungeon. A ruined reputation. A Dark Lord rising. The world is changing, and a single person does not really have a say in what direction that change goes. It will do no harm to wait for the future and see what fruit it bears from a well-stocked bunker. This witch feels kind and true. Sakurai looks to his side and sees a boy holding his hand, looking up him like the parent he never had. "This is what is best for the boy," thinks Sakurai resolutely. “I accept your offer. Gamon, we’ll be safe here.”',
        "When Sakurai decides to stay, another three survivors decide to follow the master's lead. “Mai? Bard? Where will you go?”",
        "“Our strength is in our numbers, but now that most of everyone is staying, I don’t think we have much of a choice now. Bard, we’re staying.” All the rest but two decide to stay, the pair that leave say they are unwilling to make deals with a witch, no matter how kind she may seem. They drift off into the wet darkness with new supplies and all the best wishes those staying can offer. ",
        "The next four years are quiet. Melanie offers to teach what magic she can to all who are interested, but no one appears to have the aptitude or flexibility of mind to learn. None but Gamon. By his fifteenth birthday, Sakurai and the witch have become joint masters to Gamon. Her teaching him power and medicine, Sakurai telling him of history and business. The boy is growing tall and strong while Sakurai's hair has long turned grey. Only Sakurai, the boy, Mai, and Bard have remained the full four years. Life underground was too much for all the rest, eating nothing but plants and fungus. Away from many familiar comforts, they trickled away gradually. Only one raft remains on the docks and the time for it too to head on has come.",
        "Neither Sakurai, Mai, or Bard wish to die under a mountain, and it is no place for a boy to live. And so, farewells have been said and the last raft is being loaded with a month of supplies. Melanie gives Gamon a kiss on the cheek and a long hug before letting him go at last. His shoulders grow broader every day, barely hidden by his black robes. The boy wields a small staff now to channel his power, never did Sakurai think he would be raising a young warlock. “I’ll message you through the crystal ball, just like you taught me. I promise. Farewell.” Gamon says to the witch.",
        "On the raft Mai and Bard are securing the last of the supplies. Most of the monster remains Sakurai brought have either rotted away or were used in Gamon’s training. Now all that’s left is one chest of teeth and bones. Still worth a bit of money, if there are any buyers still around. “How things change,” Sakurai muses peacefully. Over the last years Sakurai has come to let go of his mercantile past, ready to live however he needs to. In the same time Mai has let her hair grow out long, she looks like the goddess of strength herself now. Bard has let his own facial hair grow out now, a puffy brown beard for which none not have the heart to tell him it does not suit him. ",
        "Gamon sets foot on the raft as soon as all is set and ready. “Do you remember what to say Gamon?” Sakurai asks.",
        "“Of course, Master.” The boy takes in a deep breath for a great shout. “Onw-”",
        "“Wait for me you fools!” yells Melanie from behind. She is carrying a barely closed suitcase and holding her pointed hat to her head. “I swear I will burn you all if you leave me!” she yells before leaping onto the shaking raft. "
      ],
      decisions: [{ label: "Head Off", storyNode: "head_off" }]
    },
    use_dungeon_key: {
      text: [
        'Sakurai takes the key from Mai and leads the way into the mimic’s room. With over a dozen sets of eyes the room is scanned quickly for a clue as to how to use it. In the far wall a small hole in the blocks is found. It is just perfect for the key. Everyone, even Gamon, stands ready with their weapons as Sakurai puts the key inside, but before he can twist it, the metal begins to glow red hot and a blinding light envelopes everything in the room. When Sakurai can bear to open his eyes, he finds something most dazzling. Reaching to the ceiling stands a portal glowing with purple energy. Gamon swears he can hear a warbling voice coming from the other side, "It sounds like yells for help."'
      ],
      decisions: [{ label: "Enter the Portal", storyNode: "enter_the_portal" }]
    },
    use_luck_gamble: {
      text: [
        "Sakurai gambles like a man possessed. The right cards are always in his hands, so often that the other masters demand to see inside Sakurai's sleeves for hidden cards or contraptions, but there is nothing to be found. They concede that it seems luck is just not with them tonight. And so Sakurai takes their leave, although it is more like being shooed off by somewhat bitter and much poorer sore losers. \"Lord Luck, thank you dearly.\" Sakurai has a fair bit of difficulty cramming all of his newly won gold, jewelry, and spices into his previously rather sparse private strongbox, but by the gods he does it. Afterwards, as is tradition when blessed with luck, Sakurai throws a good portion of his winnings down the road he came from. It's a pleasant sound, a handful of coins clinking off the stones. This ritual is a sort of paying forward of luck, to be shared with some random fellow or fellows. A bit of charity to ward off greed and practice humble living. Although in this case it's this charity that makes all his winnings finally fit in his strongbox. When Sakurai is finished and returns from the edge of camp he sees the bard from earlier combing the black hair of a tall and armored female adventurer. Sakurai grabs a half-full jug of wine from a sleeping man and heads towards the pair."
      ],
      decisions: [
        { label: "Join Pair by Fire", storyNode: "join_pair_by_fire" }
      ]
    },
    enter_the_portal: {
      text: [
        "“I’ll go ahead and see if it’s safe. If I’m not back in half an hour, go on without me,” Sakurai says resolutely.",
        "“Master, no!” the boy protests.",
        "“I can’t lead you into a trap, what kind of leader would I be? I need to do this alone,” Sakurai says gently.",
        "The boy lets go of Sakurai's arm and sadly nods his head. For his sake, and the others’, the master plunges into the portal.  ",
        "The room Sakurai enters is vast, with rows and rows of tables covered with beakers and flasks filled with a rainbow of colors and the remains of creatures the master can hardly comprehend. This place is a grand laboratory, and in the center stands a man in star dotted black robes, his hands stirring a rod inside the great black cauldron before him, noxious fumes pouring from its boiling black surface. ",
        "“Help! He- oh thank the gods, at long last! My savior!” says the old and severely thin robed man. ",
        "“Who are you? What is this place?” ",
        "“I’m the master of this dungeon, Tim. Now, come here and stir this potion for me, would you? I need to grab something to finish it.”",
        "A Dungeon Master. A powerful wizard. Sakurai does not dare defy this man who holds his fate in his hands. Taking hold of the stirring rod Sakurai has to hold his breath to keep from retching from the fumes. ",
        "“Whatever you do, don’t stop stirring. It may explode. Or collapse in like a dying star, possibly. Or I guess it may do nothing too. Well, whatever, just don’t stop stirring!” says the wizard as he frantically searches through the lab tables and shelves.",
        "“Um, Dungeon Master-”",
        "“Oh, call me Tim, please.”",
        "“Tim, you called me your 'savior'? Were you trapped in here?” Sakurai asks, continuing to stir.",
        '“I was! Thank you again, truly. My damn apprentice took my key while I was occupied and then she locked me in here, she knew I needed two sets of hands to finish this potion."'
      ],
      decisions: [{ label: "Ask about Exit", storyNode: "ask_exit_wizard" }]
    },
    investigate_hole: {
      text: [
        "A survivor uses some rope to lower a torch found in the lab down into the hole to see what is within. It illuminates waters moving about as fast as a normal creek, a heavy rock tied to another rope reveals the water is some eight meters deep, with just enough room from water to ceiling for even Mai to stand atop the water. ",
        "With the possibility of escape at hand the caravan quickly dismantle the wagons into a few sets of rafts. Luckily, the waterproofing of Sakurai's wagons helps the rafts float well enough to support all of the survivors and even some of the goods within the wagons. But it is clear the horses would be too much. Unable to put them down, the horses are instead sent off deeper into the dungeon, perhaps they will find their own way out. It pains Sakurai to do so, having helped raise some of them since they were foal, but it cannot be helped. Sakurai says a quick prayer for the horses and finally descends into the river. Once aboard, the crews sever their tethers to the surface and flow into the dark.",
        "Most of the caravan is unaccustomed to traveling by sea. The relentless shifting and inability to stop is disturbing, thankfully the survivors have taken to dragging some longer wooden planks along the river tunnel’s walls to slow and direct the rafts even a bit. The weak torches of burning wooden planks illuminate little in front of the rafts, acting more like guides to the other rafts than anything. “How is everyone holding up?!” Sakurai yells over the splashing waters.",
        "Bard has just finished retching when he responds, “Absolutely lovely! Truly! Not like I don’t know how to swim or anything!” He is holding tightly onto the calm Mai who is diligently directing their raft. ",
        "“We’re doing fine!” Mai waves back in the dim light. The rest say mostly the same, a few more retching from sea sickness. Silence returns to the group as minutes pass into hours. As the journey continues, it becomes hard to tell time anymore. In the silence Sakurai can feel something dancing off the wet stone walls, it is a song."
      ],
      decisions: [{ label: "Listen to the Song", storyNode: "listen_to_song" }]
    },
    talk_to_odd_pair: {
      text: [
        "“How do you two know each other? Where are you headed?” Sakurai asks.",
        "“We grew up together in a town to the west. But, it’s right on the border now. We’re hoping to join the colonists gathering in the Capital and then head east.”",
        "“Why flee? You look plenty capable,” Sakurai asks. The woman is some two heads taller than Sakurai and looks more than capable of crushing an orc's skull in her hands. ",
        "I would stay and fight,” she says showing her spiked warhammer. “But this one here couldn’t fight a child.”",
        "“Oh yes I can!” says the bard pointing accusingly at his companion. ",
        "“You’re proud that you can...beat a child?” Sakurai questions.",
        "“Any time any place!” he crosses his arms in an odd sort of pride.",
        "“Honey, no,” the adventurer bemoans. Sakurai feels relaxed with these two and pours them more wine.",
        "“Forgive me, but I haven’t caught your names. I am Sakurai, and the boy there is my apprentice, Gamon.” ",
        "“Ah, well met. I’m Mai Lee. I work security mostly, but I've taken some goblin and snake-men contracts in the past.”",
        "“And I am Bartholomew Barthelme Barddock the Third, my voice can soothe any beast or man or rather tall and armored maiden.”",
        "“I just call him Bard,” says Mai Lee as she quietly throttles her partner.",
        "“Bard it is then,” Sakurai says while Gamon chuckles at the couple.",
        "“Shall I play another song while you two and my Mai swap stories?”",
        "“Please,” Sakurai requests.",
        "As Sakurai sits by a warm fire with new friends, grand stories, and beautiful music, he wonders if this is what it is like to be a king. Then the arrows strike. The first takes Mai’s ear. The second lodges in her shoulder and knocks her to the ground.",
        "Bard freezes, gripping his lyre. “Mai?” "
      ],
      decisions: [{ label: "Take Cover!", storyNode: "take_cover" }]
    },
    visit_the_shrine: {
      text: [
        "Sitting outside the guild house are the three gods Sakurai's guild and most others revere. The God of Health, the Goddess of Strength, and the God of Luck. Before each journey merchants pray to one seeking their favor in return for service. Sakurai wonders which blessing he should request."
      ],
      decisions: [
        {
          label: "Pray for Health",
          consequences: ["blessing_of_health"],
          storyNode: "pray_health"
        },
        {
          label: "Pray for Strength",
          consequences: ["blessing_of_strength"],
          storyNode: "pray_strength"
        },
        {
          label: "Pray for Luck",
          consequences: ["blessing_of_luck"],
          storyNode: "pray_luck"
        }
      ]
    },
    "don’t_eat_mimic": {
      text: [
        "“We are not going to eat a monster like a pack of wild dogs. Help me find where this key goes so we can leave.”",
        "With so many eyes to help, it is quick work. A tiny carved hole in one of the far wall’s stone fits the key perfectly. Sakurai places it inside, but before he can twist it the key turns painfully hot. With a flash of light a grand portal of purple energy emerges. ",
        '“Beautiful,” Gamon absently whispers. “Is that?" Gamon quiets as walks over to lean his ear near the portal. “I can hear someone; I think they need help!”'
      ],
      decisions: [{ label: "Enter the Portal", storyNode: "enter_the_portal" }]
    },
    flee_to_new_lands: {
      text: [
        'Who would wish to live in a city that faces imminent attack by wizards, ogres, trolls, werewolves, and dragons? Even if the city survives, Sakurai and whatever properties one may buy, may not. It is not living to sit praying a fireball does not crash down on you. Or begging countless gods that the steel doors stay strong. "It is always better to entrust your fate to yourself, and the best wagon and horses you can buy," Sakurai thinks.',
        "“Thank you, Mai, Bard, but I like the sound of a place to start over that is very, very far from here. Take what you need and buy yourself an inn. Live well and long. Farewell.”",
        "“Thank you, my friend. Farewell, Caravan Master and little Gamon, best of luck to you.” Says Mai as master and apprentice gently hug her. ",
        "“And avoid any dungeons!” laughs Bard as he turns to his companion “Now to find a place to stay. Up this absurdly high hill...carrying a loaded cart…”",
        '“Sing me a song, it’ll make it go faster. I’ll be right behind you," lightly laughs Mai.',
        "“Oh hells. Yes, my love.” ",
        "Sakurai spends the next few days using the rest of his still substantial funds procuring supplies and using his last remaining personal favors to gain a minor command position in the exodus. It is not much, but it's better than sitting at the end of the train with all the stragglers and most desperate. Sakurai and Gamon climb aboard their now renovated armored wagon in new and tailored lightly armored clothes. They even have shortswords on their hips. The head of the train has begun marching forth and it is time to begin a new life and face whatever it may hold.",
        "“Remember the words, Gamon?” asks Sakurai, reins in hand.",
        "“Of course, Master. Onward!”",
        "The End"
      ],
      final: true
    },
    join_pair_by_fire: {
      text: [
        "“Care if I join you?” Sakurai asks.",
        "“Do you have wine?” the bard responds.",
        "“Have some manners!” the female adventurer says nudging his side.",
        "“Do you?” he says again and is met with being shoved off his stump.",
        "“Of course.”",
        "“Glory to the gods, I’m parched,” the bards says.",
        "The adventurer just sighs and extends her cup which Sakurai happily fills. When finished pouring Gamon comes up to the fire. His stomach is audibly growling. ",
        "“Master, I have it memorized.”",
        "“Alright, show me.”",
        "“I-In front of everyone?”",
        "“I can hear your stomach. Come now, speak.”",
        "He speaks with the shaking and breaking voice of a young boy, but he holds himself steady and recites all the dozens of roads and landmarks in order. It was a tough order to accomplish after only listening to them over the last few days. Sakurai puts this hand on the boy's shoulder with a look of pride, it took him three hungry nights to get it right at his age."
      ],
      decisions: [
        { label: "Hug Gamon", storyNode: "hug_him" },
        { label: "Rub His Head", storyNode: "rub_his_head" }
      ]
    },
    join_the_gamblers: {
      text: [
        '"Why simply watch some roughhousing when I can partake in a game of luck and skill myself?" Sakurai waves over Gamon playing with some other children. ',
        "“Go get my things under the driver’s seat.”",
        "“Right away!”",
        "Sakurai greets the two masters staring intently at their cards. “Care to take on another challenger?”",
        "“Always happy to relieve people of their gold, friend,” the grey-bearded master says.",
        "“What are you betting?” says the younger one.",
        'Gamon places Sakurai\'s buy-in on the card table. “A cask of my favorite beer, a bag of top notch pepper, and however much this is.” Sakurai drops a moderate sack of gold coins beside his already considerable personal coin purse. "Must total out at one hundred fifty gold or so."',
        "“It’s a game!” the elder master laughs."
      ],
      decisions: [
        {
          label: "Gamble!",
          consequences: ["lost_bribe"],
          storyNode: "gamble"
        },
        {
          label: "Use Blessing of Luck",
          requires: ["blessing_of_luck"],
          consequences: ["can_bribe"],
          storyNode: "use_luck_gamble"
        }
      ]
    },
    order_Gamon_river: {
      text: [
        '"Onward!” Gamon shouts proudly. ',
        "The trip down the river is calm, the witch having gifted Sakurai a magic candle to light the way through the dark and bending tunnel. Its light is set to never go out so long as she lives. Ultimately, two days pass on the waters. At least it feels like two days. Time becomes warped in such a numbing environment. In the end, it would not be so bad a journey for the caravan, if it were not for the persistent sense of seasickness. By the end of the second day the salty taste of sea water reaches the traveler's faces. All sigh with relief at knowing they will not die beneath the earth.  ",
        "The blinding light of the tunnel’s exit is almost heavenly, it makes the blackness outside all the more striking. All around are fields of the blackest and richest soil, black trees and the greenest grass. Only one place on the continent has land like this, the Dark Lands, the lands of fertility. The Dark Lord’s domain, conquered by their insurgent army of monsters. “Humans! Humans!” shout a pair of young orcs sitting above the tunnel’s entrance. “Where did they come from?!” The female orc questions. “Call the garrison!”",
        'The rafts continue down the waters toward the open sea. "Better the ocean than monsters," Sakurai thinks. He feels confident in his choice as he watches a platoon of orcs and trolls led by snake-men sprinting toward them from out of a town in the distance. Only one hundred meters from the sea Sakurai hears drums beginning to beat. Suddenly, the rafts are moving faster and faster, as if it was being sucked down beneath the surface. And then Sakurai sees the teeth. A maw like a wound in the world has opened up at the river’s mouth and is sucking the river and the caravan\'s rafts right into it. ',
        "“LEVIATHAN!” Bard screams."
      ],
      decisions: [{ label: "Get Away!", storyNode: "get_away_leviathan" }]
    },
    use_blessing_luck: {
      text: [
        'Sakurai looks at the knights with utter contempt. "If I had the power to strike them down, I would for this ridiculous insult." In that moment Sakurai feels mysterious inspiration in his mind. "Give me a moment, Commander. I have something that may be of interest to you." The commander waves his hand as if to say, \'Hurry up\'. ',
        "Sakurai opens a crate in the wagon and feels his hands being guided by some invisible force to take a jar of undead dust and dragon bone powder and to put some of each in either hand. Following this, Sakurai walks over the mounted knight who halts his men from moving on the master. The commander is smiling, enjoying making his prey squirm. Sakurai asks him to lend an ear and the commander does so with a cocksure smile.",
        "Sakurai claps his hands together and for just a moment beside the commander's face is a tiny spire of fire that surprises Sakurai as much as the commander. Luckily, it is too small for the archers and ballistas to see, but more than enough to burn the commander who yelps and grabs his cheek. Sakurai quickly and takes advantage of the opportunity, \"You see, I was lying before. I am indeed a wizard. I am with the Dark Lord and you are going to let me enter this city unmolested, or I will suck out your soul, your mother's soul, and your horse's soul and let you all swirl around inside a pocket dimension filled with the foulest demons imaginable. And so, I will ask you only once, are we free to go?\" Sakurai speaks as if possessed, every word and inflection seems perfectly tailored to make the commander cower.",
        '"L-Let them through! They are on urgent business! Let them through now! Now I said!" the commander can barely stammer out the orders as he still holds his burnt cheek.'
      ],
      decisions: [{ label: "Enter Capital", storyNode: "enter_capital_luck" }]
    },
    enter_capital_luck: {
      text: [
        'The caravan happily enters the city without any further interference, or taxation. When the meters thick steel doors close the last thing anyone of the party can hear is the sound of men on horses running away from the city full trot. Sakurai falls to the ground breathing heavily, unable to believe the gamble paid off. "I owe you one, no twenty. God of Luck. Thank you."',
        'But that is not where the caravan\'s luck ends. It seems the Lord of Luck has greatly enjoyed watching this journey, for when Sakurai arrives to sell his goods, the value is skyrocketing higher than ever before. It is a once in a lifetime aberration of pricing. Upon selling, Sakurai is left with almost more gold than he knows what to do with. "To hell with a reputation or a promotion," he laughs helping a line of dwarves fill his wagons with bags and chests filled with gold. When the wagons are overflowing, Sakurai goes off to buy a luxury galleon and begins a week-long celebration with the caravan survivors and their families within the Capital aboard the "Luck\'s Lady". At the end of the feasting and a generous donation of a whole wagon of gold to the Church of the God of Luck, there is still more than enough funds to spare.',
        "After the last night of celebration on the Lady Luck, Sakurai and everyone else are awoken in their chambers to the smell of smoke. Looking out from the desk they see the city being set upon by the armies of the Dark Lord. The great metal gate is molten slag now and the royal forces are being pushed back to the castle only minutes into the melee as dragons and wizards raze them with fire and lightning. ",
        "It does not take long for the ship to join the others also fleeing the port. Sakurai wonders if it is wrong to be so lucky, to be able to leave behind such devastation while living in luxury. But those thoughts fade away as he looks upon everyone who was trapped in that dungeon with them. Not a single person lost their lives and they were even able to save their families by bringing them aboard this ship. Gamon is safe and sound. This caravan has suffered and done enough. Sakurai looks to the moonlit horizon and wonders what the other side of the world offers. ",
        "The End."
      ],
      final: true
    },
    get_away_leviathan: {
      text: [
        "“Paddle! Paddle or we die!” Sakurai shouts. ",
        "But it is too late. The party’s rafts are sucked into the gaping mouth from which there will be no escape. The fall down into the stomach is staggered. The boards of the rafts are bending and grinding against the monster’s throat. It is no blessing, the magic candle is illuminating the inflamed pink flesh closing in around everyone and the acid pit in the stomach below. All seems lost until a gravelly Orcish voice yells, “Out of the way!”.",
        "The caravan members looks upwards towards the voice and with only a split second to spare dodge out of the way of heavy harpoons that pierce each raft. The sudden halting of movement makes the rafts shake and twist violently leaving Sakurai holding onto the harpoon itself to not fall off. The shaking is too violent for many of the survivors and they fall into the acid below. ",
        "“Heave!” calls the voice above. Only Sakurai, Gamon, Mai, and Bard remain now.",
        "After agonizing minutes of dangling over death Sakurai's now tiny party is finally pulled to safety within some cave or crater within the Leviathan’s throat. A group of disheveled and skinny orcs look at them with eager eyes. “Please tell us there is something useful in those chests of yours, we’ve been trapped in here for months.” Sakurai tells them all they have are magic ingredients, and no knowledge on how to use them, much to the orcs’ disappointment. Regardless, they guide the party to their makeshift camp within the Leviathan's body. It seems desperation makes strange bedfellows, as not one questions or antagonizes anyone for being human or orc. All seem happy enough to see new non-hostile faces.  ",
        "Months pass inside the Leviathan. Sakurai can now say that he is at least somewhat accustomed to carving off and eating the leviathan’s flesh, burning its fat for light, and fishing whatever potentially useful things he can out of its stomach before they are dissolved. Sakurai's party has been fully accepted into the tribe of unfortunates trapped inside. Bard and Gamon spend their time theorizing and exploring ways to escape. They are currently trying to devise a pair of hooked gloves to climb their way out. Meanwhile, Sakurai and Mai have joined the harpooning team that saved them. Sometimes Sakurai wonders if he made the wrong choice somewhere, if maybe things could have ended differently. But such thoughts only get in the way of surviving to the next day now. And so, Sakurai waits. Patiently, motionlessly, endlessly, ready to reach out and spear anything that may become salvation.",
        "The End."
      ],
      final: true
    },
    relax_with_masters: {
      text: [
        "“More wine?” offers the grey-bearded master. ",
        "“Is the answer ever no?” Sakurai smiles.",
        '“Haha, I suppose not. Please, take a seat friend," the grey master laughs, handing Sakurai a very full cup.',
        'Sakurai sits comfortably on a log beside the healthy fire, skewers grilling above it. The grey-beard master, Gogol, is from the far north, come to retire in the southern regions to rest his body. The younger, Ennis, is from the west, headed north to the Capital and mostly transporting mercenaries and refugees. Sakurai swaps stories with his new friends and share information on the war with one another. "The king says we can expect to see the war won by spring," says Ennis grabbing a pork skewer from the fire. ',
        '"Never trust such promises, young one. I raised a family before a similar promise was actually fulfilled," says Gogol warily.',
        "\"That was the king's father's failures, do you not trust the new king? He was resurrected. Chosen even!\" responds Ennis as if insulted.",
        "Sakurai has grown uncomfortable with talk of politics, \"Enough of this, friends, we're celebrating aren't we?\"",
        "“Care if we join you?” calls a voice from behind Sakurai. It is the bard and the adventurer, Mai, the latter now dressed in her full plate armor and carrying a spiked warhammer. “We’ve had our fill of the crowds and the ruckus.”",
        "“Not at all, join us,” Sakurai says eagerly, waving to the empty log beside him. “So, what brings a fighter like you here, Mai? The king is paying good money for mercenaries.”",
        "“I never had much luck in monster hunting. I mostly work security these days. Safer than orcs and snake-men.”",
        "“And I’m the entertainment! We come as a pair,” chirps in the bard.",
        "“It keeps us busy and happy,” smiles Mai as she leans on her companion.",
        "“Might I ask your name, Mr. Bard?” Sakurai says.",
        "“Why of course not! I am Bartholomew Barthelme Barddock the Third, and there is no one with a voice like mine. I soothe giants, excite maidens, and am the heart of any true party’s revelry.”",
        "“I just call him Bard,” says Mai Lee as she quietly pokes her partner.",
        "“Bard it is then. I am Sakurai, Caravan Master. Where are you coming from?",
        "“Have you heard of the colonists gathering in the Capital? We’re off to join them, head east and get away from this mad war.“",
        "“Yes, I heard their numbers were growing by the day. Aren't they set for the Unknown Lands? Are you ready?\" A small hand taps Sakurai's shoulder.",
        "“Master, I have it memorized.”",
        "“Okay Gamon, show me what you know.”",
        "“I-In front of everyone?”"
      ],
      decisions: [
        { label: "Tell Gamon to Speak", storyNode: "order_Gamon_2" },
        { label: "Ease off Gamon", storyNode: "let_Gamon_pass" }
      ]
    },
    enter_capital_bribe: {
      text: [
        'As the caravan passes through the meters thick gate doors the sound of a scuffle breaks out, followed by the sound or ripping fabric, falling coins, and men fighting. As the gates close Sakurai falls to his knees in relief. "They really were a pack of wild dogs," he sighs.',
        "This respite is cut short by a quick slap to Sakurai's back. He turns to see Bard smiling proudly. \"Well done there friend! That was quite the performance! I'm a little envious now actually.\" ",
        "\"D-Don't be. It was a desperation move, nothing more. Sakurai looks to be almost blushing. \"Now, let us go, I'm starting to think this cargo has been bad luck. Let's offload it and be on with our lives.\" ",
        'Mai, only somewhat conscious, extends her arm out of the wagon with a thumb upwards. "That settles that," laughs Bard.'
      ],
      decisions: [{ label: "Sell Monster Organs", storyNode: "sell_organs" }]
    },
    watch_the_wrestlers: {
      text: [
        '"I can see gambling anytime in any town. The tourney is almost over by the sounds of it!" Sakurai hurries over to the fighting. The crowd of workers part to allow their master to the front of the arena. And something becomes immediately apparent. It was touted as a wrestling match, but there is no evidence of such. Sakurai can see a couple small pools of blood and more than a few teeth in the grass. Even a few imprints of faces in the mud. "I made the right choice," Sakurai thinks, smiling youthfully. ',
        "The last bout is just starting. From one end of the arena a giant man with a chest like the underside of a ship and arms thick as masts enters. From the other, a toned and scarred woman over a head shorter than her opponent. It seems none of Sakurai's own strongmen made it to the last bout, chuckling, he asks his men to remember to have him berate them about that later.",
        "A colorfully dressed announcer stands on a crate overseeing the crowd. “For our final bout we have the imposing blacksmith Dillford Dillson versus the traveling adventurer Mai Lee! Oh, Caravan Master! Happy to see you join us, care to place a bet?”"
      ],
      decisions: [
        {
          label: "Bet on Dillford",
          storyNode: "bet_dillford"
        },
        {
          label: "Bet on Mai",
          consequences: ["can_bribe"],
          storyNode: "bet_mai"
        }
      ]
    },
    inspect_your_caravan: {
      text: [
        "Outside the stable a great courtyard sprawls outward, lining up within it are three rows of fifteen wagons surrounded by men and women securing their goods. Or to be more precise, the guild’s goods. ",
        "“What are they loading?”",
        "“We are transporting the standard goods of alcohol, cotton, furs, and a half dozen families seeking to wait out the war in the Capital. All fine goods that keep you and yours well fed. But, the moneymaker, Gamon, of this journey is within the five center wagons. I’ve been collecting and hoarding special items these days. You two, shoo.” Sakurai waves away two young workers loading an armored wagon.",
        "“Of course, Master,” say the workers after loading the last chest.",
        "“Take a look Gamon” Sakurai says as he opens a chest. Inside the chest are tightly packed and secured jars filled with strange things suspended in green fluids. “Monster remains. Vampire fangs. Werewolf livers. Giant’s eyes. Undead ash. Orc brains. Mermaid Tails. Crushed dragon bone.”",
        'Sakurai hands the boy a jar of orc brain and he inspects it with wonder. “Five full wagons? How did you get so much?"',
        "“I called in a whole cache of old favors and a sizable loan. I've been getting first pick of every creature corpse and organ brought into the bounty offices these last few months. These organs make for strong medicine and the King is paying generously for anything that could help against the Dark Lord and his armies.\" Sakurai takes back the jar of orc brains and returns it to the chest. \"Since the monsters united, the rarity and value of remains has been climbing rapidly. I’ve been hoarding, waiting until the prices were right. I have a buyer ready and waiting for me now.” The aging master places his hands on Gamon's young shoulders and looks at him with unblinking eyes. “I've invested heavily in this journey. I expect you keep an eye on these wagons, if anything happens, it will be your responsibility.” ",
        "That is a lie though. A caravan master like Sakurai has plenty of trustworthy and experienced workers watching their cargo, but it is always good to put a bit of fear in your apprentice. Keeps them attentive. The wide-eyed look of dread Gamon's face assures the smiling master that they’ve done a fine job of it.",
        "After closing the chest and exiting the wagon, the workers return and finish tightly securing the cargo. “Now, take a look here. The wheels are fairly new and the horses well-rested. The canvas wagons coverings have been waterproofed and the wooden walled wagons are strong. The special ones have iron sheets on the inside. Never leave a city with anything less. The lazy and cheap merchants die quickest.” ",
        "Sakurai leads Gamon to the head wagon, painted red so as to guide the others. “One more thing, what did you notice Gamon? What are the caravan’s numbers? How many men and women? How many are armed?”",
        "“Um…forty-five wagons. Ninety horses. Forty men and thirty women. Only thirty had swords and mail, but all have knives. Oh, and I saw a handful of crossbows spread among the wagons,” says the boy with only a few delays.",
        "“Good. Good. You were paying attention. The review is done. Let us pray at the shrine and be off.”"
      ],
      decisions: [{ label: "Visit the Shrine", storyNode: "visit_the_shrine" }]
    },
    teleport_with_wizard: {
      text: [
        "Sakurai takes a blade and cuts the side of his arm, letting the blood flow onto the magic scroll, as per its instructions. A great energy enwraps everyone, leaving them feeling weightless. Then it stops being pleasant. After what feels like minutes of falling to their deaths while being thrown around inside a giant’s stomach, the caravan arrives outside the Capital’s towering steel gate.",
        'Sakurai vomits on the pristine white stones of the King’s Road. "Never again," he groans.',
        "Needless to say, the guards are alerted to the sudden appearance. It is a chilling sight, seeing a half-dozen ballistas on the high walls aiming down at one target, armored knights coming closer with swords and spears drawn. It takes some time to calm the guards, but the magic scroll and the captured wizard assuage them. The rest of the survivors stay by the main gate to rest while the guards lead Sakurai, Gamon, and Bard to the bounty offices in order to deliver the wizard. The building is made of brutal stone cuts and surrounded by spiked fences.",
        "“Charming,” notes Bard.",
        "A disinterested elf sits at the clerk desk, a few dwarven guards to the side. “What do you have for me? Something good I hope.”",
        "Bard tosses the heavily bound wizard onto the floor, hard. “One wizard and dungeon master, goes by the name of Tim. We’ve spent the last day fighting for our lives.” ",
        "The elf flicks through a great book in front of him, “Tim the Werewolf, Tim the Wildling, ah Tim the Wizard. I see he is alive even, congratulations, you’ve caught yourself a winner. We’ve been wondering where he was hiding. Modi. Mundi. Take him to the interrogator. And fetch two chests of gold.” The dwarves grumble the whole way, but they return post-haste with the chests, each chest perhaps holding double Gamon’s weight in gold.",
        "“So, what exactly does the King do with the wizards brought in?” Sakurai asks.",
        "“Oh interrogation, a few medical experiments, and eventually an autopsy,” says the elf casually.",
        "Sakurai's eyes go a bit wider. “Oh. That’s rather brutal. Isn't it?” ",
        "“Such is life, it’s almost break time, care to stay after your long journey? Dwarves make poor company.” Everyone can already hear Tim screaming and cursing them all in the basement before shouting in pain. “I can put on some tea,” the elf says earnestly.",
        "“Ah thankyouverymuchbye,” Sakurai and Bard say, quickly pulling Gamon out of the bounty office."
      ],
      decisions: [{ label: "Sell Monster Organs", storyNode: "sell_organs" }]
    },
    bring_back_cooked_mimic: {
      text: [
        "“Here you are, I hope this works.”",
        '“Thank yo- wait," he looks closely at the prepared meat. "This is cooked. Why is it cooked?”',
        '“C-Cooked? No, no! We fought her with torches and she caught on fire."',
        '"Oh yes, of course, I\'m sure that explains the meat being MEDIUM RARE! You dare lie to me you damn dog. You ate her! You stand before me after killing my mimic, my Mimmy, and then LIE to me about it? You lie to me about EATING HER?!" Tim blasts Sakurai with a stream of searing lightning, the pain is too great to even scream. Sakurai can only twitch and writhe as all his muscles desperately try to tear themselves apart. Tim ends the blast of power and leaves Sakurai twitching as he then goes through the portal, only moments later to return with Gamon gripped in his gangly electrified hand. ',
        'Following after Tim is Mai leading all the survivors with weapons drawn, even the injured, to take back their boy. "Let him go wizard!" she shouts. But they are all quickly blown backwards into the far walls by rapid bursts of lighting. All lay unconscious, many of their clothes torn off or burning. Mai alone absorbs the impact and continues to step forward until a second and far greater blast sends her careening through the air and into a tall shelf packed high with jars that now fall all around her. Sakurai looks on in horror as his greatest fighter and last hope lays utterly broken. ',
        "Tim returns to stirring his potion while Gamon struggles fruitlessly to escape from the wizard's painful grasp. Tim begins to drag Gamon into the the cauldron as the boy yells for help. Sakurai's limbs won’t move no matter how much he tries, he can do nothing but helplessly watch his apprentice be filled with lightning and sacrificed.",
        'Tim looks down at Sakurai. "You took my child, now say goodbye to yours! There’s still pieces of Mimmy undigested inside him I bet, and with that I can finish this potion at last. There are so many beasts, ghouls, and demons in this concoction, I doubt a bit of child will dilute it much. Now die! Die for my mimic! Die! Die! Die-”',
        "A sharp crack of wood and snapping strings echoes through the lab as Bard, the edges of his clothes aflame and his hat turned into ash, smashes his lyre over Tim’s head, slamming the wizard's skull into the cauldron. Tim's grip releases from the blow and Gamon dashes over to his master's side while Bard continues his assault. He takes the strings laying on the ground and wraps them around Tim’s neck. He pulls the lyre strings so tightly he cuts into his own fingers. Tim claws sluggishly at the smoking Bard, his old cheerful face is now one of rage.",
        "“No one zaps my girlfriend and gets away with it,” growls Bard. He tightens his grip even further until blood is running down the wizard’s neck. “And I must say, Mimmy tasted great!” Tim’s arms go limp and his eyes roll into the back of his head, any more and he will die. "
      ],
      decisions: [
        { label: "Cheer Bard On", storyNode: "cheer_on_bard" },
        { label: "Call Off Bard", storyNode: "call_off_bard" }
      ]
    },
    teleport_without_wizard: {
      text: [
        "Sakurai takes a blade and cuts the side of his arm, letting the blood flow onto the magic scroll, as per its instructions. A great energy enwraps the caravan, leaving everyone feeling weightless. Then it stops being pleasant. If there was ever a discount magic scroll made on the fly, this is what it would feel like to use. After what feels like minutes of falling to their deaths and horrible screaming, everyone appears outside the Capital’s towering steel gate.",
        "The vomiting party is met with a mass of knights with spears backed up by what must be a dozen ballista aimed right at the caravan. “Wizard! This is an illegal use of magic and by order of the King you are all under arrest!” says the one knight on horseback, wearing a helm adorned with eagle feathers. “Take them!”",
        "“Woah! Woah! Woah! We are no magicians!” Sakurai shows them the used and bloody scroll which a knight rips from his hands. It truly is a discount scroll, as its edges are blackening and turning to ash in the knight’s hands, Sakurai fears they all is lost until the young knight speaks. ",
        "“The scroll is real; no other illegal magic seems to be present.” says the young knight to his mounted commander.",
        "“Are we free to go then?” asks Bard.",
        '“After you pay the travelers and import taxes on whatever you have in those wagons," says the commander lazily.',
        "“Of course, the usual fifteen percent?” Sakurai says reaching for the money bag beneath the wagon's seat.",
        "The head knight high on his horse looks over the poor caravan, everyone bloody, burnt, and injured to various degrees. His armor falls as he relaxes and gives a devilish smile. “I was thinking ninety-percent actually.”",
        "“N-Ninety? This is all I have left in the world. We’ve lost everything because of bandits! We-“ Sakurai sputters. Never has anyone tried to extort him like this. Although, few ever arrive at a city gate as desperate and vulnerable as this caravan has.",
        '“My good master, please be considerate. You gave all these brave men here a fright with your illegal use of magic." says the mounted knight. ',
        "“Illegal? You saw the scroll, this was borrowed power, nothing more!”",
        "“What scroll? I saw no scroll, but perhaps I will find evidence of one in your payment. Consider it hazard pay for us who keep the Capital safe.”",
        "Sakurai looks over the guards quickly and see that their spears are newly sharpened, and that they stand on dirt with unnatural patches of deep red.",
        "The sun is high over the mounted knight, he looks almost angelic, “Come now, it is dangerous outside these walls. Best enter quickly.” "
      ],
      decisions: [
        { label: "Pay Taxes", storyNode: "pay_taxes" },
        {
          label: "Bribe Guards",
          requires: ["can_bribe"],
          storyNode: "bribe_guards"
        },
        {
          label: "Use Blessing of Luck",
          requires: ["blessing of luck"],
          storyNode: "use_blessing_luck"
        }
      ]
    },
    bring_back_mimic_remains: {
      text: [
        "Sakurai walks back through the portal and quickly cuts off a piece of the mimic’s tongue. He quickly informs his companions of the situation and decides to not mention them to the mysterious wizard. ",
        "“Here you go, Tim,” Sakurai says handing him a chunk of tongue.",
        "“Hmm, still rather moist. The poor girl must have died recently.” Tim sighs deeply before refocusing.",
        "“Y-You’re probably right about that.” Sakurai is beginning to sweat. ",
        "“Y’know, I raised her from an egg. Wrapped her in a blanket by the fire to keep her warm. Once she hatched, I’d feed her people and she’d sit by me as I went through my books. To think she waited outside for me all these years.”",
        "“Pets s-sure can be amazing,” Sakurai says, eyes sheepishly darting about the room.",
        "“They truly are. I will remember her fondly. But now, time to finish my work at long last.”",
        "“Ah, before you do that. Would you mind pointing me to the exit? The dungeon entrance is completely caved in.”",
        "“Oh yes, I’ll get to that in a moment, just let me finish this alright?”",
        "“Of course, and thank you. What exactly are you creating?” Sakurai asks.",
        "“Universal Essence, a brew using a pinch of the remains of every creature alive. Just a sip will give you minor godhood. And here I am with enough to fill a barrel.”",
        "“To do what with?”",
        "“Usurpation. The Dark Lord is some sort of pretender. The magic in the bodies of monsters is necessary for entire schools of sorcery. But the Dark Lard wants to unite the monsters, give them rights, land, and votes in a parliament. A parliament! It's an insult to the thousands of sorcerers who have poured their blood, sweat, and tears into studying the blood, bones, and souls of monsters. Not to mention all the medicinal uses. Consuming a giant's eye cures blindness. A werewolf's liver cures organ failure. Just ten grams of orc brain each day wards of senile dementia. And that is just from simple ingestion! The possibilities of mixing and refining are endless!\"",
        "Tim's voice grows deeper as vitriol continues to spill into his words, he stares deeply into his potion and wags the bit of mimic tongue through the air. \"And now the king is going ruin it all by losing the war. I tell you what, I won't let any king or Dark Lord ruin everything I've dedicated my life to. I will drink this potion, kill the fool king and wannabe Dark Lord, and smite the armies of man and monster. I will be a true Dark Lord and bring everything to order. I'll have whole farms of snake-men, orcs, mer-folk, and fairies! Under my rule I shall I uncover the greatest truths of magic!\" Tim takes a moment to turn to Sakurai and look him up and down. \"Hmmm, I don't know why I didn't think of it until now. But I wonder what potions I can make out of humans...\"",
        "“W-Why are you telling me this?”",
        "Tim drops the mimic tongue in the cauldron and the purple black stew  turns into a blinding white. Sakurai would still be stirring in a sort of terror if the potion hadn’t eaten through the stick like lava. ",
        "“Child, I can shoot lightning from my hands. You can’t stop me.” Sakurai feels his limbs go cold as he stares transfixed on the wizard. \"Now don't worry, you've made me a god, I'll make sure you don't go to waste in my experiments.\""
      ],
      decisions: [
        { label: "Drink the Potion First!", storyNode: "drink_potion" },
        { label: "Let Tim Drink", storyNode: "let_tim_drink" },
        {
          label: "Use Blessing of Strength",
          requires: ["blessing_of_strength"],
          storyNode: "use_strength"
        }
      ]
    }
  }
};

module.exports = wagons_and_dragons;
