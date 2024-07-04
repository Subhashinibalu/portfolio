import React from 'react';
import MyImg from '../assets/subha.png'

import { Button } from 'flowbite-react';

const Home = () => {
    return (
        <>
               {/* ABOUT */}
   
            <div className='  flex flex-row items-center md:justify-center  md:p-32'>
            <div className='w-full md:w-1/3 flex flex-col justify-center  md:mr-11  lg:mr-0  items-center md:items-start '>
                
                <h1 className='text-2xl  lg:text-4xl font-semibold md:text-start text-center '>Hi there!<br/> I&apos;m Subhashini
                <p className=' text-sm lg:text-xl p-1'>A Full Stack Web Developer from Tamilnadu.</p></h1><br/>
               
                <div className='flex gap-x-6 pb-3  '>
                <Button>download cv</Button>
                <Button href='#about' className=''>About</Button>
                </div>
            
            </div>
            <div className='w-full md:w-1/3 flex    md:justify-start justify-end '  >
                <img src={MyImg} className=' h-96  md:rounded-full ' />
            </div>

            </div>
           
       
       
     


        
        </>
    );
};

export default Home;