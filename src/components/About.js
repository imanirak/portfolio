import React from 'react'
let Me = require("../assets/karina.png");



export default function About() {
  return (
    
    <section id="about" className="bg-amber-400 ">
      <div className="container mx-auto flex py-20 md:flex-row flex-col items-center">
 
        <div className="lg:flex-grow md:w-auto flex flex-col md:text-right mb-16 text-right">

<h1 className="title-font text-3xl mb-4 font-medium font-serif text-yellow-100 text-center md:text-right lg:text-right xl:text-right mx-10 md:mx-10 lg:mx-30 xl:mx-40">
            Hi, I'm Karina.    
          </h1>
          <br className="lg:inline-block " /> 
        <p className="text-center mx-10 sm:text-left md:text-right lg:text-right xl:text-right sm:mx-10 md:mx-10 lg:mx-30 xl:mx-40">
          I'm a natural born <span className="text-yellow-100 hover:text-red-500">philomath</span>. I have always had a desire to
          pick up new hobbies and learn new skills. From learning to care
          for <span className="text-yellow-100 hover:text-red-500">plants, </span> create my own <span className="text-yellow-100 hover:text-red-500">graphic designs </span> 
          and <span className="text-yellow-100 hover:text-red-500"> web development</span>
          , of course.
        </p>
        <br className="lg:inline-block" /> 
        <p className="text-center mx-10 sm:text-left md:text-right sm:mx-10 md:mx-10 lg:mx-30  xl:mx-40">
        My journey towards full-stack
        development  all started with  <span className="text-yellow-100 hover:text-red-500"> MySpace</span>. The ability to edit 
        and change your own <span className="text-yellow-100 hover:text-red-500">html</span> led me on an endless adventure filled with knowledge.
        Leading me to later learn multiple programming languages & frameworks including <span className="text-yellow-100 hover:text-red-500"> JavaScript, React, Python & Django.</span>
       
        </p>
        <br className="lg:inline-block " /> 
 
</div>
        


          <div className="pr-20 lg:pr-0 xl:pr-40 lg:pl-10 xl:pl-0 ">
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
