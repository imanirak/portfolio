import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-red-500 bg-amber-400 body-font">
    <div className="container px-5 py-10 mx-auto font-serif text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
        <CodeIcon className="mx-auto inline-block w-10 mb-4 text-yellow-100" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-yellow-100">
          My Projects
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-red-500">
         Take a look at my most recently projects completed with the technologies list above.<br></br>
         
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {projects.map((project) => (
      

<div className="pl-10 sm:w-1/2 w-100 p-4">
<div class="max-w-sm rounded overflow-hidden shadow-lg md:max-w-md:max-w-md lg:max-w-lg xl:max-w-xl">
<img class="w-full" src={project.image} alt="{}" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{project.title}</div>
    <p class="text-zinc-800 text-base">
     {project.subtitle}
    </p>
    <p class="text-zinc-800 text-base">
     {project.description}
    </p>
    <br />
   <a href={project.githublink}  className="text-slate-50 hover:text-red-500" target="_blank" rel="noreferrer"> view code</a>
  
   <a href={project.link} className=" ml-4  text-slate-50 hover:text-red-500" target="_blank" rel="noreferrer">live project</a>
  
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-teal-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">{project.languages}</span>
  </div>

     
</div>


</div>

          
        ))}
      </div>
    </div>
  </section>
  )
}


