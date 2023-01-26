import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { register } from "../../actions/Register";
import "./Register.css"

function Register({ user, error }) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    var token = localStorage.getItem("authToken");
    if (token) {
      history.push("/");
    }
  }, [history, user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const username = formData.get("username");
    dispatch(register(email, password, username));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <br />
        <button type="submit">Register</button>
        <br />
        <Link to="/login">Login</Link>
        <div className="registrationError">{error}</div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth?.user,
  error: state.auth?.error,
});

export default connect(mapStateToProps)(Register);
