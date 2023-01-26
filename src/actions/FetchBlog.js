import { fetchBlogApi } from "../clients/BlogsClient";

export const fetchBlog = (blogId) => async (dispatch) => {
  dispatch({ type: "FETCH_BLOG_LOADING" });
  try {
    const response = await fetchBlogApi(blogId);
    dispatch({ type: "FETCH_BLOG_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "FETCH_BLOG_ERROR", payload: error });
  }
};
