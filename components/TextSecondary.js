import React from "react";

export default function TextSecondary({ children, cn }) {
  return (
    <p className={`text-gray-600 text-xl mx-auto ${cn && cn}`}>{children}</p>
  );
}
