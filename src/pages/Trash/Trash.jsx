import React from "react";
import { Note, Sidebar } from "../../components";
import { useNotes } from "../../context";

function Trash() {
  const { notesState } = useNotes();
  const { trash } = notesState;

  return (
    <div className="home grid-1-5-col">
      <Sidebar />
      <main className="p-1">
        {!trash.length && <div className="center-div">No notes in trash🙂</div>}
        <div className="notes py-2">
          {trash.map((note) => (
            <Note key={note._id} singleNote={note} trash/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Trash;
