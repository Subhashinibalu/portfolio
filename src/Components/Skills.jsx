import { Accordion,Carousel,ListGroup } from 'flowbite-react';
import React from 'react';
import { CgCode } from 'react-icons/cg';
import { DiCss3, DiHtml5, DiJavascript, DiMongodb } from 'react-icons/di';
import { FaBootstrap, FaCss3, FaCss3Alt, FaGit, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { ImGit } from 'react-icons/im';
import { IoSettings } from 'react-icons/io5';
import { MdApi } from 'react-icons/md';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb, SiMongoose, SiNetlify, SiProtonmail, SiRender } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscCode, VscVscode } from 'react-icons/vsc';
;

const Skills = () => {
    return (
        <>
        <div className='bg-purple-200  p-8 ' id="skills">

            <h2 className='text-xl font-bold text-center p-3'>TECHNOLOGIES I&apos;VE USED</h2>
            
           
  <Carousel className='h-72 p-10' slideInterval={5000}>
    <div>
        <p className='text-center text-2xl p-8 font-serif'>Front End</p>
        <div className='flex justify-evenly gap-10'>
            <p ><FaHtml5 className='text-5xl font-bold text-orange-500'/><br/>HTML</p>
            <p><FaCss3Alt className='text-5xl font-bold text-blue-500'/><br/>CSS</p>
            <p><FaJs className='text-5xl font-bold text-amber-300'/><br/>JavaScript</p>
            <p><FaReact className='text-5xl font-bold text-sky-400'/><br/>React</p>
            <p><RiTailwindCssFill className='text-5xl font-bold text-blue-600'/><br/>Tailwind CSS</p>
            <p><FaBootstrap className='text-5xl  text-violet-700'/><br/>BootStrap</p>
        </div>
    </div>
    <div>
        <p className='text-center text-2xl p-8 font-serif' >Back End</p>
        <div className='flex justify-evenly gap-10'>
            <p><FaNodeJs className='text-5xl text-lime-500'/><br/>NodeJS</p>
            <p><span className='text-5xl '>es</span><br/><br/>ExpressJS</p>
            <p><SiMongodb className='text-5xl text-green-500'/><br/>MongoDB</p>
            <p><SiMongoose className='text-5xl text-red-800'/><br/>Mongoose</p>
            <p><SiProtonmail className='text-5xl text-teal-400'/><br/>NodeMailer</p>
            <p><IoSettings className='text-5xl text-indigo-500'/><br/>Restful API&apos;s</p>
        </div>
    </div>
    <div>
        <p className='text-center text-2xl p-8 font-serif'>Other</p>
        <div className='flex justify-evenly gap-10'>
            <p><ImGit className='text-5xl text-orange-600'/><br/>Git</p>
            <p><FaGithub className='text-5xl'/><br/>GitHub</p>
            <p><SiNetlify className='text-5xl text-teal-500'/><br/>Netlify</p>
            
            <p><VscVscode className='text-5xl text-sky-500'/><br/>VS Code</p>
        </div>
    </div>
  </Carousel>

     
  
 

        
            
            
        </div>
          
        </>
    );
};

export default Skills;