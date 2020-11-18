import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import Title from "./Title";
import "./Stories.scss";
import { Link, Redirect } from "react-router-dom";
import StoryDetails from "./StoryDetails";

class stories extends Component {
  state = {
    stories: null,
    goToDetails: false,
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ goToDetails: true });
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
        <Link to={`/stories/${story.storyId}`} story={story}>
          <Card key={story.storyId} story={story} onClick={this.handleClick} />
        </Link>
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
