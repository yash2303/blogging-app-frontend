import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { register } from "../../actions/Register";

function Register({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    var token = localStorage.getItem("authToken");
    if (token) {
      history.push("/blogs");
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
    </form>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth?.user,
});

export default connect(mapStateToProps)(Register);
