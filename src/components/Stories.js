import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Stories.scss";
import { Link, Redirect, withRouter } from "react-router-dom";
import StoryDetails from "./StoryDetails";
import DonateButton from "../DonateButton";

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
        <Link
          to={{
            pathname: `/stories/${story.storyId}`,
            state: { story },
          }}
        >
          <Card key={story.storyId} story={story} onClick={this.handleClick} />
        </Link>
      ))
    ) : (
      <p> Loading...</p>
    );

    return (
      <div className="cards__section">
        <h1>Stories of the month</h1>
        <DonateButton />
        <div className="card__container">{recentStoryMarkup}</div>
      </div>
    );
  }
}

export default withRouter(stories);
