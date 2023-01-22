import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const blogsReducer = (
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
    default:
      return state;
  }
};

const authReducer = (
  state = {
    user: null,
    error: null,
  },
  action
) => {
  console.log(state, action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, error: null };
    case "REGISTER_SUCCESS":
      return { ...state, user: action.payload, error: null };
    case "LOGIN_ERROR":
      return { ...state, error: action.payload };
    case "REGISTER_ERROR":
      return { ...state, error: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  blogList: blogsReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
