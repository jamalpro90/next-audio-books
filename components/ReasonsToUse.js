import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ClockIcon,
} from "@heroicons/react/solid";
import { PauseIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import ButtonSquare from "./ButtonSquare";
import SectionTitle from "./SectionTitle";
import TextSecondary from "./TextSecondary";

export default function ReasonsToUse() {
  return (
    <div className="container mx-auto px-10 py-28">
      <div className="flex">
        {/* Left */}
        <div className="flex-1 relative">
          {/* Box */}
          <div className="rounded-md bg-white absolute left-0 top-8 w-[65vw] z-20 flex shadow-right">
            <div className="w-[80%]">
              <SectionTitle title="reasons to use audio books" />
              {/* Sub Text */}
              <div className="my-8">
                <h5 className="text-2xl font-bold text-primary ml-10 mb-4">
                  Convenience
                </h5>
                <div className="flex items-start">
                  <div className="bg-primary w-3 h-3 rounded-full mr-4 mt-1" />
                  <div>
                    <TextSecondary>
                      Listen anytime, anywhere, online or offline. Stream audio
                      directly
                    </TextSecondary>
                    <TextSecondary>
                      in your browser or download and play while disconnected.
                    </TextSecondary>
                  </div>
                </div>
              </div>

              {/* Sub Text */}
              <div className="my-8">
                <h5 className="text-2xl font-bold text-primary ml-10 mb-4">
                  Portable
                </h5>
                <div className="flex items-start">
                  <div className="bg-primary w-3 h-3 rounded-full mr-4 mt-1" />
                  <div>
                    <TextSecondary>
                      Carry your whole library with you wherever you go and
                      access it on
                    </TextSecondary>
                    <TextSecondary>
                      your mobile, tablet, or e-reading device. Ideal for
                      travelling.
                    </TextSecondary>
                  </div>
                </div>
              </div>

              {/* Sub Text */}
              <div className="my-8">
                <h5 className="text-2xl font-bold text-primary ml-10 mb-4">
                  Learning English
                </h5>
                <div className="flex items-start">
                  <div className="bg-primary w-3 h-3 rounded-full mr-4 mt-1" />
                  <div>
                    <TextSecondary>
                      Improve your pronunciation, expand your vocabulary and
                      better
                    </TextSecondary>
                    <TextSecondary>
                      your listening skills in your target langauge.
                    </TextSecondary>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[20%]">
              <ChevronDoubleLeftIcon className="w-10 text-gray-600 my-4 cursor-pointer" />
              <ClockIcon className="w-10 text-gray-600 my-4 cursor-pointer" />
              <div className="shadow-square rounded-full bg-primary w-16 my-6 cursor-pointer">
                <PauseIcon className="w-16 text-white" />
              </div>
              <ClockIcon className="w-10 text-gray-600 my-4 cursor-pointer" />
              <ChevronDoubleRightIcon className="w-10 text-gray-600 my-4 cursor-pointer" />
            </div>
          </div>
          <div className="absolute bottom-0">
            <ButtonSquare text="Get Started" arrow />
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 text-center">
          <div className="ml-[13vw]">
            <Image
              src="/image/reasons.png"
              alt="Image"
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
