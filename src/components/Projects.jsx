import React from "react";

const projectsData = [
  { title: "Project 1", description: "Description for project 1" },
  { title: "Project 2", description: "Description for project 2" },
  { title: "Project 3", description: "Description for project 3" },
  { title: "Project 4", description: "Description for project 4" },
  { title: "Project 5", description: "Description for project 5" },
  { title: "Project 6", description: "Description for project 6" },
  { title: "Project 7", description: "Description for project 7" },
  { title: "Project 8", description: "Description for project 8" },
  { title: "Project 9", description: "Description for project 9" },
  { title: "Project 10", description: "Description for project 10" },
  { title: "Project 11", description: "Description for project 11" },
];

export default function Projects() {
  return (
    <div className="projects w-full max-w-[90%] md:max-w-[70%] lg:max-w-[55%] max-h-[60vh] overflow-y-scroll ml-[5%] mr-auto mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 hide-scrollbar rounded-2xl p-[1%]">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className=" project-item flex flex-col justify-between items-center w-full h-40 shadow-xl shadow-blue-500/50 rounded-2xl transition-transform transform hover:scale-105 "
        >
          <div className="h-[70%] bg-white w-full flex justify-center items-center rounded-t-2xl text-lg font-semibold text-gray-800 p-2">
            {project.title}
          </div>
          <h2 className="h-[30%] flex justify-center items-center bg-slate-500 w-full rounded-b-2xl text-white font-medium p-2 text-sm">
            {project.description}
          </h2>
        </div>
      ))}
    </div>
  );
}