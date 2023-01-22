import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../../actions/CreateBlog";
import "./CreateBlog.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = {
      title,
      content,
    };
    dispatch(createBlog(blogData));
    setTitle("");
    setContent("");
  };

  return (
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
      </form>
    </div>
  );
};

export default CreateBlog;
