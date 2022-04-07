import React from "react";
import { Note, Sidebar } from "../../components";
import { useFilters, useNotes } from "../../context";
import { filterByLabels, sortByDate } from "../../utils";
import "./Archive.css";

function Archive() {
  const { notesState } = useNotes();
  const { archives } = notesState;
  const { filterState } = useFilters();
  const { sortBy, filterBy } = filterState;

  let filteredArchives = filterByLabels(archives, filterBy);
  filteredArchives = sortByDate(filteredArchives, sortBy);

  return (
    <div className="home grid-1-5-col">
      <Sidebar />
      <main className="p-1">
        {!archives.length && (
          <div className="center-div">No notes in archive🙂</div>
        )}
        {archives.length > 0 && !filteredArchives.length && (
          <div className="center-div">No notes matching the filter😥</div>
        )}
        <div className="notes py-2">
          {filteredArchives?.map((note) => (
            <Note key={note._id} singleNote={note} archive />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Archive;
