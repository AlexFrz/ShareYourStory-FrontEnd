import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import axios from "axios";
import Story from "./Story";
import Title from "./Title";
import "./Stories.scss";

class stories extends Component {
  state = {
    stories: null,
  };

  componentDidMount() {
    axios
      .get("/stories")
      .then((res) => {
        this.setState({ stories: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let recentStoryMarkup = this.state.stories ? (
      this.state.stories.map((story) => (
        <Story key={story.storyId} story={story} />
      ))
    ) : (
      <p> Loading...</p>
    );

    return (
      <div className="page">
        <div className="cards">
          <h1>Stories of the month</h1>
          <div className="cardrow">
            <div className="card card__one">
              <div className="card__bg"></div>
              <div class="card__text">
                <p class="card__title">Brad Pitt</p>
              </div>
            </div>
            <div class="card card__two">
              <div class="card__bg"></div>
              <div class="card__text">
                <p class="card__title">Marilyn Monroe</p>
              </div>
            </div>
            <div class="card card__three">
              <div class="card__bg"></div>
              <div class="card__text">
                <p class="card__title">Johnny Wilkinson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default stories;
