import React from "react";

function ProjectsCards(props) {
  return (
    <div className="card">
      <div className="cardDescription">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{technologies}</p>
      </div>
      <div className="cardPrev"></div>
    </div>
  );
}
export default ProjectsCards;
