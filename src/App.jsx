import store from "./store/store";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import BlogList from "./components/BlogList";
import Register from "./components/Register";
import Login from "./components/Login";
import CreateBlog from "./components/CreateBlog";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/register" component={Register} />
          <Route exact={true} path="/blogs" component={BlogList} />
          <Route exact={true} path="/create-blog" component={CreateBlog} />
          <Route exact={true} path="/blogs/:blogId" component={BlogDetail} />     
          <Route component={NotFoundPage} />
        </Switch>{" "}
      </div>
    </Provider>
  );
}

export default App;
