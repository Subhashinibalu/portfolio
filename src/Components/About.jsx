import React from 'react';
import AboutImg from '../assets/su.jpg'
import { Button } from 'flowbite-react';
import { BiArrowBack } from 'react-icons/bi';
const About = () => {
    return (
        <>
            <div className='bg-blue-100 p-24  ' id="about">
                
                <div className='flex flex-wrap justify-center p-5 gap-x-10'>
                    <div className='  h-fit rounded-md bg-blue-600 hover:skew-x-3' >
                        
                    <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg?size=626&ext=jpg&ga=GA1.1.937687561.1710832007&semt=ais_user" className=' h-60 rounded-md ' />
                    </div>
                    <div className=' w-1/2 flex justify-center items-center '>
                    <div className='   p-1 -mt-4'>
                    <p className='  text-2xl font-bold'>About me</p>
                    <hr/>
                    <p className='text-md m-2'>I am a passionate young developer, learned MERN stack development with GUVI.   
                        I have a strong understanding of front-end with good knowledge in back-end. 
                        I am a quick learner and a good team player with strong analytical skills,
                         and I am confident that I can be a valuable asset to any web development team.
                        </p>
                        <hr/>
                        <div className='flex justify-between m-2 text-md'>
                            <p><span className='font-semibold'>Name</span><br/>Subhashini Balasubramanian</p>
                            <p><span className='font-semibold'>Education</span><br/>B.E - Electronics and Communication</p>
                            </div>
                            <div className='flex justify-between m-2 text-md'>
                            <p><span className='font-semibold'>Experience</span><br/>Fresher</p>
                            <Button href='#skills' className='hover:rounded-full p-1 m-1 focus:ring-4' ><BiArrowBack className='mt-1'/>&nbsp;Skills</Button>
                            </div>
                            
                    </div>
                 
                </div>
                    </div>
                    

            </div>
        </>
    );
};

export default About;