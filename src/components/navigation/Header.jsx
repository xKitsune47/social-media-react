import React from "react";
import { useLocation } from "react-router-dom";

import { Button } from "../Button";
import { Fox } from "../../assets/Fox";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";

const base =
  "bg-gray-950 shadow-md max-md:grid max-md:grid-cols-[auto_1fr_auto_auto_auto] items-center xl:w-[20rem]";

export const Header = () => {
  const { pathname } = useLocation();
  const curUser = useSelector((state) => state.account.uid);

  return (
    <aside className={`${base} lg:h-screen lg:sticky lg:top-0`}>
      <Button to="/" style="primary" text="SlyFox" className="group">
        <Fox style="primary" />
      </Button>
      <div className="md:hidden" />

      {/* header links for larger screens */}
      <Button to="/" style="primaryLarge" text="test" />
      <Button to="/messages" style="primaryLarge" text="Messages" />
      <Button to={`/profile/${curUser}`} style="primaryLarge" text="Profile" />

      {/* header links for smaller screens */}
      <Button to="/" style="primarySmall">
        {pathname === "/" ? (
          <HomeRoundedIcon sx={{ fontSize: 32 }} />
        ) : (
          <HomeOutlinedIcon sx={{ fontSize: 32 }} />
        )}
      </Button>
      <Button to="/messages" style="primarySmall">
        {pathname === "/messages" ? (
          <EmailIcon sx={{ fontSize: 32 }} />
        ) : (
          <MailOutlineOutlinedIcon sx={{ fontSize: 32 }} />
        )}
      </Button>
      <Button to={`/profile/${curUser}`} style="primarySmall">
        {pathname === "/profile" ? (
          <PersonIcon sx={{ fontSize: 32 }} />
        ) : (
          <PersonOutlinedIcon sx={{ fontSize: 32 }} />
        )}
      </Button>
    </aside>
  );
};
