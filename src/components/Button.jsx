import React from "react";
import { Link } from "react-router-dom";

const base =
  "text-2xl font-medium text-gray-200 flex items-center gap-2 py-2 px-4";

const STYLES = {
  base: base,
  primary:
    base +
    " hover:bg-white hover:text-gray-900 transition-colors duration-200 md:text-3xl md:py-4 md:px-6",
  secondary: "",
};

export const Button = ({ children, to, style, text }) => {
  if (to) {
    return (
      <Link to={to} className={STYLES[style]}>
        {children}
        {text}
      </Link>
    );
  }

  return <button>placeholder</button>;
};
