import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { login } from "../../actions/Login";
import "./Login.css"

const Login = ({ user, error }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    var token = localStorage.getItem("authToken");
    if (token) {
      history.push("/");
    }
  }, [history, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            className="login-input"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="login-button" type="submit">
          Log In
        </button>
        <br />
        <Link to="/register">Create Account</Link>
        <div className="loginError">{error}</div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth?.user,
  error: state.auth?.error,
});

export default connect(mapStateToProps)(Login);
