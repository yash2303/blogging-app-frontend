import { blogListApi } from "../clients/BlogsClient";

const setBlogs = (blogs) => ({
  type: "SET_BLOGS",
  blogs,
});

const fetchBlogListFailed = (error) => ({
  type: "SET_BLOGS_ERROR",
  error,
});

const blogListLoading = () => ({
  type: "SET_BLOGS_LOADING",
});

export const loadBlogList = () => {
  return async (dispatch, getState) => {
    const { blogList } = getState();
    if (blogList.isLoading) return;
    dispatch(blogListLoading());
    try {
      const response = await blogListApi();
      dispatch(setBlogs(response.blogListDto));
    } catch (error) {
      dispatch(fetchBlogListFailed(error));
    }
  };
};
