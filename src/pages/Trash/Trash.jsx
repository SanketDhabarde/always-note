import React from "react";
import { Note, Sidebar } from "../../components";
import { useFilters, useNotes } from "../../context";
import { sortByDate } from "../../utils";

function Trash() {
  const { notesState } = useNotes();
  const { trash } = notesState;
  const { filterState } = useFilters();
  const { sortBy } = filterState;

  const filteredTrash = sortByDate(trash, sortBy);

  return (
    <div className="home grid-1-5-col">
      <Sidebar />
      <main className="p-1">
        {!trash.length && <div className="center-div">No notes in trash🙂</div>}
        <div className="notes py-2">
          {filteredTrash?.map((note) => (
            <Note key={note._id} singleNote={note} trash/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Trash;
