const initialState = {
  notes: [],
  trash: [],
  archives: [],
};

export const notesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, { ...payload }],
      };
    case "TOGGLE_PIN_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === payload ? { ...note, pinned: !note.pinned } : { ...note }
        ),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== payload._id),
        archives: state.archives.filter((note) => note._id !== payload._id),
        trash: [...state.trash, { ...payload }],
      };
    case "DELETE_FROM_TRASH":
      return {
        ...state,
        trash: state.trash.filter((note) => note._id !== payload),
      };
    case "RESTORE_FROM_TRASH":
      return {
        ...state,
        trash: state.trash.filter((note) => note._id !== payload._id),
        notes: [...state.notes, { ...payload }],
      };
    case "ARCHIVE_NOTE":
      return {
        ...state,
        archives: [...state.archives, { ...payload }],
        notes: state.notes.filter((note) => note._id !== payload._id),
      };
    case "UNARCHIVE_NOTE":
      return {
        ...state,
        archives: state.archives.filter((note) => note._id !== payload._id),
        notes: [...state.notes, { ...payload }],
      };
    default:
      return state;
  }
};
