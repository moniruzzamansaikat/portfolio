import React from 'react';
import useProjects from '../../hooks/useProjects';
import ProjectCard from './ProjectCard';

function ProjectsList({ featured }) {
  const { projects, featuredProjects } = useProjects();

  const items = featured ? featuredProjects : projects;

  return (
    <div className="row">
      {items.map((project) => (
        <div
          className="col-md-6 col-lg-4 my-4 pe-5 project-grid"
          key={project.title}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
