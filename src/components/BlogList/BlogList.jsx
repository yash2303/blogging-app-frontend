import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { loadBlogList } from "../../actions/BlogList";
import "./BlogList.css";
import LogoutButton from "../Logout/LogoutButton";

const BlogList = ({ blogs, isLoading, error, user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      history.push("/login");
    }
  }, [history, user]);

  useEffect(() => {
    dispatch(loadBlogList());
  }, []);

  const handleCreateBlog = () => {
    history.push("/create-blog");
  };

  if (isLoading) {
    return <div>Loading Blogs...</div>;
  } else if (error) {
    return <div>Failed to load blogs...</div>;
  } else {
    return (
      <div className="blog-list-container">
        <LogoutButton />
        <button className="create-blog-button" onClick={handleCreateBlog}>
          Create Blog
        </button>
        {blogs.map((blog) => {
          const date = new Date(blog.createdAt);
          const formattedDate =
            date.toLocaleDateString() + " " + date.toLocaleTimeString();
          return (
            <div key={blog.id} className="blog-list-item">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-content">{blog.content}</p>
              <div className="blog-details">
                <span>Author: {blog.author.username}</span>
                <span>Created at: {formattedDate}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.any,
};

const mapStateToProps = (state) => ({
  blogs: state.blogList?.blogs,
  isLoading: state.blogList?.isLoading,
  error: state.blogList?.error,
  user: state.auth?.user,
});

export default connect(mapStateToProps)(BlogList);
