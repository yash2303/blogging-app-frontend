const registerSuccess = (user) => {
    localStorage.setItem("userId", user.userId);
    localStorage.setItem("username", user.username);
    localStorage.setItem("authToken", user.authToken);
    return {
        type: 'REGISTER_SUCCESS',
        payload: user
    }
  }

export const register = (email, password, username) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:8484/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, username })
        });
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
            throw new Error(data.message);
        }
        dispatch(registerSuccess(data));
    } catch (err) {
        dispatch({ type: 'REGISTER_ERROR', payload: err.message });
    }
}
