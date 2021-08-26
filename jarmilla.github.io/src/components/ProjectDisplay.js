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
      {Array.isArray(project.image) ? project.image.map((img) => <img src={img} alt={project.name} />) : <img src={project.image} alt={project.name} />}
    </div>
  );
}

export default ProjectDisplay;
