import React from "react";
import { useNotes } from "../../context/note-context";
import "./Note.css";

function Note({ _id, title, note, noteColor, pinned }) {
  const { notesDispatch } = useNotes();

  const pinNoteHandler = () => {
    notesDispatch({ type: "TOGGLE_PIN_NOTE", payload: _id });
  };

  return (
    <div className={`card m-1 p-2 note-color-${noteColor}`}>
      <div className="note-header">
        <h3>{title}</h3>
        {pinned ? (
          <div className="note-icon center-div" onClick={pinNoteHandler}>
            <i className="fas fa-thumbtack pin-note-icon"></i>
          </div>
        ) : (
          <div className="note-icon center-div" onClick={pinNoteHandler}>
            <i className="fas fa-thumbtack unpin-note-icon"></i>
          </div>
        )}
      </div>
      <div className="note-main">
        <p>{note}</p>
      </div>
      <div className="note-footer"></div>
    </div>
  );
}

export default Note;
