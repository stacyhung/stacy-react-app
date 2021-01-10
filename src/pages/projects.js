import React from "react";
import { Link } from "react-router-dom";
import projectData from "../data/projectData";
import "../css/projects.css";

function Projects() {

    const projects = projectData.map(project => (
            <li key={project.id}>
                <figure>
                    <img src={project.img_src} alt={project.img_alt} />
                    <figcaption>
                        <h3>{project.title}</h3>
                        <span>{project.desc}</span>
                        <Link to={`/projects/${project.id}`} className="hover-link">View</Link>
                    </figcaption>
                </figure>
            </li>
        )    
    )

    return (
        <ul className="grid-2 cs-style-3">
            {projects}
        </ul>
    )
}

export default Projects;