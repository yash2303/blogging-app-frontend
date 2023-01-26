import { createBlogApi } from "../clients/BlogsClient";

export const createBlog = (blogData, history) => async (dispatch) => {
  try {
    const response = await createBlogApi(blogData);
    console.log(response);
    dispatch({ type: "CREATE_BLOG_SUCCESS", payload: response.data });
    history.push(`/blogs/${response.id}`)
  } catch (error) {
    console.log(error);
    dispatch({ type: "CREATE_BLOG_ERROR", payload: error });
  }
};
