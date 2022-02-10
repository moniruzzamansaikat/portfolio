import React from 'react';
import useProjects from '../../hooks/useProjects';
import ProjectCard from './ProjectCard';

function ProjectsList() {
  const { projects } = useProjects();

  return (
    <div className="row">
      {projects.map((project) => (
        <div className="col-md-6 col-lg-4 mt-4" key={project.title}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
