export const blogsReducer = (
  state = {
    isLoading: false,
    error: null,
    blogs: [],
  },
  action
) => {
  switch (action.type) {
    case "SET_BLOGS":
      return { ...state, isLoading: false, blogs: action.blogs, error: null };
    case "SET_BLOGS_LOADING":
      return { ...state, isLoading: true };
    case "SET_BLOGS_ERROR":
      return { ...state, isLoading: false, error: action.error };
    case "DELETE_BLOG":
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload),
      };
    default:
      return state;
  }
};
