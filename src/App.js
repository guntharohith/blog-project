import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Post from "./views/post";
import Posts from "./views/posts";
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/posts/:id">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
