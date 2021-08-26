function ProjectDisplay({ project }) {
  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <ul>
        {project.features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      <img src={project.image} alt={project.name} />
    </div>
  );
}

export default ProjectDisplay;
