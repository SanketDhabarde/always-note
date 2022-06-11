import axios from "axios";
import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import { useLabels, useNotes } from "../../context";
import { createNoteReducer } from "../../reducers";
import Checkbox from "../Checkbox/Checkbox";
import Chips from "../Chips/Chips";
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
    tags: selectedNote?.tags || [],
  });
  const {
    title,
    note,
    isColorPalletVisible,
    isLabelPalletVisible,
    noteColor,
    tags,
  } = state;
  const { notesDispatch } = useNotes();
  const { labelsState } = useLabels();
  const { labels } = labelsState;
  const encodedToken = localStorage.getItem("token");

  const noteAddHandler = async (e) => {
    e.preventDefault();

    const newNote = {
      _id: uuid(),
      title,
      note,
      pinned: false,
      noteColor,
      tags: [...tags],
      createdAt: new Date().toLocaleString()
    };
    try {
      const res = await axios.post(
        "/api/notes",
        { note: newNote },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (res.status === 201) {
        notesDispatch({ type: "ADD_NOTE", payload: newNote });
        dispatch({ type: "RESET_STATE" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateNote = async (updatedNoteFields) => {
    try {
      const res = await axios.post(
        `api/notes/${updatedNoteFields._id}`,
        { note: updatedNoteFields },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (res.status === 201) {
        notesDispatch({ type: "UPDATE_NOTE", payload: updatedNoteFields });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editNoteHandler = async (e) => {
    e.preventDefault();
    const updatedNoteFields = {
      _id: selectedNote._id,
      title,
      note,
      noteColor,
      createdAt: new Date().toLocaleString()
    };
    updateNote(updatedNoteFields);
    closeModalHandler(false);
  };

  const handleOnChange = async (selectedNote, label) => {
    if (selectedNote) {
      const isTagAlreadyAdded = selectedNote.tags.includes(label);
      if (isTagAlreadyAdded) {
        const newTags = selectedNote.tags.filter((tag) => tag !== label);
        const updatedNoteFields = {
          _id: selectedNote._id,
          tags: [...newTags],
        };
        updateNote(updatedNoteFields);
      } else {
        const updatedNoteFields = {
          _id: selectedNote._id,
          tags: [...selectedNote.tags, label],
        };
        updateNote(updatedNoteFields);
      }
    } else {
      const isTagAlreadyAdded = tags.includes(label);
      if (isTagAlreadyAdded) {
        dispatch({ type: "REMOVE_TAG", payload: label });
      } else {
        dispatch({ type: "ADD_TAG", payload: label });
      }
    }
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
        <div className="selected-labels">
          {selectedNote
            ? selectedNote.tags.map((tag, index) => (
                <Chips key={index} text={tag} />
              ))
            : tags.map((tag, index) => <Chips key={index} text={tag} />)}
        </div>
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
              {selectedNote ? "Update" : "Add"}
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
              <p className="text-s">Label Note</p>
              {labels.map(({ _id, label }) => (
                <Checkbox
                  key={_id}
                  title={label}
                  checked={
                    selectedNote
                      ? selectedNote.tags.includes(label)
                      : tags.includes(label)
                  }
                  changeHandler={() => handleOnChange(selectedNote, label)}
                />
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
