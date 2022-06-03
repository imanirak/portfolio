import React from 'react'
import Iam from './Iam';
let Resume = require("../assets/karinas_resume.pdf");

const bold = {
    color:"text-white"
}

export default function Intro() {
  return (
    <section id="about" className="bg-amber-400 ">
      <div className="container mx-auto px-10 py-60">
        <div className="lg:flex-grow  md:pr-16  md:items-start md:text-center mb-16 md:mb-0 items-center text-center">
          {/* <h1 className="title-font text-3xl mb-4 font-medium font-serif text-yellow-100"> */}
          <h1 className="title-font text-center text-6xl mb-6 font-medium font-serif text-yellow-100">
          Karina Garces
          <br className="hidden lg:inline-block" /> 
          </h1>
          <div className="text-5xl text-red-500 hover:text-teal-500 font-serif">
          <Iam />
          </div>
    
    
        
          <p className="mb-8 leading-relaxed font-serif text-zinc-800">
          
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-zinc-800 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 hover:text--300 hover:text-yellow-100 rounded text-lg">
             Contact Me
            </a>
            <a
              href={Resume}
              download
              className="ml-4  inline-flex text-zinc-800 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 hover:text-yellow-100 rounded text-lg">
              Resume
            </a>
        
          </div>
        </div>
       
      </div>
    </section>
  )
}
