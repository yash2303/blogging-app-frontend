import BlogList from './components/BlogList';
import store from './store';
import { Provider } from 'react-redux';

// console.log(store.getState()) // logs the current state of store
// store.dispatch({type: 'SET_BLOGS', blogs: [{id:1, title: "My blog 1", content: "This is my first blog post"}]})
// console.log(store.getState()) // logs the updated state of store with blogs
// store.dispatch({type: 'SET_BLOGS', blogs: [{id:1, title: "My blog 1", content: "This is my first blog post"},{id:2, title: "My blog 2", content: "This is my second blog post"}]})
// console.log(store.getState()) // logs the updated state of store with blogs

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BlogList />
      </div>
    </Provider>
  );
}

export default App;
