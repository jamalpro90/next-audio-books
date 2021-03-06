import React from "react";
import EnjoyListening from "../components/EnjoyListening";
import FeatureOverview from "../components/FeatureOverview";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
}

// Latihan desain dari dribble punya Hakim Haiman
// https://dribbble.com/shots/17703699-Auca-Audio-Book-Landing-Page/attachments/12863935?mode=media
