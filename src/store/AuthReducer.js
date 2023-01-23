export const authReducer = (
    state = {
      user: null,
      error: null,
    },
    action
  ) => {
    console.log(state, action);
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