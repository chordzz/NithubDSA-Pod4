import React, { useState } from "react";

export const SearchUi = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="hidden md:block w-1/2">
      <div className="flex relative">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center border border-white rounded-l-lg"
          type="button"
          onClick={handleClick}
        >
          Search Filter
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          id="dropdown"
          className={`${
            open ? "" : "hidden"
          } z-10 w-40 absolute top-12 bg-gray-900/90 rounded-lg shadow`}
        >
          <ul className="py-2 text-sm" aria-labelledby="dropdown-button">
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-800/70"
                onClick={handleClick}
              >
                Search By Title
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-800/70"
                onClick={handleClick}
              >
                Search Body
              </button>
            </li>
          </ul>
        </div>

        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block bg-inherit p-2.5 w-full z-20 text-sm rounded-r-lg border-l-2 border border-white"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium rounded-r-lg border"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};
