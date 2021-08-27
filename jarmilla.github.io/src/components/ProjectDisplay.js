function ProjectDisplay({ project }) {
  return (
    <div className="project-display">
     <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <ul>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
     </div>
      <div>
        {Array.isArray(project.image) ? project.image.map((img, index) => <img src={img} alt={project.name} />) : <img src={project.image} alt={project.name} />}
      </div>
    </div>
  );
}

export default ProjectDisplay;
