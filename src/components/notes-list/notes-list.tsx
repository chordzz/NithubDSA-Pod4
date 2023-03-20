import React, { useState } from "react";
import { CustomModal } from "../custom-modal/custom-modal";
import { NoteDetails } from "../note-details/note-details";
import { Note1 } from "../note/note1";
import { Note2 } from "../note/note2";
import { Note3 } from "../note/note3";
import { Note4 } from "../note/note4";
import { Note5 } from "../note/note5";

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

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="notes-wrapper h-[70%] xl:h-[75%] overflow-y-scroll">
      <div className="notes-content text-black font-medium flex flex-col items-center md:flex-row flex-wrap justify-between">
        {notes.map((note) => {
          const num = getRandomInt(1, 5);

          switch (num) {
            case 1:
              return (
                <Note1
                  note={note}
                  handleOpenModal={() => handleOpenModal(note)}
                />
              );
            case 2:
              return (
                <Note2
                  note={note}
                  handleOpenModal={() => handleOpenModal(note)}
                />
              );
            case 3:
              return (
                <Note3
                  note={note}
                  handleOpenModal={() => handleOpenModal(note)}
                />
              );
            case 4:
              return (
                <Note4
                  note={note}
                  handleOpenModal={() => handleOpenModal(note)}
                />
              );
            case 5:
              return (
                <Note5
                  note={note}
                  handleOpenModal={() => handleOpenModal(note)}
                />
              );
            default:
              return null;
          }
        })}
        <CustomModal openModal={openModal} closeModal={handleCloseModal}>
          <NoteDetails note={openedNote} />
        </CustomModal>
      </div>
    </div>
  );
};
