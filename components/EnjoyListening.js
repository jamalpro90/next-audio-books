import React from "react";
import ButtonSquare from "./ButtonSquare";
import SectionTitle from "./SectionTitle";

export default function EnjoyListening() {
  return (
    <div className="container mx-auto px-10 py-28">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div className="w-[40vw] flex-1">
          <SectionTitle title="enjoy listening audiobooks anywhere" />
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-gray-600 text-xl w-[25vw] mx-auto text-center mb-8">
            Take audiobooks anywhere on your smartphone, tablet, or laptop
          </p>
          <ButtonSquare text="Get Started" arrow />
        </div>
      </div>
    </div>
  );
}
