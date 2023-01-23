const initialState = {
  data: {},
  isLoading: true,
  error: null,
};

export const blogDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BLOG_LOADING":
      return { ...state, isLoading: true };
    case "FETCH_BLOG_SUCCESS":
      return { ...state, data: action.data, isLoading: false };
    case "FETCH_BLOG_ERROR":
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};
