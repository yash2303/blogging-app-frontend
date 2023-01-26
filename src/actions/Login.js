import { loginApi } from "../clients/AuthClient";

const loginSuccess = (user) => {
  localStorage.setItem("userId", user.userId);
  localStorage.setItem("username", user.username);
  localStorage.setItem("authToken", user.authToken);
  return {
    type: "LOGIN_SUCCESS",
    payload: user,
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await loginApi(username, password);
      dispatch(loginSuccess(response));
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: error.message });
    }
  };
};
