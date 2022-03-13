import React from "react";
import EnjoyListening from "../components/EnjoyListening";
import FeatureOverview from "../components/FeatureOverview";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PopularBook from "../components/PopularBook";
import ReasonsToUse from "../components/ReasonsToUse";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PopularBook />
      <EnjoyListening />
      <FeatureOverview />
      <ReasonsToUse />
    </div>
  );
}
