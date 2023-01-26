const initialState = {
  isLoading: false,
  error: null,
  createdBlog: null,
};

export const createBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_BLOG_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        createdBlog: action.payload,
      };
    case "CREATE_BLOG_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        createdBlog: null,
      };
    default:
      return state;
  }
};
