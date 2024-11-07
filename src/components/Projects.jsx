import React from "react";
import image1 from "../img/projet-image-1.png";

const projectsData = [
  { image: image1, title: "this portfolio" },

];

export default function Projects() {
  return (
    <div className="projects   max-w-[90%] md:max-w-[70%] lg:max-w-[55%] max-h-[60vh]  overflow-y-scroll ml-[5%] mr-auto mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 hide-scrollbar rounded-2xl p-[1%]">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className=" project-item flex flex-col justify-between items-center w-full h-40 shadow-xl shadow-blue-500/50 rounded-2xl transition-transform transform hover:scale-105 "
        >
          <div className=" bg-white w-full flex justify-center items-center rounded-t-2xl text-lg font-semibold text-gray-800">
            <img src={project.image} alt={project.image} className="h-full  w-full w-100vw object-cover rounded-t-2xl" />
          </div>

          <h2 className="h-[30%] flex justify-center items-center bg-slate-500 w-full rounded-b-2xl text-white font-medium p-2 text-sm">
            {project.title}
          </h2>
        </div>
      ))}
    </div>
  );
}
