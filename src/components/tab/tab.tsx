import React from "react";

interface MyTab {
  text: string;
  length: number;
  active: string;
  handleClick: (param: string) => void;
}

export const Tab = ({ text, length, active, handleClick }: MyTab) => {
  return (
    <div
      className={`${
        active === text
          ? "border border-white"
          : "border-2 border-gray-700 text-gray-500"
      } font-medium rounded-lg text-sm px-5 py-2.5 flex gap-2 items-center cursor-pointer`}
      onClick={() => handleClick(text)}
    >
      <span>{text}</span>
      <span
        className={`bg-gray-100/20 text-xs rounded-full px-2 py-1 ${
          length > 0 ? "" : "hidden"
        }`}
      >
        {length}
      </span>
    </div>
  );
};
