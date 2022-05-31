import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="font-serif bg-emerald-700">
    <div className="container px-5 py-10 mx-auto">
      <div className="text-center mb-20">
        <ChipIcon className="w-10 inline-block mb-4 text-yellow-300" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-yellow-100 mb-4">
          Skills &amp; Technologies
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          
        </p>
      </div>
      <div className="flex flex-wrap md:w-2/3 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 w-full">
            <div className="bg-yellow-300 rounded flex p-3 h-full items-center  hover:bg-emerald-800 hover:drop-shadow-md">
              <BadgeCheckIcon className="text-emerald-600 hover:text-yellow-300 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-zinc-800 hover:text-yellow-100">
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
