import React, { Fragment } from "react";
import "./Home.scss";
import cover from "../images/cover.mp4";

function Home() {
  return (
    <Fragment>
      <div className="container">
        <video autoPlay cover loop muted className="background-video">
          <source src={cover} type="video/mp4" />
          <source src={cover} type="video/ogg" />
        </video>
        <div className="wrapper">
          <div className="home">
            <h5>
              The <b>THEIRSTORIES</b> project is a non-profit organization of
              persons that has a common vision: a more equalitarian world.
              That's why they travel, meeting the most wonderful persons of this
              world, and share their stories to the world.
            </h5>
          </div>
        </div>
        <div class="arrow arrow-first"></div>
        <div class="arrow arrow-second"></div>
      </div>
    </Fragment>
  );
}

export default Home;
