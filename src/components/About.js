import React from 'react'
let Me = require("../assets/karina.png");
let Resume = require("../assets/karinas_resume.pdf");



export default function About() {
  return (
    <section id="about" className="bg-emerald-700 ">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-serif text-yellow-100">
            Hi, I'm Karina.
            <br className="hidden lg:inline-block" /> 
      
            I enjoy bringing projects to life.
          </h1>
          <p className="mb-8 leading-relaxed font-serif text-zinc-800">
            My inital interest in web development all started with MySpace.
            The ability to dig into our layout's html ending up pushing me to
            a career in tech. I could not imagine it any other way.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-zinc-800 bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-800 hover:text--300 hover:text-yellow-300 rounded text-lg">
             Contact Me
            </a>
            <a
              href={Resume}
              download
              className="ml-4  inline-flex text-zinc-800 bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-800 hover:text-yellow-300 rounded text-lg">
              Resume
            </a>
          
          </div>
        </div>
        <div>
          <img
            className="object-cover object-center rounded-full drop-shadow-md hover:{Memoji}"
            alt="hero"
            src={Me}
          />
        </div>
      </div>
    </section>
  )
}
