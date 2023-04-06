import React from "react";

interface myProps {
  note: {
    title: string;
    lastUpdate: string;
    body: string;
    pinned: boolean;
  } | null;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  editMode: boolean;
}

export const NoteDetails = ({ note, setEditMode, editMode }: myProps) => {
  return (
    <div className="bg-gray-600/50 h-[80vh] md:h-[90vh] w-[90vw] md:w-[60vw] text-white text-lg rounded-lg">
      {note ? (
        <div className="h-full p-5 flex flex-col justify-between gap-2 md:gap-6">
          <div className="header">
            <h1 className="text-xl md:text-4xl md:mb-8">
              {note.title} Details
            </h1>
            <div className="text-xs md:text-sm md:w-[40%]">
              <p className="flex justify-between">
                Date created: <span>23/11/2015</span>
              </p>
              <p className="flex justify-between">
                Last update: <span>{note.lastUpdate}</span>
              </p>
            </div>
          </div>
          <div className="grow overflow-y-scroll">{note.body}</div>
          <div className="w-fit self-end">
            <div className="inline-flex rounded-md shadow-sm " role="group">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium border border-white rounded-l-lg bg-red-600"
              >
                Revert
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium border border-white"
                onClick={() => setEditMode(true)}
              >
                Edit
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium border border-white rounded-r-lg bg-green-500"
                disabled={true}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
