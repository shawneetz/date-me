// src/pages/Profile.jsx
// The CityBackdrop lives fixed behind everything.
// Its sky shifts from midnight → dawn as the visitor scrolls from top → bottom.
// SunriseFooter is the last section — the payoff of the whole journey.

import "./Profile.css";
import { useParams } from "react-router-dom";
import { shawnProfile } from "../data/shawn";

import CityBackdrop from "../components/CityBackdrop";
import HeroSection from "../sections/HeroSection";
import QualitiesSection from "../sections/QualitiesSection";
import PersonalTakesSection from "../sections/PersonalTakesSection";
import HobbiesSection from "../sections/HobbiesSection";
import LookingForSection from "../sections/LookingForSection";
import WhatYoullGetSection from "../sections/WhatYoullGetSection";
import QuoteSection from "../sections/QuoteSection";
import SunriseFooter from "../sections/SunriseFooter";
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
    <div className="profile-page">
      {/* Fixed pixel cityscape — behind everything */}
      <CityBackdrop />

      <SectionDots />

      <div className="app">
        <RevealPanel delay={0}>
          <HeroSection profile={profile} />
        </RevealPanel>

        <RevealPanel delay={60}>
          <QualitiesSection
            items={profile.qualities}
            qualityConfig={profile.qualityConfig}
          />
        </RevealPanel>

        <RevealPanel delay={100}>
          <PersonalTakesSection categories={profile.personalTakesCategories} />
        </RevealPanel>

        <RevealPanel delay={140}>
          <HobbiesSection items={profile.hobbies} />
        </RevealPanel>

        <RevealPanel delay={180}>
          <LookingForSection
            stations={profile.lookingForStations}
            lookingFor={profile.lookingFor}
          />
        </RevealPanel>

        <RevealPanel delay={220}>
          <WhatYoullGetSection items={profile.whatYoullGet} />
        </RevealPanel>

        <RevealPanel delay={260}>
          <QuoteSection
            quote={profile.quote}
            wallFragments={profile.wallFragments}
          />
        </RevealPanel>

        {/* Dawn breaks — no RevealPanel; fades in via its own useInView */}
        <SunriseFooter />
      </div>
    </div>
  );
}
