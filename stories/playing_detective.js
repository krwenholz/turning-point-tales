const playing_detective = {
  author: "Clayton Lewis",
  title: "Playing Detective",
  tags: ["noir", "mystery", "murderous"],
  generalRelease: false,
  badges: [
    {
      node: "sleep_end",
      text: "Sleep: the final frontier.",
      icon: "😴"
    },
    {
      node: "cop_shoot_end",
      text: "Do feel lucky?",
      icon: "👮"
    },
    {
      node: "sergeant_shoot_end",
      text: "Well do ya, punk?",
      icon: "👮"
    },
    {
      node: "club_mafia_shoot_end",
      text: "Dance the night away.",
      icon: "🕺"
    },
    {
      node: "password_fake_2",
      text: "Bad guess.",
      icon: "🔑"
    },
    {
      node: "info_shoot_end",
      text: "Not as well read as you thought.",
      icon: "📚"
    },
    {
      node: "you_can_find_your_own_way",
      text: "What an expression.",
      icon: "🦌"
    },
    {
      node: "butler_shoot_end",
      text: "Can I help you?",
      icon: "🤵"
    },
    {
      node: "mafia_yes",
      text: "Everyone has a price.",
      icon: "💸"
    },
    {
      node: "yard_escape",
      text: "Not quite fast enough.",
      icon: "🏃"
    },
    {
      node: "escape_left_end",
      text: "Slow thinking, quick death.",
      icon: "🧠"
    },
    {
      node: "escape_right_end",
      text: "What' you gonna do when they come for you?",
      icon: "🚨"
    },
    {
      node: "escape_right_end",
      text: "What' you gonna do when they come for you?",
      icon: "🚨"
    },
    {
      node: "window_fall_end",
      text: "It's not really that far down.",
      icon: "🍃"
    },
    {
      node: "window_fall_end",
      text: "It's not really that far down.",
      icon: "🍃"
    },
    {
      node: "mirror_end",
      text: "A picture is worth a thousand words.",
      icon: "🖼️"
    },
    {
      node: "mirror_end",
      text: "A picture is worth a thousand words.",
      icon: "🖼️"
    },
    {
      node: "woman_shoot_end",
      text: "A shot heard around the room.",
      icon: "💥"
    },
    {
      node: "crazy_end",
      text: "We're all mad here.",
      icon: "🤪"
    }
  ],
  preview:
    "The smell of a cigarette’s smoke, the tick-tock of a mounted clock, and complete darkness are the first things that welcome your consciousness.... Where are you? Who are you?",
  content: {
    start: {
      text: [
        "The faint sound of police alarms stirs you from your slumber. \n",
        "The smell of a cigarette’s smoke, the tick-tock of a mounted clock, and complete darkness are the first things that welcome your consciousness. As you relax on what feels like a wooden chair, your blank mind tries to start up - the little man in your head starts cranking you awake like an early Ford automobile. Despite the mental image, your mind sputters and barely kickstarts. A small exhalation and your own alcohol-tinted breath is redirected to your face. \n",
        "You are half-asleep, half-cognizant. The sound of cars honking their horns and people yelling is faint but un-muffled. The sound feels carried along with the breeze of a small draft tickling the hairs at the base of your skull. An open window, one that needed to be closed...eventually \n",
        "You open your eyes, but the lids only open half-way. You expect a blurry image of a room, fuzzy furniture and a person that looks like they were bleeding watercolors. Instead, you only see darkness. The brim of the hat tilted on your head that you suddenly feel masks all sight except where cloth touches the top of your head - and even then you can’t see it. Feels no better than wearing a burlap sack. \n",
        "Some people can wake up easily with no alarm, just the pure power of the mind and a healthy sleep cycle. They could just jump out of bed and run a marathon, or be half a pack in before breakfast. Your neutral state is half-dead, and even then, you are hampered by the hooch weighing you down. What little lucidity you have has not told you whether today will be a fine day or a day where the headache will be as overbearing. Is it even the day? Unbelievable as it may be, but when one’s current visual landscape is the shady underbelly of a hat the darkness is less fantastic than the night sky. \n",
        "Willpower is something you have, or at least you think you do. You’re unsure how much hold the alcohol still has on your system. The call of sleep beckons, accented by the drafty urban chorus. Such a soothing dissonance does wonders on a body seeped in hooch. Still, something was nagging at the back of your mind, a lingering idea that is threatening to wake you, possess you and make it the sole thought in your mind. Both sleep and cognizance await a call, the difference between the hours of rest and facing a brand new day is just standing up. \n"
      ],
      decisions: [
        {
          storyNode: "awake_start",
          label: "Open Your Eyes"
        },
        {
          storyNode: "sleep_end",
          label: "Couple more hours..."
        }
      ]
    },
    awake_start: {
      text: [
        "With a grumble, you toss the hat off of your head and open your eyes. You yawn, stretch your arms and look at your surroundings - and then promptly wish you went back to sleep. \n",
        "'Drab office' is an understatement. Sure, the usual suspects are around: wooden clock, wooden desk, hat-stand, a mess of chairs et cetera. To you everything felt shoved in what can only be an apartment. One that has seen better days too. An office that isn’t even a proper office, like a living room barbershop. \n",
        "Everything comes back to you in an instant but it's the mental equivalent of drawing a two-pair in poker. There is not much to unpack other than two burning questions that overtake every worry. \n",
        "Where are you? Who are you? \n",
        "You’re dressed in slightly unkempt, baggy clothes consisting of suit pants and button-up shirt. No tie but you are sporting a long, shabby brown coat and a hat with a wide brim, also brown. You put your hands in your pockets. A wallet and a gun. First, you open up the wallet. Hopefully, it has an idea of who you are. \n",
        "James L. Sinclair, age forty and under contract for the Peterson Detective Agency. A private dick. That is all the information you could glean from the driver’s license and business cards besides an extremely messy signature in handwriting so ineligible that signing “X” could be mistaken for Khmer script. The rest of the contents of the wallet show no more clues, that is unless you happen to be the spitting image of Benjamin Franklin. For such a shabby apartment you sure are packing more than just a headache in a variety of ways. \n",
        "Speaking of packing heat, you exchange the wallet with the gun. A two-inch barrel and what looks to be double action. A snub-nosed revolver — not just any type of revolver, a Colt. The model commonly nicknamed the ‘Detective Special’. \n",
        "You pocket the revolver with full knowledge of who you were. James L. Sinclair, a private detective seemingly fresh off a case. You decided to have a drink in celebration of a job well done, bourbon, guessing from the bottle on the desk. You drank too much and blacked out, hitting your head and giving yourself amnesia. That last bit might be a stretch, how hard of a blunt impact would be needed to cause that much damage? You have an explanation for the money and why your breath smells of hooch, but the amnesia is the ultimate mystery. You don't buy it. \n",
        "Okay, maybe your mental deduction isn’t the best. Blame your confusion and the alcohol. The possibility you stole the cash was another option. \n",
        "James L. Sinclair, private detective and possible purse snatcher. \n",
        "A third option pops to life and it isn’t a desirable one. No, not a desirable one at all. You start pacing the room and almost miss the body laying past the chairs, hidden by the cushiony backs. \n",
        "Mid-forties, male. The corpse sports short, greyish-black hair affected heavily by male-pattern baldness. Dressed only in his undergarments, he lay in the same pose that a mummy still in the sarcophagus would adopt. There is no pool of blood, no stab wound nor bullet hole pockmarking his body, which looked bruise less as well. You rule strangulation out of the possibilities for cause of death; no ligature damage and no bruising. Heart attack? Poison? In any case, the chance of it being murder is high. To recap, there’s a dead body and you woke up wearing the dead body’s clothes with no clue who you are. \n",
        "Looks like you are not who you initially thought you were. The man on the floor is or rather was James L. Sinclair, private detective. There is still a chance that you were just in the most immaculate shape a middle-aged man has ever seen and the corpse is just some pervert you killed. Not likely. You don't feel middle-aged at all. \n",
        "In any case, leaving a body out in the open would be immensely troublesome if someone entered the room, especially since you have the notion that it is his clothes you’re wearing. Something needs to be done. \n"
      ],
      decisions: [
        {
          storyNode: "inside_corpse_hide",
          label: "Hide Inside",
          consequences: ["curiosity"]
        },
        {
          storyNode: "yeet_corpse",
          label: "Defenestrate",
          consequences: ["paranoia"]
        }
      ]
    },
    sleep_end: {
      text: [
        "Your eyes slowly close, your will is not strong enough to battle the alcohol-induced sleep that has you like a spider encasing a fly in its web. You don’t struggle against the call, you’re already mummified in its silk. Your eyes close and everything goes truly dark… \n",
        "You quickly wake to what your laggard mind could describe as a noisy kerfuffle. Voices yelling, the sound of police sirens down below, and the sound of shoes tramping on wood getting louder and louder. You quickly jump to your feet, the hat falls off your face and in your hands. You are surrounded by what seems to be the entire local police station, guns drawn, batons unsheathed and you, utterly confused. Before you could raise your hands in the air, before you could even from the beginning of a sentence two arms snake their way under yours and start dragging you across the room. \n",
        "Everything is happening too fast and you have too many questions. What is happening? Where the hell are you? Who are all these policemen? Are you being arrested? For what crime? Heck, what even is your name? \n",
        "As you are shuffled away from the windows, around the desk and across the room, your eyes catch a glimpse of something in your peripheral. You would not have seen him from your chair. A body, fashioned solely in his skivvies laying dead on his back. Expressionless, motionless, dead. Or was it? As you are dragged across the threshold from room to hallway, you could swear you just saw the body’s limp head turn to you, smile and wink. Before you could even try and reconfirm what just happened, your body is marched out and down what seemed like an endless staircase of metal railing and wooden doors. \n",
        "There are no reporters, nor any pedestrians caught in the middle of the arrest. The building might have just been you in your lonesome with a corpse splayed in the middle of the room. It was almost unsettling that nobody poked their head out of a door to see what all the hubbub was about. \n",
        "All in the meanwhile, you are like a blown light bulb. So many questions rattling in your head yet no light, no spark of wakefulness as you are ushered out into the waiting police car. \n",
        "The door closes, and before you stare straight ahead, something catches your eye from building you just exited. Your eyes zoom up to the window of the room you were sleeping in. A figure, the silhouette of a man, waving an open hand in goodbye. \n",
        "The police car starts moving down the street. The policemen, originally rowdy are now subdued as the car’s police radio starts blaring. White noise fills the small car and quickly your thoughts are replaced with the monotonous static. Your mind goes blank, your eyes shut. The movements of the car sooth you, lull you into a lethargic mood. As you await your sentencing, you watch the phosphenes dancing in the darkness. You shift your hat over your face and everything goes dark. \n"
      ],
      final: true
    },
    inside_corpse_hide: {
      text: [
        "You are not the strongest person in the world, that is something you do know. With some strain and some pain in your lower back, the body of assumed former-detective James L. Sinclair is lifted onto your shoulders. The room does not have many hiding places big enough to fit a fully-grown body, that is for sure. It’s time to be creative. \n",
        "The first idea: the armoire. It sure looks big enough to hold a corpse. Though what if he fell out? That would be a massive problem. With your free arm, you check the handles of the armoire. Loose. The wood is old, the handles one screw turn from falling off. Not an ideal place to hide a corpse, he would fall out if jostled. Next idea. \n",
        "Idea numero dos is also not the best one. The leg-room of the desk. Eyeing the gap, you weigh the options. He should fit with some molding. Thankfully, rigor mortis had not set in yet. He was a freshly made stiff, but he would stay fresh for long. \n",
        "Waving away the fact that he died not too long ago as if it was cigarette smoke, you lug the man over to the desk. As if he was the best of contortionists in life, the body of James L. Sinclair fit inside like the wooden star in a child’s block matching toy. Sure, it’s taking some bending, twisting, and dislocation of bones, but it’s going to work. He’s just not going to look nice at the end. \n",
        "Somewhere, someone in Hell is adding more sins to your list of transgressions. Desecration of a corpse, probably multiple counts on top of a possible homicide if not accessory and tampering with a crime scene for moving the body. Those will be the charges you will be served if anybody finds out about the broken corpse, bent into a gross fetal position and shoved in a small crevice meant for leg space. \n",
        "Thankfully you do not have time to admire your grotesque masterpiece, there's a knock on the door. Without any given time to answer, the door opens, and a group of policemen start filing in one by one into the room. \n"
      ],
      decisions: [
        {
          storyNode: "cop_time",
          label: "Cop Time"
        }
      ]
    },
    yeet_corpse: {
      text: [
        "An idea quickly pops in your head, coming to life with twisted vigor. Without a second guess, it is grasped, embraced, then you suddenly regret everything. You did not know what you were thinking. It was beyond reason. It was nonsensical. It was utterly foolish… \n",
        "...but the body is too heavy. James L. Sinclair, what a drinker. He could afford to shave off a few pounds, living in such a destitute room but having the cash to buy booze. You bet a fiver against nobody that every speakeasy joint in the city knew his name. At least he didn't have a full gut. It’s just a shame that there is no notebook with their secret passwords jotted down. Here you are, fresh of mind thanks to the amnesia, dealing with a dead body at night. It would be enough to make a man drink. It is enough to make you drink. \n",
        "Pre-amnesia you might have been an alcoholic as well. \n",
        "Blame your drunk mind. As fast as you can, you lug his body over to the open window, and doing your best, straining your lower back to lift him, you get him half dangling out of the window. The rest is easy, grade school physics. \n",
        "You lift his legs and with a shove, he topples away into the darkness. You wait for him to land, anticipating a sound of impact on either cement or fire-escape. You wait for the screaming, the yelling, a passerby’s exclamation of surprise. The anxiety is getting the best of you, but you don’t dare look outside. If any pedestrian was looking up at the aftermath and saw your mug sticking out, he would know exactly where it came from. It is doubtful you will find out who you are behind the bars of a jail cell. \n",
        "As you wait, wondering what to do next, there is a knock on the door. You instantly who it is. That is no mistaking that unique knock that lets anyone know that the police are at your door. \n",
        "“Come in,” you call out. You pause before making another sentence. The first sentence since your amnesia. Is that really your voice? Not a commanding voice at all. Well, you’re going to have to deal with it. \n",
        "The door opens, and one-by-one the police enter. \n"
      ],
      decisions: [
        {
          storyNode: "cop_time",
          label: "Cop Time"
        }
      ]
    },
    cop_time: {
      text: [
        "One, two, three, four, five, they walk in. Every man dressed in the same dark uniform. Constables, lackeys, the meat of the force. And then, the sixth man enters, the fat of the force. A corporal or sergeant. How are cops rank anyway besides detective? \n",
        "“I’m looking for Sinclair.” the man says. He is portly, his days of being an active trooper long behind him. Still, he looks just as dangerous. That’s what years on the force does to you, especially when your beat is the city working homicides. \n",
        "Thinking fast for a response, you suddenly remember the wallet. Trying your best not to fumble it, you reach into your pocket. The stares of the other six men are piercing, as if suddenly suspicious of you. By the man’s tone, and his first question, he did not know who you were, or who James Sinclair is. It is the same with the other policemen. Both you and James are an unknown, an undefined variable. \n",
        "“I’m Sinclair,” you say as you whip out your wallet as if you were a police detective. Sinclair was not a police detective, and the cops most likely know what his profession was. What you essentially did was show everyone that you can drive. Good job, ‘Sinclair'. \n",
        "The corporal squints his eyes, judging you. “Well, whatever. We’d like you to follow us,\" he says, his voice adopting the monotone equivalent of his constituent's expressions. “Please,” he adds. \n"
      ],
      decisions: [
        {
          storyNode: "police_follow",
          label: "Follow them"
        },
        {
          storyNode: "cop_shoot_end",
          label: "Shoot them"
        }
      ]
    },
    cop_shoot_end: {
      text: [
        "You nod, and the police all start filling out like a group of chicks exiting a henhouse, their hen at the rear. You only get past the desk when you feel something nagging at the back of your head. A tiny scintilla of paranoia, questioning if you should even follow them. \n",
        "It is almost instinctual. Before you even fully embraced your doubt on the entire situation, the gun is in your hand. It fits snuggly, your fingers embracing the grip gently. It's warm, someone had been grasping onto it tightly for a while. Might have been you. A second later, your hand steadies. You cock back the hammer slowly and it clicks in place, in time with the loud shuffle of the policemen’s feet. \n",
        "None the wiser. \n",
        "There are no second thoughts, no misgivings at all. Your intentions are set in stone. You place your finger on the trigger. It takes a bit of effort, some extra oomph to fire. When it does, the room fills with the deafening sound of ignited gunpowder. \n",
        "Your ears are ringing, but you don’t let it concern you. All you care about is the hole in the back of the police sergeant’s head. He falls slowly. Everything seems to slow down with his descent. The interval between your breaths feel like ages, so does the pause between the tick-tock of the clock. The five other policemen slowly turn around in stunned silence. You pull the trigger again, momentarily forgetting that the gun only had a single bullet in the chamber. It clicks, the cylinder rotates to another empty slot. \n",
        "The gun slips from your hand and falls with a clunk as, in tandem, both it and the dead policeman hit the ground. There’s a momentary pause in the action as you and the gobsmacked policemen exchanged glances. \n",
        "The resulting silence is momentary, enough for everyone to process what happened. A second later, five guns are pointed at you. You don’t blink, you don’t raise your arms, you don’t even blink. You don’t have time to move before five service revolvers are pointed at you. You don’t have time to say anything before five bullets enter your body. After that, you don’t have the strength nor the mental capacity to do anything. \n",
        "The pain is instantaneous, searing. It fills your body as quickly as you bleed out like a sensory transfusion. You stumble forward, your brain overheating. You only manage a couple of steps forward, past the two chairs before you collapse face-up on the ground. \n",
        "The rug is warm. Like the gun, it too has felt the presence of a person’s touch on it for the past couple hours. Your last thoughts solely comprise of thinking how shitty a way it was to go, face-up in a seedy apartment, no memory of who you are. You can’t feel the presence of the policemen anywhere, as if they were not even real in the first place. As you fade away, you can hear something, the sound of snoring, but before you could ponder about it, under the faint smell of cigarette smoke and the sounds of the city, everything goes back. \n"
      ],
      final: true
    },
    police_follow: {
      text: [
        "You nod and sidle up behind the police corporal. There’s no further acknowledgment, no introductions. To you, the policemen are all nameless. They have faces, but you couldn't care more about them. At this point, they are living, moving toys. Almost wood-like instead of flesh. It’s tempting to tap one on the cheek. \n",
        "The waiting room greets you as you exit the office. There are a couple of chairs against the walls, a desk for a secretary and too many file cases to count. You doubt that the majority are even filled, just a gratuitous act of looking busy. \n",
        "Another question forms in your mind. What happened to the secretary amongst all this kerfuffle? The top of the desk looked alive, there are notebooks and papers, so they most likely haven't been fired or done for the dat. It is late, sure, but one would expect to clean up their desk before they go home. \n",
        "Unfortunately, you have no time to check out the desk as you try to keep up with the policemen’s all-encompassing movement. You exit the office proper and start heading down the hallway. It’s bleak. The moulding and the lighting exhibit some fanciness in the establishment, but the overall atmosphere, the ‘aura’ feels almost stagnant. The building is desperately trying to stay young, but it is showing its obvious age. \n",
        "You exit the hallway and enter a flight of steps. Floor after floor you go down, down, down until you reach the lobby. From there, the policemen start leading out of the empty lobby and onto the sidewalk. It isn’t a far walk to the destination, just around the corner. Literally. At the side of the building lies an alleyway sandwiched between the complex you just came out of and the neighboring building, a tower of offices. \n",
        "The entrance is swarming with police cars. Being in the big city, crime is common. This felt almost silly. Too many police cars hanging around the scene, parked in any place that they could fit. Once those choice spots were taken, it looks like they almost tried stacking them on-top of each other to save space. They must be training the new recruits or something; a crime scene field trip. That might explain the colonel, and the sergeant waiting just ahead. \n",
        "It’s almost like an Abbott and Costello sketch. Two police officers, the chubby colonel, and the string bean-like sergeant. Immediately, you imagine the two talking about fictitious baseball players. You might have no memory of who you are but at least you can remember comedy acts, lovely. You must be the third baseman. \n",
        "“This the detective?” The sergeant asks. You feel like you should be laughing, but the confusion and the slowly creeping dread keep it at bay and keep you unfazed. \n",
        "“This is the one,” the colonel responds, his tone unsure of himself. His look remains professional, but that small smidgen of sudden doubt...that was not a good sign. \n",
        "“So you’re Sinclair,” the sergeant turns to you, his face a mask of mixed opinions. You’re not sure if it is because you don’t look like detective material or if he recognizes you. He sure is not familiar to you but that is a feeling that stretches to everyone and yourself. Now that you think about it, you don't even know what you properly look like. \n",
        "“I’m Sinclair,” you falsely affirm. “So what do you need me for this late in the hour? \n",
        "You make sure you stand far back from the sergeant. You realized too late that your breath still smelled like alcohol when you were descending the staircase. The policemen did not seem to mind, but even if they did not the sergeant surely would care. Jail might be a good place to sober up, but it is dead boring to be in and the wrong location to figure out your identity. \n",
        "You approach the sergeant, and your eyes lock onto a body that is lying in a pool of blood. Young, a woman, 100% murdered. \n"
      ],
      decisions: [
        {
          storyNode: "sergeant_convo",
          label: "Talk to sergeant"
        },
        {
          storyNode: "alleyway_search",
          label: "Examine surroundings",
          consequences: ["doubt"]
        },
        {
          storyNode: "solo_search",
          label: "Ignore him and look at body"
        },
        {
          storyNode: "sergeant_shoot_end",
          label: "Shoot him"
        }
      ]
    },
    sergeant_convo: {
      text: [
        "“So, what have we got?” you ask the Sergeant, thinking it would be best to hear what he has to say first. “Who’s the stiff?” \n",
        "The sergeant shrugs. “We were kind of hoping you would tell us,” he says. “We found her identification in her purse, so right there we know she wasn’t killed for a quick robbery job gone wrong. Ms. Agnes Dubois, eighteen.” \n",
        "“So why do you need me for this?” That is a question that you can tell treads on thin ice. To help build up the masquerade that your brain still needs some time to get into motion, you yawn deeply, covering your mouth so the smell of alcohol does not reach the police sergeant’s nostrils. \n",
        "“Because we drove a patrolman over to her house in the heights, and her parents, the ‘honorable’ Sr. Douglas Dubois and his wife said that they had hired you two months ago to investigate her disappearance.” \n",
        "“Oh right,” you say quickly. “Sorry, your boys got me in the middle of a nap. I’m a little bit groggy.” \n",
        "“Then wake yourself fast, we’re doing you a favor in checking the body. The payment from the parents is probably your source of rent payment for the next couple of months. Be thankful.” \n",
        "“I would, but my knees are shot,” you smile. The sergeant does not. Tough crowd. \n"
      ],
      decisions: [
        {
          storyNode: "solo_search",
          label: "Check the stiff"
        }
      ]
    },
    alleyway_search: {
      text: [
        "Without saying anything to the sergeant or to the other policemen, you walk into the alley. Instead of looking at the body, you continue downwards. As you pass the body, you see a shadow move in the siren-light. You quicken your pace. For some reason, the niggling feeling at the back of your head is telling you to act natural but walk as fast as you can. That is an easy feat, you’re a city person, at least you think you are. \n",
        "You at least walk like a city person. \n",
        "You round the corner, ready to fight. Instead, you see a blur, a mass of ragged clothing. Picking up the pace, you grab the mass by the hem with ease and swing him against a wall. The bundle of clothing lets out a small exclamation during the impact. \n",
        "“You seem to have picked the wrong alleyway to linger around, bum.” You proclaim in a low volume. \n",
        "Underneath the rags is a man, looking more miner than drunkard in appearance. Prohibition meant nothing to him, he was already affected by the alcohol’s long-term effects years before the ban. forty, or seventy? Hard guess. When life brings you low, there is little you would do for some extra change. That just means it takes less effort to make him talk the right words. \n",
        "“I ain’t done nothing wrong,” the vagrant coughs out, his voice is as bad as he looks. \n",
        "“Maybe so, but a part of me is thinking you have seen something you were not supposed to,” you counter. “Do I have to rough you up a bit before you get the information. Who are the cops going to believe? Me, or you?” \n",
        "“This is about the broad, right?” the vagrant quickly stammers out. Quick to squeal. For some reason you have mixed emotions about that, stirrings of unknown, indescribable feelings. You hope you were not a squealer pre-amnesia. “I saw nothing, truly I did. You can say that to the police. I heard a gunshot, and nothing else.” \n",
        "You nod and thank him for his useless information. You don’t let him go, though. For a couple of minutes, both of you stand still in a mimicry of the dumpsters inside of the alley. Dull colors and filthy interiors. From the other side of the ally away from the body, you hear the sound of another acting siren passing by. It seems that tonight is a busy night. \n",
        "“Okay, so what is going on? Off the record, I’ll say nothing to the cops.” You finally ask. The man is not the best of liars, he barely takes the top ten thousand. His previous statement felt more like something to keep him safe than an actual testimony. \n",
        "The vagrant takes one look in the direction of the crime scene before turning back to you. \n",
        "“Look, buddy, I don’t know what's happening but whatever is going on over there is rigged. You’re going to find a bullet wound and the police are going to rule it a murder. No, I saw what happened. That broad fell from the apartment you’re pushing me against. Clear as day I saw her. She fell, somebody pushed her and the police are going to make it seem like she was shot.” \n",
        "“Then who shot her post-mortem?” You ask. \n",
        "The bum shrugs his shoulders in a devil-may-care fashion. Again you thank the man, this time you truly do. He actually had some worthy information on him. Doing your best to be nice, you help reshape his clothes into a less messy state. Before you turn to return to the policemen, the man calls out to you in a sort-of whisper. \n",
        "“Someone else besides the police is running this operation. You better stay safe and save yourself.” \n"
      ],
      decisions: [
        {
          storyNode: "solo_search",
          label: "Return to the body"
        }
      ]
    },
    sergeant_shoot_end: {
      text: [
        "With the simple pull of a trigger, the alleyway suddenly has two corpses lying inside of it, as if it was taking resumes for new attendants. No discrimination between race or gender, for dead bodies with bullet holes in them were technically almost all the same. \n",
        "You don’t know why you did it. \n",
        "The sergeant collapses in a beautiful display of lights and sound. The way his mouth opens up in shock timed to the sound of a passing siren makes it seem it was his final shout of surprise. The siren stops the exact moment he hits the ground. \n",
        "The surrounding policemen watch in dumbstruck horror at the happenstances going on. A murder at a murder scene, how darkly poetic. You guess that the policemen did not think the same fanciful last thoughts that you did. A second later, an innumerable amount of guns are pointing at you. There is no warning for you to go onto your knees, to raise your hands, or to stay silent. \n",
        "You do so anyway, but they don’t care. \n",
        "One bullet being fired is a murder, over a dozen becomes a twisted symphony of the same note. You feel your eardrums ringing, ready to burst before your body is riddled with holes. Your entire body is in flames, you can’t feel your arms, your legs, nothing but the fire that is licking your neurons. \n",
        "You fall less gracefully than the sergeant does, your mind now only capable of basic thoughts. Even if you recover, this was enough damage to put someone in a coma forever. Your back hits the pavement with a dull thud, the pain a cushion in comparison the fire your entirety is feeling. \n",
        "All of a sudden, you feel alone. You feel like the sole body in the alleyway, the only person that will have died between two apartment buildings. It was not like there was a lot of room at the entrance. Two bodies would increase the chance of hitting one during a fall and yet your back hit cement, your outstretched arms did not pile onto other lumps of dead flesh. \n",
        "Your vision blurs. Two figures. The first was a policeman, the other a shadowy figure in a coat and hat, both silhouettes in the dark. They speak, but you cannot understand their words. Not that it mattered really, you can feel yourself fading away. One of the figures leans close to you and pulls your hat over your eyes, their breath smells heavily like cigarettes. \n"
      ],
      final: true
    },
    solo_search: {
      text: [
        "You must have been at least something close to a detective pre-amnesia, for as you get closer to the body, you feel no sickness. In fact, you feel absolutely nothing as you look down at the young woman. What does magazines, rocks, walls, taupe, and the corpse in front of you have in common? They all bring to you the same apathetic feeling. When does a person stop becoming a person? Is it when they become a lifeless slab of meat, or when ‘her body’ becomes ‘the body’? \n",
        "It had black hair, straight in a short bob, high cheekbones, a thin nose and piercing brown eyes that still retained their lethality despite the candlelight called the soul being snuffed out. Going by the face alone she looked stately, high-society, no-nonsense. Eighteen, nineteen, twenty, twenty-one; they all looked the same in the end it's all age brackets for the coroner now. A dead ringer for Louise Brooks, though. Almost fashion-store mannequin-ish, a comparison more apt due to the foreclosure in her lease on life. \n",
        "Going by the red dress she wore, she was most likely more than just a physical dead ringer for Louise Brooks. She looked like the type to swing around at speakeasies and rich parties. The look of a rich girl, the feel of someone important. She must have been someone important since so many policemen came to faun over her body as if she was a painting from the Louvre. People crowded around her in death as much as they most likely did in life with some sheer fascination. You? Not so much. The more you study her, the more your apathy turns into a swirling pit in your stomach. That’s probably worse than not caring, isn’t it? \n",
        "The pool of blood is the same color as her dress. It leaked around her head and her abdomen, where a bullet bored a hole through her stomach. Strange, you did not hear a gunshot outside. Something that loud should have woken you up from your drunken stupor...then again, you might be an extremely deep sleeper. \n"
      ],
      decisions: [
        {
          storyNode: "next_steps",
          label: "Return to police"
        }
      ]
    },
    next_steps: {
      text: [
        "“We’re just starting the investigation so at the moment we’re going to start the typical police work,” the sergeant says. “The lady was your case, but since now we’re dealing with murder we’re going to have to take up jurisdiction.” \n",
        "You take in his words like water through a sieve. Too many different aspects of the case are already swimming in your mind. Something feels wrong. You can't put your finger on it, but there is an ever-present nagging, like your staring at an immaculately made imitation. It's almost perfect except for one unknown aspect, a mistake in the base layer. Before you can think deeply about your conundrum the police sergeant taps you on the shoulder. \n",
        "You quickly snap back to attention, your train of thought derailing in the valley before the next station. \n",
        "“Like I was saying” the sergeant continues, “I know how you detectives act, like you're above us because of your agency licenses as if it gives you free reign to bypass the law. You can do what you want, but this is our racket now. Don’t be annoyed if we take the credit and you lose your payment, capiche?” \n",
        "You don’t answer. Instead, you find yourself taking in the idle conversation of the other policemen that have swarmed the alley entrance. You should probably give your answer now. The last thing you need in your life is a pissed off police officer. \n"
      ],
      decisions: [
        {
          storyNode: "night_club_start",
          label: "Continue your investigation"
        },
        {
          storyNode: "apartment_start",
          label: "Ditch the case",
          requires: ["doubt"]
        }
      ]
    },
    night_club_start: {
      text: [
        "“I’ll look into it,” you say. “If anything happens, I’ll know where to find you.” You don’t really, but working the police sounds like a hassle. You’re someone that works alone. Well, the current you works alone. It would be best to follow your path instead of the step-by-step policeman direction. \n",
        "Quickly divorcing yourself from the crime scene, without a word you mold yourself in the form of a pedestrian. It was not like the police had any control over you, they could not call you back unless they had a warrant and there is no point sticking around when they will probably be there for hours on end doing whatever forensics and door-by-door interviews they had to do. You raise your arm the moment you turn the corner at the end of the block, trying your best to hail a cab. Now feels like the time to fill up on liquor and some freshly squeezed information. \n",
        "Now, what was the big place for drinks again? The Routine at the wharf? No, that one was closed a while back. Big shame, too. No, what was it? It’s on the tip of your tongue. You would snap if your hand wasn’t in its new statuesque ‘taxicab wave’. The Flower Shoppe, that is what it was. The password...was some sort of flower combination. You’ll remember it on the drive. Remember it? Where did you hear about the Flower Shoppe anyway? The what now at the wharf? Either your mind has been picking up a class in local speakeasy history or your mind is remembering the last needed things to know about yourself. Okay, maybe number nine out of ten important things. \n",
        "It was probably one of the more junior policemen talking to a friend about it. You are all ears, after all. Or, well, your detective-mode is all ears. \n",
        "If there is any group of people in the city that was not in the mob that knew about the underground goings-on in the city it would be the taxi drivers. Need to follow a car? They’re your guy. Need a place to hide? A fancy restaurant? A hole in a wall? He’s got you. Need to change your face around and go into hiding? He’s probably got some back-alley, unlicensed plastic surgeon friend who can fix you up nicely. A speakeasy is child's play just as long as you’re not going to start trouble. \n",
        "It takes a while, but after about a block and a half of mindless wandering a car stops just ahead of you. White and green, checkered and the sign “Taxi” on the top. Guess what it is? \n",
        "“You got a place you need to be, buddy?” asks the driver. Despite all the light, his face is shadowed under darkness. His voice, on the other hand, sounds chipper and lively. Too lively. \n",
        "And yet, you open the backseat door of the car and climb in, sitting directly behind him. On his rear-view mirror, you can make out his cap and his eyes. Black. \n",
        "“So, where can I ferry you?” the cab driver asks, his eyes’ reflection fixed on you. You do not like his word choice. A grim image started appearing under the shadows of the man's face. \n",
        "“Get me to a flower shop,” you say. “I got a hankering to buy some roses at this hour if you catch my drift.” \n",
        "“As easy as catching a pop-fly.” the driver moves the stift. There is the sound of the stick gears moving, and the car starts moving along the road. \n",
        "While the city seems to be teeming with police, with the sound of sirens almost always ever-present and the occasional beat cop walking down the street, there is a dearth of actual pedestrians. Either law enforcement has stepped up its game in a martial-law sort of racket, or everybody is staying home tonight. \n",
        "Thankfully, the cab driver never asks you another question once you start moving. You are extremely thankful for that. In your state of ever-present liminality between the worlds of sleep and wakefulness, the silence and the movement allows you some time of momentary respite... \n",
        "You open your eyes an unknown amount of time later and check the mirror. The driver is still staring ahead, or at least you think he is, you have lost track of his eyes. A couple more blocks later the car stops. \n",
        "“The end of the line,” the driver jokes. \n",
        "You give a complimentary forced chuckle and fish out your stolen wallet. \n",
        "“Keep the change,” you say as you place a bill into his hand. He nods in appreciation as you step out of the taxi and a minute later, he is gone. \n",
        "‘The Flower Shoppe’. The name could not be any less uneventful, but this is the place the cab driver dropped you off, time to see what lies hid behind the sweet-scented mask. \n",
        "You push at the door, and it is unlocked. Through dim lighting, you sneak your way inside. It truly is a flower shop, but then again when it came to speakeasies and other underground, mob-related dealings the front is always legitimate. It is always something boring like a bookstore or the like. You even recall one gin joint that was hidden inside of a funeral parlor...though you can’t remember why you can recall that. Maybe when you actually step foot into the bar, your mind still start remembering information more pertinent to your needs. \n",
        "You walk through the darkness until you see a door with some light shining from underneath. Upon opening, you enter an-almost hothouse filled with a variety of different colored flowers underneath the lamplight. \n",
        "It would be a beautiful sight if not for the man sitting on a chair reading a cheap pulp novel: twenty-five cents a copy. The man himself is what one would expect from someone who spends their daily life with the mob. Black suit, gruff expression. He could easily pass as a circus strongman. Maybe in another life he was one. \n",
        "The man takes one look at you and stands up from the chair. Squaring up to you, he stands maybe a foot taller. You noticed this before, but in comparison to you and the policemen, you did stray a couple inches short from all of them. \n",
        "“You looking to buy something?” He asks. The complete physical and tonal opposite of a flower shop owner... though he still might be one. You can only hope. \n"
      ],
      decisions: [
        {
          storyNode: "password_real",
          label: "Tulips"
        },
        {
          storyNode: "password_fake_1",
          label: "Swordfish"
        },
        {
          storyNode: "club_mafia_shoot_end",
          label: "Gun (shoot him)"
        }
      ]
    },
    club_mafia_shoot_end: {
      text: [
        "One less mob member makes the streets a cleaner place. Sure, it hampers the alcohol running business, but it is only a matter of time before some wanna-be Elliot Ness appears to enforce the prohibition. You’re doing everyone a favor… \n",
        "...and that’s how you get into a shoot-out with the mob. \n",
        "Call it divine justice or call it holy intervention, like flipping a switch, your resolve suddenly changes to the righteous. You are no longer someone pretending to be some boozer detective who was not smart enough to survive dying in his own office, you are now an unofficial member of the Untouchables, and untouchable you shall be. \n",
        "As if a haze was lifted, you grab the mobster’s gat, kicking over a table full of potted plants and start shooting out into the hallway. The back and forth of explosions and the smell of gunshots fill the air faster than any aromatic flower. You can feel the impact of bullets against your hardwood barricade, but it remains steadfast. The wood is of good quality, but it was not going to last in the long run. A pistol fight, sure. But if one of those mobsters walks in with a typewriter, you could kiss your shield and your life good-bye. \n",
        "You try to meter your shot intervals. You have limited bullets while the mobsters most likely have an entire cache stored somewhere. Thankfully, the man you shot has enough to last a couple minutes longer. Fours shots against the wood, one shot away from it and into the store entrance. Three shots at you, two to them. You feel your heart pounding, trying to escape from your chest like a living man trying to dig out of a shallow grave. \n",
        "Before you know it, the chorus of gunshots is quickly replaced by a different cacophony, one not made by the sound of combusting saltpeter, sulfur, and charcoal. No, a discordant chorus of shouts coming from lungs and larynges. You expect it to be a crescendo of colorful mafia cursing but no, it is one word repeated over and over ad infinitum. One of the safest words that could be said to make you feel calm in your situation. Three hints: Starts with a P \n",
        "You pop out from the table to greet the cops but you only have time to notice something very wrong in your shoot-out with the mob before another shot rings through the air, piercing you straight in the chest and knocking you backward. Your body slams the floor, the impact too similar to hitting concrete than the tile and wood inside the establishment. Nothing like a case of mistaken identity in the middle of an adrenal rush. \n",
        "With a final breath, you almost choke on the gunsmoke that fills the air. Despite the shootout, you feel like the only body in the building, like everything that just happened was a sham. \n"
      ],
      final: true
    },
    password_real: {
      text: [
        "“Yeah, can you get me two bushels of roses and a single daffodil?” \n",
        "Without any acknowledgment, the man walks towards one of the brick walls and pushes. Suddenly, the room fills with the sound of merriment and jazz. You can practically smell the alcohol from here. \n",
        "You nod and walk towards the fake wall into the speakeasy. The door closes once you are fully inside, you feel the gust of air as the bricks fit back in place. Your hairs bristle as you can finally feel the wall brush the back of your hat. Maybe you should have continued walking instead of standing at the threshold. Fixing your hat's brim, you carry on towards an army of tables and occupied chairs. \n",
        "As you deny a waiter’s offer to take your hat and coat, you scan the crowd. An informant would most likely look slightly out of place from the rest of the people. First, you scan the crowd, full of sequin dresses, flashy clothing and classy suits with ties a variety of colors. Everyone was living the life of make-believe, wishing they were in high society. The older ones were most likely a bit different, wishing for those wistful days when these joints were legal and did not have ties to the mob. \n",
        "Next, the waitstaff. If there was any group of people that would know everything, in a joint like this, it would be them. Who knows what conversations they have heard while taking orders and giving drinks for the audience, though snatching one for a prolonged conversation might be a difficulty. \n",
        "The band playing is out of the question. They were most likely just for hire. If a speakeasy pays well, then who are they to say no? Who is their agent to say no? No, it was not them. \n",
        "You walk slowly to an empty table, pretending to be enraptured in the jazz and their singer: young, a wanna-be Crosby type. He was good, but he wasn’t Crosby. \n",
        "The world seems to pause as you lock eyes with someone out of place, the odd man out in the entire establishment. A lone person at a table, someone you did not notice till now. A man, ragged, someone who has gotten the once over too many times to count. He looked recognizable, but then again so did every other drunk in the city. They are all practically carved from the same tree. \n",
        "You change your course and make a heading towards the man. In front of him are many, many rocks glasses, the remaining contents melting into complimentary water. Unfortunately for him, if he took in all that water, it looks like he would just sink like a scuttled ship. He was already past the water-cure for being drunk. A hair would not suffice, he would need an entire canine. \n",
        "Actually, the hair of the dog before the binge would be good. You grab a server by the elbow and order what you now decide is your favorite cocktail (being the first one that waded through your amnesiac fog). Corpse Reviver No2. Thankfully, this place is seemingly one of the few that is well-stocked, having both curacao and wine for the cocktail. The server leaves and you silently approach the man. \n"
      ],
      decisions: [
        {
          storyNode: "informant_exposition",
          label: "Take a seat"
        },
        {
          storyNode: "info_shoot_end",
          label: "Shoot him"
        }
      ]
    },
    password_fake_1: {
      text: [
        "“Yeah,” you reply, your hands in your coat pockets. “Can you get me a swordfish?” \n",
        "You’re beginning to think you have a playful side. It could be the smart-ass answer, or it could be the whimsical wink you gave. The body of Spade, the personality of Nick Charles. You blame the amnesia and the pressure getting to you. You’re sure ‘old you’ would have dealt with the situation in a better fashion. \n",
        "The man did not look amused. Bit of a shame, for someone guarding the door he probably has seen has many an odd-fellow. People like to dress up nice for the speakeasy visits. It is as high society as you could get without being high society (for they already had the means of procuring alcohol without going into sketchy gin-joints). \n",
        "“Trying to be funny, eh?” responds the mafioso, his face is as bland as the pots arranged around him. The man purposefully adjusts his already immaculate belt, showing off the gat in his pocket. \n",
        "“It seems your not my kind of audience...” you respond dryly, your sentence trailing away from you before you can finish it. Your eyes fixate on the pistol. Definitely not happy to see you. \n",
        "“You’re lucky I have a soft-spot for wise-guys. A really small, tolerating soft-spot. 'bout the size of a mole,” the man says, as he pulls out his gun and points it at you. You grip your pistol softly, the sweat making it hard for you to get full control without letting it slip out. “I’ll give you one more chance.” \n"
      ],
      decisions: [
        {
          storyNode: "password_real",
          label: "The real one this time"
        },
        {
          storyNode: "password_fake_2",
          label: "Another smart-ass answer"
        }
      ]
    },
    password_fake_2: {
      text: [
        "“Password,” you suddenly yell out, with such uncontrolled speed that you momently misinterpret your own speech for a dog’s bark. \n",
        "That moment was a moment of truth for you. You might have amnesia, you might have no clue who you truly are, but you do know one thing. You know what kind of person you are now. You are the type of person that caves under stressful confrontations with ‘wit’ and ‘humor’. Good job buddy, you’re the class clown. A soon to be dead one. \n",
        "“Wrong move, bub,” the mafia member says. Keeping his gun trained on you, he lets loose a low whistle. \n",
        "Quickly turning around to run, as you exit the room light suddenly fills the store. Across from you was another door hidden in the dark, one that probably could have been visible if you took your time and adjusted your eyes to the moonless darkness. The moment you step out, the door opens, revealing many more mobsters approximately the same size as the first guy. \n",
        "You try running, but you're hampered by your own body’s clumsiness. You first trip over a fallen pot, then your own feet. You fall headfirst into the mob of mobsters, straight into the arms of one particularly burly gentleman. \n",
        "Like a princess, you are carried out of the store. Unlike prince-charming, the man throws you unceremoniously out of the store with enough force as if he was throwing out like a mischievous child or a stray cat. \n",
        "You do not land on your arms and feet like you expect you would. From the way he threw you, you are a limp sardine getting ready to be canned. You land, cushioned by the soft, downy embrace of cold city cement. \n",
        "There’s a cracking sound as your head hits the sidewalk. Your body can’t move, it doesn’t respond to your actions. Like a house with a blown circuit, anything you do fails. You become aware of something liquid touching your skin and your clothes. You can’t speak, and your eyes grow weary as your head throbs with pain. The last thing you see is the silhouette of people standing around you, and the smell of a cigarette butt that is tossed next to your soon to be lifeless body. \n"
      ],
      final: true
    },
    info_shoot_end: {
      text: [
        "Thinking back to that mobster guard and his pulp novel, you try to recollect what you used to read when you were younger, the type of pulpy fiction that you bought with a nickel from some odd job you might have done. \n",
        "Speakeasies are sort of like classy western saloons, aren’t they? \n",
        "Everyone inside is a criminal of some form, prohibition being law and all. There is entertainment and hidden guns abound. In fact, there is nothing more cowboy than a detective. The more your mind ruminates about it the more you realize the correlation. Independent agents who own guns and are not afraid to use them. They share commonalities. \n",
        "You quickly get lost inside your fantasy, the nostalgic memories mere toys inside of a locked hope chest trying to break free before being fully forgotten. Almost wistfully, you take out your gun in the middle of the saloon. Barely anybody notices you, their eyes enraptured with the music or their own conversations \n",
        "With singular deftness, you spin your revolver on your fingers, some fancy footwork for a city-slicker like yourself. You point your gun to the man in front of you, him being the nearest person in proximity. A couple more twirls and you cock the hammer. \n",
        "“Bang” \n",
        "Your mind is wandering, forgetting that the gun is loaded, that it is not a toy. Blame your itchy trigger finger for setting it off. \n",
        "Due to the force and the proximity, the man is pushed over backwards in his chair before landing onto the ground. There is a scream, the music stops and suddenly, everything comes back to you in a mix of confusion and dread. \n",
        "The next second, you find yourself knocked onto the floor as the crowd panics like a pack of spooked gazelle, a bunch of flies being brushed away, or just a bunch of people who heard a gunshot. Their fear is collective, and it is animalistic. They don’t form an orderly line, there is pushing and like a stampede, they are rushing towards the exit. \n",
        "You can’t even attempt to get up as every time you prop your arms up you are pushed down with a well-placed hell to the stomach or chest. The more you try to lift yourself, the more broken you become under the herd. Their yelling sounds seemingly bovine in nature but now, you’re not sure which is which anymore. You don’t have the time to parse it anyway. One more well-placed, unintentional kick to the head and everything in your mind flicker out like a blown bulb. \n"
      ],
      final: true
    },
    informant_exposition: {
      text: [
        "You take the chair opposing the man and his army of glassware. Without a word, he turns towards you with an apathetic attitude. The odd man out, he was the only one that looked like he had seen better days. Even the older citizens pining for the “good ol’ days” looked better than him. Granted, they were also drinking at a leisurely pace and were enjoying the music. What got you was the fact that he was gazing at the band, but it was not the band he was seeing. The Bing Crosby wannabe and the girl at his side are nothing but set-dressing to him. \n",
        "This is a guy that is looking at the bottom of a bottle even if there is one not even near him. No wonder he was so scraggly, how much money has he spent on hooch instead of basic hygiene? \n",
        "“You don’t look like Sinclair,” he says, his voice a droning, singular tone. The one saved for college professors that write on blackboards with one hand and erase with the other. \n",
        "“I’m not,” you respond. Curt. He is an informant but there is a great chance that he is more than just an informant for the police and Sinclair. Only he knows the full list of people he deals with. \n",
        "“And yet you wear his stuff,” the informant says, his eyebrows raised. \n",
        "“I do.” \n",
        "A server places the corpse reviver no2 in front of you and another glass on the rocks for your new drinking partner. In the low light, you could not see what choice of poison. Whiskey, bourbon, cognac, and rum all looked the same in this ambience. You blink, and his glass is already half-empty. \n",
        "“You a private dick too?” he asks, loudly yawning. You catch a glimpse of a throat and uvula. Not something one desired to look at. \n",
        "“So what if I am?” So what if you aren’t? \n",
        "“Well, if you are taking up Sinclair’s bit, I can tell you who is behind the smuggling and kidnapping cases then. I'm guessing that is what you are here for. It's what everyone else outside of the criminal world wants.” \n",
        "Smuggling? Kidnapping? Wasn’t Sinclair just a missing person type of guy? Well, that was what the police said, and what you could guess. Looks like there is more to this man than meets the eye. \n",
        "“Did he already pay you for this information or do I have to shell out some greens for you as well?” You ask, already reaching for the wallet. \n",
        "“The first one to pay gets the information, the only people gunning for this knowledge was Sinclair and the police, and now you, I guess. You pay me and the information is yours.” \n",
        "“How much?” An instant response. You have the cash, the man probably won’t ask for much, he already looks on the ground floor of the multi-story level hierarchy. You are probably a second-floor resident in comparison. \n",
        "“Pay my tab and we’re square. I seem to have forgotten my wallet.” \n",
        "You slowly sip at your drink before manhandling the next non-busy server and shoving a wad of bills in his hand. The informant probably had an exorbitant tab, so paying a little bit extra would help. \n",
        "“Okay,” you say. “Give me the rundown.” \n",
        "“How familiar are you with Sinclair’s line of work?” \n",
        "“The basics. Missing rich kids, or something like that. I don’t know of any kidnappings, though.” \n",
        "“Well, that’s what they were. A lot of these kids were getting into trouble and would wind up Shanghai’d to other places around the world. Sinclair was the go-to man to find all of these kids because he was a shabby person. When you’re a mess, people choose to ignore you so he was an easy person to go to. He would ask for payment upfront and do what he could to find what remained of their spoiled brats,” he downed the rest of his drink. “None of them came back alive.” \n",
        "“None of them?” \n",
        "“Yeah, none. The mob works fast, faster than Sinclair. Sometimes they actually are alive, but usually not for long. Car crashes, accidental overdoses, stuff like that. Some are committed but I don't know if you can call that 'being alive'. And yet, people keep on coming to him. I highly doubt these rich families are talking about who they went to for help amongst each other.” \n",
        "“Sounds like a hell of a coincidence.” \n",
        "“The man you want is a man called Nicks. George Nicks, he runs the local mob racket here. He’s behind everything with those rich kids. I’ve been trying to worm myself into his business for the past half-decade If you want I could—” \n",
        "The man stops mid-sentence. There is some rumbling outside, the sound of yelling, muffled, but getting louder. \n"
      ],
      decisions: [
        {
          storyNode: "speakeasy_raid",
          label: "Uh oh…"
        }
      ]
    },
    speakeasy_raid: {
      text: [
        "Suddenly, you are drawn to the secret entrance of the speakeasy. The commotion is 100% coming from there. As a final note on the saxophone plays in fermata, you watch silently as the secret door is forced open and policemen come pouring in like a flash flood. \n",
        "“We should get out of here,” hisses the informant. “They normally shouldn’t be raiding this place. Let’s scram unless you want to be packed in a jail cell with everyone else for the night.” \n",
        "You nod silently and get out of your chair as the surrounding room panics. The patrons, like wild geese being chased by hunting dogs, are all squawking and flapping their wings, trying to flock through the only exit. Yeah right, as if thinking that pushing back against the policemen would do any work in letting them all escape. Nothing like the collective mind panicking with no exit in sight. \n",
        "The servers remained calm, they had most likely gone through something like this before. They would get arrested, then hopefully their employer would give them bail. \n",
        "You follow the informant up the stage, where the musicians were silently packing up their instruments. Pushing past a double bass and a saxophone player, you push and shove your way backstage and out of an inconspicuous metal door. \n",
        "Another alleyway. Tonight seemed to be an alley kind of night. It could have been worse considering all the weirdness going on right now. You watch as the informant scouts the nearby cars. \n",
        "“We’re going to have to hitch our own lift to the house if you want to say hi...why do you want to go there in the first place? Nicks is not a man to be messed with. Get on his bad side and he'll bump you with as much ease as one kicks a stray rock along the sidewalk.” \n",
        "“No idea,” you respond. “But I’ve had the compulsive urge to shoot something all night. It might as well be him, make life better for everyone. Listen, I just woke up today with no clue what I am doing, but this seems to be the direction my brain is heading. There's something telling me I need to meet with him now that he has been reintroduced into my vocabulary.” \n",
        "“Well, you’re the boss,” says the informant. “His house is guarded, you know.” \n",
        "“I’ll play it by ear, then.” \n",
        "You watch as the informant breaks into a car, you hear the rumble of the engine as it springs to life. He rolls down the window and pops his head out, “What are you waiting for?” \n"
      ],
      decisions: [
        {
          storyNode: "you_can_find_your_own_way",
          label: "Decline"
        },
        {
          storyNode: "mafia_house",
          label: "Get in the car"
        }
      ]
    },
    you_can_find_your_own_way: {
      text: [
        "“I can find my own way, I know where it is,” you respond to the informant. You don’t know why, but you feel like you can’t trust him one bit. \n",
        "The informant shrugs, “I’ll tell the bossman that he should be expecting you some time. Good luck. Try not to get caught.” \n",
        "He drives away as you start running along the street. Honestly, you don’t know where the heights would be, your memory is shot - not that the informant knew that. You quickly conclude that you might have made a mistake. You’re just going to have to live with it. \n",
        "The streets are in chaos, filled with people are running along the blocks trying to escape the police. You quickly duck behind the shadows and watch as people get cuffed before they could reach their cars. Some have the ironically bright idea of hiding within the night as well. The police don’t have flashlights but it is as if they are dogs themselves, able to smell out alcohol from half a mile away. You have to move to a new position. Waiting for the opportune moment, you start jaywalking across the street. All of a sudden, the world is filled with light. \n",
        "Deer in headlights, that’s a platitude right there. For some weird reason, when facing an oncoming vehicle in the middle of the street everyone turns into an idiot. Their legs turn to stone and they await their end and it always takes another person to save them. That is what is happening to you. Somebody must have been able to get their car running. You brace yourself. \n",
        "Impact. \n",
        "You are flying in the air, cursing how this night has been. You only hope that when you land, you either survive or are suddenly awake in a better world. That’s a nice thoug- \n"
      ],
      final: true
    },
    mafia_house: {
      text: [
        "You quickly hop into the stolen car and the informant starts driving up to the heights of the city. As per usual, the sound of police sirens fill the streets. Thankfully, none of them are going after you two. After a couple of minutes, all the noise fades away, skyscrapers and high-rise apartments slowly transition to residential blocks, full of similarly shaped houses and barely-there parks. It's a nice change of pace. Everything current you has experienced so far has been downtown so it is good to get some green in your life. Even if it is barely green due to the time of day. \n",
        "Eventually, the car approaches the heights. It is too easy to tell the monetary difference between those downtown and the families here. There are brick walls all along the sidewalks to prevent any onlookers for one. The car stops in front of a grand gate that, an even grander house behind it, and a series of not-so-grand bodyguards at the head. If a classy low-level mobster existed, you surely will not be finding one here. That would be the rarity of the lifetime, a species worthy of its own Latin name. \n",
        "“You're in for a late one,” speaks a particularly weedy man in a pinstripe suit. If his voice got any more nasally, he could easily be mistaken for the sound of a balloon being deflated. Keep him away from the birthday parties. \n",
        "“Hey, who are we to question the boss?” responds the informant in as casual as he could for being drunk off his horse. You just realized that you spent a ten-minute drive with a man who could barely walk. So much for saving all your good luck, now you have to deal with chance and grace. \n",
        "The informant points to you, “got a guy that needs to talk to him.” \n",
        "You quickly position your head so your head casts a dark shadow over your face. The darkness was fine already but any more shade is always happily needed. \n",
        "Because of your physical obfuscation, you can’t see the mobster’s reaction, but he gives a cough and what sounds like an approving sound before you hear something mechanical. The gate is being opened. Looks like you pass for now. \n",
        "The car drives up to the front of the house. It is grant, almost castle-like in its antiquity. There was a joke-ish rumor that some people had moved castles brick by brick from some Eastern European countryside and plopping it into the new world. For such a grand mansion, maybe those jokes were right. \n",
        "You stop, the door is mahogany, tall, dark, and a little too extravagant for your tastes. \n"
      ],
      decisions: [
        {
          storyNode: "mafia_door_knock",
          label: "Knock knock"
        }
      ]
    },
    mafia_door_knock: {
      text: [
        "The door opens and standing on the other side of the threshold is the mob equivalent of a ‘butler’. From the looks of it, their boss just got a high-ranking guy and dressed him up nicely like a young girl would a doll. When you have so much power, you can make people do anything. \n",
        "Unless the man had a Jeeves-like name, he probably was not a real butler...or at least not a good one. You can fancy up a weasel with a haircut and some nifty clothes but a weasel is still a weasel, and this guy was a pair of buck-teeth short of turning into a prized pole-cat. \n",
        "“Jameson,” the informant says in greeting. Irish, close enough. “The boss got time for one more meeting?” He points to you. You wave in a sarcastic manner. The ‘butler’ raises an eyebrow. \n",
        "“At this time of night?” He asks. No accent, you’ve been bilked. “You’re just lucky the boss has chronic insomnia. He’s open, but he’ll probably not be in a good mood.” \n",
        "“Let me go first,” says the informant. “Butter him up, you know.” \n",
        "The ‘butler’ rolled his eyes. That’s something that butlers do, you think. Nonetheless, the informant crosses into the mansion, and the door closes behind you. \n",
        "A couple of minutes pass. You can hear nothing from the inside. You spend this time admiring the ornamental bushes and trees, the ones you can see. All the trees look old and gnarled and all the bushes shaped to perfection...as perfect as an Epsicle could look, anyway. Everything probably looked fantastic in the daytime. At night, it was just an obstacle. \n",
        "A couple more minutes pass as you just take in the nighttime view. By the time the door opens up, your eyes have already adapted to the night. You catch a glimpse of a man with a flashlight patrolling the land. \n",
        "“The boss is ready for you,” the ‘butler’ says. \n"
      ],
      decisions: [
        {
          storyNode: "butler_shoot_end",
          label: "Storm the mansion"
        },
        {
          storyNode: "mafia_don_lounge",
          label: "Act hospitable"
        }
      ]
    },
    butler_shoot_end: {
      text: [
        "You quickly brandish your gun, shooting the gangster on the spot. That is one down. The informant stares at you with wide eyes, still trying to understand what you have done. You kneel, eyes trained on the front gate as you fish for the corpse’s gun. Another revolver, that is to be expected. \n",
        "Ducking behind the informant, who is doing his best lawn ornament impersonation, you fire a couple warning shots at mobsters at the entrance. You reload quickly, fishing out all of the stray bullets in the man’s pockets and charge inside, hearing the sound of bullet fire coming towards you. You quickly look behind and see the informant fall on top of the dead ‘butler’. \n",
        "You don’t know what is coming over you, but suddenly you have an urge to wipe everyone off the face of the Earth. Every single mobster needs to die. You rush into the next room. Empty. You have no time to look around, you only care about the possible entrances and exits. \n",
        "The mansion is a labyrinth, full of repeating rooms. Every single room you enter looks similar to the first. You hope to find some stairs or a kitchen but every time it is a sitting room and sitting room and sitting room. The sounds of mobsters from the second floor and rooms behind you are getting louder and louder. \n",
        "This was probably a bad idea in retrospect. \n",
        "You turn a corner, only to come face to face with a couple of mobsters with machine guns. Backing away slowly, your back bumps into a wall. You feel the cloth of a woven tapestry and a metal something that gets knocked onto the ground. Another group of gangsters appear. There sure are a lot of them in this house, more than you expected. It's as if some insect is laying thousands of eggs and they all hatch into mobsters with tommy guns. \n",
        "They slowly circle you, guns trained at the ready. You raise your hands and you pistol drops onto the floor with a subdued thunk of metal on oriental rug. You don’t have anything to say other than 'don’t charge a well-guarded area single-handedly' but I think they all already knew that. Make a plan first and don’t follow violent urges. It came so suddenly too, it looks like you have a past with the mob. Someone pulls a trigger, and the last thing you hear is the tinnitus as the bullet pierces your head in a chorus of simultaneous rapid-fire explosions. \n"
      ],
      final: true
    },
    mafia_don_lounge: {
      text: [
        "You follow the butler into the house with a word, leaving the informant behind at the door. The butler does not look like a talkative person, but then again between the police and mob your night has been inundated with tight-lipped individuals. Then again you are one as well now that you think about it. Room after fanciful room, you follow the man, his pace always constantly between a walk and a jog. \n",
        "The house itself feels never-ending. You pass though sitting room to sitting room only to enter into more sitting rooms. Living room, lounge, office, parlor, they all seem the same to you now. Everything has finery, chairs, and tables. Hell, every room has its own booze station full of bourbon. The wonders of being rich. \n",
        "Eventually, you find yourself being directed to enter a hallway with a single door at the end of it, nothing on the walls; a one way hallway. The butler motions for you to enter, and you start walking., \n",
        "Trotting down the hallway feels like an eternity. You had your drink, and you had your hair of the dog so internally you rate yourself sober enough. The trek is mind-warping all the same, you don’t know if the hallway is stretching out or it is just your mind making the whole experience take forever because you are secretly dreading what is on the other side... \n",
        "You blink, and suddenly the door is directly in front of you. You put on your breaks and just miss smashing your nose into the wood. You knock. \n",
        "There’s no response. \n",
        "You knock again. \n",
        "There’s no response. \n",
        "You knock a third time. \n",
        "By now you realize that you are probably meant to show yourself in. With a small exhale, you grip the handle and open the door to see… \n",
        "Another sitting room, only this time it is occupied. You don’t know what you expected when you were going to meet a mob boss, but someone that looked more clean-cut than the fake butler was not one of the options you came up with. A clean robe of the velvetiness of reds, short black hair with streaks of grey. Not what you expected at all. Okay, the monocle was in one of your imagined versions of him, but in a fantastic pulp fiction villain sort of way. This was not your typical mob boss, this was someone who worked the criminal underground from high society, dancing between the two like a quick-change actor. \n",
        "“Go on, take a seat,” he says in a calm voice and a thick Boston accent. \n"
      ],
      decisions: [
        {
          storyNode: "mafia_don_convo",
          label: "Take a seat."
        }
      ]
    },
    mafia_don_convo: {
      text: [
        "You take a seat in a velvet chair, before noticing that the informant was not in the room. Where did he disappear to? You don’t have any extra time to examine the room as the moment the boss speaks again, he has your full attention. \n",
        "“Let’s get down to brass tacks,” the boss says. “You wear the clothes of someone I know, either he was desperate enough for some extra cash and sold them, or you stole them and possibly killed him. Which one is it?” \n",
        "Wow, straight to the point. You were expecting some introductions, a tiny bit of waffling here and there before the main topic of conversation was brought up. But no, just right to the jugular. You want to lie, but for some reason, the man has some kind of aura that compels you to speak your mind. \n",
        "“He’s dead,” you reply. “But I have no idea how. I’m not all there myself, you see. Had a bit of a fun night and woke up to him already bumped off.” \n",
        "The boss’s face is stony. Pleasant, but as if chiseled out of marble by a second-rate mason. Everything is in place, but he's still frightening to look at. \n",
        "“Please don’t tell me you just woke up and he was dead and decided to take his stuff?” \n",
        "Alright, you won’t. You nod anyway. The boss seems to care a little too much for an unknown enigma of a detective. That meant only one thing, you open your mouth hesitantly. \n",
        "“Sinclair was one of your men?” you ask, fully knowing the answer. Confirmation was needed nonetheless. \n",
        "“As much as a drunkard of a detective could ever be one of my men’,” the boss responds. “We had a deal, a bit of a scheme and he was a lynchpin to the operation.” \n",
        "The boss is running his mouth without a care in the world. This meant one big thing in your mind. You’re not meant to survive this confrontation. Your hands remain in your pockets, one gripped onto your gun. There is not enough sound to safely cock the hammer without being noticed, but you rest your thumb on it anyway. \n",
        "“The kidnapping scheme?” you ask, gauging how far this conversation will go before it ends with somebody dying. \n",
        "“The kidnapping scheme,” he responds. “Put it like this, everybody in these type of houses do not like asking their neighbors for help. Hell, their neighborly conversations only go as far as the basic topics. It’s all tedious and boring. They would rather stick to their family honor than admit that daddy’s little girl or mommy’s grown-up young man did something wrong or got themselves into the wrong crowd. This neighborhood acts on the same rules that people did in the last century. It’s simple, we spirit away their annoying brats, I become friends with the families and Sinclair to them. The kids are all spoiled rotten and have money, so we have them 'run away' to other countries as rebellious joyrides. Gives some of our boys plus Sinclair a vacation and leave the parents hoping for some happy news. They don’t know they are paying a ransom in the form of Sinclair's payment, but even then they don’t know if their precious wunderkind is even still alive. Some time later, their kid is found running alcohol from Mexico and winds up in jail or the like. Everything just becomes another skeleton in the family’s closet with the victim too traumatized to even point us out. We're a constant reminder and they are nothing, and we can do worse.” \n",
        "The man shows no enjoyment as he talks about the scheme. It sounds more like a business presentation than anything else. You guess that is to be expected of someone who runs a big city mob. Crime is his business. \n",
        "“I’m not going to beat around the bush,” the boss says. “Now that you know all this, you have two choices. You can die here and now, without anybody finding your body, or you can hop on into this little scheme and make some money. You seem intelligent enough to pass as a detective, more so than any one of my boys. What do you say?” \n"
      ],
      decisions: [
        {
          storyNode: "mafia_yes",
          label: "Join the mob"
        },
        {
          storyNode: "mafia_shoot",
          label: "Reject his proposition."
        }
      ]
    },
    mafia_yes: {
      text: [
        "Everyone has a price. As cliche as it sounds, it is true. You’re not Sinclair, but you are similar to him. He agreed to be complacent for a large sum of money, who are you to be any different when you don’t even know what type of person you originally were? \n",
        "“Sure, why not? Your money is as good as anybody’s,” is your response. \n",
        "The boss smiles. \n",
        "****************** \n",
        "An hour later, you are sitting in the dining room of the house, hashing out the terms of the arrangement. Once this city outlives its usefulness, the group will set up in a different location and start all over again. If you survive, then you will most likely be an integral part of other future scams and deals. \n",
        "Who knew that selling your soul could be so profitable? \n",
        "The dining room is one of pure luxury, done in a historical style that you most likely did not even know the name of even before your amnesia. The food is equally as good. Considering you woke up in the drabby office of a dead man this is probably the best meal you’ve had in your life, no hyperbole. \n",
        "As you eat, both of your ears got the lecture of a lifetime as the boss talks about his methods and everything he does nationally and internationally. You ask if he has found any lead birds before and he utters a polite chuckle, he looks more like a fan of high literature than the pulpy stuff you seem to have read before. Once the dinner ends, you and the boss walk up to shake hands. \n",
        "And then you feel something hit you on the back of the head. Something hard, something made of metal. The butt of a gun? It doesn't really matter that much. You collapse on the floor, your consciousness fading. \n",
        "“Goddamn, boss,” says a random mobster, his voice gruff and gravelly. “How long were you gonna string ‘em along for?” \n",
        "“Just enough,” the boss responds. “Give them a good last meal before we figure out what we’re going to do.” \n",
        "“We going to do the same as usual?” \n",
        "There is some silence for a couple of seconds before someone speaks. “Yes, the same as usual. Just make sure you check for a good place. Make sure we don’t put this one back to where we put them the first time, okay?” \n",
        "There is a grunt of affirmation and someone starts dragging you by your legs. You try swearing at him, but nothing happens. The back of your head is throbbing, and you can’t muster the strength you try to fight for consciousness. The last thing you are able to think of is where the boss sent you the first time and where you’ll end up now. You knew you should have shot him. Greed is never good. \n"
      ],
      final: true
    },
    mafia_shoot: {
      text: [
        "Your response is curt and just. You cock the hammer of your revolver and pull the trigger. You create a hole in Sinclair's coat, and a hole in the man formerly known as George Nicks, city mob boss. One bullet straight through the heart. \n",
        "The boss dies immediately, his body folding inward as he falls forward off of his chair and onto the ground. His blood starts pooling onto the carpet, looking as if his similarly colored velvet robe was melting. \n",
        "Before anyone starts running towards the direction of the loud gunshot, you quickly jump to your feet and lock the door. That should save you a couple of minutes. Rich people always had harder, more well-made doors made with real hardwood. It will hopefully take a significantly greater force to knock it down than an apartment door and that hallway did not leave room for walking shoulder to shoulder. \n",
        "You now have a window of time to scan the room. Bookshelves amongst bookshelves, and a single window. There’s no time to check his desk or his papers. You need to escape now. \n",
        "You do not give it a second thought. One moment you are standing inside the room, eyes locked on the window, a freshly made corpse lying on the floor and the next moment you are jumping out of said window into the yard. You don’t even have time to pray that you would safely land as the moment the thought enters your mind, you execute a failed roll and land square on your back. \n",
        "At least the grass made a nice cushion ...nice-ish. It’s still grass and compacted dirt. \n",
        "Outside, you hear a cacophony of shouting. From the room you just left, you can hear the sound of many men trying to ram the sitting room door down. The time to think efficiently and run away as fast as your legs can take you is now. \n"
      ],
      decisions: [
        {
          storyNode: "escape_wall",
          label: "Over the Garden Wall"
        },
        {
          storyNode: "yard_escape",
          label: "Across the yard"
        }
      ]
    },
    yard_escape: {
      text: [
        "Like a scared horse, you gallop your way down the field. Your vision tunnels, as if you actually had blinders attached to your head. Nothing mattered but your escape. The mafia know their guns as well as the police do. Hopefully they rely on the Thompson too much to remember how to lead a bullet like marksmen. \n",
        "As you run, you almost push yourself right next to the wall, trying to make as much distance from the windows as possible. The efficiency of a pistol lessens the further away one got and you highly doubt that they have anybody that good on their side. \n",
        "Despite what you did, everything around you remains silent besides your ragged breath as you run and hide amongst trees and bushes. The late boss did say that the neighbors did not really care what went on outside of their own personal business, but how many times have they heard a gunshot ring through in their neighborhood? Somebody is hopefully calling up the police this very instant. Maybe if not them, their help would be. Even the most idyllic town starts shattering into pieces once violence hits the streets, secrets start coming out and everything is for the worse...okay, maybe they won’t be calling after all. \n",
        "Is it a game of cat and mouse if the mouse fears for their life not knowing where the cats are or is it just a hunt? \n",
        "You try your best, ducking and weaving, making sure nobody spots you, making sure that you can avoid any possible gunshots. Slowly, the entrance is getting nearer and nearer. It’s unmanned, completely defenseless. Everyone is on high alert and searching for you. \n",
        "Only one more hedge and then you can make a break for it and try to hide from cars and the mob sweeping the streets. Out of the garden, into the sewer. You ready your legs, bending deep in some cartoonish facsimile of you think professional runners pose... \n",
        "...only to feel a sharp pain in your back. You grunt and tumble onto the grass like a child standing on one leg, tipping over due to the lack of balance. The breath you were holding in expels itself as if escaping from a balloon. You slowly reach an arm behind you and touch your wound. Blood. \n",
        "Unlike a mouse, you do not have exemplary hearing and a good sense of smell. A game of cat following cat, leopard chasing domestic. You never once looked behind you, your mind preoccupied with what was ahead. Someone had been following you the entire time. \n",
        "A foot kicks at your side, rolling you into a supine position, the ‘autopsy on the morgue table’ pose. The figure says nothing, but who needs speech when your weapon can do all the talking for you. “You’re not going to survive this. If the first stab does not kill you, this knife will be violating your body a couple more times.” \n",
        "For what is worth, there was no catharsis upon killing that man, George Nicks. No sudden ‘great release’ or a weight lifting from your shoulders when you pulled the trigger. It was probably of equal amount to how the mob guy felt upon stabbing you. It was tempting to ask, if only you had the time. \n"
      ],
      final: true
    },
    escape_wall: {
      text: [
        "Quickly, you run towards the nearest gnarled tree and start climbing. They say it’s impossible to forget how to ride a bike and it seems to also be true with climbing trees. Like a squirrel you quickly ascend, your hands grasping handholds in the bark. You quickly scamper to wall height and touching the top of the wall and vault yourself over. \n",
        "Your landing is not a perfect ten. Out of the three imaginary judges in your mind, they all rate you two threes and a two. One of the lowest of winning hands in cards. One foot sticks the landing, the other rolls inside itself. The sensation is weird at first, the way your muscles tear their ligaments also sounds like a candy wrapper being twisted out of shape. \n",
        "You tumble over. The pain is intense, but you can slowly walk it out after a couple of seconds of rolling on your back like an overturned turtle. Thank the adrenaline for dampening the pain as you slowly get to your feet. \n",
        "You have to move fast, you could go down the block, or up the block. The pain is twisting your mind to the point of confusion taking its familiar hold onto you, yet the adrenaline makes everything bearable. You slowly talk one direct. A limp, a minor one. You can walk, but running is out of the question. \n"
      ],
      decisions: [
        {
          storyNode: "escape_left_end",
          label: "Left"
        },
        {
          storyNode: "escape_right_end",
          label: "Right"
        }
      ]
    },
    escape_left_end: {
      text: [
        "You quickly recover your wits and start walking down the street, unsure if you should hug the wall or stay out in the open street. The latter sounds like the better option, less distance to limp fast if you reach a crossroads. Thankfully, that is the end of every block. God bless city streets. \n",
        "Even with the danger gone the adrenaline-fueled thrill subsiding, you stay alert. Or well, you think you stay alert. The night has been a hectic one. You mentally pat yourself on the back for a job well done. Now you just need to survive the night and lie low for a while. The mob will be searching for you, or at least searching for Synclair. If his body is found tomorrow then this plan will have gone perfectly despite the independence of these actions. \n",
        "You continue walking, taking a left turn before sauntering down the block, humming a tune you heard in the speakeasy before. \n",
        "Safety breeds mistakes. It makes people weak and unprepared for any sudden changes that might happen. Before you realize it, you stop. You made a wrong turn somewhere. You were supposed to be running away, not walking back into danger. But that is what you did, too late you realize that your entire left flank is exposed to the gate you had just entered maybe ten minutes ago and the guards that returned to their station took instant notice. \n",
        "There’s no time to think about what to do, and yet a plan starts to form in your head. A bad plan, complicated, meandering, and just plain wrong. Especially so considering you don't have time to think. A new plan, one based on instinct would be better. You just need to stop acting like a deer in headlights and just put one foot in front of the other. Then, you’ll be right out of the figurative door. You have time. \n",
        "Change the present tense into the past tense: you had time. A second is all it takes for a gun to be pulled into the open. It takes another second for their fingers, well-muscled and used to the action to fire them. \n"
      ],
      final: true
    },
    escape_right_end: {
      text: [
        "As quick as you can you stagger up the block, your back to the wall. There’s no cars, no alarm, and no siren. Hell, the other houses’ lights are all off. Nobody has turned on a single lamp or cracked open a window to snoop in on the happenings at the Nicks’ residence. Maybe the boss was right. In the heights, nobody cares about what goes on in another’s interests as long as it does not affect theirs. \n",
        "You wander the night cold and alone. You feel around in Sinclair’s coat, but you can’t find a lighter. You are not a smoker since you haven’t been craving tobacco all day... but now is the time for a smoke, to form a new bad habit. \n",
        "Seconds pass feeling like minutes, minutes pass feeling like hours and hours pass feeling like...well, also hours. You are making no progress as fast as you can with a messed up ankle. You try standing straight, but the pain quickly puts you back into your Igor-ish place. \n",
        "Color is almost nonexistent in the star-lit night, so when you see a rotating light like a lighthouse in the distance, you speed up only to slow down to your regular place once you realize that the police car is going nowhere. \n",
        "“Hey you,” you call out to the policeman once he enters earshot. “Can you help a fella out?” \n",
        "The policeman, still in his patrol car turns to you, or at least you think he turns to you. It is impossible to see his face underneath the cap. The man radios something in, before getting out of his car. \n",
        "“Hey, thanks,” you say, relieved. “I twisted my ankle pretty bad. There’s been some wild stuff going on tonight, I think your sergeant would like to hear it from me himself. Think you can get me to the downtown station?” \n",
        "“Sure I can,” the man says. \n",
        "A second later you feel metal around your wrists. \n",
        "“Hey, buddy,” you ask. “The hell is happening?” \n",
        "“Taking you down to see the chief,” he responds. \n",
        "“And the cuffs?” \n",
        "“It’s procedure, I’m arresting you for the murder of James L. Sinclair. Now limp your way into the car.” \n",
        "You do so, your mind drawing a blank. The car engine starts humming, the sirens start blaring and all color starts to fade from your vision you are slowly taken to the station. The policeman lights a cigarette from his pocket and places it in your mouth, but the moment you try to take a drag, it falls out of your mouth. The adrenaline is wearing off. Slowly, your eyes start to blur, the colorless world grows darker and the candle that is your consciousness slowly burns out. \n"
      ],
      final: true
    },
    apartment_start: {
      text: [
        "“Well, she’s your problem now,” you respond, patting the police sergeant on the back. “I don’t do murders and I got my money because the client paid upfront. Have fun.” \n",
        "You quickly disengage yourself from the police, turning your back to them entirely as you head back into the apartment. There are too many things to think about already and that conversation you had with the beggar put too many ideas in your head. Something is up. \n",
        "Lost in thought, you ignore your surroundings as you pass through the lobby without a second glance and start ascending the stairs upwards. No elevator trip tonight, you need to think about everything that has happened in this night so far. \n",
        "The more you think about it, you come to the conclusion that you must have killed Sinclair. It made no sense to kill a man, then knock someone out and then dress them in the dead man’s clothes unless you wanted to frame them in some slipshod attempt. There are other, easier ways to do that. You killed Sinclair, that was the truth of it. How? That you do not know. After him there was the dead woman in the ally, and the contradictory stuff about it. Should you even be believing a beggar when the wounds don’t match that of a fall? \n",
        "There is the possibility of it being an inside job, a deeper conspiracy. If that's true then corruption is running on a large scale in this city. The source of your amnesia is also a big factor to your reluctance, why bother caring about something you have no part in when you don’t even know you you are? \n",
        "As the questions pile up unanswered in triplicate, you find yourself back on your floor. Well not your floor, of course, but the floor where everything started for you. Maybe if you could find something in the room you woke up to see if you remember anything at all, or maybe you should follow that beggar’s words. You know, just play along. \n",
        "You have a bad feeling none of this was going to turn out well in the long run. \n"
      ],
      decisions: [
        {
          storyNode: "return_room",
          label: "Barricade yourself inside",
          requires: ["paranoia"]
        },
        {
          storyNode: "return_room_dos",
          label: "Investigate for clues",
          requires: ["curiosity"]
        }
      ]
    },
    return_room: {
      text: [
        "You walk back into the office. This is odd, everything seems the same despite you defenestrating a body. The room looked the same as you left it, no straggling cops decided that they wanted to give the place the ol’ once over. That is good at least. \n",
        "Sitting back on 'your' chair, you wonder what you should do now. If you were playing Sinclair, you might as well play the detective and take whatever cases he had for later. There were no cases, nor any memos on the desk. Completely clean. Granted, this being a man like Sinclair and considering where his office lay, he probably did not have many clients anyway. \n",
        "There’s that nagging feeling again… only this time it is different. You chucked the body down out the window. Why has nobody found him? There is no fire escape attached to this side of the building and there was no dumpster in that section of the alleyway. The police are right outside and examining that dead woman. They should have two corpses on their detail but only one was being examined. \n",
        "You resolve yourself to not peek out of the window -- so naturally, you do it anyway. \n",
        "Blackness. Not your normal, city night-time darkness. No, this is an all-enveloping void. You See no light and you hear no sound. You can’t even see the building across the alleyway. It is as if it all vanished, as if everything outside of this building ceased to exist. \n",
        "Like a normal person should when meeting such a scene, you freak out. You did nothing wrong, and now the world is playing tricks on you. You can feel yourself hyperventilating, your breaths getting more ragged. You can’t stay here. In a hurry, you burst out of the office and finish your panic attack in the hallway. From outside, you can hear cars and sirens and the general sound of city life. Everything is fine for now. \n"
      ],
      decisions: [
        {
          storyNode: "lobby_enter",
          label: "Escape to the lobby"
        }
      ]
    },
    return_room_dos: {
      text: [
        "You almost dread going back to the investigation room, considering that you stuffed a body inside of the office. As you enter the waiting room with the lone secretary desk, you start procrastinating. If there is anyone who would know what was happening, it would be the secretary. Unfortunately, the secretary is not around, but her handiwork is. \n",
        "Helen Sinclair, secretary. A relative maybe? You can’t find any pictures whatsoever. It could just be a shared name. You casually waste time flipping papers over. Nothing of interest. You see new cases, old cases, case requests, the budget, and typed out cases in prose. Looks like the secretary was having some fun writing out stories like Watson wrote about Holmes. A fun pastime, but nothing that generates any clues on who you were. \n",
        "Next is the trash. You rifle through the crumpled up bits of paper searching for something helpful until you find some paper that catches your eye. Stuffed at the bottom was a single newspaper page. Why not? You take it out, try to smooth out the creases, and start reading. Another missing persons case. From the looks of it, missing rich kids is the new vogue thing. Too much pressure and/or ignorance from mommy and daddy maybe? \n",
        "Now this is interesting. Helen Sinclair, 21, missing since a week ago. You don’t have the front page of the paper so you don’t know when this happened but those two names popping up so close together must not be just pure coincidence. Daughter of a rich banker, that made sense. So what? Helen was moonlighting as a secretary at her what? Her uncle’s business? Girl must've wanted to experience some bit of life outside of the ritz, nothing wrong with that. Lord knows you would love to see life inside of those gated communities. \n",
        "Okay, this office is starting to get to you. Despite not being in the same room as it, your mind just wanders to the body under the desk. You shuffle out of the office without a look back. You’re not going back in there. The further you are from the body, the better. When they find him, everything is going to go crazy. You don’t know why, but you sense it will. \n"
      ],
      decisions: [
        {
          storyNode: "stair_thoughts",
          label: "Check the upper floors"
        }
      ]
    },
    stair_thoughts: {
      text: [
        "In no time you find yourself the victim of seconds thoughts. Your resolution lasted only for so long, quickly disappearing like the sun in Canada during the winter. You just feel lucky that you’re taking the stairs. The elevator is for people who know where they need to go while the stairs are for the wanderers and those that need a moment to think about where you're going. It gives one a chance to back away. Lord bless the stairs, the thinking man's transportation. \n",
        "You need time to think about everything right now. \n",
        "For you, strong will is something that needs to be refilled, to be replenished. There’s a reason they call alcohol ‘liquid courage’, and now being a completely almost-sober person, you could use some right now. Nothing like some extra nerve to turn a coward into a lion. You pause mid-way on the sixth floor. The half-way point. It’s now or never, do or die. \n",
        "You have no idea why you are throwing out those types of platitudes since they are not making you happy. Why do you care at all? There could be more trouble upstairs and that is not a job for you at the moment. You’re dressed as a detective, but acting as one is only in the realm of imagination. Playing along is fun until it leads to multiple corpses. You’re just a victim of circumstances and everything be damned if you’re going to let circumstance be actual peril. \n",
        "You take a breath and steel yourself. Exhaling deeply, you take a step… \n"
      ],
      decisions: [
        {
          storyNode: "lobby_enter",
          label: "Downwards"
        },
        {
          storyNode: "body_room",
          label: "Upwards"
        }
      ]
    },
    body_room: {
      text: [
        "The seventh floor gives you goosebumps. You have no idea if it means anything at all, but that’s what detectives do, right? Work on intuition? The seventh floor is the one that made your gut turn, so it should be the best place to start. \n",
        "Walking down the hall, you start quickly scanning the doors if there is anything out of place. Everything looks okay, wooden doors, it was not like doors themselves could be weird. 901, 902, 903, 904…. \n",
        "Huh, maybe you meant the ninth floor is the one that’s messing you up in a spiritual-like sense. Nonetheless, you quickly run the whole gamut of the hallway. Nothing out of the ordinary. The ninth floor was clear. Just to be sure, you decide to walk the halls a second time. \n",
        "901, 902, 903. Nothing out of the ordinary. Okay sure the hallway looks a bit different than what you just experienced, the doors went from beige to green and you might be hearing something from one of the rooms but besides that, nothing out of the ordinary. \n",
        "Sighing deeply, for fun you jiggle the knob of the door right next to you, and by sheer luck, the door opens unveiling the room to the outside view. \n",
        "What a mess. That’s putting it lightly as the scene is the equivalent of calling an ugly baby ‘passable'. It looked like at a time, multiple people lived here, multiple people with no sense of properly cleaning after each other. Clothes were strewn around, torn curtains over a cabinet mirror, fixtures overturned. Now, tornados are not known to hit downtown so often, but this time you think you’ll make an exception. \n",
        "On the far side of the room is a window that was wide open. Not a tornado, a fight? A very intense fight, possibly more a struggle than anything else. No actual exchange of blows but two people grappling with each other, knocking everything around and then one of the two was pushed out of the window. That made sense. \n",
        "So that beggar was right, something is going on in this city besides the mob. Still, that pit in your stomach, that specter that is hanging over you had not dispersed yet. Slowly, as if against your will your eyes lock on to the bathroom. Closed. Slowly, you walk towards it. \n"
      ],
      decisions: [
        {
          storyNode: "bathroom_attack",
          label: "Open bathroom door"
        }
      ]
    },
    bathroom_attack: {
      text: [
        "Your hand hovers over the doorknob, shaking slightly. It would be proper etiquette to knock, but you feel like you won’t be seeing anything alive inside of that room. You strain your will to put your hand on the knob and strain yourself even harder to try and turn it. \n",
        "The door bursts open. Like a child near a particularly nasty jack-in-the-box, you jump in surprise as the ‘Jack’ charges out from the bathroom, tackling you. The trajectory of his charge pushes you back a few feet until your back hits a set of drawers hard. \n",
        "The assailant is unseen thanks to the darkness that pervades the room. You can only sense your attacker through contact and sound, which is a problem when the sound of crashing furniture and animal-like grunt is causing a ruckus. With the door open, there should be at least one person outside that would hear everything and check out the hubbub.You start struggling with little success. The strength difference is to great. \n",
        "You don’t have time to yell for help. A clammy hand is placed against your lips, silencing you when you open your mouth, lessening the hold on your body. You take that chance to break free and center yourself. By instinct, you head for the door. Suddenly, you feel tightness around a wrist, and you are quickly pulled backward with such force it almost felt inhuman. \n",
        "It’s safe to say that you don’t know how to fight. Haymakers are the most ineffective of punches already but it’s like you're just throwing the hay instead. You try your best in breaking free from your shadowy attacker, that is until they start constricting you, your arms pinned at your side like some cheap wooden doll.You have to think fast. Otherwise, who knows what will happen? \n"
      ],
      decisions: [
        {
          storyNode: "bathroom_shoot",
          label: "Stay calm"
        },
        {
          storyNode: "window_fall_end",
          label: "Struggle"
        }
      ]
    },
    window_fall_end: {
      text: [
        "Panicking hard now, you twist back and forth in an attempt to worm out of their grasp. You think it is working, that is, until you hear the thunk of metal onto the ground. In your attempt to escape, you dropped your gun. Damn your pockets for being too loose, damn that gun for not accidentally going off and wounding your assailant, and damn everything else in this night too. It would be some solace if you knew exactly what was going but you still don’t know who the hell you are. Damn you the most, the old you. If it wasn’t for you you would not be in this mess. \n",
        "Still, if there is some solace, your struggling does have some effect. While it tires you out, making the shadowy figure’s hands sweat enough to slip through was worth it. It gives you your chance to make some distance so you can think about the next steps. It also confirms that the figure is at least human. \n",
        "Now, your situation: You’re in the middle of an apartment so messy that it feels like a deathtrap, there is some unknown assailant attacking you for reasons unknown and they are between you and your gun, which you accidentally let drop onto the floor. That gun was lost unless you happened to come across a light switch. \n",
        "Acting fast, you charge, hoping to try to catch them off guard. It is your turn to be the assailant … no that is the wrong thing to think. It is time to exact some preventative self-defense. For some unknown reason, the silhouette’s figure is slimmer than you thought. That did not matter, what did matter was that now you had the advantage. \n",
        "You struggle to lug their body over the window. You don’t know why but it feels right. It feels familiar. The window is open and waiting. It is an easier way to protect yourself than trying to get past them and retrieve your gun in the mess of clothes and debris. Tugging and shoving, you fight to retain dominance. As you approach the window you can just feel yourself winning. One more shove, and down they go. \n",
        "When one is fighting, it is always beneficial if one knew their surroundings. In the darkness, this is impossible. It makes the night a detriment to both fighters. With some added torque, you try to throw your assailant. A sharp pain in your feet suddenly blooms to life. Glass shards from a broken bottle. \n",
        "You falter. \n",
        "You trip. \n",
        "You fall. \n",
        "Time slows down. You can see the figure stick their head out of the window. A familiar face. Suddenly, you feel your train of lost memories re-enter the station. Everything is coming back at full speed. Your head is about to smash open and all you can do is absolutely nothing. At least you now know how it feels to be a comple-- \n"
      ],
      final: true
    },
    bathroom_shoot: {
      text: [
        "You calm down somewhat. Trying to twist and shout would lead to nothing changing. You just need to shift your arms a bit so your hand can slip inside of your coat pocket… \n",
        "It feels like the only thing your assailant wants to do is squeeze the life you of you in the most ineffectual way ever. Just a little bit more… success! Before your assailant can make the next move, you cock back the hammer and fire the pistol. There is an ear-ringing boom and the human anaconda relinquishes his constriction, staggering backward into the bathroom before the door closes by itself and there is a large, porcelain-breaking crash. No one could have survived that. You quickly drop the pistol and run to the entrance of the apartment, sticking your head outside into the hallway. Nothing. It is as if only you and the police were alive and active in this night. Downtown people did not care, but a gunshot is in a totally different ballpark. \n",
        "You flip the light switch. Now nobody can get the jump on you. That is, unless they flip the switch off again. Ignoring the disastrous state the dirty apartment is in, you open the bathroom door again. Breathing a sigh of relief at no second attempt at a fight, you flip on the light. \n",
        "The body is bleeding from the stomach, positioned in a way almost reminiscent of taking a bath. Blood is the only liquid filling the tub, making it a very macabre scene. For some reason, you don’t gasp in surprise at seeing who you were fighting in the dark. A policeman, the very one that ushered you out of Sinclair’s room in your second memory ever on Earth as an amnesiac 'detective’. At this point, you’re tired. You don’t care about the why you just know he was playing dirty with the mob. That is reason enough for you. \n",
        "Now, so far you’ve been lucky due to the strange emptiness of the apartment. Hopefully, it will stick around for the investigation. You feel safe, but that nagging feeling is still present. Why? Why does it feel like you have forgotten something important? Why is your brain doing its best to remember something specific? \n"
      ],
      decisions: [
        {
          storyNode: "mirror_end",
          label: "Investigate the apartment"
        }
      ]
    },
    mirror_end: {
      text: [
        "The room isn't just a mess, it is absolutely filthy. From your guess, it would have still been filthy even if there wasn’t some sort of underground boxing match going on before. A scene lingers in the rooms, this apartment probably had no water. \n",
        "First things first, the gun. You find it half-buried under a pile of clothes. Doing your best at playing detective, you parse through the clothes. Women’s clothing. Dresses and suits and many unmentionables in need of some sort of cleaning. Two different sizes too. From the tags, you start separating the items in front of you into two piles: medium and small. \n",
        "Following your gut instincts, you check the door. It wasn’t just locked, the lock was broken. From the apartment, you push the door inwards to the hallway. Somebody broke out, judging from how messed up the hinges are. \n",
        "To recount: at least two women lived in squalor on this floor. The dead girl that the police are most likely dealing with looked like a small. The big question is where did the others go to? Trafficking prisoners? \n",
        "There would have been some sort of commotion if a bunch of trafficking prisoners escaped, even if the police were on the job. Granted, this apartment seems to be completely empty for some reason. \n",
        "What if the mob bought out this entire building? You shake your head. That would be a ridiculous idea...though it might be plausible if there was a large sum of money. Hell, Sinclair’s wallet was full of cash, everything was a possibility now. \n",
        "Everything is getting more complicated, something is definitely up. The mob is an easy guess, but let’s face it, who else has the cash to do something like this? Corrupt politicians? Maybe, but your mind thinks not. You put a hand to your face and see the huge amount of sweat that transferred from your forehead. You slowly wander across to the cabinet and pull the curtain aside. \n",
        "Standing before you was a large painting. A red-haired young woman with a pinched, vulture-like nose and an equally stalactite-like chin. Your compliments to the artist, very life-like. Also, very dashing in a princely manner despite the freckles. Horrible clothing sense, though. The young lady was dressed in a coat and a wide-brimmed hat, all beige. It takes you far too long to realize that it was a mirror. \n",
        "That’s you, isn’t it? \n",
        "The police swarm you silently try to usher you outside. As you are helped up, you take a peek at the bathroom. Empty, no sign of a struggle besides a bullet hole in a tile wall. Something was up, something was wrong. You are escorted out of the room and the hallway is teeming with life. Despite the lateness of the hour, many husbands and wives peak their heads out of their doors to see the commotion. \n",
        "You voluntarily get into the car and ask what you are being arrested for. 'Nothing' is the consensus, they just want information. You’re unsure if you can trust them, but you’re already in the car. There’s nothing you can do. You’re picking up the pieces one-by-one but you doubt you can be any help when you don’t truly know what is going on in the city and inside your head. \n"
      ],
      final: true
    },
    lobby_enter: {
      text: [
        "The night is not exactly young, and again you find yourself backtracking, escaping from whatever is poking at your mind. How many times have you gone through this lobby tonight? \n",
        "What are you going to do anyway? Just return to the policemen? \n",
        "No, that would not do at all. You stand still and wait to see there is anybody outside, any passing pedestrians or late-night drunks. Nothing. You have a sinking feeling that something is very off with everything, you included. \n",
        "You take a seat and open a nearby newspaper. Beyond the name of the newspaper, every page is blank, bereft of words and images. What is this? A prank? There's a common theme going on. Blank newspaper, blank city, blank you. Everything is wiped clean. A newspaper with only a title, your memory with only what you know in the present and an ever-present amount of internal questions and this city with seemingly you in it. At least, that is what you are imagining from inside a simple apartment lobby. \n",
        "Loneliness is even more profound when one is lost inside their own head, not knowing where they are. You’ve been rolling with the punches, acting and reacting. Now, in this momentary pause where you are doing nothing, the silence is deafening. \n",
        "Your hand instinctively goes to your gun. For some reason, your idea of using it as a noisemaker came before using your own voice. You start humming. Ac-cent-tchu-ate the positive. Leaving the pistol in your pocket, you start examining the lobby entrance. Maybe some radio would do you some good. Humming is nice and all, but when you can’t decide if it “don’t mess with mister and the queen,” or “don’t mess with mister in-between,” and start humming the same line over and over again the monotony stands for itself. \n",
        "After a couple of minutes of what might be some sort of trespassing later, you find yourself a radio. You quickly lug is back to the lobby and plug it in. You turn the knobs but you get nothing, only static. Every once in a while you can hear the faintest declaration from the speaker, but besides those ghostly words all the stations are seemingly dead. Busted, most likely. \n",
        "You switch off the radio and stare at the exit to downtown, the entrance to your insecurities. It was like a pulp story. Any moment you should be waking up by now, a whole person. \n"
      ],
      decisions: [
        {
          storyNode: "party_harty",
          label: "Sighing deeply, you walk over and open the door."
        }
      ]
    },
    party_harty: {
      text: [
        "The cool night air is not calming. It is neither brisk nor refreshing. It’s the same type of air during a wake. Still and dead like a body, the same type of air one would breath when walking into an abandoned building or a cobweb-infested attic. \n",
        "A shiver runs down your spine as you stand still and try to hear some sort of life in the area. Instantly, you start gravitating towards the nearest group of people you know should still be around. when you walk around the building to the alleyway, you find absolutely no one. No parked police cars, no siren lights, no chattering policemen or a forensics man brought into officially check on the body. Nothing. In fact, there is no corpse either. Not in the sense that she was taken away via ambulance, there was no blood, no indication of impact whatsoever. It wasn’t that there is no body, it was that there was no body. Silently, you walk down the alleyway. If that beggar is still here, he would know something, maybe. Nothing, absolutely nothing. Neither hide nor hair of a single being around the block when just moments ago the place was teeming with unwilling life going about their jobs, duty-bound to do so. You quickly start running, running away from the building, from the alleyway, from everything until you start slowing down three blocks later - out of breath. It’s the silence that gets you. This is not a silence that should be in a city, this is country silence. No, it’s beyond country silence because at least there are bugs. You have nothing, and it is starting to get to your head. It is too similar to everything you have experienced, the confusion on hand and the ultimate avatar of the questions that have been running in your mind since you were ‘born’: what is going on? Who are you?. Now, the loneliness is starting to mess with your perception. At the corner of your eyes, at the peripheral of your vision, you keep on seeing small little figments of imagination. People, monsters, blotches of color, it's all the same. You continue walking, now scared of your own thought process as every corner you see things that should not be and the fact that it exists only in your head means that the something you see is just nothing, and the void grows larger and larger and larger and larger. Expanding with every step you take as you try to dissuade yourself that you are not, in fact, the loneliest being in the universe; so you walk and walk and walk until your urge to break the temporary mold grows and grows until you can’t take it anymore and shuffle to a random door attached to a random building at the side of an unknown block, you don’t even knock before entering… \n",
        "...and the room is filled with people. Not just people, people you think you know, people that look familiar. It looks like a party, a social gathering. You excuse yourself in, gently pushing between people, desperately searching for someone. \n",
        "It doesn’t take long for you to find your target. Chatting and laughing with other people, she looks lively, which was saying a lot considering the last time you saw her she was a corpse plastered on concrete. \n"
      ],
      decisions: [
        {
          storyNode: "woman_shoot_end",
          label: "Fix things"
        },
        {
          storyNode: "crazy_end",
          label: "Retreat"
        }
      ]
    },
    woman_shoot_end: {
      text: [
        "Everyone quickly cups their hands over their ears as the shot rings out. Their eyes watch as she falls gracefully like a leaf in autumn. When she collapsed, sprawled against the party floor she became a different person. Blonde turned to black, her face seemed to shapeshift, rippling away like the water in a disturbed lake. You drop your pistol, confused. \n",
        "***************** \n",
        "“Paranoid delusions” was what the police-mandated psychiatrist concluded after weeks of meetings and discussions. It doesn’t matter what you say, your words seemingly goes into the psychiatrist's ears like gibberish, like a conspiracy theory. \n",
        "You are taken from the prison cell quickly enough but hope of some sort of freedom is dashed the moment you are ushered into an ambulance and brought into a gated building. The fields are teeming with people dressed in white doing maintenance on the grounds. A look into your future fate. Truly not a grand one at all. \n",
        "The next thing you remember is being strapped onto a chair, feeling waves of electricity coursing through your body. You try to speak, to say anything, but the bit that is in your mouth is preventing you from vocalizing. \n",
        "Everything calms down after that. What with the pills and injections, your mind slows to a crawl. You initially had some want to remember who you were in the past, but that is now lost. Now, you are desperately trying to recall what happened in the past day. There was something important that you had to do, that you had to figure out, and yet you can’t remember. People have been calling you ‘the detective’, though you are unsure if you are one. That does not stop you from having long-winded monologues to yourself or whoever will listen. Today, it is your theory that someone is hiding portions of food and stealing medicine. \n",
        "Small cases, always the small cases. One day, you will escape and become a great detective out in the big city. You just hope that you won’t be forgetting that in the next shock session. \n"
      ],
      final: true
    },
    crazy_end: {
      text: [
        "You give a solemn smile and slowly retreat. The sounds of people and the merriment that they exude, who were you to interrupt the gala? Quickly swiping a glass of whatever, you down it in a single gulp before heading towards the exit. You open the door and the outside world is teeming full of people. Okay, not teeming but teeming for it being what? 2 AM? That is good enough for you. Besides, you have cases to go through. There is a greater use for your time at this hour. You should review some cases, then go home and sleep. \n",
        "********************** \n",
        "The clock rings eight when you walk back into your office the next morning. Your secretary greets you in a nonchalant tone, asking what you did with your night. You give her a wink and a non-answer in as gruff of a tone that you could make. You had meetings to take care of, no time for flirtatious behavior with your secretary. Besides, you have better dames to talk to. Worried widows, the wife of your best friend et cetera. They always bring the best of cases besides the occasional mob hitman wondering where one of their buddies went to. You have connections all over the place, enough that makes it so nobody that knows you would want you dead. \n",
        "Call it easy living or call it sheer luck, being a private eye in this city was a cushy job for you. Sure there’s danger, but that’s how you like it. It sure beats looking for lost pet cats or the like. \n",
        "You haven’t told anyone yet, but you even have a theory about those missing rich kids. They are not just running away, they did not need to. Someone is hiding something, and those rich families always keep their lips locked just like their riches and fortunes. Someone just needs to put a crowbar to their mouths. \n",
        "But that could wait, you have a long list of people you have to talk to first, some coffee to drink and an entire day to ponder on which cases you are going to be taking. You are, after all, a famous detective. \n"
      ],
      final: true
    }
  }
};

module.exports = playing_detective;
