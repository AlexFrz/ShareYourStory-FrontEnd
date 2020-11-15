import React, { Component } from "react";
import "./Story.css";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { motion, useCycle, AnimatePresence } from "framer-motion";

export default function Story({
  story: {
    body,
    createdAt,
    userImage,
    userHandle,
    storyId,
    likeCount,
    commentCount,
  },
}) {
  const [AnimatePresence, cycleCard] = useCycle();

  return (
    <div className="cards__wrapper">
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
    </div>
  );
}
