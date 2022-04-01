import React from "react";
import "./Note.css";

function Note({ title, note, noteColor }) {
  return (
    <div className={`card m-1 p-2 note-color-${noteColor}`}>
      <h3>{title}</h3>
      <p>{note}</p>
    </div>
  );
}

export default Note;
