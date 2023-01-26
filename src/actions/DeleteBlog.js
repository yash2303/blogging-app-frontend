import { deleteBlogApi } from "../clients/BlogsClient";

export const deleteBlog = (blogId, history) => {
  return async (dispatch) => {
    try {
      const response = await deleteBlogApi(blogId);
      history.push("/blogs");
      dispatch({ type: "DELETE_BLOG", payload: blogId });
    } catch (error) {
      dispatch({ type: "DELETE_BLOG_ERROR", payload: error });
      console.error(error);
    }
  };
};
