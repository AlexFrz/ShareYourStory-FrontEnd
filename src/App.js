import React, { Component, Fragment, useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import jwtDecode from "jwt-decode";
import { CSSTransition } from "react-transition-group";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages
import Stories from "./components/Stories";
import Login from "./pages/login";
import Signup from "./pages/signup";
import About from "./components/About";

// Components
import Header from "./components/Header";
import AuthRoute from "./util/AuthRoute";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Donate from "./components/Donate";
import Story from "./components/Story";

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
        <div className="App">
          <section className="section__one">
            <Header />
            <Home />
          </section>
          <section>
            <Stories />
          </section>

          <section>
            <button className="home__button wider">Want to give back?</button>
            <Donate />
          </section>

          <Switch>
            <AuthRoute
              exact
              path="/Login"
              component={Login}
              authenticated={authenticated}
            />
            <AuthRoute
              exact
              path="/Signup"
              component={Signup}
              authenticated={authenticated}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

export default App;
