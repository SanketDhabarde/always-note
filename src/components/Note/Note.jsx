import React, { useState } from "react";
import { useNotes } from "../../context/note-context";
import EditNote from "../EditNote/EditNote";
import "./Note.css";

function Note({ singleNote, trash, archive }) {
  const { _id, title, note, noteColor, pinned } = singleNote;
  const [isEditEnable, setIsEditEnable] = useState(false);
  const { notesDispatch } = useNotes();

  const pinNoteHandler = () => {
    notesDispatch({ type: "TOGGLE_PIN_NOTE", payload: _id });
  };

  const deleteNoteHandler = () => {
    notesDispatch({ type: "DELETE_NOTE", payload: singleNote });
  };

  const archiveNoteHandler = (type) => {
    if (type === "archive") {
      notesDispatch({ type: "ARCHIVE_NOTE", payload: singleNote });
    } else {
      notesDispatch({ type: "UNARCHIVE_NOTE", payload: singleNote });
    }
  };

  return (
    <div className={`card m-1 p-2 note-color-${noteColor}`}>
      <div className="note-header">
        <h3 className="note-title">{title}</h3>
        {!trash && !archive && (
          <div
            className="note-icon center-div"
            title={pinned ? "Unpin note" : "Pin note"}
            onClick={pinNoteHandler}
          >
            <i
              className={`fas fa-thumbtack ${
                pinned ? "pin-note-icon" : "unpin-note-icon"
              }`}
            ></i>
          </div>
        )}
      </div>
      <div className="note-main">
        <p>{note}</p>
      </div>
      <div className="note-footer py-2">
        {trash ? (
          <div className="note-footer-options">
            <div
              className="note-icon center-div"
              title="Delete forever"
              onClick={() =>
                notesDispatch({ type: "DELETE_FROM_TRASH", payload: _id })
              }
            >
              <i className="fas fa-trash-alt"></i>
            </div>
            <div
              className="note-icon center-div"
              title="Restore"
              onClick={() =>
                notesDispatch({
                  type: "RESTORE_FROM_TRASH",
                  payload: singleNote,
                })
              }
            >
              <i class="fas fa-trash-restore"></i>
            </div>
          </div>
        ) : (
          <>
            <small className="note-date">Created at</small>
            <div className="note-footer-options">
              <div
                className="note-icon center-div"
                title="Edit note"
                onClick={() => setIsEditEnable((prevState) => !prevState)}
              >
                <i className="fas fa-edit"></i>
              </div>
              <div
                className="note-icon center-div"
                title={archive ? "Unarchive" : "Archive"}
                onClick={
                  archive
                    ? () => archiveNoteHandler("unarchive")
                    : () => archiveNoteHandler("archive")
                }
              >
                <i className="fas fa-archive"></i>
              </div>

              <div
                className="note-icon center-div"
                title="Delete note"
                onClick={deleteNoteHandler}
              >
                <i className="fas fa-trash-alt"></i>
              </div>
            </div>
          </>
        )}
      </div>
      {isEditEnable && (
        <EditNote singleNote={singleNote} editHandler={setIsEditEnable} />
      )}
    </div>
  );
}

export default Note;
