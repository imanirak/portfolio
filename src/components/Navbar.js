import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <header className="bg-yellow-300 md:sticky top-0 z-10">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="title-font font-medium text-zinc-800 mb-4 md:mb-0">
        <a href="#about" className="ml-3 text-xl">
         Karina Garces
        </a>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-zinc-800	flex flex-wrap items-center text-base justify-center">
        <a href="#projects" className="mr-5 hover:text-emerald-700">
          Projects
        </a>
        <a href="#skills" className="mr-5 hover:text-emerald-700">
          Skills
        </a>
      </nav>
      <a
        href="#contact"
        className="inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-emerald-800 hover:drop-shadow-md rounded hover:text-yellow-300 mt-4 md:mt-0 text-zinc-800">
        Contact Me
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </a>
    </div>
  </header>
  );
}