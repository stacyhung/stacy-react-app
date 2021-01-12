import React from "react";
import { useParams } from "react-router-dom";
import projectData from "../data/projectData";

function ProjectDetail() {
  const { projectId } = useParams();

  // get the project from the id
  const thisProject = projectData.find((project) => project.id === projectId);

  return <h1>I'm currently under construction!</h1>;
}

export default ProjectDetail;
