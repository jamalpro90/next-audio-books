import React, { useEffect, useState, useRef } from "react";
import { BeakerIcon, BookOpenIcon } from "@heroicons/react/solid";
import ButtonSquare from "./ButtonSquare";

export default function Navbar() {
  // const [scrollY, setScrollY] = useState();
  const navbar = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      if (window.scrollY > 670) {
        navbar.current.classList.add("shadow-md");
      } else {
        navbar.current.classList.remove("shadow-md");
      }
    });
  }, []);

  return (
    <div
      ref={navbar}
      className="navbar container mx-auto px-10 py-4 bg-orange-100 fixed z-50 transition duration-200"
    >
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
        <ButtonSquare text="Sign In" />
      </div>
    </div>
  );
}
