import React from "react";
import { CreateNote, Note, Sidebar } from "../../components";
import { useNotes } from "../../context/note-context";
import "./Home.css";

function Home() {
  const { notesState, notesDispatch } = useNotes();
  const { notes } = notesState;
  return (
    <div className="home grid-1-5-col">
      <Sidebar />
      <main className="py-1">
        <div className="create-note center-div">
          <CreateNote />
        </div>
        <div className="notes py-2">
          {notes.map((note) => (
            <Note key={note._id} {...note}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
