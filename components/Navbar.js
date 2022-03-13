import React from "react";
import { BeakerIcon, BookOpenIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    // <div className="border-2 border-red-500 container mx-auto px-16 py-">
    //   <h1>Navbar</h1>
    // </div>
    <div className="navbar bg-base-100 container mx-auto px-10 py-4">
      <div className="navbar-start">
        <div className="bg-primary rounded-full">
          <BookOpenIcon className="w-10 p-2 text-white" />
        </div>
        <a className="btn btn-ghost normal-case text-2xl">auca</a>
        <div className="dropdown"></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a className="text-xl">Home</a>
          </li>
          <li>
            <a className="text-xl">Features</a>
          </li>
          <li>
            <a className="text-xl">About Us</a>
          </li>
          <li>
            <a className="text-xl">Support</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-success px-8 shadow-square normal-case text-base">
          Sign In
        </a>
      </div>
    </div>
  );
}
