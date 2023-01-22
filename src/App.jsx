import store from "./store";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import BlogList from "./components/BlogList";
import Register from "./components/Register";
import Login from "./components/Login";

// console.log(store.getState()) // logs the current state of store
// store.dispatch({type: 'SET_BLOGS', blogs: [{id:1, title: "My blog 1", content: "This is my first blog post"}]})
// console.log(store.getState()) // logs the updated state of store with blogs
// store.dispatch({type: 'SET_BLOGS', blogs: [{id:1, title: "My blog 1", content: "This is my first blog post"},{id:2, title: "My blog 2", content: "This is my second blog post"}]})
// console.log(store.getState()) // logs the updated state of store with blogs

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/register" component={Register} />
          <Route exact={true} path="/blogs" component={BlogList} />
          <Route component={NotFoundPage} />
        </Switch>{" "}
      </div>
    </Provider>
  );
}

export default App;
