import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

import Marquee from "react-fast-marquee";


export default function Skills() {
  return (
    <section id="skills" className="font-serif bg-amber-400">
    <div className="container px-5 py-10 mx-auto">
      <div className="text-center mb-20">
        <ChipIcon className="w-10 inline-block mb-4 text-yellow-100" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-yellow-100 mb-4">
          Skills &amp; Technologies
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-red-500">
          I have utilized the following languages, frameworks <br></br>and other technologies to bring my projects to life.
        </p>
      </div>

      
      <div className="flex-1">
        
<Marquee gradient={false}>
  
        {skills.map((skill) => (
              <span className="title-font font-medium text-zinc-800 hover:text-yellow-100 text-base p-10">
               {skill}
               
              </span>

 

        ))}

</Marquee>


      </div>


     
    </div>
  </section>
  )
}
