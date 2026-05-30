// src/data/shawn.js
// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — edit everything about the profile here.
// Components read from this file; nothing personal is hardcoded in JSX.
// ─────────────────────────────────────────────────────────────────────────────

import hobby1 from "../assets/hobby-1.png";
import hobby2 from "../assets/hobby-2.png";
import hobby3 from "../assets/hobby-3.png";
import hobby4 from "../assets/hobby-4.png";
import hobby5 from "../assets/hobby-5.png";
import hobby6 from "../assets/hobby-6.png";
import shawnPfp from "../assets/shawn-pfp.jpg";
import { personalTakesCategories } from "./personalTakesCategories";

// ─── LETTER (Landing envelope reveal) ────────────────────────────────────────

export const letter = {
  windowTitle: "✉  A letter for you  ✉",
  city: "Quezon City, PH",
  greeting: "Hey there, stranger. 🌹",
  paragraphs: [
    "I know this is a little unusual, getting a letter from someone you barely know. But I figured the usual approach of just sliding into wasn't really my style and not the way I wanted to introduce myself. I wanted to do something a bit more personal, something that gives you a glimpse of who I am beyond just a profile picture and a bio. Having watched a lot romance anime and movies might have just also got into me.",
    "So instead, I made something. A proper introduction, the kind where you actually get to know who I am, and some little details about me. The things I care about, the things that make me, me. It's all in there, waiting for you to discover them. Well... only if you're curious enough to click and read through.",
    "So, I'm Shawn. A CS student, occasional tinkerer, and a night owl that will never sleep until I figure out something that bugged me randomly. I love to do a lot of things — from reading manga, to watching anime, to cooking, to traveling, and a lot more. I find joy in the little things, the quiet moments, and the shared experiences that make life interesting and meaningful.",
    "If you're curious about me, I hope you click through and explore my little profile I made for this moment.",
  ],
  signOff: "— Shawn Alfred",
  ctaLabel: "◈  ready to meet me?  ◈",
  ctaButtonText: "View My Full Profile",
};

// ─── PROFILE ──────────────────────────────────────────────────────────────────

