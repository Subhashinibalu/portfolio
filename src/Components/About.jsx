import React from 'react';
import AboutImg from '../assets/su.jpg'
import { Button } from 'flowbite-react';
import { BiArrowBack } from 'react-icons/bi';
const About = () => {
    return (
        <>
            <div className='bg-blue-100 p-24  ' id="about">
                
                <div className='flex flex-wrap justify-center  p-5 gap-x-10'>
                    <div className='  h-fit   hover:skew-x-3 ' >
                        
                    <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg?size=626&ext=jpg&ga=GA1.1.937687561.1710832007&semt=ais_user" className='h-72 mb-10 lg:mb-0 lg:h-60 rounded-full lg:rounded-md ' />
                    </div>
                    <div className='w-full lg:w-1/2 flex justify-center  items-center  p-1 -mt-4'>
                    <div>
                    <p className=' text-2xl text-center lg:text-start font-bold'>About me</p>
                    <hr/>
                    <p className='text-md m-2'>I am a passionate young developer, learned MERN stack development with GUVI.   
                        I have a strong understanding of front-end with good knowledge in back-end. 
                        I am a quick learner and a good team player with strong analytical skills,
                         and I am confident that I can be a valuable asset to any web development team.
                        </p>
                        <hr/>
                        <div className='flex  flex-wrap justify-between m-2 text-md'>
                            <p><span className='font-semibold'>Name</span><br/>Subhashini Balasubramanian</p>
                            <p><span className='font-semibold'>Education</span><br/>B.E - Electronics and Communication</p>
                            </div>
                            <div className='flex flex-wrap  justify-between m-2 text-md'>
                            <p><span className='font-semibold'>Experience</span><br/>Fresher</p>
                            <Button href='#skills' className='hover:rounded-full p-1 m-1 focus:ring-4' >SKILLS</Button>
                            </div>
                            
                    </div>
                 
                </div>
                    </div>
                    

            </div>
        </>
    );
};

export default About;