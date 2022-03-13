import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function ButtonSquare({ text, arrow }) {
  return (
    <button>
      <a className="btn btn-success px-8 shadow-square normal-case text-base">
        {text}
        {arrow && <ArrowNarrowRightIcon className="w-6 ml-4" />}
      </a>
    </button>
  );
}
