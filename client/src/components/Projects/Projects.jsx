import React from 'react';
import ProjectsList from './ProjectsList';
import { Link } from 'react-router-dom';
import '../../styles/Projects.css';

function Projects({ featured }) {
  return (
    <section className="projects-compo" id="projects">
      {featured && (
        <>
          <h2 className="subtitle">Projects</h2>
          <p className="text-center">
            Here are some of favourites projects I have worked on. You can see a
            huge list of projects I have worked on
            <Link to="/projects"> here.</Link>
          </p>
        </>
      )}
      <ProjectsList featured={featured} />
    </section>
  );
}

export default Projects;
