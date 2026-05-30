// src/data/shawn.js
// This is YOUR resume. Edit any field and it updates everywhere.

import hobby1 from "../assets/hobby-1.png";
import hobby2 from "../assets/hobby-2.png";
import hobby3 from "../assets/hobby-3.png";
import hobby4 from "../assets/hobby-4.png";
import hobby5 from "../assets/hobby-5.png";
import hobby6 from "../assets/hobby-6.png";
import shawnPfp from "../assets/shawn-pfp.jpg";
import { personalTakesCategories } from "./personalTakesCategories";

export const shawnProfile = {
  username: "shawn",
  name: "Shawn Alfred Padilla",
  heroGreeting: "Hi there, I'm Shawn!",
  mbti: "INTP",
  sign: "Capricorn",
  tag: "CS Student",
  photoUrl: shawnPfp,
  photoCaption:
    "CS student. Builder. Occasional midnight chef.\n Somewhere in the Philippines.",
  funFact:
    "I've been wanting to learn pixel art and just started the midnight I decided to create this website.",

  qualities: [
    {
      id: "spontaneous",
      iconKey: "shootingStar",
      title: "Spontaneous",
      preview: "Plans meet impulse — I live for both.",
      body: "I plan ahead most of the time, but there are moments when I drop everything to do something that just feels alive — a random road trip, cooking at midnight, or building something weird. Those moments matter to me as much as the careful ones.",
    },
    {
      id: "listener",
      iconKey: "radio",
      title: "Active Listener",
      preview: "People call me when they need to vent.",
      body: "I listen the way I'd want someone to listen to me — without interrupting, without judgment, without waiting for my turn to talk. Friends come to me with their worries, their stories, and their 2am spirals. I'm genuinely interested in people.",
    },
    {
      id: "direct",
      iconKey: "compass",
      title: "Straightforward",
      preview: "I say what I mean — respectfully.",
      body: "I don't do passive aggression or hints. I'd rather have an honest, slightly uncomfortable conversation than let things fester. That said, I always make room for the other person — directness isn't the same as bluntness.",
    },
  ],

  personalTakesCategories,

  hobbies: [
    {
      id: "manhwa",
      title: "Reading Manhwa & Manga",
      description:
        "I love stories in general, but the visual medium of manhwa and manga makes them hit differently — I get lost in the art as much as the plot. Ask me for recommendations; I have opinions.",
      imageUrl: hobby1,
      imageAlt: "Stack of manga volumes",
    },
    {
      id: "anime",
      title: "Watching Anime",
      description:
        "It started as entertainment, became a love for storytelling craft. Some of my biggest inspirations come from anime — the way emotion is animated in this medium is unlike anything else.",
      imageUrl: hobby2,
      imageAlt: "Anime-style city lights at night",
    },
    {
      id: "diy",
      title: "DIY & Electronics",
      description:
        "Former robotics competitor. I love engineering things — making a microcontroller do something useful, 3D modeling parts, and figuring out how systems work by taking them apart (and hopefully putting them back together).",
      imageUrl: hobby3,
      imageAlt: "Electronics workbench with tools",
    },
    {
      id: "programming",
      title: "Programming",
      description:
        "CS student by study, builder by nature. I find something deeply satisfying about creating something from nothing — a working system, a tool, a small program that solves a real problem.",
      imageUrl: hobby4,
      imageAlt: "Code on a laptop screen",
    },
    {
      id: "travel",
      title: "Travelling",
      description:
        "I think the best version of yourself comes from exposure — new places, new food, new conversations. I'm the kind of person who says yes to things before thinking too hard about them.",
      imageUrl: hobby5,
      imageAlt: "Travel map and camera on a table",
    },
    {
      id: "cooking",
      title: "Cooking",
      description:
        "Cooking is one of the ways I take care of people. I experiment more than I follow recipes and I'll happily cook for you — no occasion needed.",
      imageUrl: hobby6,
      imageAlt: "Home cooking in a pan",
    },
  ],

  lookingFor: {
    headline: "Someone to share quiet and loud moments with.",
    body: "Someone who can sit in comfortable silence with me one night and drag me to a night market the next. I want genuine — not perfect. Someone curious about the world and about me, and patient enough to let things grow at their own pace.",
  },

  // ─────────────────────────────────────────────────────────────────
  // Vending machine of experiences.
  // Each slot dispensed is a moment, a vibe, an emotional dynamic.
  // NOT a list of "benefits" — these are things you actually get to live.
  //
  // Fields:
  //   id        — unique key
  //   code      — vending machine slot code (e.g. "A1")
  //   label     — short category label shown above the text
  //   text      — the experience name (shown in slot list)
  //   receipt   — longer description printed on the receipt when dispensed
  //   soldOut   — (optional) boolean, greys out the slot
  // ─────────────────────────────────────────────────────────────────
  whatYoullGet: [
    {
      id: "ramen",
      code: "A1",
      label: "LATE NIGHT",
      text: "2AM spontaneous ramen talks",
      receipt:
        "The kind of conversation that starts because neither of us can sleep — and ends somewhere we didn't expect. No agenda, just talking until the bowl is empty.",
    },
    {
      id: "music",
      code: "B3",
      label: "FREQUENCY",
      text: "oddly specific songs at 2AM",
      receipt:
        "Not a playlist. A single song, sent with no explanation, because it felt like you. You'll know exactly what I mean when it happens.",
    },
    {
      id: "silence",
      code: "C2",
      label: "COEXISTENCE",
      text: "parallel coding sessions in silence",
      receipt:
        "Both on our laptops, not saying much — just existing in the same space. Comfortable enough to not need words. That's a rare thing.",
    },
    {
      id: "walks",
      code: "D7",
      label: "URBAN",
      text: "existential walks under store lights",
      receipt:
        "3AM convenience store runs that turn into hour-long walks. The kind where you talk about everything and nothing, under fluorescent light and open sky.",
    },
    {
      id: "cooking",
      code: "E4",
      label: "DOMESTIC",
      text: "midnight cooking with no recipe",
      receipt:
        "I'll make something for you — improvised, probably a little chaotic, made with actual intention. Cooking is how I say I care about you.",
    },
    {
      id: "depth",
      code: "F1",
      label: "CONNECTION",
      text: "real conversations, no surface level",
      receipt:
        "I'll ask what you actually think. I'll tell you what I actually think. We'll get somewhere honest. That's the deal.",
    },
  ],

  dealBreakers: [
    "Dishonesty",
    "Lack of effort",
    "Closed-mindedness",
    "Emotional unavailability",
    "Zero ambition",
    "Excessive dependency",
  ],

  quote: {
    text: "Life is not measured by the number of breaths you take, but by the moments that take your breath away.",
    author: "My personal philosophy",
  },
};
