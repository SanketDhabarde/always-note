const initialState = {
  title: "",
  note: "",
  isColorPalletVisible: false,
  isLabelPalletVisible: false,
  noteColor: "",
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
    case "COLOR_PALLET_VISIBLE":
      return {
        ...state,
        isColorPalletVisible: !state.isColorPalletVisible,
      };
    case "LABEL_PALLET_VISIBLE":
      return {
        ...state,
        isLabelPalletVisible: !state.isLabelPalletVisible,
      };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};
