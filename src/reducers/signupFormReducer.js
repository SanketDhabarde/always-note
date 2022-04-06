export const signupFormReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: payload,
      };
    case "SET_FIRST_NAME":
      return {
        ...state,
        firstName: payload,
      };
    case "SET_LAST_NAME":
      return {
        ...state,
        lastName: payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: payload,
      };
    case "SET_CONFIRM_PASSWORD":
      return {
        ...state,
        confirmPassword: payload,
      };
    default:
      return state;
  }
};
