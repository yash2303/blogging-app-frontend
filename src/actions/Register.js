import { registerApi } from "../clients/AuthClient";

const registerSuccess = (user) => {
  localStorage.setItem("userId", user.userId);
  localStorage.setItem("username", user.username);
  localStorage.setItem("authToken", user.authToken);
  return {
    type: "REGISTER_SUCCESS",
    payload: user,
  };
};

export const register = (email, password, username) => {
  return async (dispatch) => {
    try {
      const response = await registerApi(email, password, username);
      dispatch(registerSuccess(response));
    } catch (error) {
      dispatch({ type: "REGISTER_ERROR", payload: error.message });
    }
  };
};
