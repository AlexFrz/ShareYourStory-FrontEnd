import React from "react";
import Title from "../components/Title";

function about() {
  return (
    <div className="page">
      <div className="inner">
        <Title lineContent="This is the" lineContent2="about page" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error vel
          illum delectus molestiae sit minus eum libero. Qui, aliquid, illo
          tenetur voluptate, fuga magnam magni maiores vitae porro optio
          necessitatibus?
        </p>
      </div>
    </div>
  );
}

export default about;
