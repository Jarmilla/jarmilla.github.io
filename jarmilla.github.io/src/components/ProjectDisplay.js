import React, { useState } from "react";
import gitLogo from "../img/GitHub-Mark/PNG/GitHub-Mark-32px.png";

function ProjectDisplay({ project }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="project-display">
      <div className="project-text-cont">
        <h1>{project.name}</h1>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <a target="blank" href={project.ghPages}>
          View full Project
        </a>

        <a target="blank" href={project.github}>
          Project on <img src={gitLogo} alt="GitHub Logo" />
        </a>

        <button onClick={() => setIsShown(!isShown)}>{isShown ? "Hide Description" : "Show Description"}</button>
        {isShown ? <p>{project.description}</p> : ""}
      </div>

      <div className="project-img-cont">
        <a target="blank" href={project.ghPages}>
          {project.image && <img src={project.image} alt={project.name} />}
        </a>

        {/*   {Array.isArray(project.image) ? (
          project.image.map((img, index) => (
            <a target="blank" href={project.ghPages}>
              <img key={index} src={img} alt={project.name} />
            </a>
          ))
        ) : (
          
        )} */}
      </div>
    </div>
  );
}

export default ProjectDisplay;
