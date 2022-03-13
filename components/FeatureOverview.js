import { CheckIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import ButtonSquare from "./ButtonSquare";
import SectionTitle from "./SectionTitle";
import TextSecondary from "./TextSecondary";

export default function FeatureOverview() {
  return (
    <div className="container mx-auto px-10 py-28">
      <div className="flex">
        {/* Left */}
        <div className="flex-1">
          <Image
            src="/image/features.png"
            alt="Features Image"
            width={600}
            height={600}
          />
        </div>

        {/* Right */}
        <div className="flex-1 pl-16 py-10">
          <SectionTitle title="Features Overview" />
          <TextSecondary>
            Stories for every day, audio entertainment is here
          </TextSecondary>
          <TextSecondary>
            and library full of binge-worthy audiobooks
          </TextSecondary>
          <div className="flex items-center my-6">
            <div className="bg-primary w-10 rounded-full">
              <CheckIcon className="w-10 text-white p-2" />
            </div>
            <TextSecondary cn="flex-auto pl-4">
              Swtich seamlessly between-devices
            </TextSecondary>
          </div>
          <div className="flex items-center my-6">
            <div className="bg-primary w-10 rounded-full">
              <CheckIcon className="w-10 text-white p-2" />
            </div>
            <TextSecondary cn="flex-auto pl-4">
              Choice of with-only mode to save consumtion
            </TextSecondary>
          </div>
          <div className="flex items-center my-6">
            <div className="bg-primary w-10 rounded-full">
              <CheckIcon className="w-10 text-white p-2" />
            </div>
            <TextSecondary cn="flex-auto pl-4">
              Download audiobooks for offline listening
            </TextSecondary>
          </div>
          <div className="flex items-center my-6 mb-10">
            <div className="bg-primary w-10 rounded-full">
              <CheckIcon className="w-10 text-white p-2" />
            </div>
            <TextSecondary cn="flex-auto pl-4">
              Enjoy access to 100+ million podcast episodes
            </TextSecondary>
          </div>

          <ButtonSquare text="Get Started" arrow />
        </div>
      </div>
    </div>
  );
}
