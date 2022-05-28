import React from 'react'
import SplineDesign from "./Spline";

let Monstera = require("../assets/karina.png");
let backgroundImage = require("../assets/background.jpg")
export default function About() {
  return (
    <section id="about" className="bg-emerald-700 ">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-100">
            Hi, I'm Karina.
            <br className="hidden lg:inline-block" /> 
            <br />
            I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-zinc-800 bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-500 hover:text-slate-200 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4  text-zinc-800 bg-yellow-300  py-2 px-4  text-center focus:outline-none hover:bg-emerald-500 hover:text-white rounded ">
              See My Projects
            </a>
          </div>
        </div>
        <div >
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src={Monstera}
          />
        </div>
      </div>
    </section>
  )
}
