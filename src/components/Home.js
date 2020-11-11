import React, { Fragment } from "react";
import "./Home.scss";

function Home() {
  return (
    <Fragment>
      <div className="container">
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
      </div>
    </Fragment>
  );
}

export default Home;
