import React from "react";
import { CreateNote, Note, Sidebar } from "../../components";
import { useNotes } from "../../context/note-context";
import "./Home.css";

function Home() {
  const { notesState } = useNotes();
  const { notes } = notesState;

  const pinnedNotes = notes.filter((note) => note.pinned);
  const unPinnedNotes = notes.filter((note) => !note.pinned);

  return (
    <div className="home grid-1-5-col">
      <Sidebar />
      <main className="py-1">
        <div className="create-note center-div">
          <CreateNote />
        </div>
        <div className="notes-block p-3">
          {pinnedNotes.length > 0 && (
            <>
              <h4>PINNED</h4>
              <div className="notes py-2">
                {pinnedNotes.map((note) => (
                  <Note key={note._id} singleNote={note} />
                ))}
              </div>
            </>
          )}
          {unPinnedNotes.length > 0 && (
            <>
              {pinnedNotes.length > 0 && <h4>OTHERS</h4>}
              <div className="notes py-2">
                {unPinnedNotes.map((note) => (
                  <Note key={note._id} singleNote={note} />
                ))}
              </div>
            </>
          )}
          {!notes.length && (
            <div className="center-div">
              Notes you add appear here🙂
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
