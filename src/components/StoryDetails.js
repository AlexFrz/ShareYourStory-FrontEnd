import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./StoryDetails.scss";

export function StoryDetails(props) {
  const [story, setStory] = useState({});
  useEffect(() => setStory(props.location.state.story), []);

  return (
    <div className="storyDetails">
      <div className="storyDetails__imageWrapper">
        <Link to="/">
          <img src={story.userImage} className="storyDetails__image" />
        </Link>
      </div>
      <div className="storyDetails__post">
        <div className="storyDetails__handle">{story.userHandle}</div>
        <div className="storyDetails__postContainer">
          <div className="storyDetails__timestamp">12 of January 2020</div>
          <h1 className="storyDetails__title">And she's still smiling</h1>
          <div className="storyDetails__body">
            {story.body}. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Perferendis quos temporibus ipsa aliquam repudiandae autem
            blanditiis, mollitia cum odit debitis id minus, ratione repellat
            asperiores excepturi enim, fugiat fuga nihil. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Hic eligendi facere sint quod,
            laborum magnam magni dolore odio deserunt dolor, repellat ullam quos
            iste explicabo officiis cum nulla distinctio. Blanditiis. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eum
            recusandae omnis quos. Eius obcaecati quam praesentium ab ipsa.
            Placeat, accusantium eius deleniti hic cum cupiditate exercitationem
            perspiciatis rem autem! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis dignissimos, maxime magni nostrum
            blanditiis modi exercitationem veniam. Sunt aperiam quasi fuga,
            deleniti iure autem modi nisi harum laudantium quibusdam
            repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Illo magnam nulla neque! Nostrum sapiente, adipisci animi
            quaerat ad praesentium perferendis fugit laborum itaque pariatur
            nemo ipsum suscipit odio sed ipsam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil a, enim officiis ducimus eveniet
            dolorem nulla iure? Veritatis fugit, magnam magni, nesciunt amet
            saepe ea unde, error natus mollitia facere.
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryDetails;
