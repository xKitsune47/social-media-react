import React from "react";
import { useNavigate } from "react-router-dom";

export const ClickableUsername = ({ username, creator }) => {
  const navigate = useNavigate();

  if (creator) {
    return (
      <p
        className="text-xl hover:cursor-pointer"
        onClick={() => {
          navigate(`/profile/${creator}`);
        }}>
        {username}{" "}
      </p>
    );
  }

  return <p className="text-xl">{username} </p>;
};
