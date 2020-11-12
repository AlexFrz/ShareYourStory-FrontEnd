import React, { Component } from "react";
import "./Story.css";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

class Story extends Component {
  render() {
    dayjs.extend(relativeTime);

    const {
      classes,
      story: {
        body,
        createdAt,
        userImage,
        userHandle,
        storyId,
        likeCount,
        commentCount,
      },
    } = this.props;

    return (
      <div className="card">
        <div
          className="card__bg"
          style={{
            background: `url(${userImage}) center / cover no-repeat`,
          }}
        ></div>
        <div class="card__text">
          <p class="card__title">{userHandle}</p>
        </div>
      </div>
    );
  }
}

export default Story;
