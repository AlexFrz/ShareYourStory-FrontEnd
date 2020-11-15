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
      <div className="cards__section">
        <h1>Stories of the month</h1>
        <div className="card__container">{recentStoryMarkup}</div>
      </div>
    );
  }
}

export default stories;
