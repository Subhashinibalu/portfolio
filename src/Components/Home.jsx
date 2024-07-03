import React from 'react';
import MyImg from '../assets/subha.png'
import Header from './Header';
import { Button } from 'flowbite-react';

const Home = () => {
    return (
        <>
               {/* ABOUT */}
       <div className='bg-blue-200'>
       <div className=' z-10 w-full p-4'>
            <Header/>
        </div>
       <div className='w-full  flex flex-wrap justify-center items-center   min-h-screen '>
            <div className=' w-full h-96 lg:flex justify-center items-center px-64'>
            <div className='w-1/2   '>
                
                <p className='text-4xl font-semibold text-center p-1'>Hi there! I&apos;m Subhashini</p>
                <p className='text-center text-xl p-1'>I&apos;m a Full Stack Wed Developer from Tamilnadu, India</p>
                <div className='flex justify-center gap-x-6 mt-4'>
                <Button>download cv</Button>
                <Button href='#about'>About</Button>
                </div>
            
            </div>
            <div className='w-1/3   flex justify-center md:visible'  >
                <img src={MyImg} className='lg:h-96 md:h-56  rounded-full hover:transform hover:translate-x-4 hover:translate-y-4  ' />
            </div>

            </div>
           
        </div>
        </div>
       
     


        
        </>
    );
};

export default Home;