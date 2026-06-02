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
          "Definitely the rabbit hole. Structure is great for a foundation, but I always learn the most when I stumble into a random topic at 2 a.m. and spend hours reading about it.",
      },
      {
        id: "school",
        title: "Classroom learning vs. self-teaching",
        answer:
          "Both, but for different things. Classes give me the discipline to show up when I don't feel like it. But self-teaching is where I actually build things. You learn way more from breaking code and having to fix it yourself than from sitting through any lecture.",
      },
      {
        id: "self-learning",
        title: "Reading docs vs. just trying it",
        answer:
          "I just try it first. I'll skim the docs to get the general shape of things, then jump right in. Breaking things teaches me faster than reading a pristine guide. I usually only look at the actual documentation after making every single mistake in the troubleshooting guide.",
      },
      {
        id: "failure",
        title: "Failing fast vs. planning carefully",
        answer:
          "Failing fast. I'd rather ship something imperfect and fix it based on real feedback than spend weeks planning in a vacuum. Most plans end up changing anyway, so the execution is where you actually learn.",
      },
      {
        id: "intelligence",
        title: "Raw intelligence vs. consistency",
        answer:
          "Consistency wins every time. I've seen brilliant people who never finish a single project, and average people who just keep showing up and end up building something incredible. I'd much rather be the person who gets things done.",
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
          "Honest conversations, even if they're uncomfortable. Staying quiet just to keep the peace means things get buried and turn into resentment. I'd rather clear the air with an awkward truth because being real with someone is the highest form of respect.",
      },
      {
        id: "loyalty",
        title: "Grand gestures vs. small consistent effort",
        answer:
          "Small, consistent effort. Grand gestures are cool, but they don't say much about a person's day-to-day character. What matters is who checks in when things are quiet or shows up without being asked. That's what I try to do and what I value most.",
      },
      {
        id: "affection",
        title: "Words of affirmation vs. acts of service",
        answer:
          "Acts of service. Words are great, but actions are harder to fake. If I care about you, I'll cook a meal, fix a broken device, or show up early. That's just how I show I'm thinking of you. I appreciate words, but I trust what people do.",
      },
      {
        id: "boundaries",
        title: "Needing space vs. constant closeness",
        answer:
          "Needing space. It's not about pulling away, it's just about recharging so I can bring my best self to the table. I respect when others need the same, as long as we talk about it instead of using silence as a weird test.",
      },
      {
        id: "green-flags",
        title: "Compatibility vs. chemistry",
        answer:
          "Compatibility. Chemistry gets you through the door, but compatibility keeps you there. If I had to pick, I'd choose the person who remembers a random thing I said in passing over someone who just gives me immediate butterflies.",
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
          "A loose routine. Weekdays need some structure or I'll just drift, and morning coffee is non-negotiable. But I keep weekends completely unstructured. I need that weekday anchor so the weekend actually feels like a break.",
      },
      {
        id: "productivity",
        title: "Intense short sprints vs. slow steady work",
        answer:
          "Intense short sprints. One highly focused hour with my phone in another room beats four hours of half-distracted scrolling. If I'm not in the zone, I'd rather step away, reset, and come back later instead of forcing mediocre results.",
      },
      {
        id: "rest",
        title: "Powering through vs. actually resting",
        answer:
          "Actually resting. I used to think grinding through exhaustion was a flex, but burnout cured me of that. A proper break, meaning no screens or passive scrolling, helps me reset way faster. Rest is part of the process.",
      },
      {
        id: "staying-in",
        title: "Staying in vs. going out",
        answer:
          "I default to staying in, but the right people can change that instantly. A great Friday night is usually good food, a show, or coding something random at midnight. But if someone I genuinely vibe with wants to go out, I'm down. It's always about the company anyway.",
      },
      {
        id: "work-life",
        title: "Grind culture vs. sustainable pace",
        answer:
          "A sustainable pace. I'll grind for major deadlines or passion projects that deserve it, but being permanently exhausted isn't a badge of honor. Hobbies aren't just extras, they keep me sane and refreshed. The hard work needs a clear purpose.",
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
          "Full albums on repeat. Shuffle is fine for background noise, but good albums have a specific flow and intention behind them. When a record clicks with me, I'll play it until I know every transition by heart.",
      },
      {
        id: "movies",
        title: "Big spectacle films vs. slow burns",
        answer:
          "Slow burns. I appreciate movies that trust the audience enough not to over-explain things. A quiet, well-acted scene usually hits harder than massive explosions. But if a big-budget blockbuster actually has great lore, I'm all over it.",
      },
      {
        id: "games",
        title: "Story-driven games vs. competitive multiplayer",
        answer:
          "Story-driven games. I want an immersive world, characters I care about, and choices that actually matter. Competitive multiplayer feels more like stress than fun. Co-op is the major exception because running through a campaign with a friend is unmatched. I play to relax, not to compete.",
      },
      {
        id: "internet-culture",
        title: "Staying current online vs. selective disconnection",
        answer:
          "Selective disconnection. I know the references and memes, but I've learned to step back. Constant consumption just turns everything into a blur. I'd rather miss out on a few trends if it means keeping my attention span intact.",
      },
      {
        id: "nostalgia",
        title: "New releases vs. revisiting old favorites",
        answer:
          "Revisiting old favorites. New stuff is great when I want to explore, but going back to old media keeps me grounded. Hearing an old anime opening feels like instant time travel to a different era of my life. It's a nice reset when things get too hectic.",
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
          "Hot drinks. There's something about holding a warm mug that just clears my head. Cold drinks are fine, but hot coffee or tea in the morning is a mandatory ritual for me. The routine of it is the best part.",
      },
      {
        id: "coffee",
        title: "Coffee vs. milk",
        answer:
          "Coffee. Milk tastes great, but I drink way more coffee. It's entirely about the utility and the ritual of having a warm drink before the chaos of the day starts. Taking a gamble on an afternoon coffee run is a risk I always take willingly.",
      },
      {
        id: "comfort-food",
        title: "Fancy restaurant meals vs. comfort food at home",
        answer:
          "Comfort food at home. Sinigang on a rainy day fixes things that logic can't explain. Fine dining is cool, but I'm not chasing Michelin stars. I prefer simple food made by someone who actually cares about the person eating it.",
      },
      {
        id: "cooking",
        title: "Following recipes precisely vs. improvising",
        answer:
          "Improvising. Recipes are just general guidelines, not strict rules. I'll swap ingredients on the fly and trust my instincts. Cooking for people is how I show I value them, and it feels more authentic when I'm experimenting rather than just blindly following instructions.",
      },
      {
        id: "street-food",
        title: "Street food vs. sit-down restaurants",
        answer:
          "Street food. The absolute best meals are eaten standing up on a humid evening. If there's a long line of locals, I'm jumping straight into it. There's no pretension or performance, just good food and great company.",
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
          "Rainy days. The sound of rain makes the outside world feel a lot quieter and more contained. I'll throw on a playlist, grab a warm drink, and get to work. Sunny days are fine for going out, but rain is perfect for staying in and focusing.",
      },
      {
        id: "late-night",
        title: "Night owl vs. early bird",
        answer:
          "Night owl. Something shifts after midnight where my brain gets way more creative and hyper-focused. Morning me has to deal with the consequences, but 3 a.m. me usually gets things done. I've stopped fighting my natural sleep schedule.",
      },
      {
        id: "aliens",
        title: "We're alone in the universe vs. they're out there",
        answer:
          "They're out there. Mathematically, it would be weirder if we were completely alone. I just hope they have a concept of music. If we ever have to introduce humanity to them, a good track or a hot bowl of sinigang would be our best arguments.",
      },
      {
        id: "voice-notes",
        title: "Voice notes vs. text messages",
        answer:
          "Voice notes. I only send them to people I'm close with. Hearing someone's actual tone and cadence makes it feel way more personal. Texting is fine for quick logistics, but a long voice note means someone actually took the time to talk to you properly.",
      },
      {
        id: "existential",
        title: "Finding meaning vs. creating it",
        answer:
          "Creating it. Meaning isn't hiding somewhere waiting to be discovered, you build it out of small moments and the things you choose to care about. We're all just stardust with imposter syndrome trying to make sense of things, so we might as well build something real.",
      },
    ],
  },
];
