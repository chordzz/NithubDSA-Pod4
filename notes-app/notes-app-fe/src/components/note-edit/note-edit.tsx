import React, { useState } from "react";

interface myProps {
  note: {
    title: string;
    lastUpdate: string;
    body: string;
    pinned: boolean;
  } | null;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setEdited: React.Dispatch<React.SetStateAction<boolean>>;
  editMode: boolean;
  edited: boolean;
}

export const NoteEdit = ({
  note,
  setEditMode,
  setEdited,
  editMode,
  edited,
}: myProps) => {
  const [title, setTitle] = useState(note ? note.title : "");
  const [body, setBody] = useState(note ? note.body : "");

  const handleSave = () => {
    setEditMode(false);
    setEdited(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (edited !== true) setEdited(true);
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (edited !== true) setEdited(true);
    setBody(e.target.value);
  };

  return (
    <div className="bg-gray-600/50 h-[80vh] md:h-[90vh] w-[90vw] md:w-[60vw] text-white text-lg rounded-lg">
      {note ? (
        <div className="h-full p-5 flex flex-col justify-between gap-2 md:gap-6">
          <div className="header">
            <input
              className="text-xl md:text-4xl md:mb-8 bg-inherit w-full"
              value={title}
              onChange={handleTitleChange}
            />
            <div className="text-xs md:text-sm md:w-[40%]">
              <p className="flex justify-between">
                Date created: <span>23/11/2015</span>
              </p>
              <p className="flex justify-between">
                Last update: <span>{note.lastUpdate}</span>
              </p>
            </div>
          </div>
          <textarea
            className="grow overflow-y-scroll bg-inherit border border-red-500"
            onChange={handleBodyChange}
            value={body}
          />
          <div className="w-fit self-end">
            <div className="inline-flex rounded-md shadow-sm " role="group">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium border border-white rounded-l-lg bg-red-600"
                disabled={editMode}
              >
                Revert
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium border border-white"
                disabled={editMode}
              >
                Edit
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium border border-white rounded-r-lg bg-green-500"
                disabled={!edited}
                onClick={handleSave}
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
