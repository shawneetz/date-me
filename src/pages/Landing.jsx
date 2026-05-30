// src/pages/Landing.jsx
// Entry landing page — shows the envelope experience.
// Letter content is imported from shawn.js so it's easy to edit in one place.

import EnvelopeLanding from "../components/EnvelopeLanding";
import { letter } from "../data/shawn";

export default function Landing() {
  return <EnvelopeLanding letterData={letter} />;
}
