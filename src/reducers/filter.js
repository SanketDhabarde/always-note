const initialState = {
  sortBy: "",
  filterBy: [],
};

export const filter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: payload,
      };
    case "SET_FILTER_BY":
      return {
        ...state,
        filterBy: state.filterBy.some((_label) => _label === payload)
          ? state.filterBy.filter((_label) => _label !== payload)
          : [...state.filterBy, payload],
      };
    default:
      return state;
  }
};
