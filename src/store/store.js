import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer";
import { blogDetailReducer } from "./BlogDetailReducer";
import { blogsReducer } from "./BlogsReducer";
import { createBlogReducer } from "./CreateBlogReducer";

const rootReducer = combineReducers({
  blogList: blogsReducer,
  auth: authReducer,
  createBlog: createBlogReducer,
  blogDetail: blogDetailReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
