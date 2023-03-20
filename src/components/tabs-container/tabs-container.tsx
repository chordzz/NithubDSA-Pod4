import React from "react";
import { NewNoteBtn } from "../new-note-btn/new-note-btn";
import { Tab } from "../tab/tab";

interface myProps {
  active: string;
  listLength: number;
  handleClick: (param: string) => void;
}
export const TabsContainer = ({ active, handleClick, listLength }: myProps) => {
  const tabs = [{ text: "All" }, { text: "Pinned" }];

  // const [active, setActive] = useState("All");

  // const handleClick = (text: string) => {
  //   setActive(text);
  // };

  return (
    <div className="nav-tabs flex flex-row-reverse md:flex-row gap-4 justify-between my-8 md:my-4 overflow-x-scroll">
      <div className="flex items-center gap-4">
        {tabs.map((tab) => (
          <Tab
            key={tab.text}
            text={tab.text}
            length={active === tab.text ? listLength : 0}
            active={active}
            handleClick={handleClick}
          />
        ))}
      </div>

      <NewNoteBtn />
    </div>
  );
};
