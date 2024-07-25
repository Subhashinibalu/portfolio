import { Carousel } from "flowbite-react";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { ImGit } from "react-icons/im";
import { IoSettings } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMongoose, SiNetlify, SiProtonmail } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Header from "../Components/Header";

const Skills = () => {
  return (
    <div>
      <Header/>
    <div id="skills" className="py-20">
    <div className=" p-5  md:py-10" >
        <h2 className="text-xl font-bold text-center "  >
          TECHNOLOGIES I&apos;VE USED
        </h2>

        <Carousel className="h-52 md:h-72 p-10" slideInterval={5000}>
          <div>
            <p className="text-center text-2xl  mb-6 font-serif">Front End</p>
            <div className="flex justify-evenly  md:gap-10">
              <p>
                <FaHtml5 className="text-3xl md:text-5xl  text-orange-500" />
                <br />
                <span className="hidden md:block">HTML</span>
              </p>
              <p>
                <FaCss3Alt className="text-3xl md:text-5xl  text-blue-500" />
                <br />
                <span className="hidden md:block">CSS</span>
              </p>
              <p>
                <FaJs className="md:text-5xl text-3xl text-amber-300" />
                <br />
                <span className="hidden md:block">JavaScript</span>
              </p>
              <p>
                <FaReact className="md:text-5xl text-3xl text-sky-400" />
                <br />
                <span className="hidden md:block">React</span>
              </p>
              <p>
                <RiTailwindCssFill className="md:text-5xl text-3xl  text-blue-600" />
                <br />
                <span className="hidden md:block">Tailwind CSS</span>
              </p>
              <p>
                <FaBootstrap className="md:text-5xl text-3xl  text-violet-700" />
                <br />
                <span className="hidden md:block">BootStrap</span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-center text-2xl mb-6 font-serif">Back End</p>
            <div className="flex justify-evenly md:gap-10">
              <p>
                <FaNodeJs className="text-3xl md:text-5xl text-lime-500" />
                <br />
                <span className="hidden md:block">NodeJS</span>
              </p>
              <p>
                <span className="text-3xl md:text-5xl ">es</span>
                <br />
                <br />
                <span className="hidden md:block">ExpressJS</span>
              </p>
              <p>
                <SiMongodb className="text-3xl md:text-5xl text-green-500" />
                <br />
                <span className="hidden md:block">MongoDB</span>
              </p>
              <p>
                <SiMongoose className="text-3xl md:text-5xl text-red-800" />
                <br />
                <span className="hidden md:block">Mongoose</span>
              </p>
              <p>
                <SiProtonmail className="text-3xl md:text-5xl text-teal-400" />
                <br />
                <span className="hidden md:block">NodeMailer</span>
              </p>
              <p>
                <IoSettings className="text-3xl md:text-5xl text-indigo-500" />
                <br />
                <span className="hidden md:block">Restful API&apos;s</span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-center text-2xl mb-6 font-serif ">Other</p>
            <div className="flex justify-evenly md:gap-10">
              <p>
                <ImGit className="text-3xl md:text-5xl text-orange-600" />
                <br />
                <span className="hidden md:block">Git</span>
              </p>
              <p>
                <FaGithub className="text-3xl md:text-5xl" />
                <br />
                <span className="hidden md:block">GitHub</span>
              </p>
              <p>
                <SiNetlify className="text-3xl md:text-5xl text-teal-500" />
                <br />
                <span className="hidden md:block">Netlify</span>
              </p>

              <p>
                <VscVscode className="text-3xl md:text-5xl text-sky-500" />
                <br />
                <span className="hidden md:block">VS Code</span>
              </p>
            </div>
          </div>
        </Carousel>

        <div className="flex justify-end md:me-16 items-baseline animate-bounce ">
          <a href="#projects" title="view projects">
          
              <FaLaptopCode className="text-5xl font-thin text-gray-500" />
           
          </a>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default Skills;
