import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectColumn = ({ title, count, projects, color }) => {
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto bg-white rounded-lg min-w-[240px] w-[216px]">
      <div
        className={`flex gap-3 items-center self-start px-2 py-1 ${color} rounded-lg`}
      >
        <div className="self-stretch my-auto font-semibold tracking-normal text-white">
          {title}
        </div>
        <div className="self-stretch my-auto font-bold tracking-normal text-neutral-200">
          {count}
        </div>
      </div>
      <div className="flex flex-col mt-2.5 w-full">
        <div className="flex  justify-center w-full text-neutral-700">
          {projects.map((project, index) => (
            <div key={index} className={index > 0 ? "mt-3" : ""}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        <div className="flex gap-1 justify-center items-center self-center px-1 mt-5 tracking-normal text-blue-600 w-[68px]">
          <div className="self-stretch my-auto underline decoration-auto decoration-solid underline-offset-auto w-[60px]">
            <span className="text-blue-600 underline">view more</span>
          </div>
        </div>
      </div>
    </div>
  );
};
