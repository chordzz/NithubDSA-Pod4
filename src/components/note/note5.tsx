import React from "react";

interface myProps {
  note: {
    title: string;
    lastUpdate: string;
    body: string;
    pinned: boolean;
  };
  handleOpenModal: () => void;
}

export const Note5 = ({ note, handleOpenModal }: myProps) => {
  return (
    <div className="note my-2 bg-[#A8D672] h-[120px] w-[250px] md:h-[150px] md:w-[300px] rounded-br-3xl border-b-2 border-r-2 border-[#97b871]">
      <div className="h-full p-4 flex flex-col justify-between">
        <div className="h-[70%] flex items-center" onClick={handleOpenModal}>
          <h3 className="text-lg">{note.title}</h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal">
            Last updated:{" "}
            <span className="text-xs font-light">{note.lastUpdate}</span>
          </p>
          <span className="bg-black/20 rounded-full p-2">
            <svg
              fill={`${note.pinned ? "red" : "none"}`}
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
