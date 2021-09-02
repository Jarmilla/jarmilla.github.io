import gitLogo from "../img/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png";

function ProjectDisplay({ project }) {
  return (
    <div className="project-display" style={{ backgroundImage: `url(${project.background.img})` }}>
      <div className="project-text-cont">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <a target="blank" href={project.ghPages}>
          View full Project
        </a>

        <a target="blank" href={project.github}>
          Project on <img src={gitLogo} alt="GitHub" />
        </a>
      </div>

      <div className="project-img-cont">
        <a target="blank" href={project.ghPages}>
          {project.image && <img src={project.image} alt={project.name} />}
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
