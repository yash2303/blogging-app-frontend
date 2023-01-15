import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const blogsReducer = (state = {
  isLoading: false,
  error: null,
  blogs: [],
}, action) => {
    switch (action.type) {
      case 'SET_BLOGS':
        return {...state, isLoading:false, blogs: action.blogs};
        case 'SET_BLOGS_LOADING':
            return {...state, isLoading: true};
        case 'SET_BLOGS_ERROR':
            return {...state, isLoading:false, error: action.error};
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    blogList: blogsReducer,
});
  
const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
