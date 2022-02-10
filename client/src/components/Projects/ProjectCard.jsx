import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal, BiDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  const [imgSrc] = useState(project.images[0]);

  return (
    <div className="card" data-aos="zoom-in" data-aos-duration="1000">
      <img className="main" src={imgSrc} alt={project.title} />
      <div className="p-3">
        <h3 className="card-title">{project.title}</h3>
        <h6> - {project.category}</h6>
        <div className="mt-4">
          <Link to={`/projects/${project.title}`} className="btn btn-primary">
            <span>Details</span>
            <BiDetail />
          </Link>
          <a
            href={project.live}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            <span>Live</span>
            <BiLinkExternal />
          </a>
          <a
            href={project.code}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            <span>Code</span>
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
