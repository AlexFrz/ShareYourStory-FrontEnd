import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import Title from "./Title";
import "./Stories.scss";
import { Link, history, Router, Route, Redirect } from "react-router-dom";
import wave1 from "../images/wave (1).svg";
import Story from "./Card";

class stories extends Component {
  state = {
    stories: null,
  };

  componentDidMount() {
    axios
      .get("/stories")
      .then((res) => {
        this.setState({ stories: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }
  render() {
    let recentStoryMarkup = this.state.stories ? (
      this.state.stories.map((story) => (
        <Card key={story.storyId} story={story} onClick={this.handleClick} />
      ))
    ) : (
      <p> Loading...</p>
    );

    return (
      <div className="cards__section">
        <h1 className="fadeIn">Stories of the month</h1>
        <div className="card__container">{recentStoryMarkup}</div>
      </div>
    );
  }
}

export default stories;
