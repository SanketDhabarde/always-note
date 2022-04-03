import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import { useNotes } from "../../context/note-context";
import { createNoteReducer } from "../../reducers";
import Checkbox from "../Checkbox/Checkbox";
import "./CreateNote.css";

const NoteColors = [
  { id: uuid(), color: "" },
  { id: uuid(), color: "red" },
  { id: uuid(), color: "blue" },
  { id: uuid(), color: "green" },
  { id: uuid(), color: "yellow" },
  { id: uuid(), color: "purple" },
];

function CreateNote({ selectedNote, closeModalHandler }) {
  const [state, dispatch] = useReducer(createNoteReducer, {
    title: selectedNote?.title || "",
    note: selectedNote?.note || "",
    isColorPalletVisible: false,
    isLabelPalletVisible: false,
    noteColor: selectedNote?.noteColor || "",
  });
  const { title, note, isColorPalletVisible, isLabelPalletVisible, noteColor } =
    state;
  const { notesDispatch } = useNotes();

  const noteAddHandler = (e) => {
    e.preventDefault();
    const newNote = { _id: uuid(), title, note, pinned: false, noteColor };
    notesDispatch({ type: "ADD_NOTE", payload: newNote });
    dispatch({ type: "RESET_STATE" });
  };

  const editNoteHandler = (e) => {
    e.preventDefault();
    const updatedNoteFields = { _id: selectedNote._id, title, note, noteColor };
    notesDispatch({ type: "UPDATE_NOTE", payload: updatedNoteFields });
    closeModalHandler(false);
  };

  return (
    <div className={`note note-color-${noteColor} p-2 border-m`}>
      <form onSubmit={selectedNote ? editNoteHandler : noteAddHandler}>
        <input
          type="text"
          className="note-input p-1"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            dispatch({ type: "SET_TITLE", payload: e.target.value })
          }
        />
        <textarea
          className="note-input p-1 note-textarea"
          cols="20"
          rows="5"
          placeholder="Take a note..."
          value={note}
          onChange={(e) =>
            dispatch({ type: "SET_NOTE", payload: e.target.value })
          }
        ></textarea>
        <div className="note-options">
          <div className="note-option">
            <div className="note-icons">
              <i
                className="fas fa-palette"
                onClick={() => dispatch({ type: "COLOR_PALLET_VISIBLE" })}
              ></i>
              <i
                className="fas fa-tag"
                onClick={() => dispatch({ type: "LABEL_PALLET_VISIBLE" })}
              ></i>
            </div>
            <button className="btn btn-primary" type="submit">
              {selectedNote ? "Edit" : "Add"}
            </button>
          </div>
          {isColorPalletVisible && (
            <div className="note-color-pallet p-1 border-m">
              {NoteColors.map(({ id, color }) => (
                <div
                  key={id}
                  className={`note-color note-color-${color}`}
                  onClick={() =>
                    dispatch({ type: "SET_COLOR", payload: color })
                  }
                ></div>
              ))}
            </div>
          )}
          {isLabelPalletVisible && (
            <div className="note-labels p-2 border-m">
              <p className="text-m">Label Note</p>
              <Checkbox title="Label 1" />
              <Checkbox title="Label 2" />
              <Checkbox title="Label 3" />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
