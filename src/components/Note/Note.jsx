import axios from "axios";
import React, { useState } from "react";
import { useNotes } from "../../context";
import Chips from "../Chips/Chips";
import EditNote from "../EditNote/EditNote";
import "./Note.css";

function Note({ singleNote, trash, archive }) {
  const { _id, title, note, noteColor, pinned, tags, createdAt } = singleNote;
  const [isEditEnable, setIsEditEnable] = useState(false);
  const { notesDispatch } = useNotes();
  const encodedToken = localStorage.getItem("token");

  const pinNoteHandler = () => {
    notesDispatch({ type: "TOGGLE_PIN_NOTE", payload: _id });
  };

  const deleteNoteHandler = async () => {
    try {
      const res = await axios.delete(`/api/notes/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (res.status === 200) {
        notesDispatch({ type: "DELETE_NOTE", payload: singleNote });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const archiveNoteHandler = async (type) => {
    if (type === "archive") {
      try {
        const res = await axios.post(
          `/api/notes/archives/${_id}`,
          { note: singleNote },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        if (res.status === 201) {
          notesDispatch({ type: "ARCHIVE_NOTE", payload: singleNote });
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        const res = await axios.post(
          `/api/archives/restore/${_id}`,
          { note: singleNote },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        if (res.status === 200) {
          notesDispatch({ type: "UNARCHIVE_NOTE", payload: singleNote });
        }
      } catch (e) {
        console.error(e);
      }
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
      <div className="note-main py-1">
        <p>{note}</p>
      </div>
      <div className="notes-labels py-1">
        {tags.map((tag, index) => (
          <Chips key={index} text={tag} />
        ))}
      </div>
      <div className="note-footer py-2">
        <small className="note-date">
          Created at:{" "}
          {`${new Date(createdAt).toLocaleDateString()} ${new Date(
            createdAt
          ).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}`}
        </small>
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
              <i className="fas fa-trash-restore"></i>
            </div>
          </div>
        ) : (
          <>
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
