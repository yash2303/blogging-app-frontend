import React, { useCallback, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { fetchBlog } from "../../actions/FetchBlog";
import "./BlogDetail.css";
import { deleteBlog } from "../../actions/DeleteBlog";
import Navigation from "../Navigation";

const BlogDetail = ({ data, isLoading, error }) => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = useCallback(() => {
    dispatch(deleteBlog(data.id, history));
  }, [dispatch, data.id, history]);

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  if (isLoading) {
    return <div>Loading Blog...</div>;
  } else if (error) {
    return <div>Failed to load blog...</div>;
  } else if (!data) {
    return <div>Blog not found</div>;
  } else {
    const date = new Date(data.createdAt);
    const formattedDate =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();
    return (
      <div>
        <Navigation />
        <div className="blog-detail-container">
          <button onClick={handleDelete}>Delete Blog</button>
          <h1 className="blog-title">{data.title}</h1>
          <p className="blog-content">{data.content}</p>
          <div className="blog-details">
            <span>Author: {data.author.username}</span>
            <span>Created at: {formattedDate}</span>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.blogDetail.data,
    isLoading: state.blogDetail.isLoading,
    error: state.blogDetail.error,
  };
};

export default connect(mapStateToProps)(BlogDetail);
