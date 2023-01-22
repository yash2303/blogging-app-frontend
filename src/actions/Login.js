const loginSuccess = (user) => {
  localStorage.setItem("userId", user.userId);
  localStorage.setItem("username", user.username);
  localStorage.setItem("authToken", user.authToken);
  return {
      type: 'LOGIN_SUCCESS',
      payload: user
  }
}

export function login(username, password) {
    return async (dispatch) => {
  
    //   dispatch(blogListLoading());
  
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const response = await fetch("http://localhost:8484/users/login",
        {
          method: 'POST',
          body: JSON.stringify({
            username,
            password
          }),
          headers: myHeaders
        });
        const json = await response.json();
        if (response.ok) {
          dispatch(loginSuccess(json));
        } else {
          // console.error(response.statusText);
          dispatch({ type: 'LOGIN_ERROR', payload: json.message });
        //   dispatch(fetchBlogListFailed(new Error(response.statusText)));
        }
      } catch (error) {
        // console.error(error);
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
      }
    };
  }