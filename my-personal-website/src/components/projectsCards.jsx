import React from "react";

function ProjectsCards(props) {
  return (
    <div className="card">
      <div className="cardDescription">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <span>{props.technologies}</span>
      </div>
      <div className="cardPreview">{props.img}</div>
    </div>
  );
}
export default ProjectsCards;
