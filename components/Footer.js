import { HeartIcon } from "@heroicons/react/solid";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>

      {/* Make With Love */}
      <div className="bg-gray-800 py-4 text-center">
        <p className="text-white text-sm">
          Make With
          <HeartIcon className="w-5 text-red-500 inline-block mx-1" />
          By Jamal.
        </p>
      </div>
    </div>
  );
}
