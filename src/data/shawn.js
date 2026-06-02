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
    "I know this is a bit unusual—getting a whole letter from someone you barely know. But sliding into your DMs felt a little too basic, and I wanted to actually introduce myself properly. Plus, watching way too much romance anime might have rubbed off on me.",
    "So, I built this instead. It's a quick look into who I am, the stuff I actually care about, and the weird little details that usually don't make it onto a standard bio. Only if you're curious, of course.",
    "A bit about me: I'm Shawn. A CS student, an occasional tinkerer, and a stubborn night owl who can't sleep if a random bug is bothering me. I'm into a lot of things—manga, anime, cooking, and traveling. I mostly just appreciate quiet moments and good, random conversations.",
    "If you want to know more, go ahead and explore the rest of the profile.",
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
      body: "I usually plan ahead, but I love dropping everything for a random midnight road trip, cooking experiment, or a weird side project. Those random moments keep things interesting.",
    },
    {
      id: "listener",
      title: "Active Listener",
      body: "I listen without just waiting for my turn to speak. My friends usually end up venting to me during their 2 a.m. spirals, mostly because I actually care about what people are going through.",
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
        "I love a good story, but manga and manhwa hit differently because of the art style. Let me know if you need recommendations—I have plenty of strong opinions.",
      imageUrl: hobby1,
      imageAlt: "Stack of manga volumes",
    },
    {
      id: "anime",
      title: "Watching Anime",
      description:
        "What started as pure entertainment turned into a real appreciation for the medium. The way anime captures hyper-specific emotions is unmatched.",
      imageUrl: hobby2,
      imageAlt: "Anime-style city lights at night",
    },
    {
      id: "diy",
      title: "DIY & Electronics",
      description:
        "Former robotics kid. I love building things with my hands—messing with microcontrollers, 3D printing parts, or taking electronics apart just to see how they work.",
      imageUrl: hobby3,
      imageAlt: "Electronics workbench with tools",
    },
    {
      id: "programming",
      title: "Programming",
      description:
        "CS major by day, builder by night. There's a specific kind of satisfaction in writing a script or tool that solves a real, annoying problem from scratch.",
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
        "It's how I show people I care. I rarely follow recipes and prefer to just experiment. If you're around, I'll happily whip something up for you.",
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
    body: "Someone who's down to sit in comfortable silence one night and explore a midnight street market the next. Just looking for someone genuine, curious, and patient enough to let things develop naturally.",
  },

  // ─── WHAT YOU'LL GET ──────────────────────────────────────────────────────

  whatYoullGet: [
    {
      id: "ramen",
      code: "A1",
      label: "LATE NIGHT",
      text: "2AM spontaneous ramen talks",
      receipt:
        "The kind of talk that happens purely because neither of us can sleep, ending up in some weird philosophical territory by the time the bowls are empty.",
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
        "A quick convenience store run that accidentally turns into an hour-long walk talking about everything under the sun.",
    },
    {
      id: "cooking",
      code: "E4",
      label: "DOMESTIC",
      text: "midnight cooking with no recipe",
      receipt:
        "An improvised, slightly chaotic meal made entirely for you. It's my default way of saying I'm glad you're around.",
    },
    {
      id: "depth",
      code: "F1",
      label: "CONNECTION",
      text: "real conversations, no surface level",
      receipt:
        "No boring small talk. I'll ask what you actually think, give you my real thoughts, and we'll keep it completely honest.",
    },
  ],

  // ─── QUOTE / GRAFFITI WALL ────────────────────────────────────────────────
  // `quote` is the large spray-paint text at the top of the wall.
  // `wallFragments` are the other artifacts. Remove entries to hide them.
  //
  // Types: "poster" | "sticker" | "crt" | "note"

  quote: {
    text: "We're all just looking for someone who makes the world feel a little less loud.",
    author: "My personal philosophy",
  },

  wallFragments: [
    {
      type: "poster",
      header: "◈ MESSAGE FOUND IN ALLEY ◈",
      text: "The best people are the ones you can stay up way too late with, talking about things that don't have clean answers. It doesn't solve anything—it just makes you feel less alone in the dark.",
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
