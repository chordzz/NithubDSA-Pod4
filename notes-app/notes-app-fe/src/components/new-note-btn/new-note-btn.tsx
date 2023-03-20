import React from "react";

export const NewNoteBtn = () => {
  return (
    <button
      type="button"
      className="font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex border items-center border-white"
    >
      <svg
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-4 md:w-6 mr-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        ></path>
      </svg>
      New
    </button>
  );
};
