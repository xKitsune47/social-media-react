import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setPath } from "../redux/siteSlice";

const base =
  "text-2xl font-medium text-gray-200 flex items-center gap-2 py-2 px-4";

const STYLES = {
  base: base,
  primary:
    base +
    " hover:bg-white hover:text-gray-900 transition-colors duration-200 md:text-3xl md:py-4 md:px-6",
  primaryLarge:
    base +
    " hover:bg-white hover:text-gray-900 transition-colors duration-200 md:text-3xl md:py-4 md:px-6 max-md:hidden",
  primarySmall:
    base +
    " hover:bg-white hover:text-gray-900 transition-colors duration-200 md:hidden ",
  secondary: "",
};

export const Button = ({ children, to, style, text, onClick, comparator }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setPath(to));
    navigate(to);
  };

  if (to) {
    return (
      <Link to={to} className={STYLES[style]} onClick={handleClick}>
        {children}
        {text}
      </Link>
    );
  }

  return (
    <span
      name={text.toLowerCase()}
      onClick={onClick}
      className={`hover:cursor-pointer pb-2 border-b-2 ${
        comparator && "border-transparent"
      }`}>
      {children}
      {text}
    </span>
  );
};
