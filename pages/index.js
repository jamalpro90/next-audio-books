import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PopularBook from "../components/PopularBook";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PopularBook />
    </div>
  );
}
