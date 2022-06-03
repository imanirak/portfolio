
import { SiJavascript, SiPython, SiReact, SiExpress, SiDjango, SiNodedotjs, SiMongodb, SiPostgresql, SiGit, SiGithub} from "react-icons/si";
let lilspace = require("./assets/little-space.png");
let ham = require("./assets/HAM.png");
let reaxion = require("./assets/reaxion.png");
let Savvy = require("./assets/savvydeco.png");


export const projects = [
    {
        title: "Little Space",
        subtitle: "A space for your business",
        description:
          "Perfect for new entrepreneurs looking to begin selling their very own custom products. ",
        image:lilspace,
        link: "https://lil-space.herokuapp.com/",
        githublink:"https://github.com/imanirak/little-space",
        languages:["Python ","Django ", "Postgresql"]
    },
    {
      title: "HAM",
      subtitle: "Hardware Asset Management",
      description:
        "Perfect for any IT team looking to organize and properly manage their hardware.",
      image:ham,
      link: "https://ham-system.herokuapp.com/",
      githublink:"https://github.com/imanirak/HAM",
      languages:["Python ","Django ", "Postgresql"]
  },
  {
    title: "Reaxion",
    subtitle: "Get genuine anonymous feedback in a timely manner.",
    description:
      "Enables facilitators to create groups and get emotive feedback within a specific timeframe.",
    image:reaxion,
    link: "http://reaxion.herokuapp.com/",
    githublink:"https://github.com/robyngoodner/Reaxion",
    languages:["MongoDB  ","Express  ", "React  " , "Node" ]
},
{
  title: "Savvy Deco",
  subtitle: "Savvy Deco is a curated local used furniture website",
  description:
    "Allow users to sign up and sell their own furniture or simply browse & purchase items.",
  image:Savvy,
  link: "https://savvy-deco.herokuapp.com/",
  githublink:"https://github.com/imanirak/savvydeco",
  languages:["MongoDB ", "Node ", "Express ", "Mongoose "]
},
  ];


  export const skills = [
    <SiJavascript size={70} />, 
    <SiPython size={70}/>, 
    <SiReact size={70}/>, 
    <SiExpress size={70} />,
    <SiDjango size={70} />,
    <SiNodedotjs size={70} />, 
    <SiMongodb size={70} /> , 
    <SiPostgresql size={70} />, 
    <SiGit size={70} />, 
    <SiGithub size={70} /> ,
   
  ];

export const languages = [
  "JavaScript ",
  "Python ",
  "React ",
  "Express.js ",
  "Django ",
  "Node.js ",
  "MongoDB ",
  "Posgresql ",
  "Git ",
  "Github "
]
