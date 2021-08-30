function ProjectDisplay({ project }) {
  return (
    <div className="project-display">
     <div className="project-text-container">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <ul>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
     </div>
      <div className="project-img-container">

        {Array.isArray(project.image) ? <img src={project.image[0]} alt={project.name} />
        /* project.image.map((img, index) => <img key={index} src={img} alt={project.name} /> */ : <img src={project.image} alt={project.name} />}
      </div>
    </div>
  );
}

export default ProjectDisplay;
