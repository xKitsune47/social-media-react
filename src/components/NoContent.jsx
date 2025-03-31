import React from "react";

export const NoContent = ({ text }) => {
  return (
    <div className="text-gray-500 flex items-center justify-center text-xl italic">
      {text || "*Cricket sounds...*"}
    </div>
  );
};
