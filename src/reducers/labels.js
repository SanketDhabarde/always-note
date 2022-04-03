const initialState = {
  labels: [],
};

export const labelsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_LABEL":
      return {
        ...state,
        labels: [...state.labels, { ...payload }],
      };
    case "DELETE_LABEL":
      return {
        ...state,
        labels: state.labels.filter((label) => label._id !== payload),
      };
    default:
      return state;
  }
};
