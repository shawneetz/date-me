// Personal takes — rewritten in "X vs Y" comparison format.
// Each subcategory is a question/comparison with a sincere personal answer.

export const personalTakesCategories = [
  {
    id: "learning",
    title: "On Learning",
    iconKey: "learning",
    subcategories: [
      {
        id: "curiosity",
        title: "Structured learning vs. rabbit holes",
        answer:
          "Rabbit holes, always. Structure is great for getting started, but I learn the most when I fall into something random at 2 a.m. and just can't stop reading about it.",
      },
      {
        id: "school",
        title: "Classroom learning vs. self-teaching",
        answer:
          "Both, honestly. Classes keep me accountable when I don't feel like showing up. But self-teaching is where I actually build things. I learn way more from breaking code and figuring out why than from sitting through any lecture.",
      },
      {
        id: "self-learning",
        title: "Reading docs vs. just trying it",
        answer:
          "I just try it. I'll skim the docs to get a rough idea, then jump in and break things. I usually only go back to the documentation after making every mistake in the troubleshooting guide.",
      },
      {
        id: "failure",
        title: "Failing fast vs. planning carefully",
        answer:
          "Failing fast. I'd rather ship something rough and fix it from real feedback than plan in a vacuum for weeks. Most plans change anyway once you start, so just start.",
      },
      {
        id: "intelligence",
        title: "Raw intelligence vs. consistency",
        answer:
          "Consistency, every time. I've watched brilliant people never finish a single thing, and average people who just kept showing up end up building something incredible. I'd rather be the one who actually ships.",
      },
    ],
  },
  {
    id: "relationships",
    title: "On Relationships",
    iconKey: "relationships",
    subcategories: [
      {
        id: "communication",
        title: "Honest conversations vs. keeping the peace",
        answer:
          "Honest conversations, even when they're awkward. Staying quiet just buries things until they turn into resentment. Being straight with someone is the most respectful thing you can do.",
      },
      {
        id: "loyalty",
        title: "Grand gestures vs. small consistent effort",
        answer:
          "Small, consistent effort. Grand gestures are nice, but they don't tell you much about someone's day-to-day character. I care way more about the person who checks in when things are quiet and shows up without being asked.",
      },
      {
        id: "affection",
        title: "Words of affirmation vs. acts of service",
        answer:
          "Acts of service. Words are easy to say. If I actually care about you, I'll cook something, fix whatever's broken, or just show up early. I appreciate words, but I trust what people do.",
      },
      {
        id: "boundaries",
        title: "Needing space vs. constant closeness",
        answer:
          "Needing space. It's not about pulling away, it's just how I recharge so I can actually show up properly. I respect when others need the same, as long as we talk about it instead of using silence as some kind of test.",
      },
      {
        id: "green-flags",
        title: "Compatibility vs. chemistry",
        answer:
          "Compatibility. Chemistry gets you in the door, but it doesn't keep you there. I'd take the person who remembers something random I mentioned in passing over someone who just gives me immediate butterflies.",
      },
    ],
  },
  {
    id: "lifestyle",
    title: "On Lifestyle",
    iconKey: "lifestyle",
    subcategories: [
      {
        id: "routine",
        title: "Strict routine vs. going with the flow",
        answer:
          "Somewhere in the middle. I lock in on weekdays so I can actually be present on weekends and do whatever I want without guilt. Morning coffee is non-negotiable either way.",
      },
      {
        id: "productivity",
        title: "Intense short sprints vs. slow steady work",
        answer:
          "Short, intense sprints. One focused hour with my phone in another room beats four hours of half-distracted scrolling. If I'm not in the zone, I'd rather just step away and come back fresh.",
      },
      {
        id: "rest",
        title: "Powering through vs. actually resting",
        answer:
          "Actually resting. I used to think grinding through exhaustion was something to be proud of, but burnout fixed that fast. A real break, no screens, no passive scrolling, gets me back way faster than pushing through.",
      },
      {
        id: "staying-in",
        title: "Staying in vs. going out",
        answer:
          "Staying in by default, but the right people change that instantly. A good Friday usually looks like food, a show, or just coding something random at midnight. But if someone I actually like wants to go somewhere, I'm there. It's about the company more than anything.",
      },
      {
        id: "work-life",
        title: "Grind culture vs. sustainable pace",
        answer:
          "Sustainable pace. I'll push hard when something actually deserves it, but being permanently exhausted isn't a flex. My hobbies and interests aren't extras, they're what keep me sane and make the work mean something.",
      },
    ],
  },
  {
    id: "entertainment",
    title: "On Entertainment",
    iconKey: "entertainment",
    subcategories: [
      {
        id: "music",
        title: "Playlist shuffle vs. full albums on repeat",
        answer:
          "Full albums on repeat. Shuffle is fine for background noise, but a good album has a specific flow to it. When something clicks with me, I'll listen until I know every transition by heart.",
      },
      {
        id: "movies",
        title: "Big spectacle films vs. slow burns",
        answer:
          "Slow burns. I like movies that trust you enough not to over-explain everything. A quiet, well-acted scene usually hits harder than any explosion. Though if a blockbuster actually has great lore, I'm completely sold.",
      },
      {
        id: "games",
        title: "Story-driven games vs. competitive multiplayer",
        answer:
          "Story-driven games. I want a world I can get lost in, characters I actually care about, and choices that feel like they matter. Competitive multiplayer just stresses me out. Co-op is the exception though, running a campaign with a friend is a completely different thing.",
      },
      {
        id: "internet-culture",
        title: "Staying current online vs. selective disconnection",
        answer:
          "Selective disconnection. I know the memes and references, but I've learned to step back. Too much consumption just turns everything into noise. I'd rather miss a trend or two if it means keeping my attention span intact.",
      },
      {
        id: "nostalgia",
        title: "New releases vs. revisiting old favorites",
        answer:
          "Revisiting old favorites. New stuff is great when I'm in the mood to explore, but going back to old media grounds me. An old anime opening can hit like instant time travel. It's a good reset when things get hectic.",
      },
    ],
  },
  {
    id: "food",
    title: "On Food",
    iconKey: "food",
    subcategories: [
      {
        id: "hot-vs-cold",
        title: "Hot beverages vs. cold drinks",
        answer:
          "Hot drinks. Something about holding a warm mug just clears my head. Cold drinks are fine, but hot coffee or tea in the morning is a non-negotiable ritual. The routine of it is half the point.",
      },
      {
        id: "coffee",
        title: "Coffee vs. milk",
        answer:
          "Coffee. It's all about the ritual of having something warm before the day gets going. An afternoon coffee run is a gamble I take pretty much every time.",
      },
      {
        id: "comfort-food",
        title: "Fancy restaurant meals vs. comfort food at home",
        answer:
          "Comfort food at home. Sinigang on a rainy day fixes things that logic genuinely can't. Fine dining is cool, but I'm not chasing Michelin stars. Simple food made by someone who actually cares beats everything.",
      },
      {
        id: "cooking",
        title: "Following recipes precisely vs. improvising",
        answer:
          "Improvising. Recipes are more like suggestions. I'll swap things on the fly and just go with my gut. Cooking for people is how I show I care, and it feels way more genuine when I'm actually experimenting.",
      },
      {
        id: "street-food",
        title: "Street food vs. sit-down restaurants",
        answer:
          "Street food, no contest. The best meals I've had were eaten standing up on a humid evening. Long line of locals? I'm in. No pretension, no performance, just food that actually slaps.",
      },
    ],
  },
  {
    id: "random",
    title: "On Random Things",
    iconKey: "random",
    subcategories: [
      {
        id: "rain",
        title: "Rainy days vs. sunny days",
        answer:
          "Rainy days. The sound of rain just makes everything feel quieter and more contained. I'll throw on a playlist, grab something hot to drink, and get into it. Honestly ideal conditions for me.",
      },
      {
        id: "late-night",
        title: "Night owl vs. early bird",
        answer:
          "Night owl, no question. Something clicks after midnight where my brain just locks in. Morning me has to deal with the consequences, but 3 a.m. me gets a lot done. I've stopped pretending otherwise.",
      },
      {
        id: "aliens",
        title: "We're alone in the universe vs. they're out there",
        answer:
          "They're definitely out there. Statistically, it would be way weirder if we were completely alone. I just hope they have a concept of music. If we ever have to make a first impression, a good track and a hot bowl of sinigang would be our strongest case.",
      },
      {
        id: "voice-notes",
        title: "Voice notes vs. text messages",
        answer:
          "Voice notes, but only with people I'm actually close with. Hearing someone's tone makes it feel way more real. Texting is fine for quick stuff, but a long voice note means someone actually took the time to talk to you.",
      },
      {
        id: "existential",
        title: "Finding meaning vs. creating it",
        answer:
          "Creating it. I don't think meaning is out there somewhere waiting to be found. You build it from small moments and the things you choose to care about. We're all just stardust with imposter syndrome, so we might as well make something real out of it.",
      },
    ],
  },
];
