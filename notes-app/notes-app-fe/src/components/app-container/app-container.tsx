import React, { useState } from "react";
import { NotesList } from "../notes-list/notes-list";
import { SearchUi } from "../search-ui/search-ui";
import { TabsContainer } from "../tabs-container/tabs-container";

export const VIEW_NOTE_DETAILS = "open existing note";
export const OPEN_NEW_NOTE = "open new note";

const AppContainer = () => {
  const notes = [
    {
      title: "Reflection on the Month of June",
      body: "",
      pinned: false,
      lastUpdate: "3mins ago",
      id: 1
    },
    {
      title: "My Favorite Memories from Childhood",
      body: "",
      pinned: false,
      lastUpdate: "30mins ago",
      id:2
    },
    {
      title: "Reflections on My First Year of College",
      body: "",
      pinned: true,
      lastUpdate: "10mins ago",
      id:3
    },
    {
      title: "My Experience with Meditation",
      body: "",
      pinned: false,
      lastUpdate: "1min ago",
      id:4
    },
    {
      title: "Thoughts on the Pandemic",
      body: "",
      pinned: true,
      lastUpdate: "40mins ago",
      id: 5
    },
  ];
  const [active, setActive] = useState("All");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(VIEW_NOTE_DETAILS);

  const handleClick = (text: string) => {
    setActive(text);
    if (text === "Pinned") {
      getPinnedNotes();
    } else if (text === "All") {
      setFilteredNotes(notes);
    }
  };

  const getPinnedNotes = () => {
    setFilteredNotes(notes.filter((note) => note.pinned === true));
  };

  const addToFavorites = (id: string | number) => {
    filteredNotes.map((note, index) => {
      if (id == note.id) {
        note.pinned = !note.pinned;
      }
    });
  };

  return (
    <div className="w-full lg:w-[80%] rounded-lg h-[720px] overflow-y-scroll bg-black/80 my-auto">
      <div className="content p-4 md:p-10 h-full">
        <div className="header flex flex-col md:flex-row justify-between gap-2 md:gap-0 md:items-center mt-8">
          <header className="flex items-end w-3/4 md:w-1/4 justify-between ">
            <h1 className="text-3xl font-mono">My Notes</h1>
            {/* <span>Pod 4</span> */}
          </header>

          <SearchUi />
        </div>

        <TabsContainer
          active={active}
          handleClick={handleClick}
          listLength={filteredNotes.length}
          setModalContent={setModalContent}
          setOpenModal={setOpenModal}
        />

        <NotesList
          openModal={openModal}
          setModalContent={setModalContent}
          setOpenModal={setOpenModal}
          modalContent={modalContent}
          notes={filteredNotes}
          addToFavorites={addToFavorites}
          note={null}
        />
      </div>
    </div>
  );
};

export default AppContainer;
