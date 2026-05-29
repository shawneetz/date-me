import "./Profile.css";
import { useParams } from "react-router-dom";
import { shawnProfile } from "../data/shawn";

import HeroSection from "../sections/HeroSection";
import QualitiesSection from "../sections/QualitiesSection";
import PersonalTakesSection from "../sections/PersonalTakesSection";
import HobbiesSection from "../sections/HobbiesSection";
import LookingForSection from "../sections/LookingForSection";
import WhatYoullGetSection from "../sections/WhatYoullGetSection";
import QuoteSection from "../sections/QuoteSection";
import SectionDots from "../components/SectionDots";
import RevealPanel from "../components/RevealPanel";

export default function Profile() {
  const { username } = useParams();
  const profile = username === "shawn" ? shawnProfile : null;

  if (!profile) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <p className="text-sm" style={{ color: "var(--faded)" }}>
          Profile not found.
        </p>
      </div>
    );
  }

  return (
    <div className="profile-page" style={{ backgroundColor: "var(--bg)" }}>
      <SectionDots />

      <div className="app">
        <RevealPanel delay={0}>
          <HeroSection profile={profile} />
        </RevealPanel>

        <RevealPanel delay={60}>
          <QualitiesSection items={profile.qualities} />
        </RevealPanel>

        <RevealPanel delay={100}>
          <PersonalTakesSection categories={profile.personalTakesCategories} />
        </RevealPanel>

        <RevealPanel delay={140}>
          <HobbiesSection items={profile.hobbies} />
        </RevealPanel>

        <RevealPanel delay={180}>
          <LookingForSection lookingFor={profile.lookingFor} />
        </RevealPanel>

        <RevealPanel delay={220}>
          <WhatYoullGetSection items={profile.whatYoullGet} />
        </RevealPanel>

        <RevealPanel delay={260}>
          <QuoteSection quote={profile.quote} />
        </RevealPanel>
      </div>
    </div>
  );
}
