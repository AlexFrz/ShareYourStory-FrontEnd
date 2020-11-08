import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import axios from "axios";
import Story from "../components/Story";

class home extends Component {
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
      <div>
        <Grid container spacing={16}>
          <Grid item sm={8} xs={12}>
            {recentStoryMarkup}
          </Grid>
          <Grid item sm={4} xs={12}>
            <p>Profile...</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default home;
