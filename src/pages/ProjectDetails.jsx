import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import ProjectCarousel from "../components/ui/ProjectCarousel";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { Button } from "@material-tailwind/react";
const ProjectDetails = () => {
  const params = useParams();
  const projectId = params.projectId;
  const [project, setProject] = useState(null);
  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setProject(data.find((order) => order._id === projectId));
    });
  }, [projectId]);
  if (!project) {
    return <div>Loading...</div>;
  }
  return (
    <div className="app__wrapper app__container  ">
      <h1 className="mb-4 text-2xl md:text-3xl text-center font-extrabold tracking-tighter">
        {project.title}
      </h1>

      <ProjectCarousel images={project.images} />
      <h2 className="text-lg my-2 py-2 border-b-[1px] border-primary-color font-bold">
        Description
      </h2>
      <p className="mb-2 tracking-wider  ">{project.description}</p>
      <ul>
        {project.bulletPoints.map((item, index) => (
          <li key={index} className="flex mb-2">
            <span className="mt-1 mx-2 text-secondary-color">
              <VscDebugBreakpointLogUnverified />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-4">
        <a href={project.projectLink} target="_blank" rel="noreferrer">
          <Button className="bg-secondary-color">Check The real deal !</Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
