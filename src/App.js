import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import jwtDecode from "jwt-decode";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

// Components
import Header from "./components/Header";
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
        <div className="App">
          <Header />
          <div className="container">
            <div className="wrapper">
              <div className="home">
                <Switch>
                  <Route exact path="/" component={Home} />
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
                  <Route
                    exact
                    path="/opportunities"
                    component={Opportunities}
                  />
                  <Route exact path="/solutions" component={Solutions} />
                  <Route exact path="/contact-us" component={Contact} />
                </Switch>
              </div>
            </div>
          </div>
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

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
    </div>
  );
}
export default App;
