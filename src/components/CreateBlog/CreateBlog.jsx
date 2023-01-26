import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBlog } from "../../actions/CreateBlog";
import Navigation from "../Navigation";
import "./CreateBlog.css";

const CreateBlog = ({ isLoading, createdBlog, error }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = {
      title,
      content,
    };
    dispatch(createBlog(blogData, history));
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <Navigation />
      <div className="create-blog-container">
        <h2>Create a Blog</h2>
        <form className="create-blog-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              className="form-control"
              id="content"
              rows="25"
              columns="100"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
          <div>{error}</div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.createBlog?.isLoading,
  createdBlog: state.createBlog?.createdBlog,
  error: state.createBlog?.error,
});

export default connect(mapStateToProps)(CreateBlog);
