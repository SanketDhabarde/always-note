import React from "react";
import "./Note.css";

function Note({ title, note, color }) {
  return (
    <div class={`card m-1 p-2 note-color-${color}`}>
      <h3>{title}</h3>
      <p>{note}</p>
    </div>
  );
}

export default Note;
