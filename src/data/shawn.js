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
    "I know this is a little unusual, getting a digital letter in form of a website from someone you barely know. But I figured the usual approach of just sliding into your messages wasn't really my style and not the way I wanted to introduce myself. I wanted to do something a bit more silly so I made this and whatever that comes with it, to give you a glimpse of who I am beyond just an instagram profile picture and a bio. Having watched a lot romance anime and movies might have just also got into me.",

    "Anyways, I made this to be a proper (?) introduction, the kind where you actually get to know who I am, and some little details about me. The things I care about, the things that the person I am is composed of. It's all in there, waiting for you to discover them. Well... only if you're curious enough to click and read through.",

    "To give a little bit of details, my name is Shawn. A CS student, occasional tinkerer, and a night owl that will never sleep until I figure out something that bugged me randomly. I kinda like to do a lot of other things, such as reading manga, watching anime, cooking, traveling, and a lot more. I'm the type of person to find joy in the little things, and the quiet and shared moments, but I also kinda love real world grand adventures that make life interesting and meaningful.",

    "If you're curious about me, I hope you click through and explore my little profile I made for this moment.",
  ],
  signOff: "— Shawn Alfred",
  ctaLabel: "◈  wanna read a silly intro?  ◈",
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
    "I've been meaning to learn pixel art for ages, so I finally started the exact night I decided to build this site.",

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
      body: "I usually plan ahead, but I love dropping everything for a random midnight road trip, cooking experiment, or a weird side project. Those random moments keep life interesting for me.",
    },
    {
      id: "listener",
      title: "Active Listener",
      body: "I listen without just waiting for my turn to speak. My friends usually end up venting to me at 2 a.m. about their world-ending circumstances. I do this because I am there for the laughs or to assist them in carrying the weight of their world",
    },
    {
      id: "direct",
      title: "Straightforward",
      body: "I don't really do hints or passive-aggression. I'd rather have a slightly uncomfortable, honest conversation than let things drag out. But I always make sure it comes from a good place.",
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
          text: "Went for a midnight walk. The reason? Searching for batman.",
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
          text: "Stayed up listening to a friend debugging his life for 4 hours.",
        },
        {
          ts: "09:40 PM",
          text: "Took a call only for me to not talk and just take some burden for them.",
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
          text: "Said an uncomfortable thing. The conversation went better because of it.",
        },
        {
          ts: "10:12 PM",
          text: "Drafted the message three times. Sent the honest and silly one.",
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
        "I love a good story, but manga and manhwa hit differently because of the art style, and the graphics that tell me a story with more emotion",
      imageUrl: hobby1,
      imageAlt: "Stack of manga volumes",
    },
    {
      id: "anime",
      title: "Watching Anime",
      description:
        "What started as pure entertainment turned into a real appreciation for the medium. I love its unmatched way of capturing hyper-specific emotions.",
      imageUrl: hobby2,
      imageAlt: "Anime-style city lights at night",
    },
    {
      id: "diy",
      title: "DIY & Electronics",
      description:
        "Former robotics kid. I love building things with my hands and messing with microcontrollers, 3D printing parts, or taking electronics apart just to see how they work.",
      imageUrl: hobby3,
      imageAlt: "Electronics workbench with tools",
    },
    {
      id: "programming",
      title: "Programming",
      description:
        "CS major by day, builder by night. There's this specific kind of satisfaction in writing a script or tool that solves a real, annoying problem from scratch.",
      imageUrl: hobby4,
      imageAlt: "Code on a laptop screen",
    },
    {
      id: "travel",
      title: "Travelling",
      description:
        "I love going to new places, trying weird food, and getting out of my comfort zone. I'm usually the guy who says yes to a trip before even checking my calendar.",
      imageUrl: hobby5,
      imageAlt: "Travel map and camera on a table",
    },
    {
      id: "cooking",
      title: "Cooking",
      description:
        "Aside from listening and giving some life wrecking advice, cooking is also my way of lifting spirits up. It ended up being a thing that I love to do at some point",
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
      message:
        "someone who sends strange songs or reels at 2am with no explanation",
      note: "no context needed",
      signal: 7,
    },
    {
      freq: "95.8",
      label: "DEPTH FM",
      message: "emotionally curious and openly weird, but in the best way",
      note: "surface-level conversation optional",
      signal: 10,
    },
    {
      freq: "98.6",
      label: "CHAOS FM",
      message: "a kind person with a very chaotic inner life",
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
    body: "Someone who's down to sit in comfortable silence one night and explore a midnight street market the next. Someone genuine, curious, and patient enough to let things develop naturally.",
  },

  // ─── WHAT YOU'LL GET ──────────────────────────────────────────────────────

  whatYoullGet: [
    {
      id: "ramen",
      code: "A1",
      label: "LATE NIGHT",
      text: "midnight spontaneous random talks",
      receipt:
        "The kind of talk that happens purely because neither of us can sleep, ending up in some weird philosophical territory by the time we're late for school tomorrow.",
    },
    {
      id: "music",
      code: "B3",
      label: "FREQUENCY",
      text: "oddly specific songs at 2AM",
      receipt:
        "Not a generic playlist. Just a single song sent out of nowhere because it reminded me of you. You'll get it when it happens.",
    },
    {
      id: "silence",
      code: "C2",
      label: "COEXISTENCE",
      text: "parallel coding sessions in silence",
      receipt:
        "Both of us on our laptops, doing our own thing without feeling any pressure to fill the silence. It's rare, but it's the best.",
    },
    {
      id: "walks",
      code: "D7",
      label: "URBAN",
      text: "existential walks under store lights",
      receipt:
        "A quick convenience store run that accidentally turns into an hour-long walk talking about everything under the moonlight.",
    },
    {
      id: "cooking",
      code: "E4",
      label: "DOMESTIC",
      text: "random cooking with no recipe",
      receipt:
        "An improvised, slightly chaotic meal made entirely for you. It's my default way of saying I'm glad you're around.",
    },
    {
      id: "depth",
      code: "F1",
      label: "CONNECTION",
      text: "maybe silly or locked in conversations",
      receipt:
        "An offering of completely useless information that may or may not help you life whatsoever.",
    },
  ],

  // ─── QUOTE / GRAFFITI WALL ────────────────────────────────────────────────
  // `quote` is the large spray-paint text at the top of the wall.
  // `wallFragments` are the other artifacts. Remove entries to hide them.
  //
  // Types: "poster" | "sticker" | "crt" | "note"

  quote: {
    text: "Life is not measured by the number of breath you take, but by the number of moments that take your breath away.",
    author: "Some random cool human",
  },
  wallFragments: [
    {
      type: "poster",
      header: "◈ MESSAGE FOUND IN ALLEY ◈",
      text: "We're all just looking for someone who makes the world feel a little less loud.",
      signature: "— existential thoughts, 02:14 AM",
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
      text: "Cooking is not just about making food for someone, but also to heal those that are cooked and burnt to the crisp by life",
      signature: "— backburner thoughts, found on the kitchen",
    },
  ],
};
