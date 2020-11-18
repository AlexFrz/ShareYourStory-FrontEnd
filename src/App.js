import React from "react";
import "./App.scss";

import jwtDecode from "jwt-decode";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Donate from "./components/Donate";
import Stories from "./components/Stories";
import DonateButton from "./DonateButton";
import NewsLetter from "./components/NewsLetter";

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
    <div className="App">
      <section className="section__one">
        <Header />
        <Home />
      </section>
      <section style={{ height: "100vh" }}>
        <Stories />
      </section>
    </div>
  );
}

export default App;
