import React, { useState } from "react";

interface myProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewNote = ({ setOpenModal }: myProps) => {
  const initailState = { title: "", content: "" };

  const [noteInfo, setNoteInfo] = useState(initailState);

  const handleNoteSave = () => {
    setOpenModal(false);
  };

  return (
    <div className="bg-gray-600/50 h-[80vh] md:h-[90vh] w-[90vw] md:w-[60vw] p-5 flex flex-col justify-between gap-2 md:gap-6">
      <div className="header">
        <div className="">
          <label htmlFor="" className="text-white text-xl">
            Title
          </label>
          <input
            className="text-xl md:text-4xl w-full bg-inherit text-white border-blue-500 border outline-none p-2"
            value={noteInfo.title}
            onChange={(e) =>
              setNoteInfo({ ...noteInfo, title: e.target.value })
            }
          />
        </div>
      </div>
      <textarea
        rows={10}
        className="grow overflow-y-scroll text-white bg-inherit border border-red-500"
        onChange={(e) => setNoteInfo({ ...noteInfo, content: e.target.value })}
        value={noteInfo.content}
      />
      <div className="w-fit self-end">
        <div className="inline-flex rounded-md shadow-sm " role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium border border-white rounded-r-lg bg-green-500"
            disabled={noteInfo.content === ""}
            onClick={handleNoteSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
