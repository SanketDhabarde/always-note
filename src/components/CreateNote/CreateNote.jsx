import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./CreateNote.css";

const NoteColors = ["", "red", "blue", "green", "yellow", "purple"];

function CreateNote() {
  const [isColorPalletVisible, setIsColorPalletVisible] = useState(false);
  const [isLabelPalletVisible, setIsLabelPalletVisible] = useState(false);
  const [noteColor, setNoteColor] = useState("");

  return (
    <div className={`note note-color-${noteColor} p-2 border-m`}>
      <input type="text" className="note-input p-1" placeholder="Title" />
      <textarea
        className="note-input p-1"
        cols="20"
        rows="5"
        placeholder="Take a note..."
      ></textarea>
      <div className="note-options">
        <div className="note-option">
          <div className="note-icons">
            <i
              className="fas fa-palette"
              onClick={() => setIsColorPalletVisible((prevState) => !prevState)}
            ></i>
            <i class="fas fa-tag"
            onClick={() => setIsLabelPalletVisible((prevState) => !prevState)}></i>
          </div>
          <button className="btn btn-primary">Add</button>
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
        {isLabelPalletVisible && (<div className="note-labels p-2 border-m">
          <p className="text-m">Label Note</p>
          <Checkbox title="Label 1" />
          <Checkbox title="Label 2" />
          <Checkbox title="Label 3" />
        </div>)}
      </div>
    </div>
  );
}

export default CreateNote;
