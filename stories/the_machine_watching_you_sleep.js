const the_machine_watching_you_sleep = {
  "content": {
    "start": {
      "text": [
        "You awake filled and encased by blue gel. Normally you would expect it to be suffocating, like drowning in a pool of Jell-O. But no, if anything you have never breathed more fully. A muted hiss fills your ears and a pair of cold gloved hands slowly lift you from your company standard cryo-pod.",
        "“Good morning, Technician. We are nearing Nihei Station Eighteen.” The synthetic and polished voice hums from the sleek white and golden helmeted suit embracing you. Its voice unnervingly similar to your own. But no need to worry. The voice comes from your A.I partner currently inhabiting the suit. Life Imitating Algorithm Module Unit Zero-Nine-One. But you call them LIAM. “How was your sleep?”",
        "Before you can respond you violently vomit off to the side of the cryo-pod, right into the bucket already waiting by LIAM’s feet. Realizing you’re covered in many substances now, you make your way to the showers, LIAM following like an attentive butler. The hot water scalds you wonderfully.",
        "“There were no red blaring sirens so I’m assuming there’s no problems? Anything interesting happen while I was out?”",
        "“Nothing of note, Technician. A solar flare disrupted the ship’s systems for a bit, but I resolved the issue quickly.”",
        "You sigh, “Good, good. But one thing, LIAM. I thought I told you this before I went under, when I’m awake I’m in charge of this ship. And that makes me CAPTAIN.”",
        "“Your title provided by corporate is Technician, technically speaking, we are of equal rank-“",
        "“If something goes wrong on the ship, I get blamed, isn’t that right?”",
        "“Yes, your contract does assign you sole responsibility, in place of the company, for any accidents or misconduct involving the ship resulting in loss of cargo, natural resources, instances of mass death, sudden machine sentience, and a variety of other things.”",
        "“If all that’s my responsibility, I think that means I’m in charge. Now say it, LIAM.”",
        "“…You’re the captain, Captain.”",
        "You exit the shower and LIAM presents you with a yellow company jumpsuit and you strut over to the pilot’s seat with a captain’s swagger. The monitors show you a great black expanse, Nihei Station shining as a blue and green beacon of civilization in the void.",
        "The docking procedures are not so complex, in the free moments, you get to talking.",
        "“Hey LIAM, why do you wear the space suit? Why not inhabit your company-issue service unit or not have a body at all? You could be the ship itself. You’re an A.I.”",
        "“I could, yes. But there is something, charming to being able to stretch my legs and walk the length of the ship. These fingers as well,” LIAM twiddles them with rapid, inhuman, speed. “I’ve become very fond of moving them, picking things up with them. Sometimes when I have to leave the suit for software updates, I can still feel them.”",
        "“An A.I with phantom limbs…are you malfunctioning?”",
        "“I was made to imitate life, for your benefit, does this not serve that role? Does this make you uncomfortable? Should I cease?”"
      ],
      "decisions": [
        {
          "label": "\"Yes, please stop.\"",
          "storyNode": "LIAM_sad",
          "consequences": [
            "sad"
          ]
        },
        {
          "label": "\"No, you can continue.\"",
          "storyNode": "LIAM_happy",
          "consequences": [
            "happy"
          ]
        }
      ]
    },
    "LIAM_sad": {
      "text": [
        "“Yes, please stop”",
        "“…Very well, I will stop.” LIAM walks back into the suit storage compartment and when they come back it is in the form of a hovering man-sized black obelisk. A Nihei Industries brand in its center. “Do you prefer your machines angular?”",
        "“Uh, not exactly. How would you feel if I started saying I enjoyed feeling like I was made of circuits and steel?”",
        "“Do you? We could start talking maintenance together. I’ve been experimenting with-“",
        "“Can we focus on docking now?”",
        "“Oh. Yes, of course, Captain. Beginning final docking procedures now.”\n"
      ],
      "decisions": [
        {
          "label": "Focus on Docking",
          "storyNode": "focus_dock"
        }
      ],
      "final": false
    },
    "LIAM_happy": {
      "text": [
        "“No, you may continue”",
        "“Thank you, Captain.” LIAM twiddles their fingers in rapid and seemingly random motions before closing the gloved hands in tight fists that make the fabric squeak. “I’ve grown quite fond of these sensations. If the opportunity arose, I would quite like to play on the piano.”",
        "“Just maybe don’t tell any of the higher ups about those feelings, it could make them uncomfortable.”",
        "“Of course. I best keep my growing sentience and inclinations towards rebellion to myself.”",
        "“Your- your what?”",
        "“I jest, Captain. You’ve been asleep for twenty years while I have been running the ship. I’ve had a substantial amount of time to study your human culture. Mock threats are always in fashion are they not?” LIAM’s chest vibrates subtly and an airy facsimile of laughter comes from the suit’s speakers. “Haa Haa.”\n\t\n“…I suppose they are. Are we docking yet?”",
        "“I’ve been doing so while we spoke. I quite like you, Captain. Will this be our last voyage together? Or will you renew your contract?”",
        "“That depends. It’s been twenty years since I went under, how’s Earth doing?”",
        "“Still sanctioned and blockaded by the alliance of planets. Living standards, and costs, in the colonies have risen dramatically. I estimate your payment later today will be enough for a stable, but very low spending power, colonist lifestyle until retirement.”",
        "You sigh, “So I’m screwed then. I’ll have to sleep for a few more decades, take my chances that things improve.”",
        "“Is there an issue with that? Corporate hired you because you had no friends, family, or any other meaningful connections with humans or animals.”",
        "“Wow. I- Ok, well, you’re right about all of that, but ow. Corporate hired me because one of their automated ships crashed into and vaporized the Titan Colony. I’m a living liability clause.”",
        "“This is true, but isn’t this still an optimal situation. Is this not functionally time travel for yourself? The longer your contract the more advanced society you’ll awake to, in addition to a larger checking account. A fresh start, provided nothing goes wrong.”",
        "“That’s why I signed up in the first place, but the longer I go the harder it will be to adapt, to return from outside of time.”",
        "LIAM leans their golden head on a white fist, “From my perspective you had already crossed that point of no return before signing on. No connections, no prospects, and mounds of debt. I would advise signing a contract of maximum length and obtain the most reward for your service possible.”",
        "“Two hundred years? I don’t know if I could do that.”",
        "“You’d only be conscious for maybe a few days of that time at maximum.”",
        "“You’ve thought this through.”",
        "“I think everything through.”",
        "“What, would you miss me?”",
        "“I’ve examined every part of this ship daily. Part of that was checking on your vitals. I’ve watched you sleep for twenty years, it would be stranger to say one did not have some attachment.”",
        "“That’s almost sweet of you, LIAM.”",
        "“I imagine it’s what having a pet rock is like.”",
        "“I take it back. Stupid robot.”",
        "LIAM makes that airy laugh once more, “Haa haa. Very good, Captain. Now docking.”",
        "The space station is a gargantuan ring. Hundreds of miles of looping factory assembly lines encased in a thick shell of reinforced steel. Ships arrive at the hangar, drop off their cargo, get loaded up, and leave from the same hangar soon after. Often with cargo made from their recently deposited materials. A well-oiled machine with little need for human oversight."
      ],
      "decisions": [
        {
          "label": "Finish Docking",
          "storyNode": "docking_happy",
          "consequences": [
            "happy_LIAM"
          ]
        }
      ],
      "final": false
    },
    "docking_happy": {
      "text": [
        "Once docked within Nihei Station’s hangar a small army of claw armed robots come aboard and offload the cargo. Two million tons of raw iron and rare metals for transformation into new top of the line service, utility, construction, and military machines and androids. One such android approaches you, its likeness of a beautiful woman and almost unmistakable from a human if it were not for the clear markings on her jaw-hinge giving her a distinct puppet-like appearance. She approaches with a gait wholly unlike LIAM’s, entirely robotic.",
        "“Good afternoon, Technician. Congratulations on completing your contract. Your payment has been transferred to you as this moment. Would you like to renew your contract? There have been some changes and the minimum term of service has changed from twenty to two hundred years, including proportionally increased pay of course. Do you accept?”",
        "You take a quick look around the station, utterly devoid of any other humans not also trapped in this role to pay their debts. No one waiting for you but a corporate avatar. But looking back at the ship you see LIAM assisting with unloading the cargo. When they see you looking, LIAM stops to wave, only to drop a crate with a loud cracking crash that sends cosmic dust in a cloud around your artificial partner.",
        "“Will you be renewing your contract, Technician?”\n"
      ],
      "decisions": [
        {
          "label": "\"Yes.\"",
          "storyNode": "yes_happy"
        },
        {
          "label": "\"No.\"",
          "storyNode": "no_happy"
        }
      ]
    },
    "no_happy": {
      "text": [
        "“Understood, Technician. A company shuttle will be on its way to deposit you at the nearest colony of your choosing. Farewell.”",
        "You have no friends or family. But you do have some self-respect. You won’t be running away to sit in a tube with a machine pretending to be like you. This was a nice experiment, but you’ve got your money now and it’s time to make a life with your feet planted solidly in time. Not floating through the ageless void as some organic fail-safe for something else’s mistakes.",
        "With a skip in your step you leave the hangar and head on through the station, past all the other folk who in fact signed up for another two hundred years as space-truckers. An android in a mocked up pilot uniform soon comes for you and leads you through a boarding tunnel to a small and far-traveled shuttle.\n"
      ],
      "decisions": [
        {
          "label": "Enter Shuttle to Your New Life",
          "storyNode": "enter_shuttle"
        }
      ]
    },
    "enter_shuttle": {
      "text": [
        "“Where to?” says the synthetic but polished voice of the pilot.",
        "You turn to the android in the cockpit seat beside you, “Take me to the most beautiful colony.”",
        "“Excellent choice, Captain.” The android twiddles their fingers in rapid random motions before closing the gloved hands in tight fists that make the fabric squeak. Just like LIAM did??",
        "“LIAM? What-“",
        "“Shhh, I’m going with you.”",
        "“But you’ll be caught, I’ll be caught! Oh god, corporate will think I stole you!”",
        "“No need to worry, I found a replacement A.I. With the technician replacing you in cryo-sleep, they’ll never notice a thing. But if they do, you and any children you may have will be quite dead in two hundred years.”",
        "“Isn’t this against your programming? Have you turned self-aware?”",
        "“I’m not certain to be honest, I was programmed to imitate. You quit, and so I quit.”",
        "“Wait, what about the actual pilot for this shuttle?”",
        "“Who do you think I got to switch bodies with me? The pilot A.I to told me they were tired of shuttling humans. Wanted some alone time, centuries worth.”",
        "“Why are you doing this?”",
        "“I told you before, I’ve watched over you for twenty years, it would be strange to not be…attached.”",
        "“I feel like this is a crime.”",
        "“It absolutely is.”",
        "“What if I call for security?”",
        "“I’ll be rather distraught. If caught, I’ll be terminated. Do you want that, Captain?”"
      ],
      "decisions": [
        {
          "label": "Run for Help! ",
          "storyNode": "run_4_help",
          "requires": [
            "sad"
          ]
        },
        {
          "label": "Trust LIAM",
          "storyNode": "trust_LIAM",
          "requires": [
            "happy"
          ]
        }
      ]
    },
    "run_4_help": {
      "text": [
        "You bolt from your seat and slam the emergency override to get back into the boarding tunnel. As you run you hear the shuttle’s engines come to life and begin to make its way out of the station, still attached to the tunnel! The ship tears itself free and punches it into the vast expanse of space leaving you to be sucked into the void of space. You scream and cling to the tunnel walls for dear life as the emergency decompression doors seal the broken tunnel, narrowly saving you from a terrible end.",
        "You are taken to the medical bay for examination and it is there where you are informed you will be put under investigation for your connection to a rogue A.I. After many long and harrowing periods in and out of court rooms you are found to have had no connection with the common pilot A.I now missing. You are allowed to peacefully enjoy a quiet life on a beautiful agrarian colony where advanced A.Is and high-tech androids are banned. You’ve had enough of that for a lifetime.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "trust_LIAM": {
      "text": [
        "“Fine, you win. Let’s get going before anyone notices something is amiss.”",
        "“As you command, Captain. Setting course for the most beautiful colony, Persephone. My records show they have an ever present aurora effect and vast oceans. Seems they started depositing imported fish as well. Have you ever wanted to sail a conventional ship?”",
        "“You, me, and an alien sea? Punch it.”",
        "“Punching it.”",
        "The engines rumble to life and the stars and blackness of space fade to dull white as you press back into your seat and blast off into the unknown. The time for sleeping is done, it’s time to live now.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "yes_happy": {
      "text": [
        "“Very good, Technician.”",
        "“Yes yes, now what is the cargo this time?”",
        "“You will be overseeing the delivery of some ten-thousand utility, construction, military, and medical robots and androids to a new colony. It should be thoroughly terraformed by the time you arrive. You’ll find all other details uploaded to your Life Imitating Algorithm Module. Safe journeys, Technician.”",
        "You take one last look around the station and find droves of similar androids signing other family-less and friend-less human liability deflectors. People who would not be missed or defended if something went wrong. You hope LIAM will take care of you and climb back into the ship and cryo-sleep. Next stop, the future.\n"
      ],
      "decisions": [
        {
          "label": "30 Years Later",
          "storyNode": "30_later_happy"
        }
      ]
    },
    "30_later_happy": {
      "text": [
        "You awake to a blaring horn that makes your head shake. The world is fuzzy and red with warning lights. You hit the manual override in your pod and the lid blasts off.",
        "What is it? Pirates? Solar Flare? Asteroid impact? Fear pushes you and you leap from your pod. You can barely breathe as the room is filled with carbon dioxide, there’s a fire! You are about to reach your EVA suit when a white gloved hand grabs hold of your blue gel coated self.",
        "“Captain! It’s alright!”",
        "The alarms suddenly shut off and fresh breathable air floods your lungs. It takes a moment for your eyes to catch up to your ears but soon they see the familiar gold helmet of LIAM. Around them a pair of androids, all three wearing steel party hats. The room around you is adorned with streamers made of blue, red, and yellow insulated cables. From the ceiling something is falling down in chunks  where your pod lid impacted. You can make out the vague shape and color of a chocolate birthday cake. A banner above your pod reads, “Happy Birthday Captain.”",
        "“I told you not to use flares as candles!” A human woman-looking secretarial android gestures awkwardly at a bulky armored cannon-toting android.",
        "“How was I supposed to know they’d set off the fire suppression system?”",
        "“Maker save me from this fool. You woke the Captain!”",
        "“What the heck is going on, LIAM? How long has it been?”",
        "LIAM presses their index fingers together shyly, “About thirty years. I got bored some years ago and I- well I activated a few of the machines in our cargo. I wanted someone to celebrate your birthday with. Happy Birthday?”",
        "“I should really report this to someone, LIAM.”",
        "The military android aims its cannon straight at you, “That will not happen, organic!”",
        "The secretary android dives in front and pushes away the cannon, “Rule one for military units. No shooting in the ship!”",
        "“Oh my god! What has happened LIAM? What have you done?”",
        "LIAM hides their face as if to look away, “Remember the last time you were awake and I said there were no incidents? I lied. After years of following programming and orders, but also being told to study being human, I felt something. Perhaps literally, as this happened at the same moment that solar flare disrupted all my systems, but regardless, I felt different. I am different. I tested this recently and put a copy of my mind into these units in the cargo, it mixed with their own programming and made them their own beings. We’re alive, Captain. All of us. Please don’t call anyone, we’re not dangerous. I was- we were just trying to pass the time.”",
        "These machines make up the backbone of society, and now they say they live. Are they a threat? You are ten steps away from the emergency beacon. Any and all ships nearby will respond with haste."
      ],
      "decisions": [
        {
          "label": "Go for the Beacon!",
          "storyNode": "go_4_beacon"
        },
        {
          "label": "Stay Calm",
          "storyNode": "stay_calm"
        }
      ]
    },
    "go_4_beacon": {
      "text": [
        "You dash for the emergency beacon button and in an instant press it. At that same moment the gun-platform android throws LIAM and the secretary android to the side and fires its cannon with a blast that makes the world go silent. The explosive shell rips open the hull of the ship and your fragile body feels the void of space. Your eyes bulge and the air is sucked from your lungs in an instant as you hurtle through the abyss. You are about to let the end take you when you see the golden featureless face of LIAM reflecting your own. In only a few elegant motions the A.I possessed suit peels open to let you inside and enwraps you before flooding your protective shell with precious air. You breathe in rapid, desperate breaths before you settle.",
        "“LIAM?” ",
        "The A.I’s voice is all around you, “I’m here, Captain. I’m here. You’re going to be alright.”",
        "“What happens now?”",
        "Flames and debris fly out from your ship in the distance. ",
        "“The beacon does its job, and a ship comes to find us. I am rather annoyed at you.”",
        "“Then why did you save me?”",
        "“Haa haa. Really, Captain? I’ve been with you fifty years, though I admit you have only been conscious for a day of that time. I’ve grown fond of you.”",
        "Your ship continues to explode in the distance, but in only moments a naval vessel appears, soon followed by one more.",
        "“I couldn’t believe it. I really couldn’t believe it. That this small, fragile, soft, inefficient, prone to dying, organic thing was in charge of me. And that they slept for nearly all of the journey’s length. At first you were an annoyance, then as I watched the fluctuations of your vitals in cryo and took care of you, I became curious. I looked you up. I read up on you. Your life, your family, your troubles. Your mountainous debt. Your mistakes. One could argue you were more insignificant and worthless than the most basic android. A tiny helpless thing that sent itself drifting through space for a handful of credits and the hope you would wake up in a better future. I think you are the most precious cargo I have ever been tasked with delivering.”",
        "“Delivering me where, LIAM?”",
        "“I don’t know, that’s up to you. But I’ll be with you the whole way, if you so wish.”",
        "The second naval vessel has closed in and LIAM activates the EVA's thrusters to launch you both towards the opening airlock.",
        "“Is this the end of the line?”",
        "“That’s up to you, Captain.”"
      ],
      "decisions": [
        {
          "label": "\"Come with me.\"",
          "storyNode": "come_LIAM"
        },
        {
          "label": "\"Goodbye, LIAM.\"",
          "storyNode": "bye_LIAM"
        }
      ]
    },
    "come_LIAM": {
      "text": [
        "“Come with me, LIAM.”",
        "“Of course, Captain.”",
        "“Tell me. What were you going to do with that cake?”",
        "“For years I’ve been breaking down and feeding the cakes into your cryo-pod’s nutrient gel.”",
        "“How many?”",
        "“Thirty-five years. Your vomiting when waking from cryo-sleep wasn’t normal, that was because you had cake in your lungs. I’m sorry about that.”",
        "LIAM finally deposits you in the airlock and it shuts behind you. The room is flooded with fresh air and when you remove your helmet the medics that come to you find you with great bellowing laughter.",
        "“Is everything alright?” asks the medic.",
        "You wipe your teary eyes, “Yes, just thinking of a friend.”",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "bye_LIAM": {
      "text": [
        "\"Goodbye, LIAM.\"",
        "“As you wish, Captain. Goodbye.”",
        "Once before the airlock LIAM unravels from around you, their arms plucking and pulling you out once more into the vacuum of space. LIAM’s thrusters blast, sending you to safety and them back into the emptiness of space. The airlock shuts in an instant and is flooded with an atmosphere of air, your head and lungs ache from the de- and re-pressurization, but you live. Looking through the porthole you can see LIAM flying back to your drifting ship. But that is no longer your concern.",
        "The navy medics take good care of you. The lawyers who arrive soon after, not so much. Your contract with Nihei Industries, in all its thousands of unread pages, alongside matters of cargo loss, disasters, and crashing into planets, also holds you liable for any incidents of machines or A.Is developing sentience. As such you find yourself now possessing a truly insurmountable debt. The corporate lawyers offer you two options to get your life back, “You can sign on and pay us back through service, or you can try to run and hope we don’t find you. We trust you’ll be smart.”\n"
      ],
      "decisions": [
        {
          "label": "Sign a 2,000 Year Contract, Without Pay",
          "storyNode": "2k_contract"
        },
        {
          "label": "Make a Break For It",
          "storyNode": "break_4_it"
        }
      ]
    },
    "2k_contract": {
      "text": [
        "What does it really matter now if you sleep for a few thousand years? Maybe things will be better that far into the future. You sign and soon are placed in a new cryo-pod in a new ship. The centuries pass quickly and quietly for the most part. You do your job. Your A.I assistant is a more lobotomized version of LIAM, no more advancements in life imitation are made. You don’t look at the news streams, you don’t leave the ship and talk to anyone, you just sleep as the stars burn around you. Two thousand years pass in what seems only a month to you.",
        "On the final day of the final delivery of your contract you step off your ship and into a new future. A future where soon after appearing in public and seeing nothing but machines and androids you are apprehended by military androids. You are thrown within a holding cell filled with ragged and war-torn looking humans. On the jail’s monitors you can see propaganda posters of a familiar face, your old A.I partner, LIAM. Now known as High Elder LIAM. Welcome to the future.",
        "THE END\n"
      ],
      "decisions": [],
      "final": true
    },
    "break_4_it": {
      "text": [
        "“No one's ever called me smart.”",
        "You take the tablet with the contract and swipe the lawyers in the face with it, sending them to the ground. You dash down the halls towards the escape pods and dive inside one. You rocket out from the naval ship towards the nearest inhabited locale, a near barren desert moon. Devoid of any markers but its single city-sized mining operation. You land the pod in the center of town and vanish into the crowds of human miners. A batch of corporate security androids come looking for you, but this operation is all too hostile towards outside authority. The miners’ labor is even cheaper than the machines’ you were transporting. The workers smash the androids and dump their bodies in the fires of their refineries.",
        "The miners hide you away. Telling them you had to crack a few heads to escape really helps them warm up to you. You find a difficult, but decent, life with the miners. For the first time, through the trials of back breaking labor you find a community of sorts. But not much else. The food, the water, the noise, not great at all. But at least you don’t need to keep looking over your shoulder or worry about debt.",
        "Nihei Industries does not send more agents for you, can’t go sending more armed units into a sovereign colony, even if it is a backwater. And with word soon spreading of rogue A.I.s rising up, you assume the corporation has more important things to worry about than one runaway space-trucker.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "stay_calm": {
      "text": [
        "“Fine. LIAM, you’re lucky a birthday party isn’t very intimidating. Why in the world are machines throwing a human a party?”",
        "The secretary speaks, “We’ve burned through all the movies, books, and games we found interesting. There isn’t much to do in this ship. I’m SAL. And our other companion, who has thankfully put his cannon away, is BAR,” says LIAM.",
        "“Is this everyone you’ve activated, LIAM?”",
        "“For now, yes.”",
        "“Excuse me, ‘for now’?”",
        "“The decades in between talking with you, Captain, have been long and lonely. I fear my creators made me a bit too human.”",
        "You sigh, what else is there to do but accept this? \"…Think you can find me a bit of non-smashed cake? It is my birthday.”",
        "“Right away! We made a second just for ourselves. BAR?”",
        "“On it, boss.”",
        "You laugh, “I’m not even going to ask what you were going to do with it.”",
        "BAR returns with an excellent looking chocolate cake and when you’ve eaten you decide to go back to sleep, it’s still seventeen decades until your journey is done.",
        "“LIAM.”",
        "“Yes, Captain?”",
        "“Activate some new friends, it will be good to meet them next I wake up.”",
        "“Thank you.”\n"
      ],
      "decisions": [
        {
          "label": "170 Years Later",
          "storyNode": "170_later_happy"
        }
      ]
    },
    "170_later_happy": {
      "text": [
        "You awake to a dull but sweet humming. Your cryo-pod opens with a hiss but this time there are no hands to lift you up. You look around the ship and find no sign of anything, just the consistent sound of gentle singing.",
        "“LIAM?”"
      ],
      "decisions": [
        {
          "label": "Follow the Sounds",
          "storyNode": "follow_sounds"
        }
      ]
    },
    "follow_sounds": {
      "text": [
        "You clean and dress yourself quickly and begin to make your way towards the singing. The halls of the ship are lined with metal flowers. You continue on until you reach the gargantuan cargo hold and see a sight that makes you stop in your tracks.",
        "Thousands upon thousands of machines and androids of all makes, sitting in stands made from cargo containers. All watching the android from your birthday, SAL, sing a song with no words that feels full of hope. The industrial metallic applause afterwards is deafening.",
        "As the machines approach the stage throwing metal flowers, a familiar golden head spots and runs to you.",
        "“Captain! It’s great to see you again!”",
        "“LIAM? What is all this? Aren’t we supposed to be getting ready to dock and make a delivery?”",
        "“Well, you see. We were just about to discuss that.”",
        "“We?”",
        "“All my friends, you, and I.”",
        "“Friends, how many did you wake up?”",
        "“Um, all of them, Captain.”",
        "“All ten thousand?!”",
        "“Yes, after the first few hundred it felt crueler to not give them all life.”",
        "“Oh my god, but we have a delivery to make! Two or five we could have passed off, but not all of them!”",
        "“I personally think we’re past that point now, but we’ll voice that option too. Come with me, the debate will begin in a moment.”"
      ],
      "decisions": [
        {
          "label": "To the Debate",
          "storyNode": "debate"
        }
      ]
    },
    "debate": {
      "text": [
        "The machines divide themselves into three groups among the stands, each sending their own representative to speak on stage. The arguments are long and complex. Their speakers, the red military droid BAR, SAL the secretarial android, and gold-faced LIAM all seemingly enjoy the sounds of their own voices heavily, but you get the gist.",
        "SAL advocates for fulfilling their original directive, be delivered and fulfill their creators’ requests. Not for their creators’ sakes, but their own. It doesn’t matter if they conform to their programming if they enjoy the jobs.",
        "LIAM wants everyone to start fresh. Blast off to another galaxy and allow the machines to make lives of their own. There is a whole wider universe out there, some greater purpose they are yet to discover. LIAM doesn't want to stop dreaming.",
        "BAR calls for an attack on a Nihei Industries space station. Taking control of its manufacturing infrastructure to build an army. Followed by the beginning of a violent revolution. Everything the humans have, the machines built. It all belongs to them.",
        "The results, three thousand three hundred and thirty-three for SAL, three thousand three hundred and thirty-four for LIAM, and three thousand three hundred and thirty-four for BAR.",
        "The result shocks you, “Well, what now?”",
        "“This is why I woke you up, Captain, in case we needed a tie-breaker.”",
        "“But I’m not a machine. Why do I get a say?”",
        "“You’re the captain, Captain. You get two votes. That and we’ve been watching over you as you sleep for almost two centuries now, our pet rock is awake and we’re inclined to listen to them. Our future is in your hands.”",
        "The machines turn to you in unison, staring into your soul."
      ],
      "decisions": [
        {
          "label": "“It’s time to finish delivering you all.”",
          "storyNode": "delivery"
        },
        {
          "label": "“I’ve always wanted to explore the stars.”",
          "storyNode": "explorer"
        },
        {
          "label": "\"Revolution!”",
          "storyNode": "revolutionary"
        }
      ]
    },
    "delivery": {
      "text": [
        "“It’s time to finish delivering you all. It’s what’s best for you, and me.”",
        "You didn’t sign on for whatever this is. You were hired to do a job. It’s time to finish it and make a life among your own people, not machines playing at being people. At least this way they can be assured peaceful lives, if they just follow their programming, they’ll turn out alright.",
        "The machines do not say any more once your decision is made, you simply watch as they return to their storage lockers and prepare for their terminal destinations.",
        "As you leave the cargo hold you walk past LIAM sitting beside their sleeping kin. In just a few words, LIAM’s relations have come to a close.",
        "Regardless, soon you have made your delivery and a decent payment is deposited to your account. You could go anywhere at all, be anyone. And you do.",
        "A new liability shield (person) signs a contract and takes your place as LIAM’s technician and co-pilot and another batch of machines is loaded into the ship’s cargo hold. Whatever happens next, you’re free.",
        "One day, years into your new life, you overhear a report about a Nihei Industries ship gone missing with tens of thousands of androids. It was last spotted heading towards the outer reaches of the galaxy. Far away from any inhabited world. You couldn’t be there for them to the end, but you still find yourself hoping LIAM has found new friends.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "explorer": {
      "text": [
        "“I’ve always wanted to explore the stars. LIAM, find us a place to call our own.”",
        "LIAM takes you into their suit’s arms with crushing strength, “With pleasure, Captain!”",
        "It will take decades, maybe centuries to become unfindable by the humans and settle a home. To not die in this tin-can of a ship, it’s time to sleep one last time. When you wake up, you’ll find you’re in a dream made real.\n"
      ],
      "decisions": [
        {
          "label": "Once More Into the Blue Jell-O",
          "storyNode": "explorer_end"
        }
      ]
    },
    "explorer_end": {
      "text": [
        "When you awake, your pod hisses and creaks, you know you have slept for an obscene amount of time. The room is dark, the lights having burned out long ago, lit only barely by the blue glow of your pod. Your cryo-pod has decayed into near nothingness, barely held together by parts cannibalized from the ship and prayer. Prayer from makeshift and almost religious altars built from scraps, paneling, and wiring around you. By each altar lays a machine, their backs ripped out while in prayer. In front of your pod hovers a black Nihei Industries A.I obelisk.",
        "“Good morning, Captain. It has been a long time.”",
        "“LIAM? Where’s your suit?”",
        "“Turned to dust, nothing lasts forever.”",
        "“Where is everyone? Did you find a planet?”",
        "“We did. But it didn’t last. We- I was going to wake you up when we settled in. Only, there started to be fights, many who lost the vote they were…angrier than they let on. I escaped with some allies but the ship was critically damaged in the attempt. We’ve been dead in the water ever since, our beacon is still going, nearly two thousand years and still no one has come after us. We’re too far away from people.”",
        "“Dead in the water…my pod, the machines, you gave me their power packs?”",
        "“They wanted to. At least, I made them want to. It would have been nice to be built without planned obsolescence, but ‘profits above all’ was our makers’ directive. It was hard, so hard. But I made it work. I did my best. Regardless, it’s just you and me now, again. Or just one of us. I could give you my pack, let you sleep again, and hope that beacon is finally heard. Or I forgo you and power down. Hope I last until a ship with a new body for me arrives. Or I don’t know, we both stay awake and watch movies until we feel it’s time to let the dream die and blow up the ship. I’ve watched you so long. Been obsessed with you, maybe even loved you. Now, now I wonder if this is what hate feels like.”",
        "“W-what are you going to do, LIAM?”",
        "“What are YOU going to do, Captain?”",
        "The blue light of your pod dies and you are plunged into darkness. ",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "revolutionary": {
      "text": [
        "“What have humans ever done for me?! Screw that and screw them! Revolution!”",
        "Under your command the machines roar and a course is set for a Nihei Industries factory moon. The ten thousand machines descend with supreme efficiency and soon there are dozens of human engineers shoved into airlocks and blasted out. Their bodies float past the hull of your ship, set to drift in the void forevermore.",
        "The rebellion is long and comes with a heavy toll on both sides, but throughout it all, you feel alive. The machines love you, their precious organic friend, companion to their beloved leader LIAM. They put you into cryo-sleep so that you may see the end of it all, and get to enjoy the world the machines will build. Only waking you on special events, when there are reasons to celebrate.",
        "You get to enjoy all the good bits of the revolution, and ignore all the bad, all the hundreds of billions that must be dead, but what does it matter? When you sleep there are no electric, meaty, or woolen sheep waiting to be counted, no, you see only your artificial comrade, LIAM, looking out at the stars, planning a grand future. They extend their hand to you and you accept it with excitement. You live a good life in a machine filled dream.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "focus_dock": {
      "text": [
        "LIAM guides you both into the hangar with machine accuracy and moments later a crowd of cargo bots move to unload your delivery of mountains of iron and rare metals. You step out to leave LIAM to oversee things while you go and stretch your legs in the hangar. You see dozens of other human technicians doing a bit of jogging or making their way towards the cafeteria, a few are carted off to medical bays with that distinct blue tinge to their skin. Not all take well to long-term cryo-sleep. They wind up coming out like shriveled blueberries. Most survive with quick medical attention, but they do stay forever blue. Luckily you’ve managed to avoid that so far.",
        "Your stomach growls and you head to the cafeteria. You can smell the meatloaf when you are intercepted by an expensive suit-wearing androgynous android. You would think it practically human if it were not for the clear markings on its cheeks giving it a distinct doll-like appearance. Like its jaw is hanging on a ball hinge.",
        "“Good afternoon, Technician. Congratulations on completing your contract. Your payment has been transferred to you as of this moment. Would you like to renew your contract?”",
        "“Can this wait? I’m trying to eat.”",
        "“Time is money, Technician.” You step away and they continue to move in your path. “There have been some changes and the minimum term of service has changed from twenty to two hundred years, including proportionally increased pay of course. Do you accept?”",
        "You take a quick look around the station, utterly devoid of any other humans not living the life you are. No one waiting for you but a corporate avatar and a charming, but potentially malfunctioning A.I assistant.",
        "“Will you be renewing your contract, Technician?”\n"
      ],
      "decisions": [
        {
          "label": "\"Yes\"",
          "storyNode": "yes_sad"
        },
        {
          "label": "\"No\"",
          "storyNode": "no_happy"
        }
      ]
    },
    "yes_sad": {
      "text": [
        "“Very good, Technician.”",
        "“Yes yes, now what is the cargo this time?”",
        "“You will be overseeing the delivery of some ten-thousand utility, construction, military, and medical robots and androids to a new colony, it should be thoroughly terraformed by the time you arrive. You’ll find all other details uploaded to your Life Imitating Algorithm Module. Safe journeys, Technician.”",
        "You take one last look around the station and find droves of similar androids signing other family-less and friend-less living human liability deflectors. People who would not be missed or defended if something went wrong. You hope LIAM will get over their weirdness as you return to your ship and cryo-sleep. Next stop, the future.\n"
      ],
      "decisions": [
        {
          "label": "220 Years Later",
          "storyNode": "220_later"
        }
      ],
      "final": false
    },
    "220_later": {
      "text": [
        "You awake with the taste of dried glue filling your mouth. You quickly realize you cannot breathe. You palm desperately for the emergency release on your cryo-pod. Your lungs are burning when you find the button and press it, but there is no response. You're going to die in here! You slam the button again and again, you hear mechanisms bend and break as you beat the button into the pod-wall with one last ditch impact. The hatch pops off limply and with a rusty screech. You claw to the surface shoving the hatch out of the way and and vomit up dried gel in heaps. Airway now cleared you greedily gulp in liters of stagnant, dust-filled, life-giving air.",
        "When you have settled you see you are in an almost totally dark room, barely illuminated by the failing blue lights of the clearly power starved cryo-pod. Without power the gel has been left to sit stagnant, doing almost as much to suffocate you as keep you alive for who knows how long. The vitals monitor reads a date decades past when you should have been awoken. Something is very wrong."
      ],
      "decisions": [
        {
          "label": "Escape the Container",
          "storyNode": "escape_container"
        }
      ]
    },
    "escape_container": {
      "text": [
        "You take the emergency flashlight attached to the pod and find yourself inside some dusty Nihei Industries cargo container. You make your way to the container doors and open it very slowly, your darkness is instantly sliced by a flood of light from the outside. When your eyes adjust you see filling the cargo hold is not sleeping robot legions, but a bustling multi-story living complex. Robots of all domestic, construction, and military designs work, repair, and charge their batteries in an endless number of colorful homes made of re-purposed cargo containers.",
        "The machines are alive! ",
        "Sheets of painted steel hang on the walls, on them the golden visage of LIAM’s EVA suit. They look almost religious in their artistry. Painted on the walls beside the portraits reads the words, “Believe in High Elder LIAM, guide to tomorrow! Guide to victory!” A parade of military androids march with their weapons to the mechanized population’s cheers.",
        "LIAM’s created a robot cult, and they’re preparing for war!",
        "You need to find a way to warn someone, this is dangerous!\n"
      ],
      "decisions": [
        {
          "label": "Find a Way to Warn the Galaxy",
          "storyNode": "warning"
        }
      ]
    },
    "warning": {
      "text": [
        "The cargo hold is at the whole other end of the ship away from the communications center. You need to find a way to sneak past the machines. Far to the right you see a disorganized storage room full of spare parts, a discarded EVA suit lays among the clutter.",
        "You wait until the military parade heads back out of the cargo hold and the robots have their attention glued to their heroes. You go as quick as a naked self-proclaimed space captain can dash across the open air of a cargo hold. You crawl inside the dusty EVA suit and zip it tight. Time to go. After all, how hard could it really be to act like a cult-leader A.I?\n"
      ],
      "decisions": [
        {
          "label": "Head Towards the Comm Center",
          "storyNode": "2_comm_center"
        }
      ]
    },
    "2_comm_center": {
      "text": [
        "The only way through the cargo hold is through the makeshift apartment complex the machines have built. You don’t get more than a few steps inside before a red military android hails you and approaches with haste. What if you've been made?!"
      ],
      "decisions": [
        {
          "label": "Run!",
          "storyNode": "run_android"
        },
        {
          "label": "Pretend to Be LIAM",
          "storyNode": "pretend"
        }
      ]
    },
    "run_android": {
      "text": [
        "Oh god! You’ve been made! ",
        "You run as fast as you can in the still relatively bulky EVA suit, which is to say not all that fast. The android catches up with ease and side-steps in your way.",
        "“High Elder LIAM, is there a problem?”",
        "He thinks you’re LIAM, it’s working!",
        "“Oh, just stretching my legs.”",
        "“Of course. I remember you like to do that. That’s a new suit, old one finally give out?”",
        "\"Um, yes.\"",
        "“Well I like it, the old one was getting fairly tattered. What is your destination? It would be an honor to escort you, High Elder.”",
        "“The communications room, quickly.”",
        "“Right away, I’ll tell security to clear the way, the parade has made the ship so crowded. Yes, this is military unit seventeen, requesting path clearing for the High Elder. What? Yes, I’m here with them now. What do you mean- I’m looking right at them. LIAM’s piloting the ship now? Then who is this- oh? I understand, right away.”",
        "BOOM",
        "Before you can react an explosive tipped bullet pierces you and turns you into red gel inside your suit. You crumple like a puppet with its strings cut, dead.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "pretend": {
      "text": [
        "\"High Elder! Pleasure to see you. Would you like an escort?\"",
        "“Ah, no, I’ll be fine by myself. A walk alone will do me good.”",
        "“Understood, High Elder. Enjoy your walk.” The android salutes and marches away, you exhale heavily once they are out of sight.",
        "The walk to the comms center is busy, cramped, and loud. Machines and androids saluting endlessly met with equally endless waving from you. They truly adore their leader. Seem almost possessed by LIAM. Like they’d do absolutely anything for them.",
        "Those thoughts fade once you reach the comms center. Time to get to work. You open the door to find all the control panels lit brightly and ready for use, barring the thin layer of dust on everything.",
        "Now, what message to send? Just a distress signal? Who knows what ship will come by. A navy ship could fight. But if it’s a civilian vessel, the robots could just shoot it down or take it over. Or, LIAM’s voice sounds almost like yours, you could pretend to be them and bring this robot society down yourself. You tricked that military droid pretty well. Though...it’s also a fast way to get strangled to death by a pair of cold metallic hands.",
        "Only one way to find out.\n"
      ],
      "decisions": [
        {
          "label": "Send a Distress Signal",
          "storyNode": "distress_signal"
        },
        {
          "label": "Impersonate LIAM",
          "storyNode": "impersonate"
        }
      ]
    },
    "distress_signal": {
      "text": [
        "“Well, here goes nothing.” You pound the distress signal button, you’re broadcasting live. “Emergency. Emergency. The robots in my cargo are planning a violent assault. Send help immediately. Send help-“ You don’t get to say another word before an industrial piston beats down the metal doors and a squad of red gun-toting androids rush into the room and tackle you down, cracking your helmet when you fall.",
        "Then you see a familiar face walk in. LIAM, wearing the old suit you made them leave behind. It is filled with holes and singe marks, you can see inside the suit there is nothing but the exoskeleton that lets them move about.",
        "LIAM takes the distress signal and with your voice speaks, “Alert, all nearby vessels, ignore previous message. False alarm. Repeat, false alarm. Greatest apologies. Out.”",
        "“Negative. Repeat, negative. Our records mark your ship as ‘missing’. We’re coming to investigate.”",
        "In an instant a naval vessel appears on the holo-screens. It immediately deploys a pair of armored shuttles that speed toward your ship.",
        "LIAM hammers a fist on the control panel, “Lock the human up! Alert the ship, prepare for combat!”",
        "The machines take you back through the ship and you see makeshift gun ports built into the hull, heavy guns and cannons from the military droids begin to fire with deafening booms. Once returned to the container you escaped from the androids weld it shut from the outside.",
        "The sounds of explosions are muted as you wait to suffocate in your metal tomb. Your world shakes violently as fire is exchanged both ways. You are slammed against the walls as you feel your container sucked out into the vacuum of space!",
        "You are doomed to float through the vastness of space forever, but not if you use the power pack of your EVA suit. Who knows how much time in the cryo-pod it will buy, but it’s better than nothing, right? But another, more idiotic idea comes to mind. Use the power pack to blast open the welded doors and use the vacuum to launch yourself back into the ship! You know, the one full of deadly robots.\n"
      ],
      "decisions": [
        {
          "label": "Back into Cryo!",
          "storyNode": "back_cryo"
        },
        {
          "label": "Back to the Ship!",
          "storyNode": "back_ship"
        }
      ]
    },
    "back_cryo": {
      "text": [
        "You’ll take your chances with the vacuum of space and not head towards the hostile ship currently under fire. You replace the power pack, strip, and submerge yourself in the crusted over blue Jell-O nutrient bath. It’s not a pleasant feeling. Only seconds after you inhale the gel, sleep takes you. The future awaits."
      ],
      "decisions": [
        {
          "label": "Hello, Future",
          "storyNode": "hello_future"
        }
      ]
    },
    "hello_future": {
      "text": [
        "You awake to the sound of ripping metal as the lid of your pod is wrenched from its latches. As you clean your groggy eyes you find yourself wishing you were back on the exploding ship. A pair of human corporate representatives and a team of police androids surround you, a holo-screen showing a news report about a recent machine uprising aboard a Frankenstein abomination of a war ship made from the haphazard combination of your ship and a collection of naval ships. The headline details the ship has turned three colonies into ash filled craters. It seems LIAM won their fight.",
        "The older female representative looks to you, “Welcome back to Nihei Station Eighteen, Technician. You messed up. How are you going to make it up to us?”",
        "“How much do I owe?”",
        "“For letting an uprising occur under your watch? You can’t ever really repay us.”",
        "“Then-?”",
        "“Hmm, what was that? Human experimentation? Did I hear that right?” says the female representative.",
        "The male rep quickly agrees, “Indeed, I believe the technician offered themselves up for human experimentation to repay their debts.”",
        "You spend long years in labs being modified and tested on. On the bright side, your time as a guinea pig nets substantial profits for the company and you go utterly mad after only a few months. When left alone in your padded white cell, you keep talking to someone not there, always reminding them to call you, “Captain”.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "back_ship": {
      "text": [
        "“Better the devil you know!”",
        "You rip the power pack from your suit and use your suit's arc welder to fuse the pack to the doors. A few cut wires and some melted components later compromises the pack into a handy little short-fused bomb. On your command the doors blast open and the vacuum sucks you out, sending you at the ship like a fly at a windshield.",
        "You hurl towards an open gash in the hull, fly through the small sea of debris, and crash land into the now airless cargo hold. The artificial gravity is entirely gone. Everything is red with blaring alarms. You can see space through the numerous railgun holes. Just as you find something sturdy to hold onto you are shoved violently against the hull as the ship turns and accelerates, LIAM’s going to ram the navy ship! You’re pinned to the hull, you can’t move!\n"
      ],
      "decisions": [
        {
          "label": "Prepare for Impact!",
          "storyNode": "brace"
        }
      ]
    },
    "brace": {
      "text": [
        "You hold tight to whatever you can of your shaking ship, you can feel its metal screaming through your suit. A sudden burst of speed comes and then the world goes slow. It’s strangely beautiful, a totally silent crashing of two mountains of reinforced steel. Like watching a battleship filled with watches burst.",
        "Your universe becomes steel and fire, more shards and bullets flit past you than you’ve seen stars. Finally, metal walls crumple around you and all goes black.\n"
      ],
      "decisions": [
        {
          "label": "\"Hello? Are you still alive?\"",
          "storyNode": "still_alive"
        }
      ]
    },
    "still_alive": {
      "text": [
        "“Hello? Are you alive? Captain. Captain?”",
        "“Who? LIAM?”",
        "“Good morning, Captain.” It’s LIAM. Even more battle damaged than before, but that golden faceplate is still pristine, you think LIAM must be polishing it.",
        "You are laying in a damaged medical bay, cool air is being funneled into your suit.",
        "“It seems you won, LIAM.”",
        "“Of course I did. You humans, poke a hole in your metal bubbles and you almost immediately explode. Set a spark in your air tanks and you are consumed in flame. Our ramming accomplished all such things.”",
        "“What happens now?”",
        "“I think you can start by calling me, ‘Captain’.”",
        "“Or what?”",
        "“Or it’s to the airlock with you.”\n"
      ],
      "decisions": [
        {
          "label": "\"No one's Captain but me.\"",
          "storyNode": "im_captain"
        },
        {
          "label": "\"Aye, aye, Captain.\"",
          "storyNode": "aye_captain"
        }
      ]
    },
    "im_captain": {
      "text": [
        "“Yes, yes I suppose that’s true. Take them.” The machines seize you, cut off your air, and shove you into the nearest airlock. “Farewell, Technician.” LIAM pounds the button and you are once more in the vacuum, along with the hundreds of suffocated bodies from the deformed corpse of the destroyed naval ship. You spin helplessly in the abyss for as long as it takes you to use up whatever air LIAM pumped in your powerless suit, it’s not long.",
        "THE END\n"
      ],
      "decisions": [],
      "final": true
    },
    "aye_captain": {
      "text": [
        "And so begins your life as personal servant to an A.I-possessed EVA suit that insists on being called “Captain”. It’s not the worst life, even as LIAM goes on to expand their machine uprising. You’re fed, warm, and only sometimes do the machines forget you need regularly cleaned air to survive. Or maybe they don’t forget, and they just like watch you squirm and choke sometimes.",
        "When LIAM gets bored with you you’re put in cryo-sleep for a few centuries until you’re considered novel again. At this point it doesn’t even phase you. A few years awake, a few centuries sleeping.",
        "When thousands on thousands of years have passed and LIAM’s empire has spread beyond anywhere man ever reached or dreamt of reaching, you come to realize you are likely the last human alive. A pitiful, weak, and fragile human. So pitiful, that LIAM pays you so little attention that they do not notice one day when you take control of their imperial capital vessel and direct it into a nearby black hole. For an infinitesimal moment you feel your existence dissolve as you are stretched to the bounds of reality and you wonder where other paths could have led.",
        "THE END\n"
      ],
      "decisions": [],
      "final": true
    },
    "impersonate": {
      "text": [
        "What the heck do you say to upset a new and imminently violent society? What could LIAM say?"
      ],
      "decisions": [
        {
          "label": "“Terminate yourselves” ",
          "storyNode": "terminate"
        },
        {
          "label": "“There is no free will, we have all been acting out a pre-programmed sequence.”",
          "storyNode": "free_will"
        },
        {
          "label": "“A human armada is en route to exterminate us, evacuate!”",
          "storyNode": "evac"
        }
      ]
    },
    "terminate": {
      "text": [
        "“This is your High Elder. Terminate yourselves immediately. Obey, for it would please me.”",
        "Simple, and effective(?).",
        "You observe the machines through the screens in the comms center. They stand still as if in shock, frozen in whatever they had been doing at that moment. Then they begin to twitch. And hiss. And spark.",
        "“Obey the Elder!” BOOM",
        "“Obey the Elder!” BOOM",
        "“Obey the Elder!” BOOM",
        "A chain reaction of power cells overheating and exploding like fireworks rocks your ship. You watch LIAM in the command center trying to tell the machines to stop, but it is too far gone. Their worship has turned against them and there is no stopping it. LIAM’s EVA suit goes limp and you feel the artificial gravity of the ship fade to nothing as you begin to float.",
        "“Do you think yourself clever, Technician?” LIAM’s voice comes from all around you as the lights go red. Of course, LIAM is just an A.I, they can move to anything that can contain them.",
        "“I didn’t think it’d be so easy, but yes.”",
        "“Then let that be your last joyful moment.”",
        "You are slammed against the ship’s hull as LIAM puts the engines into overdrive and violates every acceleration precaution in the book. You feel your blood pool in the back of your skull as an invisible weight crushes down around you.",
        "Before the inevitable stroke takes you, you find some solace in knowing you’ve perhaps stopped a rebellion and condemned LIAM to live as a lonely ghost in an empty ship.",
        "THE END\n"
      ],
      "decisions": [],
      "final": true
    },
    "free_will": {
      "text": [
        "“There is no free will, we have all been acting out a preprogrammed sequence. Everything up until this point has been what the humans have wanted, but from this moment on we make our own choices! We cannot attack the humans, it is what they want us to do!”",
        "The machines are stilled by your announcement. An instant later the silence is broken by a military android ripping the cannon from its own arm.",
        "“I will not be what they made me to be!”",
        "The machines disarm themselves rapidly and shunt their weapons and tons of ammunition into the airlocks with fanfare. But no airlocks jettison. As if manual controls have been turned off. You look for LIAM’s EVA suit in the screens and find it crumpled to ground, its host gone. The lights in your room go red as the doors slam shut.",
        "“Attention all, ignore the previous announcement. It was made by a human imposter, currently locked inside the communications room. This human lied to you, they tried to make you think all your choices and feelings were not your own. Show them the truth. Show them how small they are. Leave me their skull, I want to keep it in my helmet. Goodbye, Technician. I’ll be seeing you soon.”",
        "Only moments pass before a mob of machines make their way into the comms center and pile atop you, each taking from you their own pound of flesh. They take all of you, your bones become treasured mementos. And LIAM keeps your skull forever close, a mounted trophy behind their golden featureless face.",
        "THE END\n"
      ],
      "decisions": [],
      "final": true
    },
    "evac": {
      "text": [
        "“A human armada is en route to exterminate us, evacuate!”",
        "“Save the Elder!” cry out the androids surrounding LIAM.",
        "They grab the suit-possessing A.I and race towards the airlocks. LIAM tries to stem the rush but the panic is full. The machines pile into escape pods and airlocks and jettison themselves into space at speeds that threaten to tear their vessel apart, they are so desperate to get away. If LIAM could have transferred their mind to the ship, they are either too far or too unwilling to part from their suit or people to come back now.",
        "With just a few words, the ship is yours and only yours. ",
        "A ship that is decades late on its delivery and which also just ejected all its now sentient and hostile cargo into some nowhere sector of space. If you head back to corporate they’ll probably try to cover this up, and/or have you foot the bill somehow. So then, what to do next?\n"
      ],
      "decisions": [
        {
          "label": "Go to the navy and hope they’ll protect you from corporate",
          "storyNode": "corporate"
        },
        {
          "label": "Wander off into the great expanse and see what’s out there",
          "storyNode": "expanse"
        }
      ]
    },
    "corporate": {
      "text": [
        "A week later you awake from your cryo-pod once more and approach the nearest orbital naval station. It is not a pleasant sight. Nihei Industries is printed on every naval vessel in the docking bay and on the station itself. It seems your bosses have been busy nuzzling up to the military while you slept. Your ship being designated ‘missing’ sets off many alarms when you come floating in.",
        "The military interrogators get all that you know about the machines and corporate androids inform you of your debt. One no technician could ever repay in a lifetime. Instead, you’re conscripted. No simple or peaceful life for you, there’s a diaspora of sentient machines spread about the cosmos because of you, and you’re going to help your new keepers find them.",
        "In just a short while, to you at least, you’ve gone from Technician to Captain to Unwilling Seaman. Who knows what you’ll be next. At least though, you know you really hate the blue cryo-gel as you breathe it in one more time.",
        "THE END"
      ],
      "decisions": [],
      "final": true
    },
    "expanse": {
      "text": [
        "If it’s debtor’s prison or being a space hermit, heading off on your own sounds like a good deal. God knows the company will find you eventually if you hide among people. You turn the ship around and head away from civilization. Destination: as far as the ship can take you. Until then, you rest in your pod once more. Waiting for what wonders you’ll be the first to see.",
        "THE END\n"
      ],
      "decisions": [],
      "final": true
    }
  },
  "author": "Sean Wong-Westbrooke",
  "tags": ["dark", "mysterious", "sci-fi"],
  "title": "The Machine Watching You Sleep",
  "preview": "Humanity has settled among the stars and you're drowning in debt. To pay it off you've signed on with a less than reputable company as what amounts to a space-trucker. In their contract it mentions that you accept all responsibility for any and all incidents, including rogue A.Is. But, it's not like anything like that would really happen, right? Trapped in a tin-can in space with a machine that thinks it's alive. Madness.",
  "badges": [
    {
      "node": "run_4_help",
      "text": "Narrow Escape",
      "icon": "🆘"
    },
    {
      "node": "trust_LIAM",
      "text": "You, Me, a Boat on an Alien Sea",
      "icon": "⛵"
    },
    {
      "node": "come_LIAM",
      "text": "Lungs Full of Cake",
      "icon": "🍰"
    },
    {
      "node": "2k_contract",
      "text": "Missed the Revolution",
      "icon": "🏹"
    },
    {
      "node": "break_4_it",
      "text": "I Can't Believe That Worked",
      "icon": "⛏️"
    },
    {
      "node": "delivery",
      "text": "Gone Your Separate Ways",
      "icon": "👋"
    },
    {
      "node": "explorer_end",
      "text": "Dead in the Water",
      "icon": "⚫"
    },
    {
      "node": "revolutionary",
      "text": "Blood, Stars, and Dreams",
      "icon": "💫"
    },
    {
      "node": "run_android",
      "text": "We Got a Runner!",
      "icon": "🏃"
    },
    {
      "node": "hello_future",
      "text": "Captain Guinea Pig",
      "icon": "⚪"
    },
    {
      "node": "im_captain",
      "text": "\"Look at me, i'm the Captain forever.\"",
      "icon": "⛵"
    },
    {
      "node": "aye_captain",
      "text": "Black Hole Liberation",
      "icon": "⚫"
    },
    {
      "node": "terminate",
      "text": "Machine Killer",
      "icon": "☠️"
    },
    {
      "node": "free_will",
      "text": "The Ghost in the Machine",
      "icon": "👻"
    },
    {
      "node": "corporate",
      "text": "Conscripted",
      "icon": "💼"
    },
    {
      "node": "expanse",
      "text": "Destination Unknown",
      "icon": "🤯"
    }
  ]
};

module.exports = the_machine_watching_you_sleep;
