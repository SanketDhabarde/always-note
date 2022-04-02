import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers";

const NotesContext = createContext();

const useNotes = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
  const [notesState, notesDispatch] = useReducer(notesReducer, {
    notes: [],
    trash: [],
    archives: [],
  });

  return (
    <NotesContext.Provider value={{ notesState, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, useNotes };
