import React from "react";
import { Button } from "../Button";

import { Fox } from "../../assets/Fox";

const base =
  "bg-gray-950 shadow-md max-md:grid max-md:grid-cols-[auto_1fr_auto_auto_auto] items-center xl:w-[20rem]";

export const Header = () => {
  return (
    <div className={`${base}`}>
      <Button to="/" style="primary" text="SlyFox" className="group">
        <Fox style="primary" />
      </Button>
      <divider className="md:hidden" />
      <Button to="/" style="primary" text="test" />
      <Button to="/" style="primary" text="Posts" />
      <Button to="/" style="primary" text="Profile" />
    </div>
  );
};
