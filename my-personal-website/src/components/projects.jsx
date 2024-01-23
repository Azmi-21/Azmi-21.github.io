import React from "react";
import ProjectsCards from "./projectsCards";

const projectsInfo = [
  {
    title: "UrbanGate",
    description:
      "My biggest and most challenging project so far. It is a complete real estate website. It is a full-stack project that uses mainly MERN stack. In this project, I learned to organize and manage a large project with multiple contributors. This project gave me the chance to work on all the technical aspects of a software engineering project like database, backend and deployement. I also gained a lot of experience in using Git and GitHub. You can check the project on my GitHub or access it directly via this link.",
    technologies: "React, Bootstrap",
    img: "my-personal-website/public/space_bg.jpg",
  },
];

function Projects() {
  return (
    <div className="mainComponent">
      <p>
        <h3>My Projects</h3>
        <ProjectsCards
          title={projectsInfo[0].title}
          description={projectsInfo[0].description}
          technologies={projectsInfo[0].technologies}
          img={projectsInfo[0].img}
        />
      </p>
    </div>
  );
}

export default Projects;
export { projectsInfo };
