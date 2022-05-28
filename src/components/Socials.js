import React from 'react'

let Twitter = require("../assets/icons/twitter.png")
export default function Socials() {
  return (
    <div className="bg-emerald-700 py-2 text-center ">
       <a 
       href="https://www.linkedin.com/in/karinadgarces/" target="_blank" className="m-3 hover:text-yellow-300"> LinkedIn </a>

<a 
       href="https://github.com/imanirak" target="_blank" className="m-3 hover:text-yellow-300"> Github </a>

<a 
       href="https://twitter.com/mylifeasanirak" target="_blank" className="m-3 hover:text-yellow-300"> Twitter </a>

<a 
       href="https://www.instagram.com/anirak.dev/" target="_blank" className="m-3 hover:text-yellow-300 object-contain">Instagram </a>
    </div>
  )
}
