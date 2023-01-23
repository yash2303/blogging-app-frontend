export const createBlogReducer = (
    state = {
      isLoading: false,
      error: null,
      blogs: [],
    },
    action
  ) => {
    switch (action.type) {
      case "CREATE_BLOG_SUCCESS":
        return {
          ...state,
          isLoading: false,
          error: null,
          blogs: [...state.blogs, action.payload],
        };
      case "CREATE_BLOG_ERROR":
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };