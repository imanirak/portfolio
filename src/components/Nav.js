import React from "react";
import { FiMenu } from "react-icons/fi";

import { ArrowRightIcon } from "@heroicons/react/solid";
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-teal-500 md:sticky top-0 z-10 p-2">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="#about" 
             className="text-xl text-md font-serif inline-block mr-4 py-2 whitespace-nowrap  text-zinc-800 hover:text-yellow-100">
         Karina Garces 
        </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"><FiMenu className="ml-40" size={30} /></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
 <nav className="font-serif flex-col md:flex-row font-small mr-auto md:ml-4 md:py-1 md:pl-4 lg:border-l xl:border-l md:border-zinc-800	flex flex-wrap items-center text-base justify-center">
 
<a href="#projects" className="mr-5 mb-1 inline-flex hover:text-yellow-100">
          Projects
        </a>


<a href="#skills" className="mr-5 hover:text-yellow-100">
          Skills
        </a>

      </nav>

            <ul className="font-medium font-serif  lg:flex-row list-none lg:ml-auto">
              

                
{/*              

              <li className="nav-item">
             
 <a href="#projects" 
    className=" text-base md:border-zinc-800 m-3 px-3 flex items-center text-md  text-zinc-800 hover:opacity-75 hover:text-yellow-100"
 > Projects
        </a>

              </li>

              <li className="nav-item">    
              <a href="#skills" 
    className="m-3 px-3 flex items-center text-md  text-zinc-800 hover:opacity-75 hover:text-yellow-100"
 > Skills
        </a>
              </li> */}

    <div className="">
      
    </div>
              <div className="inline-flex">

         
<li className="nav-item">

<a href="https://www.linkedin.com/in/karinadgarces/" target="_blank" rel="noreferrer" className="m-3 flex items-center text-md  text-zinc-800 hover:opacity-75 hover:text-yellow-100"> <FiLinkedin /> </a>

</li>

<li className="nav-item">

<a href="https://github.com/imanirak" target="_blank" rel="noreferrer" className="m-3  flex items-center text-md  text-zinc-800 hover:opacity-75 hover:text-yellow-100"> <FiGithub /> </a>

</li>


<li className="nav-item">

<a href="https://twitter.com/mylifeasanirak" target="_blank"  rel="noreferrer" className="m-3  flex items-center text-md  text-zinc-800 hover:opacity-75 hover:text-yellow-100"> <FiTwitter /> </a>

</li>


<li className="nav-item">

<a href="https://www.instagram.com/anirak.dev/" target="_blank" rel="noreferrer" className="m-3 flex items-center text-md  text-zinc-800 hover:opacity-75 hover:text-yellow-100"> <FiInstagram /></a>

</li>

</div>

<a
        href="#contact"
        className="inline-flex items-center bg-teal-500 border-0 py-1 px-3 m-2 focus:outline-none hover:bg-red-500 hover:drop-shadow-md rounded hover:text-yellow-100  md:mt-0 text-zinc-800">
        Contact Me 
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      
      </a>


        
            </ul>

            


          </div>
        </div>
      </nav>
    </>
  );
}