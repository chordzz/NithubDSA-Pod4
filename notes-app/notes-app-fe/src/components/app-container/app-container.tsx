import React, { useState } from "react";
import { NotesList } from "../notes-list/notes-list";
import { SearchUi } from "../search-ui/search-ui";
import { TabsContainer } from "../tabs-container/tabs-container";

const AppContainer = () => {
  const notes = [
    {
      title: "Reflection on the Month of June",
      body: "",
      pinned: false,
      lastUpdate: "3mins ago",
    },
    {
      title: "My Favorite Memories from Childhood",
      body: "",
      pinned: false,
      lastUpdate: "30mins ago",
    },
    {
      title: "Reflections on My First Year of College",
      body: "",
      pinned: true,
      lastUpdate: "10mins ago",
    },
    {
      title: "My Experience with Meditation",
      body: "",
      pinned: false,
      lastUpdate: "1min ago",
    },
    {
      title: "Thoughts on the Pandemic",
      body: "",
      pinned: true,
      lastUpdate: "40mins ago",
    },
  ];
  const [active, setActive] = useState("All");
  const [filteredNotes, setFilteredNotes] = useState(notes);

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

  return (
    <div className="w-full lg:w-[80%] rounded-lg h-[600px] bg-black/80 my-auto">
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
        />

        <NotesList notes={filteredNotes} note={null} />
      </div>
    </div>
  );
};

export default AppContainer;
