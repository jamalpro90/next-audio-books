import React from "react";
import ButtonSquare from "./ButtonSquare";
import SectionTitle from "./SectionTitle";
import TextSecondary from "./TextSecondary";

export default function EnjoyListening() {
  return (
    <div className="container mx-auto px-10 py-28">
      <div className="flex justify-between items-center">
        <div className="w-[40vw] flex-1">
          <SectionTitle title="enjoy listening audiobooks anywhere" />
        </div>
        <div className="flex flex-col flex-1">
          <TextSecondary cn="w-[25vw] text-center mb-8">
            Take audiobooks anywhere on your smartphone, tablet, or laptop
          </TextSecondary>
          <ButtonSquare text="Get Started" arrow />
        </div>
      </div>
    </div>
  );
}
