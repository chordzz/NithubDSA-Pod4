import React, { useState } from "react";
import { CustomModal } from "../custom-modal/custom-modal";
import { NoteDetails } from "../note-details/note-details";
import { NoteEdit } from "../note-edit/note-edit";
import { Note } from "../note/note1";
import { VIEW_NOTE_DETAILS } from "../app-container/app-container";
import NewNote from "../new-note-btn/new-note";


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
  modalContent: string;
  setModalContent: React.Dispatch<React.SetStateAction<string>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  addToFavorites: (id: string | number) => void;
}

export const NotesList = ({ notes, addToFavorites, setModalContent, setOpenModal, openModal, modalContent }: myProps) => {
  const [openedNote, setOpenedNote] = useState<myProps["note"]>(null);
  const [editMode, setEditMode] = useState(false);
  const [edited, setEdited] = useState(true);

  const handleOpenModal = (note: myProps["note"]) => {
    setModalContent(VIEW_NOTE_DETAILS);
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
              addToFavorites={addToFavorites}
              key={index}
              backgroundColor={colorProps}
              note={note}
              handleOpenModal={() => handleOpenModal(note)}
            />
          );
        })}
        <CustomModal openModal={openModal} closeModal={handleCloseModal}>
          {modalContent === VIEW_NOTE_DETAILS ? (
            <div>
              {" "}
              {editMode ? (
                <NoteEdit
                  note={openedNote}
                  setEditMode={setEditMode}
                  edited={edited}
                  editMode={editMode}
                  setEdited={setEdited}
                />
              ) : (
                <NoteDetails
                  note={openedNote}
                  setEditMode={setEditMode}
                  editMode={editMode}
                />
              )}
            </div>
          ) : (
            <NewNote setOpenModal={setOpenModal} />
          )}
        </CustomModal>
      </div>
    </div>
  );
};
