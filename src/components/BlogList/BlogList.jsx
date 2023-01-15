import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {loadBlogList} from '../../store/BlogList'
import './BlogList.css'  


const BlogList = ( { blogs, isLoading, error }) => {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(loadBlogList());
        },
        []
    );
  
    if (isLoading) {
        return <div>Loading Blogs...</div>;
    } else if (error) {
        return <div>Failed to load blogs...</div>;
    } else {
        return (
            <div className="blog-list-container">
            {blogs.map((blog) => (
                <div key={blog.id} className="blog-list-item">
                    <h2 className="blog-title">{blog.title}</h2>
                    <p className="blog-content">{blog.content}</p>
                    <div className="blog-details">
                        <span>Author: {blog.author}</span>
                        <span>Date: {blog.date}</span>
                    </div>
                </div>
            ))}
            </div>
        );
    }
};

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.any
};

const mapStateToProps = (state) => ({
  blogs: state.blogList?.blogs,
  isLoading: state.blogList?.isLoading,
  error: state.blogList?.error
});

export default connect(mapStateToProps)(BlogList);
