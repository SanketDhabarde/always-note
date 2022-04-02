const initialState = {
  notes: [],
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
          note._id === payload ? { ...note, pinned: !note.pinned }: {...note}
        ),
      };
    default:
      return state;
  }
};
