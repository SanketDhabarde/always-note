import React from "react";
import CreateNote from "../CreateNote/CreateNote";
import "./EditNote.css";

function EditNote({ singleNote, editHandler }) {
  const closeModalHandler = (event) => {
    if (event.target.classList.contains("backdrop")) {
      editHandler(false);
    }
  };
  return (
    <div className="backdrop" onClick={closeModalHandler}>
      <div className="edit-modal">
        <CreateNote selectedNote={singleNote} closeModalHandler={editHandler} />
      </div>
    </div>
  );
}

export default EditNote;
