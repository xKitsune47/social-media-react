import React from "react";
import { useNavigate } from "react-router-dom";
import { ClickableUsername } from "./ClickableUsername";

export const Post = ({ text, username, date, id, image, creator, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`);
  };
  if (to) {
    return (
      <div
        key={id}
        onClick={handleClick}
        className="bg-gray-800 p-4 rounded-xl w-full shadow-md hover:cursor-pointer">
        <p className="text-xl">{username} </p>
        <div className="py-4">
          <p>{text}</p>
          {image && (
            <img
              src={image}
              alt="Post"
              className="w-full h-auto mt-2 rounded-lg"
            />
          )}
        </div>

        <p className="text-gray-500">
          {new Date(date).toLocaleDateString("pl-PL")}{" "}
          {new Date(date).toLocaleTimeString("pl-PL")}
        </p>
      </div>
    );
  }

  return (
    <div key={id} className="bg-gray-800 p-4 rounded-xl w-full shadow-md">
      <ClickableUsername username={username} creator={creator} />
      <div className="py-4">
        <p>{text}</p>
        {image && (
          <img
            src={image}
            alt="Post"
            className="w-full h-auto mt-2 rounded-lg"
          />
        )}
      </div>

      <p className="text-gray-500">
        {new Date(date).toLocaleDateString("pl-PL")}{" "}
        {new Date(date).toLocaleTimeString("pl-PL")}
      </p>
    </div>
  );
};
