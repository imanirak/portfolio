import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";
export default function Navbar() {
  return (
    
    
    <header className="bg-teal-500 md:sticky top-0 z-10">
    <div className="container font-serif mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="title-font font-medium text-zinc-800 hover:text-yellow-100 mb-4 md:mb-0 ml-3 text-xl">
         Karina Garces
        </a>
      <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-zinc-800	flex flex-wrap items-center text-base justify-center">
        <a href="#projects" className="mr-5  hover:text-yellow-100">
          Projects
        </a>
        <a href="#skills" className="mr-5 hover:text-yellow-100">
          Skills
        </a>
      </nav>
<a href="https://www.linkedin.com/in/karinadgarces/" target="_blank" rel="noreferrer" className="m-3 hover:text-yellow-100"> <FiLinkedin /> </a>

<a href="https://github.com/imanirak" target="_blank" rel="noreferrer" className="m-3 hover:text-yellow-100"> <FiGithub /> </a>

<a href="https://twitter.com/mylifeasanirak" target="_blank"  rel="noreferrer" className="m-3 hover:text-yellow-100"> <FiTwitter /> </a>

<a href="https://www.instagram.com/anirak.dev/" target="_blank" rel="noreferrer" className="m-3 hover:text-yellow-100 object-contain"> <FiInstagram /></a>

      <a
        href="#contact"
        className="inline-flex items-center bg-teal-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 hover:drop-shadow-md rounded hover:text-yellow-100 mt-4 md:mt-0 text-zinc-800">
        Contact Me 
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      
      </a>

    </div>
  </header>
  );
}