export const shawnProfile = {
  // Used for route matching (/shawn) — keep this as-is
  username: "shawn",

  // Used as the photo's alt text
  name: "Shawn Alfred Padilla",

  // Title bar text on the hero card
  heroWindowTitle: "◈  SHAWNSCAPES  ◈",

  // Hero stat block
  mbti: "INTP",
  sign: "Capricorn",
  tag: "CS Student",
  photoUrl: shawnPfp,

  // Terminal output line in the hero info column
  photoCaption: `Programmer | Tinkerer | Builder | Researcher
  Midnight Chef | Reader | Writer | Adventurer`,

  // ">> SYS NOTE" box at the bottom of the hero info column
  funFact:
    "I've been wanting to learn pixel art and just started the midnight I decided to create this website.",

  // ─── QUALITIES ───────────────────────────────────────────────────────────
  // Each entry is one transit line on the board.
  //
  //   id    — must match a key in qualityConfig below
  //   title — displayed as "[TITLE] LINE" on the board
  //   body  — fallback text in the station log if qualityConfig has no `logs`

  qualities: [
    {
      id: "spontaneous",
      title: "Spontaneous",
      body: "I plan ahead most of the time, but there are moments when I drop everything to do something that just feels alive — a random road trip, cooking at midnight, or building something weird. Those moments matter to me as much as the careful ones.",
    },
    {
      id: "listener",
      title: "Active Listener",
      body: "I listen the way I'd want someone to listen to me — without interrupting, without judgment, without waiting for my turn to talk. Friends come to me with their worries, their stories, and their 2am spirals. I'm genuinely interested in people.",
    },
    {
      id: "direct",
      title: "Straightforward",
      body: "I don't do passive aggression or hints. I'd rather have an honest, slightly uncomfortable conversation than let things fester. That said, I always make room for the other person — directness isn't the same as bluntness.",
    },
  ],

  // ─── QUALITY CONFIG ───────────────────────────────────────────────────────
  // Visual and log data for each transit line. Keyed by quality `id`.
  //
  //   status     — badge text: "OPERATIONAL" | "OVERCLOCKED" | "STABLE" | "ACTIVE" | "DELAYED"
  //   badgeClass — CSS modifier: "operational" | "overclocked" | "stable" | "active" | "delayed"
  //   meter      — activity bar fill, 0–10
  //   flicker    — LED bullet flicker animation (true for energetic traits)
  //   logs       — diary entries shown in the station log panel
  //                leave as [] to fall back to the quality's `body` text instead

  qualityConfig: {
    spontaneous: {
      status: "ACTIVE",
      badgeClass: "active",
      meter: 8,
      flicker: true,
      logs: [
        {
          ts: "01:47 AM",
          text: "Decided to start building this website instead of sleeping.",
        },
        {
          ts: "11:23 PM",
          text: "Went for a midnight walk. No reason. Just felt like it.",
        },
      ],
    },
    listener: {
      status: "OPERATIONAL",
      badgeClass: "operational",
      meter: 10,
      flicker: false,
      logs: [
        {
          ts: "02:14 AM",
          text: "Stayed up helping a friend debug for 4 hours. Never checked the time.",
        },
        {
          ts: "09:40 PM",
          text: "Didn't say a word for 20 minutes. Just listened. That was enough.",
        },
      ],
    },
    direct: {
      status: "STABLE",
      badgeClass: "stable",
      meter: 9,
      flicker: false,
      logs: [
        {
          ts: "03:55 PM",
          text: "Said the uncomfortable thing. The conversation went better because of it.",
        },
        {
          ts: "10:12 PM",
          text: "Drafted the message three times. Sent the honest one.",
        },
      ],
    },
  },

  personalTakesCategories,

  // ─── HOBBIES ──────────────────────────────────────────────────────────────

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

  // ─── LOOKING FOR ──────────────────────────────────────────────────────────
  // Each station is one trait. The tuner auto-scans to the first entry on load.
  //
  //   freq    — FM frequency string (unique key); must be between 87.0–107.9
  //             keep stations spread out so the ±0.9 MHz snap-range doesn't overlap
  //   label   — station name shown on LCD and preset buttons
  //   message — quote shown in the readout area when tuned in
  //   note    — secondary callout beneath the message
  //   signal  — signal strength bar fill, 1–9

  lookingForStations: [
    {
      freq: "87.3",
      label: "SILENCE FM",
      message: "people who know silence isn't awkward",
      note: "comfortable coexistence",
      signal: 8,
    },
    {
      freq: "91.2",
      label: "ODD FM",
      message: "someone who sends strange songs at 2am with no explanation",
      note: "no context needed",
      signal: 7,
    },
    {
      freq: "95.8",
      label: "DEPTH FM",
      message: "emotionally curious and openly weird — in the best way",
      note: "surface-level conversation optional",
      signal: 10,
    },
    {
      freq: "98.6",
      label: "CHAOS FM",
      message: "soft-spoken with a very chaotic inner life",
      note: "controlled entropy",
      signal: 6,
    },
    {
      freq: "101.4",
      label: "ROAM FM",
      message: "someone who romanticizes convenience stores at midnight",
      note: "night market energy",
      signal: 9,
    },
    {
      freq: "104.9",
      label: "SLOW FM",
      message: "patient enough to let things grow at their own pace",
      note: "no rushing required",
      signal: 9,
    },
  ],

  // Closing prose shown below the radio chassis
  lookingFor: {
    body: "Someone who can sit in comfortable silence with me one night and drag me to a night market the next. I want genuine — not perfect. Someone curious about the world and about me, and patient enough to let things grow at their own pace.",
  },

  // ─── WHAT YOU'LL GET ──────────────────────────────────────────────────────

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

  // ─── QUOTE / GRAFFITI WALL ────────────────────────────────────────────────
  // `quote` is the large spray-paint text at the top of the wall.
  // `wallFragments` are the other artifacts. Remove entries to hide them.
  //
  // Types: "poster" | "sticker" | "crt" | "note"

  quote: {
    text: "Life is not measured by the number of breaths you take, but by the moments that take your breath away.",
    author: "My personal philosophy",
  },

  wallFragments: [
    {
      type: "poster",
      header: "◈ MESSAGE FOUND IN ALLEY ◈",
      text: "The best people are the ones who stay up too late talking about things that don't have clean answers. Those conversations don't solve anything — they just remind you that someone else is also losing sleep over the same questions.",
      signature: "— emotional thoughts, 02:14 AM",
    },
    {
      type: "sticker",
      lines: ["being perceived", "is terrifying.", "do it anyway."],
      meta: "LED // ironic thoughts // ver 1.0",
    },
    {
      type: "crt",
      label: "SYS_BROADCAST · RATIONAL.LOG",
      lines: [
        '"Statistically improbable things',
        "happen all the time.",
        "That's what 'improbable' means.\"",
      ],
      author: "› rational thoughts // pixel font // SYS_NOTE",
    },
    {
      type: "note",
      text: "Cooking for someone without a reason is the most honest thing you can do. No occasion, no performance — just: I thought about what you'd like and I made it.",
      signature: "— emotional thoughts, found on fridge",
    },
  ],
};
