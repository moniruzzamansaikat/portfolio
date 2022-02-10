import React from 'react';
import Projects from '../components/Projects/Projects';
import '../styles/ProjectsPage.css';

function ProjectsPage() {
  return (
    <div className="project_page pt-5">
      <div className="container mt-5">
        <h1>All of my projects</h1>
        <p className="subtitle">
          Here are some of the projects I have worked on. I have worked on a
          variety of projects ranging from small to large scale.
        </p>
        <Projects />
      </div>
    </div>
  );
}

export default ProjectsPage;
