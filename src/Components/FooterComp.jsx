import React from 'react';
import { DiGithub } from 'react-icons/di';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';
import { SiMedium } from 'react-icons/si';

const FooterComp = () => {
    const year= new Date().getFullYear();
    return (
        <>
        <div className='p-10 bg-blue-400'>
        <div className=' flex justify-center gap-7'>
           
        <a href='https://github.com/Subhashinibalu' target='_blank'> <FaGithub  className='text-5xl'/></a>  
          <a href='https://www.linkedin.com/in/subhashini-balasubramanian-4426882b3/' target='_blank'>
          <FaLinkedin className='text-sky-700 text-5xl' />
          </a>
           <a href='https://medium.com/@subhashiniulk' target='_blank'><SiMedium className='text-5xl'/></a>
           
           
           </div>  
           <div className='flex flex-wrap justify-center gap-8 mt-4'>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact us</a>

           </div>
           <p className='text-center text-gray-800 mt-5'>&copy;{year} Subhashini || All Rights Reserved</p>
        </div>
         
        </>
    );
};

export default FooterComp;