import React, { useState } from "react";
import { CustomModal } from "../custom-modal/custom-modal";
import { NoteDetails } from "../note-details/note-details";
import { Note } from "../note/note";

interface myProps {
  notes: {
    title: string;
    body: string;
    pinned: boolean;
    lastUpdate: string;
  }[];
  note: {
    title: string;
    lastUpdate: string;
    body: string;
    pinned: boolean;
  } | null;
}

export const NotesList = ({ notes }: myProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [openedNote, setOpenedNote] = useState<myProps["note"]>(null);

  const handleOpenModal = (note: myProps["note"]) => {
    setOpenModal(true);
    setOpenedNote(note);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // const getRandomInt = (min: number, max: number) => {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };
  // const colorArr = [
  //   { bgColor: "#ad130e", borderColor: "#ca846c" },
  //   { bgColor: "#F7D44C", borderColor: "#d7c372" },
  //   { bgColor: "#F6ECC9", borderColor: "#cac7bd" },
  //   { bgColor: "#98B7DB", borderColor: "#62758b" },
  //   { bgColor: "#A8D672", borderColor: "#97b871" },
  // ];
  const colorArr = ["#fa7373", "#F7D44C", "#F6ECC9", "#98B7DB", "#A8D672"];

  const getRandomColor = (colorArr: Array<string>) => {
    return colorArr[Math.floor(Math.random() * colorArr.length)];
  };

  return (
    <div className="notes-wrapper h-[70%] xl:h-[75%] overflow-y-scroll">
      <div className="notes-content text-black font-medium flex flex-col items-center md:flex-row flex-wrap justify-between">
        {notes.map((note, index) => {
          const colorProps = getRandomColor(colorArr);

          return (
            <Note
              key={index}
              backgroundColor={colorProps}
              note={note}
              handleOpenModal={() => handleOpenModal(note)}
            />
          );
        })}
        <CustomModal openModal={openModal} closeModal={handleCloseModal}>
          <NoteDetails note={openedNote} />
        </CustomModal>
      </div>
    </div>
  );
};
