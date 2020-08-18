const heroes_and_monsters = {
  title: "Wagons and Dragons - Side Quests - Heroes and Monsters",
  author: "Sean Wong-Westbrooke",
  tags: ["fantasy", "adventure"],
  contentWarnings: "Contains some fantasy violence and gore",
  generalRelease: false,
  badges: [
    {
      icon: "😈 ",
      text: "Well that ended on a sour note",
      node: "assault"
    },
    {
      icon: "💀",
      text: "Not just mostly dead, but all dead",
      node: "funeral"
    },
    {
      icon: "😱",
      text: "A terrible way to end a nap",
      node: "awake_captured"
    },
    {
      icon: "👩",
      text: "Never forget!",
      node: "willow_sacrifice"
    },
    {
      icon: "⚔",
      text: "This will be a great ice-breaker story",
      node: "tunnel_willow"
    },
    {
      icon: "🛥",
      text: "You're on a boat",
      node: "willow_boat"
    },
    {
      icon: "🙏",
      text: "Someday...",
      node: "willow_protect"
    },
    {
      icon: "🏘",
      text: "You'll be back, and in greater numbers",
      node: "tunnel"
    },
    {
      icon: "⛵",
      text: "Atleast you have a boat",
      node: "tunnel"
    },
    {
      icon: "⚔ ",
      text: "All good things in time",
      node: "leave_quietly"
    }
  ],
  preview:
    "Their camp is sparse, a necessity for avoiding the winter raiders. The humans come when the snow is heavy and the food is scarce, even though the cold does little to orcs, hunger hampers all. The strongest warrior of the clan, Garo, has left his tent after only a few hours of restless sleep filled with memories of bloody snow. The full-grown orc stands tall in his furs and looks over the nomadic camp.",
  content: {
    start: {
      text: [
        "Winter has fallen on the northern edge of the Dark Lands' forests. The Upathu orc clan has awoken before first light to attend to the day's struggles of collecting wood for the fires, foraging, and waiting in the cold snow for the scant game. Their camp is sparse, a necessity for avoiding the winter raiders. The humans come when the snow is heavy and the food is scarce, even though the cold does little to orcs, hunger hampers all. The strongest warrior of the clan, Garo, has left his tent after only a few hours of restless sleep filled with memories of bloody snow. The full-grown orc stands tall in his furs and looks over the nomadic camp. Warriors stand watchful around the campsite, bows and arrows on them. Garo himself wields a greathammer stolen from a slain human from a winter long past. It is enough to put down the most armored of invaders.",
        "The younglings play with wolf pups and teach them how to stay quiet and fight. With food in low supply, all they can offer the pups for rewards is warm encouragement. Despite their growling stomachs the younglings remain diligent in their duties, determined to be useful. Any adult orcs not on guard duty or foraging are mending clothes or tents, tending to the sick, or sparring to keep sharp. What strikes Garo most is how thin everyone is. When he was a youngling the clan was some two-hundred strong. Now they number a mere thirty-seven. In the center of the camp is the finest tent covered in bear furs, inside is the clan’s lone elder doing what she always does, thinking and planning how to keep her people safe. Two days ago a crow flew into her tent with a message on its leg and she has not left the shelter since."
      ],
      decisions: [
        {
          storyNode: "go_hunt",
          label: "Go Hunting"
        },
        {
          storyNode: "join_elder",
          label: "Speak with the Elder"
        }
      ]
    },
    go_hunt: {
      text: [
        "One way or another, the clan needs food. Neither humans or the winter can be fought while they are sluggish or weak. Garo grabs his hunting bow and leaves the camp with only a quick word to a sentry of his whereabouts and sets off. Far and fast he runs from the camp before finding a deer's scent. He follows the trail to a patch of trees where the snow has piled on top, keeping the dirt below clear and allowing easy access to a patch of mushrooms spreading as a feast across the ground. Devouring them is a lone and massive buck. It is a majestic thing, with antlers reaching as high as Garo is tall."
      ],
      decisions: [
        {
          storyNode: "kill_deer",
          label: "Kill Deer"
        }
      ]
    },
    kill_deer: {
      text: [
        "There is no pleasure in the thought. But Garo has a duty to his people. With a grace forged from experience the orc approaches the feasting animal and readies an arrow. He releases it with proficiency, striking the buck square in the heart. Garo approaches and finishes the deer with his knife and says a soft prayer of thanks before putting the carcass on his shoulders."
      ],
      decisions: [
        {
          storyNode: "return",
          label: "Return with Food"
        }
      ]
    },
    return: {
      text: [
        "The joy of being able to provide fills him as he comes closer and closer to home, but this elation evaporates as the smell of smoke and blood mixes with the winter air. Looking down from a high hill Garo sees all the tents are burned and nearly all the orcs captured and crammed in more than ten to a cage. A dozen orcs lay dead in the snow, teams of humans removing their brains and putting them in green fluid filled jars. Garo's eyes turn red and he drops the food as he rushes towards the humans, but before he can let out his blood chilling war cry a hand large enough to wrap its fingers around the orc's chest pulls him down into the snow.",
        '"You idiot! If you go in there like this you\'ll die!" says the deep whispering voice of a minotaur hidden in the snow.\n',
        '"Where did you come from? Nevermind that, let me go! I need to avenge them!"\n',
        "Flying out from behind the minotaur's head comes a pink and gold winged faerie that promptly slaps Garo, \"Didn't you hear him? It's suicide!\"",
        "\"Then what? I can't let them get away with this,\" Garo growls still struggling against the gargantuan creature's strength.\n",
        "The minotaur huffs out a misty breath, \"We won't. For now, we wait. They just captured dozens of orcs with minimal losses. They will get well and drunk tonight. That's when we move. If we do this right we can rescue everyone. Now be quiet and keep your head down.\""
      ],
      decisions: [
        {
          storyNode: "wait_night",
          label: "Wait for Night"
        }
      ]
    },
    wait_night: {
      text: [
        "It's a good thing the cold does not bother orcs much, a human buried in the snow this long would have died some time ago. The minotaur looks unbothered by it all, his body heat is enough to melt the snow above him, if not for the evening snow they would have been exposed. The faerie lounges in the horned monster's fur where she has wrapped herself up warmly.",
        '"How much longer are we going to wait? They\'ve been drinking for hours now."\n',
        "\"Just a bit longer, they're starting to go to sleep. It's just us three, we can't fight them.\"\n",
        'Garo sighs into the snow, "Who the hell even are you two?"',
        '"I\'m Mion. And the little one is Nóg. We escaped a caravan together a few months back, been wandering since, trying to avoid the raiders."\n',
        '"Why are you helping me then?"\n',
        "\"Nóg and I, we're the last of our tribes. No one should know what that feels like. Wait, only the guards are out now. Let's move.\"\n",
        "The trio move slowly move on the human camp currently guarded by a skeleton crew, most of them leaning on their spears after a long day. The guards stand by fires that keep the cold away, but at the cost of their vision. The western guard is distracted by a voice whispering behind him. He turns and sees Nóg flapping her pink wings. He tries to call out but Mion's hand emerges from the shadows and drags the guard into the darkness before he can yelp. The sound of a quick and wet snap is lost in the snow. Garo and Mion step past the light and take cover behind a tent wall. In the center of camp sits the caged orcs. A pair of guards are throwing rocks at them with great glee.",
        '"Garo."\n',
        '"I\'ve got them."\n',
        "In rapid succession Garo sends arrows flying at the guards. The impacts push them towards the cages and the orcs cover the mens' mouths as death takes them. Quietly, Garo advances taking the dead guards' key and makes quick work of the locks.",
        "\"Quiet now, everyone, we're getting out of here. Wait, where's the Elder?\"\n",
        'An injured orc steps up to speak, "I\'m sorry. She went down fighting."',
        "Garo's chest goes cold at the news and the caged orcs' faces are hard with fury.",
        '"We need vengeance," the injured orc whispers. "The humans sleep deeply, we can avenge our clan. Garo, with the Elder gone, you are leader now. Please, let us take vengeance!"\n',
        'Mion puts his hand on Garo and speaks with a calm voice, "Your people are injured and the humans are still many. Lives could be lost."'
      ],
      decisions: [
        {
          storyNode: "orc_avenge",
          label: "Set the orcs free"
        },
        {
          storyNode: "orc_rescue",
          label: "Do not free the orcs",
          consequences: ["no losses"]
        }
      ]
    },
    orc_avenge: {
      text: [
        "On Garo's command the orcs are set loose. They take torches to each tent and tear the men apart in their beds. They rush the guards around the camp and drive their own spears into them. They orcs kill with efficiency and brutality, but there are far more men. Fear sobers them quickly and the orcs' momentum halts as a full-blown melee erupts. Mion and Nóg join the fray with unique effectiveness. Nóg coats men in her golden faerie dust and sets them alight. Mion wrenches a tentpole from the earth and swipes away swathes of men with each swing. Garo drenches himself in blood as he crushes as many men with his great hammer as his arms can withstand. When all the humans are dead, nearly half of the surviving orcs lay dead with them. Garo stands surrounded by gore and hopes he did the right thing. At the very least, these men will do no harm ever again.",
        "The orcs recover the brains put into jars and make a pyre for their dead. They scour the camp to be sure nothing of their people is left to be stolen or desecrated. In the early morning as the orcs rest and repair themselves a youngling assigned to look through the raider's supplies returns to Garo with a leather bag filled with documents. Inside are a handful of opened letters. Garo pats the child on the head as they go back to work.",
        '"Mion. Nóg. Can either of you read?"\n',
        "Nog raises her hand and Garo places the documents on a table for her. Her eyes move with wild speed and she reads one after another.",
        "\"Nothing interesting yet, family correspondence mostly with some 'Willow' girl. And this one-\" Nóg's eyes go wide and her tiny hands crumple the letter in a vice. \"Two weeks South, a delivery of faerie dust is en route to the Capital. Damn them, we have to stop them. I can't let them use my kin as weapons, as- as sparkling party tricks!\"\n",
        "Even though Mion's smallest finger is still larger than Nóg's whole body, he still caresses her with a gentleness few show. \"What is the shape of your people Garo, can we do it?\"",
        "\"Mion! They'll make bombs with my kin's corpses. They will use my dead to kill hundreds more. We have to stop them.\"\n",
        '"Nóg. We are injured, if we do this, we won\'t be able to do a full assault."\n',
        '"Please, Garo. There is still human blood on you, I deserve justice too."\n'
      ],
      decisions: [
        {
          storyNode: "avenge_faerie",
          label: "Justice for the Faeries"
        }
      ]
    },
    avenge_faerie: {
      text: [
        '"If what you say is true, we cannot allow them to get away. The human\'s captured my whole village with just swords, spears, and nets. We cannot afford them to give them more power. There will be justice!"\n',
        "Mion huffs a great breath and smiles as he puts his closed fist forward. Garo and Nóg put their fists to his and nod in acknowledgement of what must be done."
      ],
      decisions: [
        {
          storyNode: "dust_train",
          label: "Track Down the Faerie Dust Shipment"
        }
      ]
    },
    dust_train: {
      text: [
        "Mion, Nóg, and Garo with his clan of orcs have taken positions in the woods near the human caravan. These humans are even more heavily armed and numerous than the raiders that attacked the Upathu. The caravan has pulled off to the side of the road and surrounded their tents with iron-plated wagons. Their backs are pressed to an impassable cliffside for the night.",
        '"Can anyone see where they\'re keeping the dust?" Garo asks.\n',
        'Nóg looks onto the humans like a mass of writhing rats, "I can sense it, my kin\'s spirits are restless." She crosses her arms over her chest and Mion holds her gently in his warm hands. "They\'re in the far right wagon and locked in tight."',
        '"How you want us to do this, Nóg?"\n',
        '"So long as the humans can\'t use the dust, I will be satisfied."\n'
      ],
      decisions: [
        {
          storyNode: "assault",
          label: "All Out Attack",
          requires: ["no losses"]
        },
        {
          storyNode: "recovery",
          label: "Steal the Faerie Dust"
        }
      ]
    },
    assault: {
      text: [
        '"Do you want blood, Nóg?"\n',
        '"Yes."\n',
        '"Orcs, do you want blood?"\n',
        '"Yes!"\n',
        '"Then there shall be blood!"\n',
        'Garo looks to Mion who has done no cheering and has kept a solemn face. He breathes a heavy breath and without speed he raises his fist into the air. "You\'ll all die without me, blood it is."',
        "The assault is brutal for both sides. It begins as Nóg flies in and ignites the fabric of the tents and the canvas wagon coverings. The human's shield against the forest becomes a flaming prison. As pandemonium breaks out in the camp Mion charges forth with his horns and with a chilling roar flips the center wagons on their sides. The humans slash and stab at Mion, but his thick hide resists much of it and his roars of anger freezes some in their tracks. Those weaker willed soldiers Mion picks up and throws back into the woods to be killed and their weapons and armor rapidly distributed among the waiting orcs. Mion retreats after throwing his sixth soldier into the woods with a violent crash and for a moment the humans cheer as if their struggles are done. As soon as Mion reaches the darkness the orcs charge in with a war cry made of nightmares and Mion returns wielding a fallen tree.",
        "\"Spear wall! Spear wall!\" calls out the human leader, but he is too late. The monsters flood into the camp and make up for their numbers through sheer brutality. No human faces less than six orcs at once. They move from one poor soul to the next, taking them to the ground and slam their helmeted heads into the earth. They strip the men of their weapons one after another and move to the next like a flock of carrion. The horde grows stronger with each kill, even when one of their own falls to a spear or sword, the whole stands up with new steel. Many orcs die. But warriors die noble deaths and younglings become blooded warriors in the fray. When all the humans have been torn apart and the snow is red and filled with steaming bodies the monsters howl like wolves. Mion's tree has been splintered from his flurry of blows and he lays breathing heavily against a wagon, his body covered in gashes and a spear still stuck in his side. Garo kneels in the earth, his arrows exhausted and his greathammer coated in blood and bone. He looks around him as the orcs yell and realizes the cost of vengeance. Half his orcs lay dead. Garo is pulled from inside his head when his eyes wander over to Nóg. She kneels on a human she slew all by herself, a small needle in her hand. She's crying atop her enemy.\n",
        '"Brothers, sisters. Is this what you really wanted? I thought the killing would help. So many are dead. But, you\'re still gone. It still hurts."\n',
        'Garo carefully picks up the faerie and wipes away the blood on her with a handful of snow, "Nóg, what should we do with the dust?"',
        "\"Destroy it. The humans will think it was an accident. We can't let them know what we've done. If they discover this, our brutality, they will come for other monsters ten fold.\"\n",
        '"Very well."\n',
        "Once the orcs have retrieved their dead and reached a safe distance Garo opens the wagon carrying the dust and sets a small candle in the kegs full of golden dust. With the timer set Garo falls back into the darkness. Night becomes day for an instant as the explosion thunders out and shakes the whole forest. The flaming debris spreads far and wide. The burn goes wild and the ashes spread to distant horizons on the winter winds. It is days before the snowfall finally puts the faeries' rage to rest.",
        "Garo and his band of monsters possess few options and their souls are tired of violence and death. And so they travel West. Garo has some distant family there and it is custom for orcs to help their kin. It is a shock to the monsters when they discover a Dark Lord reshaping the land for some grander purpose. Garo, Mion, and Nóg's roles in that purpose is another story.",
        "THE END"
      ],
      final: true
    },
    recovery: {
      text: [
        '"If that is the case we shall do this carefully. The fewer of us we lose, the better. Everyone, come close, I have a plan."\n',
        "Some minutes of assigned roles later, the orc, minotaur, and faerie quietly approach the tree line begin the operation.",
        "At the far end of the camp Mion starts to raise hell. With his great arms he lifts a wagon off its wheels and tosses the hulk down onto a set of campfires turning the camp filled with light into one filled with shadows and terror. The only light remaining comes from a handful of torches and the glow of a half-moon. Mion roars and pounds his chest as the humans grab their spears and torches and ready themselves for a charge that never comes. Instead, Mion kicks up dust at the men and runs off into the darkness of the woods.",
        '"After it! Stick that abomination like a pig!” shouts one of the younger men to a handful of his brothers-in-arms who yell and rush forward with him.\n',
        '"Hold positions you idiots! It’s trying to lure us away!” commands the captain stopping the majority of his men from running into the dark. A wise move as the raucous shouting of the bolder men quickly turns to bloody screams. The remaining men in the camp take up positions and scan the darkness ahead of them, ignorant of the faerie slipping in behind them on her way to the horses. With her quick and deft hands Nóg undoes the knots binding the horses to their wagons and posts and strikes their rears with a bit of her magic. The searing heat will leave a mark, but is ultimately harmless. The horses though only feel as if their rears were suddenly aflame. Desperate to get away from the pain the horses rush out of the camp the only way they can, through the opening Mion made for them. They push aside any and all men in their path as they rush into the darkness. \n',
        "When the horses make contact with the men and the captains the chaos is just loud enough for Garo to make his move. He slams his greathammer into the back of the wagon holding the faerie dust, splintering the wood and causing the iron plates to fall off as their wooden base ceases to exist. Inside the wagon sits nothing but one crate packed tight and secured to the wagon walls. Prying open the crate Garo finds inside two kegs with golden dust. The prying action is louder than desired and Garo hears a voice call out to investigate the sound of cracking wood. With no time to spare Garo takes the kegs into his massive green arms and makes his way out of the wagon. As Garo steps into the open air he sees a mass of spearmen moving on him, the orc runs as best he can with the heavy kegs, but the humans are gaining. Garo doubts his plan for a moment when the sound of thundering hooves returns mixed with the hollering of orcs. From out of the woods comes the Upathu atop their stolen horses and the humans pursuing Garo stop in their tracks as their loss sets in.",
        "Mion runs in the center of the riders and cups Garo into his hands as the monsters sprint off into the night, any chance of pursuit almost entirely extinguished. Nóg flies up to Mion and sits on his shoulder, grabbing tightly to his black fur. She can’t help but look back and wave at the duped humans.",
        '"What next Nóg?" Mion asks.\n',
        '"Faeries belong high in the air. Where the air is wild. We will spread them from the highest tree we can find."\n'
      ],
      decisions: [
        {
          storyNode: "funeral",
          label: "A Faerie Funeral"
        }
      ]
    },
    funeral: {
      text: [
        "A day of riding later the monsters have settled around their destination in the late afternoon. A distant tree three times as tall as any around it. The mother of the forest. Nóg takes to the air with a beautiful grace, her pink-golden glow never leaving Mion's enraptured eyes. She invites all the monsters to climb the tree and join the ceremony and all humbly accept. There is little difficulty in climbing as the tree's branches are so old and large even Mion's weight does not burden them. When all have reached as high as they can go the sun finishes setting and the monsters crowd among the top of the tree like a flock of crows.",
        "Nóg says a silent prayer as Mion and Garo open the kegs. They pour the dust into the fast and cold winds as crystal tears run down Nóg's face. As the dust mixers with the wind, something magical happens. The air fills with golden light as giggling surrounds the top of the tree before turning to laughter. A thousand winged and golden faerie silhouettes appear from the dust who fly and dance on the orcs as if at a great ball. One takes Nóg's hand and holds her close as they step and spin in a gentle rhythm. Tears run down Nóg's face as she smiles and laughs like a little girl. For a brief moment, the faeries live once more.",
        "At the moment's end, Nóg's dance partner releases her and the silhouettes take back to the sky above. They wave excitedly like family seeing their loved ones off on a great journey as they fade away. When the golden glow and laughter is gone the monsters sit in the tree shoulder to shoulder for a long time after, listening to the wind blow over them.",
        "THE END"
      ],
      final: true
    },
    orc_rescue: {
      text: [
        '"Enough of us have died. We leave quietly. Except you Nóg, you\'re the least conspicuous of us. See if you can find anything about raider activities, last thing we need is to run into more unprepared. "\n',
        "Nóg nods her head and goes off while Garo leads the monsters out West and past the dead guard. They march on through the night to get as much distance as possible and finally take shelter in a mountainside cave. As the orcs rest and repair themselves Nóg returns with a desperate face.",
        "\"The humans, they've wiped out whole forests of faeries. Two weeks South, they're shipping them to the Capital right now. They'll use their bodies and dust as bombs, as fireworks!\" she grips her hands with an anger that makes her palms bleed.\n",
        "Even though Mion's smallest finger is still larger than Nóg's whole body, he still caresses her with a gentleness few show and her shaking begins to abate, \"We'll stop them Nóg, somehow, Garo will you help us?\"",
        'Nóg wipes her face and flies to look at Garo with pleading eyes, "Garo please, you stopped your kin from slaughtering those pigs. Help me bring my kin justice."'
      ],
      decisions: [
        {
          storyNode: "avenge_faerie",
          label: "Justice for the Faeries"
        }
      ]
    },
    join_elder: {
      text: [
        "Garo's thoughts fall on all the times the clan has been attacked and how large stores of food amount to little when you are frequently forced to flee and abandon supplies en masse. For two days the clan has not moved and with each day they become more vulnerable as their scent settles and their prints in the snow are piled onto one another. A plan of action is needed above all else.",
        '"Elder Mukal, I need to speak with you."\n',
        '"I was hoping you would come, Garo." The elder orc is long blind, her hair turned to silver strands. Her teeth though, remain sharp. "Sit, I have something I must discuss with you."\n',
        'Garo sits on the fox fur floor and takes her scarred hands into his, "Yes, grandmother?"',
        '"The message we received, it was from my cousin Khali in the West. She says her clan has joined together with the Mirik orcs, that they are building a village to run jointly."\n',
        '"Khali and the Mirik? How? They\'ve been blood feuding for generations. They hate each other."\n',
        '"They were starving, all of them, hunted for weeks on end by humans on horseback. They were cornered, doomed, until something, saved them. Something dark. Something almost noble. A dark regal thing of shadow and bone and teeth taller than any orc. It tore a hundred armored men and horses limb from limb all by itself. Pierced their steel armor like it wasn\'t there. That it crushed whole horses like rotten fruit. When it was done, it offered food and protection. In exchange it demanded submission and an end to the blood feuds."\n',
        '"End the feuds? So many parents, brothers, and sisters were slain on both sides. How could they simply do so?"\n',
        '"You have seen what hunger does, the desperation, the horror. All of which will soon fall on us." The old orc unravels a cloth filled with chew mark covered meats, "The rats found our stores last night. We have only a few weeks left now, and winter has only just begun. I do not trust the Mirik clan, but with so little of my blood left living, I must trust those who remain. We cannot wander any longer. We need allies. We need a Lord to protect us.” She grips Garo\'s hands with determination, "We leave as soon as we can, ready your people. We must survive, no matter what."\n',
        '"Yes, grandmother."\n'
      ],
      decisions: [
        {
          storyNode: "ready_camp",
          label: "Ready the Camp"
        }
      ]
    },
    ready_camp: {
      text: [
        'Garo exits the tent and quickly walks through the groups of playing children, past the tent menders, and up to the guards telling them all the same thing, "The Elder sends us westward, we leave immediately, spread the word." Accustomed to sudden leaving all remain silent as they focus on their duties and head on. Tents are rolled up. Dogs are tied to sleds. And a pair of women ready the hobbling elder for travel. Garo is showing one of the smallest younglings how to roll up the tents when the winds change and the scent reaches him, the scent of horses. In an instant the sounds of horses running through the snow fills the air and through the frozen forest comes a charge of light cavalry all dressed in white. They are a wall of spears with their shining spears reaching forward, the sun at their backs. Garo readies his greathammer in his shaking arms, "RAIDERS!"',
        "The camp guards take up positions with Garo to engage with the humans. When the wall of spears penetrates the camp Garo sidesteps and swings his hammer into a rider's chest, his light plate armor caves in and Garo feels the man's ribs give, the solid block of steel does not. One rider is dead but in that same instant thirty more flood into the camp, running through and trampling any all orcs and tents in their way.",
        'The orc bowmen fell four more riders before they come back for the second pass. "Flee! Flee now!" Garo commands the warriors, squashing his grief. "Take the younglings and go!" The second charge comes and the camp\'s numbers are once more decimated, warriors and younglings alike. The wolves were trained well, they drag down five horses with their riders and rip their throats out, saving a group of younglings from certain death. The wolves stand by their masters and bear their teeth at the humans, reading themselves for the next charge. The Upathu stand surrounded by fifteen dead and dying men and Garo feels as if the raiders could be repelled with steel and fang until a mass of raiders on foot, fifty strong, emerge from behind a snowbank. The orc\'s body goes cold and he makes a choice.',
        '"The younglings, save the younglings!” Garo and the able orcs take the seven remaining younglings and place them atop their wolves’ backs. Some yell defiant and demand to fight but Garo slaps them painfully, “Fly! Ride West and stop for nothing!" With tears in their eyes the last Upathu youths ride as fast as their beasts are able. The last dozen living orcs form a last line of defense among the ruins of their camp. They are injured and wielding anything they could find from swords to bows to even rocks. The last to join the final stand is Elder Mukal, she stands with a broken arm and leg from her trampling but in her good hand she grips a bloody axe. "Die well, my children."\n',
        "\"Die well,\" the orcs repeat as the third charge comes. The orcs roar defiant as they strike down more riders from their horses. Raiders are pinned to trees by arrows loosed at the zenith of orcish strength. The bodies pile up as skulls and jaws are ripped from bodies with axes and rocks. Eighty men attacked the Upathu this day and by the melee’s end, forty lay mangled and dead. Among them lay the last of the adult orcs. All but Garo. His chest and face are covered in slashes and his steel hammer is cracked and caked with gore. The humans encircle him with spears, jeering and hollering as they stab at him. When he rushes to break their line lasso after lasso fly out and wrap around Garo's neck and arms. It takes fours lassos and eight men to drag the orc to the ground and wrap him in shackles and chains before beating him unconscious. The next thing Garo knows he is sitting in an iron cage in the back of a wagon pushing its way through the snow, with nothing to look at but the rear wagon full of his clan's brains put in green liquid filled jars. Something inside Garo wants to scream and yell, but now he knows it is fruitless.\n"
      ],
      decisions: [
        {
          storyNode: "weeks_later",
          label: "Weeks Later"
        }
      ]
    },
    weeks_later: {
      text: [
        "Garo has sat nearly silent during the long and cold journey, mourning his clan and asking their spirits for forgiveness. His one solace in the journey has been watching his human captors grow tired and sick from the cold. Orcs are a hearty people, the winter air has already cost seven fingers and toes among the forty raiders while Garo is unaffected. The worse affected is the commander of the raiders whom has fallen deathly ill, his pained hacking and coughing goes deep into the night. Garo likes to imagine it is a revenge from his clan.",
        "Otherwise, the journey on the roads is mostly monotonous and full of staring off into the distance and bitter faced men. Everything changes when looking through the ragged canvas of the wagon Garo sees the raiders leave the forest road and exit to a clearing filled with stumps. As far as the eye can see, hundreds of axe-wielding men chop down tree after tree down into logs piled three men high in wagons. The orc soon forgets himself for a moment as he passes through a gate of metal larger than anything he could have imagined, with doors as thick as a horse is long.",
        'A gate guard waves the wagons along, "Welcome back to the Capital."',
        "Inside the city walls Garo can see thousands on thousands of towers of smoke rising up from within the city as the citizens warm their homes. The winter markets are in full swing and Garo's mouth waters as he eyes the sweets and meats on display after his weeks of thin soup. Past the markets, Garo's wagon turns into a stinking loading dock behind a wooden building, its sign reading \"Stein Hunters Guild\". Garo's amazement sours into evil hopes that all those fires go wild and burn down the whole wretched city.",
        "The orc stands tall as a team of fully armored guards emerge from the building with lassos and pikes. They lead the orc inside through musty cobwebbed stone halls to be placed inside a lone holding cell in a secluded room. The cell is deep inside the compound where it remains open to the air but for the iron gate above it that even a minotaur would struggle to move. They leave him in the cell without a word and for the first time in weeks Garo is alone. With no one staring at him, with his enemies who knows where, and left with nothing but his thoughts the warrior can focus on little but the lonely silence around him. A great cold fills Garo and the proud survivor sits in the corner of the cell as the snow falls over him. Garo stares into the overcast sky with emerald eyes until sleep takes him."
      ],
      decisions: [
        {
          storyNode: "awake",
          label: "Awake"
        }
      ]
    },
    awake: {
      text: [
        "Garo awakes to the sound of iron grinding along stone. The door to the room slowly swings open and something beautiful comes into view. A young human woman in plain blue clothes with vibrant green eyes. In her hands she holds a grey blanket and a bit of bread. She closes the door behind her before approaching with thoughtful and cautious steps.",
        "\"H-Hello. I thought you might be cold.\" She kneels beside the cell and carefully sets down the blanket and bread. \"Don't worry, I'm just a servant girl. I'm Willow. What's your name?\"\n"
      ],
      decisions: [
        {
          storyNode: "accept_gifts",
          label: "Accept Willow's Gifts"
        },
        {
          storyNode: "reject_gifts",
          label: "Leave Me"
        }
      ]
    },
    accept_gifts: {
      text: [
        'The orc wraps himself in the blanket and swallows the bread nearly whole, licking each crumb off his fingers. "I\'m Garo."',
        "\"It's nice to meet you Garo, I've never seen an orc before, a living one at least.\"\n",
        '"You should get out more."\n',
        'Willow cocks her head to side with a curious smile "The stories were true, you are intelligent. I was told growing up orcs could barely understand language. Let alone speak it."',
        '"Seems you were lied to. We have songs and poets, like your kind," he sighs, "Well, I did, my clan is gone now. Because of your kind. Why are you here? To mock me?"\n',
        '"No! No. I\'m here to help you."\n',
        '"Why bother?"\n',
        '"I believe there can be peace between monsters and humans. We all have our own territory, we don\'t have to fight each other."\n',
        "\"Fight? We've been trying to just survive you devils. I haven't heard of an attack on a human settlement since I was a youngling, but every winter my clan grew smaller and smaller, until there was just me.\"\n",
        '"I\'m sorry, my people have done terrible, terrible things."\n',
        "\"But there's just one thing I don't understand, why do you take our organs, put brains in jars?\"\n",
        '"To live. People are getting old, older than they\'ve ever been. But, there is a cost to long life, the elders are becoming forgetful. Can’t recognize their own children, their wives or husbands. And then they die. Your brains help them remember, help them cling longer to life. The Capital demands more medicine and so sends more raids on magical beings."\n',
        '"I\'m- I’m medicine? What will become of me?"\n',
        "\"You'll be brought to the iron room. That's where they do terrible things to special monsters. I heard how many men you killed, they think you're unique. That they can learn something from your body. They're coming for you tomorrow.\"\n",
        '"Why would you deny your own people more life? Won’t they see you as a traitor?” Garo asks.\n',
        '"The long life is not a sin. It is the means. What is a long life worth if you must eat carcasses like a vulture?” Her face softens as she smiles a bit, “And if all goes well, no one will know I rescue orcs in my free time.”\n',
        'Garo can’t help but chuckle at the comment before looking at Willow curiously, "Alright, I believe you, how are we getting out of here? Are there others with you?”',
        "Willow's eyes fall to the floor, \"About that, I tried to get help from the other activists, but the officers said it was too risky to try to save one orc. It's just me tonight.\"",
        '"Oh. Do you- do you have a plan?"\n',
        'Her eyes light up and her youth shines out, "Yes, when the guard comes to feed you I will hit him over the head and take his keys. Then we spirit you away in the night and none shall suspect anything but a careless guard."',
        "\"That's it? That's barely a plan at all.\"\n",
        "\"Well I'm sorry I'm not some expert at jailbreaks, do you have any ideas?\"\n"
      ],
      decisions: [
        {
          storyNode: "fire",
          label: "Set the building on fire."
        },
        {
          storyNode: "drunk",
          label: "Get the guards drunk."
        },
        {
          storyNode: "reject_gifts",
          label: "Go away, I'll make my own way out."
        }
      ]
    },
    fire: {
      text: [
        'Willows eyes narrow in concern, "You want me to what?"',
        '"Set a fire, big enough to draw their attention long enough for me to get out of this city."\n',
        '"But-"\n',
        "\"You're just a servant girl, aren't you? What do you care if this place burns down?\"\n",
        '"I\'m not, I mean, that could hurt people Garo."\n',
        'The orc presses his head to the iron bars and his face softens, "Willow, if you continue down this path people will be hurt, no matter what."',
        '"I- I need time to think. Just wait here, alright?"\n',
        '"Don\'t have much else I can do."\n'
      ],
      decisions: [
        {
          storyNode: "later_evening",
          label: "Later That Evening"
        }
      ]
    },
    drunk: {
      text: [
        '"I think I can do that, there\'s a celebration going on tonight. How drunk would we need them?"\n',
        "\"I'm a big green orc more than twice your size, we'll need them out cold to not respond.\"\n",
        '"I doubt we have that much alcohol, but, maybe we don\'t need to get everyone drunk." Willow\'s eyes quickly run up and down Garo. "Can you stand up? I need your measurements."\n',
        "Garo's brow ruffles at the request but he presents himself nonetheless. Willow studies him with careful eyes and smiles. \"A suit of armor, I'll get the guards in the barracks drunk and slip out with a key and suit your size. Does that sound alright?\"",
        '"What do I have to lose? Let\'s do it."\n'
      ],
      decisions: [
        {
          storyNode: "hour_later",
          label: "An Hour Later"
        }
      ]
    },
    hour_later: {
      text: [
        "Garo can hear Willow coming long before she enters the room dragging a full set of armor on a rather expensive looking carpet.",
        '"Blast it girl! Could you try to be a little more careful?"\n',
        "She breathes a heavy sigh when she can finally stop dragging the plate armor, \"Couldn't- whew, couldn't really be helped.\"",
        '"Did you run into any trouble?"\n',
        '"Thankfully no, a pretty smile and endless wine has a way simplifying matters. Ready?"\n'
      ],
      decisions: [
        {
          storyNode: "armor",
          label: "Don the Armor"
        }
      ]
    },
    armor: {
      text: [
        "Willow releases Garo from his cell and with untrained but dedicated hands and a fair bit of time she manages to dress him in the bulky plate armor, together with the layers of fabrics and the helmet with only the most basic pinholes to let in light and air, not a bit of green skin can be seen.",
        '"It\'s a bit hard to see, but how do I look?"\n',
        '"Almost charming," she takes Garo\'s gauntleted hand and leads him out of the holding room, "Come now, I\'ll lead the way, try not to fall. Exposing yourself would be, awkward, to put it lightly."\n',
        "Garo never thought he'd hold a human's hand, let alone that one would take it herself. He responds dully, trying to decide how to feel, \"Ah, of course.\"",
        "Willow speedily leads the clanking orc through the elegant candle lit halls until finally reaching the main hall currently filled with a hundred some men and women celebrating a successful winter campaign and harvest. Busy with their games and drinking none pay any attention to the young woman hand-in-hand with the tall ‘knight'. The pair pass through the hall and leave out the front entrance, only to be met with a, much smaller, knight reaching out his hand to catch the opening door.",
        '"Thank you, oh what is this, Lady Willow? What are you doing in servant\'s clothes? And who is this with you? What are you up to this time?"\n',
        'Willow\'s eyes go wide and her grip tightens, "Sir Mikail, w-what a pleasant surprise. Um well you see-"'
      ],
      decisions: [
        {
          storyNode: "speak",
          label: "Give an Excuse"
        },
        {
          storyNode: "nudge",
          label: "Nudge Willow"
        }
      ]
    },
    nudge: {
      text: [
        "Garo turns his helmet with a metallic grind to look at ‘Lady' Willow and nudges her with the side of his elbow.",
        '"Um? I’m on a date?” she gives a toothy smile. “You know how my father is. It\'s easier to go out on the town dressed like the common girls."\n',
        '"I understand that much, I\'ve heard all the girls do it. So then who is this behemoth?"\n',
        '"This is, Garo, he\'s um, new here. He wanted to get a tour of the city."\n',
        '"Does he talk? Kind of rude to let the lady do all the talking you know."\n',
        "She wraps herself around Garo's armored arm. \"Oh, I doubt mind! He's shy, but quite sweet.\"",
        '"Alright, I know my place, just stay safe my lady. Good to meet you, Garo." Sir Mikail turns out of the pair\'s way and gestures out to the snowy streets.\n',
        "Garo simply nods and the pair quickly walk away from the guild house. The smell of firewood burning permeates most everything and each house gives a warm glow through frozen windows. Couples roam the streets wrapped thick in coats and bearing red noses. Willow removes her hands from Garo so that she may rub them together and breathe warm air over them.",
        "\"So it's ‘Lady' Willow? You're not a servant?\"\n",
        '"I\'m sorry I lied, but I doubt you would have ever trusted me if I introduced myself as the heiress to a company of monster hunters."\n',
        "\"No, I likely wouldn't have. I'm not exactly in a position to complain now though.\"\n",
        '"All\'s well that ends well then."\n',
        "In time the pair reach the snow covered port filled with galleons, war ships, and luxury ships. Neighboring the port is a much less organized mass of fishing boats and row boats."
      ],
      decisions: [
        {
          storyNode: "take_boat",
          label: "Escape in Row Boat"
        }
      ]
    },
    speak: {
      text: [
        '"She wanted a bodyguard while she went out, but I\'m new here, any taverns you recommend?"\n',
        "Mikail gives a light chuckle, \"Oh I see, well, I'm glad you're bringing a bodyguard this time my lady. I'm just dropping off a letter and then I'm off duty, wait a moment for me and I'll show you two to a good place.\"",
        'Garo responds as if the two were already good friends, "Sure thing, sounds good."',
        "As soon as Mikail closes the door behind him Willow slaps Garo's helmet.",
        '"What are you doing? We\'re trying to get out of the city, not go out for drinks!"\n',
        "\"I'm sorry, I was a little thrown off by ‘Lady Willow'! You're a noble girl! What the hell are you doing helping an orc?\"\n",
        "\"That doesn't mean I don't want to help anyone! And it's not like you would have trusted me if I told the truth. Look, just have faith in me.\" \n",
        'Garo points his finger and is about to reply when the guild doors swing open and Mikail returns with a plain but warm looking coat for Willow, "I can\'t have you freezing because you want to play commoner, take it and follow me you two!" The orc and Willow give each other a look and follow Mikail, who does most of the talking on the way, acting more like a tour guide than a knight until they reach the Black Crab Tavern near the Northern Port. The patrons are a mixture of gruff seamen and adventurers come off of ships, heavy with coin and stories, eager to share it all over copious alcohol. It\'s an atmosphere with infectious liveliness. "So, shall I get us some drinks?" asks Mikail.',
        "Willow nods curtly.",
        '"And you my friend?"\n'
      ],
      decisions: [
        {
          storyNode: "drink_mikail",
          label: "I'll take a drink."
        },
        {
          storyNode: "no_drink",
          label: "I don't drink."
        }
      ]
    },
    drink_mikail: {
      text: [
        '"Good man. Bartender, three ales! If we\'re all going to drink I should hit the latrine, back in a moment."\n',
        'The drinks arrive quickly and Willow looks to Garo as if he had just slapped her mother. "Just what are you thinking? You can\'t take your helmet off to drink!"',
        '"I panicked!"\n',
        '"Well let\'s hurry up and vanish before he comes back."\n',
        "Garo stays in his seat and doesn't budge, \"If we go he'll get suspicious, and then even if you get me out, it won't be long until they realize you helped the orc escape. You humans hang traitors don't you?\"",
        "Willow sighs, \"I was hoping to save this for later, but I'm not planning on staying here. In fact, I’m running away with you.”",
        "\"Go with me? Why would you go with me, you're some kind of fancy ‘Lady'.\"\n",
        "\"I'm a ‘Lady' only because my family kills thousands of monsters a year and sells their corpses. And at least half the people in this tavern have eaten some of them or know someone who did so.\"\n",
        "\"Willow, you're safe here. You'll be a traitor if you go.\"\n",
        '"I already feel like a traitor every time I look in the mirror. I want to be able to look at myself again."\n',
        "Garo leans back and takes in the sight of the small but resolute woman before him, “Willow-” Garo is cut off as Mikail then sits back in the seat between him and Willow.",
        '"You guys didn\'t start drinking yet? No need to wait on me, drink away!"\n'
      ],
      decisions: [
        {
          storyNode: "charade",
          label: "Try to Maintain Charade"
        },
        {
          storyNode: "bye_mikail",
          label: "Get Rid of Mikail"
        }
      ]
    },
    charade: {
      text: [
        "Garo grabs the ale and without opening his visor pours the drink through the breathing holes. It is loud, it is sloppy, and it catches the tavern's attention.",
        'Mikail looks at Garo like a mad man, "What the devil did you do that for? Just take that helmet off, you\'re wasting good drink."',
        '"I\'d um really rather not."\n',
        '"Come now. You\'re covered in ale, let me get that off you."\n',
        '"No, no! I- I have a skin condition! It\'s really embarrassing."\n',
        '"It can\'t be that bad, now come on just stay still."\n',
        'The ale slickened helmet makes it difficult for Garo to hold on and with a pop the helmet comes off. Garo\'s green skin and fanged mouth are only a breath away from Mikail as he stares on stunned. "An orc?"',
        "Garo palms the knight in the chest hard, pushing Mikail onto the floor. The adventurers draw their axes and swords and stare at the orc with a hunter's glee.",
        '"Oh no." Garo gasps as he grabs Mikail\'s sword and sprints out the door.\n',
        'Willow jumps after Garo and stands in the doorway with her arms wide, "No! Leave him be!"',
        'Mikail drags himself from the ground up a barstool as he points with anger, "Traitor! Take her too! She\'s a monster lover!"',
        'The orc is already three houses away when he hears Willow\'s yell, "Garo! Run!"'
      ],
      decisions: [
        {
          storyNode: "return_willow",
          label: "Go Back for Willow"
        },
        {
          storyNode: "willow_sacrifice",
          label: "Obey Willow"
        }
      ]
    },
    return_willow: {
      text: [
        "Garo remembers when he made his last stand with his clan against the raiders. He could not call himself an orc if he let someone else fall in his stead. Turning hard on his heel Garo sprints back into the tavern and hacks and slashes like a being possessed. Hands and heads are sent flying as Garo grabs Willow's hand and the two of them rush outside.",
        '"You came back!"\n',
        '"I had to!"\n',
        '"You idiot, you came back! Watch out!"\n',
        "Willow pushes the orc forward as from above them comes a net that wraps around Willow and pulls her back towards the adventurers.",
        '"Willow!"\n',
        "Garo's yelling is useless against the nets that soon entangle him and drag him to a mass of club wielding spectators. They beat him until the world goes dark."
      ],
      decisions: [
        {
          storyNode: "awake_captured",
          label: "Awake"
        }
      ]
    },
    awake_captured: {
      text: [
        "Garo awakes naked but for rags in a bleak black stone dungeon on a wet and cold floor, the air filled with mold. A set of small windows lights the room, pigeons sitting in them. Across from Garo he can make out the sight of a bloody and bruised Willow tugging and clawing at the stones of the wall.",
        '"Are you alright?" Garo asks.\n',
        "\"Just wonderful. I've been disowned, brought undue attention on monster sympathizers, and we're going to be publicly executed in three days. And I can't get these stupid rocks to budge!\"\n",
        '"Well it could be worse."\n',
        '"How could it possibly be worse Garo?"\n',
        '"They could be executing us right now."\n',
        'Willow scoffs and takes a seat. "A funny man now are you?”',
        '"Gallows humor out of fashion already?”\n',
        '"Never,” Willow lightly laughs. “Any ideas on getting us out of here?"\n',
        '"Fight like hell when they take us outside?"\n',
        '"We don\'t really have any other option do we?"\n',
        '"Nope."\n',
        "The pair sit in silence as they count the minutes till their judgement. Lost in their thoughts they almost miss the curious and bloated looking pigeon that flies through the western window and waddles over to Garo's cell. It's horrible retching catches their attention as from deep in its gut it expels a key with a small skull on it.",
        'A deep voice a pigeon should not have comes from its mouth, "A gift. From the Dark Lord. Use it wisely."',
        "The creature then leaves the way it came. Garo takes the heavy key and with magnetic energy it pulls itself towards the lock on his cell. The key shakes and the skull glows as the cell door unlocks.",
        'Willow looks at the freed Garo and key with confusion, "Who is this Dark Lord?"',
        '"Right now? A friend."\n',
        "Garo releases Willow the same way and they ready themselves by the door. The skeleton key unlocking the door in an instant.",
        '"Are you ready Willow?"\n',
        '"Let\'s get the hell out of here."\n',
        'Garo offers his hand to his only ally. "Together this time."',
        'She takes the hand and holds it tight. "Yes, together."',
        '"Alright. Round two, here we go."\n',
        "Garo slowly swings open the door and the pair rush up the torch lit staircase, ready to meet whatever fate may come hand-in-hand.",
        "THE END"
      ],
      final: true
    },
    willow_sacrifice: {
      text: [
        "Garo cannot let Willow's sacrifice go to waste. He runs as fast as he can through the snow to the port. Along the way a faster adventurer attempts to intercept and capture him. The skinny masked rogue takes to the rooftops in pursuit with crossbow and knives. Just as Garo reaches the docks a bolt strikes him in a back leg and he tumbles to the ground. The rogue leaps from the rooftop with twin daggers but with orcish strength Garo recovers just in time to swing his sword and cleave the man in two.",
        "Covered in blood the orc stands on shaking legs and hobbles his way to the tethered boats. Garo hacks away as many tethers as he can and pushes the boats out to sea. When the lagging crowd of adventurers turn the corner Garo cuts his losses and leaps into a small row boat already pushed out. In the moment he jumps an arrow strikes his back fired from a second rogue with a longbow. Garo roars as he wrenches the arrow out and takes the oars in his hand. Everything on the line, the orc rows hard out to the snowy sea. To his relief the next arrow fired his way splashes harmlessly into the sea and the adventurers do not seem interested in chasing a lone orc out onto the cold ocean while in full gear.",
        "Without immediate pursuers Garo feels himself almost give in to the pain of his wounds. But then he remembers all the sacrifice that got him here. His brothers and sisters and now Willow, so many people he has had to go on without. The orc turns the pain into fuel and grips the oars with new strength. Garo moves West at a feverish pace, undaunted by snow, rivers, and mountains. The whole journey his mind revolves around one thing, the dark being to the West. The ‘Lord’ his grandmother described. There must be a reason Garo survived this long, was helped so much. Someone must have answers for the world’s madness. In his heart Garo feels this 'Lord' will show him the meaning behind it all, even if he has to beat it out of him.",
        "THE END"
      ],
      final: true
    },
    bye_mikail: {
      text: [
        "Garo just stares at Mikail as he gulps down his drink happily.",
        '"Ahhh that\'s the stuff," he looks at Garo confused, "What\'s the matter, friend? Staring daggers into me-"\n',
        "Fast as horse’s kick Garo rams his steel gauntlet into Mikail's face and sends the man falling onto his back with a thud. The hall goes silent for a moment as all the fishermen and adventurers turn to look at the flash of violence.",
        'Garo looks around the room to see the patrons with hands on their axes and sword appraising the scene. Garo thinks fast, "He called my mother an orc!"',
        "The chatter resumes quickly and everyone's hands return to their drinks, a few even raise their pints to Garo. Willow leans down and takes Mikail's money pouch, dropping a few copper coins on his chest for the ales. Pocketing the bag she takes Garo's hand and leads him out of the Black Crab.",
        "Once out in the snow Willow's grim and serious expression melts into gleeful laughter. \"Oh you have no idea how much I've wanted to do that to that oaf. That was just wonderful.\"",
        '"You\'re welcome? You wanted to go, so I got rid of him."\n',
        'Her eyes sparkle from the mischief, "Charming."',
        '"So, what now? How do we get out of the city?"\n',
        "\"I don't trust these fisherman now that they've seen us, so no on the port. We'll meet up with the Monsters' Rights members, they have tunnels under the walls and into the woods.\"\n"
      ],
      decisions: [
        {
          storyNode: "rights_tunnel",
          label: "Meet with Activists"
        }
      ]
    },
    rights_tunnel: {
      text: [
        '"If you trust them, I\'ll give them a chance."\n',
        'Willow takes Garo\'s hand once more and leads him through the late night to a simple inn on the northwestern edge of the city. Going around to the back she knocks on the basement door and is met with a stern looking woman. "Willow? And who is this?" the stern woman puts her hand on a dagger at her side.',
        '"Spenta, it\'s ok!"\n',
        '"No need for weapons," Garo removes his helmet, "I\'m just looking for help."\n',
        '"You did it? Willow you got the orc out? Oh my gods, hurry up and get inside."\n',
        "After an abridged version of their escapades Garo and Willow are rather roughly shoved into the tight tunnels dug beneath the city from which they emerge with a newfound love for fresh air and the ability to fully stretch their bodies."
      ],
      decisions: [
        {
          storyNode: "tunnel_willow",
          label: "Journey West"
        }
      ]
    },
    tunnel_willow: {
      text: [
        "Garo and Willow stand far outside the city walls with nothing but their clothes, a few days food, and a pair of daggers.",
        '"You know it\'s going to take months to walk all the way West right?"\n',
        '"I know."\n',
        '"This is going to be dangerous, I\'m talking bears, wolves, other monsters, adventurers, maybe even dragons!"\n',
        '"I know."\n',
        '"Nothing I can say would make you go back, could it?"\n',
        '"Nope."\n',
        'Garo offers his hand to Willow, "Well then, let\'s get a move on, partner." She takes it with a smile and warm grip.',
        "And so Garo and Willow begin their long journey West. One in search of the last vestiges of his family. The other looking to live free of her bloody origins. Both looking for purpose. It would be many long generations after their daring escape when the duo's adventures become often read and enjoyed by all beings, monster and human. Though they would be especially beloved among orcs.",
        "THE END"
      ],
      final: true
    },
    no_drink: {
      text: [
        '"Ah, very well." Mikail waves down the bartender with two fingers and soon two ales appear. "So, what\'s your name friend? How\'d you find yourself in the Stein Hunting Guild?"\n',
        '"Well, that, it\'s an interesting story. How did I come to be here?"\n',
        '"Um, yes, how?" Mikail inquires.\n',
        'Garo sees Willow pointing vigorously southward behind Mikail and miming a bow, "I was a hunter, just game, for a town um, South of here."',
        '"Oh? Which one, I\'m a Southerner myself."\n',
        'Willow aggressively points to her pint of ale. "Town\'s called, Ale-ahem, Aleon?"',
        '"Haven\'t heard of it, new settlement?"\n',
        '"Oh yes, very new. Monster killer pays more than hunter, so here I am."\n',
        '"Simple man, simple reasons. I like that. I came from-"\n',
        "Mikail would talk endlessly about his hometown in immense detail, much to Garo's misery. The only blessing being Willow making sure the knight always had full cup of ale and Garo's helmet hiding his face looking like a mix of bored to death and eyebrow twitching anger. Finally, Mikail's stamina gives out and he falls over red-faced and snoring loudly. Garo and Willow sigh with relief and rummage through his belongings for his coin pouch and throw a few copper to the bartender.",
        '"Drinks are on him! C\'mon Willow."\n',
        'Garo takes the woman\'s hand and the pair rush out of the tavern and into the snowy night. "By the gods! That man would not shut up! Ahg! I wanted to crush his jabbering skull!"',
        "\"Well I'm glad you didn't, last thing we could have needed. Let's get to the port now, it's the easiest way out of the city for us.\"\n",
        "Garo follows after Willow to find the port starting to freeze over, rows of ships lined up getting covered in snow, all the great galleons and warships on one side, the fishermen's boats on the other."
      ],
      decisions: [
        {
          storyNode: "take_boat",
          label: "Escape in Row Boat"
        }
      ]
    },
    take_boat: {
      text: [
        "Garo quickly selects a row boat and takes his seat by the oars as Willow untethers the boat from the dock.",
        '"I can\'t sail so this is the best we can do." Garo looks into the water as the snow falls trying to think of how to thank a human. "Hey, Willow? I don\'t really know how to say this, so all I can really do is say, ‘Thank you\'. You saved my life, you, a human! I never would have thought-"\n',
        "The small boat then shakes and wobbles in the water violently as the woman leaps into and pushes the boat out onto the icy waters.",
        '"What the- what are you doing? You need to go back!"\n',
        "\"It won't take them long to connect a missing suit of armor with a missing orc and the person who dealt with both. My life as ‘Lady Willow' is finished.\"\n",
        '"And still you helped me?"\n',
        "“I've been living a life of comfort built on murdering monsters. I couldn't stomach another day of it, especially after meeting one who seems so, well, normal. Will you take me with you?\"\n"
      ],
      decisions: [
        {
          storyNode: "willow_boat",
          label: "Escape with Willow"
        },
        {
          storyNode: "willow_leave",
          label: "Leave Willow Behind"
        }
      ]
    },
    willow_boat: {
      text: [
        '"You\'d have to pull your own weight. That means hunting, keeping watch, building shelter." The woman nods her head like a praised puppy. "It will be dangerous, monsters, beasts, humans, we could even run into a dragon!"\n',
        '"I accept that, it sounds magical even."\n',
        'Garo’s voice is soft and earnest, “You could die, Willow. If we’re caught together, they’ll do terrible things to us both."\n',
        'Her voice grows quiet and her excited eyes turn gentle, "I know. I know." She takes Garo\'s hands and holds them tight, "I was raised off death\'s wealth, I want to live by my own power, my own rules now. Whatever fate befalls me, so be it. I will die well."',
        '“Die well,” Garo whispers as he thinks to his clan’s last words. The orc takes off his helmet and breathes in a breath of fresh cold air and cocks his head happily at the proud woman before him, “If that’s the case, then I guess we’re partners now."',
        '"Yes!"\n',
        'Willow lunges at the orc and gives him a great hug. "The adventures of Willow and Garo, Garo and Willow? Well, we\'ll have time to figure that out later. Do we have a destination in mind?"',
        '"The Western Coast. I have family waiting for me there."\n',
        '"What kind of family? What kind of things do orcs do?"\n',
        '"Distant cousins, but a normal family I guess. One or two elders, couples with maybe a dozen or so younglings each. Every spring Orcs collect flowers to honor the Goddesses of life, and then they pursue their blood feuds. In the summer we hunt and dry food for winter. In the winter we would tell stories in the night, funny ones to keep the children calm."\n',
        'Willow edges over to Garo and leans onto his broad chest before giving a large yawn, "Don\'t mind me, it is cold out and you are warm. Tell me a story, it will smooth the journey."',
        'Garo\'s heart skips a beat as Willow looks at him with sleepy green eyes. He lightly sighs and smiles as he sifts through his memories. "There was once a Faerie King named Eyrek, also known as the Little Usurper. Legend has it he rode into battle on a cat, with a saddle, reins, and lance. But, in the beginning he was just a down on his luck gambler."',
        "Willow's head falls into Garo's lap and she begins to lightly snore. Garo continues telling stories as he rows through the night and with each happy tale finished, he feels a little less cold.",
        "THE END"
      ],
      final: true
    },
    willow_leave: {
      text: [
        "\"Where I'm going, humans aren't welcome. I won't be able to protect you.\"\n",
        '"Do you think I need protecting?"\n',
        '"Yes! You\'ll be safer among your own kind, keep up the fight in a familiar place, not chasing me across the world."\n',
        "\"I'm staying and that's final.\"\n",
        '"No, it\'s not."\n',
        "Garo rows back to the dock and Willow's complaints and efforts to remove his hands from the oars all fail."
      ],
      decisions: [
        {
          storyNode: "willow_protect",
          label: "Protect Willow"
        }
      ]
    },
    willow_protect: {
      text: [
        'Garo picks up the struggling woman and ties her to the mast of a nearby sailboat. "This will give you an alibi, just say I forced you to free me. I\'m sorry. Don’t look at me like that, please. Can you keep up the good fight Willow, can you promise me that?"',
        'Willow\'s eyes are wet with disappointment, "Yes. Will I ever see you again?"',
        '"Who knows what the gods have in mind? Goodbye Willow, take care."\n',
        "And so Garo the orc vanishes from view on the Northern Sea in search of a dark 'Lord' in the West, leaving behind a woman who dreams of a kinder world. A shiver runs down Garo's spine. An unmistakable feeling takes him, the feeling that the world is changing. He rows hard through the night, eager to meet the future. A future in which he will find himself and Willow as twin cornerstones in a new and unimaginable world where the lines between monster and man are set aflame.",
        "THE END"
      ],
      final: true
    },
    reject_gifts: {
      text: [
        '"But-"\n',
        "\"I said leave! I can't stand to be pitied by the likes of you. I won't leave my life in the hands of some girl with a pathetic plan. Leave me to mourn my dead.\"\n",
        '"Please, I just want to help."\n',
        '"Then leave!"\n',
        "The green-eyed Willow shrinks and glues her gaze to the floor as she leaves the room, defeated. Leaving Garo alone with his anger and the snow around his feet."
      ],
      decisions: [
        {
          storyNode: "later_evening",
          label: "Later That Evening"
        }
      ]
    },
    later_evening: {
      text: [
        "Garo sits in his cell, awaiting his judgement. In preparation to go down fighting he has wrapped his knuckles in cloth and breathes in meditation. Night has come and only dim moonlight illuminates his cell now. Garo is brought out of himself as he senses something unexpected and wonderful, the scent of roast duck. The door to the room opens to reveal a rat-faced guard holding the meal.",
        '"Well hello there," the guard smiles. "You\'re a lucky one, some pretty servant girl wanted to make sure you had a nice meal before being set up the hill. Asked me real nice, silly thing. Like a monster deserves a meal like this. You can just sit and watch." The guard greedily consumes the duck and Garo swears he\'s seen pigs eat more reservedly. After the guard is finished licking his fingers there is naught but bones left which he promptly tosses in the orc\'s cell. "Enjoy, I\'ll tell her you loved it." Once the guard leaves Garo grabs the bones and looks at them with a smirk.\n'
      ],
      decisions: [
        {
          storyNode: "pick_lock",
          label: "Pick the Lock"
        }
      ]
    },
    pick_lock: {
      text: [
        'He takes the leg bones and carefully cracks and breaks them until he has a few strong and long shards of bone. It takes what feels like hours to unlock the cell door, the bones chipping away into nearly useless debris until with a last lucky twist the click of freedom rings out. "It was a longshot Willow, but thank you for giving me a chance," Garo thinks to himself. With no time to waste Garo opens the cell door and peers down the luckily empty hallway.',
        "The guild house is no prison, it is dinner time and the sounds and smells of winter revelry float through the candle lit halls with no more guards to be seen. The orc still cautiously advances, carefully checking corners and staying in the shadows. In time Garo comes to a set of paths. To the right is a brightly lit staircase with red carpeted steps, not a sound can be heard up it. To the left is a dark hallway with a lone iron door at the end, the stink of death coming from it."
      ],
      decisions: [
        {
          storyNode: "upstairs",
          label: "Head Upstairs"
        },
        {
          storyNode: "dark_hallway",
          label: "Head Down Dark Hallway"
        }
      ]
    },
    upstairs: {
      text: [
        'Garo heads up the stairs and reaches a brightly lit painting filled hall that ends at an ornate red door. He tries the doorknob to find it locked. "Damnation," he hisses. With his bone pick gone it would take force to get through.'
      ],
      decisions: [
        {
          storyNode: "kick_door",
          label: "Kick the Door Down"
        },
        {
          storyNode: "dark_hallway",
          label: "Go Other Way"
        }
      ]
    },
    kick_door: {
      text: [
        '"To hell with it." Garo\'s kick splinters the door frame with a crash and he rushes inside the room to find a luxurious silk bed and the young woman Willow having awoken with a fright.\n',
        '"Garo?!"\n',
        '"You? You\'re not a servant?"\n',
        '"It\'s not like you would have trusted a noble girl!"\n',
        "The acquaintances' reunion is interrupted by immediate danger.",
        '"Over here! I heard something crash!" calls out a distant voice. "Oh gods, the orc is free! Protect Lady Willow!"\n',
        'With a start Willow stands and opens her window to the outside. She wraps Garo in her bed sheet to cover his green flesh. "Head northwest to the Silver Tree Inn, go to the basement door in the back, you\'ll find allies there. Now go!"'
      ],
      decisions: [
        {
          storyNode: "jump",
          label: "Out the Window!"
        }
      ]
    },
    jump: {
      text: [
        "Without delay Garo leaps through the window and down into the garden's below, unfortunately it is a bed of sharp winter roses that cut him well and cover the white sheet in petals. He groans painfully from the thorns in his side.",
        '"You didn\'t care to warn me?!"\n',
        '"Sorry! They must\'ve just put those in!"\n',
        'Guards rush into Willow\'s room and witness the orc rolling out of the painful flowers. "The orc is loose! Alert the city watch!"',
        "With no time for goodbyes Garo takes off like a bloody ghost running through the snowy night. The orc sticks to the back alleys and shadows far from any light, blending in nicely with the less reputable folk and those hiding from their own troubles. Alarms go out and bells are rung as word of an orc loose in the city spreads like wildfire, a fire Garo barely manages to avoid by the time he reaches the Silver Tree."
      ],
      decisions: [
        {
          storyNode: "knock",
          label: "Pound on the Doors"
        }
      ]
    },
    knock: {
      text: [
        'After a moment of rapid pounding the doors fling open and Garo reveals himself. A stern looking woman gasps at the sight of an orc, "Willow actually got you out? Get inside! Quickly!"',
        "Garo climbs down the stairs into the candle lit underground and sees a half-dozen men and women looking over piles of maps and other documents, all with knives on their hips. Most look like they have never even seen an orc, at least, not a live one. The staring does not bother Garo who takes a much needed rest on the dirt floor. The stern woman comes to him with a jug of water Garo drinks greedily.",
        "\"Welcome to the Monsters Rights Initiative, name pending. We're small, but we're determined. And we're gonna get you out of here, tonight. No one will be looking for their runaway orc outside of the walls.\"\n",
        '"Thank the gods, I really hate this place."\n',
        '"Then let\'s get you out of here. Have a direction in mind?"\n',
        '"West. My clan elder\'s last request was that I head West and meet someone."\n',
        '"West it is then. I hope you\'re not scared of tight places," the stern woman asks as she reveals a secret trapdoor to below the basement.\n',
        '"Do I have much of a choice?"\n',
        '"None."\n',
        '"Of course."\n'
      ],
      decisions: [
        {
          storyNode: "tunnel",
          label: "Escape Through Tunnel"
        }
      ]
    },
    tunnel: {
      text: [
        'Garo is lead through a trap door to find himself in a nexus of tunnels just barely large enough for him to fit. The woman goes first with a lit lantern. With little else to do but crawl Garo speaks up, "Why are you doing this? Helping monsters?"',
        "\"I used to be an adventurer. Fighting and killing monsters was my life. But, after a while I realized I wasn't fighting anymore. I was a boogeyman with an axe chasing fleeing families of orcs. I don't care that they're medicine, I did evil things. So I quit and now here I am, in a cold and wet hole in the earth with a fugitive orc.\"\n",
        '"It\'s good to have a hobby?" Garo says not knowing how to really respond to such honesty. The orc swears he can feel the woman rolling her eyes from the way she sighs in response.\n',
        "An hour of the most uncomfortable crawling possible later Garo exits out the end of the tunnel outside the Capital's walls. He has never tasted air so fresh and wonderful. As the orc basks in the feeling of being able to stretch his limbs Garo's guide hands him a bag of rations and dagger before heading back into the tunnel.",
        'Garo makes to leave before turning back, "Wait, what\'s your name?"',
        '"Spenta. You should get going you know."\n',
        "\"Yes, it's just, thank you, Spenta. Talking to humans is still, well, odd to me. Please tell Willow I'm sorry and- and tell her thank you too.\"\n",
        'The woman smiles as she begins closing the trapdoor built into an old tree stump, "Will do, Garo, may we meet again."',
        "Alone once again Garo takes off into the night. It's going to be a long and perilous journey to his cousin’s camp, but so long as he breathes he will press on. His people will not die with him and whatever may come, he will rise above it. All the while never forgetting the unexpected kindness that got him so far. Kindness that would be repaid years on and at great cost when the monsters of the world would march on the Capital.",
        "THE END."
      ],
      final: true
    },
    dark_hallway: {
      text: [
        "Garo moves down the dark hallway towards the iron door. He tries the rudimentary handle and the door swings open slowly. With a quick look the room is clear of any life. And that is the tragedy the orc finds as he closes the door and the full moon's light shines in through the iced over window. Garo's jaw falls open at the horrors before him. Shelf after shelf full of brains in jars, the spines of snake-men being drained of their blue blood, and kegs filled with faeries ground into golden dust, wings and all. In the center of the room is a grand wooden table, a lifeless orc with his skull cut open and his brain missing, his eyes are wide open in a look of surprise. Even though the orc is a stranger Garo tightens his fists hard enough to make his palms bleed and his whole body shakes with anger. The words of Grandmother Mukal drift through the orc's mind as his world goes red, \"We must survive, no matter what.\""
      ],
      decisions: [
        {
          storyNode: "vengeance",
          label: "Take Vengeance"
        },
        {
          storyNode: "leave_quietly",
          label: "Leave Quietly"
        }
      ]
    },
    vengeance: {
      text: [
        "Garo breathes a heavy breath that fills the room with mist. His eyes take on a clear minded focus, the warrior knows what must be done. He takes a pair of kegs of faerie dust under his arms and heads back into the hall in search of the sounds and smells of feasting. In time he locates his prey, almost a hundred men and women in fine clothes all well and truly drunk in the main hall of the guild house. All but a few guards present are lost in cups of wine. Most of the guests see the sudden appearance of the orc as some kind of prank, a wrestler who painted himself green to give them a scare. Garo quickly makes his way across the hall, spreading handfuls of faerie dust into the air and onto the wine soaked wooden floor. The guard who gorged himself on duck before Garo falls off his seat at the sight of the orc and tries to cut him down with an off-balance swing of a sword but Garo is an unstoppable force now. He drops a keg with a crash and grabs the sloppily swung blade in his hand without a thought to the harm. With cold fury Garo wrenches it from the guard's grasp and swings the sword down like a hammer, connecting the crossguard with the man's head with a great crack.",
        "The murder quickly sobers the partiers but by the time they make for the exits, it is too late. Garo drops the other dust filled keg and takes up a torch by the front doors. The orc steps outside into the snowy night and tosses the torch onto the trail of faerie dust. The golden dust sizzles and ignites as it spreads rapidly, each grain popping like a minuscule thunderclap. Once the flames reach the keg Garo has crossed the road meeting dozens of shocked and terrified screams. \"There's an orc in the Capital! There's an orc-\"",
        "The shockwave from the main hall throws Garo and all the humans outside into the snow. The main hall is leveled, its occupants vaporized. Fires spread to the neighboring buildings and those hit by flaming shrapnel. The fire rages like a thing alive, devouring even the wettest wood ravenously. In only moments the calm winter night has turned into a flaming hell and as Garo hears the bells ring and people running through the streets he knows he has wrought vengeance. In the chaos, few pay much attention to the orc wandering the streets, any that draw attention to him are quickly cut down with his stolen sword. In time he finds himself covered in blood and that he has wandered into the port where men, women, and children desperately collect sea water in buckets to save their homes. Ignoring them, Garo climbs into a small fisherman's boat and quietly rows out to sea. He watches the city burn with a small smile and feels fulfilled for a moment. But, in time his smile fades. Orcs are a hearty folk, the cold doesn't really get to them, but here alone on the sea with the distant fire getting smaller with every moment, Garo feels so cold.",
        "THE END"
      ],
      final: true
    },
    leave_quietly: {
      text: [
        'Garo releases his bloody grip and tears run down his face for all the loss he has known and found. He gently kisses the head of the orc on the table, "Brother or enemy, no one deserves this. We will have justice. I swear it." Garo opens the frozen window and crawls out into the snowy night and into a dark alleyway littered with discarded tarps from the loading dock. Wrapping himself tight Garo quietly makes his way toward the scent of salt water. When the bells are rung and the city watch runs around warning people of an orc, Garo carries on along the back alleyways until he finds himself standing at the port. He takes a small snow filled fishing boat and steadily begins making his way West. As Garo rows he thinks on the dark ‘Lord’ and wonders if they are the salvation his grandmother hoped for. Is he really a hero, or is there some other nefarious plan at work? In a world that has become so dark Garo vows to meet this being and follow him if he is true. And slay him with his bear hands if he be anything else.',
        "THE END"
      ],
      final: true
    }
  }
};

module.exports = heroes_and_monsters;
