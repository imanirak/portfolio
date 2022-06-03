import React from "react";
import { FiMenu } from "react-icons/fi";
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-teal-500 md:sticky top-0 z-10 md:hidden p-2">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="#about" 
             className="text-md font-serif inline-block mr-4 py-2 whitespace-nowrap  text-zinc-800 hover:text-yellow-100">
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

            {/* <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <a href="https://www.linkedin.com/in/karinadgarces/" target="_blank" rel="noreferrer" 
              className="m-3 px-3  flex items-center text-md uppercase font-bold text-zinc-800 hover:opacity-75 hover:text-yellow-100"> <FiLinkedin /> </a>
              </li>
              <li className="nav-item">
               
<a href="https://github.com/imanirak" 
className="m-3 px-3  flex items-center text-md uppercase font-bold  text-zinc-800 hover:opacity-75 hover:text-yellow-100"
target="_blank" rel="noreferrer"> <FiGithub /> </a>
              </li>
              <li className="nav-item">
              <a href="https://twitter.com/mylifeasanirak" 
            className="m-3 px-3  flex items-center text-md uppercase font-bold  text-zinc-800 hover:opacity-75 hover:text-yellow-100"
              target="_blank"  rel="noreferrer"> <FiTwitter /> </a>
              </li>

              <li className="nav-item">            
<a href="https://www.instagram.com/anirak.dev/" 
className="m-3 px-3  flex items-center text-md uppercase font-bold  text-zinc-800 hover:opacity-75 hover:text-yellow-100"
target="_blank" rel="noreferrer" c> <FiInstagram /></a>
                             </li>
            </ul> */}

            
            <ul className="flex flex-col font-serif  lg:flex-row list-none lg:ml-auto">
              
              <li className="nav-item">
             
 <a href="#projects" 
    className="m-3 px-3 flex items-center text-md  text-zinc-800 hover:opacity-75 hover:text-yellow-100"
 > Projects
        </a>

              </li>

              <li className="nav-item">    
              <a href="#skills" 
    className="m-3 px-3 flex items-center text-md  text-zinc-800 hover:opacity-75 hover:text-yellow-100"
 > Skills
        </a>
              </li>


        
            </ul>


          </div>
        </div>
      </nav>
    </>
  );
}