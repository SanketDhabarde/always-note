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
    default:
      return state;
  }
};
