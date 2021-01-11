import React from "react";
import { Link } from "react-router-dom";
import projectData from "../data/projectData";
import "../css/hover-effect.css";

function Projects() {
  const projects = projectData.map((project) => (
    <Link
      key={project.id}
      to={`/projects/${project.id}`}
      className="hover-link"
    >
      <figure key={project.id} className="effect-goliath">
        <img src={project.img_src} alt={project.img_alt} />
        <figcaption>
          <h2>{project.title}</h2>
          <p>{project.desc}</p>
        </figcaption>
      </figure>
    </Link>
  ));

  return <div className="grid wide">{projects}</div>;
}

export default Projects;
