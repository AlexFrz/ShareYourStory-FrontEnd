import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import jwtDecode from "jwt-decode";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

// Components
import Navbar from "./components/Navbar";
import AuthRoute from "./util/AuthRoute";

let authenticated;

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 10000 < Date.now()) {
    authenticated = false;
    localStorage.clear();
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="app__container">
          <Switch>
            <Route exact path="/" component={home} />
            <AuthRoute
              exact
              path="/login"
              component={login}
              authenticated={authenticated}
            />
            <AuthRoute
              exact
              path="/signup"
              component={signup}
              authenticated={authenticated}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
