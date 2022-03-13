/* eslint-disable @next/next/no-img-element */
import { StarIcon } from "@heroicons/react/solid";
import React from "react";

export default function Card() {
  return (
    <div className="card w-80 bg-base-100 shadow-xl m-4 cursor-pointer transform hover:scale-105 transition duration-300">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <StarIcon className="w-8 text-yellow-500" />
          <span className="text-lg font-bold">4.6</span>
        </div>
      </div>
    </div>
  );
}
