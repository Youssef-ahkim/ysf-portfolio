import React from "react";
import image1 from "../img/projet-image-1.webp";

const projectsData = [
  { image: image1, title: "this portfolio" },
  { image: image1, title: "this portfolio" },
  { image: image1, title: "this portfolio" },


];

export default function Projects() {
  return (
    <div className="projects max-w-[90%] md:max-w-[70%] lg:max-w-[55%] max-h-[70vh] overflow-y-scroll ml-[5%] mr-auto mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 hide-scrollbar rounded-2xl p-4">
    {projectsData.map((project, index) => (
      <div
        key={index}
        className="project-item flex flex-col justify-between items-center w-full h-full shadow-xl shadow-blue-500/50 rounded-2xl transition-transform transform hover:scale-105 duration-300"
      >
        {/* Image Container */}
        <div className="w-full bg-white flex justify-center items-center rounded-t-2xl overflow-hidden aspect-w-16 aspect-h-9 sm:aspect-w-16 sm:aspect-h-9 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-3 lg:aspect-h-2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>
  
        {/* Project Title */}
        <h2 className="w-full bg-slate-500 text-white text-center font-medium text-sm p-3 rounded-b-2xl">
          {project.title}
        </h2>
      </div>
    ))}
  </div>
  

  );
}
