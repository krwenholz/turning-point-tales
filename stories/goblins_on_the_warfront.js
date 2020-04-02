const goblins_on_the_warfront = {
  author: "Sean Wong-Westbrooke",
  title: "Wagons & Dragons - Side Quests - Goblins on the Warfront",
  tags: ["fun", "fantasy", "adventure", "war"],
  generalRelease: false,
  badges: [
    {
      node: "swim",
      text: "It wasn't a croc, but that didn't matter much.",
      icon: "🐊"
    },
    {
      node: "moat_2_trenches",
      text: "No man is an island, but boy are you alone.",
      icon: "🏝️"
    },
    {
      node: "4_days_later",
      text: "It's not you they're celebrating.",
      icon: "🎆"
    },
    {
      node: "retire",
      text: "It's a small, lonely farm, but it's yours.",
      icon: "🚜"
    },
    {
      node: "return_trenches",
      text: "Futuk.",
      icon: "😿"
    },
    {
      node: "later_evening",
      text: "So this is what success looks like?",
      icon: "🌇"
    },
    {
      node: "2_later",
      text: "Ding dong, at least you're not dead.",
      icon: "🔔"
    },
    {
      node: "destroy_spell",
      text: "No. Goblins definitely don't know magic.",
      icon: "💣"
    },
    {
      node: "awards",
      text: "A statuesque finish.",
      icon: "🗿"
    },
    {
      node: "lrr",
      text: "Next time, bring your TomTom.",
      icon: "↪️"
    }
  ],
  preview:
    "Clans of orcs, snake-men, giants, and all manner of nightmarish beasts now march as one united force. With so many terrifying creatures taking the humans' attention there is little left for the lesser monsters. Most notably, your kind, the goblins.",
  content: {
    start: {
      text: [
        "In the center of the Krenning Mountains sits the trading town of Fandel, currently besieged by one of the Dark Lord's legions. It was through Fandel that the vast majority of trade between the frontier, commonly known as the Dark Lands, and the greater human kingdoms of the East took place. It has been nearly a year since those days vanished, replaced with war. The Dark Lord’s armies of monsters purge all humans from the Dark Lands and march forth to put an end to their culling by humans. Clans of orcs, snake-men, giants, and all manner of nightmarish beasts now march as one united force. With so many terrifying creatures taking the humans' attention there is little left for the lesser monsters. Most notably, your kind, the goblins. Small and weak things, adults no bigger than young human children. You convinced your younger brothers to join the Dark Lord’s forces with the naive little hope you could be valued and respected assets. That you could walk freely in the sunlight without fear of being killed by humans, wild dogs, or even carried away by a large bird. Instead though, despite the Dark Lord’s decree of equality among monsters, few have offered such respect.",
        "As such, in the last six months of marching and conquering you and your brothers have done little but cook, clean, and dig cesspits. Your kind really are quite good at digging actually. So good in fact you and your brothers were entrusted the task of mining tunnels under the city walls. Once under the walls you would demolish their supports and let the hordes above rush in. When you were assigned the duty, it felt like an honor. To take part in the siege so directly, it sounded grand! But, as the days pass in the rocky, muddy, and unreliable earth some of your brothers begin to suspect that perhaps you were chosen because you are disposable. After all, who would ever miss a goblin?"
      ],
      decisions: [
        {
          label: "Back underground",
          storyNode: "underground"
        }
      ]
    },
    underground: {
      text: [
        "Your tunnel is built into one of the advance trenches nearest Fandel's moat. The smell of rotting orcs in the water is ever present in the summer heat. Each morning of the last week has been the same, down into the tunnel with a lantern, a shovel, and a pickaxe. Take a left at the boulder, a right at the fork, and left again at the flooded and abandoned tunnel and in just a minute or two you’re at work breaking rocks and slinging mud. You hang your lantern on a support beam and join your three brothers in moving the heavy earth.",
        "“Vecs, don’t you think this is dung pies?” asks your bald brother Bligs.",
        "“What is?”",
        "“We joined the army to not have to hide underground anymore. And guess where the commanders tell us to go, underground. Digging through muddy soil. All so the big guys above can rush in, chop off some heads, and get all the glory. It’s not fair.”",
        "“Fair shmair, we’re eating better now than we ever did. As long as they keep feeding us three hot meals with beer a day I’ll follow orders,” says portly Lort.",
        "Zig, the second oldest and tallest brother, buries his shovel in the floor before sighing. “Of course you’d say that. Don’t you guys see the big picture? Who cares about glory? When we take down the wall the big guys rush in and kill some humans and then most likely get killed themselves. Down here we'll be safe. What’s glory compared to surviving to have our own little farm by a creek somewhere? We won’t get that if we don't finish this tunnel. Now get back to work.”",
        "Lort nudges your shoulder as you go to relight a fallen lantern, “What do you think, Vecs?”"
      ],
      decisions: [
        {
          label: "We're being treated unfairly",
          storyNode: "unfair"
        },
        {
          label: "It's a fair deal",
          storyNode: "fair"
        },
        {
          label: "Focus on the farm guys",
          storyNode: "farm"
        }
      ]
    },
    unfair: {
      text: [
        "“I think this whole thing stinks. Those stinking humes hiding in that city have been slaughtering us and we don’t even get to wet our blades? Once we finish this tunnel they’ll have us digging one after another. We’ll spend the whole war in the dank darkness.”",
        "“At least we won’t be getting hit by arrows or carried off by giant hawks, rest in peace brother Bink.”",
        "You and your brothers each say a small prayer for the now months departed youngest brother. The trek from your family's ancestral cave to the Dark Lord's recruiting centers took long weeks. And in that vulnerable and exposed time Bink was carried away by a great hawk one morning, never to be seen again. Bink always liked to watch the sunrise. After the prayer you turn to the familiar and ever unpleasant voice and stench of your orange hobgoblin commanding officer."
      ],
      decisions: [
        {
          label: "Turn to the officer",
          storyNode: "officer"
        }
      ]
    },
    fair: {
      text: [
        "“It won’t do any good to think of the past or the future, who knows how this will turn out. Focus on now, we’re well fed and no one’s trying to kill us that isn’t hiding behind some distant wall. Things aren’t that bad.”",
        "“But, aren’t we getting closer to that wall every day?” says Bligs.",
        "Soon after your brother finishes his words the stench of your orange hobgoblin officer reaches you, and they say goblins smell bad."
      ],
      decisions: [
        {
          label: "Turn to the officer",
          storyNode: "officer"
        }
      ]
    },
    farm: {
      text: [
        "“For the farm brothers, all that matters is getting our own little farm. No fighting, no danger, not even dogs or hawks to fear after the Dark Lord finalizes the treaties with the beasts of the land. Sooner the war is done, the more time we’ll have to grow tomatoes and potatoes and carratoes.”",
        "“Vecs, carratoes aren’t a veg- aren’t a thing,” says Zig.",
        "“They aren’t? Well whatever, if wizards and dragons are a thing I’m sure we can make carratoes.”",
        "“Sounds tasty to me!” Lort licks his lips.",
        "“See? Lort gets me.”",
        "In the distance you hear the heavy voice of your orange hobgoblin commanding officer, “Hey what’s this?”"
      ],
      decisions: [
        {
          label: "Turn to the officer",
          storyNode: "officer"
        }
      ]
    },
    officer: {
      text: [
        "“Get back to work you lazy munchkins! We needed this tunnel done yesterday!” he has his hands on his hips as he looks down at your family. He is a foot taller than you easily and far more muscular. His confident smile makes it clear he is acutely aware of this.",
        "“What’s the rush Hobbs? Too fast and this thing could collapse.”",
        "“Just got orders to speed up. Human reinforcements are arriving any day now. The big guys up top can’t take the city before then if these blasted walls are still standing. So hurry up!”",
        "“If they’re so concerned why don’t they come and do it themselves?” you ask.",
        "Hobbs looks ready to shout again when Zig speaks up, “They’re too big for this muddy earth, our small tunnels are pushing things already.”",
        "“At least one of you gets it. How much longer? I need to report back up top.”",
        "Zig’s drives his shovel into the earth ahead and creates a great squelching sound, “At least another day or two, closer we get to the moat the more water logged the dirt is-” as he removes his shovel the dirt wall collapses on itself and the tunnel begins to shake and ooze as the walls close in.",
        "“Cave-in!”",
        "Everyone drops their tools and rushes for the exit as the sinking ceiling engulfs the lanterns in mud. You now find yourself holding the only light in the darkness.",
        "“We’re gonna die! We’re gonna die!” Bligs yells.",
        "“Which way? Which way? I can’t see!” screams Hobbs.",
        "You flail an arm behind you and grab whoever is nearest to you, “Everyone follow me!”, silently though, you wonder if you can recall the proper way out."
      ],
      decisions: [
        {
          label: "Left, Right, Right",
          storyNode: "lrr"
        },
        {
          label: "Left, Right, Left",
          storyNode: "lrl"
        },
        {
          label: "Left, Left, Right",
          storyNode: "llr"
        }
      ]
    },
    llr: {
      text: [
        "“This way! This way!”",
        "You rush through the shaking darkness and cannot help but feel you’re headed the wrong way. You know for certain when you and your brothers run into a boulder blocking your path. ",
        "“You’ve doomed us Vecs!” yells the hobgoblin as he slams you against the boulder.",
        "Lort grabs a nearby support beam from the wall and slams it into Hobbs’ back, “Get your hands off him!”",
        "Hobbs is knocked to the ground with a pained grunt as mud falls on his head. Following the mud is the slightest ray of light cutting through the collapsing ceiling.",
        "“Light! Dig or we die!” you pick up the stunned hobgoblin and get him on his feet, “Dig!” He does so without question.",
        "For an endless and claustrophobic eternity you all dig upwards desperately, your mouths and lungs filling with dirt and panic, but when your little green hand pierces the surface you feel the earth shake again. You close your eyes to meet the end when a terribly large pair of fingers grabs you and pulls you out of the earth like some ripe vegetable.",
        "“I’ve got you little ones!” calls out the great deep voice of a giant, a humongous shield staving off the arrows coming from the city walls. In a few quick motions with her great big hand she scoops out the earth with all the goblins and hobgoblin and brings you back to the trenches. “Medics! We have survivors!”",
        "A pair of snake-men medics slither their way through the trenches and begin assessing your wounds. While being washed and looked over the creature leading the siege on Fandel, Commander Skull, comes to speak with you all. You’re not quite sure exactly how the reanimated human skeleton speaks, but as creations of the Dark Lord, they are above reproach. At least to lowly goblins.",
        "“Attention!” orders Commander Skull and you all stand at the ready. “Officer Hobbs, what happened down there? Can we continue operations?”",
        "“Sir, these goblins got careless and collapsed the tunnel sir!” he points at you while holding his bleeding head.",
        "“Why you dirty liar!” yells Bligs as he and your brothers kick and scratch at Hobbs.",
        "The medics have to hold back the same goblins they just finished tending to, eliciting heavy sighs from them. Commander Skull leans in closely before slapping the rowdy goblins with a bony hand.",
        "“Enough! I want plain answers only. You, speak!” You can feel his empty eye sockets staring into your soul."
      ],
      decisions: [
        {
          label: "Answer Commander Skull",
          storyNode: "answer_skull"
        }
      ]
    },
    lrl: {
      text: [
        "“I know the way, trust me!”",
        "A quick left out of the tunnel, a right at the flooded tunnel, and a last left and you can see daylight to the right of the boulder. You and your brothers and Hobbs dive out into the sun as tunnel collapses behind you.",
        "“Is everyone alright?”",
        "Your brothers and Hobbs all raise their thumbs to the skies as they spit out mud. The snake-men medics standing by clean your faces with water and when your eyes dry you see before you Commander Skull, the reanimated skeleton in charge of the siege on Fandel.",
        "“Attention!” his voice is distorted, like it was coming from someplace else. “Officer Hobbs, who is responsible for this setback? Human reinforcements are due in two days!”",
        "Hobbs looks to you for a moment and back to Commander Skull, “No one sir, it’s this wet soil, accidents are almost guaranteed.”",
        "“Blast it, is a tunnel still possible? The oldest of you, speak up.”"
      ],
      decisions: [
        {
          label: "We can still bring down that wall",
          storyNode: "bones_wall"
        }
      ]
    },
    bones_wall: {
      text: [
        "“We can bring down the walls. We’ll get you in that city. I swear it.”",
        "“The war depends on it, get it done. Hobbs, you're demoted. This was on your watch. Succeed and I'll promote you. Dismissed.”"
      ],
      decisions: [
        {
          label: "Plan with your brothers",
          storyNode: "plan_brothers"
        }
      ]
    },
    answer_skull: {
      text: [
        "“We were a day or two off, the tunnel is lost, we’ll need to make a new one sir.”",
        "“And how long will that take?",
        "“At least a week I suspect, the soil is unwieldy.”",
        "“You have two days, work round the clock.”",
        "“But sir, the risks-”",
        "“We don’t have a choice, the ballistas on those walls can pierce our siege giants’ shields at close range and it would take days we don’t have to climb and descend the mountains. You sappers are our best shot at taking this city without mass casualties.”",
        "Zig steps forward, “Commander, digging at this rate, a cave-in is almost certain.”",
        "“And so is nearly a year delay in the war. You signed on to be soldiers. It’s time to honor your oath of duty, for a world for all of us.”",
        "All monsters in ear-shot press a fist or limb, or whatever they have, to their heart and repeat the hallowed words, “A world for all of us”",
        "“You have two days, proceed in a method of your choice, I can allow you that much. Officer Hobbs, you’re with the goblins. Good luck everyone. Dismissed.”"
      ],
      decisions: [
        {
          label: "Plan with your brothers",
          storyNode: "plan_brothers"
        }
      ]
    },
    plan_brothers: {
      text: [
        "Bligs waits a moment for Commander Skull to leave before kicking the dirt and spewing curses, “We’ve been condemned brothers. Down another hole we go.”",
        "“Which way do we go?” asks Lort.",
        "“Two days, there’s no way we can clear the tunnel in time,” you muse.",
        "Zig steps in the middle of the goblins, “Maybe we don’t need to dig a tunnel at all. The shore across the moat to the wall is too small for a group of orcs or the bigger creatures, but we fit just fine. If we swim across the moat at night, we can land on the shore and dig under the wall from there. No big tunnel needed, just a careful ditch.”",
        "Hobbs nods his head, “Yeah, I like that idea. No way do I wanna go back in those tunnels.”",
        "“There’s a reason no one has tried that yet, there’s alligators in the water. Tore some orcs to shreds.”",
        "“Better to die by teeth and claw than in a hole,” Hobbs chimes in.",
        'The memory of the incident in the tunnel makes you shiver. Whatever it takes to not go in a tunnel. “Let’s do it."'
      ],
      decisions: [
        {
          label: "Cross the Moat",
          storyNode: "cross_moat"
        }
      ]
    },
    cross_moat: {
      text: [
        "“We do the moat, when it’s dark out. No way I’m going back in those tunnels.”",
        "Your brothers-in-arms exhale loudly as the gears turn in their heads.",
        "“How do we do it? Just swim?” asks Bligs.",
        "Zig shakes his head, “We should make a raft, we have to bring a bunch of gear across.”",
        "“They’ll probably notice a raft going across the water, we’ll need shields, weapons,” says Hobbs looking off at the walls.",
        "Lort raises his hand like a little boy, “Uh guys, why don’t we skip the water?”",
        "“And how do we do that?” you ask.",
        "“The giants can throw things really really far, maybe we could ask one to throw us?”",
        "Zig looks like he heard the dumbest thing ever said. Bligs is curious. Hobbs looks like he wants to strangle Lort. And Lort is giving a shy smile. What’s your reaction?"
      ],
      decisions: [
        {
          label: "We're swimming",
          storyNode: "swim"
        },
        {
          label: "Let's build a raft",
          storyNode: "raft"
        },
        {
          label: "Go find a giant",
          storyNode: "giant"
        }
      ]
    },
    swim: {
      text: [
        "“Get some tools, we’re taking our chances with a swim.”",
        "No one can bring much with them since they have to paddle across the water. Just shovels and a few shields in case the archers on the wall notice you. Well into the night you lead your team into the waters. Swimming beneath the surface and minimizing splashing is slow, but the time passes smoothly. That is, until you hear Hobbs screaming.",
        "“Help!” is all he can say before the alligator gripping his leg takes the hobgoblin under. With fresh blood in the water you know your time is up, the moonlight is shining on a mass of scaly tails coming your way. Your brothers swim for the shore with all their might, but no goblin leaves the water alive.",
        "THE END - Gator Food"
      ],
      decisions: [],
      final: true
    },
    raft: {
      text: [
        "“Ready a raft and gather supplies, we’ll move at sundown.”",
        "When evening comes the raft is complete, though that is a rather generous term for the hurriedly cobbled together bundle of wood and rope. Under the cover of darkness and minimal moonlight you and your brothers carry your tools to the water and push off. It’s not a fast journey with piles of shovels, pickaxes, wooden beams and weapons. But perhaps that has been a benefit, as the archers on the city walls would be alerted by a fast moving object. All is going fairly smoothly as you use a long pole to slowly push the raft along, inch by careful inch. Your heart begins to flutter a bit as you approach the other side of the moat and the weed covered patch of earth up to the wall. With just a few feet to go the raft bumps into something and a vicious hiss vibrates the air. Rows of razor sharp fangs shine in the night as you spot an alligator in the water below you."
      ],
      decisions: [
        {
          label: "Stab the alligator",
          storyNode: "stab_gator"
        },
        {
          label: "Stay still",
          storyNode: "stay_still"
        }
      ],
      final: false
    },
    stab_gator: {
      text: [
        "In a panic you draw a dagger and drive it into the beast’s eye. It roars and writhes and in its own panic bites onto the raft and begins to twist. The sound of the raft being torn apart and all your gear splashing into the water makes it hard to hear the goblins gurgling screams as they struggle in the water. As an underground dwelling creature you can’t really do much more than pathetically doggy paddle, but it keeps you afloat enough to see more alligators attracted to the scent of blood. Where can you flee? It’s almost two hundred feet to the safety of friendly trenches. Can the mission to undermine the wall even be salvaged?"
      ],
      decisions: [
        {
          label: "Back to the trenches!",
          storyNode: "moat_2_trenches"
        },
        {
          label: "To the wall!",
          storyNode: "to_wall"
        }
      ]
    },
    moat_2_trenches: {
      text: [
        "“Retreat! Retreat!”",
        "There is no time for stealth, for the next endless moments you swim madly and desperately to escape the beasts in the water. You hardly even register the sounds of human shouting and arrows impacting around you. When you reach the other end your limbs burn and dragging yourself out of the water is one of the hardest things you’ve ever done.",
        "“We’re almost there brothers! Just a bit further!”",
        "You fall into the friendly trenches with a pounding heart and raspy breathing.",
        "“We made it. Lort. Bligs. Zig. Hobbs. We made it back, oh thank the gods.” As your heart slows and the pounding no longer fills your ears you do not hear anyone else. “Guys?”",
        "Standing with a start you look back at the moat and see the alligators still spinning and splashing in the water. No one else returns.",
        "No one knows what became of Vecs the Goblin after that disastrous night, but all wish it could have gone differently.",
        "THE END - Lone Survivor"
      ],
      decisions: [],
      final: true
    },
    to_wall: {
      text: [
        "“To the wall brothers! Grab what you can!”",
        "Everyone’s eyes show their understanding and they instantly scramble out of the water to the weedy shore.",
        "“Goblins! Goblins at the wall!” call out the archers above soon followed by arrow after arrow.",
        "One strikes Zig in the leg and he falls to the ground. You rush out to help him and feel your first bit of respect for Hobbs as he comes as well, only to run past and back into the water to retrieve what remains of the raft.",
        "“Get beneath me! It’s a shield!”",
        "Without hesitation the brothers get beneath the makeshift shield as it is filled with arrows from above. The good news is that the arrows struggle to pierce the thick and wet wood. The bad news is that this situation can’t last forever.",
        "“Boiling water! Bring boiling water-,” a soldier says before being suddenly cut off by a great wet impact. A sound soon followed by a torrent of arrows whizzing through the air. In the distance you and your comrades can see a row of snake-men and women with their great bows preparing another volley. Out from behind them comes Commander Skull who makes a digging motion before sliding a finger across his throat.",
        "“Okay you got the message fellas, dig or die!”"
      ],
      decisions: [
        {
          label: "Dig!",
          storyNode: "dig"
        }
      ],
      final: false
    },
    dig: {
      text: [
        "You dig all through the night. It is rather dark and difficult to see where and what you’re digging into and more than a few toes get terribly bruised from missed strikes. Hobbs is exhausted from holding up the raft all night and enduring the arrows and few pots of boiling water that the soldiers manage to pour down on him. When his strength finally gives out he collapses into the ditch you and your brothers have made before the city wall. The raft making an actually semi-decent roof.",
        "Turns out when it’s life or death you can work almost endlessly, at least for a night. By sunrise the ditch expands beneath the wall and beams broken off the raft are holding up the more free-floating stones. The wall was never going to come all the way down with just two days of work. But, it doesn’t need to. The giants will be able to do the rest once a weak point has been established.",
        '"All right, break time everyone. Take a moment," you order.',
        "The ramshackle ditch full of goblins sits down with relieved sighs to open the bags of food and water the giants were able to toss over from across the moat. Looking out towards the water you can see a few alligators floating along, observing you and your brothers. Their hides are thick and arrows fired from afar by your friends across the water have difficulty piercing them, though it has still made the beasts reluctant to make a meal of you, for the time being. Right now, it’s time to enjoy some jerky and water.",
        "Hobbs hardly chews his ration and drains his waterskin in moments before giving a troubled sigh, “This is crazy, seriously, what is this? Hobgoblins, goblins ain’t supposed to be doing heroics like this.”",
        "“It is what it is,” chides Zig.",
        "Hobbs looks on at you and the hard working goblins, “...Brave little guys aren’t ya?”",
        "Lort takes a moment to look back at Hobbs, “You gotta be when you’re tiny. And hey, Hobbs, nice move with the shield. That was pretty smart.”",
        '"Yeah, you really saved our butts there," smiles Bligs.',
        "\"...Thanks guys. Y'know I- what's that noise?\"",
        "The side of the ditch beneath the wall is rapidly collapsing. Your brothers stand and take their shovels and picks. When the wall finally falls inward the worst of all possible creatures pokes their head out. Round heads with wild fiery hair and beards, a trio of dwarves have found your tunnel!",
        "“We found them! We found the stinkin gobs! Come over hear you green rats, let my shovel get a taste of your brains!”"
      ],
      decisions: [
        {
          label: "Hit a dwarf with a shovel!",
          storyNode: "hit_dwarf"
        },
        {
          label: "Attract the alligators!",
          storyNode: "attract_alligators"
        }
      ]
    },
    hit_dwarf: {
      text: [
        "“Hit them till they die brothers! Ahhhhh!”",
        "“Smash them!” cries the longest-bearded dwarf.",
        "Your brothers and Hobbs swing their shovels and picks and they scream their little hearts out. You pummel the first in the head and the rest follow suit, slamming and stabbing their weapons into the little pit of desperation until the dwarf with the longest beard lays motionless. In the frenzied strikes you connect randomly with the other dwarves by accident, but a solid strike manages to come from them. The bladed edge of the dwarven combat shovel slashes across Lort’s chest and your brother falls into the dirt. You cradle him as the others beat the remaining dwarves silent.",
        "“Lort! Come on, don’t close your eyes. We’re going to get you out of here.”",
        "Arrows begin coming down on the raft shield as soldiers begin shouting behind the city wall, “They killed the dwarves, get in that hole men, and smash those goblins!”",
        "Arrows from the snake-men archers force the volley coming down on you to stop but the sounds of heavy boots and jangling armor grow louder by the second.",
        "“J-just go, go! They’re coming,” coughs Lort.",
        "“Not without you brother. Now come on! Everyone, retreat! Hobbs, raft!” You throw Lort’s arm over your shoulders and Hobbs flips over the arrow covered raft into the water and pushes off. Zig and Bligs bash at the alligators with shovels and paddle as fast as they can go. Halfway across the moat a pair of crossbowmen take aim and fire at you. You close your eyes and clench your jaw only to hear Hobbs yell in pain. Warm blood drips on you as you open your eyes to see Hobbs shielding you, two bolts in his back.",
        "“H-hurry up and get us out of here…” is all he can say before falling forward.",
        "You paddle with everything you can but the shore is still so far away. You leap into the water and kick till your legs are numb and keep kicking, the alligators are gaining and all is lost. A row of teeth is all you see before a spear pierces the gator’s head with a wet crunch.",
        "“I’ve got them! Pull me back! Pull me back!” cries the snake-man grabbing hold of your raft. Holding onto his tail is another snake-man and another all the way to the trenches. “Hold on!” The snakes retract themselves like a lightning bolt in reverse and drag your raft across the earth and back to the safety of the trenches with a crash. “We need medics!”",
        "Your last sight before exhaustion takes you is of Hobbs and Lort being carried off for surgery."
      ],
      decisions: [
        {
          label: "Four days later",
          storyNode: "4_days_later"
        }
      ]
    },
    "4_days_later": {
      text: [
        "You are sitting on a high hillside at the edge of a forest. In the distance stands the city of Fandel, now reinforced by some ten-thousand men and women bearing a number of royal sigils. Inside its walls burn great fires of soldiers celebrating their victory and the monsters’ retreat. The monsters have pulled back to the high forests to restore their strength and bide their time.",
        "“There you are Vecs, what are you doing out here? It’s almost supper time.”",
        "“I’ll be there in a bit, Lort. Just thinking. How are you feeling?”",
        "“Doing alright, the doctor said I’ll have quite the scar. But hey, ladies love a scar with a story.” He smiles and pounds his chest loudly, a chest which is currently boasting a few dozen stitches and enough bandages to wrap a corpse. Suffice to say, there is profound silent agony on his face that forces him to lean heavy on his crutch.",
        "Next from the woods comes Zig and Bligs, both with a likely stolen jug of grog. You smile when a big orange hobgoblin hand comes out from behind Lort and slaps him on the back, “Yeah, you shouldn’t do that buddy. Hey Vecs, mind if we join you?” Hobbs chest is wrapped in heavy layers of bandages as well, but he can move decently so long as you don't ask him to reach above his head.",
        "“Saved a seat for all of you.”",
        "“So what is it you’re looking at? Still thinking about the mission? Commander Skull forgave us y’know. It was a bad situation all around. Those snake fellas risked their necks saving us too, no one’s blaming us.”",
        "“I know, I know. I just, we could have been heroes. We were so close. Next time, next time we’re gonna bring those walls down, and nothing is going to stop us.”",
        "You, your brothers, and your new friend Hobbs all share a drink while the sun sets on Fandel in the East. The city plunges into darkness as the sun falls behind the great forests. As dreams of conquest bounce around in your skull the celebratory fires in the distant city sparkle in your green eyes.",
        "THE END - A Green Sunset"
      ],
      decisions: [],
      final: true
    },
    attract_alligators: {
      text: [
        "“Hold the dwarves back! I have an idea!”",
        "In an act of what can only be described as desperate at worst and foolhardy at best you take a handful of jerky and wave it in the faces of the observing giant reptiles. Maybe they’re attracted by you acting like a lively meal, or maybe they really are interested in the meat after weeks of nothing but rotting orcs to feed on. Regardless, four alligators come speeding out of the water snapping and hissing after you as you flee. The beasts crawl towards you relentlessly as your brothers cry out in pain and shout vile insults at the dwarves, each side bashing and slashing at the other with their shovels. “Guys, get the heck out there!”",
        "“Why? Oh futuk- move!” yells Hobbs.",
        "You toss the jerky in your hands towards the dwarves and dive out of the alligators' way, your goblin companions crawling desperately out of the ditch right as the beasts dive inside. The dwarves struggle, but the rows of teeth and thrashing jaws tear them to shreds. The longest-bearded dwarf manages to crawl out of the ditch, though he does not get far before an alligator drags him back into the death ditch. The blood trails down into the moat and soon it seems each scaly beast in the water was on their way for the feast. Following the scent of meat and blood the creatures converge on the ditch and crawl inside to fight over the dwarven bodies. You and your brothers hug the city walls and cower, doing all you can to look small and unappetizing.",
        "When the dwarves are wholly consumed the alligators advance further down the ditch and what must be the dwarves own counter-tunnel from inside the city walls. This is soon confirmed by blowing whistles and men yelling about “lizards loose in the city”. They keep coming until it’s like a little army has flooded in through the hole and you start to get the sense the creatures may have some sort of grudge against the city. That or the starvation. Perhaps the humans should have fed the beasts more. ",
        "When it seems like nearly every alligator in the moat has gone inside the city, and the sounds of screaming and fighting and general panic are raging, you see it is time to get back to work."
      ],
      decisions: [
        {
          label: "Bring down the wall!",
          storyNode: "down_wall"
        }
      ]
    },
    down_wall: {
      text: [
        "With a sufficient distraction underway your band of goblins return to digging out as much earth beneath the city wall as possible, being careful to place wooden beams beneath the large stones to hold it all in place. In time the job is done and the dry wooden beams are doused in oil and set alight. You stand guard by the fire to make sure no brave human can come in time to put it out. The screaming in the city continues and thankfully no one comes to trouble you.",
        "When the beams begin to crack from the flames and the wall begins to shake you know it is time to flee, else be crushed to smooth green paste. Hobbs tosses the raft into the moat and when you're all aboard a great section of the wall of Fandel comes crashing down. The higher stones splash into the moat and send you all on a wave to the other side and skidding across the muddy earth. It would feel almost fun if you didn’t think you were going to die there for a moment.",
        "Behind you the sound of city bells ring out. Through your efforts you can see a great gouge in the wall from where part of it collapsed under its own weight. The gap is big enough for two or three orcs to move abreast, not enough for an army, but enough for the giants to get a good grip and tear down the rest of the wall. Through the gap you can see soldiers still battling with the now mostly defeated horde of alligators. Most stand their ground at the sight of their damaged wall, but many drop their swords and disappear into the city, in the opposite direction of the monsters.",
        "The Dark Lord’s forces led by Commander Skull give out a raucous yell and the green-skinned, scaled, clawed, and undead masses rush forward with axes, glaives, and clubs. The giants with their long strides reach the front with speed, two fall to enemy ballista, but three make it to the walls and out of the sights of the weapons. They wrench with their endless might as snake-men rain arrows on any would-be giant killers on the walls. The second thunderous crash of the day comes as an opening in the wall as big as the main gate is torn open and the monstrous hordes fill the city.",
        "You, still sitting on your arrow covered and alligator scratched raft, look out on the insane sight. A small pack of goblins brought a city to its knees. Who would have ever thought it possible? You lie back with your arms behind your head to take in the sky and relax. You get a good thirty seconds before your brothers start poking you.",
        "Bligs has this infectious giddy smile, “Come on Vecs, we’re not missing out on this! Think of the loot!”",
        "“Think of the food!” says Lort.",
        "“Oh, but the blood, a city’s worth!” says Hobbs who has already donned a leftover helmet and holds a spiked club.",
        "“The booze!” laughs Zig who has tied what seems like five daggers to his belt.",
        "“Okay, okay. Hand me a helmet. Let’s go!”",
        "When there’s a city to conquer, there isn’t really a choice about what to do, you just do it!",
        "THE END - Goblins and Gators"
      ],
      decisions: [],
      final: true
    },
    stay_still: {
      text: [
        "You hold your breath and your eyes go wide as you stare at the lulling beast, cold and slow from lazing in the evening waters. A puff of air escapes its nostrils and bubbles escape from the water as it sinks back down into the murky depths. You look back to your raft mates and share a great silent sigh of relief with them before continuing the painfully slow paddling toward the shore at the moat’s edge.",
        "With careful and quiet steps you unload the cargo bit by bit, your small size being perfect for moving unnoticed. You press yourself to the cold stone wall of Fandel and begin quietly shoveling away at the muddy earth. Without any outside distractions you and your team are able to work smoothly. A ditch is dug near the wall and from there you make a small tunnel to crawl through that ends beneath the city wall. From there you hollow out a little cave and carefully remove the soil. Hobbs then uses his far greater strength to compact it into the tunnel walls and reinforce them.",
        "The operation is a cramped and stinking one. Four sweaty goblins and a hobgoblin in a dank muddy hole that hasn’t seen the sun in centuries plus the fumes of animal oils burning in the lantern is not a recipe for anything remotely delightful. Regardless, it is decently well-lit and your work continues undisturbed through the night. When no one can really move much more everyone takes some time to lie down and rest. "
      ],
      decisions: [
        {
          label: "Rest",
          storyNode: "rest"
        }
      ]
    },
    rest: {
      text: [
        "The laying down is more like a pathetic sweaty dog pile, but it's comfortable enough. Progress has been slow as you all worked carefully and quietly to avoid detection. You’re not dead yet, so it seems to be working.",
        "After a fitful few hours of rest you awake to the dull sound of muffled humming. It is barely noticeable through the wet and heavy earth, but it is too inconsistent to be anything but speech. Using your finger you dig away at the earth towards the sound until a small beam of light shines your way. The sight makes you gasp. A trio of dwarves sitting around a lantern, shovels plunged deep in the earth.",
        "“How long have they been quiet up there?”",
        "“About three hours now. Must be sleeping after digging all night.”",
        "“So, are we going to do it? Are we really going to offer to help bring down our home’s walls?”",
        "“Like this place is home. The humans and elves told us we'd be equals, but here we are living like pack mules and moles. I ain’t taking orders from one of them ever again. If we bring down the wall, the monsters will have to accept us. Can’t be any worse than staying here.”",
        "“What did a wise man once say? That anyone who thinks things can’t be worse is an idiot?”",
        "The dwarf with the shortest beard swings a palm at the mocking one-eyed dwarf but is stopped by the oldest looking one with the longest beard. “You’re both fools. Back on topic, what if the goblins don’t trust us?”",
        "“Then we kill them and do the job anyway. No one ever missed a goblin.”",
        "“Well then, better rouse them, let’s get this over with.”",
        "You look down confusedly at the dwarves as one takes up their shovel and bats the ceiling with wet slaps that awake your brothers and Hobbs. The impacts gouge out some dirt that widens the little peephole you made and collapses much of the floor. And the next thing anyone knows five goblins are crashing down into a dwarven tunnel. There is an uncomfortable period of staring when all are exposed to each other.",
        "“Um, sorry about that. We mean you no harm! We wanna make a deal!” says the one-eyed dwarf",
        "Hobbs and Bligs have already taken up their spades and wield them like makeshift spears, “Like we’ll fall for that trick!”",
        "You have a hand on your dagger. The dwarves spoke of turning into traitors. Can you trust them?"
      ],
      decisions: [
        {
          label: "Attack the dwarves",
          storyNode: "attack_dwarves"
        },
        {
          label: "Hear them out",
          storyNode: "hear_dwarves"
        }
      ]
    },
    attack_dwarves: {
      text: [
        "This situation is much too delicate for such things, violence is simple and easy. You draw your dagger and lunge for the dwarves and your brothers follow suit with the best growls they can muster. There’s few things more chaotic than eight creatures with knives and shovels trying to kill each other in a small hole. It becomes something else entirely when someone tackles someone else and crushes the lit lantern, plunging all into darkness.",
        "BAM. POW. WHAM. SLASH. SLICE. YOW. AGH. NO. AH. HNG.",
        "After a few painfully slow moments of stabbing in the dark with no dwarven grunts in response it seems the fight is over. You feel slicked in gore. You climb back up to your ditch beneath the city wall and recover a spare lantern and light it. You wish you hadn’t immediately, the sight at the bottom of the hole is terrible. The dead goblins and dwarves are all hacked and crushed to bits, it looks like some dark cannibal swamp witch’s sick idea of a meal.",
        "When the shock has faded you realize the only ones still standing are you and Hobbs. The mission is over, there is not enough manpower between you two to possibly finish the undermining. But, that doesn’t matter. That is utterly irrelevant. You are the last of your family. Bligs. Zig. Lort. They’re gone. Dead in some hole.",
        "Hobbs says nothing. He only puts a hand on your shoulder and waits for your response."
      ],
      decisions: [
        {
          label: "Dive into bloodshed",
          storyNode: "blood"
        },
        {
          label: "Run away and retire",
          storyNode: "retire"
        }
      ]
    },
    blood: {
      text: [
        "Goblins are pests. Destroyers. That’s all any being would ever think if they saw a goblin. They would never think you could mourn your dead, that tears would run down your face. They see you as nothing but a vermin. A monster. And that is precisely what they will get.",
        "You crawl further down the dwarves' tunnel and discover its exit inside the city beneath some basement. You wait until the dark of the night to begin sewing chaos. With reinforcements so close the soldiers atop the walls are getting careless. It is their final mistake as you stab one and Hobbs throws another over the wall. It does not take much bloodshed to make the opening you needed. Word of ‘monsters in the city’ spreads fast and the panic spreads even faster. ",
        "By the time the soldiers manage to corner you and Hobbs many humans have been slain by your hands or in panicked stampedes. When the soldiers cut you down you see monsters flooding over the deserted walls on the backs of giants. You know now that the city will burn, all it cost was a handful of goblins no one will remember.",
        "THE END - Bloodthirsty"
      ],
      decisions: [],
      final: true
    },
    retire: {
      text: [
        "You’re in a hole full of death and sadness and all you can think about is a small farm with the sun shining down on it. It’s what your brothers would have wanted, it’s what you want for yourself. You shovel earth atop your brothers to give the best burial you can offer right now. When night comes again you slink away from the city wall and do not return to trenches of the Dark Lord’s forces. You head to the warm South and don’t look back.",
        "After some months of slow travel you and Hobbs come across a beautiful farm abandoned by its human inhabitants. Quiet years pass and the estate flourishes with good harvests alongside Hobbs, the two of you having grown close after that terrible day underground. Sometimes you remember your loss and it hurts, but the birdsong and smell of your garden brings you peace.",
        "THE END - Retiree"
      ],
      decisions: [],
      final: true
    },
    hear_dwarves: {
      text: [
        "“Wait! They want to help us! Wait, why do you want to help us? What makes you think we’ll accept you?”",
        "“The amnesty?”",
        "“Yeah. The amnesty!”",
        "You search your mind but can’t find anything on amnesty, “What in all the hells are you talking about? Amnesty?”",
        "“The Dark Lord is offering amnesty for any non-humans that join his forces. There were pamphlets and everything. No one told you about this? It’s been wreaking havoc in the kingdoms.”",
        "“No, this is our first time hearing about it.”",
        "“Those jerks in command, they don’t tell us anything,” groans Lort.",
        "“I guess we have that in common, the king’s men have been going around burning any amnesty notices and executing anyone suspected of 'disloyalty'. Dwarves used to live like kings under the mountains. Now we're just servants for the elves and humans. Of course we wanna join you!”"
      ],
      decisions: [
        {
          label: "New Friends",
          storyNode: "new_friends"
        }
      ]
    },
    new_friends: {
      text: [
        "“Well, now that we’ve spoken it would be weird to...stab you,” you look quickly back behind you and wave away your brothers’ weapons. “Guys c’mon put them away.”",
        "“Oh. Um, yeah. Thanks, for not...stabbing us. Appreciate it. Now, let’s get digging shall we?”",
        '“Lets."',
        "With eight sets of hands and tools, plus the dwarves’ knowledge of the local earth the digging process has never been more straightforward. The dwarves are masters of their craft and when all is said and done it is not just one section of the wall set to crumble, but five. Though, the work was not without its more harrowing moments. Sometimes human soldiers would come and check on the dwarves and all their extra digging and they would respond they are still looking for the goblins’ tunnels, much to the humans' frustration. The insults thrown towards the dwarves are enough to make even Hobbs look aghast.",
        "When the tunnels are done and the beams supporting the wall are set and coated with oil there is little left to do but start the fires. The only problem being that you’re under the wall and it’s about to come tumbling down. You could stay and fight, but eight pint-sized fighters against a city? Rather harsh odds. Unless you get creative. Or you could simply leave and hope the fires will do their job by themselves."
      ],
      decisions: [
        {
          label: "Return to the trenches",
          storyNode: "return_trenches"
        },
        {
          label: "Stand and fight",
          storyNode: "stand"
        }
      ]
    },
    return_trenches: {
      text: [
        "What are the humans going to do? Fill in the ditches and tunnels in the time it takes for weakened and oiled beams to burn? No way. So, with the wall set to fall you decide it is best to get back behind friendly lines.",
        "The towers of smoke flowing out from beneath the city wall are noticed rather quickly and with panic. So much so the archers on the walls are called off to help with carrying water and shoveling dirt into the hollow spaces beneath. Luckily, without anyone launching arrows at you the raft ride across the moat is rather comfortable.",
        "Once ashore you wander through the trenches to find Commander Skull with hands on his hips and a slouched back looking out at the city. Your eagerness to report fading quickly at the animosity you feel flowing from his empty eye sockets.",
        "“What is this? I ordered you to bring down the wall. And instead you bring me dwarves?”",
        "“They’re here to accept the amnesty. They helped us ready the wall for demolition. It should fall anytime now sir,” you say. The dwarves nod their heads in eager agreement.",
        "With a bit of fortunate timing you watch as a large portion of the city wall begins to wobble and shake, but no thunder comes. Instead the wall slowly sinks into the mud. A great portion of the wall has sunk to half its normal height, substantial, though still not something that can really be climbed quickly. A saving grace here though it that enough mud has been displaced that much of the moat has been filled in, more than enough for soldiers to run across en masse. A cloaked advisor whispers something to Commander Skull who only sighs before taking a commanding posture.",
        "“We’re going to go for it anyway, despite the losses. You fools, finish the job you were assigned to. Goblins I get, they’re stupid. But you dwarves, I expected more. Especially for defectors. In just a moment every monster in this army is going to rush that half sunken wall and slay every resisting being in that city. And all of you are going to be in the first wave. I’ll forgive you goblins’ failure if you survive. And I’ll accept the dwarves’ amnesty request if they survive.”",
        "The dwarves look of hope turns to disbelief, “But sir, the amnesty was issued by the Dark Lord, you can’t just deny it to us.”",
        "The living skeleton only cackles as he snaps his fingers and some orc guards drag you all to the frontlines for the first charge.",
        "With only moments before the charge you stand with your brothers wearing whatever armor and weapons you could find. Which unfortunately means cooking knives and pots and pans for helmets and armor. All tied to you with rope in haphazard knots.",
        "“They always screw the little guy don’t they?” you say.",
        "“Yup,” Zig spits.",
        "“Mhm,” Lort groans.",
        "“Futuk. I hate my life,” curses Hobbs.",
        "“We’re in deep now,” says Bligs as he tries to laugh it off.",
        "“Maybe defecting wasn’t a great idea,” chitters the one-eyed dwarf.",
        "“We’re gonna die,” bemoans the long-bearded dwarf.",
        "“Everyone does eventually, see you guys on the other side!” It disturbs you how almost happy the short-bearded dwarf sounds saying such a thing. But by then everyone is screaming and your feet move themselves so as to not be trampled by the orcs, minotaurs, undead, and giants behind you. ",
        "And that is how five goblins and three dwarves ran forward to face almost certain death. Whether they met their end or found glorious victory is a story for another day.",
        "THE END - First in Line "
      ],
      decisions: [],
      final: true
    },
    stand: {
      text: [
        "You can’t come all this way and leave your hard work to fate. But, you also sure can’t have a straight fight. The only way you’re going to keep the soldiers from addressing the smoke is if there’s a more ‘immediate’ issue at hand. And so after a lot of bickering a plan somehow comes to fruition. One you’re really not that big a fan of. The trio of dwarves emerge from their hole with sacks over their shoulders. The sacks are full of shovels, rope, miscellaneous tools, and very annoyed goblins with a lot of tools poking them in very uncomfortable places.",
        "When the world goes darker and cold you assume the dwarves have turned down an alley into the city. An arrogant voice calls out to the dwarves who sigh heavily in response, “Hey there little guys! Back from playing in the dirt?” ",
        "“We’re keeping an ear out for sappers, as ordered. Now leave us be.”",
        "“Well, thank you for your service. Wherever would we be without you mole rats?”",
        "The dwarves carrying you stop walking while the human’s lighter footsteps move closer. A bad move. Your bag begins to shake and then you hear the sound of the air being knocked out of a man’s body. Followed by the crack of boots hitting a face more than a few times. “Been wanting to do that to that idiot for months. Well, the coast is clear now my green friends. Do your thing.”",
        "You and your brothers crawl out of your sacks and start running through the streets while the dwarves start shouting about goblins in the city. With knives in hand you do your best to make a great racket, spitting and screaming at women and children who run away with all their speed. As you race into the markets you clear them out in moments as all citizens run for their lives. Soon soldiers are thundering after you and as they chase you through the streets you see behind you rising pillars of smoke from the sabotaged wall.",
        "With only a bit longer to go you all take to the rooftops and run gleeful circles around the heavy and clunky soldiers as the city falls into chaos. But, soon you run out of roof and you find your back to a three-story drop. Your time is up against the wall of heavily panting and thoroughly pissed off humans. The puffing commander yells with a red face, “Execute them, in the name of the-” he does not get to finish his command when the earth shakes and a great dust cloud arises from where the Western wall once stood. All stare in stunned silence for a moment until the first giants push their way through the cloud and trample through building after building. And just like that you are the soldiers' least important concern and they hastily retreat to the Eastern exits. The city is falling, and it’s all thanks to you and your dwarf friends."
      ],
      decisions: [
        {
          label: "Later that Evening",
          storyNode: "later_evening"
        }
      ]
    },
    later_evening: {
      text: [
        "“Let’s hear it for the three dwarves, the newest friends of the Dark Lord and all monsters!”",
        "“Hurrah!” responds the crowded tavern. The drink is flowing heavily as snake-men and orcs eagerly await the details of your daring mission.",
        "“And another for the goblin brothers! The little wall smashers!”",
        "“Hurrah!” goes the tavern again",
        "You will be up late telling the same story and partying with your newfound admirers until finally going to sleep happy. You've shown everyone what goblins are capable of.",
        "THE END - Wall Smashers"
      ],
      decisions: [],
      final: true
    },
    giant: {
      text: [
        "“It’s not stupid if it works.”",
        "“I- you know what. If we’re going to die, I’d rather not die in the water or under the earth. Let’s go find a giant.”",
        "It’s not too hard to find the giants in the Dark Lord’s army. They are stationed equal distances from each other behind hardwood shields held together with great iron bindings the giants forged themselves. They’re massive things, large enough to hide crouching giants when planted deep in the earth. They’ve made themselves popular with the other monsters as being behind their shields is one of the safest places to be. You approach the nearest one, Hogar Ironhead, named for all the arrowheads plunged into his skull he has neglected to remove. His forehead has an odd orange-red hue from the rust and whatever infection must be afflicting him. Despite this, Lort describes him as rather nice.",
        "“Excuse me, Mr. Ironhead?” ",
        "There is no response. You try again louder. Nothing. And once more even louder with your tiny goblin voice.",
        "His voice is like the low hum of distant thunder, “Hmm? Someone asking for me? Oh, Lort! Good to see you. What can I do for you?”",
        "“We have a favor to ask, a fun one! What would you say to tossing us over that moat? We’ve been ordered to dig ditches underneath to bring down the walls.”",
        "“Toss you? Never tossed anything I wasn’t smashing or killing before, but I’ll give it a shot.” The giant starts a happy hum that must be quiet to him but drowns out the ability to hear your own thoughts. He reaches out with his long gangly arms and scoops you all in his palm and squeezes his fingers together with almost tenderness. A giant’s tenderness though, to you it feels like your ribs are going to crack from the pressure.",
        "“Ow! That hurts! Hogar what are you doing? We don’t have our supplies yet, we want to go under cover of darkness, what are you- no!”",
        "It seems Hogar does not really understand his own strength as you and your brothers are tossed underhand high and far, well past the moat and city wall, all in broad daylight. It goes without saying you’re all screaming and crying and finding your faith again. But, by some miracle you come crashing down in the center of the city and its daily market. It’s utterly agonizing, but apparently sacks of flour make for decent impact absorption, that and weighing barely forty pounds. Lort landed in the market canvases above and is untangling himself from the red and white fabric. Zig got the worst of it and splashed hard into a fountain. Bligs is crawling his way out of a wagon of hay. And somehow Hobbs got lucky and seems almost comfortable after crash landing into a pillow merchant’s tent.",
        "The market is full of horse drawn wagons and their drivers looking absolutely stunned at the sight of you. Just for a second though, then the first cry rings out sharp and shrill. Soon all the humans and elves are screaming about goblins falling from the sky and you see soldiers with weapons drawn pushing their way through the crowd for you. It’s time to go!"
      ],
      decisions: [
        {
          label: "Steal a wagon and get out of here!",
          storyNode: "steal_wagon"
        }
      ]
    },
    steal_wagon: {
      text: [
        "You shout and gesture desperately at your companions, “Follow me!”. Your brothers and Hobbs push their way through tents and shove people to the ground to reach you.",
        "You brandish a knife with ferocity and push a man from his horse drawn cart while your comrades clamber into the back while hacking and slashing at any soldiers reaching for them. You’ve never driven a horse before but you know enough to slap it and when you do the beast runs off with speed. The horse barrels through the market and rows of citizens dive out of the way while your brothers hold on for dear life.",
        "You race out of the market and down the streets headed east when from the alleyways come soldiers in chariots. “Halt! Halt and we will grant you a swift death!” yells the charioteer as he rapidly gains on you.",
        "“Someone do something!” you command.",
        "“I’ve got this! Cover your eyes!” yells Hobbs as he grabs the red sacks in the back of your cart. With a violent tear Hobbs releases a cloud of terribly spicy dust that makes the pursuing horse rear up with a howl. You leave your pursuers behind as they wheeze and cough blindly. The soldiers lose track of you when you go over a hill and into a derelict section of the city. ",
        "“What do we do now? Can we even finish the mission?” says Hobbs.",
        "“We gotta find a way right?” asks Lort.",
        "“How are we going to do that?!” Bligs’ eyes are in total disbelief.",
        "“We’ll figure out something, we have to! If we don’t finish the mission who knows what Commander Skull will do to us. We can kiss that calm farm life goodbye,” Zig reminds you."
      ],
      decisions: [
        {
          label: "Hide and wait to complete the mission ",
          storyNode: "hide"
        }
      ]
    },
    hide: {
      text: [
        "“This is our one chance to be heroes! Imagine it, hero goblins. We’re taking that chance. Whatever form it takes!” In the corner of your eye you spot a pile of crates and barrels long abandoned and leap from the cart and your comrades take the leap of faith with you. ",
        "You all cram yourselves into a large crate with a stack of broken wagon wheels on top, the crate wall facing the street is being barely held together with rotten wood and rusty nails, but it fits and hides you all. Just in time too, looking through the cracks of your hiding space you watch a horde of humans in armor with swords drawn come round the corner and break off down the nearby streets. ",
        "The rest of the day is spent sitting inside a moldy garbage covered crate and watching increasingly frustrated soldiers searching every inch of the city three times. All but your foul smelling hidey hole. A sure mix of luck and abject laziness on the part of soldiers not really that concerned with a few goblins. Such a set of soldiers take their break near you, one of them mentioning something about officers not wanting to go looking for their men in disgusting alleys. ",
        "“How much longer are they gonna keep us at this? It’s almost sundown, what do they want us to do next? Walk through the whole sewer? Scour every house? It’s just a few goblins, we have rabid dogs that cause more strife.”",
        "“Seriously though, goblins from the sky? What’s up with that? After those reinforcements come, I’m requesting a transfer to the capital. I’ve got a bad feeling about this war, whether it’s tomorrow or a year from now, those evacuation bells in the belltower are going to be rung.”",
        "“Don’t think that man, we’re going to be just fine. Can’t get yourself worked up over a few goblins. Now tell me about this lady you’ve been seeing.”",
        "The soldiers wander off into the night after more lighthearted conversation and when they’ve had their fill of playing hooky from search duty.",
        "You share your realization once the loose-lipped humans leave, “That’s how we’ll do this guys, get in the belltower, ring the right bells and we can make everyone think monsters got inside. They’ll give up the city without even a fight!”",
        '“Thank the gods we’re not going underground," sighs Bligs.',
        "“I’m not a fan of heights…” says Lort softly.",
        "Hobbs bonks Lort roughly on the head, “Like it or not, we’re all in this together now.”",
        "“Weird, that coming from you.”",
        "“Yeah, well being thrown by a giant and outrunning a chariot all within a few moments changes you. Everything after that is kind of a bonus.”",
        "“Glad to hear it, cause we’re climbing that tower.”"
      ],
      decisions: [
        {
          label: "To the belltower",
          storyNode: "belltower"
        }
      ]
    },
    belltower: {
      text: [
        "The streets are dark and quiet at night. The fires and voices in homes are muted and harmless. But, the trails of soldiers with torches slipping through the city as they patrol makes your heart beat quick. The game is in your favor though as it is a large city and you are only a small goblin band.",
        "The belltower is old and weather-worn. Built of a mix of wood and stone, surrounded by wooden scaffolding swaying heavily in the wind. The scaffolding seems to be built up to repair a large hole in the side. It looks like something blew it out from the inside. Weird blue lights flicker from inside, filling the tower with a dim glow.",
        "“Futuk it’s tall. How are we getting to those bells up there?”"
      ],
      decisions: [
        {
          label: "Climb the scaffolding",
          storyNode: "scaffold"
        },
        {
          label: "Go inside and climb",
          storyNode: "inside"
        }
      ]
    },
    scaffold: {
      text: [
        "The climb up the scaffolding is fun for a few minutes, reaching for ropes and ascending ladders in the night. Then you looked down and got awfully dizzy. Goblins don’t often climb things. And being up in the air makes you appreciate your subterranean nature. Nevertheless, there’s no going down. ",
        "You climb past the open hole in the tower and the mysterious echoing chanting inside. Further up the scaffolding you have to duck down quickly to avoid the two elven archers keeping watch. Their heads twist and scan the horizon with unblinking eyes like hungry owls. The winds are loud up this high and the scaffolds shake, it may be possible to sneak past the elves. But, maybe it would be better to just cut the scaffolds and eliminate the elves. Time has cut nice goblin sized hand holds into the tower’s surface."
      ],
      decisions: [
        {
          label: "Try to sneak past the elves",
          storyNode: "sneak"
        },
        {
          label: "Cut the scaffolding",
          storyNode: "cut"
        }
      ]
    },
    surrender: {
      text: [
        "“O-okay, Vecs. Guys, give it up.”",
        "“What are you saying? No! I'm not going down, not like this!” Hobbs roars and charges the elves. They fill his chest with four arrows before he tackles one of the elves off the tower. “Like this!” The two of them vanish into the air with terrible screams.",
        "“No!” cries the remaining elf. With fury in her eyes she launches everything left in her quiver into your brothers.",
        "“No! You said-!”",
        "An arrow drives itself into your head before you can finish your cry and process your loss, perhaps that could be considered a blessing.",
        "THE END - No Prisoners"
      ],
      decisions: [],
      final: true
    },
    jerks: {
      text: [
        "High winds and shaking scaffolding makes for difficult shots by themselves. Even harder when facing three small and fast targets behind a larger bruiser. Hobbs covers his chest and head with his arms like he was getting ready to box as he charges forward. The arrows drive deep into him, but off center. The elves learn quickly to never underestimate how fast something can clear distance when it’s life or death. Even something as puny as a goblin.",
        "Hobbs knocks the elves off balance as he rams into them. The elves are only barely saved by their natural dexterity before your brothers grab them by the legs and push and claw them back to the edge of the platforms. “Get your hands off us you vermin!” cries an elf as she plunges a dagger into Lort’s shoulder. Your brother screams in pain and in an instant you are stabbing the elf with the arrow you have plucked from your chest. The elf cries out in pain and falls back into the air. Her companion dives desperately for her and catches her by the foot, but with her back now exposed your brothers push them both off the high tower and down to the stone streets below.",
        "Your world becomes dizzy as you go cold and the shouting of your brothers is muffled. When you hear a set of bells ringing moments later you let sleep take you with a hopeful smile on your face."
      ],
      decisions: [
        {
          label: "Two days later",
          storyNode: "2_later"
        }
      ]
    },
    "2_later": {
      text: [
        "You awake with a start and a pain throughout your whole chest, a good sign. You manage to croak out, “I’m alive!” You’re in a bed inside some building clearly of human design, to your sides are Hobbs and Lort. All of you bandaged up tightly and them snoring like thunderstorms. A suddenly opening door catches your attention and you see Bligs and Zig wander in with water and fruit and a little jewelry box. Around each of their necks is a gold medal.",
        "There’s no words needed between brothers, just happy, and incredibly painful, hugs. Bligs opens the jewelry box and reveals three more gold medals. “For outstanding valor in the conquest of Fandel.”",
        "You fall asleep listening to your brothers recount how the city fled at the ringing of the evacuation bells, and of the award ceremony in held in you and your brothers' honor. You fall asleep a hero.",
        "THE END - Valorous Goblins"
      ],
      decisions: [],
      final: true
    },
    cut: {
      text: [
        "You’d rather test your luck against a tower’s hand holds than skilled and deadly elves. Five goblin knives cut through rope after rope and by the time you hear the elves shouting about something being wrong their screams mix with the tumbling and crashing wooden structures. There’s a great crash and all the torch lit patrols you can see below begin to converge on the site of the disaster.",
        "With no time to lose you begin the climb. It is awful in every way. It’s cold and your hands are going numb. The old stones have turned brittle and crack and fall away under your weight. Hobbs is too large to make the climb and can only watch and hope you succeed. You know you’re dead when you see Hobbs’ face looking on in horror as cracks spread in the tower wall and you and your brothers find yourselves clinging to rocks falling through the air. It seems goblins were not meant to reach so high.",
        "THE END - It’s Raining Goblins"
      ],
      decisions: [],
      final: true
    },
    inside: {
      text: [
        "Goblins aren’t meant to be high in the sky. A few thousand steps and the potential for human guards is infinitely more inviting than tumbling to your doom. While not very tall alone, the five members of your band can make a fairly tall living tower, just tall enough to get in through a low window and unlock the iron door at the tower’s base. Bligs gets said honor and gives a bow with a cocky smile that earns him a few wry pats on the back.",
        "With knives drawn you lead the way up the winding candle-lit steps to discover a pair of human guards asleep at their post, an empty wine jug and playing cards spread out across their table. With careful steps your merry band crosses the guard room and head up a staircase with dim blue light shining down through it. The light grows stronger as you ascend and you begin to make out odd chanting that repeats and repeats. Poking your little green head above the steps you see the gaping hole in the tower under repair. Someone in blue robes with arms raised towards a bright ball of whirling energy. The innards of the ball look like a raging river ready to break out any moment. As your eyes adjust to the bright light you notice that around the great hole there is what looks like vicious gouges in the stone walls and floors along with the outlines of people burned into the walls. The opposite walls are littered with the bones of snake-men, orcs, and werewolves inside half-melted cages. A wizard’s laboratory is a terrifying place to be.",
        "The stairway to the bells is across the room and past the wizard. Your mission is to trigger an evacuation, no more no less. But, this mad man before you is devising some foul magic. Who knows what value he has to the humans. The question is then, do you think you can take him?"
      ],
      decisions: [
        {
          label: "Sneak past the wizard",
          storyNode: "sneak_wizard"
        },
        {
          label: "Attack the wizard!",
          storyNode: "attack_wizard"
        }
      ],
      final: false
    },
    sneak_wizard: {
      text: [
        "The wizard doesn’t matter right now. Finishing the mission and taking the city matters. He could vaporize you with a flick of his fingers, better to leave the wizard slaying to the heavy hitters and the Dark Lord. You gamble your life as you slink across the floor in the shadows towards the stairs to the bells. Thankfully the blue wizard seems lost in his chanting and as you creep closer you can see his arms shaking and his fingers in violent contortions. His nose is bleeding and his white beard is singed black with burns as energy leaps from the ball of light above him. It’s a good thing you didn’t bother him.",
        "At the top of the final set of stairs you can see the whole of the city and the monsters entrenched outside. You’ve sure gotten yourself in a weird spot. But, no matter. Above you are a dozen bells each with a unique carving on top. One for times of day. Another for weddings, war, and so on. The ones you want are a set with designs of people fleeing the city, the numerous skull carvings and signs and red ropes surrounding them also make it rather clear which are the “evacuate” bells.",
        "“Y’know, we’re lucky they accounted for illiteracy in the design,” muses Zig.",
        "“Yeah, not so lucky for them though,” laughs Hobbs.",
        "“Let’s ring the suckers!” shouts Lort as he grabs the bell-rope and starts slamming it back and forth.",
        "The bells’ ring is almost deafening from so close, but that’s nothing a few fingers jammed in tight can’t relieve. For the next hour you enjoy watching the citizens and soldiers of Fandel panic and race out of the city with the belief that the monsters had breached the walls and all was lost. You can even spot the blue wizard racing out the gates on a supernaturally fast blue steed. If word of goblins falling from the sky hadn’t put fear into the city’s mind who knows if this would have worked. Thankfully the humans have made it seem like they are under attack all by themselves. In their panic fires start and spread and with the roar of fires and citizens crammed against each other trying to get out, there’s no time to notice no monsters are coming. That is until the monsters across the moat see the opportunity and make the imagined attack real. Fandel falls the same night."
      ],
      decisions: [
        {
          label: "Award ceremony",
          storyNode: "awards"
        }
      ]
    },
    awards: {
      text: [
        "With one day left before human reinforcements arrive the monsters have a decent amount of time for celebrations. Never has a city been conquered with such little bloodshed. For your great achievements you, your brothers, and Hobbs are all awarded golden medals of valor by Commander Skull with the Dark Lord’s blessing. Your adventure will go on to be an inspiration for generations of goblins long after you and your brothers have passed on. In your honor gargoyles in your team's likenesses are placed atop the belltower to forever look on the city you conquered.",
        "THE END - Goblins in the Sky"
      ],
      decisions: [],
      final: true
    },
    attack_wizard: {
      text: [
        "It’s always good to get two birds with one stone, right? Kill the wizard, then ring the bells. Simple. You and your comrades advance in a crescent formation with your knives drawn and get just within stabbing distance when a great gust of wind sends you all flying back into the stone walls. The impact rips the breath from your lungs and you cannot even gasp as you watch Zig and Bligs be sent careening out the hole in the wall to tumble to their screaming deaths.",
        "“No!”",
        "“Goblins?! What are you doing here?”",
        "“You killed them!”",
        "“They surprised me! What’s going on?” the wizard’s beard and robes are burnt in the front as if he had been standing too close to a fire. He looks honestly surprised and then afraid as you, Lort, and Hobbs rush him. “Stop! No! You’ll make me lose control of the spell!” He sends another blast of air that sends Lort crashing into the burnt cages with a bone-cracking crash. In the next instant he blasts Hobbs in the chest with lightning that turns him into a singed and twitching bag of mindless meat. ",
        "“High Wizard! What’s wrong? We’re on our way!” the graceful voices of elves call out from outside the tower and scaffolding. “Just hold on!”",
        "“You’ll kill us all, stop this you green fool!” the blue orb floating in the air is beginning to contort and spike out as the wizard’s fingers bend painfully trying to control the magics inside."
      ],
      decisions: [
        {
          label: "Destroy the wizard's spell",
          storyNode: "destroy_spell"
        }
      ],
      final: false
    },
    destroy_spell: {
      text: [
        "“I’m sorry, everyone.” And with those last words you toss your dagger at the barely controlled ball of magic and the world goes as blue as a warm spring day. The top half of the belltower is annihilated and the explosion sends the bells crashing into the city. The tower’s bricks are sent out like vengeful meteors that devastate the homes. The remnants of the tower glow with blue smoke and the night is filled with panic from the presumed attack by the monsters. An attack that becomes quickly real as the devastation creates an opening for the waiting dark armies. ",
        "The city of Fandel falls and though no one can be certain if the group of goblins chucked over the wall were responsible, the correlation is difficult to disregard. When the world's histories are written years later on great tapestries, a special section is dedicated to the story of a group of goblins that gave their all in a city conquering explosion.",
        "THE END - A Heavy Toll"
      ],
      decisions: [],
      final: true
    },
    lrr: {
      text: [
        "“This way!” you yell.",
        "Down the long tunnels you run, cursing your stubby little goblin legs with each step. Your hunger for sunlight grows stronger with each moment. The shaking and sounds of falling mud and stone become almost deafening. When you feel your feet splashing in puddles you know you have gone the wrong way. You’ve found your way into a tunnel abandoned for being too near the moat. There is no more time to run back. The tunnel walls behind you collapse while the one in front bends inwards and the rotten water of the moat floods in. All goes black and your last thoughts are of your den in a cave hidden deep in a forest far far away.",
        "THE END - Bodies in the Moat"
      ],
      decisions: [],
      final: true
    },
    sneak: {
      text: [
        "After managing to escape the market and hide throughout the day you’ve become quite confident in your abilities. You continue your climb up the ladders with the utmost care and take careful steps across the wooden planks. All is well until you feel a sharp pain in your chest. Suddenly feeling numb you lean against the tower as something warm leaks out of you.",
        "“Did you little green rats think you could sneak past a team of elven archers?”",
        "“Vecs! Why you- !” Zig’s shouts are cut short as the other elf aims her bow at him.",
        "“Tell you what, surrender and there’s a chance you get to live out your days in a dungeon. Two meals a day, plenty of rats to eat, cold and dark. Sounds homey right? Or you can do something stupid and we fill you with arrows before dropping you off this tower. What do you say?”"
      ],
      decisions: [
        {
          label: "We gotta surrender guys!",
          storyNode: "surrender"
        },
        {
          label: "Kill these jerks!",
          storyNode: "jerks"
        }
      ]
    }
  }
};

module.exports = goblins_on_the_warfront;
