const initialState = {
  sortBy: "",
};

export const filter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: payload,
      };
    default:
      return state;
  }
};
