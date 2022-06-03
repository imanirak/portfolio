import React from 'react'



export default function Contact() {

const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [message, setMessage] = React.useState("");

function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
   <section id="contact" className="relative bg-amber-400 md:px-40 xl:px-60">
      <div className="container font-serif px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
  
        <form
          netlify="true"
          name="contact"
          
          onSubmit={handleSubmit}
          className="m-30 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-yellow-100 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 text-red-500 text-left">
            Looking forward to chatting with you! 
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-zinc-100">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-amber-400 rounded border border-gray-700 focus:border-yellow-200 focus:ring-2 hover:text-zinc-200 focus:ring-yellow-300 text-base outline-none text-zinc-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-zinc-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-amber-400 rounded border border-gray-700 focus:border-yellow-200 focus:ring-2 hover:text-zinc-200 focus:ring-yellow-300 text-base outline-none text-zinc-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-zinc-100">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-amber-400 rounded border border-gray-700 focus:border-yellow-200 focus:ring-2  hover:text-zinc-200 focus:ring-yellow-300 h-32 text-base outline-none text-zinc-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-zinc-800 hover:text-yellow-100 bg-red-500 border-0 py-2 px-6  align-left focus:outline-none hover:bg-teal-500 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
