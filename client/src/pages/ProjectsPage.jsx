import React from 'react';
import Projects from '../components/Projects/Projects';
import Helmet from 'react-helmet';
import '../styles/ProjectsPage.css';

function ProjectsPage() {
  return (
    <div className="project_page pt-5">
      <Helmet>
        <title>Projects</title>
        <meta
          name="description"
          content="List of projects built by Moniruzzaman Saikat."
        />
        <meta
          name="keywords"
          content="web development, web design, programming , saikim, saikat, moniruzzaman saikat, moniruzzamansaikat, freelance web developer, freelance web programmer, "
        />
      </Helmet>
      <div className="container mt-5">
        <h1>All of my projects</h1>
        <p>
          Here are some of the projects I have worked on. I have worked on a
          variety of projects ranging from small to large scale.
        </p>
        <Projects />
      </div>
    </div>
  );
}

export default ProjectsPage;
