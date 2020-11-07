import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

// Components
import Navbar from "./components/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#FE8171", contrastText: "#FBF5EF" },
    secondary: { main: "#109386", contrastText: "#fff" },
    tercary: "#61745A",
    dark: "#2C2A29",
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <Navbar />
          <div className="app__container">
            <Switch>
              <Route exact path="/" component={home}></Route>
              <Route exact path="/login" component={login}></Route>
              <Route exact path="/signup" component={signup}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
