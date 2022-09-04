const initialState = {
  title: "",
  note: "",
  isColorPalletVisible: false,
  isLabelPalletVisible: false,
  noteColor: "",
  tags: [],
};

export const createNoteReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_TITLE":
      return {
        ...state,
        title: payload,
      };
    case "SET_NOTE":
      return {
        ...state,
        note: payload,
      };
    case "SET_COLOR":
      return {
        ...state,
        noteColor: payload,
      };
    case "ADD_TAG":
      return {
        ...state,
        tags: [...state.tags, payload],
      };
    case "REMOVE_TAG":
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== payload),
      };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};
