import React from "react";
import ButtonSquare from "./ButtonSquare";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function PopularBook() {
  return (
    <div className="container mx-auto px-10 py-28">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <SectionTitle title="popular book this week" />
        <ButtonSquare text="Explore More" arrow />
      </div>

      {/* Bottom Section */}
      <div className="my-16 flex flex-wrap justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
