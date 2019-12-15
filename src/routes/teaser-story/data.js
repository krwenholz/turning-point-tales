
export default {
  start: {
    text: [
      "It was a beautiful summer’s day, 70 degrees, with scattered clouds and the occasional cool breeze. It had been that way every moment, of every day, for the last 5 years, except for the pre-scheduled rain burst at exactly 12:01 to 1:35. People had, and continued to be, very particular about the weather. Some wanted downpours, others a gentle trickle. It couldn’t occur in the early hours, or too late in the evening. Every drop was meticulously orchestrated and accounted for.",
      "It had never rained in the morning, or on a weekday. Evenings were off-limits, of course, and the times that had been chosen were only agreed upon after an arduous and lengthy process of debate. Each neighborhood met on a bi-weekly basis to discuss the matter, always requiring a quorum, where all the minutiae of the day would be discussed and recorded in triplicate for the benefit of those later needing to review the proceedings.",
    ],
    decisions: [
      {
        storyNode: "weekdays",
        label: "continue"
      }
    ]
  },
  weekdays: {
    text: [
      "Mondays were already too difficult to even consider including spontaneous weather, and as Tuesdays followed Mondays, they were also a settled matter. Wednesdays were, and always had been, reserved for sport tournaments. Only once had it rained on a Wednesday, and that regrettable oversight led to a dozen ruined paint jobs, a hand full of arrests, and a panic stricken individual convinced they were drowning in the comfort of their porch rocking chair. Three emergency sessions later, and through countless mountains of paperwork, it seemed the matter had all but been resolved via democratic debate. So for the interim, Wednesday was strictly off limits for inclement weather.",
      "Thursday and Friday were no better, as those leaving work were finally free to take the weekend as they wished, so rain was not a welcome sight there either. Saturdays, as one could guess, were busy catching up on all things left to the last minute. Sadly, that left Sunday, and only for a single slot of time. Only then could everyone nuzzle up during the lull of the day, and stare out their windows as the perfectly tuned and precisely executed downpour pounded the city for the pre-agreed up time of exactly 1 hour 35 minutes. Not one minute more, or one drop less.",
    ],
    decisions: [
      {
        storyNode: "and_above_all_this",
        label: "continue"
      }
    ]
  },
  and_above_all_this: {
    text: [
      "And above all this, orchestrating this weather, was a man sitting in an orthopaedically approved chair, in an air-conditioned room high above the city. Basking in the gentle loving glow of fluorescent lighting, in the midst of all this malaise, at the heart of all this weather, was James Icarus Banks.",
      "Mr. Banks watched the weather every day from 9:06 to 4:53. He was a weatherman, and he oversaw the most complex meteorological system ever devised, on board one of the most technologically advanced machines ever conceived. It was known as the Leviathan. His ship was accompanied by two others, The Memento, and the Ark. They were its sisters, each equally impressive in their size and achievement. A single ship stretched the length of New York’s Manhattan, as if a great knife had descended down and slipped into the earth, cutting away a raw slice of flesh.",
    ],
    decisions: [
      {
        storyNode: 'and_with_that_wound',
        label: "continue"
      }
    ],
  },
  and_with_that_wound: {
    text: [
      "And with that wound left behind, that raw flesh bled life, seeping out to pool into thousands of schools, parks, homes, skyscrapers and streets. In those small corners of the ship, people lived, laughed, started families, died, were born, played music, competed, lost, flipped burgers, mopped floors, wrote stories, and lived their lives with only the thin hull of the ship protecting them from the oblivion of nothingness that was the expanse of space.",
      "And Mr. Banks, who oversaw this triumphant testament of man’s ability to carve in the vast desert of space a single bastion of life, knew only two things would never change. The first, as he knew all too well, was the weather. The second was this; He was unbelievably, undeniably, unequivocally bored out of his mind.",
      "Something had to change."
    ],
    decisions: [
      {
        storyNode: "file_a_formal_complaint",
        label:
          "Time to solve this problem the right way, with a formal complaint to HR"
      },
      {
        storyNode: "file_a_formal_weather_change",
        label: "Only through paperwork, can the goal be achieved."
      }
    ]
  },
  file_a_formal_weather_change: {
    text: [
      "Swiveling in his chair, Banks reached into a large set of filing shelves directly next to his desk. If anything was going to change, it would require the most important catalyst of all; A well-documented, and thoroughly filled 'Request for Weather Change'.",
      "Being the orderly and considerate gentleman that he was, all things required paperwork, and looking for the impromptu change in the weather was no exception. Reaching into the cabinet, he flipped quickly through various request forms, from 'Annual Hail Invariant Comparison Reports', to 'Simplified Rainfall measurement metrics for Gross Adjusted intra-ship analytics', the latter being a recurring favorite in the hectic fall months, where such reports allowed for critical quarterly reports.",
      "Reaching past the otherwise tempting documents, he found the weather request forms, and laid them out in a neat pile on top of his desk. Placing his finger onto the page, he scanned towards the top level index, which stated, 'For all pre-approved weather request forms, use 'Post-Approval Form 35-B'. For other requests, please use 'Pre-Approval Form 36-A'. Much to his chagrin, Banks couldn't readily remember if he had ever filled a pre-approval form. Even worse, he wasn't sure if it mattered"
    ],
    final: true,
  },
  file_a_formal_complaint: {
    text: [
      "Swiveling in his chair, Banks reached into a large set of filing shelves directly next to his desk. If anything was going to change, it would require the most important catalyst of all; A well-documented, and thoroughly filled 'Request for Weather Change'.",
      "Being the orderly and considerate gentleman that he was, all things required paperwork, and looking for the impromptu change in the weather was no exception. Reaching into the cabinet, he flipped quickly through various request forms, from 'Annual Hail Invariant Comparison Reports', to 'Simplified Rainfall Measurement Metrics for Gross Adjusted Intra-Ship Analytics', the latter being a recurring favorite in the hectic fall months, where such reports allowed for critical quarterly presentations.",
      "Reaching past the otherwise tempting documents, he found the weather request forms, and laid them out in a neat pile on top of his desk. Placing his finger on the page, he scanned towards the top level index, which stated, 'For all pre-approved weather request forms, use 'Post-Approval Form 35-B'. For other requests, please use 'Pre-Approval Form 36-A'. Much to his chagrin, Banks couldn't readily remember if he had ever filled a pre-approval form. Even worse, he wasn't sure if it mattered"
    ],
    final: true,
  },
};
