import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNotes } from "../../context/note-context";
import Checkbox from "../Checkbox/Checkbox";
import "./CreateNote.css";

const NoteColors = ["", "red", "blue", "green", "yellow", "purple"];

function CreateNote() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [isColorPalletVisible, setIsColorPalletVisible] = useState(false);
  const [isLabelPalletVisible, setIsLabelPalletVisible] = useState(false);
  const [noteColor, setNoteColor] = useState("");
  const { notesState, notesDispatch } = useNotes();

  const noteAddHandler = () => {
    console.log({ _id: uuid(), title, note });
    const newNote = { _id: uuid(), title, note, pinned: false, noteColor };
    notesDispatch({ type: "ADD_NOTE", payload: newNote });
    setTitle("");
    setNote("");
    setNoteColor("");
    setIsColorPalletVisible(false);
    setIsLabelPalletVisible(false);
  };

  return (
    <div className={`note note-color-${noteColor} p-2 border-m`}>
      <input
        type="text"
        className="note-input p-1"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="note-input p-1"
        cols="20"
        rows="5"
        placeholder="Take a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <div className="note-options">
        <div className="note-option">
          <div className="note-icons">
            <i
              className="fas fa-palette"
              onClick={() => setIsColorPalletVisible((prevState) => !prevState)}
            ></i>
            <i
              className="fas fa-tag"
              onClick={() => setIsLabelPalletVisible((prevState) => !prevState)}
            ></i>
          </div>
          <button className="btn btn-primary" onClick={noteAddHandler}>
            Add
          </button>
        </div>
        {isColorPalletVisible && (
          <div className="note-color-pallet p-1 border-m">
            {NoteColors.map((noteColor) => (
              <div
                className={`note-color note-color-${noteColor}`}
                onClick={() => setNoteColor(noteColor)}
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
    </div>
  );
}

export default CreateNote;
