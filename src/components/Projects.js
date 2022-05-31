import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-emerald-900 body-font">
    <div className="container px-5 py-10 mx-auto font-serif text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
        <CodeIcon className="mx-auto inline-block w-10 mb-4 text-yellow-300" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-yellow-100">
          My Projects
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-yellow-300">
         Hover over each project in order to view the code or live deployment.
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            key={project.image}
            className="sm:w-1/2 w-100 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-emerald-800 bg-emerald-900 opacity-0 hover:opacity-100 hover:drop-shadow-md">
              <h1 className="title-font text-lg font-medium text-yellow-100 mb-3">
                  {project.title}
                </h1>
                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-300 mb-1">
                  {project.subtitle}
                </h2>
                <p className="leading-relaxed text-zinc-200">{project.description}</p>
                <br />
               <a href={project.githublink}  className="text-slate-50 hover:text-yellow-300" target="_blank" rel="noreferrer"> view code</a>
              
               <a href={project.link} className=" ml-4  text-slate-50 hover:text-yellow-300" target="_blank" rel="noreferrer">live project</a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
  )
}
