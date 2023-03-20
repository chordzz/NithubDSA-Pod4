import React from "react";

interface myProps {
  note: {
    title: string;
    lastUpdate: string;
    body: string;
    pinned: boolean;
  } | null;
}
export const NoteDetails = ({ note }: myProps) => {
  return (
    <div className="bg-black h-[80vh] text-white text-lg">
      {note ? (
        <>
          <div>{note.title}</div>
          <div>{note.lastUpdate}</div>
          <div>{note.body}</div>
        </>
      ) : null}
    </div>
  );
};
