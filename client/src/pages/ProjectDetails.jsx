import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../hooks/useProjects';
import '../styles/ProjectDetail.css';

function ProjectDetails() {
  const [project, setProject] = React.useState(null);
  const { getProjectByTitle } = useProjects();
  const { title } = useParams();

  useEffect(() => {
    setProject(getProjectByTitle(title));
  }, [title, getProjectByTitle]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container py-5 mt-5 mb-2 project-details">
      <div className="row mt-3">
        <div className="col-md-6">
          <img
            src={project.images[0]}
            alt={project.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <h2>Uses</h2>
          <ul>
            {project.used.map((use) => (
              <li key={use}>{use}</li>
            ))}
          </ul>
          <div>
            <a href={project.live} target="_blank" rel="noreferrer">
              <button className="btn me-2">Live</button>
            </a>
            <a href={project.code} target="_blank" rel="noreferrer">
              <button className="btn btn-primary">Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
