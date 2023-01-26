const initialState = {
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, error: null };
    case "REGISTER_SUCCESS":
      return { ...state, user: action.payload, error: null };
    case "LOGIN_ERROR":
      return { ...state, error: action.payload };
    case "REGISTER_ERROR":
      return { ...state, error: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};
