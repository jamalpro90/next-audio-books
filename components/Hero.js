import { DocumentDownloadIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="container mx-auto px-10 py-4 bg-orange-100 h-[100vh] flex">
      {/* Left */}
      <div className="flex-1 text-center p-10 pt-32">
        <h2 className="text-7xl font-medium leading-[7rem]">
          Find a listen for <span className="text-primary">every moment.</span>
        </h2>
        <h4 className="text-3xl text-gray-600 my-16">
          Stories for every day, audio entertainment is here and library full of
          binge-worthy audiobooks
        </h4>
        <div>
          <button className="btn btn-primary btn-lg text-white shadow-square px-10 normal-case text-xl tracking-wider mr-8">
            Get Started
          </button>
          <button className="btn-outline text-black btn-lg px-10 text-xl rounded-lg">
            <span>
              <DocumentDownloadIcon className="w-9 mr-2 inline-block" />
            </span>
            Download for IOS
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="flex-1">
        <div className="w-5/6 mx-auto pt-32">
          <Image
            src="/image/hero.png"
            alt="Hero Image"
            width={600}
            height={600}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
