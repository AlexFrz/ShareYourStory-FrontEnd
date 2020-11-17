import React, { Component } from "react";
import "./Story.scss";
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
  return <div className="background">{body}</div>;
}
